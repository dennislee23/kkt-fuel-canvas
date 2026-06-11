/* fuelretail.kittykat.tech — "Ask the advisor" widget.
 *
 * Self-contained, framework-free. Drop one line before </body>:
 *   <script src="/advisor.js" defer></script>
 * Replicates the KKT main-site / retail advisor panel exactly (right-side
 * slide-over, header, suggestions, streaming answers, ⌘K / Esc), wired to
 * /api/advisor.php over SSE. No dependency on the canvas — survives a swap.
 */
(function () {
  'use strict';
  if (window.__kktFuelAdvisor) return;
  window.__kktFuelAdvisor = true;

  var ENDPOINT = '/api/advisor.php';
  var SUGGESTED = [
    'Where do we start if margin is read after the fact?',
    'How does Optimus fit the network economy?',
    "We have the data but it's not connected — what first?",
    'What does a two-week diagnostic look like?'
  ];

  // Panel CSS lifted verbatim from the main-site advisor, plus a launcher
  // pill and a fallback token block so it themes correctly on any host page.
  var CSS = `
  .kkt-advisor-trigger{display:inline-flex;align-items:center;gap:8px;vertical-align:middle;white-space:nowrap;
    background:transparent;border:1px solid var(--border);border-radius:3px;padding:7px 12px;margin-left:18px;
    font-family:var(--font-body);font-size:12px;color:var(--text-secondary);cursor:pointer;
    transition:border-color .15s ease,color .15s ease}
  .kkt-advisor-trigger:hover{border-color:var(--accent);color:var(--text-primary)}
  .kkt-advisor-trigger .kc{display:inline-flex;gap:2px}
  .kkt-advisor-trigger kbd{font-family:var(--font-mono);font-size:10px;background:var(--surface-alt);border:1px solid var(--border);border-radius:2px;padding:1px 4px;color:var(--text-secondary);line-height:1}
  .kkt-advisor-trigger.is-fixed{position:fixed;top:16px;right:18px;z-index:2147483000;background:var(--bg);margin:0}

  .kkt-advisor-backdrop{position:fixed;inset:0;background:rgba(26,20,16,.45);z-index:2147483001;animation:kkt-advisor-fade .18s ease both}
  .kkt-advisor-panel{position:fixed;top:0;right:0;bottom:0;width:min(520px,100vw);background:var(--bg);
    border-left:1px solid var(--border);box-shadow:-16px 0 48px rgba(0,0,0,.08);z-index:2147483002;display:flex;flex-direction:column;
    transform:translateX(100%);transition:transform .26s cubic-bezier(.32,.72,.32,1);visibility:hidden}
  .kkt-advisor-panel.is-open{transform:translateX(0);visibility:visible}
  .kkt-advisor-trigger,.kkt-advisor-backdrop,.kkt-advisor-panel{
    --bg:#F5F3EF;--surface:#FFFFFF;--surface-alt:#F0EDE8;--card:#FAFAF8;
    --border:rgba(30,24,16,.10);--border-hover:rgba(30,24,16,.20);
    --text-primary:#1A1410;--text-secondary:#5C5045;--text-muted:#756658;
    --accent:#AD7B25;--accent-text:#8A5E18;
    --font-display:'DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
    --font-body:'DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif;
    --font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace}
  .kkt-advisor-panel *{box-sizing:border-box}
  .kkt-advisor-header{display:flex;align-items:center;justify-content:space-between;padding:18px 24px 14px;border-bottom:1px solid var(--border)}
  .kkt-advisor-title{display:flex;align-items:baseline;gap:14px}
  .kkt-advisor-eyebrow{font-family:var(--font-display);font-weight:600;font-size:22px;color:var(--text-primary);line-height:1.1}
  .kkt-advisor-status{font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.12em;font-weight:600;display:inline-flex;align-items:center;gap:6px}
  .kkt-advisor-dot{width:6px;height:6px;border-radius:50%;background:var(--accent)}
  .kkt-advisor-close{background:transparent;border:1px solid var(--border);color:var(--text-secondary);width:32px;height:32px;border-radius:3px;font-size:22px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;transition:border-color .15s ease,color .15s ease}
  .kkt-advisor-close:hover{border-color:var(--border-hover);color:var(--text-primary)}
  .kkt-advisor-body{flex:1;overflow-y:auto;padding:24px}
  .kkt-advisor-empty h2{font-family:var(--font-display);font-weight:600;font-size:24px;color:var(--text-primary);margin:0 0 12px;line-height:1.2;max-width:22ch}
  .kkt-advisor-empty p{font-size:15px;color:var(--text-secondary);margin:0 0 20px;max-width:50ch;line-height:1.6}
  .kkt-advisor-suggestions{list-style:none;padding:0;margin:0;display:grid;gap:8px}
  .kkt-advisor-suggest{width:100%;text-align:left;background:var(--surface);border:1px solid var(--border);border-radius:3px;padding:12px 14px;font-family:var(--font-body);font-size:14px;color:var(--text-primary);cursor:pointer;transition:border-color .15s ease,background .15s ease}
  .kkt-advisor-suggest:hover{border-color:var(--border-hover);background:var(--surface-alt)}
  .kkt-advisor-messages{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:22px}
  .kkt-advisor-msg{display:flex;flex-direction:column;gap:6px}
  .kkt-advisor-msg-role{font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.12em;font-weight:600}
  .kkt-advisor-msg.role-user .kkt-advisor-msg-role{color:var(--accent-text)}
  .kkt-advisor-msg-content p{font-size:15px;color:var(--text-primary);line-height:1.65;margin:0 0 10px;max-width:56ch}
  .kkt-advisor-msg-content p:last-child{margin-bottom:0}
  .kkt-advisor-msg.role-user .kkt-advisor-msg-content p{color:var(--text-secondary)}
  .kkt-advisor-msg-content.thinking{display:inline-flex;align-items:center;gap:4px;padding:6px 0}
  .kkt-advisor-msg-content.thinking .dot{width:6px;height:6px;border-radius:50%;background:var(--text-muted);animation:kkt-advisor-blink 1.2s ease-in-out infinite}
  .kkt-advisor-msg-content.thinking .dot:nth-child(2){animation-delay:.2s}
  .kkt-advisor-msg-content.thinking .dot:nth-child(3){animation-delay:.4s}
  .kkt-advisor-form{border-top:1px solid var(--border);padding:14px 16px 12px;display:grid;grid-template-columns:1fr auto;gap:8px;align-items:end}
  .kkt-advisor-input{width:100%;background:var(--surface);border:1px solid var(--border);border-radius:3px;padding:10px 12px;font-family:var(--font-body);font-size:14px;line-height:1.5;color:var(--text-primary);resize:none;outline:none;transition:border-color .15s ease}
  .kkt-advisor-input:focus{border-color:var(--accent)}
  .kkt-advisor-send{background:var(--text-primary);color:#fff;border:none;border-radius:3px;padding:10px 18px;font-family:var(--font-body);font-size:13px;font-weight:600;letter-spacing:.02em;cursor:pointer;transition:opacity .15s ease}
  .kkt-advisor-send:hover{opacity:.85}
  .kkt-advisor-send:disabled{background:var(--border-hover);cursor:not-allowed;opacity:.6}
  .kkt-advisor-foot{padding:10px 16px 14px;border-top:1px solid var(--border)}
  .kkt-advisor-shortcut{font-size:11px;color:var(--text-muted)}
  .kkt-advisor-shortcut kbd{font-family:var(--font-mono);font-size:10px;background:var(--surface);border:1px solid var(--border);border-radius:2px;padding:1px 5px;color:var(--text-secondary)}
  @keyframes kkt-advisor-fade{from{opacity:0}to{opacity:1}}
  @keyframes kkt-advisor-blink{0%,80%,100%{opacity:.2;transform:scale(.8)}40%{opacity:1;transform:scale(1)}}
  @media (max-width:720px){.kkt-advisor-panel{width:100vw}.kkt-advisor-header{padding:16px 18px 12px}.kkt-advisor-body{padding:18px}.kkt-advisor-empty h2{font-size:22px}}
  `;

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function clean(t) {
    return (t || '').split('<<<META>>>')[0].replace(/\*\*(.+?)\*\*/g, '$1');
  }

  function init() {
    var style = el('style'); style.textContent = CSS; document.head.appendChild(style);

    var trigger = el('button', 'kkt-advisor-trigger');
    trigger.type = 'button';
    trigger.innerHTML = 'Ask the advisor <span class="kc"><kbd>⌘</kbd><kbd>K</kbd></span>';
    trigger.setAttribute('aria-label', 'Open advisor (Cmd+K)');

    var backdrop = el('div', 'kkt-advisor-backdrop'); backdrop.style.display = 'none';

    var panel = el('aside', 'kkt-advisor-panel');
    panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', 'KKT advisor');
    panel.innerHTML =
      '<header class="kkt-advisor-header"><div class="kkt-advisor-title">' +
        '<span class="kkt-advisor-eyebrow">Advisor</span>' +
        '<span class="kkt-advisor-status"><span class="kkt-advisor-dot"></span> Ask anything</span>' +
      '</div><button type="button" class="kkt-advisor-close" aria-label="Close advisor">&times;</button></header>' +
      '<div class="kkt-advisor-body"></div>' +
      '<form class="kkt-advisor-form">' +
        '<textarea class="kkt-advisor-input" rows="2" placeholder="Type a question. Enter to send." aria-label="Question to the advisor"></textarea>' +
        '<button type="submit" class="kkt-advisor-send" disabled>Send</button>' +
      '</form>' +
      '<footer class="kkt-advisor-foot"><span class="kkt-advisor-shortcut"><kbd>Esc</kbd> closes &middot; <kbd>⌘</kbd>+<kbd>K</kbd> toggles</span></footer>';

    document.body.appendChild(backdrop);
    document.body.appendChild(panel);

    // Place the trigger into the canvas header nav (next to its links), like
    // the kittykat.tech header. The canvas is React-rendered, so poll for it;
    // fall back to a fixed top-right pill if the nav never appears.
    function findNav() {
      var nodes = document.querySelectorAll('nav a, nav button, header a, a, button, span');
      for (var i = 0; i < nodes.length; i++) {
        var t = (nodes[i].textContent || '').trim();
        if (t === 'Контакты' || t === 'Contacts') return nodes[i].parentNode;
      }
      return null;
    }
    (function mountTrigger() {
      var tries = 0;
      (function place() {
        var nav = findNav();
        if (nav) { nav.appendChild(trigger); return; }
        if (++tries > 40) { trigger.classList.add('is-fixed'); document.body.appendChild(trigger); return; }
        setTimeout(place, 120);
      })();
    })();

    var body = panel.querySelector('.kkt-advisor-body');
    var form = panel.querySelector('.kkt-advisor-form');
    var input = panel.querySelector('.kkt-advisor-input');
    var sendBtn = panel.querySelector('.kkt-advisor-send');
    var closeBtn = panel.querySelector('.kkt-advisor-close');

    var open = false, thinking = false, hasMsgs = false, msgList = null;

    function renderEmpty() {
      body.innerHTML = '';
      var e = el('div', 'kkt-advisor-empty');
      e.innerHTML = "<h2>What's on your mind?</h2><p>Ask about your fuel network — procurement and margin, logistics, stations, customers, finance, or the data foundation. Plain business answers, not jargon.</p>";
      var ul = el('ul', 'kkt-advisor-suggestions');
      SUGGESTED.forEach(function (s) {
        var li = el('li'); var b = el('button', 'kkt-advisor-suggest', s);
        b.type = 'button'; b.onclick = function () { send(s); };
        li.appendChild(b); ul.appendChild(li);
      });
      e.appendChild(ul); body.appendChild(e);
    }
    function ensureList() {
      if (!hasMsgs) { body.innerHTML = ''; msgList = el('ol', 'kkt-advisor-messages'); body.appendChild(msgList); hasMsgs = true; }
    }
    function addMsg(role, text) {
      ensureList();
      var li = el('li', 'kkt-advisor-msg role-' + role);
      li.innerHTML = '<div class="kkt-advisor-msg-role">' + (role === 'user' ? 'You' : 'KKT') + '</div>';
      var c = el('div', 'kkt-advisor-msg-content'); li.appendChild(c);
      setContent(c, text);
      msgList.appendChild(li); body.scrollTop = body.scrollHeight;
      return c;
    }
    function setContent(c, text) {
      c.innerHTML = '';
      clean(text).split('\n\n').forEach(function (para) {
        if (para.trim() === '') return;
        var p = document.createElement('p'); p.textContent = para; c.appendChild(p);
      });
    }
    function thinkingBubble() {
      ensureList();
      var li = el('li', 'kkt-advisor-msg role-assistant');
      li.innerHTML = '<div class="kkt-advisor-msg-content thinking"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
      msgList.appendChild(li); body.scrollTop = body.scrollHeight;
      return li;
    }

    function openPanel() { open = true; panel.classList.add('is-open'); backdrop.style.display = ''; document.body.style.overflow = 'hidden'; if (!hasMsgs) renderEmpty(); setTimeout(function () { input.focus(); }, 80); }
    function closePanel() { open = false; panel.classList.remove('is-open'); backdrop.style.display = 'none'; document.body.style.overflow = ''; }
    trigger.onclick = openPanel; closeBtn.onclick = closePanel; backdrop.onclick = closePanel;

    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open ? closePanel() : openPanel(); }
      else if (e.key === 'Escape' && open) { e.preventDefault(); closePanel(); }
    });

    input.addEventListener('input', function () { sendBtn.disabled = !input.value.trim() || thinking; });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input.value); } });
    form.addEventListener('submit', function (e) { e.preventDefault(); send(input.value); });

    function send(text) {
      text = (text || '').trim();
      if (!text || thinking) return;
      addMsg('user', text);
      input.value = ''; sendBtn.disabled = true;
      thinking = true;
      var bubble = thinkingBubble();
      stream(text, bubble);
    }

    function stream(message, bubble) {
      var acc = '', content = null;
      fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: message, context: {} }) })
        .then(function (res) {
          if (!res.ok || !res.body) { return fail(bubble); }
          var reader = res.body.getReader(), dec = new TextDecoder(), buf = '';
          function pump() {
            return reader.read().then(function (r) {
              if (r.done) { done(); return; }
              buf += dec.decode(r.value, { stream: true });
              var i;
              while ((i = buf.indexOf('\n\n')) !== -1) {
                var frame = buf.slice(0, i); buf = buf.slice(i + 2);
                var line = frame.split('\n').find(function (l) { return l.indexOf('data:') === 0; });
                if (!line) continue;
                var d; try { d = JSON.parse(line.slice(5).trim()); } catch (e) { continue; }
                if (d.type === 'text' && typeof d.text === 'string') {
                  acc += d.text;
                  if (!content) { bubble.querySelector('.kkt-advisor-msg-content').className = 'kkt-advisor-msg-content'; content = bubble.querySelector('.kkt-advisor-msg-content'); }
                  setContent(content, acc); body.scrollTop = body.scrollHeight;
                } else if (d.type === 'done') { done(); return; }
              }
              return pump();
            });
          }
          return pump();
        }).catch(function () { fail(bubble); });

      function done() { thinking = false; sendBtn.disabled = !input.value.trim(); if (!acc.trim()) fail(bubble); }
      function fail(b) { thinking = false; sendBtn.disabled = !input.value.trim(); var c = b.querySelector('.kkt-advisor-msg-content'); c.className = 'kkt-advisor-msg-content'; c.innerHTML = '<p>The advisor is unavailable right now. Try again, or write hello@kittykat.tech.</p>'; }
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
