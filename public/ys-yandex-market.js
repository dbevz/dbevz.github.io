var getReviews = function(id) {
  var url = 'https://market.yandex.ru/product/' + id + '/reviews?hid=90490&sort_by=date';
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);
  xhr.send();
  var respone = xhr.responseText;
  var html = document.createElement('div');
  html.innerHTML = respone;
  
  header = html.querySelectorAll('.link.n-smart-link.i-bem')[1].innerText;
  header = '<h1><a href="' + url + '">' + header + '</a></h1>';
  console.log(header + " - Просканировано");
  headerTmp = header;
  var reviews = html.querySelectorAll('.product-review-item.product-review-item_collapsed_yes.js-review');

  for (var i = 0; i < reviews.length; i++) {
    var elem = reviews[i];
    //var marketDate = elem.querySelector();
    
    var date = elem.querySelector('.product-review-item__footer.layout.layout_display_table > .layout__col').innerText;
    var marketDate = getDateObjectFromMarket(date);
    if ( compareDate(userDate, marketDate) ) break;

    var author = elem.querySelector('.product-review-user__name').innerText;
    var rating = elem.querySelector('.rating.hint.i-bem.rating_size_m.rating_border_yes').innerText;
    var contentArray = elem.querySelectorAll('dl');
    var content = '';

    for (var j = 0; j < contentArray.length; j++) {
      content += contentArray[j].innerText + "\n";
    }

    author = "<h2>" + author + "</h2>";
    rating = "<h3>Оценка: " + rating + "     Опубликовано: " + marketDate.day + "." + (marketDate.month + 1) + "." + marketDate.year + "</h3>";
    content = "<p>" + content + "</p><br />";
    header = header + author + rating + content;
  }
    if (headerTmp == header) header = "";
  //console.log(header);
}

var getDateObjectFromUser = function() {
  var date = new Date();
  var date = prompt("Введите дату", date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear());

  date = date.split('.');
  objDate = new Object();
  objDate.day = +date[0];
  objDate.month = +date[1] - 1;
  objDate.year = +date[2];

  return objDate;
};

var getDateObjectFromMarket = function(str) {
  var objDate = new Object();
  var marketDate = str.split(",");
  marketDate = marketDate[0].split(" ");

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

  objDate.day = +marketDate[0];
  objDate.month = +monthJSON[ marketDate[1] ];
  objDate.year = +marketDate[2];
  if ( isNaN(objDate.year) ) objDate.year = (new Date()).getFullYear();
  return objDate;
};


var compareDate = function(userDate, marketDate) {
  if (userDate.year <= marketDate.year &&
      userDate.month <= marketDate.month && 
      userDate.day <= marketDate.day) return false;
  return true;
}






//var url = 'https://market.yandex.ru/product/' + id + '/reviews?hid=90490&sort_by=date';


var id = ['10452984', '8356258', '7914484', '5070699', '7879850', '10731581', '8471093', '5070643', '7700227', '6474769',
          '12832998', '13439283', '11004372', '8471098', '6984531', '5070719', '5070632', '5070721', '6161432', '5070641',
          '5070630', '13485933', '5070722', '5070693', '6299243', '9338314', '5070644', '5070686', '5070628', '10768656', 
          '5070640', '9338278', '5070624', '5070599', '5070639', '5070588', '5070654', '5070598', '5070669', '5070668',
          '5070622', '5070619', '5070661', '5070647', '5070648', '5070616', '6425569', '5070606', '5070617', '6936664',
          '5070649', '5070637', '5070607', '5070633', '6846092', '5070593', '5070689', '5070592', '5070706', '5070614',
          '6938418', '5070618', '5070603', '5070694', '5070621', '5070629', '5070646', '5070702', '5070613', '5070587',
          '5070608', '14141779', '5070645', '5070635', '5070590', '6412700', '5070602', '5070620', '5070690',
          '5070698', '5070708', '5070697', '5070612', '10667013', '5070597', '5070723', '7290450', '5070701', '6936640',
          '5070716', '5070595', '5070688', '10666890', '14006488', '5070695', '5070713', '5070600', '5070591', '10663663',
          '6938270', '5070631', '5070609', '13828562', '5070610', '6938347', '6514601', '5070720', '7282565', '5070717',
          '5070615', '5070586', '14002118', '5070703', '7281605', '7073337', '5070611', '7290178', '5070623', '5070691',
          '10378066', '13439509', '13441983', '5070709', '6425584', '5070696', '5070718', '5070707', '13828561', '5070634',
          '7919631', '5070604', '5070704', '5070589', '6174327', '5070710', '7290467'];

document.body.innerHTML = '<div id="main"></div><style>h1{text-align: center}</style>'
var userDate = getDateObjectFromUser();
for (var i = 0; i < id.length; i++) {
  var rev = document.createElement('div');
  var header = "";
  getReviews(id[i]);
  rev.innerHTML = header;
  document.querySelector('#main').appendChild(rev);
}

alert("Сбор данных заверщен!");
