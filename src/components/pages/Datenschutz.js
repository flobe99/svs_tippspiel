import React, { Component } from 'react';
import TextContainer from '../TextContainer';
import HeroSection from '../HeroSection';
import '../../App.css';



class Datenschutz extends Component {
    render() {
        window.scrollTo(0, 0)
        return <div>


            <HeroSection
                title="Datenschutz"
                imgpath="images/Datenschutz.jpg" alt="Datenschutzerklärung" />

            <div className='content'>
                <div>
                    <TextContainer title="Datenschutz">
                        <p>Wir haben diese Datenschutzerklärung (Fassung 30.12.2020-311245742) verfasst, um Ihnen gemäß der Vorgaben der
                        <a href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&tid=311245742"> Datenschutz-Grundverordnung (EU) 2016/679</a> zu erklären, welche Informationen wir sammeln,
                        wie wir Daten verwenden und welche Entscheidungsmögulchkeiten Sie als Besucher dieser Webseite haben.
                        Leider ulegt es in der Natur der Sache, dass diese Erklärungen sehr technisch kulngen, wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie mögulch zu beschreiben.</p>
                    </TextContainer>
                </div>
                <div>
                    <TextContainer title="Automatische Datenspeicherung" bgcolor="#cccccc">
                        <p>Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und gespeichert, so auch auf dieser Webseite.

                        Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver (Computer auf dem diese Webseite gespeichert ist) automatisch Daten wie</p>
                        <ul>
                            <li>die Adresse (URL) der aufgerufenen Webseite</li>
                            <li>Browser und Browserversion</li>
                            <li>das verwendete Betriebssystem</li>
                            <li>die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</li>
                            <li>den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird</li>
                            <li>Datum und Uhrzeit</li>
                        </ul>

                        <p>in Dateien (Webserver-Logfiles).<br></br>

                        In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschuleßen, dass diese Daten beim Vorulegen von rechtswidrigem Verhalten eingesehen werden.</p>
                    </TextContainer>
                </div>
                <div>
                    <TextContainer title="Cookies">
                        <p>nsere Website verwendet HTTP-Cookies um nutzerspezifische Daten zu speichern.
                        Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerklärung besser verstehen.</p>
                        <h3>Was genau sind Cookies?</h3>
                        <p>
                            Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge.
                            Die meisten Webseiten speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.
                        </p>
                        <p>
                            Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Webseiten verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für andere Anwendungsbereiche gibt.
                            HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem “Hirn” Ihres Browsers, untergebracht.
                            Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.
                        </p>
                        <p>
                            Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche Seiteneinstellungen.
                            Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen“ Informationen an unsere Seite zurück.
                            Dank der Cookies weiß unsere Website, wer Sie sind und bietet Ihnen Ihre gewohnte Standardeinstellung.
                            In einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer einzigen Datei gespeichert.
                        </p>
                        <p>
                            Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Webseiten (z.B. Google Analytics) erstellt.
                            Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren.
                            Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs zugreifen.
                        </p>
                        <p>So können zum Beispiel Cookie-Datem aussehen:</p>
                        <ul>
                            <li>Name: _ga</li>
                            <li>Ablaufzeit: 2 Jahre</li>
                            <li>Verwendung: Unterscheidung der Webseitenbesucher</li>
                            <li>Beispielhafter Wert: GA1.2.1326744211.152311245748</li>
                        </ul>
                        <p>Ein Browser sollte folgende Mindestgrößen unterstützen:</p>
                        <ul>
                            <li>Ein Cookie soll mindestens 4096 Bytes enthalten können</li>
                            <li>Pro Domain sollen mindestens 50 Cookies gespeichert werden können</li>
                            <li>Insgesamt sollen mindestens 3000 Cookies gespeichert werden können</li>
                        </ul>
                        <h3>Welche Arten von Cookies gibt es?</h3>
                        <p>
                            Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird in der folgenden Abschnitten der Datenschutzerklärung geklärt.
                            An dieser Stelle möchten wir kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.
                        </p>
                        <p>Man kann 4 Arten von Cookies unterscheiden:</p>
                        <h4>
                            Unbedingt notwendige Cookies
                        </h4>
                        <p>
                            Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft und später erst zur Kasse geht.
                            Durch diese Cookies wird der Warenkorb nicht gelöscht, selbst wenn der User sein Browserfenster schließt.
                        </p>
                        <h4>
                            Funktionelle Cookies
                        </h4>
                        <p>
                            Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website bei verschiedenen Browsern gemessen.
                        </p>
                        <h4>
                            Zielorientierte  Cookies
                        </h4>
                        <p>
                            Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene Standorte, Schriftgrößen oder Formulardaten gespeichert.
                        </p>
                        <h4>
                            Werbe-Cookies
                        </h4>
                        <p>
                            Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.
                        </p>
                        <p>
                            Üblicherweise werden Sie beim erstmaligen Besuch einer Webseite gefragt, welche dieser Cookiearten Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.
                        </p>

                        <h3>Wie kann ich Cookies löschen?</h3>
                        <p>
                            Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder welcher Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, nur teilweise zuzulassen oder zu deaktivieren.
                            Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.
                        </p>
                        <p>
                            Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen finden:
                        </p>
                        <p>
                            <a href="https://support.google.com/chrome/answer/95647?tid=311245748">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a>
                        </p>
                        <p>
                            <a href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=311245748">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
                        </p>
                        <p>
                            <a href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=311245748">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
                        </p>
                        <p>
                            <a href="https://support.microsoft.com/de-de/topic/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d">Internet Explorer: Löschen und Verwalten von Cookies</a>
                        </p>
                        <p>
                            <a href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09">Microsoft Edge: Löschen und Verwalten von Cookies</a>
                        </p>
                        <p>
                            Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll.
                            So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden.
                            Am besten ist es Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder “Cookies deaktivieren Chrome”
                            im Falle eines Chrome Browsers oder tauschen das Wort “Chrome” gegen den Namen Ihres Browsers, z.B. Edge, Firefox, Safari aus.
                        </p>

                    </TextContainer>
                    <TextContainer title="Datenschutz" bgcolor="#cccccc">
                        <p>
                            Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern von Cookies eine Einwilligung von Ihnen verlangt.
                            Innerhalb der EU-Länder gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Deutschland wurden die Cookie-Richtlinien nicht als nationales Recht umgesetzt.
                            Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in § 15 Abs.3 des Telemediengesetzes (TMG).
                        </p>
                        <p>
                            Wenn Sie mehr über Cookies wissen möchten und technischen Dokumentationen nicht scheuen, empfehlen wir <a href="https://tools.ietf.org/html/rfc6265">https://tools.ietf.org/html/rfc6265</a>, dem Request for Comments der Internet Engineering Task Force (IETF) namens “HTTP State Management Mechanism”.
                        </p>
                        <h3>Speicherung persönlicher Daten</h3>
                        <p>
                            Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der Übermittlung eines Formulars oder Kommentaren im Blog,
                            werden von uns gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben.
                        </p>
                        <p>
                            Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern, die Kontakt ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und Produkte.
                            Wir geben Ihre persönlichen Daten ohne Zustimmung nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.
                        </p>
                        <p>
                            Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits dieser Webseite – können wir keine sichere Übertragung und den Schutz Ihrer Daten garantieren.
                            Wir empfehlen Ihnen, vertrauliche Daten niemals unverschlüsselt per E-Mail zu übermitteln.
                        </p>
                        <p>
                            Die Rechtsgrundlage besteht nach <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=311245748">Artikel 6  Absatz 1 a DSGVO </a>(Rechtmäßigkeit der Verarbeitung) darin, dass Sie uns die Einwilligung zur Verarbeitung der von Ihnen eingegebenen Daten geben.
                            Sie können diesen Einwilligung jederzeit widerrufen – eine formlose E-Mail reicht aus, Sie finden unsere Kontaktdaten im Impressum.
                        </p>
                        <h3>Rechte laut Datenschutzgrundverordnung</h3>
                        <p>
                            Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die folgende Rechte zu:
                        </p>
                        <ul>
                            <li>
                                Recht auf Berichtigung (Artikel 16 DSGVO)
                            </li>
                            <li>
                                Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)
                            </li>
                            <li>
                                Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)
                            </li>
                            <li>
                                Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)
                            </li>
                            <li>
                                Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)
                            </li>
                            <li>
                                Widerspruchsrecht (Artikel 21 DSGVO)
                            </li>
                            <li>
                                Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)
                            </li>
                        </ul>
                        <p>
                            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder
                            Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich an die Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI) wenden.
                        </p>
                        <h3>Auswertung des Besuchsverhaltens</h3>
                        <p>
                            In der folgenden Datenschutzerklärung informieren wir Sie darüber, ob und wie wir Daten Ihres Besuchs dieser Website auswerten.
                            Die Auswertung der gesammelten Daten erfolgt in der Regel anonym und wir können von Ihrem Verhalten auf dieser Website nicht auf Ihre Person schließen.
                        </p>
                        <p>
                            Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu widersprechen erfahren Sie in der folgenden Datenschutzerklärung.
                        </p>
                    </TextContainer>
                    <TextContainer title="TLS-Verschlüsselung mit https">
                        <p>
                            Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch Technikgestaltung Artikel 25 Absatz 1 DSGVO).
                            Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher Daten sicherstellen.
                            Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schloßsymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.
                        </p>
                    </TextContainer>
                    <TextContainer title="Google Maps" bgcolor="#cccccc">
                        <p>
                            Wir benützen auf unserer Website Google Maps der Firma Google Inc. Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) für alle Google-Dienste verantwortlich.
                            Mit Google Maps können wir Ihnen Standorte besser zeigen und damit unser Service an Ihre Bedürfnisse anpassen.
                            Durch die Verwendung von Google Maps werden Daten an Google übertragen und auf den Google-Servern gespeichert.
                            Hier wollen wir nun genauer darauf eingehen, was Google Maps ist, warum wir diesen Google-Dienst in Anspruch nehmen, welche Daten gespeichert werden und wie Sie dies unterbinden können.
                        </p>
                        <h3>Welche Daten werden von Google Maps gespeichert?</h3>
                        <p>
                            Damit Google Maps ihren Dienst vollständig anbieten kann, muss das Unternehmen Daten von Ihnen aufnehmen und speichern.
                            Dazu zählen unter anderem die eingegebenen Suchbegriffe, Ihre IP-Adresse und auch die Breiten- bzw. Längenkoordinaten.
                            Benutzen Sie die Routenplaner-Funktion wird auch die eingegebene Startadresse gespeichert. Diese Datenspeicherung passiert allerdings auf den Webseiten von Google Maps.
                            Wir können Sie darüber nur informieren, aber keinen Einfluss nehmen. Da wir Google Maps in unsere Webseite eingebunden haben, setzt Google mindestens ein Cookie (Name: NID) in Ihrem Browser.
                            Dieses Cookie speichert Daten über Ihr Userverhalten. Google nutzt diese Daten in erster Linie, um eigene Dienste zu optimieren und individuelle, personalisierte Werbung für Sie bereitzustellen.
                        </p>
                        <p>Folgendes Cookie wird aufgrund der Einbindung von Google Maps in Ihrem Browser gesetzt:</p>
                        <p>
                            <strong>Name:</strong> NID <br />
                            <strong>Wert:</strong>188=h26c1Ktha7fCQTx8rXgLyATyITJ311245748-5<br />
                            <strong>Verwendungszweck:</strong> NID wird von Google verwendet, um Werbeanzeigen an Ihre Google-Suche anzupassen. Mit Hilfe des Cookies „erinnert“ sich Google an Ihre am häufigsten eingegebenen Suchanfragen oder Ihre frühere Interaktion mit Anzeigen. So bekommen Sie immer maßgeschneiderte Werbeanzeigen. Das Cookie enthält eine einzigartige ID, die Google benutzt, um Ihre persönlichen Einstellungen für Werbezwecke zu sammeln.
                            <br />
                            <strong>Ablaufdatum:</strong>nach 6 Monaten<br />
                            <strong>Anmerkung:</strong> Wir können bei den Angaben der gespeicherten Daten keine Vollständigkeit gewährleisten.
                            Speziell bei der Verwendung von Cookies sind Veränderungen nie auszuschließen. Um das Cookie NID zu identifizieren, wurde eine eigene Testseite angelegt, wo ausschließlich Google Maps eingebunden war.
                        </p>
                        <h3>Wie lange und wo werden die Daten gespeichert?</h3>
                        <p>
                            Die Google-Server stehen in Rechenzentren auf der ganzen Welt.
                            Die meisten Server befinden sich allerdings in Amerika. Aus diesem Grund werden Ihre Daten auch vermehrt in den USA gespeichert.
                            Hier können Sie genau nachlesen wo sich die Google-Rechenzentren befinden:
                             <a href="ttps://www.google.com/about/datacenters/inside/locations/?hl=de"> Google-Datacenter</a>
                        </p>
                        <p>
                            Die Daten verteilt Google auf verschiedenen Datenträgern. Dadurch sind die Daten schneller abrufbar und werden vor etwaigen Manipulationsversuchen besser geschützt.
                            Jedes Rechenzentrum hat auch spezielle Notfallprogramme.
                            Wenn es zum Beispiel Probleme bei der Google-Hardware gibt oder eine Naturkatastrophe die Server lahm legt, bleiben die Daten ziemlich sicher trotzdem geschützt.
                        </p>
                        <p>
                            Manche Daten speichert Google für einen festgelegten Zeitraum. Bei anderen Daten bietet Google lediglich die Möglichkeit, diese manuell zu löschen.
                            Weiters anonymisiert das Unternehmen auch Informationen (wie zum Beispiel Werbedaten) in Serverprotokollen, indem es einen Teil der IP-Adresse und Cookie-Informationen nach 9 bzw.18 Monaten löscht.
                        </p>
                    </TextContainer>
                    <TextContainer title="Openstreetmap">
                        <p>
                            Wir haben auf unserer Website Kartenausschnitte des Online-Kartentools „OpenStreetMap“ eingebunden.
                            Dabei handelt es sich um ein sogenanntes Open-Source-Mapping, welches wir über eine API (Schnittstelle) abrufen können. Angeboten wird diese Funktion von OpenStreetMap Foundation,
                            St John’s Innovation Centre, Cowley Road, Cambridge, CB4 0WS, United Kingdom. Durch die Verwendung dieser Kartenfunktion wird Ihre IP-Adresse an OpenStreetMap weitergeleitet.
                            In dieser Datenschutzerklärung erfahren Sie warum wir Funktionen des Tools OpenStreetMap verwenden, wo welche Daten gespeichert werden und wie Sie diese Datenspeicherung verhindern können.
                        </p>
                        <h3>Welche Daten werden von OpenStreetMap gespeichert?</h3>
                        <p>
                            Wenn Sie eine unserer Webseiten besuchen, die OpenStreetMap anbietet, werden Nutzerdaten an den Dienst übermittelt und dort gespeichert.
                            OpenStreetMap sammelt etwa Informationen über Ihre Interaktionen mit der digitalen Karte, Ihre IP-Adresse, Daten zu Ihrem Browser, Gerätetyp, Betriebssystem und an welchem Tag und zu welcher Uhrzeit Sie den Dienst in Anspruch genommen haben.
                            Dafür wird auch Tracking-Software zur Aufzeichnung von Userinteraktionen verwendet.
                            Das Unternehmen gibt hier in der eigenen Datenschutzerklärung das Analysetool „Piwik“ an.
                        </p>
                        <p>
                            Die erhobenen Daten sind in Folge den entsprechenden Arbeitsgruppen der OpenStreetMap Foundation zugänglich.
                            Laut dem Unternehmen werden persönliche Daten nicht an andere Personen oder Firmen weitergegeben, außer dies ist rechtlich notwendig.
                            Der Drittanbieter Piwik speichert zwar Ihre IP-Adresse, allerdings in gekürzter Form.
                        </p>
                        <h3>Wie lange und wo werden die Daten gespeichert?</h3>
                        <p>
                            Die API-Server, die Datenbanken und die Server von Hilfsdiensten befinden sich derzeit im Vereinten Königreich (Großbritannien und Nordirland) und in den Niederlanden.
                            Ihre IP-Adresse und Userinformationen, die in gekürzter Form durch das Webanalysetool Piwik gespeichert werden, werden nach 180 Tagen wieder gelöscht.
                        </p>
                    </TextContainer>
                    <TextContainer title="YouTube" bgcolor="#cccccc">
                        <p>
                            Wir haben auf unserer Website YouTube-Videos eingebaut. So können wir Ihnen interessante Videos direkt auf unserer Seite präsentieren. YouTube ist ein Videoportal, das seit 2006 eine Tochterfirma von Google ist. Betrieben wird das Videoportal durch YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Wenn Sie auf unserer Website eine Seite aufrufen, die ein YouTube-Video eingebettet hat, verbindet sich Ihr Browser automatisch mit den Servern von YouTube bzw. Google.
                            Dabei werden (je nach Einstellungen) verschiedene Daten übertragen.
                            Für die gesamte Datenverarbeitung im europäischen Raum ist Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) verantwortlich.
                        </p>
                        <h3>
                            Welche Daten werden von YouTube gespeichert
                        </h3>
                        <p>
                            Sobald Sie eine unserer Seiten besuchen, die ein YouTube-Video eingebaut hat, setzt YouTube zumindest ein Cookie, das Ihre IP-Adresse und unsere URL speichert.
                            Wenn Sie in Ihrem YouTube-Konto eingeloggt sind, kann YouTube Ihre Interaktionen auf unserer Webseite meist mithilfe von Cookies Ihrem Profil zuordnen.
                            Dazu zählen Daten wie Sitzungsdauer, Absprungrate, ungefährer Standort, technische Informationen wie Browsertyp, Bildschirmauflösung oder Ihr Internetanbieter.
                            Weitere Daten können Kontaktdaten, etwaige Bewertungen, das Teilen von Inhalten über Social Media oder das Hinzufügen zu Ihren Favoriten auf YouTube sein.
                        </p>
                        <p>
                            Wenn Sie nicht in einem Google-Konto oder einem Youtube-Konto angemeldet sind, speichert Google Daten mit einer eindeutigen Kennung, die mit Ihrem Gerät, Browser oder App verknüpft sind.
                            So bleibt beispielsweise Ihre bevorzugte Spracheinstellung beibehalten.
                            Aber viele Interaktionsdaten können nicht gespeichert werden, da weniger Cookies gesetzt werden.
                        </p>
                        <h3>Wie lange und wo werden die Daten gespeichert?</h3>
                        <p>
                            Die Daten, die YouTube von Ihnen erhält und verarbeitet werden auf den Google-Servern gespeichert. Die meisten dieser Server befinden sich in Amerika.
                            Unter <a href="https://www.google.com/about/datacenters/inside/locations/?hl=de"> Google-Datacenter</a> sehen Sie genau wo sich die Google-Rechenzentren befinden.
                            Ihre Daten sind auf den Servern verteilt.
                            So sind die Daten schneller abrufbar und vor Manipulation besser geschützt.
                        </p>
                        <p>
                            Die erhobenen Daten speichert Google unterschiedlich lang.
                            Manche Daten können Sie jederzeit löschen, andere werden automatisch nach einer begrenzten Zeit gelöscht und wieder andere werden von Google über längere Zeit gespeichert.
                            Einige Daten (wie Elemente aus „Meine Aktivität“, Fotos oder Dokumente, Produkte), die in Ihrem Google-Konto gespeichert sind, bleiben so lange gespeichert, bis Sie sie löschen.
                            Auch wenn Sie nicht in einem Google-Konto angemeldet sind, können Sie einige Daten, die mit Ihrem Gerät, Browser oder App verknüpft sind, löschen.
                        </p>
                    </TextContainer>

                </div>
            </div>

        </div >;
    }
}

export default Datenschutz;


