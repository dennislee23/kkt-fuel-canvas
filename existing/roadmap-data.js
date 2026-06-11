// roadmap-data.js — Карта AI-трансформации топливного ритейла
// СБОРКА ПО БЛОКАМ. Сейчас собраны: блоки A, B, C, D, E, F, G.
// Текст карточек перенесён ДОСЛОВНО из Catalog_Prose_*.md.
// Структура — по Fuel_Retail_Catalog_MASTER.md. typicalImpact удалён (5 полей).
// BUILD-NOTE из прозы НЕ переносятся в UI (служебные, для логики связей).

/* ─── EXECUTIVE INTRO (входной разворот всего каталога) ───────────── */
/* Пока не рендерится в виде эталона блока A — заложен для общей сборки. */
window.FUEL_INTRO = {
 "f4-loyalty-card-fraud": {
 "businessPressure": "Две точки злоупотреблений существуют параллельно: программа лояльности B2C и топливные карты/талоны B2B. Накрутка баллов, фиктивные начисления, сговор кассира с «клиентом», заправки вне графика и географии, слив в канистры — всё это теряется в потоке нормальных транзакций и всплывает на годовом аудите.",
 "whatWePutInPlace": "Детектируем аномалии в двух контурах: начисления/списания баллов (подозрительные связки «кассир — клиент», мультиаккаунты, накрутки) и транзакции по картам/талонам (отклонения по времени, объёму, географии и частоте). Подозрительное подсвечивается сразу, а не всплывает в убытках.",
 "whatImproves": "Утечка бонусов перекрыта; программа лояльности работает на клиентов, а не на схемы; злоупотребления и слив по B2B-картам и талонам видны рано.",
 "dataAiBehind": "Детекция аномалий на транзакциях лояльности и флит-карт/талонов — данные уже собираются в обоих контурах.",
 "conversationQuestions": [
 "Знаете ли вы, какая доля бонусов уходит через накрутки и схемы?",
 "Видите ли вы заправки вне графика, объёмов и географии по картам и талонам?",
 "Как быстро аномалии в лояльности и картах становятся видны — до аудита или после?"
 ]
 },

 "paragraphs": [
 "У независимой топливной сети данные уже есть — ERP, касса, лояльность, GPS, нефтебазы, BI, Excel. Чего обычно нет — это связности: управление держится на людях, звонках, ручных сверках и опыте отдельных руководителей, а накопленные данные не работают на решения.",
 "Эта карта показывает, где AI и данные дают практический эффект в топливном ритейле — по всей экономике сети: закупка и маржа, логистика, станции и магазины, клиенты, финансы и контроль. Не списком технологий, а через задачи бизнеса и то, что их решение даёт.",
 "Позиция простая: ИИ-агенты не ставятся поверх хаоса. Они становятся полезны, когда под ними построены данные, правила, прогнозы и контуры контроля. Поэтому путь в каждом блоке идёт снизу вверх — от видимости и контроля сейчас, через прогноз и оптимизацию, к решениям под управлением ИИ. Начать можно с малого и на имеющихся данных; фундамент достраивается по мере того, как сеть поднимается по этому пути."
 ]
};

/* ─── БЛОКИ (порядок = по деньгам, G последним) ───────────────────── */
window.FUEL_BLOCKS = [
 {
 "id": "a-fuel-commercial",
 "code": "A",
 "title": "Топливо: закупка, цена и маржа",
 "tagline": "Топливо: закупка, цена и маржа",
 // Хребет — ДОСЛОВНО из прозы (Catalog_Prose_A, шапка файла). Финальная версия.
 "spine": "Помогаем управлять закупкой и ценой как единым коммерческим контуром: прогнозировать потребность, выбирать поставщика и момент закупки, учитывать полную стоимость партии и управлять ценой на стеле с учетом рынка и спроса. Фокус — меньше дефицита и излишков, ниже переплаты, лучше маржа и быстрее коммерческие решения."
 },
 {
 "id": "b-logistics",
 "code": "B",
 "title": "Логистика и поставка топлива",
 "tagline": "Логистика и поставка топлива",
 "spine": "Помогаем сделать поставку топлива управляемой end-to-end: видеть движение партии, риски задержек, расхождения при приемке, вагоны и демередж, операции нефтебазы, доставку на АЗС и исполнение рейсов. Фокус — меньше потерь, простоев, штрафов и ручного диспетчирования."
 },
 {
 "id": "c-stations-stores",
 "code": "C",
 "title": "АЗС, магазины и кафе",
 "tagline": "АЗС, магазины и кафе",
 "spine": "Помогаем управлять станцией как точкой прибыли, а не только как операционным объектом: видеть недоработку АЗС, очереди и потерянный трафик, нарушения на ТРК и кассе, работу смены, оборудование, ассортимент, списания и конверсию в магазин. Фокус — меньше операционных потерь, выше выручка станции и лучше клиентский опыт."
 },
 {
 "id": "d-customers-loyalty",
 "code": "D",
 "title": "Клиенты, лояльность и B2B",
 "tagline": "Клиенты, лояльность и B2B",
 "spine": "Помогаем превращать клиентскую базу и B2B-портфель в управляемый источник роста: понимать ценность клиентов, предотвращать отток, повышать частоту и чек, управлять промо, работать с отзывами, развивать retail media и управлять прибыльностью корпоративных клиентов. Фокус — выше удержание, больше маржа с клиента, меньше скидок впустую и сильнее программа лояльности."
 },
 {
 "id": "e-finance-control",
 "code": "E",
 "title": "Финансы, деньги и контроль",
 "tagline": "Финансы, деньги и контроль",
 "spine": "Помогаем финансам видеть бизнес в живой картине и быстрее находить причины отклонений: маржа, затраты, кэш, дебиторка, платежные риски, финансовые потери и нарушения политик становятся видимыми до того, как превращаются в проблему. Фокус — быстрее управленческие решения, меньше утечек, лучше контроль денег и доверие к цифрам."
 },
 {
 "id": "f-support-functions",
 "code": "F",
 "title": "Поддерживающие функции",
 "tagline": "Поддерживающие функции",
 "spine": "Помогаем снять рутину и усилить контроль в функциях, которые поддерживают бизнес: HR, юридическая функция, закупки МТО, подрядчики, внутренний контроль, документы и бэкофис. Фокус — меньше ручной работы, быстрее процессы, прозрачнее расходы и нарушения видны до аудита, а не после."
 },
 {
 "id": "g-data-foundation",
 "code": "G",
 "title": "Данные и процессы",
 "tagline": "Данные и процессы",
 "spine": "Помогаем создать фундамент, на котором работают аналитика, автоматизация и ИИ: единая основа данных, качество и доступность информации, отчетность, поиск по знаниям, офисные ИИ-инструменты, реинжиниринг процессов и агентские решения. Фокус — одна версия правды, меньше ручного труда и возможность масштабировать ИИ не точечно, а системно."
 }
];

/* ─── ПОД-БЛОКИ (у блока A их нет) ────────────────────────────────── */
window.FUEL_SUBBLOCKS = [
 {
 "id": "b1-external-logistics",
 "code": "B1",
 "blockId": "b-logistics",
 "title": "Внешняя логистика",
 "sequence": 1
 },
 {
 "id": "b2-terminal-base",
 "code": "B2",
 "blockId": "b-logistics",
 "title": "Нефтебаза / терминал",
 "sequence": 2
 },
 {
 "id": "b3-internal-logistics",
 "code": "B3",
 "blockId": "b-logistics",
 "title": "Внутренняя логистика",
 "sequence": 3
 },
 {
 "id": "c1-station-operations",
 "code": "C1",
 "blockId": "c-stations-stores",
 "title": "Операции АЗС",
 "sequence": 1
 },
 {
 "id": "c2-shop-cafe",
 "code": "C2",
 "blockId": "c-stations-stores",
 "title": "Магазин и кафе",
 "sequence": 2
 },
 {
 "id": "d1-b2c",
 "code": "D1",
 "blockId": "d-customers-loyalty",
 "title": "B2C",
 "sequence": 1
 },
 {
 "id": "d2-b2b-fleet",
 "code": "D2",
 "blockId": "d-customers-loyalty",
 "title": "B2B / флит",
 "sequence": 2
 },
 {
 "id": "f1-hr-personnel",
 "code": "F1",
 "blockId": "f-support-functions",
 "title": "HR и персонал",
 "sequence": 1
 },
 {
 "id": "f2-legal",
 "code": "F2",
 "blockId": "f-support-functions",
 "title": "Юридическая функция",
 "sequence": 2
 },
 {
 "id": "f3-mts-procurement",
 "code": "F3",
 "blockId": "f-support-functions",
 "title": "Закупки МТО и подрядчики",
 "sequence": 3
 },
 {
 "id": "f4-control-audit-risks",
 "code": "F4",
 "blockId": "f-support-functions",
 "title": "Внутренний контроль, потери и риски",
 "sequence": 4
 },
 {
 "id": "f5-document-processing",
 "code": "F5",
 "blockId": "f-support-functions",
 "title": "Документы и бэкофис",
 "sequence": 5
 },
 {
 "id": "g1-data-foundation",
 "code": "G1",
 "blockId": "g-data-foundation",
 "title": "Фундамент данных",
 "sequence": 1
 },
 {
 "id": "g2-ai-tools-knowledge",
 "code": "G2",
 "blockId": "g-data-foundation",
 "title": "Рабочие ИИ-инструменты и знания",
 "sequence": 2
 }
];

/* ─── ПРОБЛЕМАТИКИ (строки сетки: заголовок-боль + строка-боль) ───── */
window.FUEL_PROBLEMS = [
 {
 "id": "a1",
 "code": "A1",
 "blockId": "a-fuel-commercial",
 "subBlockId": null,
 "title": "Закупать топливо в нужном объёме и в нужный момент",
 "painLine": "Заказы под реальную потребность: меньше дефицита и излишков, меньше замороженного капитала.",
 "sequence": 1
 },
 {
 "id": "a2",
 "code": "A2",
 "blockId": "a-fuel-commercial",
 "subBlockId": null,
 "title": "Выбирать поставщика и условия закупки",
 "painLine": "Прозрачное сравнение цены, сроков и условий; закупка в выгодный ценовой момент.",
 "sequence": 2
 },
 {
 "id": "a3",
 "code": "A3",
 "blockId": "a-fuel-commercial",
 "subBlockId": null,
 "title": "Учитывать полную стоимость партии в закупке",
 "painLine": "Логистика, демередж, простой, таможня и штрафы учитываются в экономике партии до закупочного решения, а не всплывают постфактум",
 "sequence": 3
 },
 {
 "id": "a4",
 "code": "A4",
 "blockId": "a-fuel-commercial",
 "subBlockId": null,
 "title": "Управлять ценой с учётом рынка и спроса",
 "painLine": "Цена меняется по данным и вовремя, а не с опозданием к рынку.",
 "sequence": 4
 },
 {
 "id": "b1-1",
 "code": "B1.1",
 "blockId": "b-logistics",
 "subBlockId": "b1-external-logistics",
 "title": "Контролировать движение поставки и риски задержки",
 "painLine": "Прогноз прибытия и ранний сигнал о задержке — чтобы успеть среагировать.",
 "sequence": 1
 },
 {
 "id": "b1-2",
 "code": "B1.2",
 "blockId": "b-logistics",
 "subBlockId": "b1-external-logistics",
 "title": "Находить, где теряем на расхождениях поставки",
 "painLine": "Заказано, отгружено, принято — где недостача, потеря или манипуляция.",
 "sequence": 2
 },
 {
 "id": "b1-3",
 "code": "B1.3",
 "blockId": "b-logistics",
 "subBlockId": "b1-external-logistics",
 "title": "Контролировать вагоны и демередж",
 "painLine": "Простой вагонов, разгрузка, оборот — демередж и штрафы под контролем, а не счётом постфактум.",
 "sequence": 3
 },
 {
 "id": "b2-1",
 "code": "B2.1",
 "blockId": "b-logistics",
 "subBlockId": "b2-terminal-base",
 "title": "Контролировать слив/налив и технологические потери",
 "painLine": "Акты слива/налива, фактические объёмы, температурные поправки и естественная убыль контролируются, а не списываются постфактум",
 "sequence": 4
 },
 {
 "id": "b2-2",
 "code": "B2.2",
 "blockId": "b-logistics",
 "subBlockId": "b2-terminal-base",
 "title": "Контролировать качество и использование резервуаров на НБ",
 "painLine": "Распределение топлива по РВС, контроль качества, нормативы хранения.",
 "sequence": 5
 },
 {
 "id": "b3-1",
 "code": "B3.1",
 "blockId": "b-logistics",
 "subBlockId": "b3-internal-logistics",
 "title": "Планировать доставку топлива на АЗС",
 "painLine": "Какой вид ГСМ, на какие АЗС, с каких нефтебаз и в каком объеме везем",
 "sequence": 6
 },
 {
 "id": "b3-2",
 "code": "B3.2",
 "blockId": "b-logistics",
 "subBlockId": "b3-internal-logistics",
 "title": "Маршрутизация и исполнение рейса",
 "painLine": "Лучший маршрут, нужный бензовоз и водитель, отслеживание в пути.",
 "sequence": 7
 },
 {
 "id": "b3-3",
 "code": "B3.3",
 "blockId": "b-logistics",
 "subBlockId": "b3-internal-logistics",
 "title": "Учёт и контроль рейсов",
 "painLine": "План-факт по рейсам, анализ отклонений, махинации, контроль безопасности водителя по камерам.",
 "sequence": 8
 },
 {
 "id": "c1-1",
 "code": "C1.1",
 "blockId": "c-stations-stores",
 "subBlockId": "c1-station-operations",
 "title": "Понимать, почему станция недорабатывает",
 "painLine": "Не просто цифры по АЗС, а причина: где станция недобирает потенциал и что с этим делать.",
 "sequence": 1
 },
 {
 "id": "c1-2",
 "code": "C1.2",
 "blockId": "c-stations-stores",
 "subBlockId": "c1-station-operations",
 "title": "Не терять продажи на очередях и трафике",
 "painLine": "Сколько клиентов уезжает из-за очереди и кто заехал и не заправился.",
 "sequence": 2
 },
 {
 "id": "c1-3",
 "code": "C1.3",
 "blockId": "c-stations-stores",
 "subBlockId": "c1-station-operations",
 "title": "Прекратить потери на ТРК и кассе",
 "painLine": "Виртуальные заправки, недолив, ручные коррекции чеков, сговор — под автоматическим контролем.",
 "sequence": 3
 },
 {
 "id": "c1-4",
 "code": "C1.4",
 "blockId": "c-stations-stores",
 "subBlockId": "c1-station-operations",
 "title": "Контролировать персонал, стандарты и сервис",
 "painLine": "План-факт по сменам, соблюдение стандартов и безопасности — без ручных проверок.",
 "sequence": 4
 },
 {
 "id": "c1-5",
 "code": "C1.5",
 "blockId": "c-stations-stores",
 "subBlockId": "c1-station-operations",
 "title": "Держать оборудование АЗС в строю",
 "painLine": "Простой ТРК, холодильника, кофемашины предупреждаем, а не реагируем по факту.",
 "sequence": 5
 },
 {
 "id": "c2-1",
 "code": "C2.1",
 "blockId": "c-stations-stores",
 "subBlockId": "c2-shop-cafe",
 "title": "Превращать топливный трафик в покупки магазина",
 "painLine": "Выше конверсия «заправка → магазин → кофе», выше нетопливный чек.",
 "sequence": 6
 },
 {
 "id": "c2-2",
 "code": "C2.2",
 "blockId": "c-stations-stores",
 "subBlockId": "c2-shop-cafe",
 "title": "Держать правильный ассортимент под каждую станцию",
 "painLine": "Что и сколько возить на конкретную АЗС — по спросу, а не по шаблону.",
 "sequence": 7
 },
 {
 "id": "c2-3",
 "code": "C2.3",
 "blockId": "c-stations-stores",
 "subBlockId": "c2-shop-cafe",
 "title": "Сократить списания и пустые полки",
 "painLine": "Фреш и скоропорт уценяем вовремя, полки не пустуют и не портятся.",
 "sequence": 8
 },
 {
 "id": "c2-4",
 "code": "C2.4",
 "blockId": "c-stations-stores",
 "subBlockId": "c2-shop-cafe",
 "title": "Использовать трафик станции для retail media",
 "painLine": "Физический трафик АЗС становится входом в retail media-продукт.",
 "sequence": 9
 },
 {
 "id": "d1-1",
 "code": "D1.1",
 "blockId": "d-customers-loyalty",
 "subBlockId": "d1-b2c",
 "title": "Понимать клиента и его экономику",
 "painLine": "Кто наши клиенты, как себя ведут и сколько стоят.",
 "sequence": 1
 },
 {
 "id": "d1-2",
 "code": "D1.2",
 "blockId": "d-customers-loyalty",
 "subBlockId": "d1-b2c",
 "title": "Удерживать клиента и предотвращать отток",
 "painLine": "Меньше тихих уходов, выше доля стабильных клиентов.",
 "sequence": 2
 },
 {
 "id": "d1-3",
 "code": "D1.3",
 "blockId": "d-customers-loyalty",
 "subBlockId": "d1-b2c",
 "title": "Повышать частоту, чек и долю нетопливных покупок",
 "painLine": "Больше визитов, выше чек, конверсия «заправка → магазин».",
 "sequence": 3
 },
 {
 "id": "d1-4",
 "code": "D1.4",
 "blockId": "d-customers-loyalty",
 "subBlockId": "d1-b2c",
 "title": "Управлять промо и измерять их эффективность",
 "painLine": "Скидки идут тем, кто меняет поведение, а не всем подряд.",
 "sequence": 4
 },
 {
 "id": "d1-5",
 "code": "D1.5",
 "blockId": "d-customers-loyalty",
 "subBlockId": "d1-b2c",
 "title": "Работать с отзывами и голосом клиента",
 "painLine": "Слышим причины недовольства и реагируем быстро.",
 "sequence": 5
 },

 {
 "id": "d1-7",
 "code": "D1.7",
 "blockId": "d-customers-loyalty",
 "subBlockId": "d1-b2c",
 "title": "Монетизировать трафик за пределами продаж",
 "painLine": "Клиентский поток приносит деньги напрямую.",
 "sequence": 7
 },
 {
 "id": "d2-1",
 "code": "D2.1",
 "blockId": "d-customers-loyalty",
 "subBlockId": "d2-b2b-fleet",
 "title": "Управлять прибыльностью B2B-портфеля",
 "painLine": "Видим, какие корпоративные клиенты зарабатывают, а какие едят маржу.",
 "sequence": 8
 },
 {
 "id": "d2-2",
 "code": "D2.2",
 "blockId": "d-customers-loyalty",
 "subBlockId": "d2-b2b-fleet",
 "title": "Удерживать B2B и прогнозировать непродление",
 "painLine": "Меньше тихих уходов корпоративных клиентов.",
 "sequence": 9
 },


 {
 "id": "e1",
 "code": "E1",
 "blockId": "e-finance-control",
 "subBlockId": null,
 "title": "Видеть финансовую картину здесь и сейчас",
 "painLine": "Маржа по станции, региону, продукту — ответ на вопрос руководителя сразу, а не выгрузка к утру.",
 "sequence": 1
 },
 {
 "id": "e2",
 "code": "E2",
 "blockId": "e-finance-control",
 "subBlockId": null,
 "title": "Понимать причины отклонений, а не только факт",
 "painLine": "Почему просела маржа или выросли затраты — и что с этим делать.",
 "sequence": 2
 },
 {
 "id": "e3",
 "code": "E3",
 "blockId": "e-finance-control",
 "subBlockId": null,
 "title": "Предвидеть кэш и кассовые разрывы",
 "painLine": "Знаем заранее, где и когда не хватит денег.",
 "sequence": 3
 },
 {
 "id": "e5",
 "code": "E5",
 "blockId": "e-finance-control",
 "subBlockId": null,
 "title": "Выявлять потери и нестыковки в финансах",
 "painLine": "Фиктивные контрагенты, дубли, отклонения от политик — видны, а не всплывают на аудите.",
 "sequence": 5
 },

 /* F1 — HR и персонал */

 /* F1 — HR и персонал */
 {
 "id": "f1",
 "code": "F1",
 "blockId": "f-support-functions",
 "subBlockId": "f1-hr-personnel",
 "title": "HR и персонал",
 "painLine": "Подбор, онбординг, контроль полевых сотрудников и удержание держатся на ручной работе там, где давно могла работать автоматика.",
 "sequence": 1
 },
 /* F2 — Юридическое */
 {
 "id": "f2",
 "code": "F2",
 "blockId": "f-support-functions",
 "subBlockId": "f2-legal",
 "title": "Юридическая функция",
 "painLine": "Помощь в решении различных юридических задач",
 "sequence": 2
 },
 /* F3 — Закупки МТО и подрядчики */
 {
 "id": "f3",
 "code": "F3",
 "blockId": "f-support-functions",
 "subBlockId": "f3-mts-procurement",
 "title": "Закупки МТО и подрядчики",
 "painLine": "Расходы на материалы и услуги подрядчиков растут незаметно, переплаты скрыты в потоке мелких закупок.",
 "sequence": 3
 },
 /* F4 — Внутренний контроль, потери и риски */
 {
 "id": "f4",
 "code": "F4",
 "blockId": "f-support-functions",
 "subBlockId": "f4-control-audit-risks",
 "title": "Внутренний контроль, потери и риски",
 "painLine": "Потери, исключения и нарушения правил разбросаны по системам — единой картины риска нет.",
 "sequence": 4
 },
 /* F5 — Обработка документов и первички */
 {
 "id": "f5",
 "code": "F5",
 "blockId": "f-support-functions",
 "subBlockId": "f5-document-processing",
 "title": "Документы и бэкофис",
 "painLine": "Накладные, акты, счета и ТТН вводятся вручную — ошибки первички всплывают поздно.",
 "sequence": 5
 },

 {
 "id": "g1-1",
 "code": "G1.1",
 "blockId": "g-data-foundation",
 "subBlockId": "g1-data-foundation",
 "title": "Одна правда вместо разных цифр в каждом отделе",
 "painLine": "Цифры по продажам, запасам, финансам, клиентам считаются одинаково всеми подразделениями",
 "sequence": 1
 },

 {
 "id": "g2-1",
 "code": "G2.1",
 "blockId": "g-data-foundation",
 "subBlockId": "g2-ai-tools-knowledge",
 "title": "Находить ответы в знаниях компании",
 "painLine": "Регламент, инструкция, прошлое решение находится по смыслу, а не звонком тому, кто помнит.",
 "sequence": 3
 },

 {
 "id": "g2-3",
 "code": "G2.3",
 "blockId": "g-data-foundation",
 "subBlockId": "g2-ai-tools-knowledge",
 "title": "Снять рутину с команды",
 "painLine": "Встречи, задачи, переписка, календарь, отчёты — ИИ берёт на себя механическую часть.",
 "sequence": 5
 },


 ];

/* ─── ЭТАПЫ (Essential / Advanced / Frontier) ─────────────────────── */
/* Описания — дословно из мастера (раздел 2). Этап = очерёдность, не сложность. */
window.FUEL_STAGES = [
 {
 "id": 1,
 "name": "Базовые решения",
 "description": "Можно запустить быстро на имеющихся данных. Дают понятный эффект без большой перестройки процессов."
 },
 {
 "id": 2,
 "name": "Продвинутые решения",
 "description": "Требуют более зрелых данных, интеграций и моделей. Дают больший эффект за счет оптимизации решений и процессов."
 },
 {
 "id": 3,
 "name": "Агентские и системные решения",
 "description": "Сквозные решения и ИИ-агенты, которые работают поверх выстроенного фундамента. Человек задает правила и контролирует результат."
 }
];

/* ─── КАРТОЧКИ ─────────────────────────────────────────────────────
 Теги: cost ($–$$$$) · scale (Quick Win / Scoped Project / Major Program)
 · impact (1 из 4). lock — текст предусловия (дословно из прозы), null если нет.
 flowsTo — карточка(и), которые ЭТА открывает (предусловие → запертая).
 ────────────────────────────────────────────────────────────────── */
window.FUEL_CARDS = [
 /* A1 — Закупать топливо в нужном объёме и в нужный момент */
 {
 "id": "a1-stock-need-view",
 "problemId": "a1",
 "blockId": "a-fuel-commercial",
 "title": "Видеть потребность и остатки в одной картине",
 "shortDescription": "Сколько нужно и сколько уже есть — чтобы не заказывать вслепую.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$",
 "scale": "Быстрый эффект",
 "impact": "Повышение производительности",
 "lock": null,
 "flowsTo": ["a1-smart-buying", "a1-buying-agent"]
 },
 {
 "id": "a1-demand-forecast",
 "problemId": "a1",
 "blockId": "a-fuel-commercial",
 "title": "Прогноз спроса по станциям и базам",
 "shortDescription": "Сколько уйдёт — с учётом сезона, погоды и событий.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": null,
 "flowsTo": ["a1-smart-buying", "a1-buying-agent"]
 },
 {
 "id": "a1-smart-buying",
 "problemId": "a1",
 "blockId": "a-fuel-commercial",
 "title": "Умная закупка: сколько, когда и почём брать",
 "shortDescription": "Готовое решение под задачу момента — дешевле взять, меньше заморозить или подстраховаться.",
 "stage": 2,
 "sequence": 2,
 "cost": "$$$",
 "scale": "Системная программа",
 "impact": "Сокращение затрат",
 "lock": "прогноз спроса + остатки в одной картине",
 "flowsTo": []
 },
 {
 "id": "a1-buying-agent",
 "problemId": "a1",
 "blockId": "a-fuel-commercial",
 "title": "Закупочный агент под контролем оператора",
 "shortDescription": "Система готовит заявку по правилам, человек утверждает.",
 "stage": 3,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Системная программа",
 "impact": "Повышение производительности",
 "lock": "прогноз спроса + остатки в одном месте + фундамент",
 "flowsTo": []
 },

 /* A2 — Выбирать поставщика и условия закупки */
 {
 "id": "a2-compare-suppliers",
 "problemId": "a2",
 "blockId": "a-fuel-commercial",
 "title": "Сравнивать поставщиков по цене, срокам и условиям",
 "shortDescription": "Цена, сроки, отсрочка и надёжность в одной картине — выбор по сути, а не по привычке.",
 "stage": 1,
 "sequence": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Сокращение затрат",
 "lock": null,
 "flowsTo": ["a2-buy-timing"]
 },
 {
 "id": "a2-buy-timing",
 "problemId": "a2",
 "blockId": "a-fuel-commercial",
 "title": "Выбирать лучший момент закупки",
 "shortDescription": "Видеть, куда движется закупочная цена, и закупаться в удачный момент.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "сравнение поставщиков и цен налажено",
 "flowsTo": []
 },

 /* A3 — Учитывать полную стоимость партии в закупке */
 {
 "id": "a3-landed-cost",
 "problemId": "a3",
 "blockId": "a-fuel-commercial",
 "title": "Знать, во что партия обошлась на самом деле",
 "shortDescription": "Цена плюс логистика, демередж, простои, таможня и штрафы — в одной цифре.",
 "stage": 1,
 "sequence": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Сокращение затрат",
 "lock": null,
 "flowsTo": ["a3-cost-risk-early"]
 },
 {
 "id": "a3-cost-risk-early",
 "problemId": "a3",
 "blockId": "a-fuel-commercial",
 "title": "Заранее видеть, где партия дорожает",
 "shortDescription": "Риск простоя, штрафа или задержки — до того, как он лёг в себестоимость.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "полная стоимость партии считается",
 "flowsTo": []
 },

 /* A4 — Держать цену острой и реагировать на конкурентов */
 {
 "id": "a4-price-vs-competitors",
 "problemId": "a4",
 "blockId": "a-fuel-commercial",
 "title": "Видеть свою цену против конкурентов",
 "shortDescription": "Цены рынка рядом со своими — чтобы не отставать вслепую.",
 "stage": 1,
 "sequence": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Скорость и качество решений",
 "lock": null,
 "flowsTo": ["a4-price-headroom", "a4-dynamic-pricing"]
 },
 {
 "id": "a4-price-headroom",
 "problemId": "a4",
 "blockId": "a-fuel-commercial",
 "title": "Понять, где можно поднять цену без потери клиентов",
 "shortDescription": "Где есть запас по цене, а где она гонит клиента к конкуренту.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": "свою цену против конкурентов видно",
 "flowsTo": ["a4-dynamic-pricing"]
 },
 {
 "id": "a4-dynamic-pricing",
 "problemId": "a4",
 "blockId": "a-fuel-commercial",
 "title": "Динамическое ценообразование",
 "shortDescription": "Цена подстраивается под спрос, конкурентов и время сама, под контролем правил.",
 "stage": 3,
 "sequence": 1,
 "cost": "$$$$",
 "scale": "Системная программа",
 "impact": "Рост выручки",
 "lock": "ценовая чувствительность + мониторинг конкурентов + фундамент",
 "flowsTo": []
 },

 /* C — Stations & Stores */
 /* B — Logistics */
 {
 "id": "b1-1-delivery-status-view",
 "problemId": "b1-1",
 "blockId": "b-logistics",
 "title": "Видеть, где партия и когда придёт",
 "shortDescription": "Статус поставок в одной картине, а не звонками.",
 "stage": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Скорость и качество решений",
 "lock": null,
 "sequence": 1,
 "flowsTo": [
 "b1-1-delay-warning"
 ]
 },
 {
 "id": "b1-1-delay-warning",
 "problemId": "b1-1",
 "blockId": "b-logistics",
 "title": "Узнать о риске задержки заранее",
 "shortDescription": "Увидеть срыв до того, как он произошёл.",
 "stage": 2,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "статус поставок виден",
 "sequence": 2,
 "flowsTo": []
 },
 {
 "id": "b1-2-acceptance-shortage",
 "problemId": "b1-2",
 "blockId": "b-logistics",
 "title": "Поймать недостачу на приёмке",
 "shortDescription": "Сверить заказано / отгружено / принято.",
 "stage": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Сокращение затрат",
 "lock": null,
 "sequence": 1,
 "flowsTo": [
 "b1-2-systemic-loss"
 ]
 },
 {
 "id": "b1-2-systemic-loss",
 "problemId": "b1-2",
 "blockId": "b-logistics",
 "title": "Понять, где теряем системно",
 "shortDescription": "Отличить разовую погрешность от регулярной утечки по поставщику или маршруту.",
 "stage": 2,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "сверка приёмки налажена",
 "sequence": 2,
 "flowsTo": []
 },
 {
 "id": "b1-3-wagon-status-view",
 "problemId": "b1-3",
 "blockId": "b-logistics",
 "title": "Видеть простой и статус вагонов",
 "shortDescription": "Где вагон, сколько стоит, сколько осталось до штрафа и кто должен реагировать.",
 "stage": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": null,
 "sequence": 1,
 "flowsTo": ["b1-3-demurrage-control"]
 },
 {
 "id": "b1-3-demurrage-control",
 "problemId": "b1-3",
 "blockId": "b-logistics",
 "title": "Сократить демередж и простой вагонов",
 "shortDescription": "Видеть, какие вагоны подходят к штрафу и где затык на разгрузке — до счёта.",
 "stage": 2,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "статус вагонов и простоев виден",
 "sequence": 2,
 "flowsTo": []
 },
 {
 "id": "b2-1-drain-fill-reconciliation",
 "problemId": "b2-1",
 "blockId": "b-logistics",
 "title": "Сверить акт слива/налива с фактическим объёмом",
 "shortDescription": "Расхождения между актом операции и фактическим объёмом видны сразу, а не на инвентаризации",
 "stage": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": null,
 "sequence": 1,
 "flowsTo": [
 "b2-1-normal-vs-loss"
 ]
 },
 {
 "id": "b2-1-normal-vs-loss",
 "problemId": "b2-1",
 "blockId": "b-logistics",
 "title": "Отделить норму от потери",
 "shortDescription": "Где естественная убыль и температурные поправки, а где реальная утечка или нарушение под расследование",
 "stage": 2,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "сверка слива-налива налажена",
 "sequence": 2,
 "flowsTo": []
 },
 {
 "id": "b2-2-quality-control",
 "problemId": "b2-2",
 "blockId": "b-logistics",
 "title": "Держать качество под контролем",
 "shortDescription": "Отклонения качества — до того, как дойдут до клиента.",
 "stage": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": null,
 "sequence": 1,
 "flowsTo": ["b2-2-tank-utilization"]
 },
 {
 "id": "b2-2-tank-utilization",
 "problemId": "b2-2",
 "blockId": "b-logistics",
 "title": "Грамотно использовать резервуары",
 "shortDescription": "Распределение по РВС без простоя ёмкости и недопустимых смешений.",
 "stage": 2,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "контроль качества налажен",
 "sequence": 2,
 "flowsTo": []
 },
 {
 "id": "b3-1-station-fuel-need-view",
 "problemId": "b3-1",
 "blockId": "b-logistics",
 "title": "Видеть, какая станция требует топлива",
 "shortDescription": "Потребность сети в одной картине — кто близок к сухому остатку.",
 "stage": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Скорость и качество решений",
 "lock": null,
 "sequence": 1,
 "flowsTo": [
 "b3-1-auto-dispatch",
 "b3-2-route-truck-driver"
 ]
 },
 {
 "id": "b3-1-auto-dispatch",
 "problemId": "b3-1",
 "blockId": "b-logistics",
 "title": "Автоматический план доставки на АЗС",
 "shortDescription": "Готовый план «что, откуда, в каком объёме» по потребности и прогнозу.",
 "stage": 2,
 "cost": "$$$",
 "scale": "Системная программа",
 "impact": "Сокращение затрат",
 "lock": "прогноз спроса (A1)",
 "sequence": 2,
 "flowsTo": [
 "b3-1-dispatcher-agent"
 ]
 },
 {
 "id": "b3-1-dispatcher-agent",
 "problemId": "b3-1",
 "blockId": "b-logistics",
 "title": "Агент-диспетчер под контролем",
 "shortDescription": "Система строит разнарядку по правилам, человек утверждает.",
 "stage": 3,
 "cost": "$$$$",
 "scale": "Системная программа",
 "impact": "Повышение производительности",
 "lock": "авторазнарядка + прогноз спроса + фундамент",
 "sequence": 3,
 "flowsTo": []
 },
 {
 "id": "b3-2-fleet-status-view",
 "problemId": "b3-2",
 "blockId": "b-logistics",
 "title": "Видеть, где машины и что в пути",
 "shortDescription": "Отслеживать рейсы и статус доставки, а не узнавать постфактум.",
 "stage": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Скорость и качество решений",
 "lock": null,
 "sequence": 1,
 "flowsTo": [
 "b3-2-route-truck-driver"
 ]
 },
 {
 "id": "b3-2-route-truck-driver",
 "problemId": "b3-2",
 "blockId": "b-logistics",
 "title": "Оптимальный маршрут, машина и водитель",
 "shortDescription": "Меньше холостого пробега и простоев, подбор транспорта под рейс.",
 "stage": 2,
 "cost": "$$$",
 "scale": "Системная программа",
 "impact": "Сокращение затрат",
 "lock": "потребность станций видна (B3.1) + телематика",
 "sequence": 2,
 "flowsTo": []
 },
 {
 "id": "b3-3-trip-plan-fact",
 "problemId": "b3-3",
 "blockId": "b-logistics",
 "title": "План-факт по рейсам",
 "shortDescription": "Что выполнено как планировалось, а где отклонения и потери.",
 "stage": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Скорость и качество решений",
 "lock": null,
 "sequence": 1,
 "flowsTo": []
 },
 {
 "id": "b3-3-driver-safety",
 "problemId": "b3-3",
 "blockId": "b-logistics",
 "title": "Контроль безопасности водителя",
 "shortDescription": "Превышение, резкое торможение, усталость — ранний сигнал риска, а не разбор после аварии.",
 "stage": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Сокращение затрат",
 "lock": null,
 "sequence": 2,
 "flowsTo": []
 },
 {
 "id": "b3-3-fuel-theft-in-transit",
 "problemId": "b3-3",
 "blockId": "b-logistics",
 "title": "Поймать слив и махинации в пути",
 "shortDescription": "Несанкционированный слив топлива и отклонения маршрута — прямая утечка под контролем.",
 "stage": 2,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "телематика + сверка отгрузки и приёмки на станции",
 "sequence": 3,
 "flowsTo": []
 },

 {
 "id": "c1-1-station-benchmark",
 "problemId": "c1-1",
 "blockId": "c-stations-stores",
 "title": "Сравнить станции и увидеть отстающих",
 "shortDescription": "АЗС рядом по справедливому сравнению — кто недобирает против похожих, а не против средней.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$",
 "scale": "Быстрый эффект",
 "impact": "Скорость и качество решений",
 "lock": null,
 "flowsTo": [
 "c1-1-cause-analysis",
 "c1-1-station-analysis-agent"
 ]
 },
 {
 "id": "c1-1-plan-control",
 "problemId": "c1-1",
 "blockId": "c-stations-stores",
 "title": "Контроль достижения плана и оперативное реагирование",
 "shortDescription": "План по станции в моменте — где отстаём сегодня, а не в отчёте к концу месяца.",
 "stage": 1,
 "sequence": 2,
 "cost": "$$",
 "scale": "Быстрый эффект",
 "impact": "Скорость и качество решений",
 "lock": null,
 "flowsTo": [
 "c1-1-station-analysis-agent"
 ]
 },
 {
 "id": "c1-1-cause-analysis",
 "problemId": "c1-1",
 "blockId": "c-stations-stores",
 "title": "Понять причину, а не только факт",
 "shortDescription": "Почему станция просела — трафик, цена, сервис, ассортимент — и что чинить.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Скорость и качество решений",
 "lock": "сравнение станций налажено",
 "flowsTo": [
 "c1-1-station-analysis-agent"
 ]
 },
 {
 "id": "c1-1-station-analysis-agent",
 "problemId": "c1-1",
 "blockId": "c-stations-stores",
 "title": "Агент анализа станций",
 "shortDescription": "Сам разбирает станции, находит причины, ставит гипотезы и подсвечивает, куда смотреть.",
 "stage": 3,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Системная программа",
 "impact": "Скорость и качество решений",
 "lock": "benchmarking + анализ причин + фундамент",
 "flowsTo": []
 },
 {
 "id": "c1-2-lost-traffic",
 "problemId": "c1-2",
 "blockId": "c-stations-stores",
 "title": "Увидеть, сколько клиентов теряем",
 "shortDescription": "Кто уезжает из-за очереди и кто заехал, но не заправился.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": null,
 "flowsTo": [
 "c1-2-queue-peak"
 ]
 },
 {
 "id": "c1-2-queue-peak",
 "problemId": "c1-2",
 "blockId": "c-stations-stores",
 "title": "Увидеть часы и точки перегрузки станции",
 "shortDescription": "Когда и где копятся очереди — чтобы развести поток или подвести смену.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": "данные трафика собираются",
 "flowsTo": []
 },
 {
 "id": "c1-3-fuel-cash-losses",
 "problemId": "c1-3",
 "blockId": "c-stations-stores",
 "title": "Поймать потери на отпуске топлива",
 "shortDescription": "Виртуальные заправки, недолив, коррекции чеков и сговор — через данные и камеру.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": null,
 "flowsTo": []
 },
 {
 "id": "c1-4-shift-control",
 "problemId": "c1-4",
 "blockId": "c-stations-stores",
 "title": "Видеть, как работает смена",
 "shortDescription": "План-факт по сменам и где не держат стандарт — без обхода проверяющим.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Повышение производительности",
 "lock": null,
 "flowsTo": [
 "c1-4-camera-standard-violation"
 ]
 },
 {
 "id": "c1-4-camera-standard-violation",
 "problemId": "c1-4",
 "blockId": "c-stations-stores",
 "title": "Выявлять нарушения стандартов на камере",
 "shortDescription": "Несоблюдение выкладки, формы, безопасности — автоматически, а не на обходе.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Системная программа",
 "impact": "Повышение производительности",
 "lock": "камеры на станциях + контроль смен налажен",
 "flowsTo": []
 },
 {
 "id": "c1-5-maintenance-priority",
 "problemId": "c1-5",
 "blockId": "c-stations-stores",
 "title": "Знать, что и когда обслужить",
 "shortDescription": "График обслуживания ТРК, холодильников, кофемашин — по бизнес-приоритету.",
 "stage": 1,
 "sequence": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Повышение производительности",
 "lock": null,
 "flowsTo": [
 "c1-5-predictive-maintenance"
 ]
 },
 {
 "id": "c1-5-predictive-maintenance",
 "problemId": "c1-5",
 "blockId": "c-stations-stores",
 "title": "Предупредить поломку до простоя",
 "shortDescription": "Поймать износ заранее, пока колонка или холодильник не встали в час пик.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "данные оборудования отказов",
 "flowsTo": []
 },
 {
 "id": "c2-1-fuel-to-store-conversion",
 "problemId": "c2-1",
 "blockId": "c-stations-stores",
 "title": "Завести клиента с колонки в магазин",
 "shortDescription": "Сколько заправившихся доходит до магазина — и где этот переход теряется.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$",
 "scale": "Быстрый эффект",
 "impact": "Рост выручки",
 "lock": null,
 "flowsTo": [
 "c2-1-nonfuel-moment-offer"
 ]
 },
 {
 "id": "c2-1-nonfuel-moment-offer",
 "problemId": "c2-1",
 "blockId": "c-stations-stores",
 "title": "Поднять нетопливный чек предложением в момент",
 "shortDescription": "Что предложить заправившемуся клиенту, чтобы он зашёл и купил больше.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": "конверсия «заправка→магазин» видна + профиль клиента",
 "flowsTo": []
 },
 {
 "id": "c2-2-local-assortment-sales",
 "problemId": "c2-2",
 "blockId": "c-stations-stores",
 "title": "Понять, что реально продаётся на этой АЗС",
 "shortDescription": "Какой товар идёт на конкретной станции, а не один шаблон на всех.",
 "stage": 1,
 "sequence": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Рост выручки",
 "lock": null,
 "flowsTo": [
 "c2-2-product-demand-forecast"
 ]
 },
 {
 "id": "c2-2-product-demand-forecast",
 "problemId": "c2-2",
 "blockId": "c-stations-stores",
 "title": "Прогноз спроса по товарам на станции",
 "shortDescription": "Сколько и чего привезти, включая кофе и выпечку по часам.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": "продажи по станции видны",
 "flowsTo": []
 },
 {
 "id": "c2-3-stock-waste-oos",
 "problemId": "c2-3",
 "blockId": "c-stations-stores",
 "title": "Увидеть, где теряем на списаниях и пустых полках",
 "shortDescription": "Потери от просрочки фреша и от того, что товара не было на месте.",
 "stage": 1,
 "sequence": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Сокращение затрат",
 "lock": null,
 "flowsTo": [
 "c2-3-markdown-reorder"
 ]
 },
 {
 "id": "c2-3-markdown-reorder",
 "problemId": "c2-3",
 "blockId": "c-stations-stores",
 "title": "Вовремя уценить и не допустить пустой полки",
 "shortDescription": "Момент уценки скоропорта и точка дозаказа — чтобы не терять с обоих концов.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "контроль стока и списаний налажен",
 "flowsTo": []
 },
 {
 "id": "c2-4-retail-media",
 "problemId": "c2-4",
 "blockId": "c-stations-stores",
 "title": "Реклама брендов на трафике станции",
 "shortDescription": "Физический трафик АЗС даёт аудиторию, место контакта и контекст визита — вход в retail media.",
 "stage": 3,
 "sequence": 1,
 "cost": "$$$$",
 "scale": "Системная программа",
 "impact": "Рост выручки",
 "lock": null,
 "flowsTo": []
 },

 /* D — Customers & Loyalty */
 {
 "id": "d1-1-client-profit",
 "problemId": "d1-1",
 "blockId": "d-customers-loyalty",
 "title": "Кто наши клиенты и кто приносит прибыль",
 "shortDescription": "Не оборот по карте, а кто реально зарабатывает компании деньги.",
 "stage": 1,
 "sequence": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Рост выручки",
 "lock": null,
 "flowsTo": []
 },
 {
 "id": "d1-1-basic-segmentation",
 "problemId": "d1-1",
 "blockId": "d-customers-loyalty",
 "title": "Базовая сегментация клиентов",
 "shortDescription": "Понятные группы, чтобы работать с клиентами по-разному, а не со всеми одинаково.",
 "stage": 1,
 "sequence": 2,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Рост выручки",
 "lock": null,
 "flowsTo": [
 "d1-1-behavioral-segmentation-ml",
 "d1-2-retention-action",
 "d1-3-personal-offer",
 "d1-4-uplift-discount",
 "d1-4-promo-engine"
 ]
 },
 {
 "id": "d1-1-profile-360",
 "problemId": "d1-1",
 "blockId": "d-customers-loyalty",
 "title": "Профиль клиента 360",
 "shortDescription": "Единый профиль из всех систем, чтобы видеть клиента целиком и работать персонально.",
 "stage": 1,
 "sequence": 3,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Скорость и качество решений",
 "lock": null,
 "flowsTo": [
 "d1-1-behavioral-segmentation-ml",
 "d1-1-clv",
 "d1-2-churn-prediction",
 "d1-3-personal-offer",
 "d1-3-best-offer-moment"
 ]
 },
 {
 "id": "d1-1-behavioral-segmentation-ml",
 "problemId": "d1-1",
 "blockId": "d-customers-loyalty",
 "title": "Поведенческая сегментация на ML",
 "shortDescription": "Неочевидные группы по реальному поведению — точнее, чем правила.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": "базовая сегментация + профиль клиента 360",
 "flowsTo": []
 },
 {
 "id": "d1-1-clv",
 "problemId": "d1-1",
 "blockId": "d-customers-loyalty",
 "title": "Прогноз жизненной ценности клиента (CLV)",
 "shortDescription": "Кто станет ценным — вкладываться в него заранее, а не оглядываясь назад.",
 "stage": 2,
 "sequence": 2,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": "профиль клиента 360 покупок",
 "flowsTo": []
 },
 {
 "id": "d1-2-early-churn-signal",
 "problemId": "d1-2",
 "blockId": "d-customers-loyalty",
 "title": "Заметить уходящего клиента вовремя",
 "shortDescription": "Поймать охлаждение, пока клиента ещё можно вернуть дёшево.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": null,
 "flowsTo": []
 },
 {
 "id": "d1-2-churn-prediction",
 "problemId": "d1-2",
 "blockId": "d-customers-loyalty",
 "title": "Предсказать уход заранее",
 "shortDescription": "Кто собирается уйти — до явных признаков.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": "профиль клиента 360 поведения",
 "flowsTo": [
 "d1-2-retention-action",
 "d1-2-retention-autopilot"
 ]
 },
 {
 "id": "d1-2-retention-action",
 "problemId": "d1-2",
 "blockId": "d-customers-loyalty",
 "title": "Знать, чем удержать",
 "shortDescription": "Действие, которое реально вернёт конкретного клиента.",
 "stage": 2,
 "sequence": 2,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": "сегментация + прогноз оттока",
 "flowsTo": [
 "d1-2-retention-autopilot"
 ]
 },
 {
 "id": "d1-2-retention-autopilot",
 "problemId": "d1-2",
 "blockId": "d-customers-loyalty",
 "title": "Удержание на автопилоте",
 "shortDescription": "Система сама ловит риск и запускает удержание под контролем человека.",
 "stage": 3,
 "sequence": 1,
 "cost": "$$$$",
 "scale": "Системная программа",
 "impact": "Рост выручки",
 "lock": "прогноз оттока + подбор действия + фундамент данных",
 "flowsTo": []
 },
 {
 "id": "d1-3-basket-bundles",
 "problemId": "d1-3",
 "blockId": "d-customers-loyalty",
 "title": "Поднять чек на готовых связках",
 "shortDescription": "Что покупают вместе — предлагать так, чтобы брали больше за визит.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": null,
 "flowsTo": []
 },
 {
 "id": "d1-3-personal-offer",
 "problemId": "d1-3",
 "blockId": "d-customers-loyalty",
 "title": "Персональное предложение для клиента",
 "shortDescription": "Что предложить, чтобы клиент зашёл в магазин и купил.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": "сегментация + профиль клиента 360",
 "flowsTo": []
 },
 {
 "id": "d1-3-best-offer-moment",
 "problemId": "d1-3",
 "blockId": "d-customers-loyalty",
 "title": "Лучший момент для предложения",
 "shortDescription": "Поймать, когда клиент восприимчив, и предлагать тогда.",
 "stage": 2,
 "sequence": 2,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": "профиль клиента 360 поведения",
 "flowsTo": []
 },
 {
 "id": "d1-4-promo-effect",
 "problemId": "d1-4",
 "blockId": "d-customers-loyalty",
 "title": "Узнать, сработала ли акция на самом деле",
 "shortDescription": "Отделить реальный эффект промо от того, что клиент купил бы и так.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": null,
 "flowsTo": [
 "d1-4-uplift-discount",
 "d1-4-promo-engine"
 ]
 },
 {
 "id": "d1-4-uplift-discount",
 "problemId": "d1-4",
 "blockId": "d-customers-loyalty",
 "title": "Давать скидку тем, кто меняет поведение",
 "shortDescription": "Перестать платить тем, кто заправится без скидки.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "сегментация + замер промо",
 "flowsTo": []
 },
 {
 "id": "d1-4-promo-engine",
 "problemId": "d1-4",
 "blockId": "d-customers-loyalty",
 "title": "Промо-движок: адресные кампании на сегментах",
 "shortDescription": "Запускать персональные кампании массово и сразу видеть отдачу.",
 "stage": 3,
 "sequence": 1,
 "cost": "$$$$",
 "scale": "Системная программа",
 "impact": "Рост выручки",
 "lock": "сегменты + замер промо + фундамент данных",
 "flowsTo": []
 },
 {
 "id": "d1-5-feedback-themes",
 "problemId": "d1-5",
 "blockId": "d-customers-loyalty",
 "title": "Понять, на что жалуются клиенты",
 "shortDescription": "Реальные причины недовольства из отзывов — без ручного чтения.",
 "stage": 1,
 "sequence": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Повышение производительности",
 "lock": null,
 "flowsTo": [
 "d1-5-station-problem-early"
 ]
 },
 {
 "id": "d1-5-station-problem-early",
 "problemId": "d1-5",
 "blockId": "d-customers-loyalty",
 "title": "Рано выявлять проблему на станции",
 "shortDescription": "Всплеск негатива по точке подсвечивается сразу.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Скорость и качество решений",
 "lock": "налаженный сбор отзывов",
 "flowsTo": []
 },
 {
 "id": "d1-5-ai-support-line",
 "problemId": "d1-5",
 "blockId": "d-customers-loyalty",
 "title": "ИИ первой линии поддержки",
 "shortDescription": "Сам отвечает клиентам на типовое, эскалирует сложное человеку.",
 "stage": 3,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Системная программа",
 "impact": "Повышение производительности",
 "lock": "база знаний и регламенты обращений",
 "flowsTo": []
 },

 {
 "id": "d1-7-retail-media-entry",
 "problemId": "d1-7",
 "blockId": "d-customers-loyalty",
 "title": "Заработать на рекламе брендов",
 "shortDescription": "Продавать партнёрам доступ к клиентским сегментам, моментам контакта и измеримым кампаниям.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$$",
 "scale": "Системная программа",
 "impact": "Рост выручки",
 "lock": null,
 "flowsTo": [],
 "crossRef": {
 "targetId": "c2-4-retail-media",
 "targetLabel": "C2.4 «Реклама брендов на трафике станции»"
 }
 },
 {
 "id": "d1-7-partner-data-platform",
 "problemId": "d1-7",
 "blockId": "d-customers-loyalty",
 "title": "Площадка данных для партнёров",
 "shortDescription": "Обезличенная аналитика и доступ для партнёров в защищённом контуре.",
 "stage": 3,
 "sequence": 1,
 "cost": "$$$$",
 "scale": "Системная программа",
 "impact": "Рост выручки",
 "lock": "зрелый фундамент данных + управление доступом",
 "flowsTo": []
 },
 {
 "id": "d2-1-b2b-profitability",
 "problemId": "d2-1",
 "blockId": "d-customers-loyalty",
 "title": "Увидеть, какие корпоративные клиенты зарабатывают",
 "shortDescription": "Маржа по счёту после скидок и отсрочек — кто из них убыточен.",
 "stage": 1,
 "sequence": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Сокращение затрат",
 "lock": null,
 "flowsTo": [
 "d2-3-risk-value-terms"
 ]
 },
 {
 "id": "d2-1-b2b-value-forecast",
 "problemId": "d2-1",
 "blockId": "d-customers-loyalty",
 "title": "Прогноз ценности корпоративного клиента",
 "shortDescription": "Какие счета вырастут — вкладываться в них приоритетно.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": "история счёта + сведённые данные по счётам",
 "flowsTo": []
 },
 {
 "id": "d2-2-b2b-cooling-signal",
 "problemId": "d2-2",
 "blockId": "d-customers-loyalty",
 "title": "Заметить охлаждение корпоративного клиента",
 "shortDescription": "Падение объёмов по счёту, пока договор ещё в силе.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": null,
 "flowsTo": []
 },
 {
 "id": "d2-2-renewal-risk",
 "problemId": "d2-2",
 "blockId": "d-customers-loyalty",
 "title": "Предсказать непродление",
 "shortDescription": "Какие счета на грани ухода — до конца договора.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Рост выручки",
 "lock": "история счетов + сведённые данные",
 "flowsTo": []
 },
 {
 "id": "d2-3-risk-value-terms",
 "problemId": "d2-1",
 "blockId": "d-customers-loyalty",
 "title": "Давать условия по риску и ценности",
 "shortDescription": "Скидка и лимит под конкретного клиента, а не «как привыкли».",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "прибыльность B2B-портфеля + данные по счётам",
 "flowsTo": []
 },
 {
 "id": "d2-3-payment-risk-entry",
 "problemId": "d2-1",
 "blockId": "d-customers-loyalty",
 "title": "Не дать уйти в неоплату",
 "shortDescription": "Кто рискует не заплатить по отсрочке — до того как долг повиснет.",
 "stage": 2,
 "sequence": 2,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": null,
 "flowsTo": [],
 "crossRef": {
 "targetId": "e3-payment-risk",
 "targetLabel": "E3 «Понять, кто рискует не заплатить»"
 }
 },


 /* E — Finance, Cash & Control */
 {
 "id": "e1-live-finance-picture",
 "problemId": "e1",
 "blockId": "e-finance-control",
 "title": "Финансы сети в живой картине",
 "shortDescription": "Маржа и деньги по станции, региону, продукту — сразу, а не выгрузкой к утру.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$",
 "scale": "Быстрый эффект",
 "impact": "Скорость и качество решений",
 "lock": null,
 "flowsTo": [
 "e-frontier-finops-agent"
 ]
 },
 {
 "id": "e1-ask-figures-entry",
 "problemId": "e1",
 "blockId": "e-finance-control",
 "title": "Спросить цифры словами и получить ответ",
 "shortDescription": "Вопрос про маржу или затраты как человеку — и сразу ответ, без аналитика-посредника.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Скорость и качество решений",
 "lock": "единая основа + BI (G1)",
 "flowsTo": [],
 "crossRef": {
 "targetId": "g2-4-ask-data-words",
 "targetLabel": "G2.3 «Спросить данные словами и получить ответ»"
 }
 },
 {
 "id": "e2-plan-deviation",
 "problemId": "e2",
 "blockId": "e-finance-control",
 "title": "Сразу видеть, что отклонилось от плана",
 "shortDescription": "Где маржа просела или затраты выросли против ожидания — без ручной сверки.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$",
 "scale": "Быстрый эффект",
 "impact": "Скорость и качество решений",
 "lock": null,
 "flowsTo": [
 "e2-deviation-drivers",
 "e-frontier-finops-agent"
 ]
 },
 {
 "id": "e2-deviation-drivers",
 "problemId": "e2",
 "blockId": "e-finance-control",
 "title": "Понять, почему отклонилось, и что делать",
 "shortDescription": "Разложить отклонение на причины — и на что повлиять, а не просто «вот цифры».",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Скорость и качество решений",
 "lock": "отклонения от плана видны",
 "flowsTo": [
 "e-frontier-finops-agent"
 ]
 },
 {
 "id": "e3-cash-position",
 "problemId": "e3",
 "blockId": "e-finance-control",
 "title": "Видеть текущие остатки, долги и обязательства",
 "shortDescription": "Остатки, долги, обязательства — картина кэша целиком.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$",
 "scale": "Быстрый эффект",
 "impact": "Скорость и качество решений",
 "lock": null,
 "flowsTo": [
 "e3-cash-gap-forecast"
 ]
 },
 {
 "id": "e3-cash-gap-forecast",
 "problemId": "e3",
 "blockId": "e-finance-control",
 "title": "Знать о кассовом разрыве заранее",
 "shortDescription": "Где и когда не хватит денег — с учётом закупок, остатков и дебиторки.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Скорость и качество решений",
 "lock": "картина кэша собрана",
 "flowsTo": [
 "e-frontier-finops-agent"
 ]
 },
 {
 "id": "e3-payment-risk",
 "problemId": "e3",
 "blockId": "e-finance-control",
 "title": "Понять, кто рискует не заплатить",
 "shortDescription": "По каким должникам деньги под угрозой — работать по риску, а не по списку.",
 "stage": 2,
 "sequence": 2,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "картина дебиторки и платежей",
 "flowsTo": []
 },
 {
 "id": "e5-duplicate-fake-payments",
 "problemId": "e5",
 "blockId": "e-finance-control",
 "title": "Поймать дубли и фиктивные платежи",
 "shortDescription": "Задвоенные счета, фиктивные контрагенты, лишние платежи — до того, как ушли.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$",
 "scale": "Быстрый эффект",
 "impact": "Сокращение затрат",
 "lock": null,
 "flowsTo": [
 "e5-policy-before-payment"
 ]
 },
 {
 "id": "e5-policy-before-payment",
 "problemId": "e5",
 "blockId": "e-finance-control",
 "title": "Поймать отклонение от политики до оплаты",
 "shortDescription": "Нарушение правил в проводке или закупке — пока деньги не ушли.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$",
 "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "политики формализованы + связка с потоком операций",
 "flowsTo": []
 },
 {
 "id": "e-frontier-finops-agent",
 "problemId": "e2",
 "blockId": "e-finance-control",
 "title": "Финансово-операционный аналитик-агент",
 "shortDescription": "Неутомимый аналитик, который видит весь бизнес в цифрах: сам находит точки утечки, предлагает, где сократить, подсвечивает риски.",
 "stage": 3,
 "sequence": 3,
 "cost": "$$$$",
 "scale": "Системная программа",
 "impact": "Сокращение затрат",
 "lock": "единая основа + живая картина + контроль отклонений + фундамент",
 "flowsTo": []
 },

 /* F — Support Functions */

 /* F — Support Functions — CARDS */
 {
 "blockId": "f-support-functions",
 "id": "f1-1-hr-operations-assistant",
 "problemId": "f1",
 "title": "ИИ-ассистент HR-операций",
 "shortDescription": "Ответы, шаблоны, регламенты, заявки и onboarding-подсказки — без ручной очереди в HR.",
 "stage": 1, "sequence": 1, "cost": "$", "scale": "Быстрый эффект",
 "impact": "Повышение производительности", "lock": null, "flowsTo": []
 },
 {
 "blockId": "f-support-functions",
 "id": "f1-2-linear-staff-screening",
 "problemId": "f1",
 "title": "Подбор и первичный скрининг линейного персонала",
 "shortDescription": "Резюме, анкеты и отклики превращаются в short-list кандидатов для HR.",
 "stage": 1, "sequence": 1, "cost": "$$", "scale": "Проектный запуск",
 "impact": "Скорость и качество решений", "lock": null, "flowsTo": []
 },
 {
 "blockId": "f-support-functions",
 "id": "f1-3-field-staff-digital-loop",
 "problemId": "f1",
 "title": "Цифровой контур работы полевого персонала",
 "shortDescription": "Рабочий день сотрудника, обязательные действия и подтверждения выполнения — в мобильном контуре.",
 "stage": 1, "sequence": 1, "cost": "$$$", "scale": "Системная программа",
 "impact": "Скорость и качество решений", "lock": null, "flowsTo": ["f1-4-turnover-early-signals"]
 },
 {
 "blockId": "f-support-functions",
 "id": "f1-4-turnover-early-signals",
 "problemId": "f1",
 "title": "Ранние сигналы текучки и качества адаптации",
 "shortDescription": "Где сотрудник «выпадает» из процесса — видно до увольнения.",
 "stage": 2, "sequence": 1, "cost": "$$$", "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "цифровой контур работы персонала (F1.3)", "flowsTo": []
 },
 {
 "blockId": "f-support-functions",
 "id": "f2-1-legal-assistant",
 "problemId": "f2",
 "title": "Юридический ассистент по договорам и регламентам",
 "shortDescription": "Ответ по договорам, политикам, шаблонам и прошлым решениям — со ссылкой на источник.",
 "stage": 1, "sequence": 1, "cost": "$", "scale": "Быстрый эффект",
 "impact": "Повышение производительности", "lock": null, "flowsTo": [],
 "crossRef": { "targetId": "g2-1-knowledge-search", "targetLabel": "G2.1 «Поиск по знаниям компании»" }
 },
 {
 "blockId": "f-support-functions",
 "id": "f2-2-legal-doc-draft",
 "problemId": "f2",
 "title": "Получить черновик документа сразу",
 "shortDescription": "Договор, претензия, письмо, допсоглашение или заключение под кейс — не с чистого листа.",
 "stage": 1, "sequence": 1, "cost": "$$", "scale": "Быстрый эффект",
 "impact": "Повышение производительности", "lock": null, "flowsTo": []
 },
 {
 "blockId": "f-support-functions",
 "id": "f2-3-contract-obligations-control",
 "problemId": "f2",
 "title": "Контроль договорных обязательств и рисков",
 "shortDescription": "Сроки, условия, штрафы, пролонгации и события контроля — не спрятаны в договорах.",
 "stage": 2, "sequence": 1, "cost": "$$$", "scale": "Проектный запуск",
 "impact": "Скорость и качество решений", "lock": null, "flowsTo": ["f2-4-legal-process-agent"]
 },
 {
 "blockId": "f-support-functions",
 "id": "f2-4-legal-process-agent",
 "problemId": "f2",
 "title": "Агент юридических процессов",
 "shortDescription": "Пакеты документов, сроки, черновики, follow-up и эскалации — под контролем юриста.",
 "stage": 3, "sequence": 1, "cost": "$$$$", "scale": "Системная программа",
 "impact": "Скорость и качество решений",
 "lock": "юридический ассистент + контроль обязательств", "flowsTo": []
 },
 {
 "blockId": "f-support-functions",
 "id": "f3-1-mto-visibility",
 "problemId": "f3",
 "title": "Видимость закупок МТО и подрядных услуг",
 "shortDescription": "Категории, поставщики, цены, станции и подрядчики — в одной картине.",
 "stage": 1, "sequence": 1, "cost": "$$", "scale": "Быстрый эффект",
 "impact": "Сокращение затрат", "lock": null, "flowsTo": ["f3-2-mto-anomalies", "f3-3-supplier-rating"]
 },
 {
 "blockId": "f-support-functions",
 "id": "f3-2-mto-anomalies",
 "problemId": "f3",
 "title": "Поиск переплат и аномалий в МТО",
 "shortDescription": "Цена выше истории, дробление, повторные подрядчики и странные отклонения — подсвечиваются.",
 "stage": 2, "sequence": 1, "cost": "$$$", "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "видимость закупок МТО (F3.1)", "flowsTo": []
 },
 {
 "blockId": "f-support-functions",
 "id": "f3-3-supplier-rating",
 "problemId": "f3",
 "title": "Рейтинг поставщиков и подрядчиков",
 "shortDescription": "Выбор не только по цене, а по фактической надёжности и последствиям.",
 "stage": 2, "sequence": 2, "cost": "$$$", "scale": "Проектный запуск",
 "impact": "Скорость и качество решений",
 "lock": "видимость закупок МТО (F3.1)", "flowsTo": []
 },
 {
 "blockId": "f-support-functions",
 "id": "f4-loyalty-card-fraud",
 "problemId": "f4",
 "title": "Контроль злоупотреблений в лояльности и топливных картах",
 "shortDescription": "Аномалии в начислениях бонусов и транзакциях карт/талонов — видны до аудита, а не после.",
 "stage": 2, "sequence": 5, "cost": "$$$", "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "контрольная панель потерь (F4.1)",
 "flowsTo": []
 },

 {
 "blockId": "f-support-functions",
 "id": "f4-1-loss-exception-panel",
 "problemId": "f4",
 "title": "Контрольная панель потерь и исключений",
 "shortDescription": "Где теряем деньги, топливо, дисциплину процесса и контроль — видно в одной картине.",
 "stage": 1, "sequence": 1, "cost": "$$", "scale": "Быстрый эффект",
 "impact": "Сокращение затрат", "lock": null, "flowsTo": ["f4-2-anomaly-detection"]
 },
 {
 "blockId": "f-support-functions",
 "id": "f4-2-anomaly-detection",
 "problemId": "f4",
 "title": "Выявление аномалий и отклонений от правил",
 "shortDescription": "Сигналы по операциям, стандартам и политикам всплывают раньше ручной проверки.",
 "stage": 2, "sequence": 1, "cost": "$$$", "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "контрольная панель потерь (F4.1)",
 "flowsTo": ["f4-3-risk-investigations", "f4-4-control-chain-agent"]
 },
 {
 "blockId": "f-support-functions",
 "id": "f4-3-risk-investigations",
 "problemId": "f4",
 "title": "Риск-ориентированные проверки и расследования",
 "shortDescription": "Проверки, кейсы, доказательства, владельцы и результаты — в управляемом контуре.",
 "stage": 2, "sequence": 2, "cost": "$$$", "scale": "Проектный запуск",
 "impact": "Сокращение затрат",
 "lock": "выявление аномалий (F4.2)", "flowsTo": ["f4-4-control-chain-agent"]
 },
 {
 "blockId": "f-support-functions",
 "id": "f4-4-control-chain-agent",
 "problemId": "f4",
 "title": "Агент внутреннего контроля цепочки",
 "shortDescription": "Связывает сигналы, готовит evidence pack и предлагает next best action — решение за человеком.",
 "stage": 3, "sequence": 1, "cost": "$$$$", "scale": "Системная программа",
 "impact": "Сокращение затрат",
 "lock": "единая основа данных + доменные контуры в B/C/D/E/F4", "flowsTo": []
 },
 {
 "blockId": "f-support-functions",
 "id": "f5-document-primary-processing",
 "problemId": "f5",
 "title": "Обработка документов и первички",
 "shortDescription": "Распознать, занести и сверить документы сами — без ручной перебивки.",
 "stage": 1, "sequence": 1, "cost": "$$", "scale": "Быстрый эффект",
 "impact": "Повышение производительности", "lock": null, "flowsTo": []
 },


 /* G — Data & Foundation */
 {
 "id": "g1-1-trusted-data-foundation",
 "problemId": "g1-1",
 "blockId": "g-data-foundation",
 "title": "Фундамент данных, которому можно верить",
 "shortDescription": "Одна правда вместо разных цифр в отделах, данные в одном месте, пригодные для решений.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$$$",
 "scale": "Системная программа",
 "impact": "Скорость и качество решений",
 "lock": "на эту карточку ссылается бо́льшая часть Advanced/Frontier каталога",
 "flowsTo": [
 "g1-2-bi-foundation",
 "g2-4-ask-data-words"
 ]
 },
 {
 "id": "g1-2-bi-foundation",
 "problemId": "g1-1",
 "blockId": "g-data-foundation",
 "title": "Поднять BI поверх единой основы",
 "shortDescription": "Единые дашборды по сети вместо выгрузок и Excel у каждого.",
 "stage": 1,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Скорость и качество решений",
 "lock": "единая основа (G1.1)",
 "flowsTo": [
 "g2-4-ask-data-words"
 ]
 },
 {
 "id": "g2-1-knowledge-search",
 "problemId": "g2-1",
 "blockId": "g-data-foundation",
 "title": "Поиск по знаниям компании",
 "shortDescription": "Регламент, инструкция, прошлое решение — по смыслу, а не звонком тому, кто помнит.",
 "stage": 1,
 "sequence": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Повышение производительности",
 "lock": null,
 "flowsTo": []
 },

 {
 "id": "g2-3-team-routine",
 "problemId": "g2-3",
 "blockId": "g-data-foundation",
 "title": "Снять с команды механическую рутину",
 "shortDescription": "Встречи, задачи, переписка, календарь, отчёты — на ИИ, чтобы люди занимались работой.",
 "stage": 1,
 "sequence": 1,
 "cost": "$",
 "scale": "Быстрый эффект",
 "impact": "Повышение производительности",
 "lock": null,
 "flowsTo": []
 },
 {
 "id": "g2-4-ask-data-words",
 "problemId": "g2-3",
 "blockId": "g-data-foundation",
 "title": "Спросить данные словами и получить ответ",
 "shortDescription": "Любой сотрудник — к цифрам без аналитика-посредника.",
 "stage": 2,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Проектный запуск",
 "impact": "Скорость и качество решений",
 "lock": "единая основа + BI (G1.1–G1.2)",
 "flowsTo": []
 },
 {
 "id": "g2-5-system-data-agent",
 "problemId": "g2-3",
 "blockId": "g-data-foundation",
 "title": "Агент обновления данных в системах",
 "shortDescription": "Сам заносит и обновляет записи из писем, звонков, документов — оператору остаётся контроль.",
 "stage": 3,
 "sequence": 1,
 "cost": "$$$",
 "scale": "Системная программа",
 "impact": "Повышение производительности",
 "lock": "доступ к системам (CRM/ERP) + обработка документов (G2.2)",
 "flowsTo": []
 },
];

/* ─── РАСКРЫТИЕ КАРТОЧКИ (5 полей, дословно из прозы) ──────────────
 businessPressure = Проблематика
 whatWePutInPlace = Что делаем
 whatImproves = Что это даёт
 dataAiBehind = За счёт чего работает
 conversationQuestions = Задайте себе вопрос
 ────────────────────────────────────────────────────────────────── */
window.FUEL_DRAWER_CONTENT = {
 "a1-stock-need-view": {
 "businessPressure": "Решение о закупке часто принимается под давлением времени и по неполной картине: остатки в одной системе, потребность в голове у снабженца, заявки станций в почте. В итоге заказы идут по привычке и прошлому периоду, а не по тому, что реально нужно сейчас — отсюда то затоваривание на одной нефтебазе, то дефицит на другой.",
 "whatWePutInPlace": "Сводим в одну картину то, что нужно для решения о закупке: текущие остатки по базам и станциям, потребность, открытые заявки. Снабженец видит ситуацию целиком в одном месте, а не собирает её вручную из трёх источников перед каждым заказом.",
 "whatImproves": "Закупка опирается на реальную картину, а не на память и привычку; меньше реактивных дозакупок; видно, где остатки уже расходятся с потребностью.",
 "dataAiBehind": "Сведение остатков, потребности и заявок из имеющихся систем в единую витрину. Работает на готовых данных, без моделей. Это основа, на которую дальше встают прогноз и умная закупка.",
 "conversationQuestions": [
 "Сколько систем открывает снабженец, чтобы решить, что заказать?",
 "Заказы идут под реальную потребность или под прошлый период?",
 "Видите ли вы расхождение остатков с потребностью до того, как возник дефицит или излишек?"
 ]
 },
 "a1-demand-forecast": {
 "businessPressure": "Объёмы закупки часто следуют прошлому периоду или доступности у поставщика. Но спрос меняется по сезону, региону, роли станции, B2B-контрактам, праздникам и поведению конкурентов. Когда план грубый или запоздалый, получается излишек в одном месте, риск дефицита в другом и аварийные дозакупки, которых можно было избежать.",
 "whatWePutInPlace": "Строим прогноз спроса на топливо по каждой станции и базе, с учётом сезонности, погоды, событий и известных изменений в сети. Это основа для всего, что дальше: сколько закупить, сколько везти, где держать запас.",
 "whatImproves": "Закупка и распределение опираются на ожидаемый спрос, а не на прошлый месяц; меньше аварийных дозакупок; лучше готовность к сезонным пикам.",
 "dataAiBehind": "Прогнозные ML-модели на истории продаж по станции и марке, с внешними факторами (сезон, погода, события). Advanced — нужна накопленная история и сведённые данные. На этот прогноз опирается диспетчеризация (блок B) — это общий актив, не дубль.",
 "conversationQuestions": [
 "Объёмы планируются по прогнозу спроса или корректируются от последних заказов?",
 "Как часто приходится докупать аварийно из-за неверного плана?",
 "Видны ли коммерческие изменения (промо, новые контракты) в плане заранее?"
 ]
 },
 "a1-smart-buying": {
 "businessPressure": "Даже с прогнозом спроса решение о закупке остаётся клубком противоречий: предложение поставщика, движение рыночной цены, текущие остатки, доступный кэш, ёмкость баз и логистика тянут в разные стороны. Привлекательное по цене может обернуться излишком, кассовым давлением или дисбалансом поставок.",
 "whatWePutInPlace": "Превращаем это в готовое решение: сколько брать, когда, у какого поставщика, в каком объёме и куда направить — с учётом коммерческого и денежного последствия. Показываем, что будет, если взять сейчас, подождать, разбить заказ или перебросить объём между базами. Инструмент поддерживает решение снабженца, а не подменяет его ответственность.",
 "whatImproves": "Закупка вовремя и в нужном объёме; меньше замороженного капитала; видна цена каждого варианта до того, как заказ ушёл.",
 "dataAiBehind": "Оптимизация закупки поверх прогноза спроса, остатков, цен и ограничений (ёмкость, логистика, кэш). Это уровень полноценной системы оптимизации закупок. Реальное воплощение такой системы — наш продукт Optimus.",
 "conversationQuestions": [
 "Решения о закупке учитывают спрос, остатки, логистику и кэш вместе или по отдельности?",
 "Можете ли вы сравнить варианты «взять сейчас / подождать / разбить» по деньгам?",
 "Какие закупочные решения выиграли бы от просчёта сценариев до сделки?"
 ]
 },
 "a1-buying-agent": {
 "businessPressure": "Когда уже умеешь прогнозировать спрос и считать оптимальную закупку, всё упирается в руки: кто-то каждый день должен собрать картину, просчитать, оформить заявку. На большой сети с десятками баз и марок это рутина, которая съедает время снабженца и не масштабируется.",
 "whatWePutInPlace": "Связываем прогноз и расчёт закупки в систему, которая сама готовит заявку по правилам компании — а человек проверяет и утверждает. Снабженец задаёт рамки и контролирует, рутину сбора и расчёта берёт на себя система.",
 "whatImproves": "Снабженец занимается решениями и переговорами, а не сбором цифр; заявки готовятся быстро и единообразно; контроль остаётся за человеком.",
 "dataAiBehind": "Связка прогноза, оптимизации и правил закупки в управляемый контур. Вершина блока — отсюда замок на прогноз, остатки и фундамент. ИИ исполняет заданные человеком правила, не принимает коммерческое решение сам.",
 "conversationQuestions": [
 "Сколько времени снабженца уходит на сбор данных и оформление заявок?",
 "Что мешает автоматизировать подготовку заявки, оставив утверждение за собой?",
 "Готовы ли прогноз и данные под автоматическую подготовку закупки?"
 ]
 },
 "a2-compare-suppliers": {
 "businessPressure": "Поставщик — это не только заявленная цена. Доступность, сроки, качество документов, точность поставок, отсрочка, поведение в спорах, таможенные бумаги, отзывчивость — всё это влияет на реальную ценность отношений. Без структурной картины выбор опирается на память и историю отношений, а не на факты.",
 "whatWePutInPlace": "Собираем картину по поставщикам: предложения, условия контрактов, фактические цены, надёжность поставок, качество документов, претензии, споры, платёжное поведение. Видно, кто создаёт скрытые издержки и трения, несмотря на привлекательную цену. Переговоры опираются на факты, а не на анекдоты.",
 "whatImproves": "Сильнее переговорная позиция; видна полная стоимость отношений, а не только цена; быстрее разрешаются споры; выбор поставщика прозрачен.",
 "dataAiBehind": "Сведение данных по поставщикам (контракты, поставки, счета, претензии) в одну картину на готовых данных. Quick Win — без моделей.",
 "conversationQuestions": [
 "Можете ли вы сравнить поставщиков по полной стоимости, а не только по цене?",
 "Какие проблемы с поставщиками повторяются, но нигде не фиксируются?",
 "Связаны ли претензии и споры с решениями о закупке?"
 ]
 },
 "a2-buy-timing": {
 "businessPressure": "Закупочная цена топлива движется, и момент закупки сильно влияет на себестоимость. Но решение «брать сейчас или подождать» чаще принимается по необходимости — кончается запас — чем по рыночному моменту. Закупка идёт, когда приспичило, а не когда выгодно.",
 "whatWePutInPlace": "Показываем динамику и ожидаемое движение закупочной цены, чтобы решение о моменте опиралось на рынок, а не только на остаток в баке. Можно закупиться раньше или придержать, видя, куда идёт цена.",
 "whatImproves": "Закупка в более выгодный момент; ниже средняя себестоимость партии; меньше вынужденных закупок по невыгодной цене.",
 "dataAiBehind": "Анализ ценовой динамики и рыночных индексов на истории закупок (где применимо — ML-прогноз движения цены). Advanced — требует данных рынка и истории.",
 "conversationQuestions": [
 "Вы закупаетесь по рыночному моменту или когда кончается запас?",
 "Видите ли вы, куда движется закупочная цена, до решения о закупке?",
 "Сколько вы теряете на вынужденных закупках в невыгодный момент?"
 ]
 },
 "a3-landed-cost": {
 "businessPressure": "Себестоимость партии — это не цена у поставщика. Сверху ложатся логистика, демередж, простой вагонов, таможенные задержки, штрафы. Эти расходы всплывают разрозненно и постфактум, и реальная стоимость партии выясняется, когда деньги уже потрачены, — а часто не сводит её вообще.",
 "whatWePutInPlace": "Собираем полную стоимость партии в одну цифру: закупка, логистика, демередж, простои, таможня, штрафы. Видно, во что партия обошлась на самом деле и где в этой цепочке деньги утекают.",
 "whatImproves": "Реальная себестоимость видна, а не складывается из догадок; видно, какие статьи раздувают стоимость; решения по поставщикам и перевозчикам опираются на полную цифру.",
 "dataAiBehind": "Сведение всех затрат на партию из имеющихся документов и учёта в единую калькуляцию. Quick Win — на готовых данных, без моделей.",
 "conversationQuestions": [
 "Знаете ли вы полную себестоимость партии, а не только закупочную цену?",
 "Какие статьи (демередж, простой, штрафы) всплывают постфактум?",
 "Сводится ли реальная стоимость партии вообще, или оценивается на глаз?"
 ]
 },
 "a3-cost-risk-early": {
 "businessPressure": "Демередж и простои — это деньги, которые можно было не платить, если бы риск увидели вовремя. Но узнают о них по факту, когда штраф уже начислен. Предупреждающего сигнала нет — есть только счёт после.",
 "whatWePutInPlace": "Подсвечиваем риск удорожания партии заранее: где назревает простой, задержка на таможне или штраф — пока есть время вмешаться. Проблема видна как сигнал, а не как строка в счёте постфактум.",
 "whatImproves": "Часть демереджа и штрафов предотвращается; видно, где партия дорожает, пока можно реагировать; меньше неприятных сюрпризов в себестоимости.",
 "dataAiBehind": "Раннее выявление рисков в цепочке поставки на данных о движении партий и истории задержек. Advanced — нужна история и связанные данные логистики.",
 "conversationQuestions": [
 "Узнаёте ли вы о риске простоя или штрафа до того, как он начислен?",
 "Сколько демереджа в год можно было предотвратить ранним сигналом?",
 "Есть ли предупреждение о задержке партии или только счёт после?"
 ]
 },
 "a4-price-vs-competitors": {
 "businessPressure": "Цена на стеле — сугубо локальная вещь, и движение конкурента рядом напрямую бьёт по объёму и марже станции. О ценах конкурентов узнают с опозданием и по обрывкам, а свою позицию относительно рынка не видят целиком — реагируют вслепую.",
 "whatWePutInPlace": "Собираем цены рынка рядом со своими по каждой станции: где мы выше, где ниже, где отстали от движения конкурента. Сеть видит свою ценовую позицию целиком, а не по отдельным жалобам с мест.",
 "whatImproves": "Ценовая позиция видна сразу, а не по обрывкам; быстрее реакция на движение конкурента; решения по цене опираются на полную картину рынка.",
 "dataAiBehind": "Сбор цен конкурентов (фиды или ручные наблюдения) рядом со своими по станциям. Quick Win, если сбор цен налажен; если нет — первый шаг наладить его.",
 "conversationQuestions": [
 "Видите ли вы свою цену против конкурентов по каждой станции?",
 "Как быстро вы узнаёте о движении цены у соседей?",
 "Реакция на конкурента опирается на данные или на звонок с заправки?"
 ]
 },
 "a4-price-headroom": {
 "businessPressure": "Ценообразование на стеле локально: движение, которое защищает маржу на одной станции, убивает объём на другой. Часто на конкурента реагируют без понимания роли станции, локальной чувствительности к цене и ожидаемого баланса «маржа против объёма» — то есть отдают маржу или объём вслепую.",
 "whatWePutInPlace": "Строим понимание ценовой позиции по кластерам станций: как объём реагирует на цену, где есть запас поднять без потери клиентов, а где цена уже гонит их к конкуренту. Рекомендуем варианты реакции с рамками по марже и объёму — для решения ценовой команды.",
 "whatImproves": "Видно, где поднять цену безопасно, а где нельзя; меньше веерных изменений цены по всей сети; лучше баланс маржи и объёма по каждому кластеру.",
 "dataAiBehind": "ML-анализ локальной ценовой чувствительности (эластичности) по кластерам станций на истории цен, объёмов и поведения. Advanced — нужна история и кластеризация станций.",
 "conversationQuestions": [
 "Цена решается по кластеру станций или одинаково по всей сети?",
 "Знаете ли вы, где есть запас поднять цену, а где нет?",
 "Видите ли вы ожидаемое последствие для маржи и объёма до изменения цены?"
 ]
 },
 "a4-dynamic-pricing": {
 "businessPressure": "Когда локальная чувствительность понятна и конкуренты на виду, ручное ценообразование всё равно отстаёт: цену меняют раз в день-два, по кластерам вручную, и каждое окно реакции — это потерянная маржа или объём. Рынок движется быстрее, чем успевает ценовая команда.",
 "whatWePutInPlace": "Связываем чувствительность, мониторинг конкурентов и роль станции в систему, которая предлагает или подстраивает цену под спрос, конкурентов и время — под жёсткими правилами и контролем компании. Человек задаёт рамки маржи и стратегию; система держит цену острой в этих рамках.",
 "whatImproves": "Цена реагирует на рынок быстро, а не с опозданием; маржа и объём оптимизируются непрерывно в заданных рамках; ценовая команда управляет стратегией, а не ручным пересчётом.",
 "dataAiBehind": "Движок ценообразования поверх модели чувствительности, мониторинга конкурентов и фундамента. Вершина — отсюда замок и высшая стоимость. Работает строго в правилах компании (включая правовые ограничения на ценообразование), решение о рамках — за человеком.",
 "conversationQuestions": [
 "Насколько быстро сейчас меняется цена в ответ на рынок?",
 "Что мешает держать цену острой автоматически в заданных вами рамках?",
 "Готовы ли данные о чувствительности и конкурентах под такой движок?"
 ]
 },
 "d1-1-client-profit": {
 "businessPressure": "Топливо — биржевой товар, и знание клиента — одно из немногого, чем компания отличается от соседней колонки. Видно, кто сколько потратил по карте лояльности, но не видно, кто из клиентов приносит прибыль, а кто заправляется только на акциях. Бюджет на удержание и промо раздаётся по обороту — то есть часто не туда.",
 "whatWePutInPlace": "Собираем понятную картину клиентов: кто они, как часто заезжают, сколько и на что тратят, и кто из них реально приносит прибыль после скидок и бонусов — а не просто много заправляется. Показываем структуру клиентской базы так, чтобы на неё могли опираться маркетинг, лояльность и коммерция, а не только отдел отчётности.",
 "whatImproves": "Понятно, на ком компания зарабатывает; видно, кому впустую уходят скидки; бюджет лояльности направляется туда, где он возвращается, а не размазывается по всем.",
 "dataAiBehind": "Работает на данных, которые уже есть: транзакции лояльности, чеки, продажи на колонке. Описательная аналитика сводит их в картину поведения и вклада в прибыль — на готовых данных, без сложных моделей.",
 "conversationQuestions": [
 "Знаете ли вы, какая доля прибыли (не оборота) приходит на топ-10% клиентов?",
 "Сколько вы доплачиваете скидками тем, кто заправился бы и без них?",
 "Сводится ли история покупок клиента в единую картину или живёт в разных системах?"
 ]
 },
 "d1-1-basic-segmentation": {
 "businessPressure": "Пока клиенты не разделены на группы, работать с ними можно только одинаково: одно промо на всех, одна логика общения, одна цена внимания. Отсюда и скидки веером, и рассылки мимо, и бюджет, который тратится одинаково на тех, кто приносит прибыль, и на тех, кто заходит раз в полгода. Чтобы работать по-разному, клиентов сначала надо разделить на понятные группы.",
 "whatWePutInPlace": "Делим клиентов на простые рабочие группы — по давности, частоте и сумме покупок — которыми маркетинг и лояльность могут пользоваться уже завтра. Это первый разрез, с которого начинается адресная работа: к каждой группе своё предложение, свой канал, своя частота.",
 "whatImproves": "Промо и коммуникация попадают в нужную группу, а не во всех разом; меньше денег уходит на тех, кто и так бы купил; появляется основа, на которой строится вся персонализация дальше.",
 "dataAiBehind": "Строится на транзакциях лояльности, которые уже есть. Классическая RFM-логика (давность / частота / сумма) — прозрачная и быстрая, на готовых данных. Это фундамент, поверх которого встаёт поведенческая сегментация на ML.",
 "conversationQuestions": [
 "Разделены ли клиенты на группы дальше простых уровней по сумме трат?",
 "Можете ли вы обратиться к одной группе клиентов отдельно от остальных?",
 "Какая доля промо сейчас уходит на всех клиентов разом?"
 ]
 },
 "d1-1-profile-360": {
 "businessPressure": "Данные о клиенте зачастую разбросаны: лояльность в одной системе, чеки магазина в другой, заправки на колонке в третьей, обращения в call-центр нигде. В итоге известны фрагменты — отдельно «заправщик», отдельно «покупатель кофе», отдельно «жалобщик» — и не видно, что это один человек. Любая персональная работа упирается в то, что цельного профиля клиента просто нет.",
 "whatWePutInPlace": "Собираем единый профиль клиента из всех источников: топливо, магазин, кафе, лояльность, обращения, оплаты. Один человек — один профиль, в котором видно всё его поведение. На этом профиле дальше работает и сегментация, и удержание, и персональные предложения.",
 "whatImproves": "Клиент виден целиком, а не кусками; персональная работа становится возможной в принципе; данные перестают дублироваться и противоречить друг другу.",
 "dataAiBehind": "Сведение источников в единый профиль поверх фундамента данных. Нужна интеграция систем — поэтому карточка опирается на единую основу данных (G1). Без профиля 360 продвинутые карточки этого блока работают вполсилы.",
 "conversationQuestions": [
 "Видите ли вы топливные, магазинные и сервисные касания как одного клиента?",
 "Сколько систем нужно открыть, чтобы собрать полную картину по клиенту?",
 "Что мешает связать карту лояльности, чек магазина и обращение в один профиль?"
 ]
 },
 "d1-1-behavioral-segmentation-ml": {
 "businessPressure": "Простые группы по сумме и частоте — хороший старт, но многое не ловят: клиента, который заправляется редко, но всегда с полным баком и кофе; того, кто ходит только на акции; того, кто вот-вот сменит компанию на конкурента. Правила «если потратил больше X» такие паттерны не различают — они видят только то, что в них заложили заранее.",
 "whatWePutInPlace": "ML-модели находят естественные группы клиентов по их реальному поведению — не по придуманным порогам, а по тому, как люди ведут себя на самом деле. Связываем эти группы с логикой предложений, каналом и моментом: кого защищать, кого растить, кого реактивировать, кого исключить из дорогих кампаний.",
 "whatImproves": "Точнее попадание в каждую группу; видны сегменты, которые правилами не нащупать; меньше бюджета на тех, кого промо не двигает.",
 "dataAiBehind": "Поведенческая кластеризация (ML) поверх профиля клиента и истории транзакций. Требует сведённых данных и базовой сегментации — поэтому идёт после них, а не вместо.",
 "conversationQuestions": [
 "Ваши сегменты построены на правилах или на реальном поведении?",
 "Есть ли группы клиентов, которые вы подозреваете, но не можете выделить?",
 "Насколько по-разному вы работаете с разными сегментами сегодня?"
 ]
 },
 "d1-1-clv": {
 "businessPressure": "Клиента оценивают по тому, сколько он принёс. Но ценный сегодня может уходить, а скромный новичок — вырасти в самого прибыльного через год. Решения о том, на кого тратить удержание и внимание, принимаются по прошлому, хотя нужны по будущему.",
 "whatWePutInPlace": "ML-модель считает не только текущую, но и будущую ценность клиента — растёт он или угасает. Это позволяет приоритизировать маркетинговые вложения по реальному потенциалу, а не по вчерашнему обороту.",
 "whatImproves": "Вложения идут в тех, кто будет ценным, а не только в тех, кто был; раньше виден растущий клиент и тот, кто тихо угасает; бюджет работает на перспективу.",
 "dataAiBehind": "Модель жизненной ценности клиента (CLV) на истории поведения и профиле 360. Нужна накопленная история и сведённые данные.",
 "conversationQuestions": [
 "Вы приоритизируете клиентов по тому, сколько они принесли, или сколько принесут?",
 "Видите ли вы растущего клиента до того, как он стал крупным?",
 "На основании чего сейчас решается, на кого тратить удержание?"
 ]
 },
 "d1-2-early-churn-signal": {
 "businessPressure": "На заправке клиент редко уходит формально — он просто заезжает реже и отдаёт часть бака конкуренту. Пока спад виден в общих продажах, отношения уже остыли, и вернуть человека дорого, а часто поздно. О потере узнают последними.",
 "whatWePutInPlace": "Строим ранний сигнал охлаждения: ловим клиента, у которого падает частота и чек относительно его собственной нормы — а не относительно средней по всем. Это даёт время среагировать, пока клиент ещё активен и открыт.",
 "whatImproves": "Уходящий виден заранее, а не по факту; удержание дешевле, потому что раньше; меньше тихой утечки ценных клиентов.",
 "dataAiBehind": "Сравнение текущего поведения клиента с его привычной нормой на данных лояльности. Простой индикатор по частоте и чеку — на готовых данных, без тяжёлой модели.",
 "conversationQuestions": [
 "Видите ли вы, что ценный клиент стал заезжать реже, — до того как это упало в общих цифрах?",
 "Сравниваете ли вы клиента с его собственной нормой или со средней по всем?",
 "Как быстро вы узнаёте, что постоянный клиент начал уходить?"
 ]
 },
 "d1-2-churn-prediction": {
 "businessPressure": "Падение частоты — это уже начавшийся уход. К моменту, когда сигнал очевиден, часть клиентов потеряна. Чтобы удерживать на опережение, нужно видеть не тех, кто уже уходит, а тех, кто только собирается, — по тонким изменениям в поведении.",
 "whatWePutInPlace": "ML-модель оттока по поведенческим признакам оценивает риск ухода до того, как он стал явным. Каждый ценный клиент получает оценку риска, и компания работает с зоной риска адресно.",
 "whatImproves": "Удержание срабатывает раньше точки невозврата; ресурс идёт на тех, кто реально под угрозой; выше общая удерживаемость клиентов.",
 "dataAiBehind": "ML-модель оттока на поведенческих признаках поверх профиля и истории. Нужны сведённые данные и накопленная история.",
 "conversationQuestions": [
 "Вы реагируете на ушедших или на тех, кто только собирается?",
 "Есть ли у вас оценка риска ухода по каждому ценному клиенту?",
 "Сколько клиентов вы теряете между «начал уходить» и «ушёл»?"
 ]
 },
 "d1-2-retention-action": {
 "businessPressure": "Увидеть, что клиент уходит, — половина дела. Вторая половина: что именно ему предложить. Универсальная скидка одному вернёт лояльность, другому просто подарит деньги, а третьего не тронет. Без понимания, что движет конкретным клиентом, удержание превращается в ту же веерную скидку под другим названием.",
 "whatWePutInPlace": "Подбираем удерживающее действие под клиента из зоны риска: кому скидку, кому бонус на магазин, кому просто напоминание, а кого отпустить, потому что удержание дороже клиента. Связываем сигнал риска с конкретным ответом.",
 "whatImproves": "Удержание адресное, а не веерное; меньше денег на тех, кого не вернёшь или кто вернётся и так; выше отдача удерживающих кампаний.",
 "dataAiBehind": "Подбор действия на основе сегмента, ценности и истории отклика клиента. Опирается на сегментацию и прогноз оттока.",
 "conversationQuestions": [
 "Вы предлагаете уходящим одно и то же или разное под клиента?",
 "Знаете ли вы, какой клиент откликнется на скидку, а какой — нет?",
 "Считаете ли вы, не дороже ли удержание самого клиента?"
 ]
 },
 "d1-2-retention-autopilot": {
 "businessPressure": "Даже когда компания умеет предсказывать уход и знает, чем удержать, всё упирается в руки: кто-то должен каждый день смотреть зону риска, выбирать действие, запускать. На сотнях тысяч клиентов это не масштабируется — реагируют на крупных, остальные утекают.",
 "whatWePutInPlace": "Связываем прогноз оттока и подбор действия в систему, которая сама отслеживает риск и запускает удержание — под правилами и контролем человека. Оператор задаёт рамки и утверждает логику; рутину система берёт на себя.",
 "whatImproves": "Удержание работает по всем клиентам, а не только по крупным; реакция мгновенная, без ручного цикла; человек управляет стратегией, а не перебирает списки.",
 "dataAiBehind": "Связка ML-модели оттока, подбора действия и механики кампаний в управляемый контур. Вершина блока — требует, чтобы прогноз, подбор и фундамент данных уже работали. ИИ исполняет заданные человеком правила, не подменяя его решение.",
 "conversationQuestions": [
 "Сколько клиентов из зоны риска вы реально успеваете обработать вручную?",
 "Что мешает запускать удержание автоматически, оставив контроль за собой?",
 "Готовы ли данные и модели под автоматический контур?"
 ]
 },
 "d1-3-basket-bundles": {
 "businessPressure": "Клиент заправился и уехал, хотя мог взять кофе, а к кофе — выпечку. Видно, что эти товары часто берут вместе, но это не используется: выкладка, подсказка кассира и предложение в приложении живут отдельно от того, что реально покупается в связке.",
 "whatWePutInPlace": "Находим устойчивые связки покупок и превращаем их в действие: что выложить рядом, что подсказать на кассе, что предложить в приложении, чтобы клиент добрал к основной покупке. Работаем на том, что уже продаётся вместе, а не угадываем.",
 "whatImproves": "Выше средний чек без новых клиентов; работают связки, которые раньше пропадали; выкладка и подсказки опираются на данные, а не на интуицию мерчандайзера.",
 "dataAiBehind": "Анализ совместных покупок на чеках, которые уже есть. Если у компании сильная BI-команда, часть этого может уже считаться — тогда ценность в переводе анализа в конкретное действие на точке.",
 "conversationQuestions": [
 "Знаете ли вы, что чаще всего берут вместе с топливом и с кофе?",
 "Выкладка и подсказки опираются на данные о связках или на привычку?",
 "Сколько чеков останавливается на одной позиции, хотя могли бы вырасти?"
 ]
 },
 "d1-3-personal-offer": {
 "businessPressure": "Одинаковое предложение всем работает плохо: одному нужен кофе, другому мойка, третьему ничего, и общая рассылка раздражает всех троих. О клиенте известно достаточно, чтобы предлагать точно, но предлагают наугад.",
 "whatWePutInPlace": "Определяем, что предложить конкретному клиенту, чтобы он заехал, зашёл в магазин или взял услугу — на основе его поведения и сегмента. Следующее лучшее предложение для каждого, а не одно на всех.",
 "whatImproves": "Выше отклик и конверсия в магазин; меньше раздражения от нерелевантных рассылок; топливный трафик конвертируется в нетопливную выручку.",
 "dataAiBehind": "Рекомендательная модель на профиле клиента, истории покупок и сегментах. Нужны сведённые данные и сегментация.",
 "conversationQuestions": [
 "Ваши предложения персональные или одинаковые для всех?",
 "Знаете ли вы, кому из клиентов что предложить, чтобы он зашёл в магазин?",
 "Как измеряется отклик на предложение по клиенту?"
 ]
 },
 "d1-3-best-offer-moment": {
 "businessPressure": "Правильное предложение в неправильный момент не срабатывает: акция на кофе, когда человек спешит на трассу, или мойка в дождь. Предложения шлют по расписанию кампании, а не по готовности клиента — и тратят лучшие предложения впустую.",
 "whatWePutInPlace": "Определяем момент, когда клиент восприимчив к предложению, — по его привычному ритму и контексту — и предлагаем тогда, а не когда удобно отделу маркетинга.",
 "whatImproves": "Выше отклик при том же предложении; меньше выгорания клиентов от несвоевременных рассылок; лучшие предложения не тратятся впустую.",
 "dataAiBehind": "Модель момента и триггера контакта на поведенческой истории. Поверх профиля и сегментации.",
 "conversationQuestions": [
 "Вы шлёте предложение по расписанию кампании или по готовности клиента?",
 "Знаете ли вы, когда конкретный клиент чаще откликается?",
 "Сколько хороших предложений уходит в неудачный момент?"
 ]
 },
 "d1-4-promo-effect": {
 "businessPressure": "Акция «сработала», потому что продажи выросли — но часть этих продаж случилась бы и без скидки, и компания просто подарила клиентам деньги. Без честного замера промо выглядит успешным по списаниям бонусов, но слабым по прибыли, и убыточное повторяют снова.",
 "whatWePutInPlace": "Измеряем реальный эффект акции: сравниваем поведение тех, кто получил промо, с контрольной группой, и считаем приростные визиты, литры и чек — а не просто факт списания. Видно, какое промо создаёт поведение, а какое субсидирует уже существующее.",
 "whatImproves": "Честная картина, какие акции приносят прибыль, а какие — только оборот; меньше повторов убыточных промо; маркетинг и финансы говорят на одном языке.",
 "dataAiBehind": "Оценка эффекта через контрольные группы на данных транзакций и кампаний. На готовых данных, без тяжёлой модели.",
 "conversationQuestions": [
 "Вы измеряете акцию по списаниям или по приростной прибыли?",
 "Какие из ваших промо клиент использовал бы и без скидки?",
 "Есть ли у вас контрольная группа, чтобы понять реальный эффект?"
 ]
 },
 "d1-4-uplift-discount": {
 "businessPressure": "Даже честно измеренное промо всё равно раздаётся слишком широко: внутри одной кампании есть те, кого скидка реально двигает, и те, кто получил бы покупку и так. Деньги уходят на вторых, потому что таргет грубый.",
 "whatWePutInPlace": "ML-модель приростного отклика определяет, кого именно скидка меняет, и направляет промо только на них. Внутри кампании отделяем «двигаемых» от тех, кто купит без стимула, и не тратим на вторых.",
 "whatImproves": "Тот же эффект кампании дешевле; прибыль защищена от лишних скидок; бюджет промо концентрируется там, где он работает.",
 "dataAiBehind": "Модель приростного отклика (uplift, ML) на истории кампаний и поведения. Нужна накопленная история откликов и сегментация.",
 "conversationQuestions": [
 "Внутри акции вы отделяете тех, кого скидка двигает, от тех, кто купит и так?",
 "Сколько бюджета промо уходит на гарантированных покупателей?",
 "Можете ли вы дать скидку адресно, а не всей группе?"
 ]
 },
 "d1-4-promo-engine": {
 "businessPressure": "Когда компания умеет сегментировать, таргетировать и мерить эффект, всё снова упирается в руки: каждую персональную кампанию надо собрать, запустить, отследить. Адресная работа не масштабируется вручную — и всё скатывается обратно к веерным акциям, потому что так проще.",
 "whatWePutInPlace": "Связываем сегменты, правила предложений и замер в движок, который запускает адресные кампании массово и под контролем: подбирает предложение под сегмент, проводит A/B, оптимизирует на ходу. Человек задаёт правила и рамки маржи; механику ведёт система.",
 "whatImproves": "Персонализация работает по всем клиентам, а не только в избранных кампаниях; кампании запускаются и оптимизируются быстро; маркетинг управляет стратегией, а не сборкой рассылок.",
 "dataAiBehind": "Движок кампаний поверх сегментации, замера промо и фундамента данных. Вершина блока — отсюда замок на всё перечисленное. ИИ оптимизирует внутри заданных человеком правил, не подменяя решение о стратегии.",
 "conversationQuestions": [
 "Сколько персональных кампаний вы реально успеваете вести вручную?",
 "Что мешает запускать адресные кампании массово, сохранив контроль?",
 "Готовы ли сегменты, замер и данные под такой движок?"
 ]
 },
 "d1-5-feedback-themes": {
 "businessPressure": "Обратная связь приходит отовсюду: отзывы в приложении, жалобы на станции, соцсети, call-центр, инциденты с качеством топлива. Её обрабатывают медленно, как поток обращений, и редко связывают с теми, кто может починить причину. Повторяющиеся проблемы — медленный сервис на конкретной АЗС, споры по лояльности, терминал — живут, потому что в массе обращений паттерн не виден.",
 "whatWePutInPlace": "Сводим отзывы и обращения из разных каналов в одну картину и автоматически раскладываем по темам, тональности и вероятной причине. Повторяющееся направляем тем, кто может исправить: операциям станции, поддержке, лояльности, снабжению. Видна не громкость потока, а суть.",
 "whatImproves": "Видны реальные причины недовольства, а не отдельные крики; повторяющиеся проблемы всплывают рано; команда занимается сутью, а не разгребанием объёма.",
 "dataAiBehind": "Обработка текста отзывов (темы, тональность, маршрутизация) на готовых каналах обратной связи. Готовый инструмент, ставится быстро.",
 "conversationQuestions": [
 "Сводятся ли отзывы из разных каналов вместе или живут по отдельности?",
 "Видите ли вы повторяющуюся проблему на конкретной станции до того, как она станет потоком жалоб?",
 "Отзыв — это сигнал для операций или нагрузка на поддержку?"
 ]
 },
 "d1-5-station-problem-early": {
 "businessPressure": "Одна жалоба — шум, десять жалоб на одну станцию за день — сигнал, что там что-то сломалось: сервис, оборудование, качество. Но пока жалобы читают по одной, всплеск на конкретной точке теряется, и проблема бьёт по выручке станции, прежде чем её заметят.",
 "whatWePutInPlace": "Отслеживаем поток обратной связи по каждой станции и подсвечиваем аномальный всплеск негатива сразу — с привязкой к точке и вероятной причине. Проблема видна как событие, а не как накопившаяся к концу месяца статистика.",
 "whatImproves": "Поломка сервиса или качества на точке видна за день, а не за месяц; меньше выручки теряется, пока проблему чинят; реакция адресная, по конкретной станции.",
 "dataAiBehind": "Детекция аномалий в потоке отзывов по станциям. Нужен налаженный сбор отзывов (карточка выше) как основа.",
 "conversationQuestions": [
 "Заметите ли вы всплеск жалоб на одну станцию в тот же день?",
 "Привязана ли обратная связь к конкретной точке?",
 "Сколько выручки теряет станция, пока проблема всплывёт в отчёте?"
 ]
 },
 "d1-5-ai-support-line": {
 "businessPressure": "Бо́льшая часть обращений клиентов — типовые: где ближайшая АЗС, что с баллами, как работает программа, статус по карте. Они отнимают время поддержки, которое могло бы идти на сложное и конфликтное. А в пик и в нерабочие часы клиент ждёт ответа, которого нет.",
 "whatWePutInPlace": "Ставим ИИ первой линии: он отвечает клиентам на типовые вопросы в чате и приложении сразу и круглосуточно, а сложное и эмоциональное передаёт человеку с контекстом. Поддержка занимается тем, что требует человека, а не повторяет одно и то же.",
 "whatImproves": "Клиент получает ответ сразу и в любое время; поддержка разгружена от типового; сложные обращения доходят до человека с готовым контекстом.",
 "dataAiBehind": "Диалоговый ИИ на базе знаний и регламентах компании, с передачей человеку по правилам. Вершина D1.5 — отсюда замок на базу знаний. ИИ закрывает типовое и эскалирует, а не решает конфликт сам.",
 "conversationQuestions": [
 "Какая доля обращений в поддержку — типовые повторяющиеся вопросы?",
 "Получает ли клиент ответ в нерабочие часы и в пик?",
 "Доходит ли сложное обращение до человека с контекстом или начинается с нуля?"
 ]
 },

 "d1-7-partner-data-platform": {
 "businessPressure": "Есть то, за что поставщики и партнёры готовы платить: обезличенное понимание, что, где и кто покупает. Но этот актив лежит мёртвым — нет ни продукта, ни безопасного способа им делиться, ни модели продажи.",
 "whatWePutInPlace": "Строим продукт на данных: обезличенная аналитика и контролируемый доступ для партнёров и поставщиков в защищённом контуре — без раскрытия персональных данных. Компания начинает зарабатывать на знании, а не только на топливе и товаре.",
 "whatImproves": "Новый поток дохода вне продаж; данные превращаются из издержки в актив; партнёры получают ценность, не получая персональных данных.",
 "dataAiBehind": "Аналитический продукт и защищённый контур доступа поверх зрелого фундамента данных. Вершина — зависит от данных и управления доступом.",
 "conversationQuestions": [
 "Есть ли у вас данные, за которые поставщики и партнёры готовы платить?",
 "Можете ли вы делиться аналитикой, не раскрывая персональные данные?",
 "Кто внутри отвечает за данные как за продукт?"
 ]
 },
 "d2-1-b2b-profitability": {
 "businessPressure": "B2B даёт объём, и объём прячет правду: крупный контракт может быть убыточным после скидки, отсрочки и стоимости обслуживания, но выглядит важным из-за литров. Менеджер по корпоративным клиентам видит оборот, а не маржу, и держится за клиентов, которые тихо съедают прибыль.",
 "whatWePutInPlace": "Считаем прибыльность каждого корпоративного счёта по-настоящему: маржа после скидок, отсрочек и условий. Видно, кто из B2B-клиентов зарабатывает, а кто живёт за счёт компании.",
 "whatImproves": "Понятно, какие контракты прибыльны, а какие убыточны под объёмом; видны кандидаты на пересмотр условий; решения по B2B — по марже, а не по литрам.",
 "dataAiBehind": "Маржинальный анализ портфеля на данных продаж, скидок и условий, которые уже есть. На готовых данных.",
 "conversationQuestions": [
 "Знаете ли вы маржу по каждому B2B-счёту после всех условий?",
 "Какие крупные контракты убыточны под объёмом?",
 "Менеджеры видят оборот или прибыль по счёту?"
 ]
 },
 "d2-1-b2b-value-forecast": {
 "businessPressure": "Не каждый прибыльный сегодня счёт стоит инвестиций, и не каждый небольшой — бесперспективен. Решения о том, в какие счета вкладывать развитие и удержание, принимаются по текущему объёму, а не по потенциалу.",
 "whatWePutInPlace": "Оцениваем потенциал и направление каждого корпоративного счёта: где есть рост, где доппродажи сервисов (мойка, ТО, шины), где счёт стагнирует. Приоритизируем развитие по потенциалу, а не по сегодняшнему объёму.",
 "whatImproves": "Развитие идёт в счета с реальным потенциалом; видны возможности доппродаж; ресурс менеджеров по корпоративным клиентам на перспективных клиентах.",
 "dataAiBehind": "ML-модель ценности и роста счёта на истории счёта, поведении и условиях. Нужны сведённые данные по счётам.",
 "conversationQuestions": [
 "Вы развиваете счета по объёму или по потенциалу?",
 "Где у текущих B2B-клиентов есть рост или доппродажи?",
 "Какие счета стагнируют, хотя в них вкладываются?"
 ]
 },
 "d2-2-b2b-cooling-signal": {
 "businessPressure": "Корпоративный клиент уходит не объявлением, а спадом: меньше заправок по картам, меньше объём, тише контакт. Пока это всплывёт при продлении, клиент уже наполовину у конкурента, и переговоры идут со слабой позиции.",
 "whatWePutInPlace": "Ловим охлаждение счёта рано: падение объёмов и частоты относительно его нормы, пока договор в силе и есть время среагировать. Менеджер по корпоративным клиентам видит риск заранее, а не за месяц до окончания контракта.",
 "whatImproves": "Уходящий B2B-клиент виден заранее; переговоры о продлении с позиции силы; меньше тихих потерь крупных счетов.",
 "dataAiBehind": "Индикатор снижения активности по счёту на транзакциях флит-карт. Отдельно от B2C — у корпоративного клиента другая экономика.",
 "conversationQuestions": [
 "Видите ли вы, что корпоративный клиент стал заправлять меньше, — до продления?",
 "Как рано менеджер по корпоративным клиентам узнаёт об охлаждении счёта?",
 "Сколько B2B-клиентов уходят «неожиданно»?"
 ]
 },
 "d2-2-renewal-risk": {
 "businessPressure": "Спад объёма — уже начавшийся уход. Чтобы удержать корпоративного клиента, нужно видеть риск непродления заранее, по совокупности сигналов, а не по одному падению литров перед самым окончанием договора.",
 "whatWePutInPlace": "ML-модель риска непродления по поведению счёта: объём, частота, платежи, контакт, использование сервисов. Счета на грани видны заранее, и удержание начинается до переговоров, а не во время.",
 "whatImproves": "Риск ухода виден до окна продления; удержание адресное и своевременное; выше доля продлённых контрактов.",
 "dataAiBehind": "ML-модель оттока корпоративных клиентов — отдельная от B2C, признаки и экономика другие. На истории счетов.",
 "conversationQuestions": [
 "Видите ли вы риск непродления за квартал до конца договора?",
 "Что сигналит об уходе B2B-клиента, кроме падения объёма?",
 "Когда начинается удержание — до переговоров или во время?"
 ]
 },
 "d2-3-risk-value-terms": {
 "businessPressure": "Скидки, лимиты и отсрочки B2B часто раздаются по инерции и по силе переговорщика, а не по реальной ценности и риску клиента. В итоге сильные клиенты получают слишком много, рискованные — слишком хорошие условия, и маржа портфеля размывается.",
 "whatWePutInPlace": "Привязываем условия к клиенту: скидка и лимит под его реальную ценность и риск, а не под привычку или давление в переговорах. Менеджер получает обоснованную рамку, в которой торгуется.",
 "whatImproves": "Условия отражают ценность и риск; маржа портфеля под контролем; переговоры опираются на данные, а не на напор клиента.",
 "dataAiBehind": "Скоринг для дифференцированных условий на данных портфеля (маржа, история, платежи). Нужна сведённая картина по аккаунтам.",
 "conversationQuestions": [
 "Ваши B2B-условия отражают ценность клиента или силу его переговорщика?",
 "Кто из клиентов получает условия лучше, чем оправдано?",
 "Есть ли у менеджера обоснованная рамка для торга?"
 ]
 },

 "b1-1-delivery-status-view": {
 "businessPressure": "Входящая поставка проходит через чужие руки: поставщик, перевозчик, железная дорога, таможня, приёмка на базе. У каждого свои данные, и сводятся они телефонными звонками и письмами. Сеть узнаёт о срыве, когда он уже случился, и реагирует в режиме тушения пожара.",
 "whatWePutInPlace": "Сводим статус входящих поставок в одну картину: от подтверждения поставщика до приёмки на базе — где партия, на каком этапе, придёт ли вовремя. Логистика видит ситуацию целиком, а не собирает её обзвоном.",
 "whatImproves": "Статус поставки виден в одном месте; меньше ручного обзвона; проблема видна до того, как сорвала приёмку или снабжение станций.",
 "dataAiBehind": "Сведение данных о движении партий из имеющихся источников (поставщик, перевозчик, приёмка) в единую витрину. На готовых данных — Quick Win.",
 "conversationQuestions": [
 "Видите ли вы статус входящей партии без звонков поставщику и перевозчику?",
 "Как быстро вы узнаёте, что поставка задерживается?",
 "Работают ли логистика, база и финансы от одной картины или каждый от своей?"
 ]
 },
 "b1-1-delay-warning": {
 "businessPressure": "Видеть, где партия сейчас, — полдела. Срыв поставки бьёт по снабжению станций и порождает аварийные дозакупки, и чем позже о нём узнают, тем дороже реакция. Сети нужен не статус по факту, а предупреждение — пока есть время переиграть.",
 "whatWePutInPlace": "Прогнозируем прибытие и подсвечиваем риск задержки заранее: где назревает срыв по перевозчику, маршруту или этапу. Логистика получает сигнал, пока можно перераспределить или подстраховаться, а не постфактум.",
 "whatImproves": "Срыв виден заранее, а не по факту; меньше аварийных дозакупок и простоев станций из-за поздней поставки; время на реакцию вместо тушения пожара.",
 "dataAiBehind": "Прогноз прибытия и раннее выявление риска (ML на истории поставок и данных движения). Advanced — нужна история и связанные данные.",
 "conversationQuestions": [
 "Узнаёте ли вы о риске срыва поставки до того, как он произошёл?",
 "Сколько аварийных дозакупок вызвано поздно замеченными задержками?",
 "Есть ли у вас предупреждение или только факт срыва?"
 ]
 },
 "b1-2-acceptance-shortage": {
 "businessPressure": "Между «заказано», «отгружено» и «принято» возникают расхождения: недостача объёма, недостающие документы, споры по качеству, вопросы по таможне. Если это всплывает только когда финансы ловят несоответствие при сверке счёта, теряется и время, и переговорная позиция с поставщиком.",
 "whatWePutInPlace": "Сверяем заказанное, отгруженное и принятое по каждой партии и подсвечиваем расхождения сразу: где недостача, где не сошлись документы, где спор. Расхождение видно при приёмке, а не при сверке счёта через недели.",
 "whatImproves": "Недостачи и расхождения видны рано; сильнее позиция в споре с поставщиком; чище документальный след; меньше сюрпризов при сверке.",
 "dataAiBehind": "Сопоставление заказа, отгрузки и приёмки на документах и данных учёта, которые уже есть. Quick Win — без моделей.",
 "conversationQuestions": [
 "Сверяете ли вы заказано / отгружено / принято по каждой партии?",
 "Расхождения видны при приёмке или при сверке счёта постфактум?",
 "Какие проблемы приёмки повторяются по поставщику, маршруту или базе?"
 ]
 },
 "b1-2-systemic-loss": {
 "businessPressure": "Одно расхождение — погрешность. Регулярные расхождения по конкретному поставщику, маршруту или этапу — это система, которая стоит денег. Но пока расхождения смотрят по одному, паттерн не виден, и за регулярную утечку платят как за случайность.",
 "whatWePutInPlace": "Анализируем расхождения поставок в совокупности: где недостачи повторяются по поставщику, маршруту, базе или периоду. Отделяем разовый шум от системной утечки и показываем, где разбираться в первую очередь.",
 "whatImproves": "Видна регулярная утечка, спрятанная в шуме; претензии к поставщикам обоснованы паттерном, а не единичным случаем; ресурс расследования идёт туда, где деньги.",
 "dataAiBehind": "Анализ паттернов расхождений (ML на истории поставок) — отделяет систему от шума. Advanced — нужна накопленная история приёмок.",
 "conversationQuestions": [
 "Видите ли вы регулярные недостачи по конкретному поставщику или маршруту?",
 "Отличаете ли вы разовую погрешность от системной утечки?",
 "Сколько теряется на расхождениях, которые проходят как случайные?"
 ]
 },
 "b1-3-demurrage-control": {
 "businessPressure": "Железнодорожная логистика — это сторонний оператор, мощности разгрузки базы, документы и таможенные процедуры. У каждого этапа свой риск задержки, а вагоны, стоящие сверх нормы, генерируют демередж, который за год набегает в значительную сумму. Картина разорвана: у оператора свои данные, у базы свои, финансы видят счёт за демередж недели спустя — когда причину уже не разобрать.",
 "whatWePutInPlace": "Сводим движение вагонов, окна разгрузки на базе, статус документов и риск демереджа в одну операционную картину. Показываем, какие вагоны подходят к порогу штрафа, где повторяются затыки разгрузки и какие базы, маршруты или смены генерируют непропорциональную стоимость. Логистика, база и финансы действуют по риску демереджа до того, как он стал счётом.",
 "whatImproves": "Меньше демереджа; быстрее оборот вагонов; дисциплина разгрузки на базах; финансы видят риск заранее, а не счёт постфактум.",
 "dataAiBehind": "Сведение данных трекинга вагонов, графиков разгрузки, статуса документов и истории демереджа в одну картину; выделение вагонов в зоне риска и повторяющихся узких мест. Advanced — нужны связанные данные ЖД и базы.",
 "conversationQuestions": [
 "Сколько демереджа компания платит за год, и видит ли его операционная команда регулярно?",
 "Когда демередж начислен — причину расследуют и устраняют или просто оплачивают?",
 "Работают ли база, логистика и финансы от одной картины статуса вагонов?"
 ]
 },
 "b2-1-drain-fill-reconciliation": {
 "businessPressure": "При сливе-наливе на базе возникают расхождения: акт говорит одно, факт по резервуару другое. Температура, плотность, погрешность замера, недослив — всё это убыль, которую часто списывают по норме, не разбираясь, нормальная она или нет. Реальные потери прячутся среди допустимой убыли.",
 "whatWePutInPlace": "Сверяем фактическое движение топлива при сливе-наливе с актами слива/налива и показаниями резервуаров и подсвечиваем расхождения сразу — на операции, а не на квартальной инвентаризации. Видно, где факт не сходится с актом.",
 "whatImproves": "Расхождения видны в момент операции; меньше потерь, списанных как норма; чище учёт движения топлива на базе.",
 "dataAiBehind": "Сопоставление актов слива/налива, показаний резервуаров и данных слива-налива с поправками на температуру и плотность. Scoped — нужна интеграция данных приёмки и резервуаров.",
 "conversationQuestions": [
 "Сверяется ли акт слива/налива с фактическим объёмом в момент операции?",
 "Какая доля убыли списывается по норме без разбора?",
 "Видите ли вы расхождение до инвентаризации?"
 ]
 },
 "b2-1-normal-vs-loss": {
 "businessPressure": "Потери топлива тяжело контролировать, потому что часть убыли нормальна, а часть — кража, утечка, ошибка замера, недопоставка, проблема калибровки или процесса. Без дисциплины допусков команды либо игнорируют реальные потери, либо расследуют шум.",
 "whatWePutInPlace": "Сверяем ожидаемое и фактическое движение топлива на уровне резервуара, базы и периода, отделяем нормальный допуск от аномального отклонения и приоритизируем расследования по существенности, повторяемости и риску. Где данные позволяют — связываем аномалию с вероятной причиной.",
 "whatImproves": "Реальные потери видны раньше; меньше ложных расследований; дисциплина допусков; защита от кражи и утечки топлива.",
 "dataAiBehind": "Выявление аномального отклонения и кластеризация паттернов по базе, резервуару, поставщику, поставке, периоду. Advanced — нужна история и поправки на температуру/плотность.",
 "conversationQuestions": [
 "Сравниваются ли потери с явными правилами допуска?",
 "Какие базы или резервуары показывают повторяющееся аномальное отклонение?",
 "Отличают ли расследователи риск кражи от ошибки замера или процесса?"
 ]
 },
 "b2-2-quality-tank-control": {
 "businessPressure": "На базе топливо хранится, смешивается, перекачивается между резервуарами. Ошибка в распределении по РВС или пропущенное отклонение качества доходит до станции и до клиента — а это претензии, репутация и в худшем случае вывод топлива из продажи. Контроль часто ручной и реактивный.",
 "whatWePutInPlace": "Сводим контроль качества и состояния резервуаров в одну картину: где отклонение по качеству, где риск недопустимого смешения, где ёмкость простаивает или переполнена. Проблема видна на базе, до того как ушла на станции.",
 "whatImproves": "Отклонение качества поймано до клиента; ёмкость используется без простоя; меньше риска вывода топлива из продажи.",
 "dataAiBehind": "Сведение данных по резервуарам, качеству и движению топлива на базе. Scoped — нужна интеграция данных РВС.",
 "conversationQuestions": [
 "Видите ли вы отклонение качества до того, как топливо ушло на станции?",
 "Простаивает ли ёмкость или переполняется из-за ручного распределения?",
 "Как контролируется риск недопустимого смешения?"
 ]
 },
 "b3-1-station-fuel-need-view": {
 "businessPressure": "Сухой остаток на станции бьёт по выручке, доверию клиента, обслуживанию B2B и бренду. Переполнение или плохо спланированный завоз создаёт проблемы с приёмкой. Многие сети видят риск поздно, потому что показания резервуаров, темп продаж и график доставок не сведены вместе — диспетчер реагирует на звонок «у нас заканчивается», а не видит риск заранее.",
 "whatWePutInPlace": "Строим картину риска по резервуарам: текущий остаток, безопасные пределы, темп продаж, плановые доставки. Подсвечиваем станции, идущие к опустошению или переполнению. Диспетчер получает список исключений «кому везти в первую очередь», а не статичный отчёт по остаткам.",
 "whatImproves": "Меньше сухих остатков и аварийных доставок; диспетчер приоритизирует по реальному риску; раннее вмешательство, пока риск не стал простоем колонки.",
 "dataAiBehind": "Сведение показаний резервуаров, темпа продаж, планов доставки и пределов ёмкости; оценка времени до опустошения. На имеющихся данных (если есть автоматические уровнемеры) — Quick Win; если показания ручные, сначала наладить сбор.",
 "conversationQuestions": [
 "Видите ли вы, какие резервуары иссякнут до следующей плановой доставки?",
 "Диспетчеризация идёт по реальному риску или по списку плановых заявок?",
 "Как часто станции требуют аварийной доставки из-за поздно замеченного риска?"
 ]
 },
 "b3-1-auto-dispatch": {
 "businessPressure": "Даже когда риск опустошения виден, превратить его в выполнимый план доставки сложно: план должен учесть ёмкость резервуаров, окна доставки, размеры секций бензовоза, доступность машин и водителей, остатки на базе, реальность маршрута. Теоретически верная разнарядка может быть операционно невыполнима — и диспетчер переделывает её вручную.",
 "whatWePutInPlace": "Превращаем прогноз потребности в выполнимые рекомендации по разнарядке: что, откуда, в каком объёме и когда везти на каждую станцию — с учётом ограничений ёмкости, минимальной партии, секций, доступности базы, машин и водителей. Начинаем с поддержки решения диспетчера, а не с полной автоматизации.",
 "whatImproves": "Разнарядка выполнима, а не теоретична; меньше ручных переделок диспетчером; меньше аварийных доставок; лучше загрузка машин; согласованность планирования и логистики.",
 "dataAiBehind": "Оптимизация разнарядки (алгоритм планирования) поверх прогноза спроса из A1, остатков и ограничений. Major Program — уровень системы. Замок на прогноз спроса.",
 "conversationQuestions": [
 "Отражает ли разнарядка реальные ограничения доставки?",
 "Как часто диспетчер переделывает план, потому что он невыполним?",
 "Какие ограничения чаще всего ломают разнарядку?"
 ]
 },
 "b3-1-dispatcher-agent": {
 "businessPressure": "Когда уже умеешь считать выполнимую разнарядку, остаётся ручной труд: диспетчер каждый день собирает картину, считает, оформляет, корректирует. На большой сети с десятками баз и сотнями станций это рутина, которая не масштабируется и зависит от опыта конкретного диспетчера.",
 "whatWePutInPlace": "Связываем риск, прогноз и расчёт разнарядки в систему, которая сама строит план доставки по правилам компании — человек проверяет и утверждает. Диспетчер задаёт приоритеты и контролирует, рутину построения берёт на себя система.",
 "whatImproves": "Диспетчер управляет приоритетами, а не строит план вручную; разнарядка готовится быстро и единообразно; меньше зависимости от опыта одного человека.",
 "dataAiBehind": "Связка прогноза, оптимизации разнарядки и правил в управляемый контур. Вершина блока — отсюда замок. ИИ исполняет правила человека, не принимает решение о приоритетах сам.",
 "conversationQuestions": [
 "Сколько времени диспетчера уходит на ежедневное построение разнарядки?",
 "Что мешает автоматизировать построение плана, оставив утверждение за собой?",
 "Готовы ли прогноз и данные под автоматическую разнарядку?"
 ]
 },
 "b3-2-fleet-status-view": {
 "businessPressure": "Пока рейс в пути, диспетчер часто не видит, где машина и что со статусом доставки — узнаёт по факту прибытия или по звонку. Это слепая зона: нельзя ни переиграть, ни предупредить станцию, ни поймать отклонение вовремя.",
 "whatWePutInPlace": "Даём картину рейсов в реальном времени: где машины, на каком этапе доставка, есть ли отклонения. Диспетчер видит исполнение, а не реконструирует его постфактум.",
 "whatImproves": "Видно исполнение рейсов в реальном времени; можно переиграть на ходу; станции предупреждены о доставке точнее.",
 "dataAiBehind": "Сведение данных GPS/телематики и подтверждений доставки в картину рейсов. Scoped — нужна интеграция телематики.",
 "conversationQuestions": [
 "Видите ли вы, где сейчас машины и что в пути?",
 "Узнаёте ли вы об отклонении рейса на ходу или по факту?",
 "Можете ли предупредить станцию о точном времени доставки?"
 ]
 },
 "b3-2-route-truck-driver": {
 "businessPressure": "Доставка топлива ограничена секциями бензовоза, марками топлива, окнами доставки, часами водителя, дорожными ограничениями, приёмной способностью станции, доступностью базы. Ручное планирование работает на малом масштабе, но становится нестабильным с ростом сети, расстояний, числа марок и срочности — растут холостой пробег, простои и стоимость доставки.",
 "whatWePutInPlace": "Строим планирование маршрутов и рейсов, которое приоритизирует станции по реальному риску и создаёт выполнимые последовательности доставки — с учётом секций, совместимости марок, расстояния, окон, смен водителей, доступа к станции, базы и аварийных приоритетов. Начинаем с рекомендаций и права диспетчера переопределить, до более глубокой автоматизации.",
 "whatImproves": "Надёжнее доставка; меньше усилий на планирование; меньше аварийных рейсов; выше загрузка машин; меньше холостого пробега.",
 "dataAiBehind": "Оптимизация маршрутов (алгоритм маршрутизации) поверх потребности, ограничений транспорта и геоданных. Major Program — уровень системы (ядро TMS).",
 "conversationQuestions": [
 "Маршруты строятся по реальной срочности станций или по статичному графику?",
 "Какие ограничения чаще всего вынуждают переделывать рейс вручную?",
 "Видит ли диспетчер, почему рекомендованный маршрут выполним?"
 ]
 },
 "b3-3-trip-plan-fact": {
 "businessPressure": "Стоимость доставки тихо растёт через низкую загрузку машин, лишние рейсы, холостой пробег, простои на базе и станции, нехватку водителей. Сеть видит общую стоимость логистики, но не операционные причины за ней — и не может управлять тем, чего не видит по составляющим.",
 "whatWePutInPlace": "Строим картину исполнения рейсов: план против факта, загрузка машин, холостой пробег, время ожидания, стоимость маршрута, надёжность доставки. Видно, где стоимость структурная, где планирование слабое, а где нужны управленческие решения.",
 "whatImproves": "Стоимость логистики объяснима по маршруту, машине, базе, водителю; видны хронически недогруженные рейсы; прозрачен баланс «надёжность против стоимости».",
 "dataAiBehind": "Сведение планов рейсов, подтверждений доставки, таймстампов, данных машин в картину исполнения. На имеющихся данных — Quick Win.",
 "conversationQuestions": [
 "Объяснима ли стоимость логистики по маршруту, машине и базе?",
 "Какие машины или маршруты хронически недогружены?",
 "Видны ли ограничения по водителям и машинам до того, как план сорвался?"
 ]
 },
 "b3-3-driver-safety": {
 "businessPressure": "Водители бензовозов везут груз высокого риска по дорогам общего пользования, и одна серьёзная авария — это травмы, экология, регуляторные последствия, страховые издержки и репутация на годы. Опасное поведение — превышение, резкое торможение, усталость, несанкционированные остановки — крупнейший управляемый фактор риска. Телематика в бензовозах часто уже стоит, но данные используются реактивно, после инцидента, а не как ранний сигнал.",
 "whatWePutInPlace": "Превращаем телематику, которая уже есть, в непрерывную картину поведения водителя: превышение, резкое торможение и ускорение, соблюдение маршрута, часы за рулём. Оцениваем водителей и подсвечиваем рискованное поведение — для адресного обучения, а не для разбора после ДТП.",
 "whatImproves": "Риск виден заранее, а не после аварии; меньше аварий и их тяжести; ниже страховые издержки; доказательная база для работы с водителями.",
 "dataAiBehind": "Работает на телематике, которая в бензовозах обычно уже установлена. Где есть бортовые камеры, ИИ-выявление усталости и отвлечения добавляет ранний сигнал (это уже дороже и не у всех — опция поверх базового контроля).",
 "conversationQuestions": [
 "Телематика используется как ранний сигнал риска или только для разбора инцидентов?",
 "Можете ли вы показать на данных, кто из водителей ведёт безопасно, а кто рискованно?",
 "Связаны ли поведение водителя, обучение и аварийность или это оценивается на глаз?"
 ]
 },
 "b3-3-fuel-theft-in-transit": {
 "businessPressure": "Рейс — это ещё и риск прямой утечки: несанкционированный слив топлива, левые остановки, отклонения от маршрута, манипуляции с объёмом доставки. В обычном потоке рейсов это теряется, и за слитое платят как за доставленное.",
 "whatWePutInPlace": "Ловим аномалии в исполнении рейса: несанкционированные сливы и остановки, отклонения маршрута, расхождения объёма «отгружено на базе — принято на станции». Подозрительное подсвечивается для проверки, а не всплывает в недостаче.",
 "whatImproves": "Слив и махинации видны рано; меньше потерь на разнице «отгружено — доставлено»; контроль рейса по данным, а не по доверию.",
 "dataAiBehind": "Выявление аномалий (ML по телематике, маршрутным данным и сверке объёмов отгрузки и приёмки). Advanced — нужна телематика и связка с приёмкой на станции.",
 "conversationQuestions": [
 "Ловите ли вы несанкционированный слив и отклонение маршрута в пути?",
 "Сходится ли объём «отгружено на базе» с «принято на станции» по каждому рейсу?",
 "Сколько теряется на разнице между отгруженным и доставленным?"
 ]
 },
 "c1-1-station-benchmark": {
 "businessPressure": "Станции отличаются трафиком, локацией, форматом, составом клиентов и конкуренцией. Сравнение их по сырому объёму или выручке награждает за локацию и наказывает за исполнение — и руководство не видит, какая станция реально недорабатывает, а какая просто стоит в слабом месте. Без честного сравнения внимание уходит к самым крупным станциям, а не к самым исправимым, и недобор тянется месяцами, пока не станет заметным.",
 "whatWePutInPlace": "Сравниваем станции с сопоставимыми соседями — похожий трафик, формат, тип локации, плотность конкурентов, состав клиентов — по метрикам, которые отражают качество работы: захват объёма, реализация маржи, пропускная способность, нетопливная привязка, обратная связь клиентов. Подсвечиваем тех, кто отстаёт от сопоставимых станций, и вероятные причины: исполнение, персонал, оборудование, поток.",
 "whatImproves": "Справедливое сравнение станций; ранний и точный сигнал недобора; внимание региональных менеджеров туда, где отдача быстрее; разговор со станцией начинается с готовой картины, а не с нуля.",
 "dataAiBehind": "Сведение продаж, маржи, трафика, характеристик локации и состава клиентов в одну картину; группировка станций в сопоставимые кластеры и нормализация структурных различий. Работает на имеющихся данных, но они часто в нескольких системах — поэтому не самый дешёвый старт.",
 "conversationQuestions": [
 "Когда вы говорите «станция недорабатывает» — сравнение честно к её локации и формату?",
 "Видят ли региональные менеджеры станции, отстающие от сопоставимых станций, а не от средней по сети?",
 "Когда станция недобирает, есть ли стартовая диагностическая картина или расследование с нуля?"
 ]
 },
 "c1-1-plan-control": {
 "businessPressure": "Недобор станции видно постфактум — в отчёте, когда месяц уже потерян. А станции нужен план на сегодня и сигнал прямо сейчас: идём по плану или отстаём, по топливу и по магазину. Без оперативного контроля реакция запаздывает — корректировать уже нечего.",
 "whatWePutInPlace": "Показываем выполнение плана по каждой станции в моменте: где идём по цели, где отстаём, по топливу и нетопливу. Подсвечиваем отставание сразу, пока смену и день ещё можно подтянуть, а не констатируем в конце периода.",
 "whatImproves": "Отставание видно в день, а не в отчёте; смена и регион реагируют, пока есть что корректировать; план — рабочий инструмент, а не посмертный разбор.",
 "dataAiBehind": "Сведение плана и факта по станции в оперативную картину на данных продаж в реальном времени. На имеющихся данных — Quick Win.",
 "conversationQuestions": [
 "Видите ли вы отставание станции от плана в течение дня или в отчёте к концу месяца?",
 "Успевает ли смена среагировать, пока день ещё не закрыт?",
 "План — это контроль в моменте или цифра для разбора постфактум?"
 ]
 },
 "c1-1-cause-analysis": {
 "businessPressure": "Увидеть, что станция отстаёт, — половина дела. Вторая: почему. Причина может быть в трафике, цене, сервисе, ассортименте, оборудовании, персонале — и разобрать её вручную по каждой отстающей станции долго. Без этого решения по станции принимаются на догадках.",
 "whatWePutInPlace": "Разбираем причину недобора конкретной станции: связываем её показатели с трафиком, ценой, исполнением, ассортиментом, оборудованием и подсвечиваем вероятный драйвер. Региональный менеджер получает не «станция плохая», а «вот что её тянет вниз и с чего начать».",
 "whatImproves": "Причина недобора видна, а не только факт; решения адресные, а не «подтянуть всё»; быстрее путь от проблемы к действию.",
 "dataAiBehind": "ML-анализ драйверов недобора поверх сравнения станций и данных точки. Advanced — нужны сведённые данные и история. Это тяжёлая карточка: «автоматическое объяснение причины» — амбициозно, начинаем с подсветки вероятных драйверов, не с готового вердикта.",
 "conversationQuestions": [
 "Когда станция недобирает, видите ли вы вероятную причину или ищете вручную?",
 "Решения по отстающей станции — на данных или на интуиции регионала?",
 "Сколько времени уходит от «станция просела» до «понятно, что чинить»?"
 ]
 },
 "c1-1-station-analysis-agent": {
 "businessPressure": "Когда есть и сравнение станций, и разбор причин, и оперативный план — всё это по-прежнему сводит человек: смотрит дашборды, сопоставляет, формулирует гипотезы, решает, куда ехать. На сети в сотни станций это узкое место — успевают разобрать крупных, остальные ждут.",
 "whatWePutInPlace": "Связываем сравнение, разбор причин и оперативный контроль в аналитика, который работает сам: постоянно анализирует станции, находит недобор, ставит гипотезы о причинах и подсвечивает региональному менеджеру, куда смотреть и что проверить в первую очередь. Человек принимает решение и действует — агент делает рутину сведения и анализа, которую раньше делал сам.",
 "whatImproves": "Разбираются все станции, а не только крупные; гипотезы готовы к утру, а не собираются вручную; менеджер занимается решениями и станциями, а не сведением цифр.",
 "dataAiBehind": "Связка benchmarking, анализа драйверов и оперативных данных в аналитический контур. Вершина блока — отсюда замок. Агент анализирует и рекомендует, решение и действие остаются за человеком.",
 "conversationQuestions": [
 "Сколько станций региональный менеджер реально успевает разобрать вручную?",
 "Что мешает, чтобы анализ и гипотезы готовились сами, а человек только решал?",
 "Готовы ли данные и аналитика под автоматический разбор станций?"
 ]
 },
 "c1-2-lost-traffic": {
 "businessPressure": "Часть выручки станция теряет невидимо: клиент видит очередь и проезжает мимо, или заезжает, но не заправляется и уезжает. В отчёте этого нет — там только то, что продано, а не то, что упущено. Сеть не знает цену собственных очередей.",
 "whatWePutInPlace": "Считаем потерянный трафик: сколько клиентов разворачивается из-за очереди, сколько заехало и не заправилось, в какие часы и на каких станциях. Упущенная выручка становится цифрой, а не ощущением.",
 "whatImproves": "Видна цена очередей и упущенного трафика; понятно, на каких станциях и в какие часы теряем; есть основание для решений по пропускной способности и смене.",
 "dataAiBehind": "Анализ трафика и поведения на въезде (видеопоток, данные станции) против фактических заправок. Scoped — нужны данные о трафике, не только о продажах.",
 "conversationQuestions": [
 "Знаете ли вы, сколько клиентов уезжает из-за очереди?",
 "Сколько заехавших не доходит до заправки и почему?",
 "В какие часы и на каких станциях теряется больше всего?"
 ]
 },
 "c1-2-queue-peak": {
 "businessPressure": "Очередь — это не постоянная проблема станции, а пики: час, день, событие. Если ловить их постфактум по выручке, реагировать поздно. Нужно видеть, когда станция захлёбывается, чтобы заранее подвести персонал или развести поток.",
 "whatWePutInPlace": "Подсвечиваем, когда и где формируются очереди, по паттернам трафика и времени — чтобы заранее усилить смену, перенастроить колонки или развести поток. Пик виден как прогноз, а не как потерянный час.",
 "whatImproves": "Очереди гасятся до того, как клиент уехал; персонал на пике, а не равномерно размазан; выше пропускная способность в часы спроса.",
 "dataAiBehind": "ML-анализ паттернов трафика и времени по станции — прогноз пиков. Advanced — нужна история трафика и данные потока.",
 "conversationQuestions": [
 "Знаете ли вы заранее, когда станция захлебнётся очередью?",
 "Персонал расставлен под пики спроса или равномерно?",
 "Сколько выручки теряется в предсказуемые часы пик?"
 ]
 },
 "c1-3-fuel-cash-losses": {
 "businessPressure": "На отпуске топлива и кассе теряются деньги: виртуальные заправки, недолив, ручные коррекции и аннулирования чеков, сговор оператора с «клиентом». В массе нормальных транзакций это не видно, и потери списываются на погрешность или всплывают на инвентаризации.",
 "whatWePutInPlace": "Ловим аномалии на отпуске и кассе: подозрительные коррекции и аннулирования, расхождения отпуска и оплаты, паттерны, похожие на сговор. Где есть камеры — связываем с видеопотоком. Подозрительное подсвечивается для проверки, а не теряется в потоке.",
 "whatImproves": "Потери на ТРК и кассе видны, а не списываются на погрешность; пойман сговор и недолив; контроль по данным, а не по доверию к смене.",
 "dataAiBehind": "Выявление аномалий (ML) в транзакциях ТРК и кассы, при наличии — связка с видеопотоком (CV). Scoped — нужна интеграция данных колонок и кассы.",
 "conversationQuestions": [
 "Видите ли вы аномальные коррекции и аннулирования чеков?",
 "Сходится ли отпущенное топливо с оплаченным по каждой смене?",
 "Сколько теряется на ТРК, что сейчас списывается на погрешность?"
 ]
 },
 "c1-4-shift-control": {
 "businessPressure": "Проблемы станции часто остаются локальными, пока не дойдут до клиента, регулятора или старшего менеджера. Полевые команды собирают наблюдения, фото, чек-листы, но дальнейшие действия оседают в мессенджерах и таблицах. Стандарты разнятся по регионам, а повторяющиеся проблемы по сети не видны.",
 "whatWePutInPlace": "Строим слой контроля исполнения и открытых вопросов по станциям: стандартизируем проверки, фиксируем доказательства, направляем проблему ответственному, отслеживаем просроченные действия и показываем паттерны по станции, региону, типу проблемы. Фокус на доведении до исправления, а не на инспекционной бумаге.",
 "whatImproves": "Исполнение на станциях под контролем; проблемы закрываются с ответственным; чище эскалация; быстрее исправляются проблемы, видимые клиенту; видны повторяющиеся слабые места сети.",
 "dataAiBehind": "Сведение чек-листов, полевых визитов, фото, заявок на обслуживание, ролей ответственных в рабочий процесс. Где полезно — классификация фото и заметок. Scoped — нужен налаженный сбор с полей.",
 "conversationQuestions": [
 "Проблемы станций доводятся до закрытия с назначенным ответственным?",
 "Какие типы проблем повторяются по регионам и форматам?",
 "Сколько контроля станций живёт вне управляемого процесса — в мессенджерах и таблицах?"
 ]
 },
 "c1-4-camera-standard-violation": {
 "businessPressure": "Соблюдение стандартов проверяют обходом — региональный менеджер приезжает и смотрит. Это редко, выборочно и не масштабируется: между визитами станция живёт как привыкла, а нарушения выкладки, формы, чистоты, безопасности видны только когда кто-то приехал.",
 "whatWePutInPlace": "Автоматически отслеживаем соблюдение стандартов по видеопотоку, где есть камеры: выкладка, форма персонала, чистота, базовые требования безопасности. Нарушение подсвечивается без приезда проверяющего — обход идёт туда, где реально нужно.",
 "whatImproves": "Стандарты под контролем между визитами, а не только во время; обход адресный; меньше нарушений, видимых клиенту.",
 "dataAiBehind": "Компьютерное зрение (CV) на видеопотоке — распознавание нарушений стандарта. Major Program — нужны камеры и обработка видео. CV — общий движок с C1.3, но задача другая (стандарты vs деньги).",
 "conversationQuestions": [
 "Стандарты проверяются только на обходе или постоянно?",
 "Сколько времени между визитами станция живёт без контроля?",
 "Какие нарушения видны клиенту раньше, чем проверяющему?"
 ]
 },
 "c1-5-maintenance-priority": {
 "businessPressure": "Поломка оборудования — это потерянные продажи, недовольство клиента, простой сервиса, риск безопасности. Обслуживание держится на графиках в таблицах, а руководство не видит бизнес-картины: какое оборудование сильнее бьёт по выручке и сервису, если встанет.",
 "whatWePutInPlace": "Сводим обслуживание критичного оборудования станции в одну картину: что обслужено, что на подходе, что просрочено, где нужны детали — с приоритетом по влиянию на выручку и сервис. Видно, что чинить в первую очередь.",
 "whatImproves": "Сроки не теряются; обслуживание приоритизировано по влиянию на бизнес, а не по давности заявки; меньше простоев, бьющих по выручке.",
 "dataAiBehind": "Сведение заявок на обслуживание, истории отказов, статуса оборудования и влияния на продажи в одну картину. На имеющихся данных — Quick Win.",
 "conversationQuestions": [
 "Видите ли вы состояние обслуживания критичного оборудования в одном месте?",
 "Приоритет обслуживания — по влиянию на бизнес или по давности заявки?",
 "Какое оборудование чаще всего бьёт по выручке, когда встаёт?"
 ]
 },
 "c1-5-predictive-maintenance": {
 "businessPressure": "Оборудование чинят, когда оно уже встало, — а встаёт оно по закону подлости в час пик, и это прямые потери продаж и недовольство клиента. Многие отказы дают ранние сигналы, но они не используются.",
 "whatWePutInPlace": "Ловим ранние признаки износа по данным оборудования и истории отказов, чтобы предупредить простой до того, как ТРК, холодильник или кофемашина встали. Обслуживание по состоянию, а не только по графику и не по факту поломки.",
 "whatImproves": "Меньше простоев в час пик; ниже потери продаж от вставшего оборудования; ремонт планово, а не аварийно.",
 "dataAiBehind": "Предиктивное обслуживание (ML на данных оборудования и истории отказов). Advanced — нужны данные состояния и история.",
 "conversationQuestions": [
 "Узнаёте ли вы об износе до того, как оборудование встало?",
 "Сколько продаж теряется, когда колонка встаёт в час пик?",
 "Обслуживание идёт по состоянию или по факту поломки?"
 ]
 },
 "c2-1-fuel-to-store-conversion": {
 "businessPressure": "Топливный трафик не превращается в продажи магазина сам собой. Клиент оплатил на колонке и уехал, зашёл, но взял только сигареты или воду, прошёл мимо маржинальных категорий. Сеть видит, что машин много, а магазин пустой, но не знает, какая доля заправившихся вообще заходит внутрь и где теряется переход.",
 "whatWePutInPlace": "Считаем конверсию «заправка → магазин» по станции, времени и сегменту: какая доля заправившихся заходит в магазин, где переход проваливается, в какие часы и на каких точках. Видна не общая выручка магазина, а именно потерянный переход с колонки.",
 "whatImproves": "Видно, где топливный трафик не доходит до магазина; понятно, какие станции теряют переход; основа для решений по выкладке, предложениям и операциям магазина.",
 "dataAiBehind": "Связка топливных транзакций, чеков магазина и (где есть) ID лояльности по станции и времени. Работает на имеющихся данных, которые обычно лежат рядом.",
 "conversationQuestions": [
 "Какая доля заправившихся заходит в магазин по станции и времени?",
 "На каких станциях есть трафик, но магазин пустой?",
 "Где переход с колонки в магазин теряется и почему?"
 ]
 },
 "c2-1-nonfuel-moment-offer": {
 "businessPressure": "Даже когда клиент зашёл в магазин, чек часто останавливается на одной позиции. Сеть знает, что берут вместе и что заходит в какое время, но не использует это, чтобы предложить нужное в нужный момент — выкладка, подсказка, предложение в приложении живут отдельно от реального поведения.",
 "whatWePutInPlace": "Определяем, что предложить заправившемуся клиенту, чтобы он зашёл и добрал к покупке: повод, момент, релевантная категория — по поведению, времени и составу корзины. Связываем топливо, магазин и кафе в одно предложение.",
 "whatImproves": "Выше нетопливный чек и конверсия в магазин; предложение релевантное, а не веерное; топливный трафик конвертируется в маржинальную нетопливную выручку.",
 "dataAiBehind": "Рекомендательная модель (ML) на поведении, корзине и сегменте клиента. Advanced — нужны сведённые данные. Пересекается с D1.3 (персональное предложение): здесь акцент на переходе с колонки в магазин, общий движок рекомендаций.",
 "conversationQuestions": [
 "Предлагаете ли вы заправившемуся повод зайти и добрать в магазине?",
 "Опираются ли выкладка и подсказки на реальное поведение или на привычку?",
 "Сколько чеков останавливается на одной позиции, хотя могли вырасти?"
 ]
 },
 "c2-2-local-assortment-sales": {
 "businessPressure": "Ассортимент магазина на АЗС ограничен местом, миссией трафика, частотой доставки, персоналом, сроком годности, локальным спросом. Широкий или скопированный со всех ассортимент морозит деньги, создаёт списания и упускает товары, которые подходят именно этой точке.",
 "whatWePutInPlace": "Анализируем продажи ассортимента по профилю станции и категории: где пробелы, где неликвид, где локальные хиты, где маржинальная возможность, какие операционные ограничения. Рекомендуем изменения ассортимента под роль станции и реальность доставки.",
 "whatImproves": "Лучше работают категории; меньше мёртвого стока; выше валовая маржа; ассортимент релевантен локальному спросу.",
 "dataAiBehind": "Сравнение продаж, маржи, стока, списаний по похожим станциям. На имеющихся данных POS — Quick Win.",
 "conversationQuestions": [
 "Ассортимент подобран под профиль станции или один на всех?",
 "Какие товары занимают место без достаточной маржи и оборота?",
 "Где локальный спрос не отражён в текущем ассортименте?"
 ]
 },
 "c2-2-product-demand-forecast": {
 "businessPressure": "Свежий товар, кофе, выпечка — их спрос меняется по часам, дням и станции. Возить по шаблону значит либо пустые полки в пик, либо списания в конце дня. Без прогноза по товару и времени магазин балансирует между недостачей и потерями.",
 "whatWePutInPlace": "Прогнозируем спрос по товарам и времени на каждой станции — включая фреш, кофе и выпечку по часам — чтобы возить под реальный спрос, а не под шаблон. Заказ опирается на прогноз, а не на привычку.",
 "whatImproves": "Меньше пустых полок в пик и списаний в конце дня; точнее заказ фреша и выпечки; выше маржа на скоропорте.",
 "dataAiBehind": "ML-прогноз спроса по товару, станции и времени на истории продаж. Advanced — нужна история и сведённые данные.",
 "conversationQuestions": [
 "Заказ фреша и выпечки опирается на прогноз по часам или на шаблон?",
 "Сколько теряется на пустых полках в пик и списаниях в конце дня?",
 "Учитывает ли заказ разницу спроса между станциями и временем?"
 ]
 },
 "c2-3-stock-waste-oos": {
 "businessPressure": "Магазинный сток живёт по другим правилам, чем топливо. Отсутствие товара на полке теряет импульсные продажи, лишний сток морозит деньги, плохой контроль сроков даёт списания, а воровство прячется в мелких чеках и текучке. Многие сети недоконтролируют магазин, потому что всё внимание на топливе.",
 "whatWePutInPlace": "Строим контроль стока, списаний и потерь для магазина: доступность, лишний сток, риск просрочки, отрицательный сток, необъяснённая недостача, потери по категориям. Фокус на немногих категориях и станциях, где сумма существенна.",
 "whatImproves": "Ниже списания и потери; лучше доступность товара; меньше замороженных денег; чище ответственность станции за магазин; выше нетопливная маржа.",
 "dataAiBehind": "Сведение POS, остатков, приёмки, списаний, инвентаризаций по профилю станции. На имеющихся данных — Quick Win.",
 "conversationQuestions": [
 "Какие категории магазина теряют больше всего на списаниях и недостаче?",
 "Видны ли пустые полки до того, как их увидел клиент?",
 "Каким станциям нужны другие правила контроля стока?"
 ]
 },
 "c2-3-markdown-reorder": {
 "businessPressure": "Скоропорт теряет с обоих концов: уценили поздно — списание, рано — потеряли маржу; заказали мало — пустая полка, много — порча. Ручное управление не успевает за сроками по каждому товару на каждой станции.",
 "whatWePutInPlace": "Подсказываем момент уценки скоропорта и точку дозаказа по товару и станции: когда снизить цену, чтобы продать до просрочки, и когда дозаказать, чтобы не было пустой полки. Баланс между списанием и недостачей по данным.",
 "whatImproves": "Меньше списаний и меньше пустых полок одновременно; выше маржа на скоропорте; меньше ручного контроля сроков.",
 "dataAiBehind": "Логика уценки и дозаказа на сроках годности, продажах и остатках. Advanced — нужна история и данные о сроках.",
 "conversationQuestions": [
 "Уценка скоропорта вовремя или по факту просрочки?",
 "Сколько теряется на списаниях и сколько на пустых полках?",
 "Управляется ли это по данным или вручную по каждому товару?"
 ]
 },
 "c2-4-retail-media": {
 "businessPressure": "Через станции проходит большой поток покупателей, и известно, что и кто покупает. Бренды-поставщики платят за доступ к такой аудитории — но нет ни продукта, ни механики, чтобы это продавать. Актив трафика и данных лежит мёртвым.",
 "whatWePutInPlace": "Строим продукт retail media: продаём брендам таргетированные размещения и предложения на станции, в магазине и в приложении — на основе трафика и обезличенного поведения покупателей. Сеть зарабатывает на своём трафике и данных, а не только на продаже товара.",
 "whatImproves": "Новый поток дохода вне продаж топлива и товара; трафик и данные превращаются в актив; бренды получают целевую аудиторию.",
 "dataAiBehind": "Рекламная механика на сегментах и трафике станции поверх данных лояльности и магазина. Вершина — отсюда Frontier и высшая стоимость. Сквозная способность с D1.7: дом здесь (физический трафик), вход из D — «на данных клиента».",
 "conversationQuestions": [
 "Есть ли у вас трафик и данные, за которые бренды готовы платить?",
 "Можете ли вы продать таргетированное размещение, не раскрывая персональные данные?",
 "Кто внутри отвечал бы за retail media как за продукт?"
 ]
 },
 "e1-live-finance-picture": {
 "businessPressure": "Финансовая картина у руководителя обычно собирается вручную и приходит с опозданием: чтобы ответить на вопрос «что с маржой в регионе», нужна выгрузка и день работы аналитика. ERP хранит цифры, но не даёт живой картины в разрезе, который нужен для решения сейчас.",
 "whatWePutInPlace": "Сводим финансы сети в живую картину: маржа и деньги по станции, региону, продукту, периоду — обновляемые, а не отчёт на вчера. Руководитель видит состояние сразу, в нужном разрезе, без выгрузки и ожидания аналитика.",
 "whatImproves": "Финансовая картина доступна сразу, а не к утру; решения опираются на свежие цифры; меньше зависимости от ручной выгрузки.",
 "dataAiBehind": "Сведение финансовых данных из ERP и операционных систем в живую витрину поверх единой основы (G1). Работает на имеющихся данных, но они часто в нескольких системах — поэтому не самый дешёвый старт. Это не «ещё один дашборд», а живая картина в разрезе решения; полная сила раскрывается со следующей карточкой (спросить словами).",
 "conversationQuestions": [
 "Сколько времени уходит, чтобы получить маржу в нужном разрезе?",
 "Финансовая картина живая или это отчёт на вчера?",
 "Сколько решений ждёт выгрузки от аналитика?"
 ]
 },
 "e2-plan-deviation": {
 "businessPressure": "Отклонение от плана — просевшая маржа, выросшие затраты — всплывает при ручной сверке план-факта, которую делают раз в период. К моменту, когда отклонение замечено, причина устарела, а реагировать поздно.",
 "whatWePutInPlace": "Подсвечиваем отклонения от плана сразу: где маржа, выручка или затраты ушли от ожидания, по станции, региону, статье. Отклонение видно как сигнал, а не как строка в ежемесячном план-факте.",
 "whatImproves": "Отклонение видно рано, а не в конце периода; меньше ручной сверки; внимание туда, где цифры разошлись с планом.",
 "dataAiBehind": "Автоматическое сопоставление факта с планом на финансовых данных. На имеющихся данных — Quick Win.",
 "conversationQuestions": [
 "Когда вы узнаёте об отклонении от плана — сразу или при сверке в конце периода?",
 "Сколько времени уходит на ручной план-факт?",
 "Видно ли отклонение в разрезе станции и статьи или только в итоге?"
 ]
 },
 "e2-deviation-drivers": {
 "businessPressure": "Видеть, что маржа просела, — мало. Нужно понять почему: цена, объём, себестоимость, микс, скидки, затраты — и на что из этого реально повлиять. Разложить это вручную долго, и руководитель получает «вот цифры», а не «вот причина и что делать».",
 "whatWePutInPlace": "Раскладываем отклонение на драйверы: что именно сдвинуло маржу или затраты — и подсвечиваем, на что можно повлиять. Руководитель получает не таблицу, а причину и точку приложения усилия.",
 "whatImproves": "Видна причина отклонения, а не только факт; решения адресные; быстрее путь от «просело» к «понятно, что делать».",
 "dataAiBehind": "Разложение отклонений на драйверы (цена / объём / себестоимость / микс / затраты) — аналитика, где применимо с ML, на финансовых и операционных данных. Advanced — нужны сведённые данные.",
 "conversationQuestions": [
 "Когда маржа просела, вы видите причину или только факт?",
 "Сколько времени уходит, чтобы разложить отклонение на драйверы?",
 "Получает ли руководитель «вот цифры» или «вот причина и что делать»?"
 ]
 },
 "e3-cash-position": {
 "businessPressure": "Топливный ритейл — кэш-интенсивный бизнес: закупочные обязательства, запас топлива, кредиторка, B2B-дебиторка, тайминг расчётов по картам, касса станций, операционные расходы движутся быстро. Казначейство часто видит сводную картину только после того, как решения уже создали давление на кэш.",
 "whatWePutInPlace": "Сводим картину кэша целиком: стоимость запаса, закупочные обязательства, кредиторка, дебиторка клиентов и флита, расчёты по картам, касса станций, операционные обязательства. Видно, где деньги заморожены и где назревает давление.",
 "whatImproves": "Видно, где лежат деньги сейчас; раньше видна заморозка капитала; решения по закупке и расчётам учитывают кэш.",
 "dataAiBehind": "Сведение данных по запасам, обязательствам, дебиторке и кассе в картину кэша. На имеющихся данных — Quick Win.",
 "conversationQuestions": [
 "Видите ли вы, где сейчас заморожены деньги, в одной картине?",
 "Узнаёт ли казначейство о давлении на кэш до или после решения?",
 "Сколько капитала заморожено в запасах и дебиторке прямо сейчас?"
 ]
 },
 "e3-cash-gap-forecast": {
 "businessPressure": "Кассовый разрыв в кэш-интенсивном бизнесе бьёт внезапно: сошлись закупочное обязательство, задержка дебиторки и тайминг расчётов — и денег не хватило. ERP покажет это по факту, прогноза разрыва в нём нет.",
 "whatWePutInPlace": "Прогнозируем движение кэша и подсвечиваем разрыв заранее: где и когда не хватит денег с учётом закупок, остатков, дебиторки и расчётов. Казначейство видит риск, пока есть время переиграть — придержать закупку, поработать с дебиторкой, перераспределить.",
 "whatImproves": "Разрыв виден заранее, а не по факту; время на реакцию вместо аврала; решения по закупке и расчётам учитывают будущий кэш.",
 "dataAiBehind": "ML-прогноз cashflow на данных обязательств, остатков, дебиторки и истории. Advanced — то, чего ERP по определению не делает; нужна связка данных.",
 "conversationQuestions": [
 "Видите ли вы кассовый разрыв заранее или узнаёте по факту?",
 "Учитывают ли решения по закупке будущий кэш?",
 "Сколько раз за год кэш оказывался под давлением неожиданно?"
 ]
 },
 "e3-payment-risk": {
 "businessPressure": "B2B и флит дают объём, но создают кредитный риск, отложенный кэш и просрочку. Продажи смотрят на объём, финансы видят просроченную дебиторку слишком поздно, а кредитные лимиты часто не связаны с текущим поведением и риском клиента.",
 "whatWePutInPlace": "Строим картину кредитного риска и дебиторки: экспозиция, просрочка, платёжное поведение, условия, использование лимита. Подсвечиваем, по каким счетам деньги под угрозой, и приоритизируем работу с долгом по риску и вероятности оплаты, а не по списку просрочки. Действия направляются ответственным за счёт.",
 "whatImproves": "Меньше просроченной дебиторки; работа с долгом по риску, а не по списку; раньше реакция на ухудшение платёжного поведения; кредитные лимиты связаны с текущим риском.",
 "dataAiBehind": "ML-скоринг платёжного риска на данных дебиторки, платежей, условий и поведения. Advanced — прогнозная логика поверх данных. Это дом сквозной способности; вход из D2.3 (взгляд B2B-менеджера на кредит конкретного счёта).",
 "conversationQuestions": [
 "Знаете ли вы, по каким счетам деньги под реальной угрозой, до просрочки?",
 "Связаны ли кредитные лимиты с текущим поведением клиента?",
 "Кто действует, когда важный счёт уходит в просрочку?"
 ]
 },
 "e5-duplicate-fake-payments": {
 "businessPressure": "В потоке платежей и счетов прячутся потери: задвоенные счета, фиктивные контрагенты, платежи, которых не должно быть, отклонения от политик. ERP их фиксирует, но не ищет — и всплывают они на аудите, когда деньги уже ушли.",
 "whatWePutInPlace": "Ловим аномалии в финансовых операциях: дубли счетов, фиктивные или подозрительные контрагенты, платежи вне паттерна. Подозрительное подсвечивается до или сразу после операции, а не на годовом аудите.",
 "whatImproves": "Дубли и фиктивные платежи видны рано; меньше потерь, уходящих незамеченными; чище контрагентская база.",
 "dataAiBehind": "Выявление аномалий (ML) в платежах и счетах на данных учёта. На имеющихся данных — Quick Win. ERP хранит, но не ищет — это наша территория.",
 "conversationQuestions": [
 "Видите ли вы задвоенные счета и фиктивных контрагентов до аудита?",
 "Сколько лишних платежей уходит незамеченными?",
 "Проверяются ли платежи на аномалии или только проводятся?"
 ]
 },
 "e5-policy-before-payment": {
 "businessPressure": "Многие потери — не явное мошенничество, а тихое отклонение от собственных правил: закупка вне политики, скидка сверх лимита, проводка не по регламенту. Поймать это после оплаты — значит вернуть деньги уже нельзя.",
 "whatWePutInPlace": "Подсвечиваем отклонения от политик в момент проводки или закупки — пока деньги не ушли: нарушение лимитов, условий, регламентов. Контроль срабатывает до оплаты, а не на разборе после.",
 "whatImproves": "Нарушение политики поймано до оплаты; меньше потерь, которые потом не вернуть; дисциплина соблюдения правил.",
 "dataAiBehind": "Проверка операций на соответствие политикам на данных учёта и правил. Advanced — нужна формализация политик и связка с потоком операций.",
 "conversationQuestions": [
 "Ловите ли вы нарушение политики до оплаты или после?",
 "Сколько закупок и проводок идёт вне регламента?",
 "Контроль политик — превентивный или посмертный?"
 ]
 },
 "e-frontier-finops-agent": {
 "businessPressure": "Даже когда у сети есть живая картина, контроль отклонений и прогноз кэша — всё это по-прежнему сводит человек: финдиректор и аналитики смотрят дашборды, сопоставляют, ищут, где утекает и где риск. Глубину связей между закупкой, логистикой, ценой, дебиторкой и затратами один человек охватить не может, и часть возможностей и рисков остаётся незамеченной.",
 "whatWePutInPlace": "Ставим аналитика, который работает постоянно и видит весь бизнес в цифрах: сам анализирует связанные процессы, находит точки утечки и переплаты, предлагает, где и как сократить затраты, подсвечивает назревающие риски и аномалии — раньше, чем их заметит человек. Это очень сильный финансово-операционный аналитик, который не спит и держит в голове всю экономику сети. Он анализирует и рекомендует — решение и действие остаются за финдиректором.",
 "whatImproves": "Видны точки сокращения затрат и риски, которые человек упускает; анализ идёт постоянно, а не к отчёту; финдиректор получает готовые находки и рекомендации, а не сводит цифры сам.",
 "dataAiBehind": "Аналитический агент поверх живой картины, контроля отклонений, прогноза кэша и единой основы данных. Вершина блока — отсюда замок на всё перечисленное. Важно: агент анализирует и рекомендует, не управляет деньгами и не исполняет операции — решение за человеком.",
 "conversationQuestions": [
 "Сколько связей между закупкой, ценой, логистикой и затратами реально охватывает ваш анализ?",
 "Какие точки сокращения затрат и риски всплывают слишком поздно?",
 "Что, если бы сильнейший аналитик работал по вашим цифрам постоянно и подсвечивал находки сам?"
 ]
 },

 "f1-1-hr-operations-assistant": {
 "businessPressure": "HR в сети АЗС постоянно отвечает на одни и те же вопросы: графики, отпуска, больничные, оформление документов, регламенты, обучение, onboarding. На большом полевом штате это превращается в постоянную ручную поддержку вместо работы с качеством персонала.",
 "whatWePutInPlace": "Ставим HR-ассистента на утверждённых политиках, регламентах, шаблонах и базе знаний. Он отвечает на типовые вопросы сотрудников, находит нужные документы, подсказывает порядок действий, готовит шаблоны заявлений и передаёт сложные случаи HR.",
 "whatImproves": "HR меньше занят рутиной; сотрудники получают ответы быстрее; коммуникация становится единообразной; меньше ошибок в типовых процедурах.",
 "dataAiBehind": "HR-регламенты, шаблоны документов, база знаний, оргструктура, графики, кадровые политики, интеграция с HR/task-системами при наличии.",
 "conversationQuestions": [
 "Сколько времени HR тратит на одинаковые вопросы, которые можно было бы закрывать автоматически?",
 "Какие HR-документы и шаблоны сотрудники ищут через людей, а не через систему?",
 "Есть ли единый источник утверждённых HR-ответов или каждый отвечает по памяти?"
 ]
 },
 "f1-2-linear-staff-screening": {
 "businessPressure": "Операторы АЗС, кассиры, продавцы, водители и линейные сотрудники часто нанимаются в условиях текучки. HR вручную разбирает поток резюме и анкет, хорошие кандидаты теряются, закрытие вакансий затягивается.",
 "whatWePutInPlace": "Автоматизируем первичный разбор откликов: извлекаем опыт, доступность, локацию, требования к сменам, базовые риски и соответствие позиции. HR получает short-list кандидатов и причины ранжирования.",
 "whatImproves": "Быстрее закрываются линейные вакансии; HR работает с релевантными кандидатами; меньше потерь из-за медленного отбора.",
 "dataAiBehind": "Резюме, анкеты, требования вакансий, история найма, причины отказов, данные по локациям и сменам.",
 "conversationQuestions": [
 "Видите ли вы, на каких станциях и ролях найм системно тормозит работу сети?",
 "Сколько времени проходит от отклика до первого контакта с кандидатом?",
 "Теряете ли вы кандидатов из-за медленного ручного отбора?"
 ]
 },
 "f1-3-field-staff-digital-loop": {
 "businessPressure": "Рабочий день полевого сотрудника часто существует «в голове», в чатах или на бумаге. Руководитель видит результат поздно: чек-лист не выполнен, фото не отправлено, стандарт нарушен, задача забыта, проблема на станции всплыла только после проверки.",
 "whatWePutInPlace": "Оцифровываем рабочий день: сменные задания, чек-листы, обходы, фото-подтверждения, напоминания, инциденты, обучение и задачи — всё в мобильном контуре. Руководитель видит выполнение по станции, региону, сотруднику и типу процесса.",
 "whatImproves": "Больше управляемости в полевых операциях; меньше «слепых зон»; быстрее исправление нарушений; понятнее дисциплина выполнения стандартов.",
 "dataAiBehind": "Мобильные чек-листы, task management, фотоотчёты, расписания, SOP, роли, география объектов, история выполнения, dashboards по сети.",
 "conversationQuestions": [
 "Можете ли вы сегодня увидеть, какие обязательные действия на АЗС реально выполнены, а какие только «должны были быть выполнены»?",
 "Какие стандарты контролируются только визитом руководителя или аудитора?",
 "Сколько нарушений становится видно только после проверки, а не в момент выполнения?"
 ]
 },
 "f1-4-turnover-early-signals": {
 "businessPressure": "Текучка и слабая адаптация становятся видны поздно: сотрудник уже ушёл, станция снова недоукомплектована, руководитель тушит операционную проблему.",
 "whatWePutInPlace": "Собираем сигналы по сотруднику и станции: пропуски, частые замены смен, невыполненные задания, результаты обучения, жалобы, нарушения стандартов, скорость onboarding. Модель показывает, где растёт риск ухода или провала адаптации.",
 "whatImproves": "Можно вмешаться раньше; снизить текучку; улучшить onboarding; увидеть проблемные станции и руководителей.",
 "dataAiBehind": "HRIS, графики, task manager, обучение, чек-листы, инциденты, результаты смен, данные по руководителям и станциям.",
 "conversationQuestions": [
 "Знаете ли вы заранее, где сотрудник «выпадает» из процесса до того, как он уволился?",
 "На каких станциях onboarding стабильно проваливается?",
 "Видите ли вы связь между руководителем, сменами, нарушениями и текучкой?"
 ]
 },
 "f2-1-legal-assistant": {
 "businessPressure": "Юристы и бизнес тратят время на поиск условий в договорах, регламентах, шаблонах и прошлых решениях. Ответы зависят от того, кто помнит документ и где он лежит.",
 "whatWePutInPlace": "Ставим ассистента, который ищет по договорам, политикам, шаблонам, письмам и внутренним заключениям — отвечает со ссылкой на источник и помогает быстро найти нужное условие или формулировку.",
 "whatImproves": "Быстрее ответы бизнесу; меньше ручного поиска; меньше зависимости от памяти отдельных сотрудников.",
 "dataAiBehind": "Договоры, допсоглашения, шаблоны, регламенты, претензии, письма, база юридических знаний.",
 "conversationQuestions": [
 "Сколько времени уходит на поиск уже существующего юридического ответа?",
 "Где сегодня лежат договоры, шаблоны и прошлые решения?",
 "Может ли бизнес получить проверенный ответ без ручного поиска юриста?"
 ]
 },
 "f2-2-legal-doc-draft": {
 "businessPressure": "Много юридической работы повторяется: письма, претензии, ответы контрагентам, допсоглашения, внутренние заключения. Юрист тратит время на первый черновик, хотя логика и шаблоны уже есть.",
 "whatWePutInPlace": "Генерируем черновики по утверждённым шаблонам и контексту кейса. Юрист проверяет, корректирует и утверждает, но не начинает с пустого листа.",
 "whatImproves": "Быстрее подготовка документов; меньше механической работы; выше единообразие формулировок.",
 "dataAiBehind": "Шаблоны документов, история похожих кейсов, договоры, переписка, юридические политики.",
 "conversationQuestions": [
 "Сколько типовых документов юрист готовит с нуля?",
 "Повторяется ли структура договоров, писем и претензий от кейса к кейсу?",
 "Сколько времени уходит на черновик, который мог бы готовиться сам?"
 ]
 },
 "f2-3-contract-obligations-control": {
 "businessPressure": "Сроки, штрафы, пролонгации, условия поставщиков и подрядчиков часто спрятаны в договорах. Риски всплывают поздно: срок пропущен, обязательство не выполнено, претензия не подготовлена.",
 "whatWePutInPlace": "Извлекаем ключевые обязательства из договоров и ведём их как управляемый контур: сроки, ответственные, условия, риски, события контроля и напоминания.",
 "whatImproves": "Меньше пропущенных сроков; быстрее реакция на нарушения; понятнее юридический риск по поставщикам и подрядчикам.",
 "dataAiBehind": "Договоры, допсоглашения, календарь обязательств, реестр контрагентов, переписка, task manager.",
 "conversationQuestions": [
 "Видите ли вы заранее, какие договорные обязательства могут стать проблемой в ближайшие 30–60 дней?",
 "Какие сроки и условия сегодня контролируются вручную?",
 "По каким поставщикам и подрядчикам риски повторяются, но не видны системно?"
 ]
 },
 "f2-4-legal-process-agent": {
 "businessPressure": "В зрелой компании юридическая работа распадается на множество параллельных задач: документы, сроки, согласования, претензии, проверки, запросы бизнеса. Даже с ассистентами нужен управляющий контур.",
 "whatWePutInPlace": "Агент ведёт юридические процессы под контролем юриста: собирает пакет документов, проверяет дедлайны, предлагает следующий шаг, готовит черновики, напоминает ответственным и эскалирует риск.",
 "whatImproves": "Юридическая функция становится более управляемой; снижается риск забытых действий; юристы меньше тратят времени на координацию.",
 "dataAiBehind": "Legal knowledge base, договорный реестр, task manager, почта, шаблоны документов, правила эскалации.",
 "conversationQuestions": [
 "Какие юридические процессы сегодня держатся не на системе, а на личной дисциплине отдельных сотрудников?",
 "Где юристы тратят время не на суждение, а на координацию?",
 "Какие дедлайны нельзя позволить себе пропустить?"
 ]
 },
 "f3-1-mto-visibility": {
 "businessPressure": "Запчасти, оборудование, ремонт, расходники и услуги подрядчиков часто закупаются мелкими потоками. Переплата и неэффективность не видны на уровне CEO, потому что каждая закупка кажется незначительной.",
 "whatWePutInPlace": "Собираем единую картину по категориям, поставщикам, ценам, станциям, заявкам и подрядчикам. Показываем, где тратим больше, чем должны, и где нет прозрачности.",
 "whatImproves": "Появляется управляемость МТО-расходов; видны категории переплат; можно быстро выбрать зоны для пересмотра условий.",
 "dataAiBehind": "ERP, заявки, счета, акты, номенклатура, справочник поставщиков, история закупок и ремонтов.",
 "conversationQuestions": [
 "Можете ли вы быстро назвать топ-10 категорий МТО, где сеть переплачивает?",
 "Какие подрядные услуги растут в расходах, но не видны как отдельная управленческая зона?",
 "Где закупки идут по привычке, а не по проверенной экономике?"
 ]
 },
 "f3-2-mto-anomalies": {
 "businessPressure": "Переплата по МТО редко выглядит как одна большая проблема. Она накапливается через мелкие отклонения: цена выше истории, странная частота заказов, дробление закупок, повторные подрядчики.",
 "whatWePutInPlace": "Сравниваем цены, поставщиков, частоту заявок, историю ремонтов, категории и станции. Подсвечиваем аномалии, переплаты и подозрительные паттерны.",
 "whatImproves": "Видны реальные точки экономии и контроля; закупки перестают быть «серой зоной»; предметный разговор с поставщиками и подрядчиками.",
 "dataAiBehind": "История закупок, счета, акты, заявки, номенклатура, цены, поставщики, ремонты, данные по объектам.",
 "conversationQuestions": [
 "Где у вас переплата уже стала привычной нормой, потому что её никто не видит в потоке мелких закупок?",
 "Какие категории чаще всего закупаются выше истории?",
 "Есть ли признаки дробления или повторяющихся отклонений?"
 ]
 },
 "f3-3-supplier-rating": {
 "businessPressure": "Выбор поставщика или подрядчика часто держится на цене и привычке. Но реальная стоимость включает сроки, качество, рекламации, повторные выезды, срывы и операционные последствия.",
 "whatWePutInPlace": "Строим рейтинг поставщиков и подрядчиков по фактической работе: цена, сроки, качество, рекламации, повторные проблемы, выполнение SLA, зависимость от региона и типа работ.",
 "whatImproves": "Закупки и операционный блок выбирают не только «дешевле», а «лучше по полной стоимости и риску».",
 "dataAiBehind": "Заявки, акты, SLA, рекламации, история ремонтов, сроки выполнения, финансовые данные, оценки внутренних заказчиков.",
 "conversationQuestions": [
 "Знаете ли вы, какие подрядчики дешевы в счёте, но дороги по последствиям?",
 "Где низкая цена приводит к повторным работам или простоям?",
 "Какие поставщики системно нарушают сроки или качество?"
 ]
 },
 "f4-1-loss-exception-panel": {
 "businessPressure": "Потери и нарушения расползаются по разным системам: закупка, нефтебаза, слив-налив, бензовоз, АЗС, касса, лояльность, финансы. Руководство видит отдельные отчёты, но не единую картину риска.",
 "whatWePutInPlace": "Собираем контрольную панель потерь и исключений: недостачи, отклонения от норм, подозрительные операции, нарушения правил, повторяющиеся слабые места и материальность риска.",
 "whatImproves": "Потери и исключения видны системно; контроль смотрит на risk view; руководство понимает, где сумма риска существенна.",
 "dataAiBehind": "Сведение сигналов из закупок, логистики, нефтебазы, транспорта, АЗС, POS/кассы, лояльности, B2B-карт, финансов и результатов проверок.",
 "conversationQuestions": [
 "Видите ли вы общую картину потерь и исключений по всей цепочке, а не по отдельным отчётам?",
 "Где сумма мелких отклонений становится существенной?",
 "Какие исключения повторяются, но не попадают в приоритет контроля?"
 ]
 },
 "f4-2-anomaly-detection": {
 "businessPressure": "Многие потери выглядят как обычный операционный шум: чуть странная недостача, скидка вне паттерна, возврат, ручная коррекция, расхождение слива-налива. Вручную такие паттерны видны поздно и выборочно.",
 "whatWePutInPlace": "Строим правила, эвристики и модели аномалий по ключевым процессам: отклонения от STD/SOP, политик, норм потерь, ожидаемых маршрутов, графиков, цен, скидок, кассовых и карточных паттернов.",
 "whatImproves": "Контроль раньше видит необычные паттерны; расследования начинаются с доказательного сигнала; меньше потерь проходит как «операционная норма».",
 "dataAiBehind": "Правила контроля, эвристики, anomaly detection, исторические нормы, результаты расследований и данные по конкретным процессам.",
 "conversationQuestions": [
 "Какие отклонения сегодня считаются нормой просто потому, что никто не видит паттерн?",
 "Где контроль проверяет вручную то, что система могла бы подсвечивать сама?",
 "Есть ли у вас единая логика STD/SOP/policy deviations по сети?"
 ]
 },
 "f4-3-risk-investigations": {
 "businessPressure": "Аудит и проверки идут подряд, по плану или по привычке — а не туда, где реально болит. Даже когда сигнал найден, расследование часто живёт в почте и Excel.",
 "whatWePutInPlace": "Приоритизируем проверки по риску и ведём кейсы расследований: сигнал, доказательства, сумма риска, ответственный, статус, решение и результат.",
 "whatImproves": "Ресурс аудита идёт в самые рискованные точки; расследования не теряются; результаты проверок возвращаются в модель риска.",
 "dataAiBehind": "Risk scoring, case management, evidence packs, история проверок, статусы расследований, результаты подтверждения/отклонения сигнала.",
 "conversationQuestions": [
 "Проверки идут по риску или подряд и по привычке?",
 "Видно ли по каждому сигналу, кто отвечает и чем закончилось расследование?",
 "Возвращаются ли результаты расследований в следующую волну контроля?"
 ]
 },
 "f5-document-primary-processing": {
 "businessPressure": "Накладные, акты, ТТН, счета, платежи, договоры — каждый день через компанию проходит поток первичных документов. Они приходят в разных форматах, вводятся вручную, теряются или ждут обработки. Ошибки первички выплывают поздно и стоят дорого.",
 "whatWePutInPlace": "Распознаём входящие документы — фото, скан, PDF, EDI — и автоматически извлекаем ключевые поля: контрагент, сумма, дата, номер, позиции. Сверяем с заказом, вносим в систему и помечаем исключения для ручной проверки.",
 "whatImproves": "Меньше ручного ввода; быстрее закрытие периода; ошибки первички видны сразу, а не при сверке; бухгалтерия занимается контролем, а не перепечаткой.",
 "dataAiBehind": "OCR/IDP, шаблоны документов, справочник контрагентов, история заказов и договоров, правила сверки, интеграция с ERP/1C.",
 "conversationQuestions": [
 "Сколько рабочего времени уходит на ручной ввод первичных документов в день?",
 "Какие типы документов приходят чаще всего и в каком виде — бумага, скан, PDF, EDI?",
 "Какие ошибки первички всплывают при закрытии периода и сколько времени уходит на исправление?"
 ]
 },
 "f4-4-control-chain-agent": {
 "businessPressure": "После появления отдельных моделей и дашбордов контроль сталкивается с другой проблемой: сигналов много, они разбросаны по процессам, а связь между ними видит только опытный человек.",
 "whatWePutInPlace": "Ставим агента внутреннего контроля, который связывает сигналы из доменных контуров: закупка, слив-налив, транспортировка, АЗС, POS, лояльность, B2B-карты, финансы. Агент собирает evidence pack, предлагает приоритет проверки и следующий шаг. Решение и действие остаются за контролёром/аудитором.",
 "whatImproves": "Контроль видит связанные кейсы, а не отдельные сигналы; меньше сложных потерь проходит между подразделениями; расследование начинается с готового контекста.",
 "dataAiBehind": "Единая основа данных, доменные модели fraud/loss/anomaly, результаты расследований, case management, правила эскалации.",
 "conversationQuestions": [
 "Какие потери проходят между подразделениями, потому что каждый видит только свой участок?",
 "Сколько времени уходит на сбор доказательств по сложному кейсу?",
 "Может ли контроль быстро связать закупку, перевозку, АЗС, карту и финансовый след в один кейс?"
 ]
 },

 "paragraphs": [
 "У независимой топливной сети данные уже есть — ERP, касса, лояльность, GPS, нефтебазы, BI, Excel. Чего обычно нет — это связности: управление держится на людях, звонках, ручных сверках и опыте отдельных руководителей, а накопленные данные не работают на решения.",
 "Эта карта показывает, где AI и данные дают практический эффект в топливном ритейле — по всей экономике сети: закупка и маржа, логистика, станции и магазины, клиенты, финансы и контроль. Не списком технологий, а через задачи бизнеса и то, что их решение даёт.",
 "Позиция простая: ИИ-агенты не ставятся поверх хаоса. Они становятся полезны, когда под ними построены данные, правила, прогнозы и контуры контроля. Поэтому путь в каждом блоке идёт снизу вверх — от видимости и контроля сейчас, через прогноз и оптимизацию, к решениям под управлением ИИ. Начать можно с малого и на имеющихся данных; фундамент достраивается по мере того, как сеть поднимается по этому пути."
 ]
};