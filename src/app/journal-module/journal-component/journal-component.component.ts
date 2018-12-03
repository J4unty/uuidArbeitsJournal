import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-component',
  templateUrl: './journal-component.component.html',
  styleUrls: ['./journal-component.component.css']
})
export class JournalComponentComponent implements OnInit {

  private owner = {
    name: 'Philipp Muggli',
    avatar: ''
  };

  public data: Object = {
    title: 'UUID Journal',
    content: [
      {
        title: 'Block #1',
        content: [
          {
            title: 'AEIOU',
            author: this.owner.name,
            avatar: this.owner.avatar,
            content: [
              {
                type: 'text',
                content: 'Die AEIOU Methode dient zur einfachen usability Analyse. Sie dient auch dazu das man sich rasch einen Überblick verschaffen kann, der schon eine präsentierbare Struktur hat.'
              },
              {
                type: 'list',
                content: [
                  {
                    type: 'text',
                    content: 'Activities Was machen die Personen? Was ist ihre Aufgabe? Welche Aktivitäten führen sie aus?'
                  },
                  {
                    type: 'text',
                    content: 'Environment In was für einem Umfeld arbeiten die Benutzer? Was für Räumlichkeiten, wie laut, was passiert sonst noch?'
                  },
                  {
                    type: 'text',
                    content: 'Interaction Wie agieren die Benutzer mit dem System? Wie kommunizieren die Systeme untereinander, welche Schnittstellen? Wie werden andere Produkte bedient?'
                  },
                  {
                    type: 'text',
                    content: 'Objects Was für gegenstände werden benutzt? Wer und in welchem Umfeld werden diese Benutzt?'
                  },
                  {
                    type: 'text',
                    content: 'User Wer sind die Benutzer? Wer sind die unterschiedlichen Benutzer, welche rollen haben diese Benutzer? Durch was werden Sie beeinflusst?'
                  }
                ]
              }
            ]
          },
          {
            title: 'AEIOU zu SBB Ticket Automaten',
            author: this.owner.name,
            avatar: this.owner.avatar,
            content: [
              {
                type: 'text',
                content: 'Analyse zu Video von Giaccobo Müller.'
              },
              {
                type: 'list',
                content: [
                  {
                    type: 'text',
                    content: 'Activities Person möchte nach Hause.'
                  },
                  {
                    type: 'text',
                    content: 'Environment Es ist laut, die Situation ist stressig.'
                  },
                  {
                    type: 'text',
                    content: 'Interaction Interagiert mit einem Touchpad.'
                  },
                  {
                    type: 'text',
                    content: 'Objects Billetautomaten von der SBB.'
                  },
                  {
                    type: 'text',
                    content: 'User Benutzer offensichtlich Frustriert mit dem Automaten.'
                  }
                ]
              }
            ]
          },
          {
            title: 'Heuristische Analyse der ZHAW School of Engineering',
            author: this.owner.name,
            avatar: this.owner.avatar,
            content: [
              {
                type: 'text',
                content: 'Wir haben die App in ein paar punkten Zusammengefasst:'
              },
              {
                type: 'list',
                content: [
                  {
                    type: 'text',
                    content: 'Die App ist auf Android und IOS nicht gleich aufgebaut.'
                  },
                  {
                    type: 'text',
                    content: 'Die App erlaubt das Stalken von irgendwelchen Personen.'
                  },
                  {
                    type: 'text',
                    content: 'Die App hat nicht unnötige Funktionen (Fahrplan)'
                  }
                ]
              }
            ]
          },
          {
            title: 'Nutzerbefragung',
            author: this.owner.name,
            avatar: this.owner.avatar,
            content: [
              {
                type: 'text',
                content: 'Fragenkatalog der unsere Gruppe benützte.'
              },
              {
                type: 'list',
                content: [
                  {
                    type: 'text',
                    content: 'An welche Benutzergruppe soll sich die App richten?'
                  },
                  {
                    type: 'text',
                    content: 'Welche Funktionen dürfen in der Applikation auf keinen Fall fehlen?'
                  },
                  {
                    type: 'text',
                    content: 'Welche Funktionen können getrost weggelassen werden?'
                  },
                  {
                    type: 'text',
                    content: 'Welche Funktionen wären "nice to have"?'
                  },
                  {
                    type: 'text',
                    content: 'Auf welchen Plattformen soll die App laufen?'
                  },
                  {
                    type: 'text',
                    content: 'Soll es auch eine optimierte Version für Tablets geben?'
                  }
                ]
              },
              {
                type: 'text',
                content: 'Zusammenfassung der Antworten:'
              },
              {
                type: 'list',
                content: [
                  {
                    type: 'text',
                    content: 'Mitarbeitende/Dozierende, Studierende, Besucher'
                  },
                  {
                    type: 'text',
                    content: 'Karte, Menü der Mensa, Personen'
                  },
                  {
                    type: 'text',
                    content: 'Fahrpläne (SBB App...), unabhängige Notfallnummern (generelles Wissen)'
                  },
                  {
                    type: 'text',
                    content: 'Diverse Antworten: Zeugnisse/Dokumente, interaktive Navigation'
                  },
                  {
                    type: 'text',
                    content: 'IOS und Android'
                  },
                  {
                    type: 'text',
                    content: 'Gespaltene Antworten dafür/dagegen.'
                  }
                ]
              }
            ]
          }
        ]
      }, /*,
      {
        title: 'learning day 01',
        content: [
          {
            title: 'Lecture One',
            author: this.owner.name,
            avatar: '',
            content: [
              {
                type: 'text',
                // tslint:disable-next-line:max-line-length
                content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
              },
              {
                type: 'images',
                content: [
                  '/assets/images/DSC_0211-EFFECTS.jpg',
                  '/assets/images/DSC_0417-EFFECTS.jpg',
                  '/assets/images/DSC_0433-EFFECTS.jpg'
                ]
              },
              {
                type: 'list',
                content: [
                  {
                    type: 'text',
                    content: 'Lorem ipsum doler sit amat more effing text'
                  },
                  {
                    type: 'text',
                    content: 'More efing text so whatever this should be'
                  }
                ]
              }
            ]
          }
        ]
      }*/
  {
    title: 'Block #2',
    content: [
      {
        title: 'Personas',
        author: this.owner.name,
        avatar: this.owner.avatar,
        content: [
          {
            type: 'text',
            content: 'Das Persona dient dazu dass man schnell einen Sponsor User genau spezifizieren und beschreiben kann, in meinem Fall ist das der Student Sandro'
          },
          {
            type: 'list',
            content: [
              {
                type: 'text',
                content: 'Name: Sandro'
              },
              {
                type: 'text',
                content: 'Alter: 23 Jahre'
              },
              {
                type: 'text',
                content: 'Zitat: "Wann ist der nächste Test?"'
              }
            ]
          },
          {
            type: 'text',
            content: 'Beschreibung: Als Student bin ich immer am die optimalen Lösungen suchen für meinen studiums Alltag. Dazu gehört zum Beispiel, die nächsten Tests wo sich diese Befinden und wichtig auch welches Menue heute in der Mensa angeboten wird.'
          }
        ]
      }, 
      {
        title: 'UX Mapping',
        author: this.owner.name,
        avatar: this.owner.avatar,
        content: [
          {
            type: 'text',
            content: 'Pain Points der Aktuellen Lösung'
          },
          {
            type: 'list',
            content: [
              {
                type: 'text',
                content: 'Suchen das aktuellen Zimmers sehr müsahm'
              },
              {
                type: 'text',
                content: 'Suchen der aktuellen Testes unmöglich'
              },
              {
                type: 'text',
                content: 'Umständliches suchen des Zimmers'
              }
            ]
          },
          {
            type: 'text',
            content: 'Verbesserungen der neuen App'
          },
          {
            type: 'list',
            content: [
              {
                type: 'text',
                content: 'Alles an einem Platz'
              },
              {
                type: 'text',
                content: 'Einfache übersicht über das Wetter'
              },
              {
                type: 'text',
                content: 'Einfache übersicht über kommende Tests'
              }
            ]
          }
        ]
      },
      {
        title: 'Design Studio',
        author: this.owner.name,
        avatar: this.owner.avatar,
        content: [
          {
            type: 'text',
            content: 'Hier habe ich mal die Idee als Wireframe skiziert:'
          },
          {
            type: 'images',
            content: [
              '/assets/images/wireframes.png'
            ]
          }
        ]
      },
      {
        title: 'Design Guidliens',
        author: this.owner.name,
        avatar: this.owner.avatar,
        content: [
          {
            type: 'text',
            content: 'Als Guidelines werden die Standart Guidelines der jehweiligen Platform genommen. Um mehr uniform mit anderen Apps aufzutreten.'
          }
        ]
      },
      {
        title: 'Gestaltungsgeseze',
        author: this.owner.name,
        avatar: this.owner.avatar,
        content: [
          {
            type: 'text',
            content: 'Folgende Regeln auf die Geachtet werden soll:'
          },
          {
            type: 'list',
            content: [
              {
                type: 'text',
                content: 'Ähnlichkeit: ähnliche Elemente werden als zusammengehörig wahrgenommen.'
              },
              {
                type: 'text',
                content: 'Nähe: auch nahe Elemente werden als zusammenghörig wahrgenommen.'
              },
              {
                type: 'text',
                content: 'Prägnanz: ein Element kann Farblich oder formlich von anderen Elementen hervorgehoben werden um es wichtiger zu machen.'
              },
              {
                type: 'text',
                content: 'Geschlossenheit: Elemente können in einer Abgeschlossenen Box gruppiert werden.'
              },
              {
                type: 'text',
                content: 'Kontinuität: Elemente brechen nicht die Desgin guidlines der App/Vendors.'
              },
              {
                type: 'text',
                content: 'Gemeinsames Schicksahl: Anliche Elemente machen etwas Ähnliches.'
              },
              {
                type: 'text',
                content: 'Gemeinsame Regionen: Regionen vom Screen sehen uniform aus.'
              },
              {
                type: 'text',
                content: 'Verbundenheit: Elemente sind klar miteinander Verbunden.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Block #3',
    content: [
      {
        title: 'Card Sorting',
        author: this.owner.name,
        avatar: this.owner.avatar,
        content: [
          {
            type: 'text',
            content: 'Feature nächste Tests'
          },
          {
            type: 'list',
            content: [
              {
                type: 'text',
                content: 'Anzeigen des Raumes'
              },
              {
                type: 'text',
                content: 'Anzeigen des Stoffes'
              },
              {
                type: 'text',
                content: 'Wann der Test statfindet'
              },
              {
                type: 'text',
                content: 'Welche besonderen Bestimmungen sind gesetzt?'
              }
            ]
          },
          {
            type: 'text',
            content: 'Feature nächste Lektion'
          },
          {
            type: 'list',
            content: [
              {
                type: 'text',
                content: 'Anzeigen des Raumes'
              },
              {
                type: 'text',
                content: 'Wann sie statfindet'
              },
              {
                type: 'text',
                content: 'Anwesenheitspflicht?'
              }
            ]
          },
          {
            type: 'text',
            content: 'Feature Mensa'
          },
          {
            type: 'list',
            content: [
              {
                type: 'text',
                content: 'Anzeigen der Menues'
              },
              {
                type: 'text',
                content: 'Anzeigen des Preises'
              }
            ]
          }
        ]
      },
      {
        title: 'Wireframes / Flowchart',
        author: this.owner.name,
        avatar: this.owner.avatar,
        content: [
          {
            type: 'text',
            content: 'Die Wireframes sind hier dargestellt:'
          },
          {
            type: 'images',
            content: [
              '/assets/images/wireframes.png'
            ]
          }
        ]
      },
      {
        title: 'Design Progress Board',
        author: this.owner.name,
        avatar: this.owner.avatar,
        content: [
          {
            type: 'text',
            content: 'Als Vorlage wurde das Design Board vom FHNW coperate Design genommen.'
          }
        ]
      },
      {
        title: 'Mockups / Testing',
        author: this.owner.name,
        avatar: this.owner.avatar,
        content: [
          {
            type: 'text',
            content: 'Als Prototyping tool wurde Adobe XD verwendet, der link zum Mockup ist hier:'
          },
          {
            type: 'link',
            content: 'https://xd.adobe.com/view/c2a53ea9-b9ae-4d69-6330-72a9c8fc4c0e-b494/'
          }
        ]
      }
    ]
  }]};
  constructor() { }

  ngOnInit() {
  }
}
