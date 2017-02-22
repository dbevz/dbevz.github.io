/*
  keycode:
  up arrow - 38
  down arrow - 40
  alt - 18
  d - 68
  a - 65
  q - 81

  .E34WKG5Q - блок сообщения
*/
var deleteButtonClass = '._3dXMsHMT34_iTDaHnUYXuC';
var cardClass = '.BnhNRlVOS12DbWb48C-pt';
var readButtonClass = '._1e36yah_heWHc6SboIWHVV';
var selectButtonClass = '._3dXMsHMT34_iTDaHnUYXuC';
var doneButtonClass = '._3dXMsHMT34_iTDaHnUYXuC';

var elem = new Object();
var index = 0;
//elem.querySelectorAll = document.querySelectorAll;
//var globalButton = new Object();
/*
globalButton.selectAll = function() {
  var button = $('')[];
  $(button).click();
}

globalButton.tonality = function() {
  var button = $('')[];
  $(button).click();
}

globalButton.delete = function() {
  var button = $('')[];
  $(button).click();
}

globalButton.delete = function() {
  var button = $('')[];
  $(button).click();
}
*/
elem.val = $(cardClass)[index];
$(elem.val).toggleClass('active-card');

elem.next = function() {
  if (index != $(cardClass).length - 1) {
    $(elem.val).toggleClass('active-card');
    index++;

    var newElem = $(cardClass)[index];
    $(newElem).toggleClass('active-card');

    elem.val = newElem;
  }
};

elem.prev = function() {
  if (index != 0) {
    $(elem.val).toggleClass('active-card');
    index--;

    var newElem = $(cardClass)[index];
    $(newElem).toggleClass('active-card');

    elem.val = newElem;
  }
};

elem.done = function() {
  var doneButton = elem.val.querySelectorAll(doneButtonClass)[10];
  
  $(elem.val).toggleClass('active-card');
  doneButton.click();
  
  if (index == $(cardClass).length - 1) {
    index--;
    elem.val = $(cardClass)[index];
    $(elem.val).toggleClass('active-card');
  } else {
    index++;
    elem.val = $(cardClass)[index];
    index--;
    $(elem.val).toggleClass('active-card');
  }
}

elem.delete = function() {
  var deleteButton = elem.val.querySelectorAll(deleteButtonClass)[4];

  $(elem.val).toggleClass('active-card');
  deleteButton.click();

  if (index == $(cardClass).length - 1) {
    index--;
    elem.val = $(cardClass)[index];
    $(elem.val).toggleClass('active-card');
  } else {
    index++;
    elem.val = $(cardClass)[index];
    index--;
    $(elem.val).toggleClass('active-card');
  }
};

elem.read = function() {
  var readButton = elem.val.querySelector(readButtonClass);
  readButton.click();
};

elem.select = function() {
  var selectButton = elem.val.querySelectorAll(selectButtonClass)[6];
  selectButton.click();
};

document.onkeydown = function(e) {
  if ((e.keyCode == 38)) {
    elem.prev();
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(elem.val).offset().top - 130
    }, 100);
    
  }
  if ((e.keyCode == 40)) {
    elem.next();
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(elem.val).offset().top - 130
    }, 100);
    
  }
  if ((e.altKey && e.keyCode == 'W'.charCodeAt(0))) {
    elem.done();
    e.preventDefault();
  }
  if ((e.altKey && e.keyCode == 'R'.charCodeAt(0))) {
    elem.read();
    e.preventDefault();
  }  
  if ((e.altKey && e.keyCode == 'D'.charCodeAt(0))) {
    elem.delete();
    e.preventDefault();
  }
  if ((e.altKey && e.keyCode == 'Q'.charCodeAt(0))) {
    elem.select();
    e.preventDefault();
  }
  if (e.altKey) {
    e.preventDefault();
  }
};

document.onclick = function(e) {
  var target = e.target;
  while (target != document) {
    if ($(target).hasClass('BnhNRlVOS12DbWb48C-pt')) {
      $(elem.val).toggleClass('active-card');
      elem.val = target;
      var tmp = document.querySelectorAll(cardClass);
      tmp.indexOf = [].indexOf;
      index = tmp.indexOf(elem.val);

      $(elem.val).toggleClass('active-card');
      $('html, body').animate({
        scrollTop: $(elem.val).offset().top - 130
      }, 100);
      return;
    }
    target = target.parentNode;
  }

  e.preventDefault();
};

$('<a class="script-text" href="#">СКРИПТ ЗАПУЩЕН</a>').appendTo($('._2Ozsepij7_ONbqCzb9Vrki')[0]);

var s = `.active-card {\
  box-shadow: 0 0 1px rgba(139, 195, 74, 1),\
  0 2px 5px rgba(139, 195, 74, 1),\
  0 -2px 5px rgba(139, 195, 74, 1),\
  2px 0 5px rgba(139, 195, 74, 1),\
  -2px 0 5px rgba(139, 195, 74, 1)\ 
}\
\
.intercom-launcher-frame {\
  display: none;\
}\
\.script-text {
\ text-decoration: none;
\ color: #fff;
\ font-weight: bold;
\ margin-left: 350px;
\}`;

$('style').last().html(s);
