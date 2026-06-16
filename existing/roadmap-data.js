// Fuel canvas data — V14 export (RU + EN). RU sets window.FUEL_*, EN sets window.FUEL_*_EN.
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
  "g1-1-trusted-data-foundation": {
    "businessPressure": "В типовой сети данные разбросаны: ERP, касса, лояльность, телематика, нефтебазы, BI, Excel — и в каждом своя версия правды. Отделы приходят на совещание с разными цифрами по одной и той же марже, и время уходит на спор, чья цифра верная, а не на решение. А любой прогноз, модель или ИИ, построенный на несведённых и грязных данных, наследует их ошибки — и красиво врёт.",
    "whatWePutInPlace": "Выстраиваем основу, на которой держится всё остальное: сводим разрозненные системы в единое место, приводим ключевые показатели к одной методике (одна правда для всех отделов) и доводим данные до качества, пригодного для решений. Это не «ещё одна система», а фундамент, на который встают прогнозы, аналитика и ИИ всех блоков. (В проработке — три аспекта: единая правда / единая основа / качество данных.)",
    "whatImproves": "Отделы работают от одной цифры, а не спорят, чья верна; на основе можно строить прогнозы и ИИ, которым можно верить; решения опираются на данные, а не на то, чей Excel свежее.",
    "dataAiBehind": "Сведение источников в единую основу, согласование методики показателей, контроль качества данных. Major Program — это настоящий фундамент, отсюда высшая стоимость и зависимость от него у большей части каталога. Для клиента с готовым DWH часть шага отмечена как пройденная — входит выше по этапу.",
    "conversationQuestions": [
      "Приходят ли отделы на совещание с разными цифрами по одному показателю?",
      "Сколько систем хранят свою версию правды по продажам, марже, клиентам?",
      "Можно ли доверять данным настолько, чтобы строить на них прогнозы и ИИ?"
    ]
  },
  "g1-2-bi-foundation": {
    "businessPressure": "Даже когда данные сведены, без единой отчётности каждый отдел строит свои выгрузки и Excel — и картина опять расходится, а аналитика и ИИ упираются в отсутствие надёжного слоя визуализации. Текст-to-SQL, прогнозы, аналитика любого блока опираются на этот слой; без него они работают вполсилы.",
    "whatWePutInPlace": "Поднимаем единую систему отчётности (BI) поверх сведённой основы: дашборды и отчёты по сети, на которые опирается вся аналитика и ИИ. Один слой правды в визуализации вместо разрозненных выгрузок.",
    "whatImproves": "Единая картина в дашбордах вместо Excel у каждого; аналитика и ИИ опираются на надёжный слой; решения из одной отчётности, а не из чьей-то выгрузки.",
    "dataAiBehind": "BI поверх единой основы данных (G1.1). Scoped — нужен сведённый фундамент. Многие сети BI уже имеют — тогда шаг отмечен как пройденный, и каталог идёт к карточкам, которые на него опираются.",
    "conversationQuestions": [
      "Все отделы смотрят в одну отчётность или каждый в свою выгрузку?",
      "Опираются ли ваши прогнозы и аналитика на надёжный слой отчётности?",
      "Сколько Excel-выгрузок живёт параллельно официальной отчётности?"
    ]
  },
  "g2-1-knowledge-search": {
    "businessPressure": "Знания компании разбросаны по регламентам, инструкциям, договорам, прошлым решениям, перепискам — и живут в головах тех, кто давно работает. Сотрудник тратит время, чтобы найти ответ, или звонит «тому, кто помнит». Когда такой человек уходит, знание уходит с ним.",
    "whatWePutInPlace": "Ставим поиск по знаниям компании, который находит ответ по сути вопроса, а не по точному совпадению слов: регламент, условие договора, прошлое решение, инструкцию. Сквозной инструмент — работает для юристов, операций, финансов, HR, любого подразделения.",
    "whatImproves": "Ответ за секунды вместо поиска и звонков; знание не теряется с уходом сотрудника; единый доступ к регламентам и опыту для всех подразделений.",
    "dataAiBehind": "Поиск по смыслу (RAG, ИИ) по утверждённым документам и базе знаний компании, с контролем доступа. Готовый инструмент — Quick Win. Это дом сквозной способности: юридический вход — из F2.3, но движок один на всю компанию.",
    "conversationQuestions": [
      "Сколько времени сотрудники тратят на поиск ответа в регламентах и договорах?",
      "Что происходит со знанием, когда уходит человек, «который помнит»?",
      "Сколько вопросов решается звонком вместо поиска?"
    ]
  },
  "g2-3-team-routine": {
    "businessPressure": "Команда — особенно небольшой головной офис — тратит много времени на механическое: записать и свести встречу, поставить и проследить задачи, разобрать переписку, согласовать календарь, собрать рутинный отчёт. Это время не идёт на решения, ради которых людей наняли.",
    "whatWePutInPlace": "Ставим рабочие ИИ-инструменты, которые берут механическую часть на себя: транскрипт и саммари встреч с действиями, помощь с задачами и перепиской, подготовка рутинных отчётов. Сквозной набор — полезен любому подразделению. Начинаем с низкорисковой рутины и понятного контроля доступа.",
    "whatImproves": "Меньше времени на механику, больше на работу; встречи и задачи не теряются; единый базовый набор продуктивности для всех команд.",
    "dataAiBehind": "Готовые ИИ-инструменты продуктивности (встречи, задачи, переписка, отчёты) с контролем доступа. Quick Win — самые быстрые и понятные победы каталога, доступны с первого дня.",
    "conversationQuestions": [
      "Сколько времени команды уходит на механическую рутину?",
      "Теряются ли договорённости и задачи после встреч?",
      "Какие рутинные задачи можно снять с людей уже сейчас?"
    ]
  },
  "g2-4-ask-data-words": {
    "businessPressure": "Чтобы получить цифру, сотрудник идёт к аналитику и ждёт выгрузку. Аналитики — узкое место: простые вопросы стоят в очереди за сложными, а руководитель не может быстро проверить гипотезу по данным сам. Данные есть, но доступ к ним — через посредника.",
    "whatWePutInPlace": "Даём каждому сотруднику возможность спросить данные на языке бизнеса и получить ответ — без аналитика-посредника. Сквозной инструмент: финансист спрашивает про маржу, операции про станции, коммерция про клиентов — один движок, разные витрины. Работает поверх надёжного фундамента и отчётности.",
    "whatImproves": "Ответ на вопрос по данным за секунды, а не за день; аналитики разгружены от простых запросов; руководитель проверяет гипотезу сам, в любом подразделении.",
    "dataAiBehind": "Запрос к данным на естественном языке (Text-to-SQL, ИИ) поверх единой основы и BI. Advanced — отсюда замок на G1.1–G1.2: без надёжного фундамента ассистент будет красиво врать. Дом сквозной способности: финансовый вход — из E1, но движок один на всю компанию.",
    "conversationQuestions": [
      "Сколько времени уходит, чтобы получить цифру через аналитика?",
      "Может ли руководитель проверить гипотезу по данным сам?",
      "Сколько простых запросов стоит в очереди у аналитиков?"
    ]
  },
  "g2-5-system-data-agent": {
    "businessPressure": "Огромная доля рабочего времени уходит на перенос данных между системами руками: занести клиента в CRM после звонка, обновить статус в таск-менеджере, провести документ в ERP, перебить данные из письма в форму. Это медленно, порождает ошибки и расхождения между системами, и не масштабируется с ростом компании.",
    "whatWePutInPlace": "Ставим агента, который сам заносит и обновляет записи в CRM, ERP и таск-менеджерах — из писем, звонков, сканов, чатов. Человек задаёт правила и проверяет спорное; рутинный перенос данных система берёт на себя. Сквозной инструмент: продажи, снабжение, бэкофис, HR — везде, где данные переносят руками.",
    "whatImproves": "Меньше ручного ввода и ошибок переноса; системы синхронны, а не расходятся; команда занимается работой, а не перебивкой данных между окнами.",
    "dataAiBehind": "Агент поверх доступа к системам (CRM/ERP/таск-менеджеры) и обработки входящих документов, действующий по правилам и под контролем человека. Frontier — это слой автоматизации поверх данных и инструментов; спорные случаи эскалируются человеку, агент не действует вслепую.",
    "conversationQuestions": [
      "Сколько рабочего времени уходит на перенос данных между системами руками?",
      "Расходятся ли данные между CRM, ERP и таск-менеджерами из-за ручного ввода?",
      "Какие операции переноса данных можно отдать агенту, оставив контроль?"
    ]
  },
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

// roadmap-data.en.js - English version of the fuel retail AI transformation map
// Source structure: existing/roadmap-data.js
// Technical identifiers and control fields are preserved; user-facing text is translated.
window.FUEL_INTRO_EN = {
  "f4-loyalty-card-fraud": {
    "businessPressure": "Two abuse points exist in parallel: the B2C loyalty program and B2B fuel cards/vouchers. Points inflation, fictitious accruals, cashier collusion with a \"customer\", fueling outside the schedule and geography, and draining fuel into canisters all get lost in the flow of normal transactions and surface during the annual audit.",
    "whatWePutInPlace": "We detect anomalies across two circuits: point accruals/redemptions (suspicious cashier-customer links, multi-accounts, inflation schemes) and card/voucher transactions (deviations by time, volume, geography, and frequency). Suspicious activity is flagged immediately instead of surfacing as losses.",
    "whatImproves": "Bonus leakage is closed off; the loyalty program works for customers, not schemes; abuse and fuel diversion through B2B cards and vouchers become visible early.",
    "dataAiBehind": "Anomaly detection on loyalty transactions and fleet card/voucher transactions; the data is already collected in both circuits.",
    "conversationQuestions": [
      "Do you know what share of bonuses is leaking through inflation and abuse schemes?",
      "Can you see fuelings outside the expected schedule, volumes, and geography for cards and vouchers?",
      "How quickly do anomalies in loyalty and card activity become visible: before the audit or after it?"
    ]
  },
  "paragraphs": [
    "An independent fuel retail network already has data: ERP, POS, loyalty, GPS, terminals, BI, Excel. What is usually missing is connectedness: management depends on people, calls, manual reconciliations, and the experience of individual managers, while accumulated data does not work for decisions.",
    "This map shows where AI and data create practical impact in fuel retail across the network economics: procurement and margin, logistics, stations and stores, customers, finance, and control. Not as a list of technologies, but through business tasks and what solving them delivers.",
    "The position is simple: AI agents are not placed on top of chaos. They become useful when data, rules, forecasts, and control loops have been built beneath them. That is why the path in each block moves from the bottom up: from visibility and control today, through forecasting and optimization, to decisions managed with AI. You can start small and use the data already available; the foundation is built out as the network moves along this path."
  ]
};

window.FUEL_BLOCKS_EN = [
  {
    "id": "a-fuel-commercial",
    "code": "A",
    "title": "Fuel: Procurement, Pricing and Margin",
    "tagline": "Fuel: Procurement, Pricing and Margin",
    "spine": "We help manage procurement and pricing as one commercial loop: forecast demand, choose the supplier and buying moment, account for the full landed cost of each batch, and manage pump price with market and demand in mind. The focus is fewer shortages and surpluses, lower overpayment, better margin, and faster commercial decisions."
  },
  {
    "id": "b-logistics",
    "code": "B",
    "title": "Logistics and Fuel Supply",
    "tagline": "Logistics and Fuel Supply",
    "spine": "We help make fuel supply manageable end to end: see batch movement, delay risks, acceptance discrepancies, railcars and demurrage, terminal operations, delivery to stations, and trip execution. The focus is fewer losses, delays, penalties, and less manual dispatching."
  },
  {
    "id": "c-stations-stores",
    "code": "C",
    "title": "Stations, Stores and Cafes",
    "tagline": "Stations, Stores and Cafes",
    "spine": "We help manage the station as a profit point, not only as an operating asset: see station underperformance, queues and lost traffic, violations at dispensers and POS, shift execution, equipment, assortment, write-offs, and conversion into the store. The focus is fewer operating losses, higher station revenue, and better customer experience."
  },
  {
    "id": "d-customers-loyalty",
    "code": "D",
    "title": "Customers, Loyalty and B2B",
    "tagline": "Customers, Loyalty and B2B",
    "spine": "We help turn the customer base and B2B portfolio into a managed source of growth: understand customer value, prevent churn, increase frequency and ticket, manage promotions, work with feedback, develop retail media, and manage corporate customer profitability. The focus is higher retention, more margin per customer, fewer wasted discounts, and a stronger loyalty program."
  },
  {
    "id": "e-finance-control",
    "code": "E",
    "title": "Finance, Cash and Control",
    "tagline": "Finance, Cash and Control",
    "spine": "We help finance see the business in a live picture and find causes of deviations faster: margin, costs, cash, receivables, payment risks, financial losses, and policy violations become visible before they turn into problems. The focus is faster management decisions, fewer leaks, better cash control, and trust in the numbers."
  },
  {
    "id": "f-support-functions",
    "code": "F",
    "title": "Support Functions",
    "tagline": "Support Functions",
    "spine": "We help remove routine work and strengthen control in the functions that support the business: HR, legal, MRO procurement, contractors, internal control, documents, and back office. The focus is less manual work, faster processes, more transparent spending, and violations visible before audit, not after."
  },
  {
    "id": "g-data-foundation",
    "code": "G",
    "title": "Data and Processes",
    "tagline": "Data and Processes",
    "spine": "We help create the foundation on which analytics, automation, and AI can work: a unified data base, information quality and availability, reporting, knowledge search, office AI tools, process reengineering, and agentic solutions. The focus is one version of the truth, less manual work, and the ability to scale AI systemically rather than point by point."
  }
];

window.FUEL_SUBBLOCKS_EN = [
  {
    "id": "b1-external-logistics",
    "code": "B1",
    "blockId": "b-logistics",
    "title": "External Logistics",
    "sequence": 1
  },
  {
    "id": "b2-terminal-base",
    "code": "B2",
    "blockId": "b-logistics",
    "title": "Terminal / Oil Depot",
    "sequence": 2
  },
  {
    "id": "b3-internal-logistics",
    "code": "B3",
    "blockId": "b-logistics",
    "title": "Internal Logistics",
    "sequence": 3
  },
  {
    "id": "c1-station-operations",
    "code": "C1",
    "blockId": "c-stations-stores",
    "title": "Station Operations",
    "sequence": 1
  },
  {
    "id": "c2-shop-cafe",
    "code": "C2",
    "blockId": "c-stations-stores",
    "title": "Store and Cafe",
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
    "title": "B2B / Fleet",
    "sequence": 2
  },
  {
    "id": "f1-hr-personnel",
    "code": "F1",
    "blockId": "f-support-functions",
    "title": "HR and Personnel",
    "sequence": 1
  },
  {
    "id": "f2-legal",
    "code": "F2",
    "blockId": "f-support-functions",
    "title": "Legal Function",
    "sequence": 2
  },
  {
    "id": "f3-mts-procurement",
    "code": "F3",
    "blockId": "f-support-functions",
    "title": "MRO Procurement and Contractors",
    "sequence": 3
  },
  {
    "id": "f4-control-audit-risks",
    "code": "F4",
    "blockId": "f-support-functions",
    "title": "Internal Control, Losses and Risks",
    "sequence": 4
  },
  {
    "id": "f5-document-processing",
    "code": "F5",
    "blockId": "f-support-functions",
    "title": "Documents and Back Office",
    "sequence": 5
  },
  {
    "id": "g1-data-foundation",
    "code": "G1",
    "blockId": "g-data-foundation",
    "title": "Data Foundation",
    "sequence": 1
  },
  {
    "id": "g2-ai-tools-knowledge",
    "code": "G2",
    "blockId": "g-data-foundation",
    "title": "Practical AI Tools and Knowledge",
    "sequence": 2
  }
];

window.FUEL_PROBLEMS_EN = [
  {
    "id": "a1",
    "code": "A1",
    "blockId": "a-fuel-commercial",
    "subBlockId": null,
    "title": "Buy fuel in the right volume and at the right time",
    "painLine": "Orders matched to real demand: fewer shortages and surpluses, less frozen capital.",
    "sequence": 1
  },
  {
    "id": "a2",
    "code": "A2",
    "blockId": "a-fuel-commercial",
    "subBlockId": null,
    "title": "Choose the supplier and procurement terms",
    "painLine": "Transparent comparison of price, timing, and terms; procurement at a favorable price moment.",
    "sequence": 2
  },
  {
    "id": "a3",
    "code": "A3",
    "blockId": "a-fuel-commercial",
    "subBlockId": null,
    "title": "Account for the full landed cost of a batch in procurement",
    "painLine": "Logistics, demurrage, downtime, customs, and penalties are included in the batch economics before the buying decision, instead of surfacing after the fact",
    "sequence": 3
  },
  {
    "id": "a4",
    "code": "A4",
    "blockId": "a-fuel-commercial",
    "subBlockId": null,
    "title": "Manage price with market and demand in mind",
    "painLine": "Price changes based on data and on time, not after the market has already moved.",
    "sequence": 4
  },
  {
    "id": "b1-1",
    "code": "B1.1",
    "blockId": "b-logistics",
    "subBlockId": "b1-external-logistics",
    "title": "Control supply movement and delay risks",
    "painLine": "Arrival forecast and an early delay signal, so there is time to respond.",
    "sequence": 1
  },
  {
    "id": "b1-2",
    "code": "B1.2",
    "blockId": "b-logistics",
    "subBlockId": "b1-external-logistics",
    "title": "Find where supply discrepancies create losses",
    "painLine": "Ordered, shipped, accepted: where there is shortage, loss, or manipulation.",
    "sequence": 2
  },
  {
    "id": "b1-3",
    "code": "B1.3",
    "blockId": "b-logistics",
    "subBlockId": "b1-external-logistics",
    "title": "Control railcars and demurrage",
    "painLine": "Railcar downtime, unloading, and turnaround: demurrage and penalties under control, not discovered through an invoice after the fact.",
    "sequence": 3
  },
  {
    "id": "b2-1",
    "code": "B2.1",
    "blockId": "b-logistics",
    "subBlockId": "b2-terminal-base",
    "title": "Control loading/unloading and process losses",
    "painLine": "Loading/unloading acts, actual volumes, temperature corrections, and natural loss are controlled instead of written off after the fact",
    "sequence": 4
  },
  {
    "id": "b2-2",
    "code": "B2.2",
    "blockId": "b-logistics",
    "subBlockId": "b2-terminal-base",
    "title": "Control quality and tank utilization at the terminal",
    "painLine": "Fuel allocation across tanks, quality control, and storage standards.",
    "sequence": 5
  },
  {
    "id": "b3-1",
    "code": "B3.1",
    "blockId": "b-logistics",
    "subBlockId": "b3-internal-logistics",
    "title": "Plan fuel delivery to stations",
    "painLine": "Which fuel product, to which stations, from which terminals, and in what volume",
    "sequence": 6
  },
  {
    "id": "b3-2",
    "code": "B3.2",
    "blockId": "b-logistics",
    "subBlockId": "b3-internal-logistics",
    "title": "Routing and trip execution",
    "painLine": "The best route, the right tanker and driver, and in-transit tracking.",
    "sequence": 7
  },
  {
    "id": "b3-3",
    "code": "B3.3",
    "blockId": "b-logistics",
    "subBlockId": "b3-internal-logistics",
    "title": "Trip accounting and control",
    "painLine": "Trip plan-versus-actual, deviation analysis, manipulation detection, and camera-based driver safety control.",
    "sequence": 8
  },
  {
    "id": "c1-1",
    "code": "C1.1",
    "blockId": "c-stations-stores",
    "subBlockId": "c1-station-operations",
    "title": "Understand why a station underperforms",
    "painLine": "Not just station numbers, but the cause: where the station is missing potential and what to do about it.",
    "sequence": 1
  },
  {
    "id": "c1-2",
    "code": "C1.2",
    "blockId": "c-stations-stores",
    "subBlockId": "c1-station-operations",
    "title": "Stop losing sales to queues and traffic leakage",
    "painLine": "How many customers leave because of a queue, and who entered but did not fuel.",
    "sequence": 2
  },
  {
    "id": "c1-3",
    "code": "C1.3",
    "blockId": "c-stations-stores",
    "subBlockId": "c1-station-operations",
    "title": "Stop losses at dispensers and POS",
    "painLine": "Virtual fuelings, underdelivery, manual receipt corrections, and collusion under automatic control.",
    "sequence": 3
  },
  {
    "id": "c1-4",
    "code": "C1.4",
    "blockId": "c-stations-stores",
    "subBlockId": "c1-station-operations",
    "title": "Control staff, standards, and service",
    "painLine": "Shift plan-versus-actual, standards, and safety compliance without manual checks.",
    "sequence": 4
  },
  {
    "id": "c1-5",
    "code": "C1.5",
    "blockId": "c-stations-stores",
    "subBlockId": "c1-station-operations",
    "title": "Keep station equipment running",
    "painLine": "Prevent downtime of dispensers, refrigerators, and coffee machines instead of reacting after the fact.",
    "sequence": 5
  },
  {
    "id": "c2-1",
    "code": "C2.1",
    "blockId": "c-stations-stores",
    "subBlockId": "c2-shop-cafe",
    "title": "Convert fuel traffic into store purchases",
    "painLine": "Higher conversion from fueling to store to coffee, and a higher non-fuel ticket.",
    "sequence": 6
  },
  {
    "id": "c2-2",
    "code": "C2.2",
    "blockId": "c-stations-stores",
    "subBlockId": "c2-shop-cafe",
    "title": "Keep the right assortment for each station",
    "painLine": "What and how much to deliver to a specific station, based on demand rather than a template.",
    "sequence": 7
  },
  {
    "id": "c2-3",
    "code": "C2.3",
    "blockId": "c-stations-stores",
    "subBlockId": "c2-shop-cafe",
    "title": "Reduce write-offs and empty shelves",
    "painLine": "Fresh and perishable products are marked down on time; shelves are neither empty nor spoiled.",
    "sequence": 8
  },
  {
    "id": "c2-4",
    "code": "C2.4",
    "blockId": "c-stations-stores",
    "subBlockId": "c2-shop-cafe",
    "title": "Use station traffic for retail media",
    "painLine": "Physical station traffic becomes the entry point for a retail media product.",
    "sequence": 9
  },
  {
    "id": "d1-1",
    "code": "D1.1",
    "blockId": "d-customers-loyalty",
    "subBlockId": "d1-b2c",
    "title": "Understand the customer and their economics",
    "painLine": "Who our customers are, how they behave, and what they are worth.",
    "sequence": 1
  },
  {
    "id": "d1-2",
    "code": "D1.2",
    "blockId": "d-customers-loyalty",
    "subBlockId": "d1-b2c",
    "title": "Retain customers and prevent churn",
    "painLine": "Fewer quiet departures and a higher share of stable customers.",
    "sequence": 2
  },
  {
    "id": "d1-3",
    "code": "D1.3",
    "blockId": "d-customers-loyalty",
    "subBlockId": "d1-b2c",
    "title": "Increase frequency, ticket, and share of non-fuel purchases",
    "painLine": "More visits, higher ticket, and fueling-to-store conversion.",
    "sequence": 3
  },
  {
    "id": "d1-4",
    "code": "D1.4",
    "blockId": "d-customers-loyalty",
    "subBlockId": "d1-b2c",
    "title": "Manage promotions and measure their effectiveness",
    "painLine": "Discounts go to those whose behavior changes, not to everyone.",
    "sequence": 4
  },
  {
    "id": "d1-5",
    "code": "D1.5",
    "blockId": "d-customers-loyalty",
    "subBlockId": "d1-b2c",
    "title": "Work with feedback and voice of customer",
    "painLine": "Hear the reasons for dissatisfaction and respond quickly.",
    "sequence": 5
  },
  {
    "id": "d1-7",
    "code": "D1.7",
    "blockId": "d-customers-loyalty",
    "subBlockId": "d1-b2c",
    "title": "Monetize traffic beyond sales",
    "painLine": "Customer flow generates direct revenue.",
    "sequence": 7
  },
  {
    "id": "d2-1",
    "code": "D2.1",
    "blockId": "d-customers-loyalty",
    "subBlockId": "d2-b2b-fleet",
    "title": "Manage B2B portfolio profitability",
    "painLine": "See which corporate customers earn money and which consume margin.",
    "sequence": 8
  },
  {
    "id": "d2-2",
    "code": "D2.2",
    "blockId": "d-customers-loyalty",
    "subBlockId": "d2-b2b-fleet",
    "title": "Retain B2B customers and forecast non-renewal",
    "painLine": "Fewer quiet departures of corporate customers.",
    "sequence": 9
  },
  {
    "id": "e1",
    "code": "E1",
    "blockId": "e-finance-control",
    "subBlockId": null,
    "title": "See the financial picture here and now",
    "painLine": "Margin by station, region, and product: an answer to the executive's question immediately, not an export by morning.",
    "sequence": 1
  },
  {
    "id": "e2",
    "code": "E2",
    "blockId": "e-finance-control",
    "subBlockId": null,
    "title": "Understand causes of deviations, not only the fact",
    "painLine": "Why margin fell or costs increased, and what to do about it.",
    "sequence": 2
  },
  {
    "id": "e3",
    "code": "E3",
    "blockId": "e-finance-control",
    "subBlockId": null,
    "title": "Forecast cash and cash gaps",
    "painLine": "Know in advance where and when cash will be short.",
    "sequence": 3
  },
  {
    "id": "e5",
    "code": "E5",
    "blockId": "e-finance-control",
    "subBlockId": null,
    "title": "Detect losses and inconsistencies in finance",
    "painLine": "Fictitious counterparties, duplicates, and policy deviations are visible instead of surfacing during audit.",
    "sequence": 5
  },
  {
    "id": "f1",
    "code": "F1",
    "blockId": "f-support-functions",
    "subBlockId": "f1-hr-personnel",
    "title": "HR and Personnel",
    "painLine": "Recruiting, onboarding, field staff control, and retention rely on manual work where automation could have worked long ago.",
    "sequence": 1
  },
  {
    "id": "f2",
    "code": "F2",
    "blockId": "f-support-functions",
    "subBlockId": "f2-legal",
    "title": "Legal Function",
    "painLine": "Support for various legal tasks",
    "sequence": 2
  },
  {
    "id": "f3",
    "code": "F3",
    "blockId": "f-support-functions",
    "subBlockId": "f3-mts-procurement",
    "title": "MRO Procurement and Contractors",
    "painLine": "Material and contractor service costs grow unnoticed, with overpayments hidden in the flow of small purchases.",
    "sequence": 3
  },
  {
    "id": "f4",
    "code": "F4",
    "blockId": "f-support-functions",
    "subBlockId": "f4-control-audit-risks",
    "title": "Internal Control, Losses and Risks",
    "painLine": "Losses, exceptions, and rule violations are scattered across systems, with no unified risk picture.",
    "sequence": 4
  },
  {
    "id": "f5",
    "code": "F5",
    "blockId": "f-support-functions",
    "subBlockId": "f5-document-processing",
    "title": "Documents and Back Office",
    "painLine": "Waybills, acts, invoices, and transport documents are entered manually, so primary document errors surface late.",
    "sequence": 5
  },
  {
    "id": "g1-1",
    "code": "G1.1",
    "blockId": "g-data-foundation",
    "subBlockId": "g1-data-foundation",
    "title": "One truth instead of different numbers in every department",
    "painLine": "Sales, inventory, finance, and customer figures are calculated the same way by all departments",
    "sequence": 1
  },
  {
    "id": "g2-1",
    "code": "G2.1",
    "blockId": "g-data-foundation",
    "subBlockId": "g2-ai-tools-knowledge",
    "title": "Find answers in company knowledge",
    "painLine": "A policy, instruction, or past decision is found by meaning, not by calling the person who remembers.",
    "sequence": 3
  },
  {
    "id": "g2-3",
    "code": "G2.3",
    "blockId": "g-data-foundation",
    "subBlockId": "g2-ai-tools-knowledge",
    "title": "Take routine work off the team",
    "painLine": "Meetings, tasks, correspondence, calendar, reports: AI takes over the mechanical part.",
    "sequence": 5
  }
];

window.FUEL_STAGES_EN = [
  {
    "id": 1,
    "name": "Essential Solutions",
    "description": "Can be launched quickly on existing data. Deliver a clear effect without major process redesign."
  },
  {
    "id": 2,
    "name": "Advanced Solutions",
    "description": "Require more mature data, integrations, and models. Deliver greater impact by optimizing decisions and processes."
  },
  {
    "id": 3,
    "name": "Agentic and System-Level Solutions",
    "description": "End-to-end solutions and AI agents that work on top of a built foundation. A human sets the rules and controls the result."
  }
];

window.FUEL_CARDS_EN = [
  {
    "id": "a1-stock-need-view",
    "problemId": "a1",
    "blockId": "a-fuel-commercial",
    "title": "See demand and inventory in one view",
    "shortDescription": "How much is needed and how much is already available, so procurement is not done blindly.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Quick Win",
    "impact": "Productivity",
    "lock": null,
    "flowsTo": [
      "a1-smart-buying",
      "a1-buying-agent"
    ]
  },
  {
    "id": "a1-demand-forecast",
    "problemId": "a1",
    "blockId": "a-fuel-commercial",
    "title": "Demand forecast by station and terminal",
    "shortDescription": "How much will be sold, taking season, weather, and events into account.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": null,
    "flowsTo": [
      "a1-smart-buying",
      "a1-buying-agent"
    ]
  },
  {
    "id": "a1-smart-buying",
    "problemId": "a1",
    "blockId": "a-fuel-commercial",
    "title": "Smart procurement: how much, when, and at what price to buy",
    "shortDescription": "A ready decision for the current task: buy cheaper, freeze less capital, or protect supply.",
    "stage": 2,
    "sequence": 2,
    "cost": "$$$",
    "scale": "Major Program",
    "impact": "Cost reduction",
    "lock": "demand forecast + inventory in one picture",
    "flowsTo": []
  },
  {
    "id": "a1-buying-agent",
    "problemId": "a1",
    "blockId": "a-fuel-commercial",
    "title": "Procurement agent under operator control",
    "shortDescription": "The system prepares the request according to rules; a human approves it.",
    "stage": 3,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Major Program",
    "impact": "Productivity",
    "lock": "demand forecast + inventory in one place + foundation",
    "flowsTo": []
  },
  {
    "id": "a2-compare-suppliers",
    "problemId": "a2",
    "blockId": "a-fuel-commercial",
    "title": "Compare suppliers by price, timing, and terms",
    "shortDescription": "Price, delivery timing, payment deferral, and reliability in one view: selection based on substance, not habit.",
    "stage": 1,
    "sequence": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Cost reduction",
    "lock": null,
    "flowsTo": [
      "a2-buy-timing"
    ]
  },
  {
    "id": "a2-buy-timing",
    "problemId": "a2",
    "blockId": "a-fuel-commercial",
    "title": "Choose the best buying moment",
    "shortDescription": "See where the purchase price is moving and buy at the right moment.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "supplier and price comparison in place",
    "flowsTo": []
  },
  {
    "id": "a3-landed-cost",
    "problemId": "a3",
    "blockId": "a-fuel-commercial",
    "title": "Know what the batch really cost",
    "shortDescription": "Price plus logistics, demurrage, downtime, customs, and penalties in one number.",
    "stage": 1,
    "sequence": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Cost reduction",
    "lock": null,
    "flowsTo": [
      "a3-cost-risk-early"
    ]
  },
  {
    "id": "a3-cost-risk-early",
    "problemId": "a3",
    "blockId": "a-fuel-commercial",
    "title": "See in advance where a batch is becoming more expensive",
    "shortDescription": "Risk of downtime, penalty, or delay before it lands in cost of goods.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "full batch cost is calculated",
    "flowsTo": []
  },
  {
    "id": "a4-price-vs-competitors",
    "problemId": "a4",
    "blockId": "a-fuel-commercial",
    "title": "See your price against competitors",
    "shortDescription": "Market prices next to your own, so you are not falling behind blindly.",
    "stage": 1,
    "sequence": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Decision quality",
    "lock": null,
    "flowsTo": [
      "a4-price-headroom",
      "a4-dynamic-pricing"
    ]
  },
  {
    "id": "a4-price-headroom",
    "problemId": "a4",
    "blockId": "a-fuel-commercial",
    "title": "Understand where price can be raised without losing customers",
    "shortDescription": "Where there is price headroom, and where price is pushing the customer to a competitor.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": "own price versus competitors is visible",
    "flowsTo": [
      "a4-dynamic-pricing"
    ]
  },
  {
    "id": "a4-dynamic-pricing",
    "problemId": "a4",
    "blockId": "a-fuel-commercial",
    "title": "Dynamic pricing",
    "shortDescription": "Price adjusts to demand, competitors, and time automatically, under rule-based control.",
    "stage": 3,
    "sequence": 1,
    "cost": "$$$$",
    "scale": "Major Program",
    "impact": "Revenue growth",
    "lock": "price sensitivity + competitor monitoring + foundation",
    "flowsTo": []
  },
  {
    "id": "b1-1-delivery-status-view",
    "problemId": "b1-1",
    "blockId": "b-logistics",
    "title": "See where the batch is and when it will arrive",
    "shortDescription": "Supply status in one view, not through phone calls.",
    "stage": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Decision quality",
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
    "title": "Learn about delay risk in advance",
    "shortDescription": "See a disruption before it happens.",
    "stage": 2,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "delivery status is visible",
    "sequence": 2,
    "flowsTo": []
  },
  {
    "id": "b1-2-acceptance-shortage",
    "problemId": "b1-2",
    "blockId": "b-logistics",
    "title": "Catch shortage at acceptance",
    "shortDescription": "Reconcile ordered / shipped / accepted.",
    "stage": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Cost reduction",
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
    "title": "Understand where losses are systemic",
    "shortDescription": "Distinguish a one-off discrepancy from recurring leakage by supplier or route.",
    "stage": 2,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "receipt reconciliation in place",
    "sequence": 2,
    "flowsTo": []
  },
  {
    "id": "b1-3-wagon-status-view",
    "problemId": "b1-3",
    "blockId": "b-logistics",
    "title": "See railcar status and downtime",
    "shortDescription": "Where the railcar is, what it costs, how much time remains before a penalty, and who must respond.",
    "stage": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": null,
    "sequence": 1,
    "flowsTo": [
      "b1-3-demurrage-control"
    ]
  },
  {
    "id": "b1-3-demurrage-control",
    "problemId": "b1-3",
    "blockId": "b-logistics",
    "title": "Reduce demurrage and railcar downtime",
    "shortDescription": "See which railcars are approaching a penalty and where unloading is blocked before the invoice arrives.",
    "stage": 2,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "railcar status and demurrage are visible",
    "sequence": 2,
    "flowsTo": []
  },
  {
    "id": "b2-1-drain-fill-reconciliation",
    "problemId": "b2-1",
    "blockId": "b-logistics",
    "title": "Reconcile loading/unloading act with actual volume",
    "shortDescription": "Discrepancies between the operation act and actual volume are visible immediately, not only at inventory count",
    "stage": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
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
    "title": "Separate normal allowance from loss",
    "shortDescription": "Where it is natural loss and temperature correction, and where it is real leakage or a violation for investigation",
    "stage": 2,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "drain-fill reconciliation in place",
    "sequence": 2,
    "flowsTo": []
  },
  {
    "id": "b2-2-quality-control",
    "problemId": "b2-2",
    "blockId": "b-logistics",
    "title": "Keep quality under control",
    "shortDescription": "Quality deviations before they reach the customer.",
    "stage": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": null,
    "sequence": 1,
    "flowsTo": [
      "b2-2-tank-utilization"
    ]
  },
  {
    "id": "b2-2-tank-utilization",
    "problemId": "b2-2",
    "blockId": "b-logistics",
    "title": "Use tanks properly",
    "shortDescription": "Allocation across tanks without idle capacity or unacceptable mixing.",
    "stage": 2,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "quality control in place",
    "sequence": 2,
    "flowsTo": []
  },
  {
    "id": "b3-1-station-fuel-need-view",
    "problemId": "b3-1",
    "blockId": "b-logistics",
    "title": "See which station needs fuel",
    "shortDescription": "Network demand in one view: who is close to running dry.",
    "stage": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Decision quality",
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
    "title": "Automatic station delivery plan",
    "shortDescription": "A ready plan of what to deliver, from where, and in what volume, based on demand and forecast.",
    "stage": 2,
    "cost": "$$$",
    "scale": "Major Program",
    "impact": "Cost reduction",
    "lock": "demand forecast (A1)",
    "sequence": 2,
    "flowsTo": [
      "b3-1-dispatcher-agent"
    ]
  },
  {
    "id": "b3-1-dispatcher-agent",
    "problemId": "b3-1",
    "blockId": "b-logistics",
    "title": "Dispatcher agent under control",
    "shortDescription": "The system builds the dispatch plan according to rules; a human approves it.",
    "stage": 3,
    "cost": "$$$$",
    "scale": "Major Program",
    "impact": "Productivity",
    "lock": "auto-allocation + demand forecast + foundation",
    "sequence": 3,
    "flowsTo": []
  },
  {
    "id": "b3-2-fleet-status-view",
    "problemId": "b3-2",
    "blockId": "b-logistics",
    "title": "See where vehicles are and what is in transit",
    "shortDescription": "Track trips and delivery status instead of learning after the fact.",
    "stage": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Decision quality",
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
    "title": "Optimal route, vehicle, and driver",
    "shortDescription": "Less empty mileage and downtime, with vehicle assignment matched to the trip.",
    "stage": 2,
    "cost": "$$$",
    "scale": "Major Program",
    "impact": "Cost reduction",
    "lock": "station demand is visible (B3.1) + telematics",
    "sequence": 2,
    "flowsTo": []
  },
  {
    "id": "b3-3-trip-plan-fact",
    "problemId": "b3-3",
    "blockId": "b-logistics",
    "title": "Trip plan-versus-actual",
    "shortDescription": "What was executed as planned, and where deviations and losses occurred.",
    "stage": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Decision quality",
    "lock": null,
    "sequence": 1,
    "flowsTo": []
  },
  {
    "id": "b3-3-driver-safety",
    "problemId": "b3-3",
    "blockId": "b-logistics",
    "title": "Driver safety control",
    "shortDescription": "Speeding, harsh braking, fatigue: an early risk signal, not post-accident analysis.",
    "stage": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Cost reduction",
    "lock": null,
    "sequence": 2,
    "flowsTo": []
  },
  {
    "id": "b3-3-fuel-theft-in-transit",
    "problemId": "b3-3",
    "blockId": "b-logistics",
    "title": "Detect fuel diversion and manipulation in transit",
    "shortDescription": "Unauthorized fuel draining and route deviations: direct leakage under control.",
    "stage": 2,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "telematics + shipment and station receipt reconciliation",
    "sequence": 3,
    "flowsTo": []
  },
  {
    "id": "c1-1-station-benchmark",
    "problemId": "c1-1",
    "blockId": "c-stations-stores",
    "title": "Compare stations and see underperformers",
    "shortDescription": "Stations compared fairly: who is underperforming against similar stations, not against the average.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Quick Win",
    "impact": "Decision quality",
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
    "title": "Plan achievement control and operational response",
    "shortDescription": "Station plan in the moment: where we are behind today, not in a report at month-end.",
    "stage": 1,
    "sequence": 2,
    "cost": "$$",
    "scale": "Quick Win",
    "impact": "Decision quality",
    "lock": null,
    "flowsTo": [
      "c1-1-station-analysis-agent"
    ]
  },
  {
    "id": "c1-1-cause-analysis",
    "problemId": "c1-1",
    "blockId": "c-stations-stores",
    "title": "Understand the cause, not only the fact",
    "shortDescription": "Why the station dropped: traffic, price, service, assortment, and what to fix.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Decision quality",
    "lock": "station comparison in place",
    "flowsTo": [
      "c1-1-station-analysis-agent"
    ]
  },
  {
    "id": "c1-1-station-analysis-agent",
    "problemId": "c1-1",
    "blockId": "c-stations-stores",
    "title": "Station Analysis Agent",
    "shortDescription": "It analyzes stations, finds causes, forms hypotheses, and highlights where to look.",
    "stage": 3,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Major Program",
    "impact": "Decision quality",
    "lock": "benchmarking + root cause analysis + foundation",
    "flowsTo": []
  },
  {
    "id": "c1-2-lost-traffic",
    "problemId": "c1-2",
    "blockId": "c-stations-stores",
    "title": "See how many customers are being lost",
    "shortDescription": "Who leaves because of a queue and who entered but did not fuel.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": null,
    "flowsTo": [
      "c1-2-queue-peak"
    ]
  },
  {
    "id": "c1-2-queue-peak",
    "problemId": "c1-2",
    "blockId": "c-stations-stores",
    "title": "See the hours and points where the station overloads",
    "shortDescription": "When and where queues build up, so flow can be redistributed or the shift reinforced.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": "traffic data is collected",
    "flowsTo": []
  },
  {
    "id": "c1-3-fuel-cash-losses",
    "problemId": "c1-3",
    "blockId": "c-stations-stores",
    "title": "Catch losses during fuel dispensing",
    "shortDescription": "Virtual fuelings, underdelivery, receipt corrections, and collusion through data and cameras.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": null,
    "flowsTo": []
  },
  {
    "id": "c1-4-shift-control",
    "problemId": "c1-4",
    "blockId": "c-stations-stores",
    "title": "See how the shift works",
    "shortDescription": "Shift plan-versus-actual and where standards are not maintained, without inspector rounds.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Productivity",
    "lock": null,
    "flowsTo": [
      "c1-4-camera-standard-violation"
    ]
  },
  {
    "id": "c1-4-camera-standard-violation",
    "problemId": "c1-4",
    "blockId": "c-stations-stores",
    "title": "Detect standards violations on camera",
    "shortDescription": "Shelf layout, uniform, and safety violations detected automatically, not during a walkthrough.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Major Program",
    "impact": "Productivity",
    "lock": "station cameras + shift control in place",
    "flowsTo": []
  },
  {
    "id": "c1-5-maintenance-priority",
    "problemId": "c1-5",
    "blockId": "c-stations-stores",
    "title": "Know what to service and when",
    "shortDescription": "Service schedule for dispensers, refrigerators, and coffee machines based on business priority.",
    "stage": 1,
    "sequence": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Productivity",
    "lock": null,
    "flowsTo": [
      "c1-5-predictive-maintenance"
    ]
  },
  {
    "id": "c1-5-predictive-maintenance",
    "problemId": "c1-5",
    "blockId": "c-stations-stores",
    "title": "Prevent failure before downtime",
    "shortDescription": "Catch wear in advance, before a dispenser or refrigerator fails during peak hours.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "equipment failure data",
    "flowsTo": []
  },
  {
    "id": "c2-1-fuel-to-store-conversion",
    "problemId": "c2-1",
    "blockId": "c-stations-stores",
    "title": "Bring the customer from the pump into the store",
    "shortDescription": "How many fueling customers reach the store, and where that transition is lost.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Quick Win",
    "impact": "Revenue growth",
    "lock": null,
    "flowsTo": [
      "c2-1-nonfuel-moment-offer"
    ]
  },
  {
    "id": "c2-1-nonfuel-moment-offer",
    "problemId": "c2-1",
    "blockId": "c-stations-stores",
    "title": "Increase the non-fuel ticket with an in-the-moment offer",
    "shortDescription": "What to offer a fueling customer so they enter and buy more.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": "fuel-to-store conversion is visible + customer profile",
    "flowsTo": []
  },
  {
    "id": "c2-2-local-assortment-sales",
    "problemId": "c2-2",
    "blockId": "c-stations-stores",
    "title": "Understand what really sells at this station",
    "shortDescription": "Which products move at a specific station, not one template for all.",
    "stage": 1,
    "sequence": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Revenue growth",
    "lock": null,
    "flowsTo": [
      "c2-2-product-demand-forecast"
    ]
  },
  {
    "id": "c2-2-product-demand-forecast",
    "problemId": "c2-2",
    "blockId": "c-stations-stores",
    "title": "Product demand forecast by station",
    "shortDescription": "How much of what to deliver, including coffee and baked goods by hour.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": "station-level sales are visible",
    "flowsTo": []
  },
  {
    "id": "c2-3-stock-waste-oos",
    "problemId": "c2-3",
    "blockId": "c-stations-stores",
    "title": "See where write-offs and empty shelves create losses",
    "shortDescription": "Losses from expired fresh goods and from products not being available on the shelf.",
    "stage": 1,
    "sequence": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Cost reduction",
    "lock": null,
    "flowsTo": [
      "c2-3-markdown-reorder"
    ]
  },
  {
    "id": "c2-3-markdown-reorder",
    "problemId": "c2-3",
    "blockId": "c-stations-stores",
    "title": "Mark down on time and prevent empty shelves",
    "shortDescription": "The markdown moment for perishables and the reorder point, so losses are not taken from both ends.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "inventory and write-off control in place",
    "flowsTo": []
  },
  {
    "id": "c2-4-retail-media",
    "problemId": "c2-4",
    "blockId": "c-stations-stores",
    "title": "Brand advertising on station traffic",
    "shortDescription": "Physical station traffic provides an audience, contact point, and visit context: the entry point to retail media.",
    "stage": 3,
    "sequence": 1,
    "cost": "$$$$",
    "scale": "Major Program",
    "impact": "Revenue growth",
    "lock": null,
    "flowsTo": []
  },
  {
    "id": "d1-1-client-profit",
    "problemId": "d1-1",
    "blockId": "d-customers-loyalty",
    "title": "Who our customers are and who brings profit",
    "shortDescription": "Not card turnover, but who actually earns money for the company.",
    "stage": 1,
    "sequence": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Revenue growth",
    "lock": null,
    "flowsTo": []
  },
  {
    "id": "d1-1-basic-segmentation",
    "problemId": "d1-1",
    "blockId": "d-customers-loyalty",
    "title": "Basic Customer Segmentation",
    "shortDescription": "Clear groups so customers can be managed differently, not all the same way.",
    "stage": 1,
    "sequence": 2,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Revenue growth",
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
    "title": "Customer 360 Profile",
    "shortDescription": "A single profile from all systems, so the customer is visible as a whole and can be managed personally.",
    "stage": 1,
    "sequence": 3,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Decision quality",
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
    "title": "Behavioral Segmentation with ML",
    "shortDescription": "Non-obvious groups based on real behavior, more accurate than rules.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": "basic segmentation + 360 customer profile",
    "flowsTo": []
  },
  {
    "id": "d1-1-clv",
    "problemId": "d1-1",
    "blockId": "d-customers-loyalty",
    "title": "Customer Lifetime Value Forecast (CLV)",
    "shortDescription": "Who will become valuable, so investment happens in advance, not by looking backward.",
    "stage": 2,
    "sequence": 2,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": "360 customer purchase profile",
    "flowsTo": []
  },
  {
    "id": "d1-2-early-churn-signal",
    "problemId": "d1-2",
    "blockId": "d-customers-loyalty",
    "title": "Notice a leaving customer in time",
    "shortDescription": "Catch cooling behavior while the customer can still be brought back cheaply.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": null,
    "flowsTo": []
  },
  {
    "id": "d1-2-churn-prediction",
    "problemId": "d1-2",
    "blockId": "d-customers-loyalty",
    "title": "Predict churn in advance",
    "shortDescription": "Who is about to leave before obvious signs appear.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": "360 customer behavior profile",
    "flowsTo": [
      "d1-2-retention-action",
      "d1-2-retention-autopilot"
    ]
  },
  {
    "id": "d1-2-retention-action",
    "problemId": "d1-2",
    "blockId": "d-customers-loyalty",
    "title": "Know what will retain them",
    "shortDescription": "The action that will actually bring a specific customer back.",
    "stage": 2,
    "sequence": 2,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": "segmentation + churn forecast",
    "flowsTo": [
      "d1-2-retention-autopilot"
    ]
  },
  {
    "id": "d1-2-retention-autopilot",
    "problemId": "d1-2",
    "blockId": "d-customers-loyalty",
    "title": "Retention on autopilot",
    "shortDescription": "The system catches risk and launches retention under human control.",
    "stage": 3,
    "sequence": 1,
    "cost": "$$$$",
    "scale": "Major Program",
    "impact": "Revenue growth",
    "lock": "churn forecast + action selection + data foundation",
    "flowsTo": []
  },
  {
    "id": "d1-3-basket-bundles",
    "problemId": "d1-3",
    "blockId": "d-customers-loyalty",
    "title": "Increase ticket through ready bundles",
    "shortDescription": "What customers buy together, offered so they buy more per visit.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": null,
    "flowsTo": []
  },
  {
    "id": "d1-3-personal-offer",
    "problemId": "d1-3",
    "blockId": "d-customers-loyalty",
    "title": "Personal offer for the customer",
    "shortDescription": "What to offer so the customer enters the store and buys.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": "segmentation + 360 customer profile",
    "flowsTo": []
  },
  {
    "id": "d1-3-best-offer-moment",
    "problemId": "d1-3",
    "blockId": "d-customers-loyalty",
    "title": "Best moment for an offer",
    "shortDescription": "Catch when the customer is receptive and make the offer then.",
    "stage": 2,
    "sequence": 2,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": "360 customer behavior profile",
    "flowsTo": []
  },
  {
    "id": "d1-4-promo-effect",
    "problemId": "d1-4",
    "blockId": "d-customers-loyalty",
    "title": "Know whether a promotion really worked",
    "shortDescription": "Separate the real promotion effect from what the customer would have bought anyway.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
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
    "title": "Give discounts to those whose behavior changes",
    "shortDescription": "Stop paying those who would fuel without a discount.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "segmentation + promo measurement",
    "flowsTo": []
  },
  {
    "id": "d1-4-promo-engine",
    "problemId": "d1-4",
    "blockId": "d-customers-loyalty",
    "title": "Promotion engine: targeted campaigns on segments",
    "shortDescription": "Launch personal campaigns at scale and see return immediately.",
    "stage": 3,
    "sequence": 1,
    "cost": "$$$$",
    "scale": "Major Program",
    "impact": "Revenue growth",
    "lock": "segments + promo measurement + data foundation",
    "flowsTo": []
  },
  {
    "id": "d1-5-feedback-themes",
    "problemId": "d1-5",
    "blockId": "d-customers-loyalty",
    "title": "Understand what customers complain about",
    "shortDescription": "Real reasons for dissatisfaction from reviews, without manual reading.",
    "stage": 1,
    "sequence": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Productivity",
    "lock": null,
    "flowsTo": [
      "d1-5-station-problem-early"
    ]
  },
  {
    "id": "d1-5-station-problem-early",
    "problemId": "d1-5",
    "blockId": "d-customers-loyalty",
    "title": "Detect station problems early",
    "shortDescription": "A spike in negative feedback for a site is flagged immediately.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Decision quality",
    "lock": "feedback collection in place",
    "flowsTo": []
  },
  {
    "id": "d1-5-ai-support-line",
    "problemId": "d1-5",
    "blockId": "d-customers-loyalty",
    "title": "AI First-Line Support",
    "shortDescription": "Answers typical customer questions itself and escalates complex cases to a human.",
    "stage": 3,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Major Program",
    "impact": "Productivity",
    "lock": "knowledge base and inquiry handling policies",
    "flowsTo": []
  },
  {
    "id": "d1-7-retail-media-entry",
    "problemId": "d1-7",
    "blockId": "d-customers-loyalty",
    "title": "Earn from brand advertising",
    "shortDescription": "Sell partners access to customer segments, contact moments, and measurable campaigns.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$$",
    "scale": "Major Program",
    "impact": "Revenue growth",
    "lock": null,
    "flowsTo": [],
    "crossRef": {
      "targetId": "c2-4-retail-media",
      "targetLabel": "C2.4 \"Brand advertising on station traffic\""
    }
  },
  {
    "id": "d1-7-partner-data-platform",
    "problemId": "d1-7",
    "blockId": "d-customers-loyalty",
    "title": "Data platform for partners",
    "shortDescription": "Anonymized analytics and partner access in a protected environment.",
    "stage": 3,
    "sequence": 1,
    "cost": "$$$$",
    "scale": "Major Program",
    "impact": "Revenue growth",
    "lock": "mature data foundation + access management",
    "flowsTo": []
  },
  {
    "id": "d2-1-b2b-profitability",
    "problemId": "d2-1",
    "blockId": "d-customers-loyalty",
    "title": "See which corporate customers are profitable",
    "shortDescription": "Account margin after discounts and payment deferrals: which accounts are unprofitable.",
    "stage": 1,
    "sequence": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Cost reduction",
    "lock": null,
    "flowsTo": [
      "d2-3-risk-value-terms"
    ]
  },
  {
    "id": "d2-1-b2b-value-forecast",
    "problemId": "d2-1",
    "blockId": "d-customers-loyalty",
    "title": "Corporate customer value forecast",
    "shortDescription": "Which accounts will grow, so investment can be prioritized.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": "invoice history + consolidated invoice data",
    "flowsTo": []
  },
  {
    "id": "d2-2-b2b-cooling-signal",
    "problemId": "d2-2",
    "blockId": "d-customers-loyalty",
    "title": "Notice corporate customer cooling",
    "shortDescription": "Declining account volumes while the contract is still active.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": null,
    "flowsTo": []
  },
  {
    "id": "d2-2-renewal-risk",
    "problemId": "d2-2",
    "blockId": "d-customers-loyalty",
    "title": "Predict non-renewal",
    "shortDescription": "Which accounts are close to leaving before the contract ends.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Revenue growth",
    "lock": "invoice history + consolidated data",
    "flowsTo": []
  },
  {
    "id": "d2-3-risk-value-terms",
    "problemId": "d2-1",
    "blockId": "d-customers-loyalty",
    "title": "Set terms by risk and value",
    "shortDescription": "Discount and limit tailored to the specific customer, not \"as usual\".",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "B2B portfolio profitability + invoice data",
    "flowsTo": []
  },
  {
    "id": "d2-3-payment-risk-entry",
    "problemId": "d2-1",
    "blockId": "d-customers-loyalty",
    "title": "Prevent non-payment",
    "shortDescription": "Who risks not paying under deferred terms before the debt becomes overdue.",
    "stage": 2,
    "sequence": 2,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": null,
    "flowsTo": [],
    "crossRef": {
      "targetId": "e3-payment-risk",
      "targetLabel": "E3 \"Understand who risks not paying\""
    }
  },
  {
    "id": "e1-live-finance-picture",
    "problemId": "e1",
    "blockId": "e-finance-control",
    "title": "Network finance in a live view",
    "shortDescription": "Margin and cash by station, region, and product immediately, not through an export by morning.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Quick Win",
    "impact": "Decision quality",
    "lock": null,
    "flowsTo": [
      "e-frontier-finops-agent"
    ]
  },
  {
    "id": "e1-ask-figures-entry",
    "problemId": "e1",
    "blockId": "e-finance-control",
    "title": "Ask for figures in plain language and get an answer",
    "shortDescription": "Ask about margin or costs as if asking a person, and get an immediate answer without an analyst as intermediary.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Decision quality",
    "lock": "single foundation + BI (G1)",
    "flowsTo": [],
    "crossRef": {
      "targetId": "g2-4-ask-data-words",
      "targetLabel": "G2.3 \"Ask the data in plain language and get an answer\""
    }
  },
  {
    "id": "e2-plan-deviation",
    "problemId": "e2",
    "blockId": "e-finance-control",
    "title": "See immediately what deviated from plan",
    "shortDescription": "Where margin fell or costs rose against expectation, without manual reconciliation.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Quick Win",
    "impact": "Decision quality",
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
    "title": "Understand why it deviated and what to do",
    "shortDescription": "Break the deviation into causes and what can be influenced, not just \"here are the numbers\".",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Decision quality",
    "lock": "plan deviations are visible",
    "flowsTo": [
      "e-frontier-finops-agent"
    ]
  },
  {
    "id": "e3-cash-position",
    "problemId": "e3",
    "blockId": "e-finance-control",
    "title": "See current balances, debts, and obligations",
    "shortDescription": "Balances, debts, and obligations: the full cash picture.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Quick Win",
    "impact": "Decision quality",
    "lock": null,
    "flowsTo": [
      "e3-cash-gap-forecast"
    ]
  },
  {
    "id": "e3-cash-gap-forecast",
    "problemId": "e3",
    "blockId": "e-finance-control",
    "title": "Know about a cash gap in advance",
    "shortDescription": "Where and when cash will be short, considering procurement, inventory, and receivables.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Decision quality",
    "lock": "cash picture is assembled",
    "flowsTo": [
      "e-frontier-finops-agent"
    ]
  },
  {
    "id": "e3-payment-risk",
    "problemId": "e3",
    "blockId": "e-finance-control",
    "title": "Understand who risks not paying",
    "shortDescription": "Which debtors put cash at risk, so work is driven by risk, not by a list.",
    "stage": 2,
    "sequence": 2,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "receivables and payment picture",
    "flowsTo": []
  },
  {
    "id": "e5-duplicate-fake-payments",
    "problemId": "e5",
    "blockId": "e-finance-control",
    "title": "Catch duplicate and fictitious payments",
    "shortDescription": "Duplicate invoices, fictitious counterparties, and unnecessary payments before the money leaves.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Quick Win",
    "impact": "Cost reduction",
    "lock": null,
    "flowsTo": [
      "e5-policy-before-payment"
    ]
  },
  {
    "id": "e5-policy-before-payment",
    "problemId": "e5",
    "blockId": "e-finance-control",
    "title": "Catch a policy deviation before payment",
    "shortDescription": "A rule violation in posting or procurement while the money has not yet left.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "policies are formalized + linked to the operating flow",
    "flowsTo": []
  },
  {
    "id": "e-frontier-finops-agent",
    "problemId": "e2",
    "blockId": "e-finance-control",
    "title": "Financial and Operational Analyst Agent",
    "shortDescription": "A tireless analyst that sees the whole business in numbers: finds leakage points, suggests where to reduce costs, and highlights risks.",
    "stage": 3,
    "sequence": 3,
    "cost": "$$$$",
    "scale": "Major Program",
    "impact": "Cost reduction",
    "lock": "single foundation + live picture + deviation control + foundation",
    "flowsTo": []
  },
  {
    "blockId": "f-support-functions",
    "id": "f1-1-hr-operations-assistant",
    "problemId": "f1",
    "title": "AI Assistant for HR Operations",
    "shortDescription": "Answers, templates, policies, requests, and onboarding prompts without a manual HR queue.",
    "stage": 1,
    "sequence": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Productivity",
    "lock": null,
    "flowsTo": []
  },
  {
    "blockId": "f-support-functions",
    "id": "f1-2-linear-staff-screening",
    "problemId": "f1",
    "title": "Recruiting and initial screening of line staff",
    "shortDescription": "Resumes, questionnaires, and applications turn into a candidate short-list for HR.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Scoped Project",
    "impact": "Decision quality",
    "lock": null,
    "flowsTo": []
  },
  {
    "blockId": "f-support-functions",
    "id": "f1-3-field-staff-digital-loop",
    "problemId": "f1",
    "title": "Digital loop for field staff work",
    "shortDescription": "The employee's workday, required actions, and completion confirmations in a mobile loop.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Major Program",
    "impact": "Decision quality",
    "lock": null,
    "flowsTo": [
      "f1-4-turnover-early-signals"
    ]
  },
  {
    "blockId": "f-support-functions",
    "id": "f1-4-turnover-early-signals",
    "problemId": "f1",
    "title": "Early signals of turnover and onboarding quality",
    "shortDescription": "Where an employee drops out of the process is visible before resignation.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "digital staff operations loop (F1.3)",
    "flowsTo": []
  },
  {
    "blockId": "f-support-functions",
    "id": "f2-1-legal-assistant",
    "problemId": "f2",
    "title": "Legal assistant for contracts and policies",
    "shortDescription": "Answers on contracts, policies, templates, and past decisions, with a source reference.",
    "stage": 1,
    "sequence": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Productivity",
    "lock": null,
    "flowsTo": [],
    "crossRef": {
      "targetId": "g2-1-knowledge-search",
      "targetLabel": "G2.1 \"Company knowledge search\""
    }
  },
  {
    "blockId": "f-support-functions",
    "id": "f2-2-legal-doc-draft",
    "problemId": "f2",
    "title": "Get a document draft immediately",
    "shortDescription": "Contract, claim, letter, addendum, or opinion for the case, not from a blank page.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Quick Win",
    "impact": "Productivity",
    "lock": null,
    "flowsTo": []
  },
  {
    "blockId": "f-support-functions",
    "id": "f2-3-contract-obligations-control",
    "problemId": "f2",
    "title": "Contract obligation and risk control",
    "shortDescription": "Deadlines, terms, penalties, renewals, and control events are not hidden inside contracts.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Decision quality",
    "lock": null,
    "flowsTo": [
      "f2-4-legal-process-agent"
    ]
  },
  {
    "blockId": "f-support-functions",
    "id": "f2-4-legal-process-agent",
    "problemId": "f2",
    "title": "Legal Process Agent",
    "shortDescription": "Document packages, deadlines, drafts, follow-up, and escalations under lawyer control.",
    "stage": 3,
    "sequence": 1,
    "cost": "$$$$",
    "scale": "Major Program",
    "impact": "Decision quality",
    "lock": "legal assistant + obligation control",
    "flowsTo": []
  },
  {
    "blockId": "f-support-functions",
    "id": "f3-1-mto-visibility",
    "problemId": "f3",
    "title": "Visibility of MRO procurement and contractor services",
    "shortDescription": "Categories, suppliers, prices, stations, and contractors in one view.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Quick Win",
    "impact": "Cost reduction",
    "lock": null,
    "flowsTo": [
      "f3-2-mto-anomalies",
      "f3-3-supplier-rating"
    ]
  },
  {
    "blockId": "f-support-functions",
    "id": "f3-2-mto-anomalies",
    "problemId": "f3",
    "title": "Find overpayments and anomalies in MRO",
    "shortDescription": "Prices above history, splitting, repeated contractors, and unusual deviations are flagged.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "MRO procurement visibility (F3.1)",
    "flowsTo": []
  },
  {
    "blockId": "f-support-functions",
    "id": "f3-3-supplier-rating",
    "problemId": "f3",
    "title": "Supplier and contractor rating",
    "shortDescription": "Selection not only by price, but by actual reliability and consequences.",
    "stage": 2,
    "sequence": 2,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Decision quality",
    "lock": "MRO procurement visibility (F3.1)",
    "flowsTo": []
  },
  {
    "blockId": "f-support-functions",
    "id": "f4-loyalty-card-fraud",
    "problemId": "f4",
    "title": "Control abuse in loyalty and fuel cards",
    "shortDescription": "Anomalies in bonus accruals and card/voucher transactions are visible before audit, not after.",
    "stage": 2,
    "sequence": 5,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "loss control dashboard (F4.1)",
    "flowsTo": []
  },
  {
    "blockId": "f-support-functions",
    "id": "f4-1-loss-exception-panel",
    "problemId": "f4",
    "title": "Loss and exception control panel",
    "shortDescription": "Where money, fuel, process discipline, and control are being lost is visible in one picture.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Quick Win",
    "impact": "Cost reduction",
    "lock": null,
    "flowsTo": [
      "f4-2-anomaly-detection"
    ]
  },
  {
    "blockId": "f-support-functions",
    "id": "f4-2-anomaly-detection",
    "problemId": "f4",
    "title": "Anomaly and rule-deviation detection",
    "shortDescription": "Signals across operations, standards, and policies surface before manual checks.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "loss control dashboard (F4.1)",
    "flowsTo": [
      "f4-3-risk-investigations",
      "f4-4-control-chain-agent"
    ]
  },
  {
    "blockId": "f-support-functions",
    "id": "f4-3-risk-investigations",
    "problemId": "f4",
    "title": "Risk-based audits and investigations",
    "shortDescription": "Checks, cases, evidence, owners, and results in a managed loop.",
    "stage": 2,
    "sequence": 2,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Cost reduction",
    "lock": "anomaly detection (F4.2)",
    "flowsTo": [
      "f4-4-control-chain-agent"
    ]
  },
  {
    "blockId": "f-support-functions",
    "id": "f4-4-control-chain-agent",
    "problemId": "f4",
    "title": "Internal Control Chain Agent",
    "shortDescription": "Connects signals, prepares the evidence pack, and suggests the next best action; the decision stays with a human.",
    "stage": 3,
    "sequence": 1,
    "cost": "$$$$",
    "scale": "Major Program",
    "impact": "Cost reduction",
    "lock": "single data foundation + domain loops in B/C/D/E/F4",
    "flowsTo": []
  },
  {
    "blockId": "f-support-functions",
    "id": "f5-document-primary-processing",
    "problemId": "f5",
    "title": "Document and primary paperwork processing",
    "shortDescription": "Recognize, enter, and reconcile documents automatically, without manual retyping.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$",
    "scale": "Quick Win",
    "impact": "Productivity",
    "lock": null,
    "flowsTo": []
  },
  {
    "id": "g1-1-trusted-data-foundation",
    "problemId": "g1-1",
    "blockId": "g-data-foundation",
    "title": "A Data Foundation You Can Trust",
    "shortDescription": "One truth instead of different numbers across departments; data in one place and suitable for decisions.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$$$",
    "scale": "Major Program",
    "impact": "Decision quality",
    "lock": "most of the Advanced/Frontier catalog depends on this card",
    "flowsTo": [
      "g1-2-bi-foundation",
      "g2-4-ask-data-words"
    ]
  },
  {
    "id": "g1-2-bi-foundation",
    "problemId": "g1-1",
    "blockId": "g-data-foundation",
    "title": "Build BI on top of a unified foundation",
    "shortDescription": "Unified dashboards across the network instead of exports and separate Excel files for everyone.",
    "stage": 1,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Decision quality",
    "lock": "single foundation (G1.1)",
    "flowsTo": [
      "g2-4-ask-data-words"
    ]
  },
  {
    "id": "g2-1-knowledge-search",
    "problemId": "g2-1",
    "blockId": "g-data-foundation",
    "title": "Company Knowledge Search",
    "shortDescription": "A policy, instruction, or past decision found by meaning, not by calling the person who remembers.",
    "stage": 1,
    "sequence": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Productivity",
    "lock": null,
    "flowsTo": []
  },
  {
    "id": "g2-3-team-routine",
    "problemId": "g2-3",
    "blockId": "g-data-foundation",
    "title": "Take Mechanical Routine Work Off the Team",
    "shortDescription": "Meetings, tasks, correspondence, calendar, reports go to AI so people can focus on the actual work.",
    "stage": 1,
    "sequence": 1,
    "cost": "$",
    "scale": "Quick Win",
    "impact": "Productivity",
    "lock": null,
    "flowsTo": []
  },
  {
    "id": "g2-4-ask-data-words",
    "problemId": "g2-3",
    "blockId": "g-data-foundation",
    "title": "Ask the Data in Plain Language and Get an Answer",
    "shortDescription": "Any employee can reach the numbers without an analyst as intermediary.",
    "stage": 2,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Scoped Project",
    "impact": "Decision quality",
    "lock": "single foundation + BI (G1.1-G1.2)",
    "flowsTo": []
  },
  {
    "id": "g2-5-system-data-agent",
    "problemId": "g2-3",
    "blockId": "g-data-foundation",
    "title": "Data Update Agent for Business Systems",
    "shortDescription": "It enters and updates records from emails, calls, and documents by itself; the operator keeps control.",
    "stage": 3,
    "sequence": 1,
    "cost": "$$$",
    "scale": "Major Program",
    "impact": "Productivity",
    "lock": "system access (CRM/ERP) + document processing (G2.2)",
    "flowsTo": []
  }
];

window.FUEL_DRAWER_CONTENT_EN = {
  "g1-1-trusted-data-foundation": {
    "businessPressure": "In a typical network, data is scattered: ERP, POS, loyalty, telematics, terminals, BI, Excel — each with its own version of the truth. Departments arrive at a meeting with different numbers for the same margin, and time goes into arguing whose number is right instead of deciding. And any forecast, model, or AI built on unconsolidated, dirty data inherits those errors — and lies convincingly.",
    "whatWePutInPlace": "We build the foundation everything else rests on: we bring scattered systems into one place, align key metrics to a single methodology (one truth for every department), and raise data to a quality fit for decisions. This is not 'another system' but the foundation that forecasts, analytics, and AI across all blocks stand on. (Three aspects in scope: one truth / one foundation / data quality.)",
    "whatImproves": "Departments work from one number instead of arguing whose is right; forecasts and AI you can trust can be built on the foundation; decisions rest on data, not on whose Excel is freshest.",
    "dataAiBehind": "Consolidating sources into a single foundation, aligning metric methodology, and controlling data quality. A Major Program — a real foundation, hence the highest cost and the dependency most of the catalog has on it. For a client with an existing DWH, part of the step is marked as done — included earlier in the stage.",
    "conversationQuestions": [
      "Do departments arrive at meetings with different numbers for the same metric?",
      "How many systems hold their own version of the truth for sales, margin, and customers?",
      "Can the data be trusted enough to build forecasts and AI on it?"
    ]
  },
  "g1-2-bi-foundation": {
    "businessPressure": "Even once data is consolidated, without unified reporting each department builds its own exports and Excel — and the picture diverges again, while analytics and AI hit the lack of a reliable visualization layer. Text-to-SQL, forecasts, and analytics in any block rely on this layer; without it they work at half strength.",
    "whatWePutInPlace": "We stand up a unified reporting system (BI) on top of the consolidated foundation: network-wide dashboards and reports that all analytics and AI rely on. One layer of truth in visualization instead of scattered exports.",
    "whatImproves": "A single picture in dashboards instead of everyone's own Excel; analytics and AI rest on a reliable layer; decisions come from one report, not from someone's export.",
    "dataAiBehind": "BI on top of the single data foundation (G1.1). Scoped — it needs the consolidated foundation. Many networks already have BI — then the step is marked as done and the catalog moves on to the cards that rely on it.",
    "conversationQuestions": [
      "Do all departments look at one report, or each at their own export?",
      "Do your forecasts and analytics rest on a reliable reporting layer?",
      "How many Excel exports live alongside the official reporting?"
    ]
  },
  "g2-1-knowledge-search": {
    "businessPressure": "Company knowledge is scattered across policies, instructions, contracts, past decisions, and correspondence — and lives in the heads of long-tenured staff. An employee spends time finding an answer, or calls 'the person who remembers.' When that person leaves, the knowledge leaves with them.",
    "whatWePutInPlace": "We set up company knowledge search that finds an answer by the meaning of the question, not by an exact word match: a policy, a contract clause, a past decision, an instruction. A cross-cutting tool — it works for legal, operations, finance, HR, any unit.",
    "whatImproves": "An answer in seconds instead of searching and calling around; knowledge isn't lost when an employee leaves; one access point to policies and experience for every unit.",
    "dataAiBehind": "Semantic search (RAG, AI) over approved documents and the company knowledge base, with access control. A ready tool — Quick Win. It is the home of a cross-cutting capability: the legal entry point comes from F2.3, but the engine is one for the whole company.",
    "conversationQuestions": [
      "How much time do staff spend searching policies and contracts for an answer?",
      "What happens to knowledge when 'the person who remembers' leaves?",
      "How many questions are resolved by a phone call instead of a search?"
    ]
  },
  "g2-3-team-routine": {
    "businessPressure": "The team — especially a small head office — spends a lot of time on mechanical work: writing up and summarizing meetings, setting and tracking tasks, sorting correspondence, aligning calendars, compiling routine reports. That time doesn't go to the decisions people were hired for.",
    "whatWePutInPlace": "We put working AI tools in place that take the mechanical part on themselves: meeting transcripts and summaries with action items, help with tasks and correspondence, and preparation of routine reports. A cross-cutting set — useful to any unit. We start with low-risk routine and clear access control.",
    "whatImproves": "Less time on mechanics and more on the actual work; meetings and tasks aren't lost; one baseline productivity set for all teams.",
    "dataAiBehind": "Ready-made AI productivity tools (meetings, tasks, correspondence, reports) with access control. Quick Win — the fastest, clearest wins in the catalog, available from day one.",
    "conversationQuestions": [
      "How much team time goes to mechanical routine?",
      "Do agreements and tasks get lost after meetings?",
      "Which routine tasks could be taken off people right now?"
    ]
  },
  "g2-4-ask-data-words": {
    "businessPressure": "To get a number, an employee goes to an analyst and waits for an export. Analysts are the bottleneck: simple questions queue behind complex ones, and a manager can't quickly test a hypothesis against the data themselves. The data exists, but access to it runs through an intermediary.",
    "whatWePutInPlace": "We give every employee the ability to ask the data in business language and get an answer — with no analyst as intermediary. A cross-cutting tool: finance asks about margin, operations about stations, commercial about customers — one engine, different views. It works on top of a reliable foundation and reporting.",
    "whatImproves": "An answer to a data question in seconds rather than a day; analysts freed from simple requests; a manager tests a hypothesis themselves, in any unit.",
    "dataAiBehind": "Natural-language querying (Text-to-SQL, AI) on top of the single foundation and BI. Advanced — hence the lock on G1.1–G1.2: without a reliable foundation the assistant would lie convincingly. The home of a cross-cutting capability: the finance entry point comes from E1, but the engine is one for the whole company.",
    "conversationQuestions": [
      "How long does it take to get a number through an analyst?",
      "Can a manager test a hypothesis against the data themselves?",
      "How many simple requests are queued with the analysts?"
    ]
  },
  "g2-5-system-data-agent": {
    "businessPressure": "A huge share of working time goes to moving data between systems by hand: entering a customer into CRM after a call, updating a status in the task manager, posting a document in ERP, retyping data from an email into a form. It's slow, creates errors and divergence between systems, and doesn't scale as the company grows.",
    "whatWePutInPlace": "We put in place an agent that enters and updates records in CRM, ERP, and task managers itself — from emails, calls, scans, and chats. A human sets the rules and reviews the edge cases; the system takes on the routine data transfer. A cross-cutting tool: sales, procurement, back office, HR — anywhere data is moved by hand.",
    "whatImproves": "Less manual entry and fewer transfer errors; systems stay in sync instead of diverging; the team does the work instead of retyping data between windows.",
    "dataAiBehind": "An agent on top of system access (CRM/ERP/task managers) and incoming-document processing, acting by rules and under human control. Frontier — an automation layer on top of data and tools; edge cases escalate to a human, the agent doesn't act blindly.",
    "conversationQuestions": [
      "How much working time goes to moving data between systems by hand?",
      "Does data diverge between CRM, ERP, and task managers because of manual entry?",
      "Which data-transfer operations could be handed to an agent while keeping control?"
    ]
  },
  "a1-stock-need-view": {
    "businessPressure": "Procurement decisions are often made under time pressure and with an incomplete picture: inventory in one system, demand in the buyer's head, station requests in email. As a result, orders follow habit and the previous period rather than what is actually needed now, leading to excess stock at one terminal and shortages at another.",
    "whatWePutInPlace": "We bring into one view what is needed for a procurement decision: current inventory by terminal and station, demand, and open requests. The buyer sees the full situation in one place instead of manually collecting it from three sources before every order.",
    "whatImproves": "Procurement is based on the real picture, not memory and habit; there are fewer reactive top-up purchases; mismatches between inventory and demand are visible early.",
    "dataAiBehind": "Consolidation of inventory, demand, and requests from existing systems into a single data view. Works on available data, without models. This is the foundation for forecasting and smart procurement.",
    "conversationQuestions": [
      "How many systems does the buyer open to decide what to order?",
      "Are orders based on real demand or on the previous period?",
      "Do you see inventory diverging from demand before a shortage or surplus appears?"
    ]
  },
  "a1-demand-forecast": {
    "businessPressure": "Procurement volumes often follow the previous period or supplier availability. But demand changes by season, region, station role, B2B contracts, holidays, and competitor behavior. When the plan is rough or late, the result is surplus in one place, shortage risk in another, and emergency top-up purchases that could have been avoided.",
    "whatWePutInPlace": "We build a fuel demand forecast for each station and terminal, taking seasonality, weather, events, and known network changes into account. This is the basis for what follows: how much to buy, how much to deliver, and where to hold stock.",
    "whatImproves": "Procurement and allocation are based on expected demand, not last month; there are fewer emergency purchases and better readiness for seasonal peaks.",
    "dataAiBehind": "Forecasting ML models on sales history by station and fuel grade, with external factors such as season, weather, and events. Advanced: requires accumulated history and consolidated data. Dispatching in block B relies on this forecast; it is a shared asset, not a duplicate.",
    "conversationQuestions": [
      "Are volumes planned from a demand forecast or adjusted from recent orders?",
      "How often do you need emergency top-up purchases because the plan was wrong?",
      "Are commercial changes, such as promotions and new contracts, visible in the plan in advance?"
    ]
  },
  "a1-smart-buying": {
    "businessPressure": "Even with a demand forecast, the procurement decision remains a bundle of trade-offs: supplier offer, market price movement, current inventory, available cash, terminal capacity, and logistics all pull in different directions. An attractive price can turn into surplus, cash pressure, or supply imbalance.",
    "whatWePutInPlace": "We turn this into a ready decision: how much to buy, when, from which supplier, in what volume, and where to send it, with the commercial and cash consequences included. We show what happens if the company buys now, waits, splits the order, or reallocates volume between terminals. The tool supports the buyer's decision; it does not replace their responsibility.",
    "whatImproves": "Procurement happens on time and in the right volume; less capital is frozen; the cost of each option is visible before the order is placed.",
    "dataAiBehind": "Procurement optimization on top of demand forecast, inventory, prices, and constraints such as capacity, logistics, and cash. This is the level of a full procurement optimization system. A real implementation of this type of system is our Optimus product.",
    "conversationQuestions": [
      "Do procurement decisions account for demand, inventory, logistics, and cash together or separately?",
      "Can you compare the options \"buy now / wait / split the order\" in financial terms?",
      "Which procurement decisions would benefit from scenario calculation before the deal?"
    ]
  },
  "a1-buying-agent": {
    "businessPressure": "Once demand can be forecast and optimal procurement can be calculated, the bottleneck becomes manual work: every day someone has to assemble the picture, run the calculation, and prepare the request. In a large network with dozens of terminals and fuel grades, this routine consumes the buyer's time and does not scale.",
    "whatWePutInPlace": "We connect the forecast and procurement calculation into a system that prepares the request according to company rules, while a human reviews and approves it. The buyer sets the boundaries and controls the process; the system takes over data collection and calculation.",
    "whatImproves": "The buyer focuses on decisions and negotiations, not collecting numbers; requests are prepared quickly and consistently; control remains with the human.",
    "dataAiBehind": "A managed loop connecting forecast, optimization, and procurement rules. This is the top of the block, hence the dependency on forecast, inventory, and foundation. AI executes rules set by humans; it does not make the commercial decision on its own.",
    "conversationQuestions": [
      "How much of the buyer's time goes into collecting data and preparing requests?",
      "What prevents you from automating request preparation while keeping approval with yourself?",
      "Are the forecast and data ready for automated procurement request preparation?"
    ]
  },
  "a2-compare-suppliers": {
    "businessPressure": "A supplier is not just the quoted price. Availability, delivery timing, document quality, delivery accuracy, payment deferral, behavior in disputes, customs paperwork, and responsiveness all affect the real value of the relationship. Without a structured picture, selection depends on memory and relationship history rather than facts.",
    "whatWePutInPlace": "We assemble a supplier view: offers, contract terms, actual prices, delivery reliability, document quality, claims, disputes, and payment behavior. It becomes clear who creates hidden costs and friction despite an attractive price. Negotiations are based on facts, not anecdotes.",
    "whatImproves": "A stronger negotiating position; the full cost of the relationship is visible, not only price; disputes are resolved faster; supplier choice is transparent.",
    "dataAiBehind": "Consolidation of supplier data, including contracts, deliveries, invoices, and claims, into one view using existing data. Quick Win: no models required.",
    "conversationQuestions": [
      "Can you compare suppliers by full cost, not just price?",
      "Which supplier issues repeat but are not captured anywhere?",
      "Are claims and disputes connected back to procurement decisions?"
    ]
  },
  "a2-buy-timing": {
    "businessPressure": "The fuel purchase price moves, and the buying moment strongly affects cost. But the decision to buy now or wait is more often driven by necessity, because stock is running out, than by the market moment. Procurement happens when it becomes urgent, not when it is favorable.",
    "whatWePutInPlace": "We show the dynamics and expected movement of the purchase price, so the timing decision is based on the market, not only on tank balance. The company can buy earlier or hold back while seeing where the price is moving.",
    "whatImproves": "Procurement at a more favorable moment; lower average batch cost; fewer forced purchases at an unfavorable price.",
    "dataAiBehind": "Analysis of price dynamics and market indices on procurement history, with ML price movement forecasting where applicable. Advanced: requires market data and history.",
    "conversationQuestions": [
      "Do you buy based on the market moment or when stock runs out?",
      "Do you see where the purchase price is moving before the buying decision?",
      "How much do you lose on forced purchases at an unfavorable moment?"
    ]
  },
  "a3-landed-cost": {
    "businessPressure": "Batch cost is not the supplier's price. Logistics, demurrage, railcar downtime, customs delays, and penalties are added on top. These costs surface separately and after the fact, so the real cost of the batch becomes clear only after the money has been spent, and often is not consolidated at all.",
    "whatWePutInPlace": "We collect the full batch cost into one number: procurement, logistics, demurrage, downtime, customs, and penalties. It becomes clear what the batch really cost and where money leaks in the chain.",
    "whatImproves": "The real cost is visible instead of being guessed; the cost drivers are clear; supplier and carrier decisions are based on the full number.",
    "dataAiBehind": "Consolidation of all batch costs from existing documents and accounting data into a single calculation. Quick Win: based on available data, without models.",
    "conversationQuestions": [
      "Do you know the full batch cost, not only the purchase price?",
      "Which cost items, such as demurrage, downtime, and penalties, surface after the fact?",
      "Is the real batch cost consolidated at all, or estimated by eye?"
    ]
  },
  "a3-cost-risk-early": {
    "businessPressure": "Demurrage and downtime are costs that could have been avoided if the risk had been seen in time. But they are often discovered after the fact, when the penalty has already been charged. There is no early warning, only the invoice afterward.",
    "whatWePutInPlace": "We flag the risk of batch cost increase in advance: where downtime, customs delay, or a penalty is developing, while there is still time to intervene. The problem appears as a signal, not as a line in an invoice after the fact.",
    "whatImproves": "Part of demurrage and penalties is prevented; it is visible where the batch is becoming more expensive while action is still possible; there are fewer unpleasant surprises in cost.",
    "dataAiBehind": "Early detection of risks in the supply chain using batch movement data and delay history. Advanced: requires history and linked logistics data.",
    "conversationQuestions": [
      "Do you learn about downtime or penalty risk before it is charged?",
      "How much demurrage per year could have been prevented by an early signal?",
      "Is there a warning about batch delay, or only an invoice afterward?"
    ]
  },
  "a4-price-vs-competitors": {
    "businessPressure": "Pump price is highly local, and a nearby competitor's move directly affects station volume and margin. Competitor prices are learned late and in fragments, while the network does not see its full market position and reacts blindly.",
    "whatWePutInPlace": "We collect market prices next to the company's own prices for each station: where the network is higher, lower, or lagging behind a competitor's move. The network sees its price position as a whole, not through separate complaints from the field.",
    "whatImproves": "Price position is visible immediately, not in fragments; response to competitor moves is faster; pricing decisions are based on the full market picture.",
    "dataAiBehind": "Collection of competitor prices, via feeds or manual observations, alongside own prices by station. Quick Win if price collection is already in place; if not, the first step is to establish it.",
    "conversationQuestions": [
      "Do you see your price against competitors for each station?",
      "How quickly do you learn about price moves by nearby competitors?",
      "Is the response to a competitor based on data or on a call from the station?"
    ]
  },
  "a4-price-headroom": {
    "businessPressure": "Pump pricing is local: a move that protects margin at one station can kill volume at another. Companies often respond to a competitor without understanding the station's role, local price sensitivity, and expected margin-versus-volume balance, effectively giving away margin or volume blindly.",
    "whatWePutInPlace": "We build an understanding of price position by station clusters: how volume responds to price, where there is room to raise price without losing customers, and where price is already pushing them to competitors. We recommend response options with margin and volume boundaries for the pricing team to decide.",
    "whatImproves": "It is clear where price can be raised safely and where it cannot; there are fewer blanket price changes across the network; margin and volume are better balanced by cluster.",
    "dataAiBehind": "ML analysis of local price sensitivity, or elasticity, by station cluster using price, volume, and behavior history. Advanced: requires history and station clustering.",
    "conversationQuestions": [
      "Is price decided by station cluster or uniformly across the network?",
      "Do you know where there is room to raise price and where there is not?",
      "Do you see the expected impact on margin and volume before changing the price?"
    ]
  },
  "a4-dynamic-pricing": {
    "businessPressure": "When local sensitivity is understood and competitors are visible, manual pricing still lags: prices are changed once a day or two, manually by cluster, and every reaction window costs margin or volume. The market moves faster than the pricing team can keep up.",
    "whatWePutInPlace": "We connect sensitivity, competitor monitoring, and station role into a system that recommends or adjusts price based on demand, competitors, and time, under strict company rules and controls. A human sets the margin boundaries and strategy; the system keeps price sharp within those boundaries.",
    "whatImproves": "Price responds to the market quickly, not late; margin and volume are continuously optimized within defined boundaries; the pricing team manages strategy instead of manual recalculation.",
    "dataAiBehind": "A pricing engine on top of the sensitivity model, competitor monitoring, and data foundation. This is the top layer, hence the dependency and highest cost. It works strictly within company rules, including legal pricing constraints; decisions on boundaries remain with humans.",
    "conversationQuestions": [
      "How quickly does price currently change in response to the market?",
      "What prevents you from keeping price sharp automatically within the boundaries you set?",
      "Are sensitivity and competitor data ready for such an engine?"
    ]
  },
  "d1-1-client-profit": {
    "businessPressure": "Fuel is a commodity, and customer knowledge is one of the few things that can distinguish a company from the station next door. It is visible how much each loyalty card spent, but not which customers bring profit and which fuel only during promotions. Retention and promotion budgets are allocated by turnover, which often means to the wrong customers.",
    "whatWePutInPlace": "We build a clear customer picture: who they are, how often they visit, how much and on what they spend, and who actually brings profit after discounts and bonuses, not just who fuels a lot. We show the customer base structure in a way marketing, loyalty, and commercial teams can use, not only reporting.",
    "whatImproves": "It becomes clear which customers the company earns on; wasted discounts are visible; loyalty budget goes where it returns, instead of being spread across everyone.",
    "dataAiBehind": "Works on data that already exists: loyalty transactions, receipts, and pump sales. Descriptive analytics consolidates them into a picture of behavior and profit contribution using available data, without complex models.",
    "conversationQuestions": [
      "Do you know what share of profit, not turnover, comes from the top 10% of customers?",
      "How much do you give away in discounts to customers who would have fueled anyway?",
      "Is the customer's purchase history consolidated into one picture, or does it live in separate systems?"
    ]
  },
  "d1-1-basic-segmentation": {
    "businessPressure": "Until customers are divided into groups, they can only be managed the same way: one promotion for everyone, one communication logic, one price of attention. This leads to blanket discounts, irrelevant messages, and budgets spent equally on profitable customers and those who visit once every six months. To work differently, customers must first be divided into clear groups.",
    "whatWePutInPlace": "We divide customers into simple working groups by recency, frequency, and purchase amount, which marketing and loyalty teams can use immediately. This is the first cut for targeted work: each group gets its own offer, channel, and frequency.",
    "whatImproves": "Promotions and communications reach the right group instead of everyone at once; less money is spent on those who would buy anyway; the foundation for further personalization appears.",
    "dataAiBehind": "Built on existing loyalty transactions. Classic RFM logic, recency / frequency / monetary value, is transparent and fast on available data. This is the foundation on which ML behavioral segmentation is built.",
    "conversationQuestions": [
      "Are customers divided into groups beyond simple spend tiers?",
      "Can you address one customer group separately from the others?",
      "What share of promotions currently goes to all customers at once?"
    ]
  },
  "d1-1-profile-360": {
    "businessPressure": "Customer data is often scattered: loyalty in one system, store receipts in another, pump fuelings in a third, call-center interactions nowhere. As a result, fragments are known separately: a fueling customer, a coffee buyer, a complainant, without seeing that this is one person. Any personal work runs into the absence of a complete customer profile.",
    "whatWePutInPlace": "We create a single customer profile from all sources: fuel, store, cafe, loyalty, interactions, and payments. One person means one profile, with all behavior visible. Segmentation, retention, and personal offers then work on this profile.",
    "whatImproves": "The customer is visible as a whole, not in fragments; personal work becomes possible in principle; data stops duplicating and contradicting itself.",
    "dataAiBehind": "Consolidation of sources into a single profile on top of the data foundation. System integration is required, so this card depends on the unified data foundation (G1). Without Customer 360, advanced cards in this block work at half strength.",
    "conversationQuestions": [
      "Do you see fuel, store, and service touchpoints as one customer?",
      "How many systems must be opened to assemble the full customer picture?",
      "What prevents linking the loyalty card, store receipt, and customer request into one profile?"
    ]
  },
  "d1-1-behavioral-segmentation-ml": {
    "businessPressure": "Simple groups by amount and frequency are a good start, but they miss a lot: a customer who fuels rarely but always fills the tank and buys coffee; one who comes only for promotions; one who is about to switch to a competitor. Rules such as \"spent more than X\" do not distinguish these patterns; they see only what was coded into them.",
    "whatWePutInPlace": "ML models find natural customer groups by real behavior, not by invented thresholds, but by how people actually behave. We connect these groups to offer logic, channel, and timing: whom to protect, grow, reactivate, or exclude from expensive campaigns.",
    "whatImproves": "Better targeting of each group; segments become visible that rules cannot find; less budget is spent on customers whom promotions do not move.",
    "dataAiBehind": "Behavioral clustering with ML on top of the customer profile and transaction history. Requires consolidated data and basic segmentation, so it follows them rather than replacing them.",
    "conversationQuestions": [
      "Are your segments built on rules or on real behavior?",
      "Are there customer groups you suspect exist but cannot isolate?",
      "How differently do you work with different segments today?"
    ]
  },
  "d1-1-clv": {
    "businessPressure": "Customers are evaluated by how much they have already brought. But a valuable customer today may be fading, while a modest newcomer may become the most profitable in a year. Decisions about whom to spend retention and attention on are made from the past, although they should be made from the future.",
    "whatWePutInPlace": "An ML model estimates not only current but also future customer value: whether the customer is growing or fading. This allows marketing investment to be prioritized by real potential, not yesterday's turnover.",
    "whatImproves": "Investment goes to those who will be valuable, not only those who were; growing customers and quietly fading customers are visible earlier; the budget works for the future.",
    "dataAiBehind": "Customer lifetime value (CLV) model on behavior history and Customer 360 profile. Requires accumulated history and consolidated data.",
    "conversationQuestions": [
      "Do you prioritize customers by how much they have brought or how much they will bring?",
      "Do you see a growing customer before they become large?",
      "What currently determines whom retention spend is directed to?"
    ]
  },
  "d1-2-early-churn-signal": {
    "businessPressure": "At a fuel station, a customer rarely leaves formally; they simply visit less often and give part of the tank to a competitor. By the time the decline is visible in total sales, the relationship has already cooled, and bringing the person back is expensive and often too late. The company learns about the loss last.",
    "whatWePutInPlace": "We build an early cooling signal: identify a customer whose frequency and ticket are falling relative to their own norm, not the overall average. This gives time to respond while the customer is still active and open.",
    "whatImproves": "A leaving customer is visible in advance, not after the fact; retention is cheaper because it starts earlier; quiet leakage of valuable customers decreases.",
    "dataAiBehind": "Comparison of current behavior with the customer's own normal pattern using loyalty data. A simple indicator by frequency and ticket, on available data, without a heavy model.",
    "conversationQuestions": [
      "Do you see that a valuable customer has started visiting less often before it appears in overall numbers?",
      "Do you compare a customer with their own norm or with the average across everyone?",
      "How quickly do you learn that a regular customer has started to leave?"
    ]
  },
  "d1-2-churn-prediction": {
    "businessPressure": "A drop in frequency means churn has already begun. By the time the signal is obvious, some customers are already lost. To retain proactively, the company needs to see not those already leaving, but those about to leave, through subtle behavior changes.",
    "whatWePutInPlace": "An ML churn model based on behavioral features estimates churn risk before it becomes obvious. Each valuable customer receives a risk score, and the company works with the risk zone in a targeted way.",
    "whatImproves": "Retention acts before the point of no return; resources go to customers truly at risk; overall customer retention improves.",
    "dataAiBehind": "ML churn model on behavioral features on top of profile and history. Requires consolidated data and accumulated history.",
    "conversationQuestions": [
      "Do you react to customers who have left or those who are about to?",
      "Do you have a churn risk score for each valuable customer?",
      "How many customers do you lose between \"started leaving\" and \"left\"?"
    ]
  },
  "d1-2-retention-action": {
    "businessPressure": "Seeing that a customer is leaving is only half the job. The other half is what exactly to offer them. A universal discount will restore one customer's loyalty, simply give money away to another, and not affect a third. Without understanding what moves a specific customer, retention becomes the same blanket discount under another name.",
    "whatWePutInPlace": "We select the retention action for each at-risk customer: who gets a discount, who gets a store bonus, who only needs a reminder, and whom to let go because retention costs more than the customer is worth. We connect the risk signal to a specific response.",
    "whatImproves": "Retention is targeted, not blanket; less money is spent on those who cannot be brought back or would return anyway; retention campaigns deliver higher return.",
    "dataAiBehind": "Action selection based on customer segment, value, and response history. Relies on segmentation and churn forecast.",
    "conversationQuestions": [
      "Do you offer leaving customers the same thing or different actions by customer?",
      "Do you know which customer will respond to a discount and which will not?",
      "Do you check whether retention costs more than the customer is worth?"
    ]
  },
  "d1-2-retention-autopilot": {
    "businessPressure": "Even when the company can predict churn and knows how to retain, the process still depends on manual work: someone must review the risk zone every day, choose an action, and launch it. Across hundreds of thousands of customers, this does not scale; large customers get attention, while the rest leak away.",
    "whatWePutInPlace": "We connect churn forecast and action selection into a system that tracks risk and launches retention under human-defined rules and control. The operator sets the boundaries and approves the logic; the system takes over the routine.",
    "whatImproves": "Retention works across all customers, not only large ones; reaction is immediate, without a manual cycle; the human manages strategy instead of going through lists.",
    "dataAiBehind": "A managed loop connecting the ML churn model, action selection, and campaign mechanics. This is the top of the block and requires forecast, selection, and data foundation to already work. AI executes rules set by humans; it does not replace their decision.",
    "conversationQuestions": [
      "How many at-risk customers can you realistically process manually?",
      "What prevents launching retention automatically while keeping control with yourself?",
      "Are the data and models ready for an automated loop?"
    ]
  },
  "d1-3-basket-bundles": {
    "businessPressure": "A customer fuels and leaves, although they could have bought coffee, and with coffee, a pastry. It is visible that these products are often bought together, but this is not used: merchandising, cashier prompts, and app offers live separately from what is actually bought as a bundle.",
    "whatWePutInPlace": "We find stable purchase bundles and turn them into action: what to place nearby, what to prompt at checkout, and what to offer in the app so the customer adds to the main purchase. We work from what already sells together, not from guesses.",
    "whatImproves": "Average ticket grows without new customers; bundles that previously went unused start working; merchandising and prompts rely on data, not merchandiser intuition.",
    "dataAiBehind": "Basket affinity analysis on existing receipts. If the company has a strong BI team, part of this may already be calculated; the value is then in turning analysis into specific action at the site.",
    "conversationQuestions": [
      "Do you know what is most often bought together with fuel and with coffee?",
      "Are merchandising and prompts based on bundle data or on habit?",
      "How many tickets stop at one item although they could grow?"
    ]
  },
  "d1-3-personal-offer": {
    "businessPressure": "The same offer to everyone works poorly: one customer needs coffee, another a car wash, a third nothing, and a generic message irritates all three. The company knows enough about the customer to offer precisely, but offers are made blindly.",
    "whatWePutInPlace": "We determine what to offer a specific customer so they visit, enter the store, or buy a service, based on behavior and segment. The next best offer for each customer, not one offer for all.",
    "whatImproves": "Higher response and store conversion; less irritation from irrelevant messages; fuel traffic converts into non-fuel revenue.",
    "dataAiBehind": "Recommendation model on customer profile, purchase history, and segments. Requires consolidated data and segmentation.",
    "conversationQuestions": [
      "Are your offers personal or the same for everyone?",
      "Do you know which customer should receive which offer to make them enter the store?",
      "How is response to an offer measured by customer?"
    ]
  },
  "d1-3-best-offer-moment": {
    "businessPressure": "The right offer at the wrong moment does not work: a coffee promotion when the person is rushing to the highway, or a car wash in the rain. Offers are sent by campaign schedule, not by customer readiness, and the best offers are wasted.",
    "whatWePutInPlace": "We identify the moment when the customer is receptive to an offer, based on their usual rhythm and context, and offer then, not when it is convenient for marketing.",
    "whatImproves": "Higher response to the same offer; less customer fatigue from poorly timed messages; the best offers are not wasted.",
    "dataAiBehind": "A model of contact timing and triggers based on behavior history, on top of profile and segmentation.",
    "conversationQuestions": [
      "Do you send offers by campaign schedule or by customer readiness?",
      "Do you know when a specific customer is more likely to respond?",
      "How many good offers are sent at a bad moment?"
    ]
  },
  "d1-4-promo-effect": {
    "businessPressure": "A promotion \"worked\" because sales grew, but part of those sales would have happened without the discount, so the company simply gave money away. Without honest measurement, a promotion looks successful by bonus redemptions but weak by profit, and unprofitable mechanics are repeated.",
    "whatWePutInPlace": "We measure the real promotion effect: compare behavior of those who received the promotion with a control group, and calculate incremental visits, liters, and ticket, not just redemption. It becomes clear which promotion creates behavior and which subsidizes behavior that already exists.",
    "whatImproves": "An honest view of which promotions bring profit and which only create turnover; fewer repeats of unprofitable promotions; marketing and finance speak the same language.",
    "dataAiBehind": "Effect measurement through control groups using transaction and campaign data. On available data, without a heavy model.",
    "conversationQuestions": [
      "Do you measure a promotion by redemptions or by incremental profit?",
      "Which of your promotions would the customer have used even without the discount?",
      "Do you have a control group to understand the real effect?"
    ]
  },
  "d1-4-uplift-discount": {
    "businessPressure": "Even an honestly measured promotion is still distributed too broadly: within one campaign there are customers whom the discount truly moves, and those who would have bought anyway. Money goes to the second group because targeting is rough.",
    "whatWePutInPlace": "An uplift ML model identifies exactly whom the discount changes and sends the promotion only to them. Within a campaign, we separate customers who are moved by the incentive from those who will buy without it, and do not spend on the latter.",
    "whatImproves": "The same campaign effect is achieved cheaper; profit is protected from unnecessary discounts; promotion budget is concentrated where it works.",
    "dataAiBehind": "Uplift response model using ML on campaign and behavior history. Requires accumulated response history and segmentation.",
    "conversationQuestions": [
      "Within a promotion, do you separate customers moved by the discount from those who will buy anyway?",
      "How much promotion budget goes to guaranteed buyers?",
      "Can you give a discount selectively, not to the whole group?"
    ]
  },
  "d1-4-promo-engine": {
    "businessPressure": "When the company can segment, target, and measure effect, the bottleneck again becomes manual work: every personal campaign must be assembled, launched, and tracked. Targeted work does not scale manually, and everything slides back to blanket promotions because that is easier.",
    "whatWePutInPlace": "We connect segments, offer rules, and measurement into an engine that launches targeted campaigns at scale and under control: selects the offer by segment, runs A/B tests, and optimizes on the fly. A human sets the rules and margin boundaries; the system runs the mechanics.",
    "whatImproves": "Personalization works across all customers, not only in selected campaigns; campaigns are launched and optimized quickly; marketing manages strategy, not mailing assembly.",
    "dataAiBehind": "Campaign engine on top of segmentation, promotion measurement, and data foundation. This is the top of the block, hence the dependency on all of the above. AI optimizes within human-defined rules and does not replace strategy decisions.",
    "conversationQuestions": [
      "How many personal campaigns can you realistically manage manually?",
      "What prevents launching targeted campaigns at scale while keeping control?",
      "Are segments, measurement, and data ready for such an engine?"
    ]
  },
  "d1-5-feedback-themes": {
    "businessPressure": "Feedback comes from everywhere: app reviews, station complaints, social media, call center, and fuel quality incidents. It is processed slowly as a stream of requests and rarely connected to those who can fix the cause. Recurring issues, such as slow service at a specific station, loyalty disputes, or terminal problems, persist because the pattern is not visible in the mass of messages.",
    "whatWePutInPlace": "We consolidate reviews and requests from different channels into one picture and automatically classify them by topic, sentiment, and likely cause. Recurring issues are routed to those who can fix them: station operations, support, loyalty, or supply. The view shows substance, not just message volume.",
    "whatImproves": "Real causes of dissatisfaction become visible, not just isolated complaints; recurring problems surface early; the team works on substance instead of clearing volume.",
    "dataAiBehind": "Text processing for feedback, including topics, sentiment, and routing, on existing feedback channels. Ready tool, quick to deploy.",
    "conversationQuestions": [
      "Are reviews from different channels consolidated or kept separately?",
      "Do you see a recurring problem at a specific station before it becomes a stream of complaints?",
      "Is feedback a signal for operations or only workload for support?"
    ]
  },
  "d1-5-station-problem-early": {
    "businessPressure": "One complaint may be noise; ten complaints about one station in a day are a signal that something broke: service, equipment, or quality. But while complaints are read one by one, the spike at a specific site is missed, and the problem hits station revenue before it is noticed.",
    "whatWePutInPlace": "We track the feedback stream by station and flag an abnormal spike in negativity immediately, linked to the site and likely cause. The problem is visible as an event, not as statistics accumulated by month-end.",
    "whatImproves": "A service or quality breakdown at a site is visible within a day, not a month; less revenue is lost while the issue is fixed; response is targeted to the specific station.",
    "dataAiBehind": "Anomaly detection in station-level feedback streams. Requires established feedback collection from the previous card as the foundation.",
    "conversationQuestions": [
      "Would you notice a spike in complaints about one station on the same day?",
      "Is feedback linked to a specific site?",
      "How much revenue does a station lose before the issue appears in a report?"
    ]
  },
  "d1-5-ai-support-line": {
    "businessPressure": "Most customer requests are standard: where the nearest station is, what happened to points, how the program works, or card status. They consume support time that could go to complex and conflict cases. During peaks and outside working hours, the customer waits for an answer that is not available.",
    "whatWePutInPlace": "We deploy first-line AI: it answers standard customer questions in chat and the app immediately and around the clock, and passes complex or emotional cases to a human with context. Support handles what requires a human, instead of repeating the same answers.",
    "whatImproves": "The customer gets an answer immediately and at any time; support is relieved of standard questions; complex requests reach a human with ready context.",
    "dataAiBehind": "Conversational AI on the company's knowledge base and policies, with rule-based handoff to a human. This is the top of D1.5, hence the dependency on the knowledge base. AI handles standard cases and escalates; it does not resolve conflicts on its own.",
    "conversationQuestions": [
      "What share of support requests are standard recurring questions?",
      "Does the customer get an answer outside working hours and during peaks?",
      "Does a complex request reach a human with context, or does it start from zero?"
    ]
  },
  "d1-7-partner-data-platform": {
    "businessPressure": "There is something suppliers and partners are ready to pay for: anonymized understanding of what is bought, where, and by whom. But this asset lies unused because there is no product, no safe way to share it, and no sales model.",
    "whatWePutInPlace": "We build a data product: anonymized analytics and controlled access for partners and suppliers in a protected environment, without exposing personal data. The company starts earning from knowledge, not only from fuel and products.",
    "whatImproves": "A new revenue stream outside sales; data turns from a cost into an asset; partners receive value without receiving personal data.",
    "dataAiBehind": "An analytics product and protected access environment on top of a mature data foundation. This is the top layer and depends on data and access management.",
    "conversationQuestions": [
      "Do you have data that suppliers and partners are willing to pay for?",
      "Can you share analytics without exposing personal data?",
      "Who internally owns data as a product?"
    ]
  },
  "d2-1-b2b-profitability": {
    "businessPressure": "B2B brings volume, and volume hides the truth: a large contract may be unprofitable after discounts, payment deferral, and service cost, but looks important because of liters. The corporate account manager sees turnover, not margin, and holds onto customers that quietly consume profit.",
    "whatWePutInPlace": "We calculate the real profitability of each corporate account: margin after discounts, deferrals, and terms. It becomes clear which B2B customers earn money and which live at the company's expense.",
    "whatImproves": "It is clear which contracts are profitable and which are unprofitable under the volume; candidates for term revision are visible; B2B decisions are made by margin, not liters.",
    "dataAiBehind": "Margin analysis of the portfolio using existing sales, discount, and terms data. On available data.",
    "conversationQuestions": [
      "Do you know the margin for each B2B account after all terms?",
      "Which large contracts are unprofitable beneath the volume?",
      "Do managers see account turnover or account profit?"
    ]
  },
  "d2-1-b2b-value-forecast": {
    "businessPressure": "Not every account profitable today deserves investment, and not every small account lacks prospects. Decisions about which accounts to develop and retain are made by current volume, not potential.",
    "whatWePutInPlace": "We assess the potential and direction of each corporate account: where there is growth, where services can be cross-sold such as wash, maintenance, or tires, and where the account is stagnating. Development is prioritized by potential, not today's volume.",
    "whatImproves": "Development goes to accounts with real potential; cross-sell opportunities are visible; corporate account managers' time is focused on promising customers.",
    "dataAiBehind": "ML model of account value and growth using account history, behavior, and terms. Requires consolidated account data.",
    "conversationQuestions": [
      "Do you develop accounts by volume or by potential?",
      "Where do current B2B customers have growth or cross-sell potential?",
      "Which accounts are stagnating despite investment?"
    ]
  },
  "d2-2-b2b-cooling-signal": {
    "businessPressure": "A corporate customer does not leave by announcement, but through decline: fewer card fuelings, less volume, quieter contact. By the time this surfaces at renewal, the customer is already halfway to a competitor, and negotiations start from a weak position.",
    "whatWePutInPlace": "We catch account cooling early: a drop in volume and frequency relative to its norm while the contract is still active and there is time to respond. The corporate account manager sees risk in advance, not one month before contract end.",
    "whatImproves": "A leaving B2B customer is visible in advance; renewal negotiations start from a stronger position; quiet losses of large accounts decrease.",
    "dataAiBehind": "Account activity decline indicator based on fleet card transactions. Separate from B2C because corporate customer economics are different.",
    "conversationQuestions": [
      "Do you see that a corporate customer has started fueling less before renewal?",
      "How early does the corporate account manager learn about account cooling?",
      "How many B2B customers leave \"unexpectedly\"?"
    ]
  },
  "d2-2-renewal-risk": {
    "businessPressure": "A volume decline means departure has already begun. To retain a corporate customer, non-renewal risk must be visible in advance through a combination of signals, not only a drop in liters right before contract end.",
    "whatWePutInPlace": "An ML non-renewal risk model based on account behavior: volume, frequency, payments, contact, and service use. At-risk accounts are visible in advance, and retention starts before negotiations, not during them.",
    "whatImproves": "Departure risk is visible before the renewal window; retention is targeted and timely; the share of renewed contracts increases.",
    "dataAiBehind": "ML churn model for corporate customers, separate from B2C because features and economics differ. Built on account history.",
    "conversationQuestions": [
      "Do you see non-renewal risk a quarter before contract end?",
      "What signals B2B customer departure besides volume decline?",
      "When does retention start: before negotiations or during them?"
    ]
  },
  "d2-3-risk-value-terms": {
    "businessPressure": "B2B discounts, limits, and deferrals are often given by inertia and negotiation pressure, not by the customer's real value and risk. As a result, strong customers receive too much, risky customers receive overly good terms, and portfolio margin is diluted.",
    "whatWePutInPlace": "We tie terms to the customer: discount and limit based on real value and risk, not habit or negotiation pressure. The manager receives a justified negotiation frame.",
    "whatImproves": "Terms reflect value and risk; portfolio margin is under control; negotiations rely on data, not customer pressure.",
    "dataAiBehind": "Scoring for differentiated terms based on portfolio data such as margin, history, and payments. Requires a consolidated account view.",
    "conversationQuestions": [
      "Do your B2B terms reflect customer value or the strength of the negotiator?",
      "Which customers receive better terms than justified?",
      "Does the manager have a justified frame for negotiation?"
    ]
  },
  "b1-1-delivery-status-view": {
    "businessPressure": "Inbound supply passes through third-party hands: supplier, carrier, railway, customs, and terminal acceptance. Each party has its own data, and it is reconciled through phone calls and emails. The network learns about a disruption after it has already happened and reacts in firefighting mode.",
    "whatWePutInPlace": "We consolidate inbound supply status into one view: from supplier confirmation to terminal acceptance, showing where the batch is, which stage it is at, and whether it will arrive on time. Logistics sees the full situation instead of collecting it by calling around.",
    "whatImproves": "Supply status is visible in one place; there is less manual calling; the issue is visible before it disrupts acceptance or station supply.",
    "dataAiBehind": "Consolidation of batch movement data from existing sources such as supplier, carrier, and acceptance into a single data view. On available data: Quick Win.",
    "conversationQuestions": [
      "Can you see the status of an inbound batch without calling the supplier and carrier?",
      "How quickly do you learn that a supply is delayed?",
      "Do logistics, the terminal, and finance work from the same picture, or does each have its own?"
    ]
  },
  "b1-1-delay-warning": {
    "businessPressure": "Seeing where the batch is now is only half the job. A supply disruption hits station replenishment and creates emergency top-up purchases; the later it is discovered, the more expensive the response. The network needs a warning, not just status after the fact, while there is still time to adjust.",
    "whatWePutInPlace": "We forecast arrival and flag delay risk in advance: where disruption is developing by carrier, route, or stage. Logistics receives a signal while it can still reallocate or cover the risk, not after the fact.",
    "whatImproves": "Disruption is visible in advance, not after the fact; there are fewer emergency purchases and station downtimes caused by late supply; teams get time to respond instead of firefighting.",
    "dataAiBehind": "Arrival forecasting and early risk detection using ML on supply history and movement data. Advanced: requires history and linked data.",
    "conversationQuestions": [
      "Do you learn about supply disruption risk before it happens?",
      "How many emergency top-up purchases are caused by delays noticed too late?",
      "Do you have a warning, or only the fact of disruption?"
    ]
  },
  "b1-2-acceptance-shortage": {
    "businessPressure": "Discrepancies arise between ordered, shipped, and accepted: volume shortages, missing documents, quality disputes, customs questions. If this surfaces only when finance catches a mismatch during invoice reconciliation, both time and negotiating position with the supplier are lost.",
    "whatWePutInPlace": "We reconcile ordered, shipped, and accepted quantities for each batch and flag discrepancies immediately: where there is shortage, document mismatch, or dispute. The discrepancy is visible at acceptance, not during invoice reconciliation weeks later.",
    "whatImproves": "Shortages and discrepancies are visible early; the position in supplier disputes is stronger; the document trail is cleaner; there are fewer surprises during reconciliation.",
    "dataAiBehind": "Matching order, shipment, and acceptance using existing documents and accounting data. Quick Win: no models required.",
    "conversationQuestions": [
      "Do you reconcile ordered / shipped / accepted for every batch?",
      "Are discrepancies visible at acceptance or only later during invoice reconciliation?",
      "Which acceptance issues repeat by supplier, route, or terminal?"
    ]
  },
  "b1-2-systemic-loss": {
    "businessPressure": "One discrepancy may be an error. Recurring discrepancies by a specific supplier, route, or stage are a system that costs money. But while discrepancies are reviewed one by one, the pattern is not visible, and regular leakage is treated as chance.",
    "whatWePutInPlace": "We analyze supply discrepancies in aggregate: where shortages repeat by supplier, route, terminal, or period. We separate one-off noise from systemic leakage and show where to investigate first.",
    "whatImproves": "Recurring leakage hidden in noise becomes visible; supplier claims are supported by a pattern, not a single case; investigation effort goes where the money is.",
    "dataAiBehind": "Pattern analysis of discrepancies using ML on supply history separates systemic issues from noise. Advanced: requires accumulated acceptance history.",
    "conversationQuestions": [
      "Do you see recurring shortages by a specific supplier or route?",
      "Can you distinguish a one-off discrepancy from systemic leakage?",
      "How much is lost on discrepancies that pass as random?"
    ]
  },
  "b1-3-demurrage-control": {
    "businessPressure": "Rail logistics involves an external operator, terminal unloading capacity, documents, and customs procedures. Each stage has its own delay risk, and railcars standing beyond the norm generate demurrage that can add up to a significant annual amount. The picture is fragmented: the operator has one data set, the terminal another, and finance sees the demurrage invoice weeks later, when the cause is already hard to reconstruct.",
    "whatWePutInPlace": "We bring railcar movement, terminal unloading windows, document status, and demurrage risk into one operational picture. We show which railcars are approaching the penalty threshold, where unloading bottlenecks repeat, and which terminals, routes, or shifts generate disproportionate cost. Logistics, the terminal, and finance act on demurrage risk before it becomes an invoice.",
    "whatImproves": "Less demurrage; faster railcar turnaround; better unloading discipline at terminals; finance sees the risk in advance, not the invoice after the fact.",
    "dataAiBehind": "Consolidation of railcar tracking, unloading schedules, document status, and demurrage history into one view; identification of at-risk railcars and recurring bottlenecks. Advanced: requires linked railway and terminal data.",
    "conversationQuestions": [
      "How much demurrage does the company pay per year, and does the operations team see it regularly?",
      "When demurrage is charged, is the cause investigated and removed, or is it simply paid?",
      "Do the terminal, logistics, and finance work from one railcar status picture?"
    ]
  },
  "b2-1-drain-fill-reconciliation": {
    "businessPressure": "During loading and unloading at the terminal, discrepancies arise: the act says one thing, the tank reading another. Temperature, density, measurement error, and incomplete unloading are all losses that are often written off as normal without checking whether they really are. Real losses hide inside allowed shrinkage.",
    "whatWePutInPlace": "We reconcile actual fuel movement during loading/unloading with loading/unloading acts and tank readings, and flag discrepancies immediately at the operation, not at the quarterly inventory count. It is clear where actuals do not match the act.",
    "whatImproves": "Discrepancies are visible at the moment of operation; fewer losses are written off as normal; fuel movement accounting at the terminal is cleaner.",
    "dataAiBehind": "Matching loading/unloading acts, tank readings, and operation data with temperature and density corrections. Scoped: requires integration of acceptance and tank data.",
    "conversationQuestions": [
      "Is the loading/unloading act reconciled with actual volume at the moment of operation?",
      "What share of loss is written off as normal without review?",
      "Do you see discrepancies before inventory count?"
    ]
  },
  "b2-1-normal-vs-loss": {
    "businessPressure": "Fuel losses are hard to control because part of the loss is normal, while part is theft, leakage, measurement error, short delivery, calibration issue, or process problem. Without tolerance discipline, teams either ignore real losses or investigate noise.",
    "whatWePutInPlace": "We compare expected and actual fuel movement at tank, terminal, and period level, separate normal tolerance from abnormal deviation, and prioritize investigations by materiality, recurrence, and risk. Where data allows, we connect the anomaly to a likely cause.",
    "whatImproves": "Real losses become visible earlier; there are fewer false investigations; tolerance discipline improves; protection against theft and fuel leakage strengthens.",
    "dataAiBehind": "Detection of abnormal deviations and clustering of patterns by terminal, tank, supplier, supply, and period. Advanced: requires history and temperature/density corrections.",
    "conversationQuestions": [
      "Are losses compared against explicit tolerance rules?",
      "Which terminals or tanks show recurring abnormal deviation?",
      "Can investigators distinguish theft risk from measurement or process error?"
    ]
  },
  "b2-2-quality-tank-control": {
    "businessPressure": "At the terminal, fuel is stored, mixed, and transferred between tanks. An error in tank allocation or a missed quality deviation reaches the station and the customer, leading to claims, reputation damage, and in the worst case withdrawal of fuel from sale. Control is often manual and reactive.",
    "whatWePutInPlace": "We bring quality control and tank condition into one view: where there is a quality deviation, where there is a risk of unacceptable mixing, and where capacity is idle or overfilled. The problem is visible at the terminal before it reaches stations.",
    "whatImproves": "Quality deviation is caught before it reaches the customer; capacity is used without idle time; the risk of withdrawing fuel from sale is lower.",
    "dataAiBehind": "Consolidation of tank, quality, and fuel movement data at the terminal. Scoped: requires integration of tank data.",
    "conversationQuestions": [
      "Do you see a quality deviation before the fuel is sent to stations?",
      "Is capacity sitting idle or being overfilled because allocation is manual?",
      "How is the risk of unacceptable mixing controlled?"
    ]
  },
  "b3-1-station-fuel-need-view": {
    "businessPressure": "A station running dry hits revenue, customer trust, B2B service, and the brand. Overfilling or poorly planned delivery creates acceptance problems. Many networks see the risk late because tank readings, sales pace, and delivery schedule are not brought together; the dispatcher reacts to a call saying \"we are running out\" instead of seeing the risk in advance.",
    "whatWePutInPlace": "We build a tank-level risk picture: current balance, safe limits, sales pace, and planned deliveries. We flag stations moving toward depletion or overfill. The dispatcher receives an exception list of who needs delivery first, not a static inventory report.",
    "whatImproves": "Fewer run-dry events and emergency deliveries; the dispatcher prioritizes by real risk; intervention happens early, before the risk turns into pump downtime.",
    "dataAiBehind": "Consolidation of tank readings, sales pace, delivery plans, and capacity limits; estimation of time to runout. On available data, if automatic tank gauges exist: Quick Win; if readings are manual, collection must be established first.",
    "conversationQuestions": [
      "Can you see which tanks will run dry before the next planned delivery?",
      "Is dispatching driven by real risk or by a list of planned requests?",
      "How often do stations require emergency delivery because the risk was noticed too late?"
    ]
  },
  "b3-1-auto-dispatch": {
    "businessPressure": "Even when depletion risk is visible, turning it into an executable delivery plan is difficult: the plan must account for tank capacity, delivery windows, tanker compartment sizes, vehicle and driver availability, terminal inventory, and route reality. A theoretically correct dispatch plan may be operationally impossible, and the dispatcher has to rework it manually.",
    "whatWePutInPlace": "We turn the demand forecast into executable dispatch recommendations: what to deliver, from where, in what volume, and when to each station, accounting for capacity limits, minimum batch, compartments, terminal availability, vehicles, and drivers. We start with decision support for the dispatcher, not full automation.",
    "whatImproves": "The dispatch plan is executable, not theoretical; there is less manual rework by the dispatcher; fewer emergency deliveries; better vehicle utilization; planning and logistics are aligned.",
    "dataAiBehind": "Dispatch optimization, meaning a planning algorithm, on top of the A1 demand forecast, inventory, and constraints. Major Program: system-level capability. Dependency on demand forecast.",
    "conversationQuestions": [
      "Does the dispatch plan reflect real delivery constraints?",
      "How often does the dispatcher rework the plan because it is not executable?",
      "Which constraints most often break the dispatch plan?"
    ]
  },
  "b3-1-dispatcher-agent": {
    "businessPressure": "Once an executable dispatch plan can be calculated, manual work remains: every day the dispatcher assembles the picture, calculates, documents, and adjusts. In a large network with dozens of terminals and hundreds of stations, this routine does not scale and depends on the experience of a specific dispatcher.",
    "whatWePutInPlace": "We connect risk, forecast, and dispatch calculation into a system that builds the delivery plan according to company rules, while a human reviews and approves it. The dispatcher sets priorities and controls the process; the system takes over the routine of building the plan.",
    "whatImproves": "The dispatcher manages priorities instead of building the plan manually; dispatch plans are prepared quickly and consistently; there is less dependence on one person's experience.",
    "dataAiBehind": "A managed loop connecting forecast, dispatch optimization, and rules. This is the top of the block, hence the dependency. AI executes human rules; it does not decide priorities on its own.",
    "conversationQuestions": [
      "How much dispatcher time goes into building the daily dispatch plan?",
      "What prevents automating plan creation while keeping approval with yourself?",
      "Are the forecast and data ready for automatic dispatch planning?"
    ]
  },
  "b3-2-fleet-status-view": {
    "businessPressure": "While a trip is in progress, the dispatcher often cannot see where the vehicle is or what the delivery status is; they learn on arrival or by phone. This is a blind spot: the plan cannot be adjusted, the station cannot be warned, and deviations cannot be caught in time.",
    "whatWePutInPlace": "We provide a real-time trip picture: where vehicles are, which delivery stage they are at, and whether there are deviations. The dispatcher sees execution instead of reconstructing it after the fact.",
    "whatImproves": "Trip execution is visible in real time; plans can be adjusted on the move; stations receive more accurate delivery warnings.",
    "dataAiBehind": "Consolidation of GPS/telematics data and delivery confirmations into a trip view. Scoped: requires telematics integration.",
    "conversationQuestions": [
      "Can you see where vehicles are now and what is in transit?",
      "Do you learn about trip deviations while they happen or after the fact?",
      "Can you warn a station about the exact delivery time?"
    ]
  },
  "b3-2-route-truck-driver": {
    "businessPressure": "Fuel delivery is constrained by tanker compartments, fuel grades, delivery windows, driver hours, road restrictions, station receiving capacity, and terminal availability. Manual planning works at small scale but becomes unstable as the network, distances, number of grades, and urgency grow, increasing empty mileage, downtime, and delivery cost.",
    "whatWePutInPlace": "We build route and trip planning that prioritizes stations by real risk and creates executable delivery sequences, accounting for compartments, grade compatibility, distance, windows, driver shifts, station access, terminal availability, and emergency priorities. We start with recommendations and dispatcher override rights before deeper automation.",
    "whatImproves": "Delivery becomes more reliable; planning effort falls; there are fewer emergency trips; vehicle utilization improves; empty mileage decreases.",
    "dataAiBehind": "Route optimization, meaning a routing algorithm, on top of demand, transport constraints, and geodata. Major Program: system-level capability, the core of a TMS.",
    "conversationQuestions": [
      "Are routes built by real station urgency or by a static schedule?",
      "Which constraints most often force manual trip rework?",
      "Can the dispatcher see why the recommended route is executable?"
    ]
  },
  "b3-3-trip-plan-fact": {
    "businessPressure": "Delivery cost quietly grows through low vehicle utilization, extra trips, empty mileage, downtime at the terminal and station, and driver shortages. The network sees total logistics cost, but not the operational causes behind it, and cannot manage what it cannot see by component.",
    "whatWePutInPlace": "We build a trip execution picture: plan versus actual, vehicle loading, empty mileage, waiting time, route cost, and delivery reliability. It becomes clear where cost is structural, where planning is weak, and where management decisions are needed.",
    "whatImproves": "Logistics cost is explainable by route, vehicle, terminal, and driver; chronically underloaded trips are visible; the balance between reliability and cost is transparent.",
    "dataAiBehind": "Consolidation of trip plans, delivery confirmations, timestamps, and vehicle data into an execution picture. On available data: Quick Win.",
    "conversationQuestions": [
      "Can logistics cost be explained by route, vehicle, and terminal?",
      "Which vehicles or routes are chronically underloaded?",
      "Are driver and vehicle constraints visible before the plan fails?"
    ]
  },
  "b3-3-driver-safety": {
    "businessPressure": "Tanker drivers carry high-risk cargo on public roads, and one serious accident means injuries, environmental impact, regulatory consequences, insurance costs, and years of reputational damage. Dangerous behavior, such as speeding, harsh braking, fatigue, and unauthorized stops, is the largest controllable risk factor. Tankers often already have telematics, but the data is used reactively after incidents, not as an early signal.",
    "whatWePutInPlace": "We turn existing telematics into a continuous picture of driver behavior: speeding, harsh braking and acceleration, route compliance, and hours behind the wheel. We score drivers and flag risky behavior for targeted training, not post-accident review.",
    "whatImproves": "Risk is visible in advance, not after an accident; accidents and their severity decrease; insurance costs are lower; there is an evidence base for working with drivers.",
    "dataAiBehind": "Works on telematics that is usually already installed in tankers. Where onboard cameras exist, AI detection of fatigue and distraction adds an early signal; this is more expensive and not available everywhere, so it is an option on top of baseline control.",
    "conversationQuestions": [
      "Is telematics used as an early risk signal or only to review incidents?",
      "Can you show from data which drivers operate safely and which behave riskily?",
      "Are driver behavior, training, and accident rates connected, or is this judged by eye?"
    ]
  },
  "b3-3-fuel-theft-in-transit": {
    "businessPressure": "A trip is also a direct leakage risk: unauthorized fuel draining, unofficial stops, route deviations, and manipulation of delivery volume. In the normal flow of trips this gets lost, and drained fuel is paid for as delivered.",
    "whatWePutInPlace": "We detect anomalies in trip execution: unauthorized drains and stops, route deviations, and volume discrepancies between loaded at terminal and accepted at station. Suspicious cases are flagged for review instead of surfacing as shortages.",
    "whatImproves": "Fuel diversion and manipulation are visible early; losses on the loaded-versus-delivered difference decrease; trip control is based on data, not trust.",
    "dataAiBehind": "Anomaly detection using ML on telematics, route data, and reconciliation of loaded and accepted volumes. Advanced: requires telematics and linkage to station acceptance.",
    "conversationQuestions": [
      "Do you catch unauthorized draining and route deviation while the trip is in progress?",
      "Does the volume loaded at the terminal match the volume accepted at the station for every trip?",
      "How much is lost in the difference between loaded and delivered volume?"
    ]
  },
  "c1-1-station-benchmark": {
    "businessPressure": "Stations differ by traffic, location, format, customer mix, and competition. Comparing them by raw volume or revenue rewards location and punishes execution, so management cannot see which station truly underperforms and which simply sits in a weak location. Without a fair comparison, attention goes to the largest stations rather than the most fixable ones, and underperformance drags on for months before it becomes visible.",
    "whatWePutInPlace": "We compare stations with comparable peers: similar traffic, format, location type, competitive density, and customer mix, using metrics that reflect operating quality: volume capture, margin realization, throughput, non-fuel attachment, and customer feedback. We flag stations lagging behind comparable peers and the likely causes: execution, staff, equipment, or flow.",
    "whatImproves": "Fair station comparison; an early and accurate signal of underperformance; regional managers focus where return is faster; the station conversation starts from a ready picture, not from zero.",
    "dataAiBehind": "Consolidation of sales, margin, traffic, location characteristics, and customer mix into one view; grouping stations into comparable clusters and normalizing structural differences. Works on existing data, but the data is often spread across several systems, so this is not the cheapest starting point.",
    "conversationQuestions": [
      "When you say a station is underperforming, is the comparison fair to its location and format?",
      "Do regional managers see stations lagging behind comparable stations, not behind the network average?",
      "When a station underperforms, is there an initial diagnostic picture or does the investigation start from zero?"
    ]
  },
  "c1-1-plan-control": {
    "businessPressure": "Station underperformance is often seen after the fact, in a report when the month is already lost. A station needs today's plan and a signal right now: are we on plan or behind, for fuel and for the store. Without operational control, reaction comes late, when there is nothing left to adjust.",
    "whatWePutInPlace": "We show plan execution for each station in the moment: where the station is on target and where it is behind, for fuel and non-fuel. We flag gaps immediately, while the shift and day can still be corrected, instead of stating the result at period-end.",
    "whatImproves": "The gap is visible during the day, not in a report; the shift and region respond while there is still something to correct; the plan becomes a working tool, not a post-mortem.",
    "dataAiBehind": "Consolidation of station plan and actuals into an operational view using real-time sales data. On available data: Quick Win.",
    "conversationQuestions": [
      "Do you see a station falling behind plan during the day or only in the month-end report?",
      "Can the shift respond before the day is closed?",
      "Is the plan real-time control or a number for after-the-fact review?"
    ]
  },
  "c1-1-cause-analysis": {
    "businessPressure": "Seeing that a station is behind is only half the job. The second half is why. The cause may be traffic, price, service, assortment, equipment, or staff, and manually analyzing every lagging station takes too long. Without this, station decisions are based on guesses.",
    "whatWePutInPlace": "We analyze the cause of a specific station's underperformance: connect its metrics with traffic, price, execution, assortment, and equipment, and highlight the likely driver. The regional manager gets not \"the station is bad\", but \"this is what is pulling it down and where to start\".",
    "whatImproves": "The cause of underperformance is visible, not only the fact; actions are targeted instead of \"improve everything\"; the path from problem to action is faster.",
    "dataAiBehind": "ML analysis of underperformance drivers on top of station comparison and site data. Advanced: requires consolidated data and history. This is a demanding card: automatic cause explanation is ambitious, so the start is highlighting likely drivers, not issuing a final verdict.",
    "conversationQuestions": [
      "When a station underperforms, do you see the likely cause or search manually?",
      "Are decisions for a lagging station based on data or on the regional manager's intuition?",
      "How much time passes from \"the station dropped\" to \"we know what to fix\"?"
    ]
  },
  "c1-1-station-analysis-agent": {
    "businessPressure": "When station comparison, cause analysis, and operational plan control all exist, a person still ties them together: looks at dashboards, compares, formulates hypotheses, and decides where to go. In a network of hundreds of stations, this becomes a bottleneck; large stations get analyzed, while the rest wait.",
    "whatWePutInPlace": "We connect comparison, cause analysis, and operational control into an analyst that works continuously: analyzes stations, finds underperformance, forms hypotheses about causes, and highlights for the regional manager where to look and what to check first. A human decides and acts; the agent performs the routine consolidation and analysis previously done manually.",
    "whatImproves": "All stations are analyzed, not only the large ones; hypotheses are ready by morning instead of being assembled manually; the manager works on decisions and stations, not on consolidating numbers.",
    "dataAiBehind": "A connection of benchmarking, driver analysis, and operational data into an analytical loop. This is the top of the block, hence the dependency. The agent analyzes and recommends; the decision and action remain with the human.",
    "conversationQuestions": [
      "How many stations can a regional manager realistically analyze manually?",
      "What prevents the analysis and hypotheses from being prepared automatically, while the human only decides?",
      "Are the data and analytics ready for automatic station analysis?"
    ]
  },
  "c1-2-lost-traffic": {
    "businessPressure": "A station loses part of its revenue invisibly: a customer sees the queue and drives past, or enters but leaves without fueling. This is not in the report, which shows only what was sold, not what was missed. The network does not know the cost of its own queues.",
    "whatWePutInPlace": "We calculate lost traffic: how many customers turn away because of a queue, how many entered but did not fuel, at which hours and stations. Lost revenue becomes a number, not a feeling.",
    "whatImproves": "The cost of queues and lost traffic is visible; it is clear at which stations and hours losses occur; there is a basis for decisions on throughput and staffing.",
    "dataAiBehind": "Analysis of entrance traffic and behavior using video stream and station data against actual fueling. Scoped: requires traffic data, not only sales data.",
    "conversationQuestions": [
      "Do you know how many customers leave because of a queue?",
      "How many visitors enter but do not fuel, and why?",
      "At which hours and stations is the most traffic lost?"
    ]
  },
  "c1-2-queue-peak": {
    "businessPressure": "A queue is not a constant station problem, but a set of peaks: an hour, a day, an event. If peaks are detected after the fact through revenue, the reaction is late. The network needs to see when a station is about to overload, so staff can be reinforced or flow redirected in advance.",
    "whatWePutInPlace": "We flag when and where queues form based on traffic and time patterns, so the shift can be reinforced, dispensers adjusted, or flow redistributed in advance. The peak is visible as a forecast, not as a lost hour.",
    "whatImproves": "Queues are reduced before the customer leaves; staff is placed at peak times instead of spread evenly; throughput is higher during demand hours.",
    "dataAiBehind": "ML analysis of station traffic and time patterns to forecast peaks. Advanced: requires traffic history and flow data.",
    "conversationQuestions": [
      "Do you know in advance when a station will be overwhelmed by a queue?",
      "Is staffing aligned to demand peaks or spread evenly?",
      "How much revenue is lost during predictable peak hours?"
    ]
  },
  "c1-3-fuel-cash-losses": {
    "businessPressure": "Money is lost at fuel dispensing and POS: virtual fuelings, underdelivery, manual corrections and receipt cancellations, and operator collusion with a \"customer\". In the mass of normal transactions this is not visible, and losses are written off as error or surface during inventory.",
    "whatWePutInPlace": "We catch anomalies at dispensing and POS: suspicious corrections and cancellations, differences between dispensed and paid volumes, and patterns resembling collusion. Where cameras exist, we link the signal to video. Suspicious activity is flagged for review instead of being lost in the flow.",
    "whatImproves": "Losses at dispensers and POS are visible instead of being written off as error; collusion and underdelivery are caught; control is based on data, not trust in the shift.",
    "dataAiBehind": "Anomaly detection using ML in dispenser and POS transactions, with video linkage through computer vision where available. Scoped: requires integration of dispenser and POS data.",
    "conversationQuestions": [
      "Do you see abnormal receipt corrections and cancellations?",
      "Does dispensed fuel match paid fuel for every shift?",
      "How much is lost at dispensers that is currently written off as measurement error?"
    ]
  },
  "c1-4-shift-control": {
    "businessPressure": "Station problems often remain local until they reach a customer, regulator, or senior manager. Field teams collect observations, photos, and checklists, but follow-up actions settle in messengers and spreadsheets. Standards differ by region, and recurring network problems are not visible.",
    "whatWePutInPlace": "We build a control layer for execution and open issues at stations: standardize checks, capture evidence, route the issue to the responsible person, track overdue actions, and show patterns by station, region, and issue type. The focus is correction, not inspection paperwork.",
    "whatImproves": "Station execution is under control; issues are closed with an accountable owner; escalation is cleaner; customer-visible problems are fixed faster; recurring weak spots in the network become visible.",
    "dataAiBehind": "Consolidation of checklists, field visits, photos, service requests, and responsible roles into a workflow. Where useful, photos and notes are classified. Scoped: requires established field data collection.",
    "conversationQuestions": [
      "Are station issues driven to closure with an assigned owner?",
      "Which issue types repeat by region and format?",
      "How much station control lives outside a managed process, in messengers and spreadsheets?"
    ]
  },
  "c1-4-camera-standard-violation": {
    "businessPressure": "Standards compliance is checked by walkthrough: a regional manager comes and looks. This is infrequent, selective, and does not scale. Between visits, the station operates as usual, and violations of layout, uniform, cleanliness, and safety are visible only when someone arrives.",
    "whatWePutInPlace": "We automatically monitor standards compliance through video streams where cameras exist: layout, staff uniform, cleanliness, and basic safety requirements. A violation is flagged without an inspector visit, so walkthroughs go where they are actually needed.",
    "whatImproves": "Standards are under control between visits, not only during them; walkthroughs are targeted; fewer customer-visible violations occur.",
    "dataAiBehind": "Computer vision on video streams to recognize standards violations. Major Program: requires cameras and video processing. CV is a shared engine with C1.3, but the task is different: standards versus money.",
    "conversationQuestions": [
      "Are standards checked only during walkthroughs or continuously?",
      "How long does the station operate without control between visits?",
      "Which violations are visible to the customer before the inspector sees them?"
    ]
  },
  "c1-5-maintenance-priority": {
    "businessPressure": "Equipment failure means lost sales, dissatisfied customers, service downtime, and safety risk. Maintenance is managed through spreadsheet schedules, while management does not see the business picture: which equipment hurts revenue and service most if it stops.",
    "whatWePutInPlace": "We consolidate maintenance of critical station equipment into one view: what has been serviced, what is coming due, what is overdue, and where parts are needed, prioritized by impact on revenue and service. It becomes clear what to fix first.",
    "whatImproves": "Deadlines are not lost; maintenance is prioritized by business impact, not request age; downtime that hits revenue decreases.",
    "dataAiBehind": "Consolidation of maintenance requests, failure history, equipment status, and sales impact into one view. On available data: Quick Win.",
    "conversationQuestions": [
      "Can you see critical equipment maintenance status in one place?",
      "Is maintenance priority based on business impact or request age?",
      "Which equipment most often hits revenue when it fails?"
    ]
  },
  "c1-5-predictive-maintenance": {
    "businessPressure": "Equipment is repaired after it has already stopped, and it tends to stop at peak time, causing direct sales loss and customer dissatisfaction. Many failures give early signals, but those signals are not used.",
    "whatWePutInPlace": "We catch early signs of wear from equipment data and failure history to prevent downtime before a dispenser, refrigerator, or coffee machine stops. Maintenance is based on condition, not only on schedule and not after failure.",
    "whatImproves": "Less downtime during peak hours; lower sales losses from failed equipment; repairs are planned, not emergency.",
    "dataAiBehind": "Predictive maintenance using ML on equipment data and failure history. Advanced: requires condition data and history.",
    "conversationQuestions": [
      "Do you learn about wear before equipment fails?",
      "How many sales are lost when a dispenser goes down during peak hours?",
      "Is maintenance based on condition or on failure after the fact?"
    ]
  },
  "c2-1-fuel-to-store-conversion": {
    "businessPressure": "Fuel traffic does not become store sales by itself. A customer pays at the pump and leaves, enters but buys only cigarettes or water, or walks past margin categories. The network sees many cars and an empty store, but does not know what share of fueling customers even comes inside or where the transition is lost.",
    "whatWePutInPlace": "We calculate fueling-to-store conversion by station, time, and segment: what share of fueling customers enters the store, where the transition fails, and at which hours and sites. The view is not just total store revenue; it shows the lost transition from the pump.",
    "whatImproves": "It is visible where fuel traffic does not reach the store; it is clear which stations lose the transition; there is a basis for decisions on merchandising, offers, and store operations.",
    "dataAiBehind": "Linking fuel transactions, store receipts, and loyalty IDs where available by station and time. Works on existing data that usually sits nearby.",
    "conversationQuestions": [
      "What share of fueling customers enters the store by station and time?",
      "At which stations is there traffic but the store is empty?",
      "Where is the transition from pump to store lost, and why?"
    ]
  },
  "c2-1-nonfuel-moment-offer": {
    "businessPressure": "Even when the customer enters the store, the ticket often stops at one item. The network knows what is bought together and what sells at which time, but does not use this to offer the right item at the right moment; merchandising, prompts, and app offers live separately from real behavior.",
    "whatWePutInPlace": "We determine what to offer a fueling customer so they enter and add to the purchase: reason, moment, and relevant category based on behavior, time, and basket composition. We connect fuel, store, and cafe into one offer.",
    "whatImproves": "Higher non-fuel ticket and store conversion; the offer is relevant, not blanket; fuel traffic converts into margin-rich non-fuel revenue.",
    "dataAiBehind": "Recommendation model using ML on behavior, basket, and customer segment. Advanced: requires consolidated data. Overlaps with D1.3, personal offer; here the focus is the pump-to-store transition, using the same recommendation engine.",
    "conversationQuestions": [
      "Do you give fueling customers a reason to enter and add a store purchase?",
      "Are merchandising and prompts based on real behavior or on habit?",
      "How many tickets stop at one item although they could have grown?"
    ]
  },
  "c2-2-local-assortment-sales": {
    "businessPressure": "A station store assortment is limited by space, traffic mission, delivery frequency, staff, shelf life, and local demand. A broad assortment or one copied from all stations freezes cash, creates write-offs, and misses products that fit this specific site.",
    "whatWePutInPlace": "We analyze assortment sales by station profile and category: where there are gaps, dead stock, local hits, margin opportunities, and operational constraints. We recommend assortment changes that match the station role and delivery reality.",
    "whatImproves": "Categories perform better; dead stock decreases; gross margin improves; the assortment becomes relevant to local demand.",
    "dataAiBehind": "Comparison of sales, margin, stock, and write-offs across similar stations. On available POS data: Quick Win.",
    "conversationQuestions": [
      "Is the assortment tailored to the station profile or one-size-fits-all?",
      "Which products take space without enough margin and turnover?",
      "Where is local demand not reflected in the current assortment?"
    ]
  },
  "c2-2-product-demand-forecast": {
    "businessPressure": "Fresh goods, coffee, and baked goods have demand that changes by hour, day, and station. Delivering by template means either empty shelves at peak or write-offs at the end of the day. Without a product-and-time forecast, the store balances between shortages and losses.",
    "whatWePutInPlace": "We forecast demand by product and time at each station, including fresh items, coffee, and baked goods by hour, so deliveries match real demand rather than a template. Ordering is based on forecast, not habit.",
    "whatImproves": "Fewer empty shelves at peak and fewer write-offs at day-end; more accurate ordering of fresh goods and baked items; higher margin on perishables.",
    "dataAiBehind": "ML demand forecast by product, station, and time using sales history. Advanced: requires history and consolidated data.",
    "conversationQuestions": [
      "Is ordering of fresh goods and baked items based on an hourly forecast or a template?",
      "How much is lost to empty shelves at peak and write-offs at day-end?",
      "Does ordering account for demand differences between stations and time periods?"
    ]
  },
  "c2-3-stock-waste-oos": {
    "businessPressure": "Store stock follows different rules than fuel. A product missing from the shelf loses impulse sales, excess stock freezes cash, weak expiry control creates write-offs, and theft hides in small receipts and turnover. Many networks under-control the store because all attention is on fuel.",
    "whatWePutInPlace": "We build store stock, write-off, and loss control: availability, excess stock, expiry risk, negative stock, unexplained shortage, and category losses. The focus is on the few categories and stations where the amount is material.",
    "whatImproves": "Lower write-offs and losses; better product availability; less frozen cash; clearer station accountability for the store; higher non-fuel margin.",
    "dataAiBehind": "Consolidation of POS, inventory, acceptance, write-offs, and inventory counts by station profile. On available data: Quick Win.",
    "conversationQuestions": [
      "Which store categories lose the most through write-offs and shortages?",
      "Are empty shelves visible before the customer sees them?",
      "Which stations need different stock control rules?"
    ]
  },
  "c2-3-markdown-reorder": {
    "businessPressure": "Perishables lose from both ends: mark down too late and the product is written off; too early and margin is lost. Order too little and the shelf is empty; too much and product spoils. Manual control cannot keep up with expiry timing for every product at every station.",
    "whatWePutInPlace": "We suggest the markdown moment and reorder point for perishables by product and station: when to reduce price to sell before expiry, and when to reorder to avoid an empty shelf. The balance between write-off and shortage is data-driven.",
    "whatImproves": "Fewer write-offs and fewer empty shelves at the same time; higher margin on perishables; less manual expiry control.",
    "dataAiBehind": "Markdown and reorder logic based on shelf life, sales, and inventory. Advanced: requires history and expiry data.",
    "conversationQuestions": [
      "Are perishables marked down on time or only after expiry?",
      "How much is lost to write-offs and how much to empty shelves?",
      "Is this managed by data or manually product by product?"
    ]
  },
  "c2-4-retail-media": {
    "businessPressure": "A large flow of buyers passes through stations, and the network knows what is bought and by whom. Supplier brands pay for access to that audience, but there is no product or mechanism to sell it. The traffic and data asset lies unused.",
    "whatWePutInPlace": "We build a retail media product: targeted placements and offers sold to brands at the station, in the store, and in the app, based on traffic and anonymized customer behavior. The network earns from its traffic and data, not only from selling products.",
    "whatImproves": "A new revenue stream beyond fuel and product sales; traffic and data become an asset; brands get a targeted audience.",
    "dataAiBehind": "Advertising mechanics on segments and station traffic, built on loyalty and store data. This is the top layer, hence Frontier and the highest cost. Shared capability with D1.7: the home is here, physical traffic; input from D is customer data.",
    "conversationQuestions": [
      "Do you have traffic and data that brands are ready to pay for?",
      "Can you sell targeted placement without exposing personal data?",
      "Who inside the company would own retail media as a product?"
    ]
  },
  "e1-live-finance-picture": {
    "businessPressure": "The executive's financial picture is usually assembled manually and arrives late: answering a question like \"what is happening with margin in the region\" requires an export and a day of analyst work. ERP stores the figures but does not provide a live view in the cut needed for a decision now.",
    "whatWePutInPlace": "We consolidate network finance into a live view: margin and cash by station, region, product, and period, updated instead of a report for yesterday. The executive sees the state immediately, in the needed cut, without exports or waiting for an analyst.",
    "whatImproves": "The financial picture is available immediately, not by morning; decisions rely on fresh figures; dependence on manual exports decreases.",
    "dataAiBehind": "Consolidation of financial data from ERP and operational systems into a live data view on top of the unified foundation (G1). Works on existing data, but it is often spread across several systems, so this is not the cheapest start. This is not \"another dashboard\", but a live decision view; its full power appears with the next card, asking in plain language.",
    "conversationQuestions": [
      "How long does it take to get margin in the required cut?",
      "Is the financial picture live, or is it a report for yesterday?",
      "How many decisions wait for an analyst's export?"
    ]
  },
  "e2-plan-deviation": {
    "businessPressure": "A plan deviation, such as margin decline or cost growth, surfaces during manual plan-versus-actual reconciliation done once per period. By the time the deviation is noticed, the cause is old and response is late.",
    "whatWePutInPlace": "We flag deviations from plan immediately: where margin, revenue, or costs moved away from expectation by station, region, or line item. The deviation appears as a signal, not as a line in the monthly plan-versus-actual.",
    "whatImproves": "The deviation is visible early, not at period-end; manual reconciliation decreases; attention goes where figures diverged from plan.",
    "dataAiBehind": "Automatic comparison of actuals with plan using financial data. On available data: Quick Win.",
    "conversationQuestions": [
      "When do you learn about a plan deviation: immediately or during reconciliation at period-end?",
      "How much time goes into manual plan-versus-actual reconciliation?",
      "Is the deviation visible by station and line item, or only in the total?"
    ]
  },
  "e2-deviation-drivers": {
    "businessPressure": "Seeing that margin fell is not enough. The company needs to understand why: price, volume, cost, mix, discounts, costs, and which of these can actually be influenced. Breaking this down manually takes too long, and the executive gets \"here are the numbers\", not \"here is the cause and what to do\".",
    "whatWePutInPlace": "We break the deviation into drivers: what exactly moved margin or costs, and highlight what can be influenced. The executive receives not a table, but the cause and the point of action.",
    "whatImproves": "The cause of the deviation is visible, not only the fact; decisions are targeted; the path from \"it dropped\" to \"we know what to do\" is faster.",
    "dataAiBehind": "Driver decomposition of deviations, such as price / volume / cost / mix / expenses, using analytics and ML where applicable on financial and operational data. Advanced: requires consolidated data.",
    "conversationQuestions": [
      "When margin falls, do you see the cause or only the fact?",
      "How long does it take to break a deviation into drivers?",
      "Does the executive receive \"here are the numbers\" or \"here is the cause and what to do\"?"
    ]
  },
  "e3-cash-position": {
    "businessPressure": "Fuel retail is a cash-intensive business: procurement obligations, fuel inventory, payables, B2B receivables, card settlement timing, station cash, and operating expenses move quickly. Treasury often sees the consolidated picture only after decisions have already created cash pressure.",
    "whatWePutInPlace": "We consolidate the full cash picture: inventory value, procurement obligations, payables, customer and fleet receivables, card settlements, station cash, and operating obligations. It becomes visible where money is frozen and where pressure is building.",
    "whatImproves": "It is visible where money sits now; frozen capital is seen earlier; procurement and settlement decisions account for cash.",
    "dataAiBehind": "Consolidation of inventory, obligations, receivables, and cash data into a cash picture. On available data: Quick Win.",
    "conversationQuestions": [
      "Can you see where money is currently frozen in one picture?",
      "Does treasury learn about cash pressure before or after the decision?",
      "How much capital is frozen in inventory and receivables right now?"
    ]
  },
  "e3-cash-gap-forecast": {
    "businessPressure": "A cash gap in a cash-intensive business hits suddenly: procurement obligation, receivables delay, and settlement timing coincide, and cash is short. ERP shows this after the fact; it does not forecast the gap.",
    "whatWePutInPlace": "We forecast cash movement and flag gaps in advance: where and when cash will be short considering procurement, inventory, receivables, and settlements. Treasury sees the risk while there is still time to adjust: hold procurement, work receivables, or reallocate.",
    "whatImproves": "The gap is visible in advance, not after the fact; there is time to respond instead of rushing; procurement and settlement decisions account for future cash.",
    "dataAiBehind": "ML cashflow forecast using obligations, inventory, receivables, and history. Advanced: the kind of forecasting ERP does not do by definition; requires linked data.",
    "conversationQuestions": [
      "Do you see a cash gap in advance or learn after the fact?",
      "Do procurement decisions account for future cash?",
      "How many times per year does cash come under pressure unexpectedly?"
    ]
  },
  "e3-payment-risk": {
    "businessPressure": "B2B and fleet bring volume, but create credit risk, deferred cash, and overdue receivables. Sales looks at volume, finance sees overdue receivables too late, and credit limits are often not linked to current customer behavior and risk.",
    "whatWePutInPlace": "We build a credit risk and receivables picture: exposure, overdue amounts, payment behavior, terms, and limit utilization. We flag accounts where cash is at risk and prioritize debt work by risk and payment probability, not by overdue list. Actions are routed to account owners.",
    "whatImproves": "Overdue receivables decrease; debt work is risk-based, not list-based; response to deteriorating payment behavior comes earlier; credit limits are linked to current risk.",
    "dataAiBehind": "ML payment risk scoring using receivables, payments, terms, and behavior data. Advanced: predictive logic on top of data. This is the home of the cross-cutting capability; input from D2.3 is the B2B manager view of credit for a specific account.",
    "conversationQuestions": [
      "Do you know which accounts put cash at real risk before they become overdue?",
      "Are credit limits linked to current customer behavior?",
      "Who acts when an important account becomes overdue?"
    ]
  },
  "e5-duplicate-fake-payments": {
    "businessPressure": "Losses hide in the flow of payments and invoices: duplicate invoices, fictitious counterparties, payments that should not exist, and policy deviations. ERP records them but does not search for them, and they surface during audit after the money has already left.",
    "whatWePutInPlace": "We catch anomalies in financial operations: duplicate invoices, fictitious or suspicious counterparties, and payments outside the pattern. Suspicious items are flagged before or immediately after the operation, not during the annual audit.",
    "whatImproves": "Duplicate and fictitious payments are visible early; fewer losses go unnoticed; the counterparty base is cleaner.",
    "dataAiBehind": "Anomaly detection using ML in payments and invoices on accounting data. On available data: Quick Win. ERP stores but does not search; this is our territory.",
    "conversationQuestions": [
      "Do you see duplicate invoices and fictitious counterparties before audit?",
      "How many unnecessary payments go unnoticed?",
      "Are payments checked for anomalies or only processed?"
    ]
  },
  "e5-policy-before-payment": {
    "businessPressure": "Many losses are not explicit fraud, but quiet deviation from internal rules: procurement outside policy, discount above limit, posting outside procedure. Catching this after payment means the money can no longer be recovered.",
    "whatWePutInPlace": "We flag policy deviations at the moment of posting or procurement, before the money leaves: violations of limits, terms, and procedures. Control works before payment, not during after-the-fact review.",
    "whatImproves": "Policy violations are caught before payment; fewer losses become unrecoverable; rule discipline improves.",
    "dataAiBehind": "Checking operations against policies using accounting data and rules. Advanced: requires policy formalization and linkage to the operations flow.",
    "conversationQuestions": [
      "Do you catch policy violations before payment or after?",
      "How many procurements and postings happen outside procedure?",
      "Is policy control preventive or post-mortem?"
    ]
  },
  "e-frontier-finops-agent": {
    "businessPressure": "Even when the network has a live picture, deviation control, and cash forecast, a person still ties it together: the CFO and analysts look at dashboards, compare, and search for leakage and risk. One person cannot cover the depth of links between procurement, logistics, price, receivables, and costs, so some opportunities and risks remain unnoticed.",
    "whatWePutInPlace": "We put in place an analyst that works continuously and sees the whole business in numbers: analyzes connected processes, finds leakage and overpayment points, suggests where and how to reduce costs, and highlights emerging risks and anomalies before a human notices them. This is a very strong financial-operational analyst that does not sleep and keeps the whole network economics in view. It analyzes and recommends; the decision and action remain with the CFO.",
    "whatImproves": "Cost reduction points and risks that people miss become visible; analysis runs continuously, not only for a report; the CFO receives ready findings and recommendations instead of consolidating numbers manually.",
    "dataAiBehind": "Analytical agent on top of the live picture, deviation control, cash forecast, and unified data foundation. This is the top of the block, hence the dependency on all of the above. Important: the agent analyzes and recommends; it does not manage cash or execute operations. The decision remains with the human.",
    "conversationQuestions": [
      "How many links between procurement, price, logistics, and costs does your analysis actually cover?",
      "Which cost reduction points and risks surface too late?",
      "What if your strongest analyst worked on your numbers continuously and surfaced findings automatically?"
    ]
  },
  "f1-1-hr-operations-assistant": {
    "businessPressure": "In a station network, HR constantly answers the same questions: schedules, vacations, sick leave, paperwork, policies, training, and onboarding. With a large field workforce, this becomes constant manual support instead of work on staff quality.",
    "whatWePutInPlace": "We deploy an HR assistant on approved policies, procedures, templates, and the knowledge base. It answers standard employee questions, finds required documents, suggests the process, prepares application templates, and passes complex cases to HR.",
    "whatImproves": "HR spends less time on routine; employees receive answers faster; communication becomes consistent; there are fewer errors in standard procedures.",
    "dataAiBehind": "HR policies, document templates, knowledge base, org structure, schedules, personnel policies, and integration with HR/task systems where available.",
    "conversationQuestions": [
      "How much time does HR spend on repeated questions that could be answered automatically?",
      "Which HR documents and templates do employees look for through people rather than through a system?",
      "Is there a single source of approved HR answers, or does everyone answer from memory?"
    ]
  },
  "f1-2-linear-staff-screening": {
    "businessPressure": "Station operators, cashiers, sellers, drivers, and line staff are often hired under turnover pressure. HR manually processes a stream of resumes and questionnaires, good candidates are lost, and vacancy closure drags out.",
    "whatWePutInPlace": "We automate initial application review: extract experience, availability, location, shift requirements, basic risks, and fit to the role. HR receives a candidate short-list and ranking reasons.",
    "whatImproves": "Line vacancies close faster; HR works with relevant candidates; losses from slow screening decrease.",
    "dataAiBehind": "Resumes, questionnaires, vacancy requirements, hiring history, rejection reasons, and data by location and shift.",
    "conversationQuestions": [
      "Can you see which stations and roles systematically slow down network operations because of hiring?",
      "How much time passes from application to first contact with the candidate?",
      "Do you lose candidates because of slow manual screening?"
    ]
  },
  "f1-3-field-staff-digital-loop": {
    "businessPressure": "A field employee's workday often exists in someone's head, in chats, or on paper. The manager sees the result late: checklist not completed, photo not sent, standard violated, task forgotten, station issue discovered only after inspection.",
    "whatWePutInPlace": "We digitize the workday: shift tasks, checklists, rounds, photo confirmations, reminders, incidents, training, and tasks, all in a mobile loop. The manager sees execution by station, region, employee, and process type.",
    "whatImproves": "More control in field operations; fewer blind spots; faster correction of violations; clearer discipline in following standards.",
    "dataAiBehind": "Mobile checklists, task management, photo reports, schedules, SOPs, roles, site geography, execution history, and network dashboards.",
    "conversationQuestions": [
      "Can you see today which required actions at stations were actually completed and which were only supposed to be completed?",
      "Which standards are controlled only by a manager or auditor visit?",
      "How many violations become visible only after inspection, not at the moment of execution?"
    ]
  },
  "f1-4-turnover-early-signals": {
    "businessPressure": "Turnover and weak onboarding become visible late: the employee has already left, the station is understaffed again, and the manager is firefighting an operating problem.",
    "whatWePutInPlace": "We collect signals by employee and station: absences, frequent shift replacements, incomplete tasks, training results, complaints, standards violations, and onboarding speed. The model shows where departure or onboarding failure risk is growing.",
    "whatImproves": "Intervention can happen earlier; turnover can decrease; onboarding can improve; problem stations and managers become visible.",
    "dataAiBehind": "HRIS, schedules, task manager, training, checklists, incidents, shift results, and data by managers and stations.",
    "conversationQuestions": [
      "Do you know in advance where an employee is dropping out of the process before they resign?",
      "At which stations does onboarding consistently fail?",
      "Can you see the link between manager, shifts, violations, and turnover?"
    ]
  },
  "f2-1-legal-assistant": {
    "businessPressure": "Lawyers and business teams spend time searching for terms in contracts, policies, templates, and past decisions. Answers depend on who remembers the document and where it is stored.",
    "whatWePutInPlace": "We deploy an assistant that searches contracts, policies, templates, letters, and internal opinions, answers with a source reference, and helps quickly find the required term or wording.",
    "whatImproves": "Faster answers to the business; less manual search; less dependence on individual employees' memory.",
    "dataAiBehind": "Contracts, addenda, templates, policies, claims, letters, and legal knowledge base.",
    "conversationQuestions": [
      "How much time goes into finding an existing legal answer?",
      "Where are contracts, templates, and past decisions stored today?",
      "Can the business get a verified answer without manual lawyer search?"
    ]
  },
  "f2-2-legal-doc-draft": {
    "businessPressure": "Much legal work repeats: letters, claims, responses to counterparties, addenda, internal opinions. The lawyer spends time on the first draft although the logic and templates already exist.",
    "whatWePutInPlace": "We generate drafts from approved templates and case context. The lawyer reviews, edits, and approves, but does not start from a blank page.",
    "whatImproves": "Documents are prepared faster; mechanical work decreases; wording is more consistent.",
    "dataAiBehind": "Document templates, history of similar cases, contracts, correspondence, and legal policies.",
    "conversationQuestions": [
      "How many standard documents does a lawyer prepare from scratch?",
      "Does the structure of contracts, letters, and claims repeat from case to case?",
      "How much time goes into a draft that could prepare itself?"
    ]
  },
  "f2-3-contract-obligations-control": {
    "businessPressure": "Deadlines, penalties, renewals, and supplier and contractor terms are often hidden in contracts. Risks surface late: a deadline is missed, an obligation is not fulfilled, a claim is not prepared.",
    "whatWePutInPlace": "We extract key obligations from contracts and manage them as a controlled loop: deadlines, owners, terms, risks, control events, and reminders.",
    "whatImproves": "Fewer missed deadlines; faster response to violations; clearer legal risk by supplier and contractor.",
    "dataAiBehind": "Contracts, addenda, obligation calendar, counterparty registry, correspondence, and task manager.",
    "conversationQuestions": [
      "Can you see in advance which contractual obligations may become a problem in the next 30-60 days?",
      "Which deadlines and terms are currently controlled manually?",
      "For which suppliers and contractors do risks repeat but remain invisible systemically?"
    ]
  },
  "f2-4-legal-process-agent": {
    "businessPressure": "In a mature company, legal work splits into many parallel tasks: documents, deadlines, approvals, claims, checks, and business requests. Even with assistants, a management loop is needed.",
    "whatWePutInPlace": "The agent runs legal processes under lawyer control: assembles document packages, checks deadlines, suggests the next step, prepares drafts, reminds owners, and escalates risk.",
    "whatImproves": "The legal function becomes more manageable; the risk of forgotten actions decreases; lawyers spend less time on coordination.",
    "dataAiBehind": "Legal knowledge base, contract registry, task manager, email, document templates, and escalation rules.",
    "conversationQuestions": [
      "Which legal processes today rely not on a system but on the personal discipline of individual employees?",
      "Where do lawyers spend time not on judgment, but on coordination?",
      "Which deadlines cannot be allowed to slip?"
    ]
  },
  "f3-1-mto-visibility": {
    "businessPressure": "Spare parts, equipment, repairs, consumables, and contractor services are often purchased in small streams. Overpayment and inefficiency are not visible at CEO level because each purchase looks insignificant.",
    "whatWePutInPlace": "We build a single picture by category, supplier, price, station, request, and contractor. We show where spending is higher than it should be and where transparency is missing.",
    "whatImproves": "MRO spending becomes manageable; overpayment categories are visible; areas for term renegotiation can be selected quickly.",
    "dataAiBehind": "ERP, requests, invoices, acts, item master, supplier directory, procurement and repair history.",
    "conversationQuestions": [
      "Can you quickly name the top 10 MRO categories where the network overpays?",
      "Which contractor services are growing in cost but are not visible as a separate management area?",
      "Where does procurement follow habit rather than verified economics?"
    ]
  },
  "f3-2-mto-anomalies": {
    "businessPressure": "MRO overpayment rarely looks like one big problem. It accumulates through small deviations: price above history, unusual order frequency, purchase splitting, and repeated contractors.",
    "whatWePutInPlace": "We compare prices, suppliers, request frequency, repair history, categories, and stations. We flag anomalies, overpayments, and suspicious patterns.",
    "whatImproves": "Real savings and control points are visible; procurement stops being a grey zone; conversations with suppliers and contractors become specific.",
    "dataAiBehind": "Procurement history, invoices, acts, requests, item master, prices, suppliers, repairs, and site data.",
    "conversationQuestions": [
      "Where has overpayment become normal because no one sees it in the flow of small purchases?",
      "Which categories are most often purchased above historical price?",
      "Are there signs of splitting or repeated deviations?"
    ]
  },
  "f3-3-supplier-rating": {
    "businessPressure": "Supplier or contractor choice often depends on price and habit. But real cost includes timing, quality, claims, repeat visits, failures, and operational consequences.",
    "whatWePutInPlace": "We build a supplier and contractor rating based on actual performance: price, timing, quality, claims, recurring issues, SLA fulfillment, and dependence on region and work type.",
    "whatImproves": "Procurement and operations choose not only \"cheaper\", but \"better by full cost and risk\".",
    "dataAiBehind": "Requests, acts, SLA, claims, repair history, execution timing, financial data, and internal customer ratings.",
    "conversationQuestions": [
      "Do you know which contractors are cheap on the invoice but expensive in consequences?",
      "Where does a low price lead to rework or downtime?",
      "Which suppliers systematically violate timing or quality?"
    ]
  },
  "f4-1-loss-exception-panel": {
    "businessPressure": "Losses and violations spread across different systems: procurement, terminal, loading/unloading, tanker, station, POS, loyalty, and finance. Management sees separate reports, but not a unified risk picture.",
    "whatWePutInPlace": "We build a loss and exception control panel: shortages, deviations from norms, suspicious operations, rule violations, recurring weak spots, and risk materiality.",
    "whatImproves": "Losses and exceptions are visible systemically; control works from a risk view; management understands where total risk is material.",
    "dataAiBehind": "Consolidation of signals from procurement, logistics, terminal, transport, stations, POS/cash register, loyalty, B2B cards, finance, and audit results.",
    "conversationQuestions": [
      "Do you see the overall picture of losses and exceptions across the whole chain, not in separate reports?",
      "Where does the sum of small deviations become material?",
      "Which exceptions repeat but do not become a control priority?"
    ]
  },
  "f4-2-anomaly-detection": {
    "businessPressure": "Many losses look like ordinary operational noise: a slightly strange shortage, discount outside pattern, return, manual correction, or loading/unloading discrepancy. Manually, such patterns are visible late and selectively.",
    "whatWePutInPlace": "We build rules, heuristics, and anomaly models for key processes: deviations from STD/SOP, policies, loss norms, expected routes, schedules, prices, discounts, cash register, and card patterns.",
    "whatImproves": "Control sees unusual patterns earlier; investigations start from an evidence-based signal; fewer losses pass as operational norm.",
    "dataAiBehind": "Control rules, heuristics, anomaly detection, historical norms, investigation results, and data for specific processes.",
    "conversationQuestions": [
      "Which deviations are considered normal today simply because no one sees the pattern?",
      "Where does control manually check what the system could flag itself?",
      "Do you have unified STD/SOP/policy deviation logic across the network?"
    ]
  },
  "f4-3-risk-investigations": {
    "businessPressure": "Audits and checks are carried out in sequence, by plan or habit, not where the real pain is. Even when a signal is found, the investigation often lives in email and Excel.",
    "whatWePutInPlace": "We prioritize checks by risk and manage investigation cases: signal, evidence, risk amount, owner, status, decision, and result.",
    "whatImproves": "Audit resources go to the riskiest points; investigations are not lost; check results feed back into the risk model.",
    "dataAiBehind": "Risk scoring, case management, evidence packs, check history, investigation statuses, and results of signal confirmation or rejection.",
    "conversationQuestions": [
      "Are checks driven by risk or carried out sequentially and by habit?",
      "For each signal, is it visible who owns it and how the investigation ended?",
      "Do investigation results feed into the next control cycle?"
    ]
  },
  "f5-document-primary-processing": {
    "businessPressure": "Waybills, acts, transport documents, invoices, payments, and contracts pass through the company every day as a flow of primary documents. They arrive in different formats, are entered manually, get lost, or wait for processing. Primary document errors surface late and cost a lot.",
    "whatWePutInPlace": "We recognize incoming documents: photos, scans, PDFs, EDI, and automatically extract key fields such as counterparty, amount, date, number, and line items. We reconcile against the order, enter into the system, and mark exceptions for manual review.",
    "whatImproves": "Less manual entry; faster period close; primary document errors are visible immediately, not during reconciliation; accounting works on control, not retyping.",
    "dataAiBehind": "OCR/IDP, document templates, counterparty directory, order and contract history, reconciliation rules, and ERP/1C integration.",
    "conversationQuestions": [
      "How much working time goes into manual entry of primary documents per day?",
      "Which document types arrive most often, and in what form: paper, scan, PDF, EDI?",
      "Which primary document errors surface during period close, and how much time is spent correcting them?"
    ]
  },
  "f4-4-control-chain-agent": {
    "businessPressure": "After separate models and dashboards appear, control faces another problem: there are many signals, they are scattered across processes, and only an experienced person sees the links between them.",
    "whatWePutInPlace": "We deploy an internal control agent that connects signals from domain loops: procurement, loading/unloading, transportation, stations, POS, loyalty, B2B cards, and finance. The agent assembles an evidence pack, suggests investigation priority and the next step. The decision and action remain with the controller or auditor.",
    "whatImproves": "Control sees connected cases, not separate signals; fewer complex losses pass between departments; investigation starts with ready context.",
    "dataAiBehind": "Unified data foundation, domain fraud/loss/anomaly models, investigation results, case management, and escalation rules.",
    "conversationQuestions": [
      "Which losses pass between departments because each sees only its own area?",
      "How much time goes into collecting evidence for a complex case?",
      "Can control quickly link procurement, transportation, station, card, and financial trace into one case?"
    ]
  },
  "paragraphs": [
    "An independent fuel retail network already has data: ERP, POS, loyalty, GPS, terminals, BI, Excel. What is usually missing is connectedness: management depends on people, calls, manual reconciliations, and the experience of individual managers, while accumulated data does not work for decisions.",
    "This map shows where AI and data create practical impact in fuel retail across the network economics: procurement and margin, logistics, stations and stores, customers, finance, and control. Not as a list of technologies, but through business tasks and what solving them delivers.",
    "The position is simple: AI agents are not placed on top of chaos. They become useful when data, rules, forecasts, and control loops have been built beneath them. That is why the path in each block moves from the bottom up: from visibility and control today, through forecasting and optimization, to decisions managed with AI. You can start small and use the data already available; the foundation is built out as the network moves along this path."
  ]
};
