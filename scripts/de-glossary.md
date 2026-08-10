# Немецкий глоссарий — топливная канва

Собран из реальной лексики `roadmap-data.js`, сверен с профильными источниками (sprit-plus.de — отраслевое издание для операторов АЗС; bft — Bundesverband freier und unabhängiger Tankstellen; сайты Q1 Energie, Westfalen, Classic).

**Порядок работы:** Dennis (носитель) правит этот файл → перевод всех 272 элементов идёт строго по нему → термины не разъезжаются между карточками.

Колонка «уверенность»: ✓ подтверждено отраслевым источником · ~ стандартное деловое употребление · **?** нужен твой выбор.

## Отрасль и объекты

| EN | DE | | Комментарий |
|---|---|---|---|
| fuel retail | Tankstellengeschäft | ✓ | отраслевое; `Kraftstoffvertrieb` — про сбыт топлива как товара |
| fuel network / station network | Tankstellennetz | ✓ | так пишут все сети |
| station | Tankstelle | ✓ | |
| forecourt | Vorplatz | **?** | в немецком отрасли редко выделяют отдельно, обычно просто Tankstelle |
| depot / tank farm | Tanklager | ✓ | у sprit-plus есть отдельная рубрика Tanklager |
| shop / convenience | Shopgeschäft | ✓ | «das Shopgeschäft ist einer der größten Umsatzbringer» |
| network operator | Tankstellenunternehmer | ✓ | так издание обращается к аудитории |

## Логистика и снабжение

| EN | DE | | Комментарий |
|---|---|---|---|
| procurement | Beschaffung | ~ | `Einkauf` ближе к коммерческой закупке — **выбери одно** |
| supplier | Lieferant | ~ | |
| delivery / replenishment | Belieferung | ~ | `Nachschub` звучит по-военному, не брал |
| dispatch / dispatch planning | Disposition | ✓ | стандартный немецкий логистический термин |
| route planning | Tourenplanung | ✓ | стандарт |
| **demurrage** | **Standgeld** | ~ | ж/д простой. `Liegegeld` — морской. У нас ж/д → Standgeld |
| driver | Fahrer | ✓ | |
| fleet (B2B customers) | Flottenkunden | ~ | `Fuhrpark` — это парк как имущество, не клиенты |
| tanker truck | Tankwagen | ✓ | |

## Запасы и потери

| EN | DE | | Комментарий |
|---|---|---|---|
| inventory / stock | Bestand, Bestände | ~ | |
| stockout | Fehlbestand | ~ | `Out-of-Stock` тоже в ходу как англицизм — **выбери** |
| overstock | Überbestand | ~ | |
| wetstock loss / shrinkage | Schwund | ~ | `Fehlmengen` — недостачи по учёту; Schwund шире |
| loss control | Schwundkontrolle | **?** | или `Verlustkontrolle` — что живее? |
| reconciliation | Abgleich | ~ | финансовый — `Abstimmung` |

## Коммерция

| EN | DE | | Комментарий |
|---|---|---|---|
| margin | Marge | ✓ | `Spanne` тоже, но Marge однозначнее |
| street price / pump price | Straßenverkaufspreis (SVP) | ~ | аббревиатура SVP в отрасли узнаваема; `Säulenpreis` — цена на колонке |
| pricing | Preisgestaltung | ~ | |
| demand forecast | Absatzprognose | ~ | `Bedarfsprognose` — про потребность, `Absatz` — про сбыт |
| working capital | Working Capital | ~ | в немецком деловом обиходе не переводят |
| loyalty programme | Kundenbindungsprogramm | ~ | `Bonusprogramm` — если про баллы |
| fuel card | Tankkarte | ✓ | стандарт |
| revenue | Umsatz | ✓ | |
| gross profit | Rohertrag | ~ | `Bruttogewinn` — бухгалтерский; Rohertrag в торговле живее |

## Технологии и наша подача

Здесь **обязательно** совпадать с главным сайтом — там немецкие формулировки уже утверждены и живут в проде.

| EN | DE | Источник |
|---|---|---|
| Data, Process enhancement & AI | Daten, Prozessoptimierung & KI | заголовок главной, в проде |
| fuel retail and mid-sized retail operators | Betreiber im Tankstellen- und mittelständischen Einzelhandel | подзаголовок главной, в проде |
| Domain expertise and technical delivery in one team | Fachwissen und technische Umsetzung in einem Team | подзаголовок главной, в проде |
| AI | KI | не «AI» — на сайте везде KI |
| machine learning | Machine Learning | англицизм, в немецком ИТ не переводят |
| dashboard | Dashboard | |
| forecasting | Prognose | |
| fraud detection | Betrugserkennung | ~ |
| uptime / availability | Verfügbarkeit | ~ |
| maintenance | Instandhaltung | `Wartung` — плановая; Instandhaltung шире |

## Тон

Главный сайт по-немецки обращается на **Sie** («…die in Ihrem Betrieb läuft»). Канва должна держать тот же регистр — никакого «du».

Составные существительные не разбивать дефисами без нужды: `Tankstellennetz`, а не `Tankstellen-Netz`.

## Решения Dennis (носитель) — 2026-08-07, обязательны к применению

| EN | DE — утверждено | вместо |
|---|---|---|
| procurement | **Einkauf** | ~~Beschaffung~~ |
| stockout | **Out-of-Stock** | ~~Fehlbestand~~ |
| loss control | **Verlustkontrolle** | ~~Schwundkontrolle~~ |
| street price / pump price | **Säulenpreis** | ~~Straßenverkaufspreis / SVP~~ |
| working capital | **Working Capital** | не переводить |

Из решения №2 следует общий принцип: **англицизмы в этой аудитории уместны**. Значит Dashboard, Machine Learning, Working Capital, Out-of-Stock остаются как есть, без насильственного онемечивания.
