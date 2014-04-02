'use strict';

angular.module('AskWeb', []).
    constant('locals', {





        /*----------DUTCH--------*/

        nl: {
            general: {
                readMore: 'Lees meer',
                cookieMessage: 'Wij gebruiken cookies om uw gebruikerservaring te verbeteren. Door deze website te gebruiken, accepteert u ons',
                cookieMessageLink: 'privacybeleid'
            },
            menu: {
                company: 'Bedrijf',
                cases: 'Referenties'
            },


            home: {
                scenario: {
                    titleSlide1: 'Regelmatig een tekort aan personeel?',
                    titleSlide2: 'Met ASK geeft personeel zelf beschikbaarheid aan.',
                    titleSlide3: 'Bij een tekort zoekt ASK automatisch naar personeel.',
                    titleSlide4: 'Zo heeft u altijd voldoende personeel!'
                },
                products: {
                    title:'Producten',
                    standby: 'Vooraf inzage in de paraatheid hebben en niet pas wanneer het alarm is afgegaan. Online roosters en alarmontvangers bieden slechts een deeloplossing. Daarom heeft ASK Standby ontwikkeld.',
                    teamup: 'ASK vindt dat ICT de zorg dient te ondersteunen. Uw medewerkers willen zo min mogelijk tijd aan administratie kwijt zijn, zodat ze zich kunnen richten op het verlenen van goede zorg.',
                    joinus: 'Flexibele personeelsinzet kent veel verschillende aspecten: werven, beschikbaarheid bewaken, plannen én uitzenden. Joinus is dé applicatie om alle informatie rond flexwerk snel uit te wisselen.'
                },
                casesPreview: {
                    title: 'Referenties',
                    postnl: 'ASK helpt PostNL om postsorteerders flexibel in te roosteren. Hierbij houdt ASK rekening met benodigde capaciteit, individuele voorkeuren en arbowetgeving.',
                    knrm01: 'ASK zorgt er bij de KNRM voor dat er altijd genoeg hulpverleners beschikbaar én in de buurt zijn om uit te rukken in geval van nood.',
                    knrm02: 'Hulpverleners kunnen via de pc, de smartphone of de telefoon zelf aangeven wanneer ze paraat kunnen staan, en wanneer ze een dag vrij willen.',
                    bz01: 'De case Buurtzorg heeft mede geleid tot de uiteindelijke ontwikkeling van TeamUp.',
                    bz02: 'Met de smartphone-app faciliteert ASK de onderlinge afstemming en communicatie. Zo hoeft er minder te worden geregeld, en kan er meer worden gedaan.',
                    olympia: 'ASK heeft Olympia geholpen om vacatures onder de aandacht van uitzendkrachten te brengen en om direct reacties van kandidaten te verzamelen via de smartphone, telefoon of e-mail.'
                }
            },


            company: {
                pressure: {
                    title: 'Minimale regeldruk',
                    description01: 'ASK is expert in het ontwikkelen van applicaties die dit mogelijk maken! Uw personen kunnen met ASK onderling de planning afstemmen. Daarbij hebben ze tegelijkertijd de relevante informatie bij de hand om het werk efficienter uit te voeren.',
                    description02: 'Met de applicaties van ASK is het communiceren van de beschikbaarheid erg eenvoudig. Het kan zelfs automatisch. Vervolgens neemt de applicatie zelf contact op met beschikbare personen bij uitval. Dit houdt de belasting van uw personen laag en de motivatie hoog.',
                    description03: 'ASK applicaties faciliteren het onderlinge netwerk van uw personeel, zodat ze continu met elkaar in verbinding staan. Dit garandeert u de flexibiliteit om snel te kunnen reageren op last-minute situaties.',
                    description04: 'ASK werkt al meer dan 10 jaar aan intelligente software. De applicaties die hieruit voortkomen bevorderen de communicatie tussen personen. Hiervoor gebruikt ASK het netwerk dat mensen met elkaar vormen. De applicaties zijn altijd multi-device: werken vanaf uw eigen computer, smartphone of tablet.',
                },
                howWork: {
                    title: 'Hoe werkt ASK?',
                    description01: 'Traditionele planning werkt op basis van veel, maar vaak verouderde informatie. Het gebruikt een momentopname… Software van ASK daarentegen is realtime: de informatie die gebruikt wordt is veranderlijk en altijd de meest recente. Hierdoor is altijd de optimale planning op ieder moment voorhanden.',
                    description02: 'Omdat ASK naast het gebruik van realtime, alleen de meest relevante informatie selecteert, kunt u direct inspelen op onvoorziene situaties. ASK levert wat u nodig heeft, direct.'
                },
                personalNetwork: {
                    title: 'Eigen netwerk',
                    description: 'ASK is onderdeel van een groep high-tech bedrijven: de Almende Groep. Door de nauwe onderlinge samenwerking loopt ASK technologisch altijd voorop.'
                }
            },


            jobs: {
                title:'Vacatures',
                knowledgeTitle: 'Gewenste kennis en ervaring:',
                profileTitle: 'Jouw profiel:',
                offerTitle: 'Wij bieden jou:',
                contactTitle: 'Interesse?',
                contactDescription01: 'Neem contact op met Carolyn Hoek:',

                iosdev: {
                    title:'iOS Developer',
                    intro: 'ASK Community Systems B.V. is voor een aantal projecten op zoek naar ervaren iOS Developers. Het gaat hierbij om de ontwikkeling van innovatieve iPhone en iPad applicaties. Je streeft samen met het team naar het beste resultaat.',
                    knowledge: {
                        point01: 'HBO denk- en werkniveau',
                        point02: 'Minimaal 2 jaar aantoonbare ervaring met iOS app development',
                        point03: 'Uitgebreide kennis van iOS SDK en Xcode',
                        point04: 'Goede kennis van Objective-C , HTML5, JSON'
                    },
                    profile: {
                        point01: 'Analytische vaardigheden',
                        point02: 'Collegiaal en flexibel',
                        point03: 'Verantwoordelijkheidsgevoel en stressbestendigheid',
                        point04: 'Onze doelstelling onderschrijven door plezier te hebben in je werk en dat uit te stralen',
                        point05: 'Bereid zijn jouw kennis met je collega\'s te delen'
                    },
                    offer: {
                        point01: 'Een marktconform salaris met aantrekkelijke arbeidsvoorwaarden;',
                        point02: 'Een inspirerende internationale werkomgeving;',
                        point03: 'Ruime mogelijkheden om jezelf op je vakgebied en daarbuiten te blijven ontwikkelen.'
                    }
                },

                businessConsultant: {
                    title: 'Business Consultant',
                    intro: 'Ter uitbreiding van ons salesteam, zijn wij op zoek naar een Business Consultant. In deze functie ben je verantwoordelijk voor het binnenhalen van new business en het relatiebeheer met klanten. Je bent het boegbeeld van ASK Community Systems B.V. en gaat geen enkele commerciële uitdaging uit de weg.',
                    knowledge: {
                        point01: 'Afgeronde HBO / universitaire opleiding op technisch gebied (zoals Computertechnologie, Informatietechnologie of Bedrijfskunde)',
                        point02: 'Minimaal 3 jaar ervaring in een soortgelijke functie',
                        point03: 'Aantoonbaar succesvolle commerciële werkervaring'
                    },
                    profile: {
                        point01: 'Je bent ondernemend en neemt initiatief',
                        point02: 'Je bent zelfstandig, toont ownership en werkt graag in teamverband',
                        point03: 'Een goede netwerker',
                        point04: 'Communicatief vaardig in woord en geschrift',
                        point05: 'Uitstekende mondelinge en schriftelijke kennis van het Engels',
                        point06: 'In staat om je op korte termijn het dienstenaanbod van ASK eigen te maken',
                        point07:'Bij voorkeur woonachtig in regio Rotterdam'
                    },
                    offer: {
                        point01: 'Een marktconform salaris met aantrekkelijke arbeidsvoorwaarden;',
                        point02: 'Bedrijf met potentie;',
                        point03: 'Een inspirerende internationale werkomgeving;',
                        point04: 'Ruime mogelijkheden om jezelf op je vakgebied en daarbuiten te blijven ontwikkelen.'
                    }
                },


                internshipTitle:'Stages',
                internshipTitle02:'Stage:',
                challengeTitle: 'De uitdaging',
                weSeekTitle: 'Wie we zoeken',

                internshipClouds: {
                    title:'Onderzoek naar clouds',
                    challengeDescription01: 'ASK maakt veelvuldig gebruik van multi-agenttechnologie in haar oplossingen. Twee van onze belangrijkste systemen maken gebruik van deze technologie: de ASK Back-End voor realtime coördinatie en informatie-uitwisseling, en ASK-Fast, een platform voor realtime communicatie tussen verschillende partijen. ',
                    challengeDescription02: 'Beide platforms draaien in de cloud (voornamelijk Google App Engine), waardoor ze onbeperkt schaalbaar zijn. Om ook in de toekomst goede beslissingen te kunnen nemen over onze applicaties in de cloud, willen we graag meer weten over andere cloud oplossingen. ',
                    weSeekDescription01: 'We zoeken daarom een stagiair die een uitgebreid vergelijkend onderzoek wil doen naar de verschillende cloudplatforms die op dit moment op de markt zijn. Het gaat daarbij om zowel een literatuurstudie als praktische experimenten waarbij de voors en tegens van de verschillende cloud platforms tegen elkaar kunnen worden afgewogen. '
                },

                internshipPersonalAlarm: {
                    title:'Personal alarm system',
                    challengeDescription01: 'ASK werkt op dit moment aan de Alarm app: een innovatief systeem dat de juiste mensen alarmeert in geval van nood. Deze app kan gebruikt worden door bijvoorbeeld patiënten met epilepsie, diabetes of hartproblemen, mobiele beveiligers, medewerkers die in hun eentje op een gevaarlijke plek moeten werken, reizigers die worden geconfronteerd met geweld, enz. ',
                    challengeDescription02: 'De applicatie bestaat uit een app (te gebruiken door slachtoffers én helpers) en een intelligente back-end. De back-end zorgt dat de meest geschikte persoon wordt gealarmeerd en dat de juiste informatie snel bij de juiste persoon terecht komt. De Alarm app is getest in twee experimentele situaties, namelijk binnen Zorg en binnen Veiligheid. ',
                    weSeekDescription01: 'ASK-CS zoekt een stagiair die wil helpen deze pilotversie om te zetten naar een market ready systeem.'
                },

                internshipP2000Alarm: {
                    title:'P2000 alarm system',
                    challengeDescription01: '',
                    challengeDescription02: '',
                    weSeekDescription01: ''
                },

                internshipLearningSoftwareAgent: {
                    title:'Een lerende software-agent voor multi-modale communicatie',
                    challengeDescription01: 'Het ASK-Fast platform stelt gebruikers in staat om met verschillende partijen te communiceren via verschillende kanalen. Denk aan telefonie, SMS, Email, IM, in-app berichten, enz. Op deze manier kunnen één of meerdere dialogen worden opgezet.',
                    challengeDescription02: 'Eén van de systemen die gebruik maken van ASK-Fast is JoinUs, een systeem dat recruiters helpt om veel flex-medewerkers tegelijk te polsen over hun beschikbaarheid voor een bepaalde taak. Elke flex-medewerker wordt afhankelijk van zijn/haar voorkeuren via één of meerdere kanalen aangesproken. ',
                    challengeDescription03: 'Om tot een optimale mix van communicatiekanalen te komen, willen we een lerende software-agent ontwikkelen. Deze agent combineert de statische kennis over de verschillende communicatiekanalen, met de gebruikerspecifieke voorkeuren. ',
                    weSeekDescription01: 'We zijn op zoek naar een afstudeerder die ons wil helpen bij het ontwikkelen van deze lerende software-agent. Onderdeel van de afstudeerstage is een onderzoek naar de effectiviteit van de verschillende communicatiekanalen. De resultaten van dit onderzoek worden gebruikt als input voor de agent. '
                },

                internshipTeamup: {
                    title:'TeamUp in de praktijk',
                    challengeDescription01: 'Voor de zorgsector ontwikkelt ASK de oplossing TeamUp. Deze applicatie helpt teams van zorgverleners (zoals thuiszorgmedewerkers) om samen te werken met hun teamgenoten. Ze kunnen bijvoorbeeld elkaars status opvragen, ondersteuning vragen, of op locatie informatie over hun patiënten opzoeken.',
                    challengeDescription02: 'ASK wil de TeamUp applicatie nu ook inzetten in andere domeinen, zoals sportteams, mantelzorgers, enz.',
                    weSeekDescription01: 'We zoeken een stagiair die voor ons wil onderzoeken hoe TeamUp kan worden ingezet in dergelijke domeinen en welke toegevoegde waarde de applicatie kan hebben.'
                },

                workAt: {
                    title: 'Werken bij ASK',
                    description01: 'ASK Community Systems is een internationaal opererende softwareleverancier van Nederlandse bodem. ' +
                        'ASK Community Systems richt zich op het vlak waar informatiemanagement en communicatie elkaar raken.' +
                        'De intelligente systemen die wij maken ondersteunen menselijke processen door gebruik te maken van software-agenttechnologie.',
                    description02: 'Ben je gemotiveerd en gepassioneerd met je werk bezig? En bereid om iets extra\'s te geven voor de klant? ' +
                        'Werk je graag met andere professionals in een informele doch prestatiegerichte werksfeer? ' +
                        'Dan nodigen we je graag uit onze vacatures te bekijken en te solliciteren.'
                }
            },


            cases: {
                problemTitle: 'Probleemschets:',
                goalsTitle: 'Doelstellingen:',
                solutionTitle: 'Oplossing:',
                quanResultsTitle: 'Kwalitatieve resultaten:',
                qualResultsTitle: 'Kwantitatieve resultaten:',

                postnl: {
                    title:'PostNL',
                    factsTitle: 'ASK bij PostNL in cijfers:',
                    fact01:'Sorteercentra verspreid door Nederland',
                    fact02:'Flexwerkers in het systeem',
                    fact03: 'Communicatiehandelingen per maand (telefoon/sms)',
                    problem: {
                        point01: 'Inefficiënte planning door scheve verhouding tussen vooraf gemaakt rooster en daadwerkelijke vraag;',
                        point02: 'Overschot aan medewerkers en uitzendkrachten;',
                        point03: 'Wens om vaste medewerkers te behouden en aantal uitzenduren te verminderen.'
                    },
                    goals: {
                        point01: 'Roosters maken gebaseerd op de individuele voorkeuren van de medewerkers;',
                        point02: 'Een betere verhouding tussen de fluctuerende werkdruk en daadwerkelijk personeelsinzet;',
                        point03: 'Sneller reageren op ziekte en afwezigheid.'
                    },
                    solution: {
                        description01: 'PostNL heeft, in overeenstemming met de ondernemingsraad, gekozen voor de oplossing van ASK, omdat deze goed aansluit bij hun MVO-doelstellingen (Maatschappelijk Verantwoord Ondernemen).',
                        description02:'De roosters van postsorteerders worden voortaan gegenereerd op basis van de beschikbaarheid van werknemers, die zij zelf online aangeven. De definitieve planning wordt aan de flexwerkers doorgegeven via e-mail of sms.'
                    },
                    qualResults: {
                        point01:'Aantal uitzenduren is teruggebracht;',
                        point02:'Geen ontslagen onder vaste medewerkers;',
                        point03:'Meer continuïteit doordat er meer met vaste medewerkers wordt gewerkt;',
                        point04:'Personeel is beter gemotiveerd omdat werk en privé beter op elkaar zijn af te stemmen.'
                    },
                    quanResults: {
                        fact01: 'Kostenvermindering door besparing',
                        fact02: 'Verzuim gereduceerd (van 11% naar 6%)',
                        fact03: 'Totale besparing in 3 jaar'
                    }
                },

                knrm: {
                    title:'KNRM',
                    factsTitle: 'ASK bij KNRM in cijfers:',
                    fact01:'Reddingsstations gebruiken ASK',
                    fact02:'Hulpverleners ondersteund',
                    problem: {
                        point01: 'Veel onnodige oproepen;',
                        point02: 'Niet altijd voldoende mensen beschikbaar;',
                        point03: 'Weinig flexibiliteit voor de vrijwilligers.'
                    },
                    goals: {
                        point01: 'Controlefunctie: inzichtelijk maken of er voldoende mensen zijn;',
                        point02: 'Ondersteunen coördinatoren;',
                        point03: 'Roostering faciliteren voor vrijwilligers.'
                    },
                    solution: {
                        description01: 'Met de intrede van ASK vullen de meer dan 1300 hulpverleners bij de 46 stations nu online hun beschikbaarheid in via het planbord. De coördinator houdt het overzicht op het gezamenlijke rooster van zijn/haar locatie. ASK vult automatisch de gaten in het rooster op door telefonisch de beschikbaarheid te peilen.'
                    },
                    qualResults: {
                        point01:'Vrijwilligerswerk voor de KNRM is beter te combineren met werk/privé;',
                        point02:'ASK bewaakt de permanentiegraad (= altijd voldoende mensen beschikbaar);',
                        point03:'De schippers zijn ontlast, doordat ze nu alleen bij een tekort worden genotificeerd.'
                    }
                },

                bz: {
                    title:'Buurtzorg',
                    factsTitle: 'Buurtzorg in cijfers:',
                    fact01:'Personen maximaal per zelfsturend team',
                    fact02:'Locaties in Nederland',
                    problem: {
                        point01: 'Veel tijd kwijt aan het naar kantoor gaan om op de computer cliëntgegevens te kunnen raadplegen;',
                        point02: 'Communicatie tussen collega’s onderling slecht gefaciliteerd.'
                    },
                    goals: {
                        point01: 'Wijkverpleegkundigen de beschikking te geven over een gebruiksvriendelijke mobiele applicatie;',
                        point02: 'Deze applicatie moet de wijkverpleegkundige ondersteuning bieden bij de verzorging van cliënten door hen ter plaatse de beschikking te geven over relevante informatie.'
                    },
                    solution: {
                        description01: 'ASK Community Systems heeft in samenwerking met Ecare Services de Buurtzorg App ontwikkeld. Deze app geeft werknemers de mogelijkheid om onderweg naar de cliënt de laatste rapporten door te nemen. Het vormt de mobiele ondersteuning van de wijkverpleegkundige.',
                        description02:'Tevens zorgt de Buurtzorg App voor kortere lijntjes: Geen mensen meer achter de bureaus, maar gewoon uitvoerenden die ook de talenten in zich hebben om na te denken en gebruik te maken van moderne technologie.'
                    },
                    qualResults: {
                        description01:'Met de Buurtzorg App kunnen wijkverpleegkundigen:',
                        point01:'Basisgegevens van en over cliënten inzien;',
                        point02:'Rapportages van en over cliënten, inzien en creëren;',
                        point03:'Tijd besteed bij een cliënt vastleggen en doorsturen;',
                        point04:'Contact opnemen met cliënten of collega\'s.'
                    }
                },

                olympia: {
                    title:'Olympia',
                    factsTitle: 'ASK bij Olympia in cijfers:',
                    fact01:'Geregistreerde uitzendkrachten',
                    fact02:'Communicatiehandelingen per kwartaal (telefoon/sms)',
                    problem: {
                        point01: 'Beperkte productiviteit bij intercedenten in alle branches;',
                        point02: 'Intercedenten besteden te veel tijd aan herhalende communicatiehandelingen;',
                        point03: 'Intercedenten hebben behoefte aan meer tijd voor persoonlijk contact op de momenten dat het telt.'
                    },
                    goals: {
                        point01: 'Kernprocessen optimaliseren door repetitieve en tijdrovende telefoongesprekken te automatiseren;',
                        point02: 'Tijd vrijmaken voor persoonlijk contact tussen intercedent en klant;',
                        point03: 'Een database inrichten met direct inzetbare uitzendkrachten.'
                    },
                    solution: {
                        description01: 'Olympia Uitzendbureau gebruikte ASK om haar intercedenten te ondersteunen bij dagelijkse werkprocessen.',
                        description02:'Wanneer een vacature moet worden vervuld, selecteert de intercedent eerst handmatig een groep geschikte uitzendkrachten. De intercedent neemt óf een gesproken bericht op, óf schrijft een tekst met daarin de belangrijkste informatie over de opdracht. ASK bezorgt dit bericht bij de geselecteerde uitzendkrachten en verzamelt meteen reacties via de telefoon, sms, of e-mail.',
                        description03: 'De opdracht kan online worden uitgezet en gevolgd. Dit betekent dat de intercedent niet in hetzelfde land hoeft te zijn als de kandidaten en dat de effectieve werktijd wordt uitgebreid (tot wel 24/7). Het systeem blijft kandidaten benaderen, ook wanneer de intercedent niet achter zijn of haar bureau zit.'
                    },
                    qualResults: {
                        point01:'De dagelijkse operatie is efficiënter en flexibeler;',
                        point02:'Een betere concurrentiepositie;',
                        point03:'De baan van intercedent is aantrekkelijker omdat ASK de saaie, repetitieve taken overneemt.'
                    },
                    quanResults: {
                        fact01: 'Succesvolle uitzendingen',
                        fact02: 'Inkomsten',
                        fact03: 'Communicatiekosten (EUR 0,38 aan licentie + EUR 0,10 per gesprek/sms ipv EUR 4,30 per contact)'
                    }
                }
            }
        },





        /*----------ENGLISH--------*/

        en: {
            general: {
                readMore: 'Read More',
                cookieMessage: 'We use cookies to improve your experience. By using our website, you agree to accept our',
                cookieMessageLink: 'privacy policies'
            },
            menu: {
                company: 'Company',
                cases: 'References'
            },


            home: {
                scenario: {
                    titleSlide1: 'Experiencing shortages in personnel regularly?',
                    titleSlide2: 'With ASK, personnel can register their availability themselves.',
                    titleSlide3: 'When there is a shortage, ASK will automatically search for personnel.',
                    titleSlide4: 'This way you will always have enough personnel!'
                },
                products: {
                    title:'Products',
                    standby: 'Insight in the readiness beforehand, and not only after the alarm has gone off. Online schedules of alarm-receivers only solve part of the problem. That\'s why ASK has developed Standby.',
                    teamup: 'ASK believes that ICT should support healthcare. Your employees don\'t want to spend much time on administrative tasks so they can focus on providing care.',
                    joinus: 'Flexible staffing has many different aspects: recruitment, availability monitoring, planning and dispatching. JoinUs is the application to fast exchange information about flexible work.'
                },
                casesPreview: {
                    title: 'References',
                    postnl: 'ASK helps PostNL by flexibly scheduling mail-sorters\' shifts. When doing this, ASK takes into account the required capacity, individual preferences and labor laws.',
                    knrm01: '"ASK makes sure that KNRM always has enough rescue workers available and nearby to act in case of emergency."',
                    knrm02: 'Rescue workers can use their pc, smartphone or telephone to indicate when they can be standby, and when they want a day off.',
                    bz01: 'The Buurtzorg case has partly lead to the development of TeamUp',
                    bz02: 'With the smartphone-app, ASK facilitates the internal allignments and communication. This way, less has to be arranged and more can be done.',
                    olympia: 'ASK has helped Olympia bring job vacancies to the attention of temporary workers and directly collect responses from candidates via smartphone, telephone or e-mail.'
                }
            },


            company: {
                pressure: {
                    title: 'Less management and more productivity',
                    description01: 'ASK is an expert in the development of applications for making this possible! Your people can use ASK to mutually adjust the planning. At the same time they will have relevant information available in order to perform more efficiently.',
                    description02: 'ASK applications make communicating the availability very straightforward. It can even be done automatically. Subsequently, the application will contact available people in case of shortage. This makes sure burdening of people is low and motivation is high.',
                    description03: 'ASK applications facilitate the internal network of your personnel, so they are constantly connected to eachother. This guarantees flexibility to rapidly deal with last-minute situations.',
                    description04: 'ASK has been working on intelligent software for over 10 years. The applications that arise from this promote communication between people. For this, ASK uses the networks that people have established with each other. The applications are always multi-device: working from your own computer, smartphone or tablet.'
                },
                howWork: {
                    title: 'How does ASK work?',
                    description01: 'Traditional planning works on the basis of much, but usually outdated information. It uses a snapshot... On the other hand, ASK software is realtime: the information that is used is changeable and always up to date. This way the most optimal planning is available at any time.',
                    description02: 'Because ASK, apart from using realtime, only selects the most relevant information, you can directly anticipate in unforseen situations. ASK delivers what you need, directly.'
                },
                personalNetwork: {
                    title: 'Own Network',
                    description: 'ASK is part of a group of high-tech companies: the Almende Group. As a result of this close collaboration, ASK is always at the forefront of technology.'
                }
            },


            jobs: {
                title:'Jobs',
                knowledgeTitle: 'Required knowledge and experience:',
                profileTitle: 'Your Profile:',
                offerTitle: 'We offer you:',
                contactTitle: 'Interested?',
                contactDescription01: 'Please contact Carolyn Hoek:',

                iosdev: {
                    title:'iOS Developer',
                    intro: 'ASK Community Systems B.V.  is looking for experienced iOS Developers for several projects. The focus is on developing innovative iPhone and iPad applications. Together with the team, you will strive for the best results.',
                    knowledge: {
                        point01: 'HBO-level of working and thinking',
                        point02: 'Minimum 2 years of demonstrable experience in iOS app development',
                        point03: 'Extensive knowledge of iOS SDK and Xcode',
                        point04: 'Sufficient knowledge of Objective-C , HTML5, JSON '
                    },
                    profile: {
                        point01: 'Analytical skills',
                        point02: 'Collegial and flexible',
                        point03: 'Sense of responsibility and immune to stress',
                        point04: 'Support our goals by visibly enjoying your work',
                        point05: 'Prepared to share your knowledge with your colleagues'
                    },
                    offer: {
                        point01: 'A salary conform to the market with good employment conditions',
                        point02: 'An inspiring international working environment',
                        point03: 'Plenty of possibilities for personal development within, as well as beyond your field of study'
                    }
                },

                businessConsultant: {
                    title: 'Business Consultant',
                    intro: 'For the extension of our sales team, we are looking for a Business Consultant. This function gives the responsibility of attracting new business and relationship management with customers. You are a figurehead of ASK Community Systems B.V. and you are not afraid of any commercial challenges.',
                    knowledge: {
                        point01: 'Completed HBO / university education in technical field of study (like Computer Technology, Information Technology or Business Administration)',
                        point02: 'Minimum 3 years of experience in similar function',
                        point03: 'Demonstrable successful commercial experience'
                    },
                    profile: {
                        point01: 'You are enterprising and take initiative',
                        point02: 'You are independent, show ownership and enjoy working in a team',
                        point03: 'A good networker',
                        point04: 'Communicative skills in word and writing',
                        point05: 'Excellent English oral and writing skills ',
                        point06: 'Able to make ASK services your own in short-term',
                        point07: 'Preferably living in region of Rotterdam'
                    },
                    offer: {
                        point01: 'A salary conform to the market with good employment conditions',
                        point02: 'A company with potential',
                        point03: 'An inspiring international working environment',
                        point04: 'Plenty of possibilities for personal development within, as well as beyond your field of study'
                    }
                },


                internshipTitle:'Internships',
                internshipTitle02:'Internship:',
                challengeTitle: 'The challenge',
                weSeekTitle: 'We seek',

                internshipClouds: {
                    title:'Carry out research into clouds',
                    challengeDescription01: 'ASK frequently uses multi-agent technology in its solutions. Two of our most important systems use this technology: the ASK Back-End for realtime coordination and exchange of information, and ASK-Fast, a platform for realtime communication between different parties.',
                    challengeDescription02: 'Both platforms are active in the cloud (mainly Google App Engine), causing unlimited scalability. In order to make solid decisions about our cloud-based applications in the future, we would like to gain knowledge about other cloud solutions.',
                    weSeekDescription01: 'That is why we are looking for an intern who is willing to carry out extensive comparative research into the different cloud platforms that are currently on the market. It will be a combination of a literature review and practical experiments, making it possible to measure the pros and cons of the different cloud platforms.'
                },

                internshipPersonalAlarm: {
                    title:'Personal alarm system',
                    challengeDescription01: 'As an innovation project, ASK started the development of the Alarm app, a system where people can alarm other people in case of an emergency. Multiple types of emergencies can be imagined, varying from someone with health-care related issues (heart failure, epileptic attack, diabetes, etc) or more into the safety and security area, where lone workers would require assistance or lonely travellers are confronted with a violent situation.',
                    challengeDescription02: 'The system is composed of an app, both for victims and helpers and a back-end with intelligence to alarm the right people and pass information on the situation to the appropriate people. So far 2 experiments have been done, one with a healthcare scenario and one with a security scenario, resulting into a demonstrator back-end and 2 demonstrator apps.',
                    weSeekDescription01: 'ASK is looking for talented students to take the demonstrators to a next level and start the production of a system based upon the lessons learned so far.'
                },

                internshipP2000Alarm: {
                    title:'P2000 alarm system',
                    challengeDescription01: '',
                    challengeDescription02: '',
                    weSeekDescription01: ''
                },

                internshipLearningSoftwareAgent: {
                    title:'Learning agent on multi-modal communication',
                    challengeDescription01: 'The ASK-Fast platform enables users to communicate via multi-modal communication channels, including voice telephony, SMS, Email, in-app messages etc. These channels can be used to set-up one or simultaneous dialogues.',
                    challengeDescription02: 'One of the systems using the multi-modal communication of the ASK-Fast platform is the JoinUs system, a system aiming to support recruiters in the flex-market to poll many flex-workers in parallel for their availability on a certain job. Each of these flex-workers can be contacted via one or multiple media, depending on their preference or the most effective type of communication.',
                    challengeDescription03: 'In order to use the optimal mixture of preference and effectiveness, a learning agent is foreseen. This agent would combine static knowledge on the different communication media with user efficiency for the specific users.',
                    weSeekDescription01: 'ASK is offering a graduation project to develop the learning agent on multi-modal communication. This development should be preceded by research on effectiveness of different communication media.'
                },

                internshipTeamup: {
                    title: 'TeamUp in practice in different context',
                    challengeDescription01: 'ASK has developed an availability/reachability system that allows users to set their availability for certain tasks at different  time periods. One of the applications of such a system is redirecting the main phone number of an SME to people who are set available.',
                    challengeDescription02: 'In case no one is set available in the system, an automatic phone call will be made by the system to recruit available personnel for answering inbound phone calls.',
                    weSeekDescription01: 'Setting availability in the current system is done via a web GUI and an inbound telephony IVR. ASK would like to renovate this system with our new agent platform - Eve. In this platform, personal software agents can be built to connect desktop sensors, smartphone sensors, and digital calendars to automatically determine user availability, therefore making the availability system smart and context-aware.'
                },

                workAt: {
                    title: 'Work at ASK',
                    description01: 'ASK Community Systems is an international software firm based in the Netherlands. ASK Community Systems focuses on the areas where information management and communication meet. The intelligent systems we create support human processes by utilizing software agent technology.',
                    description02: 'Are you a motivated and passionate person? And willing to offer help to others? Do you enjoy working with other professionals in a casual, yet performance-oriented, working atmosphere? We invite you to look at our vacancies and apply.'
                }
            },


            cases: {
                problemTitle: 'Problem situation:',
                goalsTitle: 'Goals:',
                solutionTitle: 'Solution:',
                quanResultsTitle: 'Qualitative results:',
                qualResultsTitle: 'Quantitative Results:',

                postnl: {
                    title:'PostNL',
                    factsTitle: 'ASK at PostNL in numbers:',
                    fact01:'Sorting centres in the Netherlands',
                    fact02:'Flexworkers in the system',
                    fact03: 'Communication actions per month (phone/sms)',
                    problem: {
                        point01: 'Inefficient planning due to inaccurate relation between earlier-made schedule and actual demand;',
                        point02: 'Surplus of employees and temporary workers;',
                        point03: 'Desire to keep regular staff and reducing amount of temporary hours.'
                    },
                    goals: {
                        point01: 'Making schedules based on individual preferences of employees; ',
                        point02: 'A better relation between fluctuating workload and actual personnel deployment;',
                        point03: 'More rapid response to illness and absence.'
                    },
                    solution: {
                        description01: 'PostNL, in agreement with the works council, has chosen for ASK\'s solution, because this is in line with their CSR-goals (Corporate Social Responsibility).',
                        description02:'The schedules will be generated based on the availability of the employees, which they will indicate themselves. The final planning will be communicated to the flexworkers via e-mail or sms.'
                    },
                    qualResults: {
                        point01:'Amount of temporary hours is reduced;',
                        point02:'No cutbacks in regular staff;',
                        point03:'More continuity because regular staff is used more often;',
                        point04:'Personnel is motivated because work and private life are more in tune.'
                    },
                    quanResults: {
                        fact01: 'Cost reduction due to savings',
                        fact02: 'Omission reduction (from 11% to 6%)',
                        fact03: 'Total savings in 3 years'
                    }
                },

                knrm: {
                    title:'KNRM',
                    factsTitle: 'ASK at KNRM in numbers:',
                    fact01:'Rescue-stations use ASK',
                    fact02:'Rescue workers are supported',
                    problem: {
                        point01: 'A lot of unnecessary call ups;',
                        point02: 'Not always enough people available;',
                        point03: 'Not much flexibility for volunteer rescuers.'
                    },
                    goals: {
                        point01: 'Controling function: make clear if there are enough people;',
                        point02: 'Supporting coordinators;',
                        point03: 'Facilitate scheduling for volunteers.'
                    },
                    solution: {
                        description01: 'By using ASK, more than 1300 rescue workers at the 46 stations are filling in their availability online through the planboard. The coordinator keeps an overview on the joint schedule of his/her location. ASK automatically fills gaps in the schedule by gauging the availability by telephone.'
                    },
                    qualResults: {
                        point01:'Volunteering for KNRM is easier to combine with work/private life;',
                        point02:'ASK guards the permanence degree (= always having enough people available);',
                        point03:'The skippers are unburdened, because they will only be notified when there is a shortage.'
                    }
                },

                bz: {
                    title:'Buurtzorg',
                    factsTitle: 'Buurtzorg in numbers:',
                    fact01:'People maximum per self-managing team',
                    fact02:'Locations in the Netherlands',
                    problem: {
                        point01: 'A lot of time is lost by travelling to the office in order to consult client-details in the computer;',
                        point02: 'Communication between colleagues is poorly facilitated.'
                    },
                    goals: {
                        point01: 'Give nurses access to a user-friendly mobile application;',
                        point02: 'This application should support nurses in taking care of clients by giving them access to relevant information on the spot.'
                    },
                    solution: {
                        description01: 'ASK Community Systems has, together with Ecare Services, developed the Buurtzorg App. This app allows employees to go through the latest reports while travelling to the client. It shapes the mobile support for nurses.',
                        description02:'At the same time, the Buurtzorg App makes sure there are shorter lines: no more people sitting behind desks, but performers who also have the talents to think and use modern technology.'
                    },
                    qualResults: {
                        description01:'With the Buurtzorg App nurses can:',
                        point01:'See Basic data concerning clients;',
                        point02:'See Reports related to clients; ',
                        point03:'Capture and forward the amount of time spent with a client; ',
                        point04:'Contact clients or colleagues.'
                    }
                },

                olympia: {
                    title:'Olympia',
                    factsTitle: 'Olympia in numbers:',
                    fact01:'Registered temporary workers',
                    fact02:'Communication actions per quarter (telephone/sms)',
                    problem: {
                        point01: 'Limited productivity of consultants accross all branches;',
                        point02: 'Consultants spend too much time on repeating communication actions;',
                        point03: 'Consultants need more time for personal contact when necessary.'
                    },
                    goals: {
                        point01: 'Optimize core processes by automating repetitive and time-consuming telephone conversations;',
                        point02: 'Make time available for personal contact between consultant and client;',
                        point03: 'Establish a database with temporary workers that can be deployed immediately.'
                    },
                    solution: {
                        description01: 'Olympia Temporary Work Agency used ASK to support its consultants.',
                        description02: 'When a job vacancy has to be filled, the consultant manually selects a group of suitable temporary workers. The consultant either records an audio message, or writes a text containing vital information about the job. ASK delivers this message to the selected temporary workers and directly collects the respones via telephone, sms or e-mail.',
                        description03: 'The job can be placed and tracked online. This means that the consultant is not required to be in the same country as the candidates and the effective working time is expanded (up to 24/7). The system keeps approaching candidates, even when the consultant is not at his/her desk.'
                    },
                    qualResults: {
                        point01:'Daily operations are more efficient and flexible;',
                        point02:'A better situation in terms of competition;',
                        point03:'A job as consultant is more attractive, because ASK takes over the boring and repetitive tasks.'
                    },
                    quanResults: {
                        fact01: 'Succesfull assignments',
                        fact02: 'Income',
                        fact03: 'Communication costs'
                    }
                }
            }
        },





        /*----------GERMAN--------*/

        de: {
            general: {
                readMore: 'Mehr erfahren',
                cookieMessage: 'Wir verwenden Cookies um unsere Anwender besser kennenzulernen. Wenn Sie unsere Webseite verwenden, akzeptieren Sie unsere',
                cookieMessageLink: 'Datenschutzbestimmungen'
            },
            menu: {
                company: 'Unternehmen',
                cases: 'Referenzen'
            },


            home: {
                scenario: {
                    titleSlide1: 'Häufig Mitarbeitermangel?',
                    titleSlide2: 'Mit ASK bestimmen Mitarbeiter selbst über ihre Verfügbarkeit.',
                    titleSlide3: 'Bei Bedarf sucht ASK automatisch nach einem Mitarbeiter.',
                    titleSlide4: 'Auf diese Weise haben Sie immer ausreichend Mitarbeiter.'
                },
                products: {
                    title:'Produkte',
                    standby: 'Im Voraus einsehen können, wer verfügbar ist, anstatt erst, nachdem der Alarm ausgelöst wurde. Online-Pläne und Alarmempfänger liefern hierfür nur eine Notlösung. Deswegen hat ASK Standby entwickelt.',
                    teamup:  'ASK ist wegweisend für IT unterstützte Dienste. Ihre Mitarbeiter sollten so wenig, wie möglich mit Verwaltungsaufgaben belastet werden, um sich der Qualität der Dienstleistung widmen zu können.',
                    joinus: 'Flexibler Personaleinsatz bedeuted: Aquirieren, Verfügbarkeit kontrollieren, Planen und Einsetzen. Joinus ist eine App, mit der sämtliche Informationen rund um die flexible Arbeit schnell ausgetauscht werden.'
                },
                casesPreview: {
                    title: 'Referenzen',
                    postnl: 'ASK unterstützt die Niederländische Post in der flexiblen Personalplanung. ASK orientiert sich dabei an der benötigten Kapazität und individuellen Wünschen unter Berücksichtigung von Gesetzgebung und arbeitsrechtlichen Aspekten.',
                    knrm01: 'ASK sorgt bei der KNRM dafür, dass immer ausreichend Rettungskräfte in der Umgebung erreichbar sind, um im Notfall eingesetzt werden zu können.',
                    knrm02: 'Rettungskräfte können über PC, Smartphone oder Telefon selbst angeben, wann Sie in Bereitschaft stehen können und wann Sie einen freien Tag wünschen.',
                    bz01: 'Die Nachbarschaftshilfe hat mit zur Entwicklung von TeamUp beigetragen.',
                    bz02: 'Über die Smartphone App erleichtert ASK interne Abstimmung und Kommunikation. Auf diese Weise muss weniger geregelt und kann mehr getan werden.',
                    olympia: 'ASK hat Olympia dabei unterstützt, freie Stellen Zeitarbeitern anzubieten und hat direkt Feedback der Kandidaten per Smartphone, Telefon und Email eingeholt.'
                }
            },


            company: {
                pressure: {
                    title: 'Minimaler Verwaltungsaufwand',
                    description01: 'ASK ist spezialisiert auf die Entwicklung von Anwendungen, welche dies ermöglichen. Ihre Mitarbeiter können mit ASK die Planung intern abstimmen. Dabei haben sie jederzeit die relevanten Informationen zur Hand, um die Arbeit effizienter zu gestalten.',
                    description02: 'Die ASK Apps machen die Kommunikation über die Verfügbarkeit einfach. Sie kann auch automatisch erfolgen, indem die App bei Bedarf selbstständig verfügbare Personen kontaktiert. Das entlastet Ihre Mitarbeiter und erhöht deren Motivation.',
                    description03: 'ASK Apps erleichtern den Informationsaustausch im internen Netzwerk Ihrer Mitarbeiter, sodass sie kontinuierlich miteinander in Verbindung stehen. Das garantiert Flexibilität und schnelles Reagieren auf last-minute Situationen.',
                    description04: 'ASK Community Systems arbeitet seit mehr als 10 Jahren an intelligenter Software. Die entwickelten Apps erleichtern die Kommunikation zwischen Menschen. Hierfür nutzt ASK das zwischen den Menschen bestehende Netzwerk. Die Apps sind stets multi-device: sie funktionieren über den eigenen PC, Smartphone oder Tablet.'
                },
                howWork: {
                    title: 'Wie funktioniert ASK?',
                    description01: 'Die herkömmliche Planung basiert auf umfangreichen, teils veralterten Informationen. Sie verwendet eine Momentaufnahme... ASK-Software dagegen funktioniert in Echtzeit: Die Informationen, die verwendet werden, sind veränderlich und stets aktuell. Dadurch wird zu jedem Zeitpunkt ein optimale Planung möglich.',
                    description02: 'Neben Echtzeitinformationen verwendet ASK nur die wirklich relevanten Informationen, sodass man sich schnell auf kurzfristig eintretende Änderungen einstellen kann. ASK liefert das, was benötigt wird direkt.'
                },
                personalNetwork: {
                    title: 'Persönliches Netzwerk',
                    description: 'ASK ist Teil einer Gruppe von High-Tech-Unternehmen: die Almende Gruppe. Durch enge Kooperationen ist ASK immer an vorderster Stelle in der Technologie.'
                }
            },


            jobs: {
                title:'Vacatures',
                knowledgeTitle: 'Gewenste kennis en ervaring:',
                profileTitle: 'Jouw profiel:',
                offerTitle: 'Wij bieden jou:',
                contactTitle: 'Interesse?',
                contactDescription01: 'Neem contact op met Carolyn Hoek:',

                iosdev: {
                    title:'iOS Developer',
                    intro: 'ASK Community Systems B.V. is voor een aantal projecten op zoek naar ervaren iOS Developers. Het gaat hierbij om de ontwikkeling van innovatieve iPhone en iPad applicaties. Je streeft samen met het team naar het beste resultaat.',
                    knowledge: {
                        point01: 'HBO denk- en werkniveau',
                        point02: 'Minimaal 2 jaar aantoonbare ervaring met iOS app development',
                        point03: 'Uitgebreide kennis van iOS SDK en Xcode',
                        point04: 'Goede kennis van Objective-C , HTML5, JSON'
                    },
                    profile: {
                        point01: 'Analytische vaardigheden',
                        point02: 'Collegiaal en flexibel',
                        point03: 'Verantwoordelijkheidsgevoel en stressbestendigheid',
                        point04: 'Onze doelstelling onderschrijven door plezier te hebben in je werk en dat uit te stralen',
                        point05: 'Bereid zijn jouw kennis met je collega\'s te delen'
                    },
                    offer: {
                        point01: 'Een marktconform salaris met aantrekkelijke arbeidsvoorwaarden;',
                        point02: 'Een inspirerende internationale werkomgeving;',
                        point03: 'Ruime mogelijkheden om jezelf op je vakgebied en daarbuiten te blijven ontwikkelen.'
                    }
                },

                businessConsultant: {
                    title: 'Business Consultant',
                    intro: 'Ter uitbreiding van ons salesteam, zijn wij op zoek naar een Business Consultant. In deze functie ben je verantwoordelijk voor het binnenhalen van new business en het relatiebeheer met klanten. Je bent het boegbeeld van ASK Community Systems B.V. en gaat geen enkele commerciële uitdaging uit de weg.',
                    knowledge: {
                        point01: 'Afgeronde HBO / universitaire opleiding op technisch gebied (zoals Computertechnologie, Informatietechnologie of Bedrijfskunde)',
                        point02: 'Minimaal 3 jaar ervaring in een soortgelijke functie',
                        point03: 'Aantoonbaar succesvolle commerciële werkervaring'
                    },
                    profile: {
                        point01: 'Je bent ondernemend en neemt initiatief',
                        point02: 'Je bent zelfstandig, toont ownership en werkt graag in teamverband',
                        point03: 'Een goede netwerker',
                        point04: 'Communicatief vaardig in woord en geschrift',
                        point05: 'Uitstekende mondelinge en schriftelijke kennis van het Engels',
                        point06: 'In staat om je op korte termijn het dienstenaanbod van ASK eigen te maken',
                        point07:'Bij voorkeur woonachtig in regio Rotterdam'
                    },
                    offer: {
                        point01: 'Een marktconform salaris met aantrekkelijke arbeidsvoorwaarden;',
                        point02: 'Bedrijf met potentie;',
                        point03: 'Een inspirerende internationale werkomgeving;',
                        point04: 'Ruime mogelijkheden om jezelf op je vakgebied en daarbuiten te blijven ontwikkelen.'
                    }
                },


                internshipTitle:'Stages',
                internshipTitle02:'Stage:',
                challengeTitle: 'De uitdaging',
                weSeekTitle: 'Wie we zoeken',

                internshipClouds: {
                    title:'Onderzoek naar clouds',
                    challengeDescription01: 'ASK maakt veelvuldig gebruik van multi-agenttechnologie in haar oplossingen. Twee van onze belangrijkste systemen maken gebruik van deze technologie: de ASK Back-End voor realtime coördinatie en informatie-uitwisseling, en ASK-Fast, een platform voor realtime communicatie tussen verschillende partijen. ',
                    challengeDescription02: 'Beide platforms draaien in de cloud (voornamelijk Google App Engine), waardoor ze onbeperkt schaalbaar zijn. Om ook in de toekomst goede beslissingen te kunnen nemen over onze applicaties in de cloud, willen we graag meer weten over andere cloud oplossingen. ',
                    weSeekDescription01: 'We zoeken daarom een stagiair die een uitgebreid vergelijkend onderzoek wil doen naar de verschillende cloudplatforms die op dit moment op de markt zijn. Het gaat daarbij om zowel een literatuurstudie als praktische experimenten waarbij de voors en tegens van de verschillende cloud platforms tegen elkaar kunnen worden afgewogen. '
                },

                internshipPersonalAlarm: {
                    title:'Personal alarm system',
                    challengeDescription01: 'ASK werkt op dit moment aan de Alarm app: een innovatief systeem dat de juiste mensen alarmeert in geval van nood. Deze app kan gebruikt worden door bijvoorbeeld patiënten met epilepsie, diabetes of hartproblemen, mobiele beveiligers, medewerkers die in hun eentje op een gevaarlijke plek moeten werken, reizigers die worden geconfronteerd met geweld, enz. ',
                    challengeDescription02: 'De applicatie bestaat uit een app (te gebruiken door slachtoffers én helpers) en een intelligente back-end. De back-end zorgt dat de meest geschikte persoon wordt gealarmeerd en dat de juiste informatie snel bij de juiste persoon terecht komt. De Alarm app is getest in twee experimentele situaties, namelijk binnen Zorg en binnen Veiligheid. ',
                    weSeekDescription01: 'ASK-CS zoekt een stagiair die wil helpen deze pilotversie om te zetten naar een market ready systeem.'
                },

                internshipP2000Alarm: {
                    title:'P2000 alarm system',
                    challengeDescription01: '',
                    challengeDescription02: '',
                    weSeekDescription01: ''
                },

                internshipLearningSoftwareAgent: {
                    title:'Een lerende software-agent voor multi-modale communicatie',
                    challengeDescription01: 'Het ASK-Fast platform stelt gebruikers in staat om met verschillende partijen te communiceren via verschillende kanalen. Denk aan telefonie, SMS, Email, IM, in-app berichten, enz. Op deze manier kunnen één of meerdere dialogen worden opgezet.',
                    challengeDescription02: 'Eén van de systemen die gebruik maken van ASK-Fast is JoinUs, een systeem dat recruiters helpt om veel flex-medewerkers tegelijk te polsen over hun beschikbaarheid voor een bepaalde taak. Elke flex-medewerker wordt afhankelijk van zijn/haar voorkeuren via één of meerdere kanalen aangesproken. ',
                    challengeDescription03: 'Om tot een optimale mix van communicatiekanalen te komen, willen we een lerende software-agent ontwikkelen. Deze agent combineert de statische kennis over de verschillende communicatiekanalen, met de gebruikerspecifieke voorkeuren. ',
                    weSeekDescription01: 'We zijn op zoek naar een afstudeerder die ons wil helpen bij het ontwikkelen van deze lerende software-agent. Onderdeel van de afstudeerstage is een onderzoek naar de effectiviteit van de verschillende communicatiekanalen. De resultaten van dit onderzoek worden gebruikt als input voor de agent. '
                },

                internshipTeamup: {
                    title:'TeamUp in de praktijk',
                    challengeDescription01: 'Voor de zorgsector ontwikkelt ASK de oplossing TeamUp. Deze applicatie helpt teams van zorgverleners (zoals thuiszorgmedewerkers) om samen te werken met hun teamgenoten. Ze kunnen bijvoorbeeld elkaars status opvragen, ondersteuning vragen, of op locatie informatie over hun patiënten opzoeken.',
                    challengeDescription02: 'ASK wil de TeamUp applicatie nu ook inzetten in andere domeinen, zoals sportteams, mantelzorgers, enz.',
                    weSeekDescription01: 'We zoeken een stagiair die voor ons wil onderzoeken hoe TeamUp kan worden ingezet in dergelijke domeinen en welke toegevoegde waarde de applicatie kan hebben.'
                },

                workAt: {
                    title: 'Werken bij ASK',
                    description01: 'ASK Community Systems is een internationaal opererende softwareleverancier van Nederlandse bodem. ' +
                        'ASK Community Systems richt zich op het vlak waar informatiemanagement en communicatie elkaar raken.' +
                        'De intelligente systemen die wij maken ondersteunen menselijke processen door gebruik te maken van software-agenttechnologie.',
                    description02: 'Ben je gemotiveerd en gepassioneerd met je werk bezig? En bereid om iets extra\'s te geven voor de klant? ' +
                        'Werk je graag met andere professionals in een informele doch prestatiegerichte werksfeer? ' +
                        'Dan nodigen we je graag uit onze vacatures te bekijken en te solliciteren.'
                }
            },


            cases: {
                problemTitle: 'Problemstellungen:',
                goalsTitle: 'Zielstellungen:',
                solutionTitle: 'Lösung:',
                quanResultsTitle: 'Qualitative Ergebnisse:',
                qualResultsTitle: 'Quantitative Ergebnisse:',

                postnl: {
                    title:'die Niederländische Post',
                    factsTitle: 'ASK bei der Niederländischen Post in Zahlen:',
                    fact01:'Sortierzentren in den Niederlanden',
                    fact02:'Flexible Arbeitskräfte im System',
                    fact03: 'Kommunikationshandlungen pro Monat (Tel/SMS)',
                    problem: {
                        point01: 'Ineffiziente Planung infolge Abweichungen der Vorausplanung von dem tatsächlichen Bedarf;',
                        point02: 'Überschuss an Mitarbeitern und Zeitarbeitern;',
                        point03: 'Feste Mitarbeiter binden und Zeitarbeit vermeiden.'
                    },
                    goals: {
                        point01: 'Planung unter Berücksichtigung individueller Wünsche der Mitaberbeiter;',
                        point02: 'Verhältnis zwischen wechselndem Arbeitsaufwand und tatsächlichem Mitarbeitereinsatz optimieren;',
                        point03: 'schnelleres Reagieren auf Krankheit und Abwesenheit.'
                    },
                    solution: {
                        description01: 'Die Niederländische Post hat sich in Abstimmung mit dem Betriebsrat für ASK als Lösung entschieden, weil ASK optimal zu ihren Zielstellungen passt.',
                        description02: 'Die Einplanung von Postsortierkräften erfolgt fortan auf Basis der Verfügbarkeit der Mitarbeiter, die von ihnen selbst online angegeben wird. Die entgültige Planung wird per Email oder SMS den flexiblen Mitarbeitern mitgeteilt.'
                    },
                    qualResults: {
                        point01:'die Anzahl Überstunden wurde reduziert;',
                        point02:'keine Kündigungen von Festangestellten;',
                        point03:'Kontinuität, da mehr feste Arbeitskräfte zum Einsatz kommen;',
                        point04:'die Mitarbeitermotivation ist gestiegen, da Privatleben und Arbeit besser aufeinander abgestimmt sind.'
                    },
                    quanResults: {
                        fact01: 'Vollzeitarbeitsplätze eingespart',
                        fact02: 'weniger Ausfälle (von 11% auf 6%)',
                        fact03: 'Ersparnis in 3 Jahren'
                    }
                },

                knrm: {
                    title:'der KNRM',
                    factsTitle: 'ASK bei der KNRM in Zahlen:',
                    fact01:'Rettungsstationen verwenden ASK',
                    fact02:'Rettungskräfte werden unterstützt',
                    problem: {
                        point01: 'häufig unnötiges Abrufen;',
                        point02: 'nicht immer ausreichend Menschen verfügbar;',
                        point03: 'wenig Flexibilität für die Freiwilligen'
                    },
                    goals: {
                        point01: 'Übersicht, ob ausreichend Menschen verfügbar sind;',
                        point02: 'Unterstützung der Koordinatoren;',
                        point03: 'Erleichterung der Einplanung von Freiwilligen'
                    },
                    solution: {
                        description01: 'Mit ASK geben die mehr als 1300 Rettungskräfte der 46 Stationen ihre Verfügbarkeit online ins Planboard ein. Der Koordinator erhält eine Übersicht über die Personalverfügbarkeit in seinem Standort. ASK schließt automatisch Lücken im Bereitsschaftdienst durch Erfragen der Verfügbarkeit übers Telefon.'
                    },
                    qualResults: {
                        point01:'Ehrenamtliche Tätigkeit für den KNRM ist leichter mit Arbeits- und Privatleben zu vereinbaren',
                        point02:'ASK sorgt für Beständigkeit (jederzeit ausreichend Retter verfügbar zu haben);',
                        point03:'die Skipper werden entlastet, da sie nur bei Personalmangel gerufen werden.'
                    }
                },

                bz: {
                    title:'Nachbarschaftshilfe',
                    factsTitle: 'Nachbarschaftshilfe in Zahlen:',
                    fact01:'Personen max. pro Team',
                    fact02:'Niederlassungen in den Niederlanden',
                    problem: {
                        point01: 'hoher Zeitverlust durch Anfahrtszeiten zum Büro, um Kundendaten elektronisch einzugeben;',
                        point02: 'Kommunikation zwischen Kollegen ist ungenügend.'
                    },
                    goals: {
                        point01: 'Krankenpfleger sollen Zugang zu einer benutzerfreundlichen mobilen System haben',
                        point02: 'Dieses System soll ihnen jederorts Zugang zu relevanten Patienten/ Kundeninformationen bieten und damit die Pflege optimal unterstützen.'
                    },
                    solution: {
                        description01: 'ASK Community Systems hat zusammen mit Ecare Services die Nachbarschaftshilfe App entwickelt. Diese App ermöglicht den Mitarbeitern auf dem Weg zum Kunden die letzten Berichte durchgehen zu können. Es bildet eine mobile Unterstützung der ambulanten Pflege.',
                        description02:'Gleichzeitig verkürzt die Nachbarschaftshilfe App Verwaltungswege: weniger Leute müssen hinterm Bildschirm sitzen, die Pflegekräfte können mitunter verborgende Talente entdecken und die moderne Technologie optimal nutzen.'
                    },
                    qualResults: {
                        description01:'Mit der Nachbarschaftshilfe App können Pfleger:',
                        point01:'Basisdaten zu den Kunden/ Patienten einsehen;',
                        point02:'Berichte bezüglich des Patienten einsehen und erstellen;',
                        point03:'Zeitschreibung bezogen auf die Versorgung des Patienten vornehmen;',
                        point04:'Kontakt mit Kunden oder Mitarbeitern herstellen.'
                    }
                },

                olympia: {
                    title:'Olympia',
                    factsTitle: 'ASK bei Olympia in Zahlen:',
                    fact01:'Registrierte Zeitarbeitskräfte',
                    fact02:'Kommunikationshandlungen pro Quartal (Tel./ SMS)',
                    problem: {
                        point01: 'Eingeschränkte Produktivität von Disponenten, die alle Branchen betrifft;',
                        point02: 'Disponenten verbringen zu viel Zeit mit sich wiederholenden Kommunikationsaufgaben;',
                        point03: 'Disponenten haben zu wenig Zeit für persönliche Kontakte mit den Stellenanwärtern.'
                    },
                    goals: {
                        point01: 'Kernprozesse optimieren durch Automatisieren von sich wiederholenden, zeitraubenden Telefonaten;',
                        point02: 'Zeit gewinnen für perönlichen Kontakt zwischen Disponenten und Kunden;',
                        point03: 'Etablierung einer Datenbank von Zeitarbeitern, aus der die Einsatzmöglichkeiten sofort ersichtlich sind.'
                    },
                    solution: {
                        description01: 'Das Olympia Zeitarbeitsbüro verwendet ASK, um seine Disponenten zu unterstützen.',
                        description02: ' Wenn eine Stelle zu besetzen ist, wählt der Disponent manuell eine Gruppe geeigneter Zeitarbeiter aus. Der Disponent nimmt entweder eine Sprachnachricht auf oder schreibt einen Text mit den wesentlichen Informationen zu der Stelle. ASK sendet diese Nachricht zu den ausgewählten Zeitarbeitern und holt direkt Feedback per Telefon, SMS oder Email ein.',
                        description03: 'Die Stelle kann online gestellt werden und die Besetzung verfolgt werden. Das bedeutet, dass der Disponent nicht notwendigerweise sich in demselben Land wie der Zeitarbeiter aufhalten muss und weiterhin, dass die Arbeitszeit erweitert wird ( bis 24/7). Das System kann Kandidaten auch außerhalb der Bürozeiten des Disponenten erreichen.'
                    },
                    qualResults: {
                        point01: ' Das Tagesgeschäft ist effizienter und flexibler;',
                        point02: 'die Wettbewerbsfähigkeit hat sich erhöht;',
                        point03: 'die Tätigkeit als Disponent ist attraktiver geworden, weil ASK langwierige und sich wiederholende Aufgaben übernimmt.'
                    },
                    quanResults: {
                        fact01: 'mehr Vermittlungen',
                        fact02: 'Erlöse',
                        fact03: 'Reduzierung der Kommunikationskosten'
                    }
                }
            }
        }








    }).
    run(['$rootScope', 'locals', function ($rootScope, locals) {

        if (!localStorage.getItem('selectedLanguage')) {
            localStorage.setItem('selectedLanguage', 'nl');
        }

        $rootScope.showLangMenu = false;

//        $rootScope.toggleLangMenu = function ()
//        {
//            $rootScope.showLangMenu = !$rootScope.showLangMenu;
//
//            // angular.element('.languageToggle').addClass('displayBlock');
//        };

        $rootScope.languages = ['de', 'en', 'nl'];

        var toggled = true;

        $rootScope.changeLang = function (lang)
        {
            $(".languageToggle li a").html(lang);

            if ($rootScope.lang == lang) {
                $('#languageMenu')
                    .removeClass('rotateInDownLeft')
                    .addClass('animated rotateOutUpLeft');
            }

            $rootScope.ui = locals[lang];

            $rootScope.lang = lang;

            localStorage.setItem('selectedLanguage', lang);

            toggled = !toggled;

            toggleOut();
        };

        $rootScope.changeLang(localStorage.getItem('selectedLanguage'));

        $(".languageToggle li a").click(function () {
            if (toggled)
            {
                toggleOut();
            }
            else
            {
                $('#languageMenu')
                    .removeClass('hide rotateOutUpLeft')
                    .addClass('animated rotateInDownLeft');
            }

            toggled = !toggled;
        });

        function toggleOut ()
        {
            $('#languageMenu')
                .removeClass('rotateInDownLeft')
                .addClass('animated rotateOutUpLeft');
        }

    }]);