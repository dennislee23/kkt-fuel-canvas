/* fuelretail.kittykat.tech — floating "Ask the advisor" widget.
 *
 * Self-contained, framework-free. Drop one line before </body>:
 *   <script src="/advisor.js" defer></script>
 * It injects its own button, panel and styles, and streams answers from
 * /api/advisor.php over Server-Sent Events. No dependency on the canvas
 * itself — survives a canvas swap.
 */
(function () {
  'use strict';
  if (window.__kktFuelAdvisor) return;
  window.__kktFuelAdvisor = true;

  var ENDPOINT = '/api/advisor.php';
  var SUGGESTIONS = [
    'Where do we start if margin is read after the fact?',
    'How does Optimus fit the network economy?',
    'We have the data but it is not connected — what first?',
  ];

  var css = [
    '.kkt-adv-btn{position:fixed;right:20px;bottom:20px;z-index:2147483000;display:inline-flex;align-items:center;gap:8px;',
    'padding:12px 18px;border:none;border-radius:999px;background:#1A1410;color:#fff;font:600 14px/1 system-ui,-apple-system,"Segoe UI",sans-serif;',
    'cursor:pointer;box-shadow:0 6px 24px rgba(30,24,16,.22);transition:transform .15s ease,opacity .15s ease}',
    '.kkt-adv-btn:hover{transform:translateY(-1px)}',
    '.kkt-adv-btn .dot{width:8px;height:8px;border-radius:50%;background:#B8832A}',
    '.kkt-adv-panel{position:fixed;right:20px;bottom:20px;z-index:2147483001;width:min(400px,calc(100vw - 32px));',
    'max-height:min(620px,calc(100vh - 40px));display:none;flex-direction:column;background:#FFFFFF;border:1px solid rgba(30,24,16,.12);',
    'border-radius:12px;overflow:hidden;box-shadow:0 18px 50px rgba(30,24,16,.26);font-family:system-ui,-apple-system,"Segoe UI",sans-serif}',
    '.kkt-adv-panel.open{display:flex}',
    '.kkt-adv-head{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid rgba(30,24,16,.10);background:#FAFAF8}',
    '.kkt-adv-title{font:600 14px/1.2 inherit;color:#1A1410}',
    '.kkt-adv-sub{font:400 11px/1.3 inherit;color:#9C8E82;margin-top:2px}',
    '.kkt-adv-x{border:none;background:transparent;font-size:18px;line-height:1;color:#9C8E82;cursor:pointer;padding:4px}',
    '.kkt-adv-body{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px}',
    '.kkt-adv-msg{font:400 14px/1.55;max-width:90%;padding:10px 13px;border-radius:10px;white-space:pre-wrap;word-wrap:break-word}',
    '.kkt-adv-msg.user{align-self:flex-end;background:#1A1410;color:#fff;border-bottom-right-radius:3px}',
    '.kkt-adv-msg.bot{align-self:flex-start;background:#F0EDE8;color:#1A1410;border-bottom-left-radius:3px}',
    '.kkt-adv-sugs{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px}',
    '.kkt-adv-sug{font:500 12px/1.3 inherit;color:#5C5045;background:#fff;border:1px solid rgba(30,24,16,.14);border-radius:999px;padding:6px 11px;cursor:pointer;text-align:left}',
    '.kkt-adv-sug:hover{border-color:#B8832A;color:#1A1410}',
    '.kkt-adv-foot{display:flex;gap:8px;padding:12px;border-top:1px solid rgba(30,24,16,.10);background:#FAFAF8}',
    '.kkt-adv-in{flex:1;resize:none;border:1px solid rgba(30,24,16,.16);border-radius:8px;padding:9px 11px;font:400 14px/1.4 inherit;color:#1A1410;max-height:90px}',
    '.kkt-adv-in:focus{outline:none;border-color:#B8832A}',
    '.kkt-adv-send{border:none;background:#1A1410;color:#fff;border-radius:8px;padding:0 16px;font:600 13px/1 inherit;cursor:pointer}',
    '.kkt-adv-send:disabled{opacity:.45;cursor:default}',
    '.kkt-adv-cursor::after{content:"▍";color:#B8832A;animation:kktblink 1s steps(2) infinite}',
    '@keyframes kktblink{0%,50%{opacity:1}51%,100%{opacity:0}}'
  ].join('');

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function init() {
    var style = el('style'); style.textContent = css; document.head.appendChild(style);

    var btn = el('button', 'kkt-adv-btn');
    btn.innerHTML = '<span class="dot"></span> Ask the advisor';
    btn.setAttribute('aria-label', 'Open the fuel AI advisor');

    var panel = el('div', 'kkt-adv-panel');
    var head = el('div', 'kkt-adv-head');
    head.innerHTML = '<div><div class="kkt-adv-title">Fuel AI advisor</div>' +
      '<div class="kkt-adv-sub">Where data and AI pay back in your network</div></div>';
    var x = el('button', 'kkt-adv-x', '&times;'); x.setAttribute('aria-label', 'Close');
    head.appendChild(x);

    var body = el('div', 'kkt-adv-body');
    var intro = el('div', 'kkt-adv-msg bot',
      'Ask about your fuel network — procurement and margin, logistics, stations, customers, finance, or the data foundation. I answer in business terms, not jargon.');
    body.appendChild(intro);
    var sugs = el('div', 'kkt-adv-sugs');
    SUGGESTIONS.forEach(function (s) {
      var c = el('button', 'kkt-adv-sug', s);
      c.onclick = function () { send(s); };
      sugs.appendChild(c);
    });
    body.appendChild(sugs);

    var foot = el('div', 'kkt-adv-foot');
    var input = el('textarea', 'kkt-adv-in'); input.rows = 1;
    input.placeholder = 'Ask the advisor…';
    var sendBtn = el('button', 'kkt-adv-send', 'Send');
    foot.appendChild(input); foot.appendChild(sendBtn);

    panel.appendChild(head); panel.appendChild(body); panel.appendChild(foot);
    document.body.appendChild(btn); document.body.appendChild(panel);

    function open() { panel.classList.add('open'); btn.style.display = 'none'; input.focus(); }
    function close() { panel.classList.remove('open'); btn.style.display = ''; }
    btn.onclick = open; x.onclick = close;

    var busy = false;
    function setBusy(b) { busy = b; sendBtn.disabled = b; }

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input.value); }
    });
    sendBtn.onclick = function () { send(input.value); };

    function addMsg(cls, text) {
      var m = el('div', 'kkt-adv-msg ' + cls); m.textContent = text;
      body.appendChild(m); body.scrollTop = body.scrollHeight; return m;
    }

    function send(text) {
      text = (text || '').trim();
      if (!text || busy) return;
      if (sugs.parentNode) sugs.style.display = 'none';
      input.value = '';
      addMsg('user', text);
      var bot = addMsg('bot', ''); bot.classList.add('kkt-adv-cursor');
      setBusy(true);
      stream(text, bot);
    }

    function stream(message, bot) {
      var acc = '';
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message, context: {} })
      }).then(function (res) {
        if (!res.ok || !res.body) {
          return res.text().then(function () { fail(bot); });
        }
        var reader = res.body.getReader();
        var dec = new TextDecoder();
        var buf = '';
        function pump() {
          return reader.read().then(function (r) {
            if (r.done) { finish(bot, acc); return; }
            buf += dec.decode(r.value, { stream: true });
            var idx;
            while ((idx = buf.indexOf('\n\n')) !== -1) {
              var frame = buf.slice(0, idx); buf = buf.slice(idx + 2);
              var line = frame.split('\n').find(function (l) { return l.indexOf('data:') === 0; });
              if (!line) continue;
              var data; try { data = JSON.parse(line.slice(5).trim()); } catch (e) { continue; }
              if (data.type === 'text' && typeof data.text === 'string') {
                acc += data.text;
                // never render anything from a stray META marker
                var clean = acc.split('<<<META>>>')[0];
                bot.textContent = clean;
                body.scrollTop = body.scrollHeight;
              } else if (data.type === 'done') {
                finish(bot, acc); return;
              }
            }
            return pump();
          });
        }
        return pump();
      }).catch(function () { fail(bot); });
    }

    function finish(bot, acc) {
      bot.classList.remove('kkt-adv-cursor');
      var clean = (acc.split('<<<META>>>')[0] || '').trim();
      if (clean) bot.textContent = clean;
      else fail(bot);
      setBusy(false);
    }
    function fail(bot) {
      bot.classList.remove('kkt-adv-cursor');
      if (!bot.textContent) bot.textContent = 'The advisor is unavailable right now. Try again, or write hello@kittykat.tech.';
      setBusy(false);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
