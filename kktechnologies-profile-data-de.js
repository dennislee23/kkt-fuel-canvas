/* German company profile for the fuel canvas (About / How we work / Team / Contact).
 * Mirrors window.KKTECH_PROFILE_EN one-to-one. Terminology per scripts/de-glossary.md
 * (AI = KI, Sie-form, Einkauf, Tankstellennetz, Tanklager, Marge, …).
 * German first pass, pending native review. */
window.KKTECH_PROFILE_DE = {
  brand: {
    officialName: "Kitty Kat Technologies",
    shortName: "KKTechnologies",
    canvasIdentity: "KI-Transformationskarte für das Tankstellengeschäft von KKTechnologies"
  },
  nav: [
    { id: "company", label: "Über uns" },
    { id: "how-we-work", label: "Arbeitsweise" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Kontakt" }
  ],
  company: {
    title: "KKTechnologies",
    eyebrow: "Daten & KI, vom Geschäft her gedacht",
    lead: "Wir helfen Unternehmen, von geschäftlichen Fragen zu praktischen Lösungen in Daten, KI und Automatisierung zu kommen — Lösungen, die sich in Geschäftsprozesse einbetten und messen lassen.",
    sublead: "Fachwissen und technische Umsetzung in einem Team — von der geschäftlichen Frage bis zur Lösung, die in Ihrem Betrieb läuft.",
    body: [
      "Wir kennen die internationale Best Practice und passen sie an die lokale Realität an. Datenreife, verfügbare Systeme, betriebliche Restriktionen und die Branchenpraxis vor Ort fließen dabei ein.",
      "Wir gehen von Quick Wins zur systemischen Transformation. Wir beginnen mit klaren Use Cases und bauen schrittweise Daten, Prozesse, Modelle und agentische Lösungen auf.",
      "Wir verbinden KI mit der Ökonomie des Geschäfts, nicht mit Technologietrends. Jede Initiative ist an Marge, Verluste, Working Capital, Umsatz, Service oder Teameffizienz geknüpft.",
      "Wir begleiten den Weg von der Idee zur umgesetzten Lösung. Wir definieren Prioritäten, Datenbedarf, Abhängigkeiten, Piloten und den nächsten realistischen Schritt für Ihr Tankstellennetz."
    ],
    proofPoints: [],
    trackRecord: {
      title: "Ausgewählte Projekte",
      lead: "Ausgewählte Projekte in Tankstellengeschäft, Logistik, Kundenanalytik, industriellem Betrieb und KI-gestützten Managemententscheidungen.",
      items: [
        {
          id: "fuel-transformation",
          label: "Alfa Oil / Red Petroleum",
          meta: "Tankstellenbetreiber mit rund 600 Mio. USD Umsatz, Zentralasien, 220 Tankstellen · 2024 – heute",
          focus: "Strategisches KI-Transformationsprogramm",
          whatWeDid: "KI-Reifegradanalyse und Roadmap, DWH-/BI-Fundament, Kundensegmentierung, Betrugsanalytik, interne Assistenten sowie Automatisierung von Zahlungen, Logistik und Einkauf.",
          result: "Berichtswesen von Tagen auf Minuten verkürzt; eigenes Datenteam aufgebaut und im Betrieb; erste ML-Modelle in Produktion.",
          detail: {
            context: "Ein mehrjähriges Programm, das den Kunden von über fünfzehn nicht verbundenen Altsystemen zu einer funktionierenden Daten- und KI-Umgebung geführt hat.",
            role: "Beginn mit Reifegrad-Audit und Roadmap, Präsentation vor der Geschäftsleitung, anschließend Steuerung der Umsetzung auf Kundenseite und Gestaltung der Daten-, BI- und KI-Agenda.",
            scope: [
              "Roadmap für das Daten- und KI-Programm sowie Abstimmung mit der Geschäftsleitung",
              "Koordination des DWH-/BI-Fundaments: über 24 Dashboards in 9 Abteilungen",
              "Kundensegmentierung über mehr als 380.000 Teilnehmer des Kundenbindungsprogramms und Betrugsanalytik über mehr als 30 Mio. Transaktionen",
              "Analyseagent in natürlicher Sprache, interne RAG-Assistenten, Automatisierung des Zahlungsprozesses, Logistikautomatisierung und erstes Produkt zur Einkaufsoptimierung",
              "Aufbau und Schulung des internen Datenteams des Kunden"
            ],
            outcome: [
              "Der Großteil der Roadmap ist umgesetzt",
              "Das interne Datenteam arbeitet inzwischen eigenständig",
              "Berichte, die Tage gedauert haben, dauern jetzt Minuten",
              "Erste eigene ML-Modelle in Produktion"
            ]
          }
        },
        {
          id: "fuel-dispatch",
          label: "Optimus — Plattform für die Kraftstoffversorgung",
          meta: "Plattform zur Optimierung des Kraftstoffeinkaufs · in Produktion",
          focus: "Optimierung des Kraftstoffeinkaufs, Versorgungskontrolle und Steuerung der Verteilung",
          whatWeDid: "Aufbau einer Plattform auf Basis von Optimierungsalgorithmen und KI zur Bestandsverfolgung, Prognose von Unterdeckungen, Erzeugung von Bestellempfehlungen sowie Steuerung von Lieferantenbewertungen, Reserven und Umleitungen — mit einer Kontrollebene für den Operator und ERP-Anbindung.",
          result: "Kraftstoffplanung, Bestellkontrolle und Ausführung in einem Produkt vereint: Prognose von Unterdeckungen, Einkaufsempfehlungen, Steuerung der Verteilung und an das ERP angebundene Versorgungsprozesse.",
          detail: {
            context: "Die tägliche Planung der Kraftstoffversorgung wird fragil, sobald Bestandsrisiken, Einkaufsentscheidungen, Lieferantenoptionen, Lieferausführung und ERP-Daten über verschiedene Werkzeuge und manuelle Abstimmung verteilt sind.",
            role: "Wir haben das Produkt um den realen Arbeitsalltag von Operatoren und Planern herum entworfen und gebaut — damit es laufende Entscheidungen unterstützt und nicht nur eine Berichtsebene ist.",
            scope: [
              "Bestandsverfolgung, Prognose von Unterdeckungen und Einkaufsempfehlungen",
              "Bestellprozess mit Lieferantenbewertung, Reservelogik und Umleitungen",
              "Verteilmechanismus, Lieferzeitstrahl und Kontrollsichten für die tägliche Ausführung",
              "Versorgungsprozess mit ERP-Anbindung zum Abgleich externer Fakten mit internen Entscheidungen"
            ],
            outcome: [
              "Die täglichen Versorgungsentscheidungen wurden kontrollierter und transparenter",
              "Einkauf, Umplanung und Ausführungskontrolle in einem operativen Produkt vereint",
              "Sichtbarkeit von Ausnahmen und ERP-Abgleich laufen jetzt in einem Workflow"
            ]
          }
        },
        {
          id: "loyalty-reactivation",
          label: "Kundenbindungsprogramm eines großen Tankstellennetzes",
          meta: "Über 380.000 Teilnehmer · 2024–2025",
          focus: "Reaktivierung inaktiver Kunden über Segmentierung",
          whatWeDid: "Problemdefinition gemeinsam mit der Marketingleitung, hybride Segmentierung aus RFM und Clustering, Ausrollen von 11 Segmenten in die App, A/B-Tests der Kampagnen.",
          result: "Rund 12.000 inaktive Kunden reaktiviert; die Segmente sind in die Marketingstrategie 2026 eingegangen.",
          detail: {
            context: "Das Kundenbindungsprogramm existierte, aber das Marketingteam hatte keine funktionierende Segmentierung, der es vertrauen und die es operativ nutzen konnte.",
            role: "Wir haben das geschäftliche Problem gemeinsam mit dem Kunden definiert, die Segmentierungslogik entworfen und validiert, sie in die Kundenbindungs-App ausgerollt und den Kampagnenstart begleitet.",
            scope: [
              "Prototyp einer hybriden Segmentierung aus RFM und GMM-Clustering",
              "Validierung von 11 Segmenten mit dem Fachbereich",
              "Ausrollen der Segmente in die mobile Kundenbindungs-App",
              "A/B-Tests der Kampagnen und Übergabe der automatisierten Aktualisierungsstrecke an das interne Datenteam"
            ],
            outcome: [
              "Rund 12.000 inaktive Kunden reaktiviert",
              "Die Segmente sind in den nächsten Marketingzyklus eingegangen",
              "Eine automatisierte ML-Strecke aktualisiert das Programm inzwischen eigenständig"
            ]
          }
        },
        {
          id: "fraud-visibility",
          label: "Kundenbindungs- und Betrugsabwehrprogramm eines großen Tankstellennetzes",
          meta: "Über 30 Mio. Transaktionen · 2024–2025",
          focus: "Sichtbarkeit und Erkennung von Betrug im vollen Maßstab",
          whatWeDid: "Ausgangsmessung, Kartierung der Szenarien und verbesserte Erkennung: eine Kombination aus verschärften SQL-Regeln und ML-Scoring.",
          result: "Das Ausmaß des Betrugs wurde sichtbar und messbar; verschärfte Regeln sind ausgerollt, das ML-Scoring wird eingeführt.",
          detail: {
            context: "Der Kunde hatte eine Regel-Engine, aber keine Möglichkeit zu verstehen, was sie übersieht und wie viel Betrug außerhalb der bestehenden Kontrollen liegt.",
            role: "Wir haben die Ausgangslage gemessen, aufgezeigt, wo die vorhandenen Regeln nicht ausreichen, und die nächste Erkennungsebene entworfen.",
            scope: [
              "Analyse von über 30 Mio. Transaktionen",
              "Ausgangsmessung des Betrugs und Konzentrationskarte nach Kunde, Tankstelle und Szenario",
              "Entwurf der Erkennungsebene: Kombination aus verschärften Regeln und ML-Scoring",
              "Weg zu angrenzenden Verlustquellen: Diebstahl am Terminal, Transportverluste und Telematiküberwachung"
            ],
            outcome: [
              "Verschärfte Regeln sind ausgerollt",
              "Das ML-Scoring wird aktiv eingeführt",
              "Das Ausmaß des Betrugs ist keine Vermutung mehr"
            ]
          }
        },
        {
          id: "nl-analytics",
          label: "Großes Industrieunternehmen",
          meta: "Konzern-DWH · 2025",
          focus: "Analyseagent in natürlicher Sprache für die Geschäftsleitung",
          whatWeDid: "Fachliche Semantikschicht, KPI-Mapping, Gold-Trainingsdatensatz und Unterstützung einer Multi-Agenten-Analysearchitektur.",
          result: "Über 90 % Antwortgenauigkeit in Produktion; interne Mitarbeiter werden für die Pflege des Systems geschult.",
          detail: {
            context: "Die Geschäftsleitung wollte Antworten zu Unternehmenskennzahlen direkt erhalten, ohne jede Anfrage über Analysten laufen zu lassen.",
            role: "Wir haben den Analyseassistenten im Geschäftsmodell verankert und mit dem Anbieter an der operativen Architektur gearbeitet.",
            scope: [
              "KPI-Definitionen, fachliche Hierarchien und Abbildung der Geschäftslogik",
              "Gold-Datensatz aus Fragen und Antworten für die Genauigkeitsabstimmung",
              "Unterstützung einer spezialisierten Multi-Agenten-Architektur nach Fragetyp",
              "Schulung interner Mitarbeiter für Pflege und Ausbau des Systems"
            ],
            outcome: [
              "Über 90 % Antwortgenauigkeit in Produktion",
              "Die Geschäftsleitung kann Unternehmensdaten direkt abfragen",
              "Interne Mitarbeiter werden geschult, um das System weiterzuentwickeln"
            ]
          }
        },
        {
          id: "dynamic-pricing",
          label: "Große Ride-Hailing-Plattform",
          meta: "Mobilität, Baltikum & Nordeuropa · 2023",
          focus: "Architektur für dynamische Preisgestaltung und Machbarkeitsnachweis",
          whatWeDid: "Definition des geschäftlichen Problems, Zielarchitektur, ML-Prototyp, Begleitung des Umsetzungspartners und Ergebniskontrolle gegen die Ausgangsbasis.",
          result: "Machbarkeit auf dem Niveau der geschäftlichen Ausgangsbasis bestätigt; Zielarchitektur für die Preisgestaltung zur Umsetzung definiert.",
          detail: {
            context: "Der Kunde brauchte eine praktikable Engine für dynamische Preisgestaltung, kein theoretisches Modell ohne Bezug zur operativen Realität.",
            role: "Wir haben auf Kundenseite gearbeitet und das geschäftliche Problem in eine Architektur und einen umsetzbaren Weg übersetzt.",
            scope: [
              "Definition des geschäftlichen Problems für die Preis-Engine in der App",
              "Festlegung der Zielarchitektur",
              "ML-Prototyp zur Bestätigung der Machbarkeit",
              "Unterstützung bei der Auswahl des Umsetzungspartners und Begleitung der Entwicklung"
            ],
            outcome: [
              "Machbarkeit bestätigt, bevor eine vollständige Entwicklung beauftragt wurde",
              "Zielarchitektur am geschäftlichen Problem ausgerichtet",
              "Der Rollout wurde gegen eine messbare Ausgangsbasis kontrolliert"
            ]
          }
        },
        {
          id: "click-grow",
          label: "Click & Grow",
          meta: "EU-Consumer-Hardware / D2C · 2022–2023",
          focus: "Kundenanalytik für eine D2C-Marke im Bereich Smart Gardening",
          whatWeDid: "Kundenanalytik, Segmentierung und Personalisierung auf Basis des Verhaltens rund um Gerät und Verbrauchsmaterial.",
          result: "Transaktions- und Produktnutzungssignale wurden in eine Logik für Kundenbindung und Lifecycle-Marketing überführt.",
          detail: {
            context: "Das Unternehmen verkauft sowohl Hardware als auch Verbrauchsmaterial — der Kundenwert hängt daher vom Verständnis des Lebenszyklusverhaltens ab, nicht von Einzelkäufen.",
            role: "Wir haben die Kundenanalytikschicht aufgebaut, die Entscheidungen zu Kundenbindung und Personalisierung stützt.",
            scope: [
              "Kundenanalytik und Segmentierung über den gesamten D2C-Kundenstamm",
              "Verbindung von Transaktionsverhalten und Produktnutzungssignalen",
              "Unterstützung der Personalisierung für Kundenbindung und Lifecycle-Marketing"
            ],
            outcome: [
              "Kundenverhalten wurde für die Bindungsplanung besser nutzbar",
              "Die Logik des Lifecycle-Marketings ruht auf realen Kundendaten"
            ]
          }
        },
        {
          id: "csc-telecom",
          label: "CSC Telecom",
          meta: "Baltikum · 2023 – heute",
          focus: "Kundenanalytik, Tarifanalyse und Abwanderungsmodellierung",
          whatWeDid: "Verhaltenssegmentierung, personalisierte Kommunikation, Tarifanalyse, Auswertung der Aktionsreaktionen und erste Abwanderungsmodelle für die Kundenbindung.",
          result: "Gefährdete Gruppen sind sichtbar und bearbeitbar, bevor sie zur Abwanderung werden — statt als allgemeine Kundenbewegung zu gelten.",
          detail: {
            context: "Der Kunde brauchte sowohl eine Marketingsicht auf das Kundenverhalten als auch eine kommerzielle Sicht darauf, welche Tarifmechaniken die Marge tatsächlich beeinflussen.",
            role: "Wir haben das Analyseprogramm für Marketing- und kommerzielle Fragen parallel geführt.",
            scope: [
              "Verhaltenssegmentierung und Gestaltung personalisierter Kommunikation",
              "Analyse der Tarifstruktur und der Paketkonfiguration",
              "Bewertung der Aktionsreaktionen nach Kohorte",
              "Erste Abwanderungsmodelle, um gefährdete Kunden in die Bindungsarbeit zu leiten"
            ],
            outcome: [
              "Gefährdete Gruppen werden früher sichtbar",
              "Marketing- und kommerzielle Entscheidungen auf einer gemeinsamen Kundendatenbasis"
            ]
          }
        },
        {
          id: "compressor-optimization",
          label: "Großer Hersteller von Industriegasverdichtern",
          meta: "2022–2023",
          focus: "Optimierung der Kraftstoffeffizienz in der Verdichterkonstruktion",
          whatWeDid: "Definition des geschäftlichen Problems, Architektur aus Operations Research, Machine Learning und Ingenieurregeln, Unterstützung beim Teamaufbau und Begleitung der Entwicklung.",
          result: "Das Modell wird in der laufenden Konstruktionsarbeit eingesetzt; die Effizienzgewinne wurden gegen technische Referenzwerte validiert.",
          detail: {
            context: "Der Kunde brauchte ein Modell zur Konstruktionsunterstützung, das technische Restriktionen respektiert — keinen rein statistischen Optimierungsansatz.",
            role: "Wir haben das geschäftliche und technische Problem definiert, die Architektur entworfen und das spezialisierte technische Team begleitet.",
            scope: [
              "Definition des Optimierungsproblems zur Kraftstoffeffizienz in der Verdichterkonstruktion",
              "Architektur aus Operations Research, Machine Learning und physikalischen Ingenieurregeln",
              "Empfehlungen zur Teamzusammensetzung und Aufsetzen der Umsetzung",
              "Begleitung der technischen Entwicklung"
            ],
            outcome: [
              "Das Modell wird in der laufenden Konstruktionsarbeit eingesetzt",
              "Die Effizienzgewinne wurden gegen technische Referenzwerte validiert"
            ]
          }
        },
        {
          id: "heavy-manufacturing",
          label: "Spezialstahlkonstruktionen und Bohranlagen",
          meta: "Schwermaschinenbau · 2023–2024",
          focus: "RAG-Assistent und Rissprüfung per Computer Vision",
          whatWeDid: "Interner RAG-Assistent für Technik und Betrieb sowie ein Computer-Vision-System zur Rissprüfung als Teil der vorausschauenden Instandhaltung.",
          result: "Beide Systeme sind ausgerollt und im aktiven Produktiveinsatz.",
          detail: {
            context: "Das betriebliche Umfeld war stark manuell geprägt: Mitarbeiter verbrachten viel Zeit mit der Suche nach technischen Vorgaben, und Prüfungen beruhten auf manueller Rissprüfung.",
            role: "Wir haben zwei Produktivsysteme entworfen und gebaut, die auf betriebliche Reibung und Instandhaltungsrisiko zielen.",
            scope: [
              "Interner RAG-Assistent für technische und betriebliche Funktionen",
              "Computer-Vision-System für vorausschauende Instandhaltung und Rissprüfung an Stahlkonstruktionen während der Fertigung"
            ],
            outcome: [
              "Beide Systeme sind ausgerollt",
              "Beide sind im Produktiveinsatz und nicht im Prototypenstadium steckengeblieben"
            ]
          }
        },
        {
          id: "risk-rag",
          label: "Spezialisierte Risikoberatung",
          meta: "Kunden aus der Energiewirtschaft · 2023",
          focus: "Zwei RAG-Assistenten für Beratungs- und Bewertungsarbeit",
          whatWeDid: "Ein Assistent für den internen Betrieb und Projektwissen; ein technischer Assistent, verankert in regulatorischen Rahmenwerken und der eigenen Methodik.",
          result: "Beide Assistenten sind ausgerollt und werden in Beratungsprojekten aktiv genutzt.",
          detail: {
            context: "Die Kanzlei wollte angesammeltes Kundenwissen und ihre Methodik schneller wiederverwenden, ohne dass Berater jedes Mal in verstreuten Quellen suchen.",
            role: "Wir haben ein Architekturmuster auf zwei unterschiedliche Wissensdomänen innerhalb derselben Kanzlei angewandt.",
            scope: [
              "Assistent für den internen Betrieb, der Kunden- und Projektwissen zugänglich macht",
              "Technischer Assistent, verankert in regulatorischen Leitfäden, Methodiken und den eigenen Daten der Kanzlei",
              "Ausrollen beider Assistenten in laufende Beratungsabläufe"
            ],
            outcome: [
              "Beide Assistenten sind ausgerollt",
              "Beide werden in Beratungsprojekten aktiv genutzt"
            ]
          }
        },
        {
          id: "iso-auditor",
          label: "Großes Prüf-, Inspektions- und Zertifizierungsunternehmen",
          meta: "2024",
          focus: "KI-Agent zur Simulation von ISO-Auditorenprozessen",
          whatWeDid: "Discovery, Übersetzung des Arbeitsablaufs, fachlich-technische Problemdefinition und frühe Prototypen zur Bestimmung der Leistungsgrenzen einer ISO-Auditorensimulation.",
          result: "Das Projekt hat die realistischen Grenzen der Automatisierung geklärt und dem Kunden eine fundierte architektonische Richtung gegeben, bevor das Konzept skaliert wurde.",
          detail: {
            context: "Das Projekt sollte die Logik eines ISO-Auditors simulieren, beginnend mit ISO 9001 und erweitert um engere Normen: ISO/TS 16949 und ISO 13485.",
            role: "Wir haben den Discovery-Prozess geführt, den Arbeitsablauf des Auditors in das übersetzt, was eine Maschine plausibel ausführen kann, und die Leistungsgrenzen über Prototypen geprüft.",
            scope: [
              "Discovery-Sitzungen zur Abbildung des realen Auditoren-Arbeitsablaufs",
              "Definition des geschäftlichen Problems im Abgleich mit der technischen Realität",
              "Prototypen zur Sichtbarmachung heutiger Leistungsgrenzen und Engpässe",
              "Teamaufbau: Data Engineering, ML Engineering und NLP"
            ],
            outcome: [
              "Ein klareres Bild davon, was heute machbar ist und was nicht",
              "Eine architektonische Richtung, verankert in realer Auditorenarbeit statt in abstrakten KI-Versprechen"
            ]
          }
        },
        {
          id: "rgm-platform",
          label: "Führendes europäisches FMCG-Unternehmen",
          meta: "Teamerfahrung · 2022–2024",
          focus: "KI-Plattform für Revenue Growth Management",
          whatWeDid: "Entwurf und Konfiguration einer RGM-KI-Plattform über mehrere Märkte hinweg, eingebettet in ein größeres Vertriebstransformationsprogramm.",
          result: "RGM-KI-Fähigkeiten wurden über mehrere Märkte hinweg ausgerollt, eingebettet in ein größeres Vertriebstransformationsprogramm.",
          detail: {
            context: "Ein großes FMCG-Unternehmen rollte eine RGM-KI-Plattform über mehrere Märkte aus und brauchte dafür ein kommerzielles Betriebsmodell, Prozessdesign und Kompetenzaufbau.",
            role: "Programmleitung über die kommerziellen, prozessualen und kompetenzbezogenen Dimensionen des RGM-KI-Rollouts.",
            scope: [
              "Entwurf und Konfiguration der RGM-KI-Plattform über mehrere Märkte",
              "Unterstützung der Vertriebstransformation: Prozessdesign, Kompetenzaufbau, E-Commerce-Strategie sowie Daten- und Berichtswerkzeuge"
            ],
            outcome: [
              "RGM-KI-Fähigkeiten über mehrere Märkte hinweg ausgerollt",
              "Kommerzielle Prozesse und Teamkompetenzen rund um die Plattform aufgebaut"
            ]
          }
        },
        {
          id: "gazprom-neft-program",
          label: "Gazprom Neft",
          meta: "Teamerfahrung · 2014–2021",
          focus: "Programm zur digitalen Transformation im Upstream-Geschäft",
          whatWeDid: "Geschäftsarchitektur, Bewertung digitaler Initiativen, Gestaltung von Produkt-KPIs und Arbeit an der Prozesseffizienz im gesamten Upstream-Geschäft.",
          result: "Das Programm hat ein strukturiertes Fundament geschaffen, um digitale Initiativen zu bewerten, KPIs zu definieren und operative Prozesse im Upstream-Geschäft zu verbessern.",
          detail: {
            context: "Ein großes Upstream-Geschäft führte ein umfangreiches Programm zur digitalen Transformation durch und brauchte Geschäftsarchitektur, Initiativenbewertung, KPI-Gestaltung und Prozesseffizienzarbeit über mehrere Stränge hinweg.",
            role: "Geschäftsarchitekt für das Programm zur digitalen Transformation im Upstream-Geschäft.",
            scope: [
              "Produktorientierter Ansatz für die Steuerung digitaler Lösungen",
              "Bewertung digitaler und KI-Initiativen",
              "Gestaltung von Produkt-KPIs",
              "Arbeit an Prozess- und Betriebseffizienz im Upstream-Geschäft"
            ],
            outcome: [
              "Strukturiertes Fundament für Initiativenbewertung und Produktleistungsmessung geschaffen",
              "Prozess- und Betriebseffizienzarbeit im größeren Transformationsprogramm verankert"
            ]
          }
        }
      ]
    }
  },
  howWeWork: {
    title: "Arbeitsweise",
    subtitle: "Von der Frage zur gelieferten Lösung.",
    lead: "Vier Phasen, von der geschäftlichen Frage bis zur Lösung, die läuft. Ausgangspunkt ist immer das Ziel oder die Entscheidung, die besser werden soll — die Technologie kommt danach.",
    steps: [
      {
        id: "identify",
        title: "Erkennen & qualifizieren",
        summary: "Wir klären die geschäftliche Frage, verstehen die Ausgangslage und prüfen, ob KI, Daten, Analytik, Automatisierung oder eine Prozessänderung realistisch helfen können.",
        outputs: [
          "Ein klares Bild des geschäftlichen Themas, seines Verantwortlichen und des erwarteten Ergebnisses",
          "Eine erste Prüfung verfügbarer Daten, der Prozessrealität und der Machbarkeit",
          "Eine Empfehlung, fortzufahren, die Idee neu zuzuschneiden oder früh zu stoppen"
        ]
      },
      {
        id: "scope",
        title: "Zuschneiden & vorbereiten",
        summary: "Wir machen aus einer vielversprechenden Chance ein umsetzungsreifes Projekt, das Fachbereich und Technik gleichermaßen verstehen.",
        outputs: [
          "Was sich im Prozess und im Entscheidungsablauf ändern muss",
          "Die erforderlichen Daten, Systeme, Personen und Regeln",
          "Ein Umsetzungsplan mit Anforderungen, Verantwortlichen und Abnahmekriterien"
        ]
      },
      {
        id: "execute",
        title: "Umsetzen & steuern",
        summary: "Wir begleiten die Umsetzung von der Geschäftsseite und halten die technische Lieferung an den geschäftlichen Ergebnissen ausgerichtet.",
        outputs: [
          "Abgestimmte Arbeit zwischen Fachbereich, Anbietern und technischen Teams",
          "Regelmäßige Prüfung, ob die Lösung das geschäftliche Problem weiterhin löst",
          "Test, Abnahme, Abstimmung mit den Beteiligten und Unterstützung bei der Einführung"
        ]
      },
      {
        id: "scale",
        title: "Abschließen, einführen & skalieren",
        summary: "Wir helfen, die Lösung in den Betrieb zu bringen, messbar zu machen und für die weitere Verbesserung vorzubereiten.",
        outputs: [
          "Eine funktionierende Lösung, eingebettet in den Geschäftsprozess",
          "Übergabe, Nutzerakzeptanz und Nutzenmessung",
          "Klare nächste Schritte zur Skalierung oder Verbesserung der Lösung"
        ]
      }
    ]
  },
  team: {
    title: "Team & Experten",
    lead: "Wir sitzen auf der Seite des Eigentümers.",
    sublead: "Ein erfahrenes Team mit Wurzeln im Geschäft, nicht nur in der Technik — damit die Arbeit von dem geprägt ist, was das Geschäft bewegt, und auch nach unserem Weggang weiterläuft.",
    groups: [
      {
        id: "domain",
        title: "Fachexpertise",
        members: [
          {
            name: "Pavel Mityshkin",
            photo: "team/pavel-mityshkin.jpg",
            line: "15+ Jahre in FMCG/Handel, RGM und Commercial Excellence",
            chips: ["PepsiCo", "Philip Morris", "Bonduelle", "Efes"],
            initials: "PM"
          },
          {
            name: "Yana Kujrikhina",
            photo: "team/yana-kujrikhina-v2.jpg",
            line: "10+ Jahre in Öl & Gas, Prozessberatung und Digitalisierung",
            chips: ["EY", "Gazprom Oil"],
            initials: "YK"
          },
          {
            name: "Nikolay Terentyev",
            photo: "team/nikolay-terentyev.png",
            line: "15+ Jahre im Bankwesen, in Finanzprozessen und digitaler Transformation",
            chips: ["Gazprombank"],
            initials: "NT"
          },
          {
            name: "Pavel Gabaidullin",
            photo: "team/pavel-gabaidullin.jpg",
            line: "19+ Jahre im Konzerneinkauf und in internationalen Lieferketten",
            chips: ["SIBUR", "Rosatom / NovaWind", "United Wagon Company", "Bombardier JV"],
            initials: "PG"
          },
          {
            name: "Levan Buachidze",
            photo: "team/levan-buachidze.jpg",
            line: "5+ Jahre in digitaler Logistik, Lieferkette und Category Management im Handel",
            chips: ["Deutsche Bahn", "Daily Group"],
            initials: "LB"
          },
          {
            name: "George Shevardenidze",
            photo: "team/george-shevardenidze.jpg",
            line: "15+ Jahre in technischer Beratung und operativer Transformation",
            chips: ["Lukoil", "DNV", "TUV Rheinland"],
            initials: "GS"
          },
          {
            name: "Dennis Nepomniashy",
            photo: "team/dennis-nepomniashy.jpg",
            line: "20+ Jahre in HoReCa und Wirtschaftsinformatik",
            chips: ["HP", "Business IT", "MCSI"],
            initials: "DN"
          }
        ]
      },
      {
        id: "tech",
        title: "Technische Expertise",
        members: [
          {
            name: "Nageye Rascid",
            photo: "team/nageye-rascid.jpg",
            line: "20+ Jahre in Unternehmensdaten-, Cloud- und KI-Plattformen",
            chips: ["Microsoft", "Snowflake", "Cisco", "Confluent", "Upbound"],
            initials: "NR"
          },
          {
            name: "Denis Perov",
            photo: "team/denis-perov.jpg",
            line: "15+ Jahre in Softwareentwicklung und KI-/ML-Lösungsarchitektur",
            chips: ["Aviasales"],
            initials: "DP"
          },
          {
            name: "Igor Trifonov",
            photo: "team/igor-trifonov.png",
            line: "10+ Jahre in Data Engineering, BI und Unternehmensdatenlösungen",
            chips: ["Customertimes", "Sberbank", "ATON"],
            initials: "IT"
          }
        ]
      }
    ],
    benchNote: "Dazu ein größerer Pool aus Data Scientists, ML Engineers, Data Engineers, Analysten, Fachspezialisten und externen Experten nach Bedarf."
  },
  contact: {
    title: "Kontakt",
    lead: "Möchten Sie besprechen, wo Daten & KI in Ihrem Unternehmen praktischen geschäftlichen Nutzen schaffen können?",
    email: "hello@kittykat.tech",
    website: "www.kittykat.tech",
    company: "Kitty Kat Technologies OU",
    location: "Tallinn, Estland"
  }
};
