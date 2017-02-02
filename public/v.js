    var newMentions = [];
    var newComments = [];
  function main() {
    var days = parseInt( prompt('За сколько дней нужны упоминания?') );

    var checkDate = new Date(new Date() - days * 24 * 60 * 60 * 1000);

    function toNormalDate(customDate) {
      var monthJSON = {
        'января': '0',
        'февраля': '1',
        'марта': '2',
        'апреля': '3',
        'мая': '4',
        'июня': '5',
        'июля': '6',
        'августа': '7',
        'сентября': '8',
        'октября': '9',
        'ноября': '10',
        'декабря': '11'
      };

      var date = customDate.split(" ");
      date = new Date(+date[2], +monthJSON[ date[1] ], +date[0]);

      if (date.toString() == "Invalid Date") {

        date = new Date();
      }; // Исключение сегодняшний день + !возможно! вчерашний

      return date;
    }

    for (var k = 0; k < data.length; k++) {
      for (var j = 0; j < data[k].words.length; j++) {
      
      var url = getMentionsUrl( data[k].words[j] );
      var xhr = new XMLHttpRequest();

      xhr.open('GET', url, false);
      xhr.send();

      var elem = document.createElement('div');
      elem.innerHTML = xhr.responseText;

      var publications = elem.querySelectorAll('.concilium_item');
      
      for (var i = 0; i < publications.length; i++) {
        var date = publications[i].querySelector('.article_details li').innerText;
        var mentionDate = toNormalDate(date);
        if (mentionDate > checkDate) {
          data[k].newMentions.push(publications[i]);
          console.log( data[k].words[j] );
        } else {
          break;
        }
      }
      var url = getCommentsUrl((data[k].words[j]));
      var xhr2 = new XMLHttpRequest();

      xhr.open('GET', url, false);
      xhr.send();

      var elem = document.createElement('div');
      elem.innerHTML = xhr.responseText;

      var comments = elem.querySelectorAll('.concilium_item');

      for (var i = 0; i < comments.length; i++) {
        var date = comments[i].querySelector(".m_t_10 span").innerText;
        var mentionDate = toNormalDate(date);

        if (mentionDate > checkDate) {
          data[k].newComments.push(comments[i]);
        } else {
          break;
        }
      }
    }
    }

    alert('Обработка завершена');
  }

  var data = [
    {
      theme: "Дистрибьюторы",
      words: ["Катрен", "Протек", "Ориола", "Хелскеа", '"ЗАО Пульс"', '"ооо Пульс"', '"фарма Пульс"', '"фармацевтическая Пульс"',
              '"фармацевтического Пульс"', '"компания Пульс"', '"Фармдистрибьютор Пульс"', '"дистрибьютор Пульс"',
              '"Healthcare Пульс"', '"аптека Пульс"', "Фармперспектива", "Профитмед", "Фармдистрибьютор", '"СИА Интернейшнл"',
              "Фармкомплект", '"ФК Роста"', '"ЗАО Роста"', "Oriola" ],
      newMentions: [],
      newComments: []
    },
    {
      theme: "Компани",
      words: ["Нижфарм", "Хемофарм", "STADACIS", "STADAAG", "Штада", "STADA", "Grunenthal", "Грюненталь", "Груненталь"],
      newMentions: [],
      newComments: []
    },
    {
      theme: "Мужское здоровье",
      words: ["АНДРОДОЗ", "ВИТАПРОСТ", "Нейродоз", "вуку", "нефрадоз", "простадоз"],
      newMentions: [],
      newComments: []
    },
    {
      theme: "Неврология",
      words: ["Версатис", "Залдиар", "Мексиприм", "Меморель", "Суплазин", "Тагиста", "трамал", "трамадол", "амлотоп", "омарон"],
      newMentions: [],
      newComments: []
    },
    {
      theme: "Ост фарма",
      words: ["Алказа", "алломедин", "гепатромбин", "грипостад", "гриппостад", "Йогулакт", "камистад", "натальсид", "проктозан", "тромблесс",
              "хондроксид", "хондротек", "снуп"],
      newMentions: [],
      newComments: []
    },
    {
      theme: "Педиатрия",
      words: ["Аквалор", "Дпантенол", "Депантенол", "депантол", "исмиген", "Ладиваль", "омнитус", "бактистатин", "хелинорм", "эрмиталь",
                  "эслидин", "бебиджекс", "левомеколь", "левомиколь", "левосин", "суперджекс", "триджекс", "цитроджекс", 
                  "эссливер", "эспол", "юниджекс", '"Белый уголь"'],
      newMentions: [],
      newComments: []
    },
    {
      theme: "Персоны",
      words: ['"Ефимов Д.В"', '"Кулаковский А.К"', '"Глушков И.А"', '"Емцева О.Е"', '"Чибиляев Т.Х"', '"Сиземова Л.Е"',
              '"Комоцкий С.В"', '"Дьяченко С.В"', '"Баранов М.В"'],
      newMentions: [],
      newComments: []
    },
    {
      theme: "Терапия",
      words: ["Бипрол", "Бисопролол", "Бисостад", "Кардионат", "Лавомакс", "Панклаво", "Хемомицин", "Энзикс", "проктозан", "проктазан"],
      newMentions: [],
      newComments: []
    },
    {
      theme: "Инсульт",
      words: ["Инсульт"],
      newMentions: [],
      newComments: []
    },
    {
      theme: "Нейротоксичность",
      words: ["Нейротоксичность"],
      newMentions: [],
      newComments: []
    },
    {
      theme: "Полинейропатия",
      words: ["Полинейропатия"],
      newMentions: [],
      newComments: []
    },
    {
      theme: "Реамберин",
      words: ["Реамберин"],
      newMentions: [],
      newComments: []
    },
    {
      theme: "Ремаксол",
      words: ["Ремаксол"],
      newMentions: [],
      newComments: []
    },
    {
      theme: "Циклоферон",
      words: ["Циклоферон"],
      newMentions: [],
      newComments: []
    },
    {
      theme: "Цитофлавин",
      words: ["Цитофлавин"],
      newMentions: [],
      newComments: []
    }
  ];

  function createPage() {
    document.head.innerHTML = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">';
    document.body.innerHTML = '<div class="container"></div>';
  }

  function template(header, content) {
    return '<div class="row">\
              <div class="col s12">\
                <div class="card">\
                  <div class="card-content">\
                    <span class="card-title">' + header + '</span>\
                    <p>' + content + '</p>\
                  </div>\
                </div>\
              </div>\
            </div>';
  }

  function createCard(template) {
      var elem = document.createElement('div');
      elem.innerHTML = template;
      document.querySelector('.container').appendChild(elem);
  }

  function getMentionsUrl(query) {
    return 'https://vrachirf.ru/search?query=' + query + '&sortByDate=True';
  }

  function getCommentsUrl(query) {
    return 'https://vrachirf.ru/search-comment?query=' + query + '&sortByDate=True';
  }

  function render() {
    var h1 = document.createElement('h1');
    h1.classList = "center-align";
    h1.innerHTML = "Новые публикации";
    document.querySelector('.container').appendChild(h1);
    for (var k = 0; k < data.length; k++) {
      if (data[k].newMentions.length != 0) {
        var h3 = document.createElement('h3');
        h3.innerHTML = data[k].theme;
        document.querySelector('.container').appendChild(h3);
        for (var i = 0; i < data[k].newMentions.length; i++) {
          createCard( template(data[k].newMentions[i].querySelector('h4').innerHTML, data[k].newMentions[i].querySelector('.article_text').innerText) );
        }
      }
    }

    var hb = document.createElement('h1');
    hb.classList = "center-align";
    hb.innerHTML = "Новые комментарии";
    document.querySelector('.container').appendChild(hb);
    for (var k = 0; k < data.length; k++) {
      if (data[k].newComments.length != 0) {
        var h3 = document.createElement('h3');
        h3.innerHTML = data[k].theme;
        document.querySelector('.container').appendChild(h3);
        for (var i = 0; i < data[k].newComments.length; i++) {
          createCard( template(data[k].newComments[i].querySelector('h4').innerHTML, data[k].newComments[i].querySelector('.com_text').innerText) );
        }
      }
    }
  }

  main();
  createPage();
  render();
