var vers = "v 2.0";
var baseQuery = "http://crm.viasat.ua/crm/ajaxservlet?perform=submitData&params=DPG";

function getXmlHttp() {
  var xmlhttp;
  
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  
  if (!xmlhttp && typeof XMLHttpRequest != 'undefined') xmlhttp = new XMLHttpRequest();
  
  return xmlhttp;
}
//####################################################################################################################//

//Моя менюшечка
function mymenu() {
 //Цвет ячеек:
 var col1 = "#FFFFE0";
 //Цвет рамочки:
 var col2 = "#6C4C69";
 //Цвет заливки при наведении:
 var col3 = "#00FF00";
  $("body").after("\
    <table  border=0px id=\"mytablejs\">\
      <tbody>\
        <tr>\
          <td class='mystylecsstd'><a>" + vers + "</a></td>\
          <td style=\"zoom: 1%;\"><input id=\"slafindhelper\" style=\"width:1px;\" type=\"text\" size=\"1\"></td>\
          <td class='mystylecsstd'><a onclick=\"onholdposteddelete(\'delete\')\">Delete</a></td>\
          <td class='mystylecsstd'>\
            <ul id=\"listochek1\" class='listochek'>\
              <li><a>Дополнительно</a></li>\
              <ul id=\"addnewsub1\" class='addnewsub'>\
                <li><a  onclick=\"startuatvnull(200)\">UATV-200</a></li>\
                <li><a  onclick=\"startuatvnull(400)\">UATV-400</a></li>\
                <li><a  onclick=\"uatvtest(\'1901020000\', \'1901029999\')\">UATV_TEST</a></li>\
                <li><a  onclick=\"spisper(prompt(\'Списать с\'), prompt(\'Списать по\'))\">С-по ... ...</a></li>\
                <li><a  onclick=\"rastrvrab(\'0\')\">РО в работу на " + dates(0) + "</a></li>\
                <li><a  onclick=\"rastrvrab(\'1\')\">РО в работу на ...</a></li>\
                <li><a  onclick=\"closeper(\'1\')\">П-O/W/U в андер на ...</a></li>\
                <li><a  onclick=\"closeper(\'2\')\">П-O/W/U в андер на " + dates(0) + "</a></li>\
                <li><a  onclick=\"fromtw()\">TWIN 1</a></li>\
                <li><a  onclick=\"totw()\">TWIN 2</a></li>\
              </ul>\
            </ul>\
          </td>\
          <td class='mystylecsstd'>\
            <ul id=\"listochek2\" class='listochek'>\
              <li><a>Инструменты</a></li>\
              <ul id=\"addnewsub2\" class='addnewsub'>\
                <li><a  onclick=\"addchengesla()\">AddGo</a></li>\
                <li><a  onclick=\"redakttransoct(0)\">с...</a></li>\
                <li><a  onclick=\"redakttranslastact()\">C на моментa активации</a></li>\
                <li><a  onclick=\"redakttranslastactos()\">C на момента активации полед. 2</a></li>\
                <li><a  onclick=\"deactfirst()\">Деакт. первую активную подписку</a></li>\
                <li><a  onclick=\"readktsla()\">Редакт. дат в договоре</a></li>\
                <li><a  onclick=\"readktactdate()\">Редакт. дат в задании</a></li>\
                <li><a  onclick=\"readktopenact()\">Открыть задание</a></li>\
                <li><a  onclick=\"pererclos()\">Закрытых перерасчетов сегодня</a></li>\
                <li><a  onclick=\"statb(prompt('Комментарий'))\">Создать и закрыть перерасчет</a></li>\
                <li><a  onclick=\"ExecutewithNo('vali')\">Execute with No Validations</a></li>\
                <li><a  onclick=\"totfinakslascalc(((prompt('Сюда вставить номера договоров сразу из Excel')).split(' ')), 1)\">Количество финаккаунтов в договорах</a></li>\
              </ul>\
            </ul>\
          </td>\
          <td class='mystylecsstd'><a onclick=\"opennext(1)\">NEXT</a><input class=\"helper\" id=\"gonexthelper\" type=\"checkbox\"></td>\
          <td><input id=\"myfindsla\" style=\"zoom: 70%;\" type=\"text\" size=\"10\"></td>\
          <td class='mystylecsstd'>\
            <ul id=\"listochek3\" class='listochek'>\
              <li><a>PSA<input class=\"helper\" id=\"rejhelper\" type=\"checkbox\"></a></li>\
              <ul id=\"addnewsub3\" class='addnewsub'>\
                <li><a  onclick=\"performsubscriptionaction(\'activation\')\">Activation</a></li>\
                <li><a  onclick=\"performsubscriptionaction(\'deactivation+\')\">Deactivation+</a></li>\
                <li><a  onclick=\"performsubscriptionaction(\'deactivation-\')\">Deactivation-</a></li>\
                <li><a  onclick=\"performsubscriptionaction(\'recrnds\')\">Recreate NDS</a></li>\
                <li><a  onclick=\"performsubscriptionaction(\'reautnds\')\">Reauthorise All Services</a></li>\
                <li><a  onclick=\"performsubscriptionaction(\'reminstitm\')\">Remove Installed Item</a></li>\
                <li><a  onclick=\"performsubscriptionaction(\'swapinstitm\')\">Swap Installed Item</a></li>\
                <li><a  onclick=\"performsubscriptionaction(\'addinstinm\')\">Add Installed Item</a></li>\
                <li><a  onclick=\"performsubscriptionaction(\'cancellsheld\')\">Cancel scheduled action</a></li>\
                <li><a  onclick=\"performsubscriptionaction(\'applyTrialService\')\">Apply Trial Service</a></li>\
                <li><a  onclick=\"performsubscriptionaction(\'vtvact\')\">VTVActivation </a></li>\
                <li><a  onclick=\"performsubscriptionaction(\'cansmaintwin\')\">Cancel Main/Twin</a></li>\
              </ul>\
            </ul>\
          </td>\
          <td id=\"liptdt\" class=\"mystylecsstd\" style=\"zoom: 70%;\"><a>>>></a></td>\
          <td id=\"koziavka\" class=\"mystylecsstd\"><a onclick=\"leadicloshelper()\">LEAD</a></td>\
          <td id=\"koziavka2\" class=\"mystylecsstd\"><a onclick=\"leadicloshelperclose()\">CLOSE</a></td>\
          <td id=\"koziavka2\" class=\"mystylecsstd\"><a onclick=\"forledservanalizer(1)\">LDI</a></td>\
          <td id=\"koziavka2\" class=\"mystylecsstd\"><a onclick=\"forledservanalizer(2)\">LDI_2</a></td>\
          <td class='mystylecsstd'>\
            <ul id=\"listochek4\" class='listochek'>\
              <li><a>COM<input class=\"helper\" id=\"dicorejhelper\" type=\"checkbox\"></a></li>\
              <ul id=\"addnewsub4\" class='addnewsub'>\
                <li><a  onclick=\"necomaddwcat(\'5B8DF15177B408BB014F9F0732386318\')\">30%</a></li>\
                <li><a  onclick=\"necomaddwcat(\'62D83642FC54005B9F44891F6AF49841\')\">50%</a></li>\
                <li><a  onclick=\"necomaddwcat(\'4DAA0DB85DF52D6A5BEC76D4B8AAE2DC\')\">100%</a></li>\
              </ul>\
            </ul>\
          </td>\
        </tr>\
      </tbody>\
      <table  border=0px id=\"pepeascomment\" style=\"position: fixed; left: 0px; top: 14px; background:" + col2 + "; zoom: 125%; z-index:999994;\">\
        <tbody>\
          <tr id=\"hidehere\" ><td bgcolor=#C0FF3E id=\"clearhere\" style=\"font-family:\'Garamond\';\"></td></tr>\
        </tbody>\
      </table>\
    </table>\
    <div id=\"svertishi\"></div>\
    <style type='text/css'>\
    </style>\
  ");

  reqq("http://domianjik.pp.ua/public/v-styles.css").then(function(response) {$("link").remove();$("style").first().html(response)});
  obrabot(col1, col2, col3);
  finfun();
  dt();
  setInterval(function() {
    $("input[type=button]").first().click();
  }, 600000);
}

function excelinput(step) {
  if (step==1){
$('body').children().last().after(' \
<div style="display: block; top: 126px; position: absolute; width:100%">\
<div style=" display:  flex; justify-content: center;">\
<table style="background-color: #6cfb00;"><tbody>\
<tr>\
<td style="background-color: #d09a4c;"><a onclick="excelinput(2)" style="cursor: pointer;">Parse</a></td>\
<td style="background-color: #d09a4c;"><a onclick="$(this).parent().parent().parent().parent().parent().parent().remove()" style="cursor: pointer;">Cansel</a></td>\
<td style="background-color: #d09a4c;"><a onclick="excelinput(3)" style="cursor: pointer;">Go</a></td>\
</tr>\
</tbody></table><br>\
</div>\
<div style=" display:  flex; justify-content: center;">\
<textarea id="excelinputhere" style="margin: 0px; width: 122px; height: 54px;"></textarea></div>\
</div>');

} else if (step==2) {
  allrows=$("#excelinputhere").val().split('\n');
  $("#excelinputhere").css('display', 'none');
  rowslength=allrows.length;
  colslength=allrows[0].split("	").length;
innerexin='';
for(to = 0; to < rowslength; to++){
corcol='';
for(ti = 0; ti < colslength; ti++){
tempoval='';
tempoval='<td style="background-color: #c9d5f7;">'+allrows[to].split("	")[ti]+'</td>';
corcol=corcol+tempoval;
}
innerexin=innerexin + '<tr><td>' + to + '</td>'+corcol+'</tr>';
}
addtable='<div style=" display:  flex; justify-content: center;"><table id="excelinhere" style="background-color: #6cfb00;"><tbody>'+innerexin+'</tbody></table><br></div>';
$("#excelinputhere").parent().after(addtable);

$('#excelinputhere').val('');
index_all=-1;
index_lednum=-1;
index_corstatus=-1;
index_newstatus=-1;
index_newcomment=-1;
index_addcategor=-1;
//Ищем колонки:
shapochka = $('#excelinhere').children().children().first().children();
for(to = 0; to < shapochka.length; to++){
if ( $(shapochka[to]).text() == "0") {
  index_all=to;
  $(shapochka[to]).css('background-color', '#ffa500');
} else if ( $(shapochka[to]).text() == "NUMBER") {
  index_lednum=to;
  $(shapochka[to]).css('background-color', '#ffa500');
} else if ( $(shapochka[to]).text() == "STATUS") {
  index_corstatus=to;
  $(shapochka[to]).css('background-color', '#ffa500');
} else if ( $(shapochka[to]).text() == "Установить статус") {
  index_newstatus=to;
  $(shapochka[to]).css('background-color', '#ffa500');
} else if ( $(shapochka[to]).text() == "прописать комментарий") {
  index_newcomment=to;
  $(shapochka[to]).css('background-color', '#ffa500');
} else if ( $(shapochka[to]).text() == "добавить категорию") {
  index_addcategor=to;
  $(shapochka[to]).css('background-color', '#ffa500');
} 
}
strochechki = $('#excelinhere').children().children();

//*****************Проверяем статусы

//Список статусов и их индексы + категории  и их индексы
oppnewtogetstat = req('http://crm.viasat.ua/crm/oppDetail.do?act=new&fc=create&jndi=ejb/CRMBOOpportunity');
dpgi = Number((oppnewtogetstat.slice(oppnewtogetstat.indexOf('DPG')+3, oppnewtogetstat.indexOf('DPG')+8)).match(/\d+/));
req('http://crm.viasat.ua/crm/ajaxservlet?perform=submitData&params=DPG' + dpgi + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22opptemplates%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Opptemplates%22,%22value%22:%22D71A48DC5756C9CFC6135F408D1801F8%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]');

//категории
categoriki=req('http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG' + dpgi + '|null|treesearch|Add_Category|true:true:Categories:Add_Category|0&function=&databinding=&obj=[object%20HTMLDivElement]');
categorikiallsplit = categoriki.split('<span style="cursor:pointer;"  >').slice(1);
caterosplit=[];
for(to = 0; to < categorikiallsplit.length; to++){
caterosplit.push((categorikiallsplit[to].split("chldrn")[0].split(' (')[0]).toUpperCase()+"sgt"+categorikiallsplit[to].split("chldrn")[0].split("id='")[1]);
}
caterosplit=caterosplit.join('sgt').split('sgt');

//статусы
statusikiall = req('http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG' + dpgi + '|null|main&function=&databinding=&obj=main_DPG' + dpgi);
statusikiallin = statusikiall.slice(statusikiall.indexOf('_Status_'), statusikiall.indexOf('_Statuschangereasons_')+8);
statusikiallinsplit=statusikiallin.split('option  value="').slice(1);
statomassik=[];
for(to = 0; to < statusikiallinsplit.length; to++){
statomassik.push((statusikiallinsplit[to].replace('selected', '').split(' (')[0].split('" >')[1]).toUpperCase()+"sgt"+statusikiallinsplit[to].replace('selected', '').split(' (')[0].split('" >')[0]);
}
statomassik = statomassik.join('sgt').split('sgt');


for(to = 1; to < (strochechki.length-1); to++){
  
//текуйщий статус
if (statomassik.indexOf(($($(strochechki[to]).children()[index_corstatus]).text()).toUpperCase())>=0){
  $($(strochechki[to]).children()[index_corstatus]).attr('paramid', statomassik[statomassik.indexOf(($($(strochechki[to]).children()[index_corstatus]).text()).toUpperCase())+1]);
} else {
  $($(strochechki[to]).children()[index_corstatus]).css('background-color', '#fb0000');
  $(shapochka[index_corstatus]).css('background-color', '#fb0000');
}

//Новый статус
if (statomassik.indexOf(($($(strochechki[to]).children()[index_newstatus]).text()).toUpperCase())>=0){
  $($(strochechki[to]).children()[index_newstatus]).attr('paramid', statomassik[statomassik.indexOf(($($(strochechki[to]).children()[index_newstatus]).text()).toUpperCase())+1]);
} else {
  $($(strochechki[to]).children()[index_newstatus]).css('background-color', '#fb0000');
  $(shapochka[index_newstatus]).css('background-color', '#fb0000');
}

//категории
if($($(strochechki[to]).children()[index_addcategor]).text()!==''){
if (caterosplit.indexOf(($($(strochechki[to]).children()[index_addcategor]).text().replace("Оборудование заработало", "оборуд.заработал.")).toUpperCase())>=0){
  $($(strochechki[to]).children()[index_addcategor]).attr('paramid', caterosplit[caterosplit.indexOf(($($(strochechki[to]).children()[index_addcategor]).text().replace("Оборудование заработало", "оборуд.заработал.")).toUpperCase())+1]);
  } else {
$($(strochechki[to]).children()[index_addcategor]).css('background-color', '#fb0000');
$(shapochka[index_addcategor]).css('background-color', '#fb0000');
}}
}} else if (step==3) {


index_all=-1;
index_lednum=-1;
index_corstatus=-1;
index_newstatus=-1;
index_newcomment=-1;
index_addcategor=-1;

//Ищем колонки:
shapochka = $('#excelinhere').children().children().first().children();
strochechki = $('#excelinhere').children().children();
  
  
//*****************************************************************************************
//allsmartik= ["434134gD88449F925A7D01539C05AC63365E179ggмастер приезжал домой, все работает", "434178gD88449F925A7D01539C05AC63365E179ggмастер приезжал домой, все работает"]

memasik=[];
for(to = 1; to < (strochechki.length-1); to++){
  try {
    bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=institemsummary&plain=true');
    filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
    stbNumber = $($(strochechki[to]).children()[1]).text();
    subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7CINSTALLEDITEMS.InstItemSerialNum~' + stbNumber + '~%7C');
    updateDate= subscrin.slice(subscrin.indexOf('Updated on') + 17, subscrin.indexOf('Updated on')+27)
    contactName = subscrin.split("Set Top Box")[1].split("</td><td>")[2];
    $($(strochechki[to]).children()[2]).text(contactName);
    $($(strochechki[to]).children()[3]).text(updateDate);
  } catch (e) {
    $($(strochechki[to]).children()[2]).text("ошибка обработки");
    $($(strochechki[to]).children()[3]).text("ошибка обработки");
  }
  
  
}
}
}


function obrabot(col1, col2, col3) {
 $('#myfindsla').keydown(function(eventObject) {
  ok = "neok";
  if (eventObject.which >= 48 && eventObject.which <= 90){
  ok = "ok";
  } else if (eventObject.which == 8) {
  ok = "ok";
  } else if (eventObject.which >= 96 && eventObject.which <= 105) {
  ok = "ok";
  } else if (eventObject.which == 32) {
  ok = "ok";
  } else {
  ok = "neok";
  }
  
  if (ok == "ok"){
  setTimeout(function() {
   $('#myfindsla').css( 'box-shadow', '' );
   slanumffirst = $('#myfindsla').val().match(/\d+/);
   $('#myfindsla').val($('#myfindsla').val().match(/\d+/));
   if ($('#myfindsla').val().match(/\d+/) === null){
     return;
   }
   slanumchek = slanumffirst[0].length;
   if (slanumchek < 10){
       $('#myfindsla').css( 'box-shadow', '0px 0px 10px 2px #44FF00' );
   } else if (slanumchek == 10) {
    all = slanumffirst[0].split("");
    if ((Number(all[0])*2+Number(all[1])+Number(all[2])*2+Number(all[3])+Number(all[4])*2+Number(all[5])+Number(all[6])*2+Number(all[7])) == Number(all[8]+all[9])){
      $('#myfindsla').css( 'box-shadow', '' );
      $('#myfindsla').val("");
    findsla(slanumffirst);
    } else {
       $('#myfindsla').css( 'box-shadow', '0px 0px 10px 2px #FF0000' );
    }
   } else if (slanumchek > 10){
       $('#myfindsla').css( 'box-shadow', '0px 0px 10px 2px #07028B' );
   }
 }, 1);
  }
 
 });
 $('#myfindsla').focusout(function(){
  $('#myfindsla').css( 'box-shadow', '' );
});

$("#liptdt").click(function() {
  titelem = this;
  allinv = $("a[onmouseover*=Invoice]").map(function(indx, element) {
x = element.outerHTML;
t = x.indexOf(">Invoice");
if (t>0){
return element;
}
});

trin = ($('input[type=checkbox]:checked[id*=mychekforfin]').parent().find('a')[0]).outerHTML;
trinum = trin.slice(trin.indexOf("String")+7, trin.indexOf("String")+39);

reqq("http://crm.viasat.ua/crm/ajaxservlet?perform=summarydrilldown&params=financialtransactionlines%7CCUSTOMERFINTRXNLINES.CustFinTrxnID~" + trinum + "%7C%7Cccfintranssummary2-" + trinum + "%7CTransaction%3Cnobr%3E%20Lines%3Cimg%20src%3D%22img%2Farrow_expand2.gif%22%20alt%3D%22%22%20width%3D%2211%22%20height%3D%2211%22%20border%3D%220%22%3E%3C%2Fnobr%3E").then(function(response) {
parts = response.split("</DIV></td><td><DIV align=right>");
oneunitprice = Number(parts[1]);
liptd = ((parts[7]).split("</td><td>")[2]).slice(0,19);
TekBal = Number($($("div[id*=_FinTransSummary]").find("td")[22]).children().text());

titelem.innerHTML = '<input size="19" type="text" value="' + simpledatecalc(liptd, (TekBal / oneunitprice)) + '">';
$("#liptdt").children().first().focus();
$("#liptdt").children().first().select();
$("#liptdt").children().first().focusout(function() {
titelem.innerHTML = "<a>>>></a>";
  });
});
  });
}
function tablereq(m, p){
table = "SUBSCRIPTIONSERVICES";
filtcol = "SUBID";
filtval = "0000259835";
resulcol = "SUBID";
req('http://crm.viasat.ua/crm/ajaxservlet?perform=getquicksearchresults&params=dataset%3Ddpsubscriptions.SearchSubscriptionByDetails%7Ctbl%3D' + table + 'S%7Cflds%3D' + resulcol + '%7ColdSearch%3D%7Cfilter%3D' + table + '.' + filtcol + '%3D%27' + filtval + '%27%7Cpageid%3DDPG8%7Crow%3D0%7Cdatasetreturnhiddenfield%3DSubID%7Csetmode%3Dedit%7Cautoapply%3Dtrue%7Cmultiselect%3Dfalse%7Coptions%3D%7C%7CtxtSearch%3D&reqcount=1452855678049');


}


function addsearchfild2select(m, p){
  if (p == 1){
posl = $(m).position().left;
post = $(m).position().top;
sz = $(m).children().length; if (sz > 20){sz = 20}
s = [];
$(m).children().each(function(indx){
    s.push($(this).text());
    s[$(this).text()] = $(this).val();
});
o = "";
$(s).each(function(indx){
cortext = s[indx];
corval = s[cortext];
o = o + "<option value='" + corval + "'>" + cortext + "</option>";
});
$(m).after("<select autocomplete='off' onchange='addsearchfild2select(this,3)' id='asdasdasd' size='" + sz + "' style='position:absolute;z-index:1;left:" + posl +  "px;top:" + post + "px'>" + o + "<option>-------------------------------</option></select>");
$(m).after( "<input id='serfilsel' autocomplete='off' type='text' onkeyup='addsearchfild2select(this,2)' style='position:absolute;z-index:1;left:" + posl +  "px;top:" + (post-20) + "px'>" );
$(m).attr("style", "display:none");
$(m).next().focus();
} else if (p == 2) {
var q = new RegExp($(m).val(), 'ig');
s = [];
$(m).prev().children().each(function(indx){
    s.push($(this).text());
    s[$(this).text()] = $(this).val();
});
o = "";
sz = 0;
$(s).each(function(indx){
    if (s[indx].match(q)){
       sz++;
       cortext = s[indx];
       corval = s[cortext];
       o = o + "<option value='" + corval + "'>" + cortext + "</option>";
    }
});
if (sz > 20){sz = 20} else if (sz < 2) {sz = 2}
$(m).next().html(o + "<option>-------------------------------</option>").attr("size", sz);
} else if (p == 3) {
  if ($(m).text() == "-------------------------------"){
    $(m).prev().prev().attr("style", "");
    $(m).prev().remove();
    $(m).remove();
    return;
  }
    var text1 = $(m).val();
    $(m).prev().prev().children().filter(function() {
    return $(this).val() == text1; 
    }).prop('selected', true).trigger("change");
}
}

//Поиск договора
function findsla(slanumfind) {
$('#clearhere').text("");
 slanumfindnum = slanumfind;
 $("input[onkeyup*=SearchBySubNum]").val(slanumfindnum);
 sambo = $("input[onkeyup*=SearchBySubNum]")[0];
 setDataBindingField('null', 'null', 'searchBySubNumAlias', 'alias', 'null', 'null', sambo);
 qfModalByTimer('SearchBySubNum', 'false:false:null:CampLookup', 'quicksearch', 'edit', null, sambo, 200);
 
}

function addchengesla() {
$("div[id*=SubscriptionProvServicesSummary] table td > a[onclick*=subscriptions]").parent().parent().after(function(indx){
makeprodmagik = $(this).children()[2];
makeprodmagik = $(makeprodmagik).text();
inda = pakakaget(makeprodmagik);
var somik = "<tr>\
<td>\
<select id='acttype'>\
<option value=\"5\">Change of Contract</option>\
<option value=\"4\">Package Switch</option>\
<option value=\"3\">Package Downgrade</option>\
<option value=\"2\">Package Upgrade</option>\
</select>\
</td>\
<td>\
<select id='pricelistto'>" + inda + "</select>\
</td><td>\
<select id='pakagege' onchange=\"zoref(this)\">\
<option value=\"\"></option>\
<option value=\"5D82AE0A0C8F1DC0B62A6ABDF29CD7F3\">PRESTIGE</option>\
<option value=\"991C09C855D90E823B8FA19CB6BC9E15\">08-PRESTIGE 69/99</option>\
<option value=\"981459CDFBE6D59C86263C9A783982BB\">03-PRESTIGE</option>\
<option value=\"821D1F0E10B2E2F8CE64122288ADCDBE\">04-PRESTIGE-A</option>\
<option value=\"8A21C9904DF7DBE15B6ED2A0FB14E732\">DOMASHNIY</option>\
<option value=\"405559EBD50530B7372CED672A6E9901\">01-FAMILY</option>\
<option value=\"C7DAE43A5C69ECF3B51CB6C63ED04D2C\">PRESTIGE PREMIUM</option>\
<option value=\"12BED92BD305884355529B65F3A56BAA\">TEST PRESTIGE PREMIUM</option>\
<option value=\"F04AA5C119E07B454E04DD998F57938D\">PRESTIGE HD PREMIUM</option>\
<option value=\"9A498D8439CD7C86DFABE1A8225A7F5D\">TEST PRESTIGE HD PREMIUM</option>\
<option value=\"E1CC54736209C32AA1E0C5565265C78D\">LEGKY</option>\
<option value=\"58541521BE9C6B537BA85DEB33892CF9\">PRESTIGE HD</option>\
<option value=\"26D6978A7E05A31DE3DBDB1CE2907127\">EXTRA LEGKY</option>\
</select>\
</td>\
<td>\
<select id='oferok'>\
<option value=\"\"></option>\
<option value=\"457DF052F83AA4E0ACC4D6A6752A1820\">999</option>\
<option value=\"8F64446C9C82B20D3F4B4332DCD5CA2B\">Without package change fee</option>\
<option value=\"4067660BABADAD3D6846B2CB9AD456FD\">3+1</option>\
<option value=\"60733074F07FEF1D38B3F8783E39A4DD\">2+1</option>\
<option value=\"1B66810A9742E273DE1FF4A508696BC4\">Discount 50% for 1 year</option>\
<option value=\"F4D3B9E9A02E64E4E7D42D00D49DD01E\">Discount 30% for 1 year</option>\
<option value=\"00BEFE50B4A569E3A580FB5D25EB5A81\">1 month free</option>\
<option value=\"5AB8F5D46CB12A37C15D6DD49851A44F\">Idle Offer</option>\
</select>\
</td>\
<td>\
<input type=\"checkbox\"  id=\"TOWB\" onmouseover=\"SummaryMouseOver(this,\'Применить оффер WINBACK\'); return false;\" onmouseout=\"SummaryMouseOut(); return false;\" checked>\
<a onclick=\"makefun(this)\">GO</a>\
</td>\
<td>\
<input type=\"text\" id=\"planirch\" size=\"13\" onmouseover=\"SummaryMouseOver(this,\'Запланировать на\'); return false;\" onmouseout=\"SummaryMouseOut(); return false;\" value=\"\">\
</td>\
</tr>";
 return somik;
});
$("div[id*=SubscriptionProvServicesSummary] table td > a[onclick*=subscriptions]").parent().each(function(){
corpri = $(this).nextAll().eq(10).text();
$($(this).parent().next().children()[1]).children().children().each(function(){
if ($(this).text().indexOf(corpri) !== -1) {
$(this).prop('selected', true);
}
});
});
}

//При смене пакета, подтягивать прайслисты
function zoref(opt){
vata = $(opt).val();
if (vata !== "") {
inda = pakakaget('', vata);
} else {
makeprodmagik = $(opt).parent().parent().prev().children()[2];
makeprodmagik = $(makeprodmagik).text();
inda = pakakaget(makeprodmagik);
}
$(opt).parent().prev().children().map(function(indx, element) {
   element.innerHTML = inda;
  });
}


function addefpho() {
//**************************************Выгружаем заявки
 actone = $("font[id*=component_1_OppType]")[0];
 if (actone === undefined) {
  dpgmain = getdpgmain();
  actinresp = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgmain + "callcentre/callcentre|new|tab|Opportunities&function={%22classname%22:%22ejb/CRMBOOpportunity%22,%22functionname%22:%22read%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22opportunitiesbycustcontactid%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22opportunitiesbycustcontactid%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22oppnum,desc%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22opportunities.contactsbycustcontactid.contactid=:p1%20and%20oppdeleted=0%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,contactid]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22opportunities.opptemplates,opportunities.users,opportunities.userroles,opportunities.oppstages%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setreplace%22}&databinding=&obj=tab_Opportunities_DPG" + dpgmain + "callcentre/callcentre&tab=0");
  $("div[id*=tab_Opportunities][class=tabcontent_bottom]").map(function(indx, element) {
   element.innerHTML = element.innerHTML + actinresp;
  });
  $("div[id*=tabdiv_Opportunities_DPG]").attr("style", "");
 }

//находим и открываем нужную:
asdsdbk = $("td").filter(function() {
  return $(this).text() == "Service";
 }).next().next().next().next().next().next().filter(function() {
  return $(this).text() == "Відкрито";
 }).children().children().attr("row");
 dpgmain = getdpgmain();
inrespleda = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgmain + "callcentre/callcentre|null|create|OppNumModal|true:false:Opportunities:OppNumber|" + asdsdbk + "&function=&databinding=&obj=[object%20HTMLDivElement]&tab=0");

//текущие примечания
parapapaz = inrespleda.split('</textarea>');
parapapasz = parapapaz[0].split('1000));" >')[1];
}


//Обработка заявок сервис - анализ договора
function forledservanalizer(n) {
  slanum = "";
  facdtdil = "";
  facdtdilnum = "";
  dilnazna = "";
  descr = "";
  notaforled = "";
  dpgcl = "";
  
  //Внутренний номер сервиса
  servachokin = $($("tr[style*=silver] td")[0]).parent().attr("onclick").split("'")[1];
  
  slanum = $($("tr[style*=silver] td a")[0]).text();
  //вычисление диллера за областью - obl
  //Область и какого диллера
  if($("div[id*=ContactLocation]").text().indexOf("Loca") !== -1){
    locslic = 8;
  } else {
    locslic = 7;
  }
  obl = $("div[id*=ContactLocation]").text().slice(locslic);
  
if (obl == "АР КРИМ") {dilnazna = "000837"}
if (obl == "ВІННИЦЬКА") {dilnazna = "000108"}
if (obl == "ВОЛИНСЬКА") {dilnazna = "000046"}
if (obl == "ДНІПРОПЕТРОВСЬКА") {dilnazna = "000038 или 000635"}
if (obl == "ДОНЕЦЬКА") {dilnazna = "000038"}
if (obl == "ЖИТОМИРСЬКА") {dilnazna = "000211"}
if (obl == "ЗАКАРПАТСЬКА") {dilnazna = "000046"}
if (obl == "ЗАПОРІЗЬКА") {dilnazna = "000038 или 000635"}
if (obl == "ІВАНО-ФРАНКІВСЬКА") {dilnazna = "000414"}
if (obl == "КІРОВОГРАДСЬКА") {dilnazna = "000635"}
if (obl == "КИЇВ") {dilnazna = "000176"}
if (obl == "КИЇВСЬКА") {dilnazna = "000176"}
if (obl == "ЛУГАНСЬКА") {dilnazna = "000038"}
if (obl == "ЛЬВІВСЬКА") {dilnazna = "000046"}
if (obl == "МИКОЛАЇВСЬКА") {dilnazna = "000422"}
if (obl == "ОДЕСЬКА") {dilnazna = "000077"}
if (obl == "ПОЛТАВСЬКА") {dilnazna = "000176"}
if (obl == "РІВНЕНСЬКА") {dilnazna = "000046"}
if (obl == "СУМСЬКА") {dilnazna = "000635"}
if (obl == "ТЕРНОПІЛЬСЬКА") {dilnazna = "000046"}
if (obl == "ХАРКІВСЬКА") {dilnazna = "000176 или 000635"}
if (obl == "ХЕРСОНСЬКА") {dilnazna = "000422"}
if (obl == "ХМЕЛЬНИЦЬКА") {dilnazna = "000046"}
if (obl == "ЧЕРКАСЬКА") {dilnazna = "000635"}
if (obl == "ЧЕРНІВЕЦЬКА") {dilnazna = "000414"}
if (obl == "ЧЕРНІГІВСЬКА") {dilnazna = "000635"}
  
    //добавляем основной номер телефона, если нет
  otv = "";
   dpgmain = getdpgmain();
  contmeinsal = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgmain + "callcentre/callcentre|null|create|subcontact_editperson|false:false:Contact_and_Customer_Information:ContactFullName|0&function=&databinding=&obj=[object%20HTMLDivElement]&tab=0");
  dpggeti = contmeinsal.slice(contmeinsal.indexOf('DPG')+3, contmeinsal.indexOf('DPG')+9);
  dpgc = Number(dpggeti.match(/\d+/));
  //открыть таб
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=changetabstatus&params=DPG" + dpgc + "|Phones|opentab&function=&databinding=&obj=null&tab=0");
  cophon = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgc + "|edit|tab|Phones&function={%22classname%22:%22ejb/CRMBOContactPhone%22,%22functionname%22:%22read%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22contactphones%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22contactphones%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22contphfulltel,asc%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22contactphones.contacts.contactid=:p1%20and%20contactphones.contphdeleted=0%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,contactid]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22contactphones.contactphonetypes%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setreplace%22}&databinding=&obj=tab_Phones_DPG" + dpgc + "&tab=0");
  if (cophon.indexOf("checked") == -1){
    req(baseQuery + dpgc + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22contactphones[1]/contphprimary%22,%22datatype%22:%22null%22,%22classname%22:%22null%22,%22value%22:%221%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0");
    otv = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgc + "|read|null&function={%22classname%22:%22ejb/CRMBOContact%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0");
      if (otv != "<SCRIPT>deInitTabs();</SCRIPT>") {
      alert("Не удалось обновить основной телефон: "+otv);
      return;
      }
  }

   dpgmain = getdpgmain();
  contmeinsal = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgmain + "callcentre/callcentre|null|create|subcontact_editperson|false:false:Contact_and_Customer_Information:ContactFullName|0&function=&databinding=&obj=[object%20HTMLDivElement]&tab=0");
  dpggeti = contmeinsal.slice(contmeinsal.indexOf('DPG')+3, contmeinsal.indexOf('DPG')+9);
  dpgc = Number(dpggeti.match(/\d+/));
  //открыть таб
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=changetabstatus&params=DPG" + dpgc + "|Phones|opentab&function=&databinding=&obj=null&tab=0");
  cophon = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgc + "|edit|tab|Phones&function={%22classname%22:%22ejb/CRMBOContactPhone%22,%22functionname%22:%22read%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22contactphones%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22contactphones%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22contphfulltel,asc%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22contactphones.contacts.contactid=:p1%20and%20contactphones.contphdeleted=0%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,contactid]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22contactphones.contactphonetypes%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setreplace%22}&databinding=&obj=tab_Phones_DPG" + dpgc + "&tab=0");
cophonspl = cophon.split("_DetailPhones_PhoneNumber_");
optikitel = "";
for(to = 1; to < cophonspl.length; to++){
culikin = cophon.slice(cophon.indexOf("Phones_"+to)+17, cophon.indexOf("Phones_"+to)+49).split("'")[0];
culiknum = (cophonspl[to]).slice((cophonspl[to]).indexOf("value")+7, (cophonspl[to]).indexOf("value")+17).split("'")[0];
typ="доп";
if (cophonspl[to].indexOf("checked") != -1){
typ="осн";
osnuma = culiknum;
} else {
optikitel = optikitel + "<option value='" + culikin + "'>" + culiknum + "</option>";
}
}

curnomaddopt = "<tr><td>Основной номер: " + osnuma +"</td><td><select id='dopnomfld'>" + optikitel + "</select></td></tr>";

  
  //Выгружаем выполненые действия
  slanumint = getslainnum(slanum);
  execin = zp('execactsla', '', slanumint);
  $("td[id*=ccsubscriptionsummary]").map(function(indx, element) {
    element.innerHTML = element.innerHTML + execin;
  });
  $("tr[id*=ccsubscriptionsummary]").attr("style", "");

  
  //Первая ативация
  lfirstain = $("td").filter(function() {
    return ($(this).text() == "Перша активація" || $(this).text() == "First Activation");
  }).last();

  //Дата активации
  facdt = $(lfirstain).next().text().slice(0, 10);

  //дилер установщик 
  facdtdil = $($("tr[style*=silver] td a")[0]).parent().next().next().next().next().next().next().next().text();
  if (facdtdil.length < 2){
    facdtdil = "Самоустановка(-)";
  }
  //сравниваем диллера установщика и назначаемого диллера:
  facdtdilnum = facdtdil.split("(")[1].split(")")[0];
  if (dilnazna.split(" или ")[0] == facdtdilnum){
    dilnazna = facdtdilnum;
  } else if (dilnazna.split(" или ")[1] == facdtdilnum){
    dilnazna = facdtdilnum;
  } else {
    dilnazna = dilnazna.split(" или ")[0];
  }


  //промо-код
  facdtpcod = $(lfirstain).next().next().next().next().next().next().next().text();
  if (facdtpcod.length < 3){
    for(to = 0; to <= (($(lfirstain).parent().nextAll().length+1)/3-1); to++){
    if (facdtpcod.length < 3){facdtpcod = $($($(lfirstain).parent().nextAll()[to*3-1]).children()[11]).text()}
    }
  }
  if (facdtpcod.length < 3){
    for(to = 0; to <= (($(lfirstain).parent().prevAll().length+1)/3-1); to++){
    if (facdtpcod.length < 3){facdtpcod = $($($(lfirstain).parent().prevAll()[to*3-1]).children()[11]).text()}
    }
  }
  
  
  //более-менее года
  facdte = dt.crm_js(facdt);
  facdte.setFullYear(facdte.getFullYear() + 1);
  periondoposle = "более года";
  if (facdte > (new Date())) {
    //тюнер-комплект
    if (facdtpcod.indexOf("STB") != -1) {
      periondoposle = "до года, тюнер";
    } else if (facdtpcod.indexOf("C&C") != -1 || facdtpcod.indexOf("С&C") != -1) {
      periondoposle = "до года, комплект";
    } else {
      periondoposle = "до года";
    }
  }
  
    dectype = "SD";
    
  //вычесляем тюнер
  cordecnum = $("div[id*=InstItemsSummary] tr td a[onclick*=displayModalCreate]").filter(function() {
    return $(this).text() == slanum;
  }).parent().next().next().next().next().filter(function() {
    return $(this).text() == "DECODER";
  }).prev();

    for(to = 0; to <= cordecnum.length; to++){
        //вычесляем тип тюнера
      if ($(cordecnum[to]).text().slice(0, 4) == "4051" || $(cordecnum[to]).text().slice(0, 4) == "1029") {
       dectype = "HD";
      }
    }

  //вычесляем тип тюнера
  if (cordecnum.slice(0, 4) == "4051" || cordecnum.slice(0, 4) == "1029") {
    dectype = "HD";
  }
  
    descr = "Спец.предложение/Tech Proposal";
  if(n==1){
  //**************************************Выгружаем заявки
 actone = $("font[id*=component_1_OppType]")[0];
 if (actone === undefined) {
  dpgmain = getdpgmain();
  actinresp = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgmain + "callcentre/callcentre|new|tab|Opportunities&function={%22classname%22:%22ejb/CRMBOOpportunity%22,%22functionname%22:%22read%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22opportunitiesbycustcontactid%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22opportunitiesbycustcontactid%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22oppnum,desc%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22opportunities.contactsbycustcontactid.contactid=:p1%20and%20oppdeleted=0%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,contactid]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22opportunities.opptemplates,opportunities.users,opportunities.userroles,opportunities.oppstages%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setreplace%22}&databinding=&obj=tab_Opportunities_DPG" + dpgmain + "callcentre/callcentre&tab=0");
  $("div[id*=tab_Opportunities][class=tabcontent_bottom]").map(function(indx, element) {
   element.innerHTML = element.innerHTML + actinresp;
  });
  $("div[id*=tabdiv_Opportunities_DPG]").attr("style", "");
 }

//находим и открываем нужную:
asdsdbk = $("td").filter(function() {
  return $(this).text() == "Service";
 }).next().next().next().next().next().next().filter(function() {
  return $(this).text() == "Відкрито";
 }).children().children().attr("row");
 dpgmain = getdpgmain();
inrespleda = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgmain + "callcentre/callcentre|null|create|OppNumModal|true:false:Opportunities:OppNumber|" + asdsdbk + "&function=&databinding=&obj=[object%20HTMLDivElement]&tab=0");

  dpggetil = inrespleda.slice(inrespleda.indexOf('DPG')+3, inrespleda.indexOf('DPG')+9);
  dpgcl = Number(dpggetil.match(/\d+/));

//текущие примечания
parapapaz = inrespleda.split('</textarea>');
parapapasz = parapapaz[0].split('1000));" >')[1];
descr=parapapasz;
} else if(n==3){
  descr="Тюнер";
}
oferochichok="";
if (n==3){
  if(dectype = "HD"){
    oferochichok = "<select id='oferochichok'><option value='AF42D03WA48DD362R1C1C8AC293900E9'>Сервис почтой HD</option><option value='DCF6A465R9W265BB241D942669E644B8'>Сервис почтой SD</option><option value='-1'> </option></select>";
  } else {
    oferochichok = "<select id='oferochichok'><option value='DCF6A465R9W265BB241D942669E644B8'>Сервис почтой SD</option><option value='AF42D03WA48DD362R1C1C8AC293900E9'>Сервис почтой HD</option><option value='-1'> </option></select>";
  }
}

//Description 
  notaforled = "Миграция на Amos (настройка LNB) / " + periondoposle + " / " + slanum + " / установлен " + dectype + " тюнер/ Дилер установщик " + facdtdil + " / " + facdt;
if(n==1){
  notaforled = "Миграция на Amos (настройка LNB) / " + slanum + " / установлен " + dectype + " тюнер";
}
$("#forledservatbl").remove();
//forledservanatbl(slanum, facdtdil, facdtdilnum, dilnazna, descr, notaforled, servachokin, curnomaddopt, n, dpgcl, oferochichok);

//*********Создаем табличку*************************************

 //задание Техническая Поддержка - Выезд Дилера
 transnum = $("td").filter(function() {
  return $(this).text() == "Техническая Поддержка";
 }).next().next().next().next().next().next().filter(function() {
  return $(this).text() == "Выезд Дилера";
 }).children().children().attr("row");

para="Т.П. нет";
if (transnum !== undefined){
inresp = zp('activinumsla', getdpgmain(), transnum);
parapapa = inresp.split('</textarea>');
parapapas = parapapa[0].split('1000));" >')[1];
parapapam = parapapa[1].split('>');
parapapam = parapapam[parapapam.length-1];
parapopom = parapapa[2].split('>');
parapopom = parapopom[parapopom.length-1];
para = (parapapas + parapapam + parapopom).replace(/\s{2,}/g, ' ').replace(/\n/g, ' ');
}

defopfn = "<option value='DB0BE59D2BE01E32DD0713AE6E6FC06D'>Миграция на Amos</option><option value='C9AF71EA531C091FF9BB287D6597F51C'>Миграция на Amos LNB</option><option value='6B13A3B9DBEE0CC2CB4F74E5BC7BA42D'>Миграция на Amos ПО</option><option value='C8FB5EAD62A9EA4B4D96F76570EB9B09'>Tech Proposal ВБ</option><option value='-1'> </option>";
if (n==2){
defopfn = "<option value='C9AF71EA531C091FF9BB287D6597F51C'>Миграция на Amos LNB</option><option value='DB0BE59D2BE01E32DD0713AE6E6FC06D'>Миграция на Amos</option><option value='6B13A3B9DBEE0CC2CB4F74E5BC7BA42D'>Миграция на Amos ПО</option><option value='C8FB5EAD62A9EA4B4D96F76570EB9B09'>Tech Proposal ВБ</option><option value='-1'> </option>";
}

checkedteh = "";
if (n==2){
checkedteh = "checked";
}
ledtypokin="<select id='ledtypok'><option value='D71A48DC5756C9CFC6135F408D1801F8'>Service</option><option value='EBD7BD487C4D865A9DA1E9F7568EE013'>Install</option></select>";
if (n==3){
ledtypokin="<select id='ledtypok'><option value='EBD7BD487C4D865A9DA1E9F7568EE013'>Install</option><option value='D71A48DC5756C9CFC6135F408D1801F8'>Service</option></select>";
}

$("body").first().after("\
<table style='position: fixed; top: 50px; left: 500px;z-index: 999995; background: #E7E892;' border='1px' id='forledservatbl'>\
<tbody>\
<tr><td colspan='2' align='right' style='cursor: pointer;'><a onclick='forledservanatblswr(this)'>Скрыть</a></td></tr>\
<tr><td colspan='2' align='center'><textarea type='text' rows='2' cols='65'  id='vzada'>T:" + para + "</textarea></td></tr>\
<tr><td colspan='2' align='center'>будет создана заявка со следующими параметрами:</td></tr>\
<tr>\
<td>Номер договора:</td>\
<td><textarea type='text' rows='1' cols='40'  id='slanum'>" + slanum + "</textarea></td>\
</tr>\
<tr>\
<td servachokin='" + servachokin + "' dpgcl='" + dpgcl + "' ndpgcl='" + n + "'>Тип заявки:</td>\
<td>" + ledtypokin + oferochichok + "</td>\
</tr>\
<tr>\
<td>Диллер-установщик:</td>\
<td><textarea type='text' rows='1' cols='40'  id='facdtdil'>" + facdtdil + "</textarea></td>\
</tr>\
<tr>\
<td>Номер дилера-установщика:</td>\
<td><textarea type='text' rows='1' cols='40'  id='facdtdilnum'>" + facdtdilnum + "</textarea></td>\
</tr>\
<tr>\
<td>Назначаем диллера:</td>\
<td><textarea type='text' rows='1' cols='40'  id='dilnazna'>" + dilnazna + "</textarea></td>\
</tr>\
<tr>\
<td>Description:</td>\
<td><textarea type='text' rows='1' cols='40'  id='descr'>" + descr + "</textarea></td>\
</tr>\
<tr>\
<td>Notes:</td>\
<td><textarea type='text' rows='4' cols='40'  id='notaforled'>" + notaforled + "</textarea></td>\
</tr>\
<tr>\
<td>Shared notes:</td>\
<td><textarea type='text' rows='2' cols='40'  id='shernotaforled'>" + "" + "</textarea></td>\
</tr>\
<tr>\
<td>Тип сервиса:</td>\
<td><select id='proptype'><option value='2'>Special proposition</option><option value='0'>Till 1 year</option><option value='1'>After 1 year</option><option value='-1'> </option></select></td>\
</tr>\
<tr>\
<td>Категория:</td>\
<td><select id='cattype'>" + defopfn + "</select></td>\
</tr>"+curnomaddopt+"\
<tr><td colspan='2' align='center'><input id='clstehz' type='checkbox'" + checkedteh + "> закрыть задание тех. </td></tr>\
<tr><td colspan='2' align='center'><input type='button' onclick='forledservanatblswrem(1)' value='OK'>     <input type='button' onclick='forledservanatblswrem(2)' value='Отмена'></td></tr>\
</tbody>\
</table>\
");
}


//Свернуть/развернуть
function forledservanatblswr(t){
  cora = $("a[onclick*=forledservanatblswr]").text();
  if (cora == "Скрыть"){
  $(t).parent().parent().nextAll().css("display", "none");
  $("a[onclick*=forledservanatblswr]").text("Открыть");
  } else {
    $(t).parent().parent().nextAll().css("display", "");
  $("a[onclick*=forledservanatblswr]").text("Скрыть");
  }
}

/************************************** МОИ СКРИПТЫ *****************************************************************/

function tunerRebuy() {
if (getServiceStatus() != "Churn") churnSubscription();
newCommunicationTunerRebuy('98AA7E728DE5F0C53194B0169FE7EAB3');
shadowonoff();
shadowonoff();
shadowonoff();
setTimeout($('li[id*=_Refresh_]').children().click(), 900);


  function getServiceStatus() {
    return $($("tr[style*=silver] td")[1]).text();
  }

  function churnSubscription() {
    prich = 'Причина: Возврат б/у тюнеров';
    slanumchikl = $($("tr[style*=silver] td")[0]).text();
    slanumint = getslainnum(slanumchikl);
    dpgmain = getdpgmain();
    zp('activisla', dpgmain);
    dpgnewin = zp('activisodsla', dpgmain);
    dpgnewi = dpgnewin.slice(dpgnewin.indexOf('DPG')+3, dpgnewin.indexOf('DPG')+9);
    dpgnew = Number(dpgnewi.match(/\d+/));
    zp('activitypesla', dpgnew, 'B3E9EBD9644F0F4431A3CC8BEBEA8D1E');
    zp('activistatsla', dpgnew, 'Status1');
    zp('podpisactiv', dpgnew, slanumint);
    zp('activinotsla', dpgnew, encodeURIComponent(prich));
    zp('actividescrsla', dpgnew, 'Дог: ' + slanumchikl);
    zp('activishnotsla', dpgnew, 'Вернул тюнер');
    zp('activinahsla', dpgnew, '01CC497EC508241C536C8A3904CCEDF2');
    zp('activichurnallsla', dpgnew, '2');
    zp('activiexechcsla', dpgnew);
    zp('activisavechusla', dpgnew);
  }

  function newCommunicationTunerRebuy(catcomunid){
    dpgmain = getdpgmain();
    req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgmain + "callcentre/callcentre|new|tab|Communications&function={%22classname%22:%22ejb/CRMBOInteraction%22,%22functionname%22:%22readImpl%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22interactionsbyintercontactid%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22interactionsbyintercontactid%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22interstartdate,desc%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22interactions.contactsbyintercontactid.contactid=:p1%20and%20interdeleted=0%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,contactid]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22interactions.contactsbyintercontactid,interactions.contactsbyinterrepcontactid,interactions.contactsbyinterinitiatorcontactid,interactions.interactionmedia%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22interstartdate%20desc%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%222%22,%22datatype%22:%22java.lang.Integer%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setreplace%22}&databinding=&obj=tab_Communications_DPG" + dpgmain + "callcentre/callcentre&tab=0");
    req("http://crm.viasat.ua/crm/ajaxservlet?perform=markAsInitialised&params=DPG" + dpgmain + "callcentre/callcentre|true|Communications&function=&databinding=&obj=tabinfo_Communications_DPG" + dpgmain + "callcentre/callcentre&tab=0");
    req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgmain + "callcentre/callcentre|new|tab|Communications&function={%22classname%22:%22ejb/CRMBOAPPCallCentre%22,%22functionname%22:%22tabOpened%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22communications%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22null%22}&databinding=&obj=tab_Communications_DPG" + dpgmain + "callcentre/callcentre&tab=0");
    //Новая
    dpgnewinc = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgmain + "callcentre/callcentre|null|create|7|true:true:Communications:43|0&function=&databinding=&obj=[object%20HTMLDivElement]&tab=0");
    dpgnewi = dpgnewinc.slice(dpgnewinc.indexOf('DPG')+3, dpgnewinc.indexOf('DPG')+9);
    dpgnewi = Number(dpgnewi.match(/\d+/));
    req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgnewi + "|edit|tab|Categories&function={%22classname%22:%22ejb/CRMBOInterToInterCategory%22,%22functionname%22:%22read%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22intertointercategories%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22intertointercategories%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22intertointercategories.interactions.interid=:p1%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,interid]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22intertointercategories.interactioncategories%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22intercategorycode%20desc%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setreplace%22}&databinding=&obj=tab_Categories_DPG" + dpgnewi + "&tab=0");
    //категория catcomunid
    //30% - 5B8DF15177B408BB014F9F0732386318
    //50% - 62D83642FC54005B9F44891F6AF49841
    //100% - 4DAA0DB85DF52D6A5BEC76D4B8AAE2DC
    // Получен (процедура возврат тюнера) - 98AA7E728DE5F0C53194B0169FE7EAB3
    req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgnewi + "|edit|null&function={%22classname%22:%22ejb/CRMBOInterToInterCategory%22,%22functionname%22:%22create%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22intertointercategories%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22intertointercategories%22,%22row%22:%220%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22Interactioncategories%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22intercategoryid%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22interactioncategories%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getAlias,java.lang.String,modal]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setappend%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22modal%22,%22datatype%22:%22alias%22,%22submit%22:%22%22,%22value%22:%22" + catcomunid + "%22,%22dataformatting%22:%22null%22,%22classname%22:%22null%22,%22pageid%22:%22%22}]}&obj=null&tab=0");
    //Type
    req(baseQuery + dpgnewi + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22interactiontypes%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Interactiontypes%22,%22value%22:%228D0382535513051D8AFA7DE1C632E458%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0");
    req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgnewi + "|null|null&function={%22classname%22:%22ejb/CRMBOInteraction%22,%22functionname%22:%22copyFromTemplate%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,interactiontypes/intertypeid]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0");
    //media
    req("http://crm.viasat.ua/crm/ajaxservlet?cxccnb=1162&reqcount=1468236816609&perform=submitData&params=DPG" + dpgnewi + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22interactionmedia%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Interactionmedia%22,%22value%22:%2230%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0");
    //Сохранить
    otv = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgnewi + "|read|null&function={%22classname%22:%22ejb/CRMBOInteraction%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22false%22,%22datatype%22:%22java.lang.Boolean%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0");
    if (otv != "<SCRIPT>deInitTabs();</SCRIPT>") {
     alert(otv);
     return;
    }
    if($("#dicorejhelper").prop("checked")){
      if (catcomunid == "5B8DF15177B408BB014F9F0732386318"){
        closeper('0',1,"Создана коммуникация для начисления скидки 30% по миграции на Амос");
      } else if (catcomunid == "62D83642FC54005B9F44891F6AF49841"){
        closeper('0',1,"Создана коммуникация для начисления 50% по миграции на Амос");
      } else if (catcomunid == "4DAA0DB85DF52D6A5BEC76D4B8AAE2DC"){
        closeper('0',1,"Создана коммуникация для начисления 100% по миграции на Амос");
      }
      statb("Rejected");
    }
    
  }
}


/*********************************************************************************************************************/
function forledservanatblswrem(t){
  if (t==1){
  //oferochichok - оффер
  oferochichok=$("select[id=oferochichok]").val();
  //ledtypok - тип заявки
  ledtypok=$("select[id=ledtypok]").val();
  //dil Диллер-установщик
  dil=$("textarea[id=facdtdilnum]").val();
  //cordilic Назначаем диллера
  cordilic=$("textarea[id=dilnazna]").val();
  //descr Description 
  descr=$("textarea[id=descr]").val();
  //notaforled Notes 
  notaforled=$("textarea[id=notaforled]").val();
  //shernotaforled Shared notes
  shernotaforled=$("textarea[id=shernotaforled]").val();
  //sla номер договора
  sla=$("textarea[id=slanum]").val();
  //proptype - Тип предложения
  proptype=$("select[id=proptype]").val();
  //cattype - категория
   cattype=$("select[id=cattype]").val();
  //clstehz - закрывать задание на тех. поддержку
   clstehz=$("input[id=clstehz").prop("checked");
   servachokin = $("td[servachokin]").attr("servachokin");

   ndpgcl = $("td[ndpgcl]").attr("ndpgcl");
   dpgcl = $("td[dpgcl]").attr("dpgcl");
   
   
   //Доп телефон
   dopnomfld=$("select[id=dopnomfld]").val();
   
   
  //шлем все в функцию
  nlfs(dil, cordilic, descr, notaforled, sla, proptype, cattype, clstehz, servachokin, dopnomfld, ndpgcl, dpgcl, ledtypok, oferochichok, shernotaforled);
  $("#forledservatbl").remove();
  }
  if (t==2){
  $("#forledservatbl").remove();
  }
}



//создание заявки с задаными параметрами
function nlfs(dil, cordilic, descr, notaforled, sla, proptype, cattype, clstehz, servachokin, dopnomfld, ndpgcl, dpgcl, ledtypok, oferochichok, shernotaforled){
  //dil Диллер-установщик
  //cordilic Назначаем диллера
  //descr Description 
  //notaforled Notes 
    //shernotaforled Shared notes
  //sla номер договора
  //тип предожения в заявке proptype
  //ledtypok тип заявки
  //oferochichok - оффер
  otv="";
  if (ndpgcl==1){
    dpg=dpgcl;
  } else {
newle = req("http://crm.viasat.ua/crm/oppDetail.do?act=new&fc=create&jndi=ejb/CRMBOOpportunity");
dpggeti = newle.slice(newle.indexOf('DPG')+3, newle.indexOf('DPG')+9);
dpg = Number(dpggeti.match(/\d+/));
}
  //Type
  req(baseQuery + dpg + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22opptemplates%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Opptemplates%22,%22value%22:%22" + ledtypok + "%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]");
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpg + "|null|null&function={%22classname%22:%22null%22,%22functionname%22:%22voidFunc%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22staticjs%22,%22parameters%22:[],%22resultaction%22:%22null%22}&databinding=&obj=null");
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpg + "|null|null&function={%22classname%22:%22ejb/CRMBOOpportunity%22,%22functionname%22:%22createFromTemplate%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,opptemplates/opptempid]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null");
  //offer
  if (ndpgcl==3){
    req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpg + "|edit|null&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22campaigns%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22" + oferochichok + "%22,%22dataformatting%22:%22null%22,%22classname%22:%22Campaigns%22,%22pageid%22:%22%22}]}&obj=null");
  }
  //Description
  req(baseQuery + dpg + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22oppdesc%22,%22datatype%22:%22null%22,%22classname%22:%22null%22,%22value%22:%22" + descr + "%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]");
  //Notes
  req(baseQuery + dpg + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22oppnotes%22,%22datatype%22:%22null%22,%22classname%22:%22null%22,%22value%22:%22"+ notaforled +"%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]");
  //Shared notes
  req(baseQuery + dpg + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22oppsharednotes%22,%22datatype%22:%22sharednote%22,%22classname%22:%22null%22,%22value%22:%22" + shernotaforled + "%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0");
  //Диллер-установщик - dil 
  req(baseQuery + dpg + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22oppuserfield5%22,%22datatype%22:%22java.lang.String%22,%22classname%22:%22null%22,%22value%22:%22" + dil + "%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]");
  //Подтягиваем контакт за номером договора
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpg + "|edit|quicksearch|SubNumQuickSearch|false:false:Main_Information:LeadsContact|0&function=&databinding=&obj=[object%20HTMLDivElement]");
  forconser = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getquicksearchresults&params=dataset%3Ddpsubscriptions.SearchSubscriptionbyDetails%7Ctbl%3DSUBSCRIPTIONS%7Cflds%3Dsubnum%3BContactName%7ColdSearch%3D%7Cfilter%3D%7Cpageid%3DDPG" + dpg + "%7Crow%3D0%7Cdatasetreturnhiddenfield%3DContactID%7Csetmode%3Dedit%7Cautoapply%3Dfalse%7Cmultiselect%3Dfalse%7Coptions%3D%7C%7CtxtSearch%3D" + sla);
  forconserval = forconser.slice(forconser.indexOf("pk='")+4, forconser.indexOf("pval")-2);
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpg + "|edit|null&function={%22classname%22:%22ejb/CRMBOOpportunity%22,%22functionname%22:%22setContactInfoFromContactPrimaries%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,contactsbycustcontactid/contactid]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22contactsbycustcontactid%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22" + forconserval + "%22,%22dataformatting%22:%22null%22,%22classname%22:%22Contacts%22,%22pageid%22:%22%22}]}&obj=null");
  //Assign to - Direct Sales Backoffice
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpg + "|edit|null&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22users%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22UserID%22,%22dataformatting%22:%22null%22,%22classname%22:%22Users%22,%22pageid%22:%22%22},{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22userroles%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22DE51D5F405DE8DD713956F49AF7263A3%22,%22dataformatting%22:%22null%22,%22classname%22:%22Userroles%22,%22pageid%22:%22%22}]}&obj=null");
  //Договор и Сервис
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpg + "|edit|null&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22subscriptions%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22" + getslainnum(sla) + "%22,%22dataformatting%22:%22null%22,%22classname%22:%22Subscriptions%22,%22pageid%22:%22%22}]}&obj=null");
  servagetares = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getquicksearchresults&params=dataset%3Ddpsubscriptions.searchsubscriptionservices%7Ctbl%3DSUBSCRIPTIONSERVICES%7Cflds%3DPRODUCTS.ProdNum%7ColdSearch%3D%7Cfilter%3Dsubscriptionservices.subservicedeleted=0%20and%20producttypes.prodtypeisforprovision%20%3D%201%20and%20subscriptions.subid%20%3D%20'" + getslainnum(sla) + "'%7Cpageid%3DDPG" + dpg + "%7Crow%3D0%7Cdatasetreturnhiddenfield%3DSubServiceID%7Csetmode%3Dedit%7Cautoapply%3Dtrue%7Cmultiselect%3Dfalse%7Coptions%3D%7C%7CtxtSearch%3D");
  nser = servachokin;
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpg + "|edit|null&function={%22classname%22:%22ejb/VTVCRMBOOpportunity%22,%22functionname%22:%22loadProdnumForRelatedService%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22oppuserfield14%22,%22datatype%22:%22null%22,%22submit%22:%22%22,%22value%22:%22" + nser + "%22,%22dataformatting%22:%22null%22,%22classname%22:%22subscriptionservices%22,%22pageid%22:%22%22}]}&obj=null");
  //cattype Категория
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpg + "|edit|null&function={%22classname%22:%22ejb/CRMBOOppToOppCategory%22,%22functionname%22:%22create%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22opptooppcategories%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22opptooppcategories%22,%22row%22:%220%22,%22istab%22:%22true%22,%22datasortby%22:%22oppcategories/oppcategorycode%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22Oppcategories%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22oppcategoryid%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22oppcategories%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getAlias,java.lang.String,modal]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setappend%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22modal%22,%22datatype%22:%22alias%22,%22submit%22:%22%22,%22value%22:%22" + cattype + "%22,%22dataformatting%22:%22null%22,%22classname%22:%22null%22,%22pageid%22:%22%22}]}&obj=null&tab=0");
  //Назначаем диллера - cordilic
  cordilicfininnum = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getSearchResults&params=dpComManSearch.SearchPartners%7Ctest%3Dtest%7Cfilter%3D%7Cdatasetreturnhiddenfield%3DPartnerContactID%7Cmultiselect%3D0%7Cmode%3Dedit%7Cc%3D1%7Ctb0%3DPARTNERS%7Cfd0%3DPartnerNum%7Cal0%3D%7Cex0%3DEquals%7Cva0%3D" + cordilic + "%7Cao0%3DAnd");
  cordilicfinnum = cordilicfininnum.slice(cordilicfininnum.indexOf("encodevalue")+13, cordilicfininnum.indexOf("closeModalDialog")-4);
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpg + "|edit|null&function={%22classname%22:%22ejb/VTVCRMBOOpportunity%22,%22functionname%22:%22setDefaultStatusAndStartDate%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22partnersbyoppdelpartnerid%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22" + cordilicfinnum + "%22,%22dataformatting%22:%22null%22,%22classname%22:%22Partners%22,%22pageid%22:%22%22},{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22channelsbyoppdelchannelid%22,%22datatype%22:%22null%22,%22submit%22:%22%22,%22value%22:%22null%22,%22dataformatting%22:%22null%22,%22classname%22:%22Channels%22,%22pageid%22:%22%22},{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22individualsbyoppdelindividualid%22,%22datatype%22:%22null%22,%22submit%22:%22%22,%22value%22:%22null%22,%22dataformatting%22:%22null%22,%22classname%22:%22Individuals%22,%22pageid%22:%22%22}]}&obj=null");
  //Service
  req(baseQuery + dpg + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22oppuserfield2%22,%22datatype%22:%22null%22,%22classname%22:%22null%22,%22value%22:%22" + proptype + "%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]");
  //Доп телефон
  if (dopnomfld !== null){
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpg + "|edit|null&function={%22classname%22:%22ejb/CRMBOContactPhone%22,%22functionname%22:%22createAssocWithOtherEntity%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22contactsbycustcontactid/contactphones%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22contphid%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getAlias,java.lang.String,modal]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%221%22,%22datatype%22:%22java.lang.Integer%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setappend%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22modal%22,%22datatype%22:%22alias%22,%22submit%22:%22%22,%22value%22:%22" + dopnomfld +  "%22,%22dataformatting%22:%22null%22,%22classname%22:%22null%22,%22pageid%22:%22%22}]}&obj=null&tab=0");
  }
  //Сохранить
  otv = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpg + "|read|null&function={%22classname%22:%22ejb/CRMBOOpportunity%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22false%22,%22datatype%22:%22java.lang.Boolean%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null");
      if (otv != "<SCRIPT>deInitTabs();</SCRIPT>") {
      alert("Не удалось обновить заявку: "+otv);
      return;
      }
if (clstehz){
 //задание Техническая Поддержка - Выезд Дилера
 transnum = $("td").filter(function() {
  return $(this).text() == "Техническая Поддержка";
 }).next().next().next().next().next().next().filter(function() {
  return $(this).text() == "Выезд Дилера";
 }).children().children().attr("row");
  //Переводим в оформлен сервис
inresp = zp('activinumsla', getdpgmain(), transnum);
dpgnewslice = inresp.slice(90, 100);
dpgnew = Number(dpgnewslice.match(/\d+/));
  zp('activistatsla', dpgnew, '7F92FA87D0920B3A05F9199CCEFAF012');
  zp('activisavesla', dpgnew);
}

}


//Создать коммуникацию с категорией
function necomaddwcat(catcomunid){
  dpgmain = getdpgmain();
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgmain + "callcentre/callcentre|new|tab|Communications&function={%22classname%22:%22ejb/CRMBOInteraction%22,%22functionname%22:%22readImpl%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22interactionsbyintercontactid%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22interactionsbyintercontactid%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22interstartdate,desc%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22interactions.contactsbyintercontactid.contactid=:p1%20and%20interdeleted=0%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,contactid]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22interactions.contactsbyintercontactid,interactions.contactsbyinterrepcontactid,interactions.contactsbyinterinitiatorcontactid,interactions.interactionmedia%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22interstartdate%20desc%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%222%22,%22datatype%22:%22java.lang.Integer%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setreplace%22}&databinding=&obj=tab_Communications_DPG" + dpgmain + "callcentre/callcentre&tab=0");
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=markAsInitialised&params=DPG" + dpgmain + "callcentre/callcentre|true|Communications&function=&databinding=&obj=tabinfo_Communications_DPG" + dpgmain + "callcentre/callcentre&tab=0");
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgmain + "callcentre/callcentre|new|tab|Communications&function={%22classname%22:%22ejb/CRMBOAPPCallCentre%22,%22functionname%22:%22tabOpened%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22communications%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22null%22}&databinding=&obj=tab_Communications_DPG" + dpgmain + "callcentre/callcentre&tab=0");
  //Новая
  dpgnewinc = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgmain + "callcentre/callcentre|null|create|7|true:true:Communications:43|0&function=&databinding=&obj=[object%20HTMLDivElement]&tab=0");
  dpgnewi = dpgnewinc.slice(dpgnewinc.indexOf('DPG')+3, dpgnewinc.indexOf('DPG')+9);
  dpgnewi = Number(dpgnewi.match(/\d+/));
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgnewi + "|edit|tab|Categories&function={%22classname%22:%22ejb/CRMBOInterToInterCategory%22,%22functionname%22:%22read%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22intertointercategories%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22intertointercategories%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22intertointercategories.interactions.interid=:p1%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,interid]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22intertointercategories.interactioncategories%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22intercategorycode%20desc%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setreplace%22}&databinding=&obj=tab_Categories_DPG" + dpgnewi + "&tab=0");
  //категория catcomunid
  //30% - 5B8DF15177B408BB014F9F0732386318
  //50% - 62D83642FC54005B9F44891F6AF49841
  //100% - 4DAA0DB85DF52D6A5BEC76D4B8AAE2DC
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgnewi + "|edit|null&function={%22classname%22:%22ejb/CRMBOInterToInterCategory%22,%22functionname%22:%22create%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22intertointercategories%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22intertointercategories%22,%22row%22:%220%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22Interactioncategories%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22intercategoryid%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22interactioncategories%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getAlias,java.lang.String,modal]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setappend%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22modal%22,%22datatype%22:%22alias%22,%22submit%22:%22%22,%22value%22:%22" + catcomunid + "%22,%22dataformatting%22:%22null%22,%22classname%22:%22null%22,%22pageid%22:%22%22}]}&obj=null&tab=0");
  //Type
  req(baseQuery + dpgnewi + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22interactiontypes%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Interactiontypes%22,%22value%22:%2200F28902FBC990DDCAEF4E44A96ACA72%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0");
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgnewi + "|null|null&function={%22classname%22:%22ejb/CRMBOInteraction%22,%22functionname%22:%22copyFromTemplate%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,interactiontypes/intertypeid]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0");
  //media
  req(baseQuery + dpgnewi + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22interactionmedia%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Interactionmedia%22,%22value%22:%229%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0");
  //Сохранить
  otv = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgnewi + "|read|null&function={%22classname%22:%22ejb/CRMBOInteraction%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22false%22,%22datatype%22:%22java.lang.Boolean%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0");
  if (otv != "<SCRIPT>deInitTabs();</SCRIPT>") {
   alert(otv);
   return;
  }
  if($("#dicorejhelper").prop("checked")){
    if (catcomunid == "5B8DF15177B408BB014F9F0732386318"){
      closeper('0',1,"Создана коммуникация для начисления скидки 30% по миграции на Амос");
    } else if (catcomunid == "62D83642FC54005B9F44891F6AF49841"){
      closeper('0',1,"Создана коммуникация для начисления 50% по миграции на Амос");
    } else if (catcomunid == "4DAA0DB85DF52D6A5BEC76D4B8AAE2DC"){
      closeper('0',1,"Создана коммуникация для начисления 100% по миграции на Амос");
    }
    statb("Rejected");
  }
  
}


//создать и закрыть перерасчет 
function statb(prim){
prich = 'Причина: ' + prim;
slanumchikl = $($("input[id*=mychekforfin]")[0]).parent().next().next().next().next().next().next().next().text();
slanumint = getslainnum(slanumchikl);
dpgmain = getdpgmain();
zp('activisla', dpgmain);
dpgnewin = zp('activisodsla', dpgmain);
dpgnewi = dpgnewin.slice(dpgnewin.indexOf('DPG')+3, dpgnewin.indexOf('DPG')+9);
dpgnew = Number(dpgnewi.match(/\d+/));
zp('activitypesla', dpgnew, '862D6C91BA5119C8BE6A9A167D79EC51');
zp('activistatsla', dpgnew, 'Status6');
zp('podpisactiv', dpgnew, slanumint);
zp('activinotsla', dpgnew, encodeURIComponent(prich));
zp('actividescrsla', dpgnew, 'Дог: ' + slanumchikl);
zp('activishnotsla', dpgnew, 'Выполнено');
zp('activinahsla', dpgnew, '01CC497EC508241C536C8A3904CCEDF2');
zp('activisavesla', dpgnew);
}

//Найти по тексту в елементе
function poisk(mytext, tag, kol) {
intext = $(tag).filter(function () {
return $(this).text().indexOf(mytext) != -1;
});
if (kol === undefined || kol === '') {
return intext;
} else {
return intext[kol];
}
}

function makefun(t) {
 act = $(t).parent().prev().prev().prev().prev().children().val();
 slanum = $(t).parent().parent().prev().find("a").parent().text();
 paket = $(t).parent().parent().prev().find("a").parent().next().next().text();
 obolo = $(t).parent().parent().prev().text().toLowerCase().indexOf('obolon');
 slanumint = getslainnum(slanum);
 zaplanikna = $(t).parent().next().children().val();
 Nowboqet = req('http://crm.viasat.ua/crm/ajaxservlet?perform=getModalDialog&params=create|null||subscriptions/subscriptionDetailBody|ejb/CRMBOSubscription;read;java.lang.String@' + slanumint + '|').indexOf("MDU");
 
iswb = $(t).prev('input[type=checkbox]:checked');


 paketin = getservin(paket);
 paketout = $(t).parent().prev().prev().children().val();
 pricelistin = $(t).parent().prev().prev().prev().children().val();
 offe = $(t).parent().prev().children().val();

 dpgmain = getdpgmain();
 dpgnewin = zp('openpsa', dpgmain);
 dpgnewslice = dpgnewin.slice(48, 55);
 dpgnew = Number(dpgnewslice.match(/\d+/));

 if (act == '5') {
  zp('selectslapsa', dpgnew, slanumint);
  zp('acttypepsa', dpgnew, act);
  zp('slectservpsa', dpgnew, paketin);
  zp('slectpriclstpsa', dpgnew, pricelistin, 'to');
  zp('slectofferpsa', dpgnew, offe, 'to');
if (iswb[0] !== undefined) {
  zp('slectprocodpsa', dpgnew, 'D30C957E720110C93C539C4488121C6E');
}
  zp('renewpsa', dpgnew);
  if (zaplanikna !== ""){
    zp('execnotnowpsa', dpgnew);
    zp('execnapsa', dpgnew, zaplanikna);
  }
  otv = zp('submitpsa', dpgnew);
  if (otv != "<SCRIPT>deInitTabs();</SCRIPT>") {
   alert(otv);
  }
 } else {
  zp('selectslapsa', dpgnew, slanumint);
  zp('acttypepsa', dpgnew, act);
  zp('slectservpsa', dpgnew, paketin);
  if (paketout == "E1CC54736209C32AA1E0C5565265C78D"){
    buq = 'D98654E128E4BE40FAC56E484E6FD5D9';
  } else if (obolo != "-1" || Nowboqet != "-1" ) {
    buq = 'F7A34A3B94AEBF0ECFF1CEC133E40D1B';
  } else {
    buq = 'A86F87D4F5DEB26385C96B7B3CB514A4';
  }
  zp('slectbouquetpsa', dpgnew, buq);
  zp('slecttoservpsa', dpgnew, paketout);
  zp('slectpriclstpsa', dpgnew, pricelistin, '');
  zp('slectofferpsa', dpgnew, offe, '');
if (iswb[0] !== undefined) {
  zp('slectprocodpsa', dpgnew, 'D30C957E720110C93C539C4488121C6E');
}
  if (zaplanikna !== ""){
    zp('execnotnowpsa', dpgnew);
    zp('execnapsa', dpgnew, zaplanikna);
  }
  otv = zp('submitpsa', dpgnew);
  if (otv != "<SCRIPT>deInitTabs();</SCRIPT>") {
   alert(otv);
  }
 }
if (otv == "<SCRIPT>deInitTabs();</SCRIPT>") {
 $("div[id*=FinTransSummary] input[onclick*=execSummarySearch][name=Search]").click();
 $("div[id*=SubscriptionProvServicesSummary] input[onclick*=execSummarySearch][name=Search]").click();
}
if (offe == "765579B09A814AAFE4D1856A07E07BA7") {
  statb("4+2");
}
if (offe == "4067660BABADAD3D6846B2CB9AD456FD") {
  statb("3+1");
}
if (offe == "457DF052F83AA4E0ACC4D6A6752A1820") {
  statb("999_for_year");
}

  if($("#rejhelper").prop("checked")){
    statb("Rejected");
  }
}

//Доступные прайслисты для пакета - ser
function pakakaget(ser, pakaka) {
if (pakaka === undefined) {
pakaka = getservin(ser);
}
pricelistsfrompakaka = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarydrilldown&params=prodpricelists%7CPRODUCTPRICELISTS.ProdID~' + pakaka + '%7C%7Cproductsummary-' + pakaka + '%7CPrice%3Cnobr%3E%20lists%3Cimg%20src%3D%22img%2Farrow_expand2.gif%22%20alt%3D%22%22%20width%3D%2211%22%20height%3D%2211%22%20border%3D%220%22%3E%3C%2Fnobr%3E');
pricelistslist = pricelistsfrompakaka.split('</td><td>');
myarrprst = '';
from = 0;
testfin = (pricelistslist.length/8).toFixed();
while (testfin--) {
wrkwhtpr = pricelistslist[from];
wrkin = wrkwhtpr.split("'");
wrkin = wrkin[wrkin.length-4];
wrkwhtpr = wrkwhtpr.split('"><td>');
wrkwhtpr = wrkwhtpr[wrkwhtpr.length-1];

wrktsena = pricelistslist[from+2];
wrktsena = wrktsena.split('</');
wrktsena = wrktsena[0];
wrktsena = wrktsena.split('>');
wrktsena = wrktsena[1];
wrktsena = wrktsena/1 + wrktsena*0.2;
wrktsena = wrktsena.toFixed(2);
myarrprst = myarrprst + "<option value=\"" + wrkin + "\">" + wrkwhtpr + " ~" + wrktsena + "грн</option>";
from += 8;
}
return myarrprst;
}

//Счет для акции Rassrochka
function assrochka() {
slaget = $("tr[style*=silver] td a")[0];
var slanum = $(slaget).text();
slanumint = getslainnum(slanum);
//dpg главной страницы
dpgmain = getdpgmain();
//dpg будующего счета
dpgnewin = zp('sozdrtrans', dpgmain);
dpgnewslice = dpgnewin.slice(50, 55);
dpgnew = Number(dpgnewslice.match(/\d+/));
//Работаем с транзакцией
zp('tiptrans', dpgnew, 'CustFinTrxnType1');
zp('podpistrans', dpgnew, slanumint);
zp('pricelistrans', dpgnew, '2D637E4090AEF0AF5BCEBAC868C39FA1');
zp('paymettrans', dpgnew, 'PM7');
zp('linestrans', dpgnew);
zp('addlinetrans', dpgnew);
zp('prodtrans', dpgnew, '564B636B27ABEEC6702220B9B20C14F8', '1');
zp('quantitytrans', dpgnew, '0.5', '1');
zp('unitpricetrans', dpgnew, '416.666', '1');
zp('spisstrans', dpgnew, '01/01/2015', '1');
zp('calkultrans', dpgnew);
zp('duedatetrans', dpgnew, '01/01/2015');
otv = zp('savetrans', dpgnew);
  if (otv != "<SCRIPT>deInitTabs();</SCRIPT>") {
   alert(otv);
  }
$("div[id*=FinTransSummary] input[onclick*=execSummarySearch][name=Search]").click();
}


//добавить и удалить затемнение
function shadowonoff() {
 tenkais = $("#tenka");
 if (tenkais[0] === undefined) {
  var docHeight = $(document).height();
  $("body").first().prepend("<div id='tenka' style=\"height: " + docHeight + "px; opacity: 0.4; position: absolute; top: 0px; left: 0px; width: 100%; z-index: 5000; background-color: black;\"></div>");
  setTimeout(function() {
   $("#tenka").remove();
  }, 100);
 }
}

function req(url) {
 var myreq = getXmlHttp();
 myreq.open('GET', url, false);
 myreq.send(null);
 return myreq.responseText;
}

function reqq(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error("Network Error"));
    };
    req.send();
  });
}

//dpg главной страницы
function getdpgmain() {
 var dpgmainid = $("label[id*=detailtab_img_DPG]").attr("id");
 var dpgmainslice = dpgmainid.slice(15, 30);
 var dpgmain = Number(dpgmainslice.match(/\d+/));
 return dpgmain;
}

//Глобальная функция запросов
function zp(type, dpg, vr1, vr2, vr3) {
 var ans;
 var gpc = "http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG";
 var smd = baseQuery;
 switch (type) {
  //**Шаблон:
  //case 'oktrtrans': ans = req(); break;
  
  //******************************Финансы*****************************
  //Открыть фин. транзакцию за номером и поймать ответ zp('oktrtrans', '', 'номер транзакции');
  case 'oktrtrans': ans = req('http://crm.viasat.ua/crm/ajaxservlet?perform=getModalDialog&params=create%7Cnull%7C%7Cfintrans%2FfintransDetailBody%7Cejb%2FCRMBOCustomerFinTransaction%3Bread%3Bjava.lang.String%40' + vr1 + '%7C'); break;
   //Создать фин. транзакцию да ДПГ главной страницы и ловим ответ zp('sozdrtrans', 'ДПГ главной стр.');
  case 'sozdrtrans': ans = req(gpc + dpg + 'callcentre/callcentre|null|create|7|false:false:FinTransSummary:CreateFinTran|0&function=&databinding=&obj=[object%20HTMLDivElement]&tab=0'); break;
   //Изменить статус транзакции zp('statetrans', 'ДПГ', 'статус');
  case 'statetrans': req(gpc + dpg + '|read|null&function={%22classname%22:%22ejb/CRMBOCustomerFinTransaction%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22false%22,%22datatype%22:%22java.lang.Boolean%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22customerfintrxnstatuses%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22CustFinTrxnStatus' + vr1 + '%22,%22dataformatting%22:%22null%22,%22classname%22:%22com.crm.hib.mp.Customerfintrxnstatuses%22,%22pageid%22:%22%22}]}&obj=null&tab=0'); break;
   //Удалить фин. транзакцию за DPG zp('deltrans', 'ДПГ');
  case 'deltrans': req(gpc + dpg + '|read|null&function={%22classname%22:%22ejb/CRMBOCustomerFinTransaction%22,%22functionname%22:%22delete%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22null%22}&databinding=&obj=null&tab=0'); break;

   //Работа с новой/открытой транзакцией:
   //Выбираем тип zp('tiptrans', 'ДПГ', 'тип тринзакции (видно в меню выбора)');
  case 'tiptrans': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22customerfintrxntypes%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Customerfintrxntypes%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
   //Выбираем подписку zp('podpistrans', 'ДПГ', 'внутренний номер договора');
  case 'podpistrans': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22subscriptions%22,%22datatype%22:%22load%22,%22classname%22:%22Subscriptions%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
   //Прайслист zp('pricelistrans', 'ДПГ', 'внутренний номер прайслиста');
  case 'pricelistrans': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22pricelists%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Pricelists%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
   //Пеймент метод zp('paymettrans', 'ДПГ', 'внутренний номер Payment method');
  case 'paymettrans': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22paymentmethods%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Paymentmethods%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
   //Дата zp('datetrans', 'ДПГ', 'дата создания новой транзакции');
  case 'datetrans': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22custfintrxndate%22,%22datatype%22:%22java.util.Date%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
   //Линеечки zp('linestrans', 'ДПГ');
  case 'linestrans': ans = req(gpc + dpg + '|edit|tab|LineItems&function={%22classname%22:%22ejb/CRMBOCustomerFintrxnLine%22,%22functionname%22:%22read%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22customerfintrxnlines%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22customerfintrxnlines%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22customerfintrxnlines.customerfintransactions.custfintrxnid=:p1%20and%20customerfintrxnlines.custfintrxnlndeleted=0%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,custfintrxnid]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22customerfintrxnlines.productsbyprodid%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setreplace%22}&databinding=&obj=tab_LineItems_DPG' + dpg + '&tab=0'); break;
   //Находим транзакцию zp('findtrans', 'ДПГ', 'номер транзакции');
  case 'findtrans': req(gpc + dpg + '|null|null&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22relatedtrxn%22,%22datatype%22:%22alias%22,%22submit%22:%22%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22,%22classname%22:%22null%22,%22pageid%22:%22%22}]}&obj=null&tab=0'); break;
   //Вытягиваем zp('getstrans', 'ДПГ');
  case 'getstrans': req(gpc + dpg + '|null|null&function={%22classname%22:%22test.ActionHandler%22,%22functionname%22:%22loadAndCopyFTLines%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22pojo%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getAlias,java.lang.String,relatedtrxn]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22null%22}&databinding=&obj=null&tab=0'); break;
   //Немножко магии zp('somemagiktrans', 'ДПГ');
  case 'somemagiktrans': req(gpc + dpg + '|null|main&function=&databinding=&obj=main_DPG' + dpg + '&tab=0'); break;
   //Сохраняем и ловим ответ zp('savetrans', 'ДПГ');
  case 'savetrans': ans = req(gpc + dpg + '|read|null&function={%22classname%22:%22ejb/CRMBOCustomerFinTransaction%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22false%22,%22datatype%22:%22java.lang.Boolean%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
   //списать с zp('spisstrans', 'ДПГ', 'дата', 'номер линейки в транзакции');
  case 'spisstrans': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22customerfintrxnlines[' + vr2 + ']/custfintrxnlndate%22,%22datatype%22:%22java.util.Date%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22DATEONLY%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
   //списать по zp('spisptrans', 'ДПГ', 'дата', 'номер линейки в транзакции');
  case 'spisptrans': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22customerfintrxnlines[' + vr2 + ']/custfintrxnlntodate%22,%22datatype%22:%22java.util.Date%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22DATEONLY%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
  //ячейка Quantity zp('quantitytrans', 'ДПГ', 'Колличество', 'номер линейки в транзакции');
  case 'quantitytrans': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22customerfintrxnlines[' + vr2 + ']/custfintrxnlnqty%22,%22datatype%22:%22java.lang.Double%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22DIGITS:6%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
  //ячейка Unit price zp('unitpricetrans', 'ДПГ', 'Unit pric', 'номер линейки в транзакции');
  case 'unitpricetrans': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22customerfintrxnlines[' + vr2 + ']/custfintrxnlnunitprice%22,%22datatype%22:%22java.lang.Double%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22DIGITS:5%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
   //ячейка Disc % zp('disountpers', 'ДПГ', 'Disc %', 'номер линейки в транзакции');
  case 'disountpers': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22customerfintrxnlines[' + vr2 + ']/custfintrxnlndiscpercentage%22,%22datatype%22:%22java.lang.Double%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22DIGITS:6%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
  //ячейка общего баланса линейки zp('totalamttrans', 'ДПГ', 'сумма', 'номер линейки в транзакции');
  case 'totalamttrans': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22customerfintrxnlines[' + vr2 + ']/custfintrxnlntotalamt%22,%22datatype%22:%22java.lang.Double%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22DIGITS:6%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req('http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG' + dpg + '|null|null&function={%22classname%22:%22test.ActionHandler%22,%22functionname%22:%22calculateLine%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%22' + vr2 + '%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22pojo%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22CURRENT_ROW%22,%22datatype%22:%22java.lang.Integer%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22null%22}&databinding=&obj=null&tab=0'); break;
  //Выбрать продукт(пакет) zp('prodtrans', 'ДПГ', 'тип продукта', 'номер линейки в транзакции');
  case 'prodtrans': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22customerfintrxnlines[' + vr2 + ']/productsbyprodid%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Products%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
  //дополнительное поле Due Date zp('duedatetrans', 'ДПГ', 'дата Due Date');
  case 'duedatetrans': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22custfintrxnduedate%22,%22datatype%22:%22java.util.Date%22,%22classname%22:%22null%22,%22value%22:%22'+ vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
  //Кнопка Add Line zp('addlinetrans', 'ДПГ');
  case 'addlinetrans': req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOCustomerFintrxnLine%22,%22functionname%22:%22create%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22customerfintrxnlines%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22customerfintrxnlines%22,%22row%22:%220%22,%22istab%22:%22true%22,%22datasortby%22:%22custfintrxnlnid%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22Products%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22prodid%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22productsbyprodid%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22991C09C855D90E823B8FA19CB6BC9E15%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setappend%22}&databinding=&obj=null&tab=0'); break;
   //калкулейт лайн zp('calkultrans', 'ДПГ');
  case 'calkultrans':req(gpc + dpg + '|null|null&function={%22classname%22:%22test.ActionHandler%22,%22functionname%22:%22calculateLine%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22pojo%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getSelectedDTOs,java.lang.String,customerfintrxnlines]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22null%22}&databinding=&obj=null&tab=0');break;
   
   //******************************Договор на главной*****************************
   //Выгружаем выполненные действия по внутреннему номеру договора и ловим ответ zp('execactsla', '', 'внутренний номер договора');
  case 'execactsla': ans = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarydrilldown&params=subscriptionexecutedactions%7CSUBSCRIPTIONACTIONS.SubID~' + vr1 + '%7C%7Cccsubscriptionsummary-' + vr1 + '%7CExecuted%3Cnobr%3E%20actions%3Cimg%20src%3D%22img%2Farrow_expand2.gif%22%20alt%3D%22%22%20width%3D%2211%22%20height%3D%2211%22%20border%3D%220%22%3E%3C%2Fnobr%3E'); break;
   //открываем все задания в подписке и ловим ответ zp('activisla', 'ДПГ главной');
  case 'activisla': ans = req(gpc + dpg + 'callcentre/callcentre|new|tab|Activities&function={%22classname%22:%22ejb/CRMBOActivity%22,%22functionname%22:%22readFromCC%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22activitiesbyactivityinitiatorcontactid%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22activitiesbyactivityinitiatorcontactid%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22activitystartdate,desc%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22activities.contacts.contactid=:p1%20and%20activities.activitydeleted=0%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,contactid]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22activities.activitytypes,activities.status,activities.users,activities.userroles,activities.contacts,activities.quotations%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setreplace%22}&databinding=&obj=tab_Activities_DPG' + dpg + 'callcentre/callcentre&tab=0'); break;
   //Открыть задание по номеру zp('activinumsla', 'ДПГ главной', 'Номер задания по счету');
  case 'activinumsla': ans = req(gpc + dpg + 'callcentre/callcentre|read|create|ActNumModal|true:false:Activities:ActivityNumber|' + vr1 + '&function=&databinding=&obj=[object%20HTMLDivElement]&tab=0'); break;
  //Создаем новое задание zp('activisodsla', 'ДПГ главной');
  case 'activisodsla': ans = req('http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG' + dpg + 'callcentre/callcentre|null|create|7|true:true:Activities:43|0&function=&databinding=&obj=[object%20HTMLDivElement]&tab=0'); break;
  //Выбираем тип задания zp('activitypesla', 'ДПГ', 'тип');
  case 'activitypesla': req(baseQuery + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22activitytypes%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Activitytypes%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req('http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG' + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOActivity%22,%22functionname%22:%22copyActType%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,activitytypes/acttypeid]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%2210%22,%22datatype%22:%22java.lang.Integer%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
   //Работаем с заданием:
  //Выбираем подписку zp('podpisactiv', 'ДПГ', 'внутренний номер договора');
  case 'podpisactiv': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22subscriptions%22,%22datatype%22:%22load%22,%22classname%22:%22Subscriptions%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
  //Открыть задание по внутреннему номеру и вернуть ответ  zp('activiopsla', '', 'внутренний номер задания');
  case 'activiopsla': ans = req('http://crm.viasat.ua/crm/activity.do?act=itm&jndi=ejb/CRMBOActivity&fc=read&pv0=' + vr1 + '&pvc=1'); break;
   //Статус задания zp('activistatsla', 'ДПГ', 'статус');
  case 'activistatsla': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22status%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Status%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
   //Дата Due time zp('actividuesla', 'ДПГ', 'дата Due time');
  case 'actividuesla': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22activityduedate%22,%22datatype%22:%22java.util.Date%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
   //Загальни примитки zp('activishnotsla', 'ДПГ', 'Shared notes');
  case 'activishnotsla': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22activitysharednote%22,%22datatype%22:%22sharednote%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
  //примитки zp('activinotsla', 'ДПГ', 'notes');
  case 'activinotsla': ans = req(baseQuery + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22activitynote%22,%22datatype%22:%22null%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
  //Поле опис - zp('actividescrsla', 'ДПГ', 'Description - опис');
  case 'actividescrsla': ans = req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22activitydesc%22,%22datatype%22:%22null%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
   //Принять на zp('activinahsla', 'ДПГ', 'внутр номер оператора');
  case 'activinahsla': req(gpc + dpg + '|edit|null&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22userroles%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22UserRoleID%22,%22dataformatting%22:%22null%22,%22classname%22:%22Userroles%22,%22pageid%22:%22%22},{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22users%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22,%22classname%22:%22Users%22,%22pageid%22:%22%22}]}&obj=null&tab=0'); break;
   //Дата закрытия задания  zp('activclosetimesla', 'ДПГ', 'Close time');
  case 'activclosetimesla': ans = req(smd + dpgnew + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22activityclosedate%22,%22datatype%22:%22java.util.Date%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
   //Сохраняем задание zp('activisavesla', 'ДПГ')
  case 'activisavesla': ans = req(gpc + dpg + '|read|null&function={%22classname%22:%22ejb/CRMBOActivity%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22false%22,%22datatype%22:%22java.lang.Boolean%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
   //Для расторжений:
   //Выбираем черн алл zp('activichurnallsla', 'ДПГ', 'Номер действия расторжения');
  case 'activichurnallsla': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22actions%22,%22datatype%22:%22alias%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
   //Выполнить черн алл zp('activiexechcsla', 'ДПГ');
  case 'activiexechcsla': req(gpc + dpg + '|read|null&function={%22classname%22:%22test.ActionHandler%22,%22functionname%22:%22executeAndCloseActivity%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22pojo%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22null%22}&databinding=&obj=null&tab=0'); break;
   //обновить/сохранить zp('activisavechusla', 'ДПГ');
  case 'activisavechusla': req(gpc + dpg + '|read|null&function={%22classname%22:%22ejb/CRMBOActivity%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22false%22,%22datatype%22:%22java.lang.Boolean%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
   
   //******************************Управление подпиской*****************************
   //Perform subscription action zp('openpsa', 'ДПГ главной');
  case 'openpsa': req('http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG' + dpg + 'callcentre/callcentre|edit|main&function=&databinding=&obj=main_DPG' + dpg + 'callcentre/callcentre&tab=0'); ans = req(gpc + dpg + 'callcentre/callcentre|null|create|performaction_modal|false:false:Campaign:CampLookup|0&function={%22classname%22:%22null%22,%22functionname%22:%22setDropdownValueDelayed%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22staticjs%22,%22parameters%22:[{%22value%22:%22subscription%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%221%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22true%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22null%22}&databinding=&obj=[object%20HTMLDivElement]&tab=0'); req(gpc + dpg + '|new|tab|subprovsevices&function=&databinding=&obj=tab_subprovsevices_DPG' + dpg + '&tab=0'); break;
   //Выбираем номер zp('selectslapsa', 'ДПГ', 'внутренний номер договора');
  case 'selectslapsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22subscription%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Subscriptions%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22loadSubActionSetSubscription%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,subscription/subid]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
   //Тип действия zp('acttypepsa', 'ДПГ', 'тип действия');
  case 'acttypepsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22subscriptionactiontype%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Subscriptionactiontypes%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22loadSubActionSetActionCode%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
   //Тип поддействия zp('subacttypepsa', 'ДПГ', 'тип поддействия');
  case 'subacttypepsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22subscriptionsubactiontype%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Subscriptionsubactiontypes%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22loadSubActionSetSubActionCode%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
   //Удалить елемент (тюнер...) - zp('delelempsa', dpg, 'внутр. номер елемента');
  case 'delelempsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22installeditem%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Installeditems%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22echoDTO%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
   //Выбираем текущий сервис zp('slectservpsa', 'ДПГ', 'внутренний номер сервиса');
  case 'slectservpsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22service%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Products%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22setDefaultProductAttributes%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
   //Выбираем bouquet zp('slectbouquetpsa', 'ДПГ', 'внутренний номер bouquet');
  case 'slectbouquetpsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22changetobouquetid%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Bouquets%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22getSubTypeAvailableToServicesBasedOnBouquet%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%221%22,%22datatype%22:%22java.lang.Integer%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%221%22,%22datatype%22:%22java.lang.Integer%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22null%22}&databinding=&obj=null&tab=0'); break;
   //Выбираем новый сервис To Service zp('slecttoservpsa', 'ДПГ', 'внутренний номер нового сервиса');
  case 'slecttoservpsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22toservice%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Products%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22setDefaultProductAttributes%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
   //Выбираем Price List zp('slectpriclstpsa', 'ДПГ', 'внутренний номер Price List', 'добавить to если действие Change of Contract');
  case 'slectpriclstpsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22' + vr2 + 'pricelists%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Pricelists%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22echoDTO%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
   //Выбираем Промо-код zp('slectprocodpsa', 'ДПГ', 'Внутренний номер Промо-кода')
  case 'slectprocodpsa': req(gpc + dpg + '|new|null&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22campaign%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22,%22classname%22:%22Campaigns%22,%22pageid%22:%22%22}]}&obj=null&tab=0'); req(gpc + dpg + '|new|component|false:false:null:createdbycampid|0&function=&databinding=&obj=component_0_createdbycampid_DPG' + dpg + '&tab=0'); break;
   //Выбираем Промо-оффер zp('slectofferpsa', 'ДПГ', 'Внутренний номер Промо-оффера', 'добавить to если действие Change of Contract');
   case 'slectofferpsa': ans = req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22' + vr2 + 'promotion%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Promotions%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
   //галочка Renew Promo Offer Start Date zp('renewpsa', 'ДПГ');
  case 'renewpsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22renewpromoofferstartdate%22,%22datatype%22:%22alias%22,%22classname%22:%22null%22,%22value%22:%221%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
  //Выбрать оборудование zp('institmpsa', 'ДПГ', 'Внутренний номер карты/тюнера...');
  case 'institmpsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22installeditem%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Installeditems%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22echoDTO%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
  //Выбрать новый номер елемента при замене - Swap zp('addnewelemswappsa', 'ДПГ', 'Внутренний номер карты/тюнера...');
  case 'addnewelemswappsa': req(gpc + dpg + '|edit|null&function={%22classname%22:%22ejb/CRMBOSubscription%22,%22functionname%22:%22echoDto%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22toinstalleditem%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22,%22classname%22:%22Installeditems%22,%22pageid%22:%22%22}]}&obj=null&tab=0'); break;
  //Submit zp('submitpsa', 'ДПГ');
  case 'submitpsa': ans = req(gpc + dpg + '|read|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22submitSubActionSet%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
  //Edit zp('editpsa', 'ДПГ');
  case 'editpsa': req(gpc + dpg + '|edit|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22createNewSubActionSet%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
  //Новый договор zp('nslapsa', 'ДПГ');
  case 'nslapsa': ans = req(gpc + dpg + '|new|create|subscription_new|false:false:Main_Information:subscription|0&function=&databinding=&obj=[object%20HTMLDivElement]&tab=0'); break;
  //Переходим в него zp('nslagopsa', 'ДПГ - Новое')
  case 'nslagopsa': req('http://crm.viasat.ua/crm/ajaxservlet?perform=changeSelectedTab&params=DPG' + dpg + '|true|subprovsevices&function=&databinding=&obj=null&tab=0'); break;
  //Новый фин аккаунт zp('nslafinakpsa', 'ДПГ - Новое');
  case 'nslafinakpsa': ans = req(gpc + dpg + '|new|create|subaccount_new|false:false:Main_Information:subaccount|0&function=&databinding=&obj=[object%20HTMLDivElement]&tab=0'); break;
  //Переходим в Новый фин аккаунт zp('nslafinakgopsa', 'ДПГ - Новое');
  case 'nslafinakgopsa': req(gpc + dpg + '|new|tab|TB_finAccPayMethodDetails&function={%22classname%22:%22ejb/CRMBOFinAccPayMethodDetail%22,%22functionname%22:%22read%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22finaccpaymethoddetails%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22finaccpaymethoddetails%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22finaccpaymethoddetails.financialaccounts.finaccid=:p1%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,finaccid]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22finaccpaymethoddetails.financialaccounts,finaccpaymethoddetails.paymentmethods,finaccpaymethoddetails.contactbanks%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setreplace%22}&databinding=&obj=tab_TB_finAccPayMethodDetails_DPG' + dpg + '&tab=0'); req('http://crm.viasat.ua/crm/ajaxservlet?perform=markAsInitialised&params=DPG' + dpg + '|true|TB_finAccPayMethodDetails&function=&databinding=&obj=tabinfo_TB_finAccPayMethodDetails_DPG' + dpg + '&tab=0'); req(gpc + dpg + '|new|menu&function=&databinding=&obj=nav_DPG' + dpg + '&tab=0'); break;
  //Сохраняем новый фин аккаунт + выбираем его zp('nslafinaksavepsa', 'ДПГ - Новое', 'ДПГ - предыдущее');
  case 'nslafinaksavepsa': req(gpc + dpg + '|read|null&function={%22classname%22:%22ejb/CRMBOFinancialAccount%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22false%22,%22datatype%22:%22java.lang.Boolean%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); req(gpc + vr1 + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscription%22,%22functionname%22:%22resetPaymentMethods%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding={databindings:[{%27datasourcekey%27%20:%20%27null%27,%27datasourceset%27%20:%20%27%27,%20%27datapath%27%20:%20%27financialaccounts%27,%20%27datatype%27%20:%20%27java.lang.Object%27,%20%27submit%27%20:%20%27%27,%27value%27%20:%20%27[[getDTO]]%27,%27dataformatting%27%20:%20%27null%27,%20%27classname%27%20:%27null%27,%20%27pageid%27%20:%27DPG' + dpg + '%27}]}&obj=null&tab=0'); req(gpc + vr1 + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscription%22,%22functionname%22:%22calculateRelatedSubscriptionsNum%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,subid]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,financialaccounts/finaccid]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,finaccpaymethoddetails/finaccpmdetailid]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); req(gpc + vr1 + '|null|main&function=&databinding=&obj=main_DPG' + vr1 + '&tab=0'); break;
  //Тип подписки - Normal zp('nslanormalpsa', 'ДПГ');
  case 'nslanormalpsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22subscriptiontypes%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Subscriptiontypes%22,%22value%22:%221%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscription%22,%22functionname%22:%22getDefaultAttributesFromType%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscription%22,%22functionname%22:%22resetPaymentMethods%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); req(gpc + dpg + '|null|main&function=&databinding=&obj=main_DPG' + dpg + '&tab=0'); break;
  //Bouquet zp('nslaobuquetpsa', 'ДПГ', "Bouquet");
  case 'nslaobuquetpsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22bouquets%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Bouquets%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
  //Biling Schema zp('nslaobilingschemapsa', 'ДПГ', 'Biling Schema');
  case 'nslaobilingschemapsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22billingschemas%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Billingschemas%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscription%22,%22functionname%22:%22resetPaymentMethods%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
  //Subscription no zp('nslaosubnumpsa', 'ДПГ', 'Номер договора');
  case 'nslaosubnumpsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22subnum%22,%22datatype%22:%22null%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
  //Сохраняем - начало с ответом zp('nslaosubnumsaveapsa', 'ДПГ');
  case 'nslaosubnumsaveapsa': ans = req(gpc + dpg + '|read|null&function={%22classname%22:%22ejb/CRMBOSubscription%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22false%22,%22datatype%22:%22java.lang.Boolean%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
  //Продолжение сохранения выше zp('nslaosubnumsavebpsa', 'ДПГ - старый', 'ДПГ - новый');
  case 'nslaosubnumsavebpsa': req(gpc + dpg + '|null|null&function=&databinding={databindings:[{%27datasourcekey%27%20:%20%27null%27,%27datasourceset%27%20:%20%27%27,%20%27datapath%27%20:%20%27subscription%27,%20%27datatype%27%20:%20%27java.lang.Object%27,%20%27submit%27%20:%20%27%27,%27value%27%20:%20%27[[getDTO]]%27,%27dataformatting%27%20:%20%27null%27,%20%27classname%27%20:%27null%27,%20%27pageid%27%20:%27DPG' + vr1 + '%27}]}&obj=null&tab=0'); req(gpc + dpg + '|null|main&function=&databinding=&obj=main_DPG' + dpg + '&tab=0'); req(gpc + vr1 + '|null|removepage&function=&databinding=&obj=null&tab=0'); break;
  //Выполнить действие без проверки zp('execnovalpsa', 'ДПГ');
  case 'execnovalpsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22subactionexecnovalidations%22,%22datatype%22:%22null%22,%22classname%22:%22null%22,%22value%22:%221%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
  //Execute with No Provisioning zp('execnoprovpsa', 'ДПГ');
  case 'execnoprovpsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22subactionexecnoprovisioning%22,%22datatype%22:%22null%22,%22classname%22:%22null%22,%22value%22:%221%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); break;
//metoshka
  //**Шаблон:
  //case 'oktrtrans': ans = req(); break;
    //Execute Now - выполнить сейчас (точнее не сейчас) zp('execnotnowpsa', 'ДПГ');
  case 'execnotnowpsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22executenow%22,%22datatype%22:%22null%22,%22classname%22:%22null%22,%22value%22:%220%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22addPPVScheduledProducts%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
  //запланировать на zp('execnapsa', 'ДПГ', 'дата выполнения');
  case 'execnapsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22scheduleddate%22,%22datatype%22:%22java.util.Date%22,%22classname%22:%22null%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22addPPVScheduledProducts%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); break;
  //Add Service - кнопка добавления сервиса zp('addservpsa', 'ДПГ');
  case 'addservpsa': req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22addServices%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22services%22,%22row%22:%220%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setappend%22}&databinding=&obj=null&tab=0'); req(gpc + dpg + '|null|tab|subprovsevices&function=&databinding=&obj=tab_subprovsevices_DPG' + dpg + '&tab=0'); break;
  //Service - выбираем сервис (продукт) zp('prodtypepsa', 'ДПГ', 'тип сервиса');
  case 'prodtypepsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22services[1]/products%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Products%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22getDefaultSubServiceAttributes%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22services%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22services%22,%22row%22:%221%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getValue,java.lang.String,services[CURRENT_ROW]%20]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,subscription/subscriptiontypes/subtypeid]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%221%22,%22datatype%22:%22java.lang.Integer%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setitemreplace%22}&databinding=&obj=null&tab=0'); break;
  //Выбираем Price List для нового сервиса (добавленого) zp('pricelisttonewservpsa', 'ДПГ', 'Price List');
  case 'pricelisttonewservpsa': req(smd + dpg + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22services[1]/pricelists%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Pricelists%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22echoDto%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%221%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0'); req(gpc + dpg + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22removePromotionDueToChange%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22services%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22services%22,%22row%22:%221%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getValue,java.lang.String,services[CURRENT_ROW]%20]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22pricelist%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%220%22,%22datatype%22:%22java.lang.Integer%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setitemreplace%22}&databinding=&obj=null&tab=0'); req(gpc + dpg + '|null|tab|subprovsevices&function=&databinding=&obj=tab_subprovsevices_DPG' + dpg + '&tab=0'); break;
  //Promotional Offer для нового сервиса (добавленого) zp('offetonewservpsa', 'ДПГ', 'оффер');
  case 'offetonewservpsa': req(gpc + dpg + '|edit|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22copyAttributesFromPromoToSub%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%221%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,services[CURRENT_ROW]/products/prodid]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,services[CURRENT_ROW]/promotions/promoid]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22services[1]/promotions%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22,%22classname%22:%22Promotions%22,%22pageid%22:%22%22},{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22services[1]/tempPromoName%22,%22datatype%22:%22alias%22,%22submit%22:%22%22,%22value%22:%22[[getValue,java.lang.String,services[1]/promotions/promoname]]%22,%22dataformatting%22:%22null%22,%22classname%22:%22null%22,%22pageid%22:%22%22}]}&obj=null&tab=0'); break;
  //Поромокод для нового сервиса (добавленого) zp('codtonewservpsa', 'ДПГ', 'код');
  case 'codtonewservpsa': req(gpc + dpg + '|edit|null&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22services[1]/campaigns%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22,%22classname%22:%22Campaigns%22,%22pageid%22:%22%22}]}&obj=null&tab=0'); req(gpc + dpg + '|null|tab|subprovsevices&function=&databinding=&obj=tab_subprovsevices_DPG' + dpg + '&tab=0'); break;
  //Дмлер для нового сервиса (добавленого) zp('dilerpsa', 'ДПГ', 'Дилер');
  case 'dilerpsa': req(gpc + dpg + '|edit|null&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22partners%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22,%22classname%22:%22Partners%22,%22pageid%22:%22%22},{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22channels%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22ChannelID%22,%22dataformatting%22:%22null%22,%22classname%22:%22Channels%22,%22pageid%22:%22%22},{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22individuals%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22IndID%22,%22dataformatting%22:%22null%22,%22classname%22:%22Individuals%22,%22pageid%22:%22%22}]}&obj=null&tab=0'); break;
  //Добавляем новый елемент (карта, тюнер...) zp('additempsa', 'ДПГ', 'Номер елемента');
  case 'additempsa': req(gpc + dpg + '|edit|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionHandler%22,%22functionname%22:%22addInstalledItems%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22installeditems%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22installeditems%22,%22row%22:%220%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getAlias,java.lang.String,modal]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setappend%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22modal%22,%22datatype%22:%22alias%22,%22submit%22:%22%22,%22value%22:%22' + vr1 + '%22,%22dataformatting%22:%22null%22,%22classname%22:%22null%22,%22pageid%22:%22%22},{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22dummyinstitemsernum%22,%22datatype%22:%22alias%22,%22submit%22:%22%22,%22value%22:%22null%22,%22dataformatting%22:%22null%22,%22classname%22:%22null%22,%22pageid%22:%22%22}]}&obj=null&tab=0'); break;


   //******************************Разное*****************************
   //Закрыто заданий zp('zakrzad', '', 'На кого призначено', 'дата', 'тип задания (862D6C91BA5119C8BE6A9A167D79EC51 - перерасчет)')
  case 'zakrzad': ans = req('http://crm.viasat.ua/crm/ajaxservlet?perform=getSearchResults&params=dpeservicesActivities.SearchActivityByActivityDetails%7Ctest%3Dtest%7Cfilter%3D%7Cdatasetreturnhiddenfield%3Dactivityid%7Cmultiselect%3D0%7Cflds%3Dactivityid%7Creturnobjname%3D%7Creturnobjkey%3DURL%3Aactivity.do%3Fact%3Ditm%26jndi%3Dejb%2FCRMBOActivity%26fc%3Dread%26pvc%3D1%26pv0%3D%7Cautoapply%3Dfalse%7Cc%3D3%7Ctb0%3D%7Cfd0%3D%7Cal0%3DAssignedTo%7Cex0%3DBeginsWith%7Cva0%3D' + vr1 + '%7Cao0%3DAnd%7Ctb1%3DACTIVITIES%7Cfd1%3DActTypeID%7Cal1%3D%7Cex1%3DEquals%7Cva1%3D' + vr3 + '%7Cao1%3DAnd%7Ctb2%3DACTIVITIES%7Cfd2%3DActivityCloseDate%7Cal2%3D%7Cex2%3DEquals%7Cva2%3D' + vr2 + '%7Cao2%3DAnd'); break;
 }
 return ans;
}

function redactabletrans(tt){
fndtrnin = $(tt).parent().parent().attr("onclick");
fndtrn = fndtrnin.slice(fndtrnin.indexOf("t,'")+3, fndtrnin.indexOf("','"));
setTimeout(function() {
somstr = $(tt).parent().parent().next().next().children().children().children().children().children().children().children().children().next().next().children().children()[0];
somstr = $(somstr).find("a");
totline = somstr.length/2;
if (totline > 0){
while (totline--){
frmbgn = somstr[(totline*2)];
elemtar = $(frmbgn).parent().nextAll();
//linenum = $(frmbgn).parent().prev().text();
linenum = totline+1;
$(elemtar).map(function(indx, element) {
topelem = $(element).children();
stp = 1;
if(topelem[0] === undefined){
topelem = $(element);
stp = 2;
}
$(topelem).attr("ondblclick", "nextstptr(this, " + stp + "," + linenum + "," + indx + "," + "'" + fndtrn + "'" + ")");
});
}
}
}, 1000);
}

function nextstptr(elm, stp, linenum, vasnum, transnumin) {
corval = $(elm).text().replace(',', '.');
sizeelm = corval.length;
$(elm).html('<input autocomplete="off" size="' + sizeelm + '" style="text-align:right; float:right;" type="text" value="' + corval + '">');
$(elm).children().first().focus();
$(elm).children().first().select();
cortrdro = $(elm).attr("ondblclick");
$(elm).attr("ondblclick", "");
$(elm).children().first().focusout(function(){
if (stp == 1) {
newval = $(elm).children().first().val().replace(',', '.');
if (Number(((corval.replace(".","123456789")).replace(/\D+/g,"")).replace("123456789",".")) !== Number(((newval.replace(".","123456789")).replace(/\D+/g,"")).replace("123456789","."))){
lasttagetr(linenum, corval, newval, vasnum, transnumin, elm);
}
} else {
newval = $(elm).children().first().val();
if (corval !== newval){
lasttagetr(linenum, corval, newval, vasnum, transnumin, elm);
}
}
$(elm).attr("ondblclick", cortrdro);
$(elm).html(corval);
});
}


function lasttagetr(linenum, corval, newval, vasnum, transnumin, elm) {
//alert (linenum + " " + corval + " " + newval + " " + vasnum + " " + transnumin);
var ftransinresp = zp('oktrtrans', '', transnumin);
ftransinrespdpg = ftransinresp.slice(122, 125);
ftransnewrespdpg = parseInt(ftransinrespdpg, 10);
zp('linestrans', ftransnewrespdpg);
if (vasnum == "5") {
  if (newval == "0"){
    newval = 0.00001;
  }
zp('disountpers', ftransnewrespdpg, newval, linenum);
} else if (vasnum == "8"){
zp('spisstrans', ftransnewrespdpg, newval, linenum);
zp('calkultrans', ftransnewrespdpg);
} else if (vasnum == "9"){
zp('spisptrans', ftransnewrespdpg, newval, linenum);
zp('calkultrans', ftransnewrespdpg);
} else if (vasnum == "2"){
zp('quantitytrans', ftransnewrespdpg, newval, linenum);
} else if (vasnum == "0"){
zp('unitpricetrans', ftransnewrespdpg, newval, linenum);
} else if (vasnum == "7"){
zp('totalamttrans', ftransnewrespdpg, newval, linenum);
zp('spisptrans', ftransnewrespdpg, '', linenum);
}
zp('statetrans', ftransnewrespdpg, 'ID1');
$("div[id*=FinTransSummary] input[onclick*=execSummarySearch][name=Search]").click();
}

function redakttranslastactos() {
elemos = $('input[type=checkbox]#mychekforfin')[0];
$(elemos).attr("checked", true);
elemos = $('input[type=checkbox]#mychekforfin')[1];
$(elemos).attr("checked", true);
redakttranslastact();
}

function redakttranslastact() {
  text = $("td").filter(function() {
   return $(this).text() == "Active";
  })[0];
  slanum = $(text).prev().text();
  slanumint = getslainnum(slanum);
  execin = zp('execactsla', '', slanumint);
  $("td[id*=ccsubscriptionsummary]").map(function(indx, element) {
   element.innerHTML = element.innerHTML + execin;
  });
  $("tr[id*=ccsubscriptionsummary]").attr("style", "");

  //Последняя активация
  lastactvin = $("td").filter(function() {
   return $(this).text() == "Activation";
  }).next().next()[0];
  lastactv = $(lastactvin).text();
 $("tr[id*=ccsubscriptionsummary]").children().children().children().children().children().children().remove();
redakttransoct(lastactv);
}  

function ExecutewithNo(vt){
  if (vt == "vali"){
//Execute with No Validations
zp('execnovalpsa', (Number((getPageId()).match(/\d+/))));
  } else if (vt == "prov"){
zp('execnoprovpsa', (Number((getPageId()).match(/\d+/))));
  }
}

//Отредавтировать транзакцию - дата с...
function redakttransoct(piss) {
if (piss === 0) {
piss = prompt("Дата с...");
}
findfirsttrans = $('input[type=checkbox]:checked[id*=mychekforfin]').parent().find('a')[0];
 var ftransnuminslice = $(findfirsttrans).attr("onclick");
 var ftransnumin = ftransnuminslice.slice(165, 197);
 var ftransinresp = zp('oktrtrans', '', ftransnumin);
 ftransinrespdpg = ftransinresp.slice(122, 125);
 ftransnewrespdpg = parseInt(ftransinrespdpg, 10);
zp('linestrans', ftransnewrespdpg);
zp('spisstrans', ftransnewrespdpg, piss, '1');
zp('calkultrans', ftransnewrespdpg);
zp('statetrans', ftransnewrespdpg, 'ID1');
redakttransoctcheker(piss);
}

function redakttransoctcheker(piss) {
 elemos = $('input[type=checkbox]:checked#mychekforfin')[0];
 $(elemos).attr("checked", false);
 cheknew = $('input[type=checkbox]:checked#mychekforfin')[0];
 if (cheknew !== undefined) {
  redakttransoct(piss);
 } else {
  $("div[id*=FinTransSummary] input[onclick*=execSummarySearch][name=Search]").click();
 }
}

//Открыть перерасчет из контакт центра
function opennext(piss) {
$('#clearhere').text("");
 bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=activitiessummary&plain=true');
 filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
ll = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7CACTIVITYTYPES.ActTypeName~%25D0%259F%25D0%25B5%25D1%2580%25D0%25B5%25D1%2580%25D0%25B0%25D1%2581%25D1%2587%25D0%25B5%25D1%2582~STATUS.StatusID~Status1~STATUS.StatusID_X~Open%2520(Open)~Substatus~2~%7C');
var mokey = ll.split('<td>Перерасчет</td><td>');
var makeyget = mokey[piss];
var chekmakeyget = makeyget.indexOf('☻');
if (chekmakeyget != "-1"){
 next = piss + 1;
 opennext(next);
 return;
} else {
var makeygetnext = makeyget.split('</td><td>');
trymycode = makeygetnext[2];
adddescr = "☻" + trymycode;
actnumin = makeyget.slice(makeyget.indexOf("pv0=")+4, makeyget.indexOf("pv0=")+36);
dpgget = zp('activiopsla', '', actnumin);
dpggeti = dpgget.slice(dpgget.indexOf('DPG')+3, dpgget.indexOf('DPG')+9);
dpg = Number(dpggeti.match(/\d+/));
trymydecode = encodeURIComponent(adddescr);
zp('actividescrsla', dpg, trymydecode);
anotest = zp('activisavesla', dpg);
if (anotest != "<SCRIPT>deInitTabs();</SCRIPT>"){
 next = piss + 1;
 opennext(next);
 return;
}
slanumslice = makeygetnext[8];
slanum = slanumslice.slice(-14, -4);
$("input[onkeyup*=SearchBySubNum]").val(slanum);
 sambo = $("input[onkeyup*=SearchBySubNum]")[0];
 setDataBindingField('null', 'null', 'searchBySubNumAlias', 'alias', 'null', 'null', sambo);
 qfModalByTimer('SearchBySubNum', 'false:false:null:CampLookup', 'quicksearch', 'edit', null, sambo, 200);
percom = makeygetnext[2] + " " + makeygetnext[3];
percom = percom.replace(/\s{2,}/g, ' ');
$('#clearhere').text(percom);
}
}

//Открыть заявку Upgrade for Support
function leadicloshelper(){
if (($("#kazinakinotes")[0]) === undefined){
$("body").after("<div id='kazinakinotes' class='kazinakinotes'></div><style type='text/css'>\
\n\
.kazinakinotes {\
    top: 15px;\
    position: fixed;\
    right: 0px;\
    background: #E3FF00;\
    font-weight: bold;\
    zoom: 90%;\
    z-index: 999995;\
}\n\
");
}
bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=oppsummary&plain=true');
filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7COPPTEMPLATES.OppTempID~D3B77AA1635CFF9653A82651E6991960~OPPTEMPLATES.OppTempID_X~Upgrade%2520for%2520Support~OPPSTAGES.OppStageID~1AECF357A53112C9AB03F7EB40F26F50~OPPSTAGES.OppStageID_X~%25D0%2592%25D1%2596%25D0%25B4%25D0%25BA%25D1%2580%25D0%25B8%25D1%2582%25D0%25BE%2520(Open)~OPPORTUNITIES.OppDueDate~%255E%255E' + dates() + '~%7C');
transnumin = subscrin.slice(subscrin.indexOf('value') + 7, subscrin.indexOf('[]O'));
leadmasterin = req("http://crm.viasat.ua/crm/oppDetail.do?act=itm&jndi=ejb/CRMBOOpportunity&fc=read&pv0=" + transnumin + "&pvc=1");
//DPG
dpga = Number((leadmasterin.slice(leadmasterin.indexOf("DPG")+3, leadmasterin.indexOf("DPG")+7)).match(/\d+/));
//Номер договора
slasic = leadmasterin.slice(leadmasterin.indexOf("oppuserfield8")+190, leadmasterin.indexOf("oppuserfield8")+200);
//комментарий
opnotesik = leadmasterin.slice(leadmasterin.indexOf("oppnotes")+214, leadmasterin.indexOf("textarea", leadmasterin.indexOf("oppnotes"))-2);
//открываем договор 
$("input[onkeyup*=SearchBySubNum]").val(slasic);
 sambo = $("input[onkeyup*=SearchBySubNum]")[0];
 setDataBindingField('null', 'null', 'searchBySubNumAlias', 'alias', 'null', 'null', sambo);
 qfModalByTimer('SearchBySubNum', 'false:false:null:CampLookup', 'quicksearch', 'edit', null, sambo, 200);
//Добавляем комментарий и чистим его через 10сек
($("#kazinakinotes")[0]).innerHTML = slasic + " - " + opnotesik;
  setTimeout(function() {
     var scrollTop = $('div[uid*=SubscriptionProvServices]').parent().offset().top;
     $(document).scrollTop(scrollTop);
    addchengesla();
  }, 5000);
  setTimeout(function() {
    ($("#kazinakinotes")[0]).innerHTML = "";
  }, 15000);

dpga = Number((leadmasterin.slice(leadmasterin.indexOf("DPG")+3, leadmasterin.indexOf("DPG")+7)).match(/\d+/));

reqq("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpga + "|read|null&function={%22classname%22:%22ejb/CRMBOOpportunity%22,%22functionname%22:%22accept%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22null%22}&databinding=&obj=null").then(function(response) {
  reqq("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpga + "|edit|null&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22subscriptions%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22" + getslainnum(slasic) + "%22,%22dataformatting%22:%22null%22,%22classname%22:%22Subscriptions%22,%22pageid%22:%22%22}]}&obj=null").then(function(response) {
   reqq("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpga + "|read|null&function={%22classname%22:%22ejb/CRMBOOpportunity%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22false%22,%22datatype%22:%22java.lang.Boolean%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null").then(function(response) {
   });
  });
});
}
//+ ее закрыть
function leadicloshelperclose(){
//выгружем доступные сервисы
servagetares = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getquicksearchresults&params=dataset%3Ddpsubscriptions.searchsubscriptionservices%7Ctbl%3DSUBSCRIPTIONSERVICES%7Cflds%3DPRODUCTS.ProdNum%7ColdSearch%3D%7Cfilter%3Dsubscriptionservices.subservicedeleted=0%20and%20producttypes.prodtypeisforprovision%20%3D%201%20and%20subscriptions.subid%20%3D%20'" + getslainnum(slasic) + "'%7Cpageid%3DDPG" + dpga + "%7Crow%3D0%7Cdatasetreturnhiddenfield%3DSubServiceID%7Csetmode%3Dedit%7Cautoapply%3Dtrue%7Cmultiselect%3Dfalse%7Coptions%3D%7C%7CtxtSearch%3D");
nser = servagetares.slice(servagetares.indexOf("pk=")+4, servagetares.indexOf("pval=")-2);
//выбираем
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpga + "|edit|null&function={%22classname%22:%22ejb/VTVCRMBOOpportunity%22,%22functionname%22:%22loadProdnumForRelatedService%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22oppuserfield14%22,%22datatype%22:%22null%22,%22submit%22:%22%22,%22value%22:%22" + nser + "%22,%22dataformatting%22:%22null%22,%22classname%22:%22subscriptionservices%22,%22pageid%22:%22%22}]}&obj=null");
//Выбираем статус 
req(baseQuery + dpga + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22oppstages%22,%22datatype%22:%22load%22,%22classname%22:%22com.crm.hib.mp.Oppstages%22,%22value%22:%2231FAF2DE782248404B5BB08283545C9B%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]");
//сохраняем
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpga + "|read|null&function={%22classname%22:%22ejb/CRMBOOpportunity%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22false%22,%22datatype%22:%22java.lang.Boolean%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null");
}

//Внутренний номер фин.аккаунта за номером договора
function getfinakinnumbysla(slanum) {
 bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=subscriptionsummary&plain=true');
 filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
 subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7CSUBSCRIPTIONS.SubNum~' + slanum + '~%7C');
 fikakin = subscrin.slice(subscrin.indexOf('CRMBOFinancialAccount') + 48, subscrin.indexOf(">", subscrin.indexOf('CRMBOFinancialAccount'))-33);
 return fikakin;
}

//Внутренний номер задания за номером
function getactivinumin(transnum) {
 bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=activitiessummary&plain=true');
 filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
 subscrin = req("http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=" + filtin + "%7CACTIVITIES.ActivityNumber~" + transnum + "~%7C");
 transnumin = subscrin.slice(subscrin.indexOf('value') + 7, subscrin.indexOf('[]' + transnum));
 return transnumin;
}

//Внутренний номер транзакции за номером
function gettransinnum(transnum) {
 bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=financialtransactions&plain=true');
 filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
 subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7CCUSTOMERFINTRANSACTIONS.CustFinTrxnNum~' + transnum + '~CUSTOMERFINTRANSACTIONS.CustFinTrxnDate~null%255E%255Enull~deleted~1~%7C');
 transnumin = subscrin.slice(subscrin.indexOf('value') + 7, subscrin.indexOf('[]' + transnum));
 return transnumin;
}


//Внутренний номер елемента за номером
function getelemnumin(transnum) {
    bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=institemsummary&plain=true');
    filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
    subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7CINSTALLEDITEMS.InstItemSerialNum~' + transnum + '~%7C');
    transnumin = subscrin.slice(subscrin.indexOf('value') + 7, subscrin.indexOf('[]'));
    return transnumin;
}

//Номер договора за номером елемента
function getslanumbyelemnum(transnum) {
    bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=institemsummary&plain=true');
    filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
    subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7CINSTALLEDITEMS.InstItemSerialNum~' + transnum + '~%7C');
    transnumin = subscrin.slice(subscrin.indexOf('value') + 7, subscrin.indexOf('[]'));
    subscrina = req("http://crm.viasat.ua/crm/ajaxservlet?perform=summarydrilldown&params=institemsubs%7CINITM.InstItemID~" + transnumin + "%7C%7Cinstitemsummary-" + transnumin + "%7CSubscriptions%3Cimg%20src%3D%22img%2Farrow_expand2.gif%22%20alt%3D%22%22%20width%3D%2211%22%20height%3D%2211%22%20border%3D%220%22%3E");
    subscrinb = subscrina.slice(subscrina.indexOf("<td>", (subscrina.indexOf("smselectrow(event")))+4, subscrina.indexOf("<td>", (subscrina.indexOf("smselectrow(event")))+14);
    return subscrinb;
}

//Внутренний номер договора за номером елемента
function getslainnumbyelemnum(transnum) {
    bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=institemsummary&plain=true');
    filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
    subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7CINSTALLEDITEMS.InstItemSerialNum~' + transnum + '~%7C');
    transnumin = subscrin.slice(subscrin.indexOf('value') + 7, subscrin.indexOf('[]'));
    subscrina = req("http://crm.viasat.ua/crm/ajaxservlet?perform=summarydrilldown&params=institemsubs%7CINITM.InstItemID~" + transnumin + "%7C%7Cinstitemsummary-" + transnumin + "%7CSubscriptions%3Cimg%20src%3D%22img%2Farrow_expand2.gif%22%20alt%3D%22%22%20width%3D%2211%22%20height%3D%2211%22%20border%3D%220%22%3E");
    subscrinb = subscrina.slice(subscrina.indexOf("smselectrow(event")+19, subscrina.indexOf("','", (subscrina.indexOf("smselectrow(event")+20)));
    return subscrinb;
}

function getslainnumbyelemnum1(transnum) {
    bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=institemsummary&plain=true');
    filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
    subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7CINSTALLEDITEMS.InstItemSerialNum~' + transnum + '~%7C');
    if (subscrin.indexOf("VISION") != -1) return true;
    return false;
}


//Внутренний номер заказа  за номером
function getleadin(transnum) {
 bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=oppsummary&plain=true');
 filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
 subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7COPPORTUNITIES.OppNum~' + transnum + '%7C~');
 transnumin = subscrin.slice(subscrin.indexOf('value') + 7, subscrin.indexOf('[]O' + transnum));
 return transnumin;
}


//номер договора за номером заказа 
function getleadin(transnum) {
 bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=oppsummary&plain=true');
 filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
 subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7COPPORTUNITIES.OppNum~' + transnum + '%7C~');
 transnumin = subscrin.slice(subscrin.indexOf('value') + 7, subscrin.indexOf('[]O' + transnum));
 return transnumin;
}


//Внутренний номер договора за его номером
function getslainnum(slanum) {
 bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=subscriptionsummary&plain=true');
 filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
 subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7CSUBSCRIPTIONS.SubNum~' + slanum + '~%7C');
 slanumin = subscrin.slice(subscrin.indexOf('value') + 7, subscrin.indexOf('[]' + slanum));
 return slanumin;
}

//Внутренний номер сервиса за его именем
function getservin(prod) {
 bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=productsummary&plain=true');
 filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
 subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7CPRODUCTS.ProdNum~' + prod + '~%7C');
 prodin = subscrin.slice(subscrin.indexOf('value') + 7, subscrin.indexOf('[]' + prod));
 return prodin;
}

//Внутренний номер оффера за его именем
function getofferin(offe) {
offeencode = encodeURIComponent(encodeURIComponent(offe));
 bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=promotionsummary&plain=true');
 filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
 subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7CPROMOTIONS.PromoName~' + offeencode + '~%7C');
 offein = subscrin.slice(subscrin.lastIndexOf('smselectrow(event', subscrin.indexOf(offe + "'")) + 19, subscrin.indexOf(offe + "'")-3);
 return offein;
}

//Внутренний номер Price list за его именем
function getpricelistin(pricelist) {
 if (pricelist == "Non-standart Pricelist") {
  pricelistin = "864C40224449AE698D2BBC91BAF9BF92";
 } else if (pricelist == "Standart for 2000") {
  pricelistin = "9D11FF36CE58B67771BCD1BDD38684D4";
 } else if (pricelist == "PL2014-03-01A") {
  pricelistin = "06D1513F906BA47425D443920B575FA7";
 } else if (pricelist == "PL 2014-05-19") {
  pricelistin = "1A4C9AF46370AF69382AC5CFBAE5545E";
 } else if (pricelist == "PL2014-07-24") {
  pricelistin = "0D366EC6FD9FFFFD094CFC389280DA0A";
 } else if (pricelist == "PLTW29") {
  pricelistin = "722D5C8B94C0E6B5FF86E161F1EE17A7";
 } else if (pricelist == "PLTW39") {
  pricelistin = "883DF309E1E5FC99DB40C7EC745133FD";
 } else if (pricelist == "PLTW49") {
  pricelistin = "F7C092A103A116543548BF0A8289FF52";
 } else if (pricelist == "PLTW59") {
  pricelistin = "0214AC7A9D59126725BB096735F4B82F";
 } else if (pricelist == "PL2014-08-20") {
  pricelistin = "EB4E6C3A841C9E5ACE5202B6B4853FE3";
 } else if (pricelist == "PL2014-10-01A") {
  pricelistin = "0BA4CC5BCB0AAC923B1122550CC7257F";
 } else if (pricelist == "PL2014-10-01B") {
  pricelistin = "C8762A792AAF03D8154EDF95A236059E";
 } else if (pricelist == "PL2014-10-01C") {
  pricelistin = "751E87EA3A13B405464599D4ACA32A6C";
 } else if (pricelist == "PL 2014-03-01") {
  pricelistin = "E37F7BB0DC1E2F2D18518F315F3632B3";
 } else if (pricelist == "Standart Pricelist") {
  pricelistin = "2D637E4090AEF0AF5BCEBAC868C39FA1";
 }
 return pricelistin;
}

//Проверка наличия чекбокся для транзакций и если нет, добавления
function ifcheckbox() {
 checkbox = $("#mychekforfin")[0];
 if (checkbox === undefined) {
  $("a[onclick*=fintransDetailBody]").parent().map(function(indx, element) {
   element.innerHTML = "<input type=checkbox id=mychekforfin  onchange=\"selectedtrans(this, 1)\">" + " " + element.innerHTML;
  });
  $("input[id=mychekforfin]").parent().next().next().next().next().next().attr("ondblclick", "selectedtrans(this, 2)");
poisk("Щомісячний рахунок за", "td").next().next().next().next().children().attr("style", "color:green");
poisk("Плата за реактивацію", "td").next().next().next().next().children().map(function(indx, element) {if ($(element).text().indexOf("-") == "-1") {$(element).css("color", "Magenta"); $(element).css("box-shadow", "0 0 .5em .1em Magenta inset");} else {$(element).css("color", "Magenta"); $(element).css("box-shadow", "0 0 .5em .1em Blue inset");}});
poisk("Реверсивний білінг за", "td").map(function(indx, element) {$(element).nextAll().eq(3).children().attr("style", "color:#0000FF");});
poisk("Зміна пакету.", "td").map(function(indx, element) {$(element).nextAll().eq(3).children().attr("style", "font-weight: bold");});
$(poisk("Type", "td[bgcolor]", 0)).attr("onclick", "finfun.knopka()");
$("input[id=mychekforfin]").parent().map(function(indx, element) {isnow = $(element).nextAll().eq(9).children().attr("onclick"); $(element).nextAll().eq(9).children().attr("onclick", "redactabletrans(this); " + isnow)});
}
}

function respictrl(u, r){
if (u.indexOf("callcentre/callcentre|edit|details") !== -1 || u.indexOf("callcentre/callcentre|null|details") !== -1){
r = r.slice(0, r.indexOf("<SCRIPT>tabRead('detailtab','Addresses'")) + "<SCRIPT>tabRead('detailtab','Activities','edit','tab','Activities','Activities');markedInitialised('true','Activities')</SCRIPT>" + r.slice(r.indexOf("'Addresses')</SCRIPT>")+21);
r = r.slice(0, r.indexOf("<SCRIPT>tabRead('detailtab','Opportunities'")) + r.slice(r.indexOf("'Opportunities')</SCRIPT>")+25);
r = r.slice(0, r.indexOf("<SCRIPT>tabRead('detailtab','Phones'")) + r.slice(r.indexOf("'Phones')</SCRIPT>")+18);
}
return r;
}

//добавить в заявки активный сервис
function kakulechka(allleads){
leda = allleads[0];
ledin = getleadin(leda);
//открываем заявку
resolp = req("http://crm.viasat.ua/crm/oppDetail.do?act=itm&jndi=ejb/CRMBOOpportunity&fc=read&pv0=" + ledin + "&pvc=1");
subsci = resolp.slice(resolp.indexOf("_RelatedService_")-53, resolp.indexOf("_RelatedService_")-43);
subscr = getslainnum(subsci);
dpga = Number((resolp.slice(resolp.indexOf("DPG")+3, resolp.indexOf("DPG")+7)).match(/\d+/));
//выгружем доступные сервисы
servagetares = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getquicksearchresults&params=dataset%3Ddpsubscriptions.searchsubscriptionservices%7Ctbl%3DSUBSCRIPTIONSERVICES%7Cflds%3DPRODUCTS.ProdNum%7ColdSearch%3D%7Cfilter%3Dsubscriptionservices.subservicedeleted=0%20and%20producttypes.prodtypeisforprovision%20%3D%201%20and%20subscriptions.subid%20%3D%20'" + subscr + "'%7Cpageid%3DDPG" + dpga + "%7Crow%3D0%7Cdatasetreturnhiddenfield%3DSubServiceID%7Csetmode%3Dedit%7Cautoapply%3Dtrue%7Cmultiselect%3Dfalse%7Coptions%3D%7C%7CtxtSearch%3D");
nser = servagetares.slice(servagetares.indexOf("pk=")+4, servagetares.indexOf("pval=")-2);
//выбираем
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpga + "|edit|null&function={%22classname%22:%22ejb/VTVCRMBOOpportunity%22,%22functionname%22:%22loadProdnumForRelatedService%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22oppuserfield14%22,%22datatype%22:%22null%22,%22submit%22:%22%22,%22value%22:%22" + nser + "%22,%22dataformatting%22:%22null%22,%22classname%22:%22subscriptionservices%22,%22pageid%22:%22%22}]}&obj=null");
//сохраняем
enda = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpga + "|read|null&function={%22classname%22:%22ejb/CRMBOOpportunity%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22false%22,%22datatype%22:%22java.lang.Boolean%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null");
if (enda == "<SCRIPT>deInitTabs();</SCRIPT>"){
console.log(leda + "...   вроде OK");
} else {
console.log(leda);
}
allleads = allleads.slice(1);
if (allleads.length > 0){
kakulechka(allleads);
}
}

function getservstatusinlog(allsaa){
sla = allsaa[0];
maindpg = getdpgmain();
slain = getslainnum(sla);
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + maindpg + "callcentre/callcentre|edit|null&function={%22classname%22:%22com.crm.web.callcentre.CallCentre%22,%22functionname%22:%22copyAliasesToSession%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22pojo%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22null%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22modal%22,%22datatype%22:%22alias%22,%22submit%22:%22%22,%22value%22:%22" + slain + "%22,%22dataformatting%22:%22null%22,%22classname%22:%22null%22,%22pageid%22:%22%22}]}&obj=null&tab=0");
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + maindpg + "callcentre/callcentre|edit|null&function={%22classname%22:%22ejb/CRMBOAPPCallCentre%22,%22functionname%22:%22readFromSearchBy%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22subscriptions%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getAlias,java.lang.String,modal]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0");
rekuka = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + maindpg + "callcentre/callcentre|edit|main&function=&databinding=&obj=main_DPG" + maindpg + "callcentre/callcentre&tab=0");
serina = rekuka.slice(rekuka.indexOf("_SUBSCRIPTIONSERVICES.SubServiceUserField3")-34, rekuka.indexOf("_SUBSCRIPTIONSERVICES.SubServiceUserField3"));
servallin = req("http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=" + serina + "%7C%7C");
servallinparts = servallin.split("</td><td>");
if ((servallinparts[0]).slice(-14, -4) == sla){
srvstatus = servallinparts[3];
}
if (servallinparts[14] !== undefined && (servallinparts[11]).slice(-14, -4) == sla) {
srvstatus = srvstatus + " + " + servallinparts[14];
}
if (servallinparts[25] !== undefined && (servallinparts[22]).slice(-14, -4) == sla) {
srvstatus = srvstatus + " + " + servallinparts[25];
}
if (servallinparts[36] !== undefined && (servallinparts[33]).slice(-14, -4) == sla) {
srvstatus = srvstatus + " + " + servallinparts[36];
}
console.log(sla + " = " + srvstatus);
allsaa = allsaa.slice(1);
if (allsaa.length > 0){
getservstatusinlog(allsaa);
}
}

//Отслеживание изминений на странице
function lester(url, res){
setTimeout(function() {

//Редактирование дат в договоре
  if (url.indexOf("|edit|tab|subprovsevices&") !== -1){
    readktsla();
  }
//редактирование дат в задании
  if (url.indexOf("Activities:ActivityNumber") !== -1){
    readktactdate();
  }
  if (url.indexOf("CRMBOActivityCategory") !== -1){
    $("span[id*=_cmdAdd_]").children().first().click();
  }
  //Что в задании на перерасчет
  if (url.indexOf("|tab|Activities") !== -1 && url.indexOf("activitiesbyactivityinitiatorcontactid") !== -1){
    whotinass2();
  }

//При создании нового окна, подтягивать кнопку - свернуть
  if (url.indexOf("perform=getModalDialog&params=create") !== -1 || url.indexOf("|create|") !== -1 ){
    dpgpageinfo = res.slice(res.indexOf('DPG')+3, res.indexOf('DPG')+9);
    dpgpageinfo = "pageinfo_DPG" + Number(dpgpageinfo.match(/\d+/));
    $("input[id=" + dpgpageinfo + "]").after("<label><span><a onclick=\"funhide(this, 1);\">Свернуть   </a></span></label>");
  }

//добавление функции фильтров для элементов select
  if (res.indexOf("<select") !== -1){
    all = [];
    all = $.merge(all, $("font[id*=_Products_").find("select"));
    all = $.merge(all, $("font[id*=_subsevicesnum_").find("select"));
    all = $.merge(all, $("div[id*=_subscriptionactiontype_").find("select"));
   $(all).each(function(indx){
   $(this).attr("onclick", "addsearchfild2select(this,1)");
   });
  }

//Если это сервисы, добавляем на даблклик редактирование полей даты счета и пр.
  if (url.indexOf("perform=summarycomponent&params=") !== -1){
  if (res.indexOf("ccsubscriptionprovservicessummary~ccsubscriptionprovservicessummary") !== -1){
    addredcaliusserv();
  }
  }

//Если это финансовый транзакции запускаем ifcheckbox
  if (url.indexOf("perform=summarycomponent&params=") !== -1){
  if (res.indexOf("%2Fopt%2FIBM%2FWebSphere%2FAppServer%2Fprofiles%2FAppSrv01%2FinstalledApps%2FCell01%2FCrmEAR.ear%2FCrm.war%2Fcrmprintouts%2Ffintrans%2Ffintransdetail%2FInvoice.jrxml") !== -1){
    ifcheckbox();
  }
  }

  
}, 1);
}

//Редактирование данных в сервисах из контакт центра - добавление ondblclick
function addredcaliusserv(){
$("a[onclick*=ccsubscriptionprovservicessummary]").parent().next().find("tr").filter(function() {
   return $(this).attr("style") !== "display:none";
  }).filter(function() {
   return $(this).attr("id") !== undefined;
  }).each( function(){
    if ($($(this).children()[3]).text() !== "Churn" && $($(this).children()[3]).text() !== "Regret") {
        $($(this).children()[4]).attr("ondblclick", "redcaliusserv(this, 'liptd')");
        $($(this).children()[9]).attr("ondblclick", "redcaliusserv(this, 'bpsd')");
        $($(this).children()[10]).attr("ondblclick", "redcaliusserv(this, 'bped')");
        $($(this).children()[11]).attr("ondblclick", "redcaliusserv(this, 'pl')");
      }
    });
}

//Редактирование данных в сервисах из контакт центра - само редактирование
function redcaliusserv(e, t) {
  if (t == "liptd" || t == "bpsd" || t == "bped") {
    corval = $(e).text();
    corprod = $($(e).parent().children()[2]).text();
    sizeelm = corval.length;
    $(e).html('<input autocomplete="off" size="' + sizeelm + '" style="text-align:right; float:right;" type="text" value="' + corval + '">');
    $(e).children().first().focus();
    $(e).children().first().select();
    cortrdro = $(e).attr("ondblclick");
    $(e).attr("ondblclick", "");
  }
  $(e).children().first().focusout(function() {
    newval = $(e).children().first().val();
    if (corval == newval) {
      $(e).attr("ondblclick", cortrdro);
      $(e).html(corval);
    } else {
      slagetsel = $(e).parent().children().first().text();
      slagetselin = getslainnum(slagetsel);
      reqq('http://crm.viasat.ua/crm/ajaxservlet?perform=getModalDialog&params=create%7Cnull%7C%7Csubscriptions%2FsubscriptionDetailBody%7Cejb%2FCRMBOSubscription%3Bread%3Bjava.lang.String%40' + slagetselin + '%7C').then(function(response) {
        var dpgnextin = response.slice(110, 130);
        var dpgnext = Number(dpgnextin.match(/\d+/));
        reqq("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgnext + "|read|tab|subprovsevices&function={%22classname%22:%22ejb/VTVCRMBOSubscriptionService%22,%22functionname%22:%22read%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22subscriptionprovisioningservices%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22subscriptionprovisioningservices%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22subscriptionservices.subservicedeleted=0%20AND%20subscriptionservices.products.producttypes.prodtypeisforprovision=1%20AND%20subscriptionservices.subscriptions.subid=:p1%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,subid]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22subscriptionservices.products,subscriptionservices.subservicesalesuserid,subscriptionservices.pricelists,subscriptionservices.promotions,subscriptionservices.timeperiods,subscriptionservices.subservicecreatedbyuserid,subscriptionservices.subserviceupdatedbyuserid,subscriptionservices.opportunities,subscriptionservices.campaigns,subscriptionservices.channels,subscriptionservices.partners,subscriptionservices.individuals,subscriptionservices.products.producttypes%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setoverwrite%22}&databinding=&obj=tab_subprovsevices_DPG" + dpgnext + "&tab=0").then(function(response) {
          addsomenew = response;
          rownum = addsomenew.slice(addsomenew.indexOf("   readonly   >" + corprod + "</em></font></td><td NOWRAP>") - 55, addsomenew.indexOf("   readonly   >" + corprod + "</em></font></td><td NOWRAP>") - 54);
          if (t == "liptd") {
            req(baseQuery + dpgnext + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22subscriptionprovisioningservices[" + rownum + "]/subservicelastinvpertodate%22,%22datatype%22:%22java.util.Date%22,%22classname%22:%22null%22,%22value%22:%22" + newval + "%22,%22dataformatting%22:%22DATEONLY%22}]}&obj=[object%20HTMLInputElement]&tab=0");
          } else if (t == "bpsd") {
            req(baseQuery + dpgnext + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22subscriptionprovisioningservices[" + rownum + "]/subservicebindingstartdate%22,%22datatype%22:%22java.util.Date%22,%22classname%22:%22null%22,%22value%22:%22" + newval + "%22,%22dataformatting%22:%22DATEONLY%22}]}&obj=[object%20HTMLInputElement]&tab=0");
          } else if (t == "bped") {
            req(baseQuery + dpgnext + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22subscriptionprovisioningservices[" + rownum + "]/subservicebindingenddate%22,%22datatype%22:%22java.util.Date%22,%22classname%22:%22null%22,%22value%22:%22" + newval + "%22,%22dataformatting%22:%22DATEONLY%22}]}&obj=[object%20HTMLInputElement]&tab=0");
          } else {
            return;
          }
          req("http://crm.viasat.ua/crm/ajaxservlet?&perform=getPageComponent&params=DPG" + dpgnext + "|read|null&function={%22classname%22:%22ejb/CRMBOSubscription%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22false%22,%22datatype%22:%22java.lang.Boolean%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0");
          $("input[type=submit]").first().click();
        });
      });
    }
  });
}


function funhide(t, s){
if (s == 1){
pageinfo = $(t).parent().parent().prev().attr("id");
ogltex = $("div[id=" + pageinfo + "]").text();
$(t).parent().parent().parent().parent().css("display", "none");
inner = "<div onclick=\"funhide(this,2);\" solomka=\"" + pageinfo + "\">" + ogltex + "</div>";
$("#svertishi").append(inner);
} else if (s == 2){
dpgpageinfo = $(t).attr("solomka");
$(t).remove();
$("input[id=" + dpgpageinfo + "]").parent().parent().css("display", "block");
}
}

function obse() {
  var observer = new WebKitMutationObserver(function(mutations) {
    observer.disconnect();
    setTimeout(function() {
      ifcheckbox();
      obse();
    }, 200);
  });
  observer.observe(document, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  });
}

//Начинаем виселье
function finfun() {
finfun.knopka = function(){
//Добавить кнопку выбора типа транзакций
$(poisk("Type", "td[bgcolor]", 0)).attr("onclick", "");
poisk("Type", "td[bgcolor]", 0).innerHTML = '<select id="bobik" size="4" multiple="" onchange="finfun.zad()"><option>Invoice</option><option>Credit Invoice</option><option>Payment</option><option>Credit Payment</option></select>';
};
//Отфильтровать задания
finfun.zad = function() {
allwh = $("select[id*=bobik]").val();
$("input[id=mychekforfin]").parent().next().next().next().map(function(indx, element) {
$($(element).parent()[0]).attr("style", "");
tr = allwh.indexOf($(element).text());
if (tr == -1) {
$($(element).parent()[0]).attr("style", "display:none;");
}
});
};
}


function selectedtrans(t, p){
if (p == 1) {
  if ($(t).prop("checked")) {
   $(t).parent().next().next().next().next().next().attr("style", "background: Orange;");
   } else {
   $(t).parent().next().next().next().next().next().attr("style", "")}
} else if (p == 2) {
  if ($(t).prev().prev().prev().prev().prev().children().prop("checked")) {
   $(t).prev().prev().prev().prev().prev().children().first().prop("checked", false); $(t).attr("style", "");
   } else {
   $(t).prev().prev().prev().prev().prev().children().first().prop("checked", true); $(t).attr("style", "background: Orange;")}
}
}



//функция onhold delete posted для елементов с checkbox 
function onholdposteddelete(statustotrans) {
 findfirsttrans = $('input[type=checkbox]:checked[id*=mychekforfin]').parent().find('a')[0];
 var ftransnuminslice = $(findfirsttrans).attr("onclick");
 var ftransnumin = ftransnuminslice.slice(165, 197);
 var ftransinresp = zp('oktrtrans', '', ftransnumin);
 ftransinrespdpg = ftransinresp.slice(122, 125);
 ftransnewrespdpg = parseInt(ftransinrespdpg, 10);
 if (statustotrans == "onhold") {
  zp('statetrans', ftransnewrespdpg, '2');
 } else if (statustotrans == "posted") {
  zp('statetrans', ftransnewrespdpg, 'ID1');
 } else if (statustotrans == "delete") {
  zp('deltrans', ftransnewrespdpg);
 }
 elemos = $('input[type=checkbox]:checked#mychekforfin')[0];
 $(elemos).attr("checked", false);
 cheknew = $('input[type=checkbox]:checked#mychekforfin')[0];
 if (cheknew !== undefined) {
  onholdposteddelete(statustotrans);
 } else {
  $("div[id*=FinTransSummary] input[onclick*=execSummarySearch][name=Search]").click();
 }
}

//функция Credit для елементов с checkbox 
function credit(uatvstep, fee) {
 //Дата после выбраного елемента, только первая в виде текста + 1сек - newdate
 datefirst = $('input[type=checkbox]:checked#mychekforfin').parent().next().next()[0];
 var dateall = $(datefirst).text();
 getsec = dateall.slice(-2);
 getsecnum = parseInt(getsec, 10);
 sec = getsecnum + 1;
 getfirst = dateall.slice(0, -2);
 newdate = getfirst + sec;

 //Номер выбраной транзакции - transnum
 getnumtrans = $('input[type=checkbox]:checked[id*=mychekforfin]').parent().find('a')[0];
 var transnum = $(getnumtrans).text();

 //Номер договора выбраной транзакции - slanum
 slanumfirst = $('input[type=checkbox]:checked#mychekforfin').parent().next().next().next().next().next().next().next()[0];
 var slanum = $(slanumfirst).text();

 //Внутренний номер договора выбраной выше транзакции - slanumint
 intext = $("option").filter(function() {
  return $(this).text() == slanum;
 });
 var slanumint = $(intext).attr("value");

 //dpg главной страницы
 dpgmain = getdpgmain();
 //dpg будующего счета
 dpgnewin = zp('sozdrtrans', dpgmain);
 dpgnewslice = dpgnewin.slice(50, 55);
 dpgnew = Number(dpgnewslice.match(/\d+/));
 //Работаем с транзакцией
 zp('tiptrans', dpgnew, 'CustFinTrxnType2');
 zp('podpistrans', dpgnew, slanumint);
 zp('pricelistrans', dpgnew, '2D637E4090AEF0AF5BCEBAC868C39FA1');
 zp('paymettrans', dpgnew, 'PM7');
 zp('datetrans', dpgnew, newdate);
 zp('linestrans', dpgnew);
 zp('findtrans', dpgnew, transnum);
 zp('getstrans', dpgnew);
 zp('somemagiktrans', dpgnew);
 otv = zp('savetrans', dpgnew);
 if (otv != "<SCRIPT>deInitTabs();</SCRIPT>") {
  alert(otv);
 }
 elemos = $('input[type=checkbox]:checked#mychekforfin')[0];
 $(elemos).attr("checked", false);
 cheknew = $('input[type=checkbox]:checked#mychekforfin')[0];
 if (cheknew !== undefined) {
  credit(uatvstep, fee);
 } else if (uatvstep == "uatvfirststep") {
  penuatv(fee);
 } else if (uatvstep == "uatvsecondstep") {
  penuatv(fee);
 } else {
  $("div[id*=FinTransSummary] input[onclick*=execSummarySearch][name=Search]").click();
 }
}

//функция Credit для Реактивации (Смотрит последние 20шт)
function creditreact() {
 idx = 0;
 var chekcredit;
 while (chekcredit != "Invoice" && idx < 20) {
  intext = $("td").filter(function() {
   return $(this).text() == "Плата за реактивацію";
  })[idx];
  chekcredit = $(intext).next().next().text();
  idx += 2;
 }
 if (chekcredit == "Invoice") {
  react = $(intext).prev()[0];
  chekreact = $(react).children()[0];
  $(chekreact).attr("checked", true);
  credit();
 } else {
  alert('Не списаных реактиваций не найдено');
 }
}

//Функция списания периода за 1 или 2 мес или выбраной транзакции
function spisspoone(mone) {
 //списание периода 1 или 2 мес
 if (mone === "1" || mone === "2") {
  spiss = prompt("Списать с");
  spispo = prompt("Списать по");
  if (spiss === "" || spispo === "") {
   return;
  }
  monslice = spiss.split("/")[1];
  mon = Number(monslice.match(/\d+/));
  if (mon < 10) {
   mon = "0" + mon;
  }
  year = "/" + ((spiss.split("/")[2]).split(" ")[0]);
  datetrans1 = mon + year;
  spisp = spispo + "/" + datetrans1;
  spispline = 1;
  mytext1 = "Щомісячний рахунок за " + datetrans1;
  intexttrans1 = $("td").filter(function() {
   return $(this).text() == mytext1;
  });
  if (intexttrans1.length == "0") {
   alert("Транзакция 1 не найдена");
   return;
  }
  //Номер транзакции - transnum1
  getnumtrans1 = $(intexttrans1).prev().find('a')[0];
  transnum1 = $(getnumtrans1).text();

  //Если списываем период за 2 мес.
  if (mone == 2) {
   pchik1 = Number(monslice.match(/\d+/));
   pchik = pchik1 + 1;
   spisp = spispo + "/" + pchik + year;
   mon = (Number(monslice.match(/\d+/)) + 1);
   spispline = 2;
   if (mon < 10) {
    mon = "0" + mon;
   }
   year = "/" + ((spiss.split("/")[2]).split(" ")[0]);
   datetrans2 = mon + year;
   mytext2 = "Щомісячний рахунок за " + datetrans2;
   intexttrans2 = $("td").filter(function() {
    return $(this).text() == mytext2;
   });
   if (intexttrans2.length == "0") {
    alert("Транзакция 2 не найдена");
    return;
   }
   //Номер транзакции - transnum2
   getnumtrans2 = $(intexttrans2).prev().find('a')[0];
   transnum2 = $(getnumtrans2).text();
  }
  //Номер договора - slanum
  slanumfirst = $(getnumtrans1).parent().next().next().next().next().next().next().next();
  slanum = $(slanumfirst).text();
 }
 //списание указанного периода - транзакция отмечена голочкой
 if (mone === "3") {
  spiss = prompt("с");
  spisp = prompt("по");
    if (spiss === "" || spisp === "") {
   return;
  }
  //Номер выбраной транзакции - transnum
  getnumtrans = $('input[type=checkbox]:checked[id*=mychekforfin]').parent().find('a')[0];
  transnum1 = $(getnumtrans).text();

  //Номер договора выбраной транзакции - slanum
  slanumfirst = $('input[type=checkbox]:checked#mychekforfin').parent().next().next().next().next().next().next().next()[0];
  slanum = $(slanumfirst).text();
  spispline = 1;
 }
 //Списание периода непросмотра - из выполненых действий
 if (mone === "4") {
  //Выгружаем выполненые действия
  slanum = $("div[id*=_subscription_]").children().last().text();
  slanumint = $("div[id*=_subscription_]").children().last().val();
  if (slanumint === ""){
  slanum = $($("a[onclick*=subscriptionexecutedactions]")[0]).parent().parent().children().first().children().text();
  slanumint = getslainnum(slanum);
  }
  execin = zp('execactsla', '', slanumint);
  $("td[id*=ccsubscriptionsummary]").map(function(indx, element) {
   element.innerHTML = element.innerHTML + execin;
  });
  $("tr[id*=ccsubscriptionsummary]").attr("style", "");

  //Последняя Деактивация
  lastdeactvin = $("td").filter(function() {
   return $(this).text() == "Deactivation";
  }).next().next()[0];
  lastdeactv = $(lastdeactvin).text();

  //Последняя активация
  lastactvin = $("td").filter(function() {
   return $(this).text() == "Activation";
  }).next().next()[0];
  lastactv = $(lastactvin).text();
  if (lastdeactv === "" || lastactv === ""){
    if (lastdeactv === "" ){
      alert("дата деактивации не найдена");
    } else {
      alert("дата  реактивации не найдена");
    }
        return;
  }
  
  if (dt.crm_js(lastactv) < dt.crm_js(lastdeactv)){
    alert("дата деактивации больше даты реактивации ");
    return;
  }
  spiss = lastdeactv;
  spisp = lastactv;
  monslice = spisp.slice(3, 5);
  mon = Number(monslice.match(/\d+/));
  if (mon < 10) {
   mon = "0" + mon;
  }
  year = spisp.slice(5, 10);
  datetrans1 = mon + year;
  spispline = 1;
  mytext1 = "Щомісячний рахунок за " + datetrans1;
  intexttrans1 = $("td").filter(function() {
   return $(this).text() == mytext1;
  });
  if (intexttrans1.length == "0") {
   alert("Транзакция 1 не найдена");
   return;
  }
  monslicechek1 = spisp.slice(3, 5);
  monslicechek2 = spiss.slice(3, 5);
  if (monslicechek1 != monslicechek2) {
   spiss = "01" + spisp.slice(2);
  }
  //Номер транзакции - transnum1
  getnumtrans1 = $(intexttrans1).prev().find('a')[0];
  transnum1 = $(getnumtrans1).text();
 }
 //Внутренний номер договора - slanumint
 intext = $("option").filter(function() {
  return $(this).text() == slanum;
 });
 var slanumint = $(intext).attr("value");

 //dpg главной страницы
 dpgmain = getdpgmain();

 //dpg будующего счета
 var xmlhttp = getXmlHttp();
 dpgnewin = zp('sozdrtrans', dpgmain);
 dpgnewslice = dpgnewin.slice(50, 55);
 dpgnew = Number(dpgnewslice.match(/\d+/));

 //Работаем с транзакцией
 zp('tiptrans', dpgnew, 'CustFinTrxnType2');
 zp('podpistrans', dpgnew, slanumint);
 zp('pricelistrans', dpgnew, '2D637E4090AEF0AF5BCEBAC868C39FA1');
 zp('paymettrans', dpgnew, 'PM7');
 zp('datetrans', dpgnew, spisp);
 zp('linestrans', dpgnew);
 //Находим транзакцию 1
 zp('findtrans', dpgnew, transnum1);
 zp('getstrans', dpgnew);
 if (mone == '2') {
  //Находим транзакцию 2
  zp('findtrans', dpgnew, transnum2);
  zp('getstrans', dpgnew);
 }
 zp('spisstrans', dpgnew, spiss, '1');
 zp('spisptrans', dpgnew, spisp, spispline);
 zp('calkultrans', dpgnew);
 zp('somemagiktrans', dpgnew);
 //Сохраняем
 otv = zp('savetrans', dpgnew);
 if (otv != "<SCRIPT>deInitTabs();</SCRIPT>") {
  alert(otv);
 }
 $("div[id*=FinTransSummary] input[onclick*=execSummarySearch][name=Search]").click();
 if (mone === "4") {
  financy();
 }
}

//Функция списания указанного периода
function spisper(s, p) {
  //Дата с
  ds = Number((s.split("/")[0]).match(/\d+/));
  if (ds < 10) {
    ds = "0" + ds;
  }
  ms = Number((s.split("/")[1]).match(/\d+/));
  if (ms < 10) {
    ms = "0" + ms;
  }
  ys = Number(((s.split("/")[2]).split(" ")[0]).match(/\d+/));
  jsds = dt.crm_js(ds + "/" + ms + "/" + ys);
  //Дата по
  dp = Number((p.split("/")[0]).match(/\d+/));
  if (dp < 10) {
    dp = "0" + dp;
  }
  mp = Number((p.split("/")[1]).match(/\d+/));
  if (mp < 10) {
    mp = "0" + mp;
  }
  yp = Number(((p.split("/")[2]).split(" ")[0]).match(/\d+/));
  jsdp = dt.crm_js(dp + "/" + mp + "/" + yp);
if (dt.crm_js(ds + "/" + ms + "/" + ys) > dt.crm_js(dp + "/" + mp + "/" + yp)) {
  alert("Не корректный период");
  return;
}
  //Транзакции, которые относятся к данному периоду
  codes = dt.crm_js(ds + "/" + ms + "/" + ys);
  codep = dt.crm_js(dp + "/" + mp + "/" + yp);
  codes.setMonth(codes.getMonth() - 1);
  codes.setDate(1);
  codep.setDate(codep.getDate() + 1);
  atr = $("td").filter(function() {
    if ($(this).prev().prev().text() != "Плата за паперовий рахунок" && $(this).prev().prev().text() != "Плата за реактивацію") {
      return $(this).text() == "Invoice";
    }
  }).filter(function() {
    code = dt.crm_js($(this).prev().text());
    if (code <= codep && code >= codes) {
      return $(this);
    }
  });
  atr = $(atr).prev().prev().prev().find('a');
  
if (atr.length === 0) {
  alert("За указанный период транзакции не найдено");
  return;
}

  //Создаем кредит инвойс и вытягиваем в него все указанные транзакции
  dpgmain = getdpgmain();
  dpgnewin = zp('sozdrtrans', dpgmain);
  dpgnewslice = dpgnewin.slice(50, 55);
  dpgnew = Number(dpgnewslice.match(/\d+/));
  slanumint = getslainnum($($(atr[0]).parent().nextAll()[6]).text());
  zp('tiptrans', dpgnew, 'CustFinTrxnType2');
  zp('podpistrans', dpgnew, slanumint);
  zp('pricelistrans', dpgnew, '2D637E4090AEF0AF5BCEBAC868C39FA1');
  zp('paymettrans', dpgnew, 'PM7');
  zp('datetrans', dpgnew, p);
  zp('linestrans', dpgnew);
  tot = atr.length;
  while (tot--) {
    zp('findtrans', dpgnew, ($(atr[tot]).text()));
    zp('getstrans', dpgnew);
  }
  alllines = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgnew + "|null|tab|LineItems&function=&databinding=&obj=tab_LineItems_DPG" + dpgnew + "&tab=0");
  alllines = alllines.split("_Custfintrxnlndate_").slice(1);
  masiklin = [];
  tot = alllines.length;
  while (tot--) {
    li = tot;
    //номер линейки
    masiklin.push(alllines[li].slice(alllines[li].indexOf("[") + 1, alllines[li].indexOf("]")));
    //дата линейки с 
    masiklin.push(alllines[li].slice(alllines[li].indexOf("value='") + 7, alllines[li].indexOf("' /><a  onclick")));
    //дата линейки по
    masiklin.push(alllines[li].slice(alllines[li].indexOf("value='", alllines[li].indexOf("_Custfintrxnlntodate_")) + 7, alllines[li].indexOf("' /><a  onclick", alllines[li].indexOf("_Custfintrxnlntodate_"))));
  }
  lntodel = [];
  tot = masiklin.length / 3;
  while (tot--) {
    //номер линейки
    lun = masiklin[tot * 3];
    //с
    das = masiklin[(tot * 3) + 1];
    //по
    dap = masiklin[(tot * 3) + 2];
    if (das === "" || dap === "") {
      lntodel.push(lun);
    } else if (dt.crm_js(das) >= dt.crm_js(dp + "/" + mp + "/" + yp) || dt.crm_js(dap) < dt.crm_js(ds + "/" + ms + "/" + ys)) {
      lntodel.push(lun);
    } else {
      if (dt.crm_js(das) < dt.crm_js(ds + "/" + ms + "/" + ys)) {
        zp('spisstrans', dpgnew, (ds + "/" + ms + "/" + ys), lun);
      }
      if (dt.crm_js(dap) > dt.crm_js(dp + "/" + mp + "/" + yp)) {
        zp('spisptrans', dpgnew, (dp + "/" + mp + "/" + yp), lun);
      }
    }
  }
  zp('calkultrans', dpgnew);
  zp('somemagiktrans', dpgnew);
  req(baseQuery + dpgnew + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22tabremove%22,%22datatype%22:%22alias%22,%22classname%22:%22null%22,%22value%22:%22" + lntodel.join(",") + "%22,%22dataformatting%22:%22%22}]}&obj=[object%20HTMLInputElement]&tab=0");
  req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgnew + "|null|null&function={%22classname%22:%22ejb/CRMBOCustomerFintrxnLine%22,%22functionname%22:%22delete%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22customerfintrxnlines%22,%22row%22:%220%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getSelectedDTOs,java.lang.String,customerfintrxnlines]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0");
  zp('somemagiktrans', dpgnew);
  otv = zp('savetrans', dpgnew);
  if (otv != "<SCRIPT>deInitTabs();</SCRIPT>") {
    alert(otv);
  }
   $("div[id*=FinTransSummary] input[onclick*=execSummarySearch][name=Search]").click();
   tra = poisk("First Activation", "td");
    if (tra.length !== 0){financy();}
}


//перерасчет
function closeper(gounder, prombalok, prombaloka) {
 $('#clearhere').text("");
 if (gounder == "1") {
  underna = prompt("Перевести в андер на");
 }
 if (gounder == "2") {
  underna = dates(0);
 }
 dpgmain = getdpgmain();
 //Выгружаем задания, если не выгружены
 actone = $("font[id*=component_1_ActivityNumber]")[0];
 if (actone === undefined) {
  actinresp = zp('activisla', dpgmain);
  $("div[id*=tab_Activities][class=tabcontent_bottom]").map(function(indx, element) {
   element.innerHTML = element.innerHTML + actinresp;
  });
  $("div[id*=tabdiv_Activities_DPG]").attr("style", "");
 }
 //Все перерасчеты
 pererasty = $("td").filter(function() {
  return $(this).text() == "Перерасчет";
 });
 //Находим перерасчеты Open, Wait payment и Under Investigation
 pererastyall = $(pererasty).next().next().next().next().next().next().filter(function() {
  return $(this).text() == "Open";
 });
 waity = $(pererasty).next().next().next().next().next().next().filter(function() {
  return $(this).text() == "Wait payment";
 });
 undery = $(pererasty).next().next().next().next().next().next().filter(function() {
  return $(this).text() == "Under Investigation";
 });
 //обьеденяем всех в pererastyall
 $.merge(pererastyall, waity);
 $.merge(pererastyall, undery);
 danet = "da";
 if (pererastyall.length > 1) {
  if (confirm("Тут есть второй незакрытый перерасчет, продолжить?")) {
   danet = "da";
  } else {
   danet = "net";
   return;
  }
 }

 if (gounder == "1" || gounder == "2") {
  openact = $(pererastyall)[0];
  transnum = $(openact).children().children().attr("row");
  inresp = zp('activinumsla', dpgmain, transnum);
  dpgnewslice = inresp.slice(90, 100);
  dpgnew = Number(dpgnewslice.match(/\d+/));
parapapa = inresp.split('</textarea>');
parapapa = parapapa[0];
parapapa = parapapa.split('1000));" >');
parapapa = parapapa[1];
chekparapapa =  parapapa.slice(0, 1);
if (chekparapapa == "☻") {
newdescr = parapapa.slice(1);
newdescr = encodeURIComponent(newdescr);
zp('actividescrsla', dpgnew, newdescr);
}
  zp('activistatsla', dpgnew, 'Status2');
  zp('actividuesla', dpgnew, underna);
  zp('activisavesla', dpgnew);
  $(openact).map(function(indx, element) {
   element.innerHTML = "Under Investigation";
  });
  $(openact).parent().css("background-color", "#FF4500");
 zadanija();
 } else if (gounder == "0") {
  openact = $(pererastyall)[0];
  transnum = $(openact).children().children().attr("row");
  inresp = zp('activinumsla', dpgmain, transnum);
  dpgnewslice = inresp.slice(90, 100);
  dpgnew = Number(dpgnewslice.match(/\d+/));
parapapa = inresp.split('</textarea>');
parapapa = parapapa[0];
parapapa = parapapa.split('1000));" >');
parapapa = parapapa[1];
chekparapapa =  parapapa.slice(0, 1);
if (chekparapapa == "☻") {
newdescr = parapapa.slice(1);
newdescr = encodeURIComponent(newdescr);
zp('actividescrsla', dpgnew, newdescr);
}

setnsfprrst = 'Status6';
setnsfprrstcom = 'Выполнено';

if(prombalok == 1){
setnsfprrst = '0E7132DF4D376A409C3A92DD56783486';
setnsfprrstcom = encodeURIComponent(prombaloka);
}
  zp('activistatsla', dpgnew, setnsfprrst);
  zp('activishnotsla', dpgnew, setnsfprrstcom);
  zp('activinahsla', dpgnew, '01CC497EC508241C536C8A3904CCEDF2');
  zp('activisavesla', dpgnew);
  $(openact).map(function(indx, element) {
   element.innerHTML = "Closed";
  });
  $(openact).parent().css("background-color", "#FF4500");
  zadanija();
  if($("#gonexthelper").prop("checked")){
    opennext(1);
  }
 } else if (gounder == "3") {
  openact = $(pererastyall)[0];
  transnum = $(openact).children().children().attr("row");
  inresp = zp('activinumsla', dpgmain, transnum);
  dpgnewslice = inresp.slice(90, 100);
  dpgnew = Number(dpgnewslice.match(/\d+/));
parapapa = inresp.split('</textarea>');
parapapas = parapapa[0];
parapapas = parapapas.split('1000));" >');
parapapas = parapapas[1];
parapapam = parapapa[1];
parapapam = parapapam.split('>');
parapapam = parapapam[parapapam.length-1];
para = parapapas + parapapam;
para = para.replace(/\s{2,}/g, ' ');
$('#hidehere').attr("style", "");
$('#clearhere').text(para);
 } 
}

//Закрыть расторжение Open / В работе
function closerastr(statusrastr) {
 dpgmain = getdpgmain();
 var xmlhttp = getXmlHttp();
 //Выгружаем задания, если не выгружены
 actone = $("font[id*=component_1_ActivityNumber]")[0];
 if (actone === undefined) {
  actinresp = zp('activisla', dpgmain);
  $("div[id*=tab_Activities][class=tabcontent_bottom]").map(function(indx, element) {
   element.innerHTML = element.innerHTML + actinresp;
  });
  $("div[id*=tabdiv_Activities_DPG]").attr("style", "");
 }
 //Находим расторжение
 var mytext = "Расторжение";
 intext = $("td").filter(function() {
  return $(this).text() == mytext;
 });
 openact = $(intext).next().next().next().next().next().next().filter(function() {
  return $(this).text() == statusrastr;
 })[0];
 var transnum = $(openact).prev().prev().prev().prev().prev().prev().prev().children().children().attr("row");
 inresp = zp('activinumsla', dpgmain, transnum);
 dpgnewslice = inresp.slice(90, 100);
 dpgnew = Number(dpgnewslice.match(/\d+/));
 zp('activichurnallsla', dpgnew, '2');
 zp('activiexechcsla', dpgnew);
 zp('activisavechusla', dpgnew);
 $(openact).map(function(indx, element) {
  element.innerHTML = "Closed";
  $(openact).parent().css("background-color", "#FF4500");
  zadanija();
 });
}

//Перевести расторжение в работу на
function rastrvrab(nah) {
 na = dates(0);
 if (nah == 1) {
  na = prompt("В работу на");
 }
 statusrastr = "Open";
 dpgmain = getdpgmain();
 //Выгружаем задания, если не выгружены
 actone = $("font[id*=component_1_ActivityNumber]")[0];
 if (actone === undefined) {
  actinresp = zp('activisla', dpgmain);
  $("div[id*=tab_Activities][class=tabcontent_bottom]").map(function(indx, element) {
   element.innerHTML = element.innerHTML + actinresp;
  });
  $("div[id*=tabdiv_Activities_DPG]").attr("style", "");
 }
 //Находим расторжение
 var mytext = "Расторжение";
 intext = $("td").filter(function() {
  return $(this).text() == mytext;
 });
 openact = $(intext).next().next().next().next().next().next().filter(function() {
  return $(this).text() == statusrastr;
 })[0];
 var transnum = $(openact).prev().prev().prev().prev().prev().prev().prev().children().children().attr("row");
 inresp = zp('activinumsla', dpgmain, transnum);
 dpgnewslice = inresp.slice(90, 100);
 dpgnew = Number(dpgnewslice.match(/\d+/));
 //Статус - в работе
 zp('activistatsla', dpgnew, '23C732C0F735BA74E95B22EC029A144F');
 zp('actividuesla', dpgnew, na);
 zp('activisavesla', dpgnew);
 $(openact).map(function(indx, element) {
  element.innerHTML = "В работе";
  $(openact).prev().prev().prev().prev().text(na);
  $(openact).parent().css("background-color", "#FF4500");
  zadanija();
 });
}

//Количество закрытых перерасчетов за сегодня
function pererclos() {
 //Сегодняшняя дата:
 all = dates();
 //Находим количество закрытых перерасчетов
reqq('http://crm.viasat.ua/crm/ajaxservlet?perform=getSearchResults&params=dpeservicesActivities.SearchActivityByActivityDetails%7Ctest%3Dtest%7Cfilter%3D%7Cdatasetreturnhiddenfield%3Dactivityid%7Cmultiselect%3D0%7Cflds%3Dactivityid%7Creturnobjname%3D%7Creturnobjkey%3DURL%3Aactivity.do%3Fact%3Ditm%26jndi%3Dejb%2FCRMBOActivity%26fc%3Dread%26pvc%3D1%26pv0%3D%7Cautoapply%3Dfalse%7Cc%3D3%7Ctb0%3D%7Cfd0%3D%7Cal0%3DAssignedTo%7Cex0%3DBeginsWith%7Cva0%3D' + 'Когут' + '%7Cao0%3DAnd%7Ctb1%3DACTIVITIES%7Cfd1%3DActTypeID%7Cal1%3D%7Cex1%3DEquals%7Cva1%3D' + '862D6C91BA5119C8BE6A9A167D79EC51' + '%7Cao1%3DAnd%7Ctb2%3DACTIVITIES%7Cfd2%3DActivityCloseDate%7Cal2%3D%7Cex2%3DEquals%7Cva2%3D' + all + '%7Cao2%3DAnd').then(function(response) {
 m = response.slice(235, 255);
 perclos = Number(m.match(/\d+/));
 alert("Количество закрытых перерасчетов за сегодня = " + perclos);
});
}


//Что в задании, без подвисания браузера
function whotinass2() {
  dpgm = getdpgmain();
      pererastyall = [];
      //Все перерасчеты
      pererasty = $("td").filter(function() {
        return $(this).text() == "Перерасчет";
      });
      //Находим перерасчеты Open, Wait payment и Under Investigation
      pererastyall = $(pererasty).next().next().next().next().next().next().filter(function() {
        return $(this).text() == "Open";
      });
      waity = $(pererasty).next().next().next().next().next().next().filter(function() {
        return $(this).text() == "Wait payment";
      });
      undery = $(pererasty).next().next().next().next().next().next().filter(function() {
        return $(this).text() == "Under Investigation";
      });
      //обьеденяем всех в pererastyall
      $.merge(pererastyall, waity);
      $.merge(pererastyall, undery);
      openact = $(pererastyall)[0];
      if (openact === undefined) {
        $('#clearhere').text("");
        return;
      }
      vspe = pererastyall.length;
      
      transnum = $(openact).children().children().attr("row");
      url = "http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpgm + 'callcentre/callcentre|read|create|ActNumModal|true:false:Activities:ActivityNumber|' + transnum + '&function=&databinding=&obj=[object%20HTMLDivElement]&tab=0';
      reqq(url).then(function(response) {
        inresp = response;
        dpgnewslice = inresp.slice(90, 100);
        dpgnew = Number(dpgnewslice.match(/\d+/));
        parapapa = inresp.split('</textarea>');
        parapapas = parapapa[0];
        parapapas = parapapas.split('1000));" >');
        parapapas = parapapas[1];
        parapapam = parapapa[1];
        parapapam = parapapam.split('>');
        parapapam = parapapam[parapapam.length - 1];
        para = parapapas + parapapam;
        para = para.replace(/\s{2,}/g, ' ');
        if (vspe > 1){
        para = "**" + vspe + "** " + para;
        }
        $('#hidehere').attr("style", "");
        $('#clearhere').text(para);
        reqq('http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG' + dpgm + 'callcentre/callcentre|edit|main&function=&databinding=&obj=main_DPG' + dpgm + 'callcentre/callcentre&tab=0');
      });
}

//Деактивировать первую актривную подписку
function deactfirst() {
 text = $("td").filter(function() {
  return $(this).text() == "Active";
 })[0];
 var slanum = $(text).prev().text();
 var slanumint = getslainnum(slanum);
 dpgmain = getdpgmain();

 //Perform subscription action
 dpgnewin = zp('openpsa', dpgmain);
 dpgnewslice = dpgnewin.slice(48, 55);
 dpgnew = Number(dpgnewslice.match(/\d+/));
 zp('selectslapsa', dpgnew, slanumint);
 zp('acttypepsa', dpgnew, '0');
 zp('subacttypepsa', dpgnew, '1');
 zp('submitpsa', dpgnew);
 $("li[id*=Refresh_DPG] a").click();
}



//Финансы
function financy() {
 var scrollTop = $('div[id*=CreateFinTran]').offset().top;
 $(document).scrollTop(scrollTop);
}

//Сервисы
function servisy() {
 var scrollTop = $('div[uid*=SubscriptionProvServices]').parent().offset().top;
 $(document).scrollTop(scrollTop);
}

//Задания
function zadanija() {
 //Выгружаем задания, если не выгружены
 actone = $("font[id*=component_1_ActivityNumber]")[0];
 if (actone === undefined) {
  dpgmain = getdpgmain();
  actinresp = zp('activisla', dpgmain);
  $("div[id*=tab_Activities][class=tabcontent_bottom]").map(function(indx, element) {
   element.innerHTML = element.innerHTML + actinresp;
  });
  $("div[id*=tabdiv_Activities_DPG]").attr("style", "");
 }
 var scrollTop = $('div[uid*=Communications]').offset().top;
 $(document).scrollTop(scrollTop);
}

//ЮАТВ - Текущий баланс:
function startuatvnull(feenum) {
 //Штраф
 fee = Number(feenum);
 tekbalansin = $('input[type=checkbox][id*=mychekforfin]').parent().next().next().next().next().next().next().children()[0];
 var tekbalans = $(tekbalansin).text();

 //Текущий баланс + штраф 
 var tekbalansplusp = Number(tekbalans) + feenum;
 var tekbalanspluss = tekbalansplusp.toFixed(2);
 var tekbalansplus = Number(tekbalanspluss);
 var transnumfc = 0;
 if (tekbalansplus < 0) {
  penuatv(fee);
 } else {
  sravtrans(transnumfc, tekbalansplus, fee);
 }
}

//ЮАТВ - Сравнение транзакций:
function sravtrans(transnumfc, tekbalansplus, fee) {
 transactinvfc = $('input[type=checkbox][id*=mychekforfin]').parent().next().next().next().filter(function() {
  return $(this).text() == "Invoice";
 })[transnumfc];
 transactfct = $(transactinvfc).next().next().children().text();
 transactfcp = Number(transactfct);
 transactfctt = transactfcp.toFixed(2);
 transactfc = Number(transactfctt);

 //Сравниваем баланс и первую транзакцию
 //Если транзакция больше, отмечаем ее:
 if (tekbalansplus > transactfc) {
  chektransactinvfc = $(transactinvfc).prev().prev().prev().children()[0];
  $(chektransactinvfc).attr("checked", true);
  transnumfc = transnumfc + 1;
  tekbalansplus = tekbalansplus - transactfc;
  sravtrans(transnumfc, tekbalansplus, fee);
 }

 //Если равно, отмечаем и запускаем кредит со списанием
 else if (tekbalansplus == transactfc) {
  chektransactinvfc = $(transactinvfc).prev().prev().prev().children()[0];
  $(chektransactinvfc).attr("checked", true);
  credit("uatvsecondstep", fee);
 }

 //Если меньше, списываем ее остаток
 else if (tekbalansplus < transactfc) {

  //Номер выбраной транзакции - transnum
  var transnum = $(transactinvfc).prev().prev().prev().children().text();

  //Дата после выбраного елемента, только первая в виде текста + 1сек - newdate
  datefirst = $(transactinvfc).prev();
  var dateall = $(datefirst).text();
  getsec = dateall.slice(-2);
  getsecnum = parseInt(getsec, 10);
  sec = getsecnum + 1;
  getfirst = dateall.slice(0, -2);
  newdate = getfirst + sec;
  //Номер договора транзакции - slanum
  slanumfirst = $(transactinvfc).next().next().next().next();
  var slanum = $(slanumfirst).text();
  //Внутренний номер договора выбраной выше транзакции - slanumint
  intext = $("option").filter(function() {
   return $(this).text() == slanum;
  });
  var slanumint = $(intext).attr("value");
  //dpg главной страницы
  dpgmain = getdpgmain();
  //dpg будующего счета
  dpgnewin = zp('sozdrtrans', dpgmain);
  dpgnewslice = dpgnewin.slice(50, 55);
  dpgnew = Number(dpgnewslice.match(/\d+/));
zp('tiptrans', dpgnew, 'CustFinTrxnType2');
zp('podpistrans', dpgnew, slanumint);
zp('pricelistrans', dpgnew , '2D637E4090AEF0AF5BCEBAC868C39FA1');
zp('paymettrans', dpgnew, 'PM7');
zp('datetrans', dpgnew, newdate);
zp('linestrans', dpgnew);
zp('findtrans', dpgnew, transnum);
zp('getstrans', dpgnew);
zp('somemagiktrans', dpgnew);
zp('spisptrans', dpgnew, '', '1');
zp('totalamttrans', dpgnew, tekbalansplus, '1');
//zp('calkultrans', dpgnew);
zp('savetrans', dpgnew);
  credit("uatvfirststep", fee);
 }
}

function penuatv(fee) {
 //Текущая дата
 all = dates();
 //Номер договора
 tekbalansin = $('input[type=checkbox][id*=mychekforfin]').parent().next().next().next().next().next().next().children()[0];
 slanum = $(tekbalansin).parent().next().text();
 //Внутренний номер договора
 intext = $("option").filter(function() {
  return $(this).text() == slanum;
 });
 var slanumint = $(intext).attr("value");
 //dpg главной страницы
 dpgmain = getdpgmain();
 //dpg будующего счета
 dpgnewin = zp('sozdrtrans', dpgmain);
 dpgnewslice = dpgnewin.slice(50, 55);
 dpgnew = Number(dpgnewslice.match(/\d+/));
zp('tiptrans', dpgnew, 'CustFinTrxnType1');
zp('podpistrans', dpgnew, slanumint);
zp('pricelistrans', dpgnew, '2D637E4090AEF0AF5BCEBAC868C39FA1');
zp('paymettrans', dpgnew, 'PM7');
zp('linestrans', dpgnew);
zp('addlinetrans', dpgnew);
zp('prodtrans', dpgnew, '25B12E00C48976CFCDAA5979C8191907', '1');
zp('quantitytrans', dpgnew, '1', '1');
 if (fee == "400") {
zp('unitpricetrans', dpgnew, '333.333', '1');
 } else if (fee == "200") {
  zp('unitpricetrans', dpgnew, '166.666', '1');
 }
zp('spisstrans', dpgnew, all, '1');
zp('calkultrans', dpgnew);
zp('savetrans', dpgnew);
 $("div[id*=FinTransSummary] input[onclick*=execSummarySearch][name=Search]").click();
}

function readkta(defreda) {
$("font[id*=" + defreda + "]").map(function(indx, element) {
corval = $(element).children().first().text();
if (corval !== ""){
$(element).children().first().removeAttr("readonly").changeElementType('input');
$(element).children().first().val(corval);
}
});
}

//редактирование дат в договоре
function readktsla() {
readkta("_subprovservicefirstactivationdate_");
readkta("_subprovsevicesbindingstart_");
readkta("_subprovsevicesbindingend_");
}

//Разблокировать редактирование дат в задании
function readktactdate() {
 myem = $("div[id*=DatesInfoGroup] em[onclick]");
 $(myem).removeAttr("readonly");
 $(myem).map(function(indx, element) {
  texto = element.innerHTML;
  element.innerHTML = '';
  tempone = element.outerHTML;
  makaka = tempone.slice(3, -3);
  element.outerHTML = "<input" + " value=" + "'" + texto + "'" + makaka + "input>";
 });
}

//Открыть задание
function readktopenact() {
 var dpgnewin = $("div[id*=SubSelect]").attr("id");
 dpgnewslice = dpgnewin.slice(-5);
 dpgnew = Number(dpgnewslice.match(/\d+/));
zp('activclosetimesla', dpgnew, '');
zp('activistatsla', dpgnew, 'Status1');
zp('activisavesla', dpgnew);
 closeModalPage('pageinfo_', 'read', true);
}

//Добавить твины для смен пакетов 1
function fromtw() {
 fromtwin = $("[id*=_service] select[onchangefc*=setDefaultProductAttributes] option")[0];
 $(fromtwin).map(function(indx, element) {
  element.outerHTML = element.outerHTML + "<option value=C9F1259B43C1782B7757E1FD289EB7A1>TWIN</option>" + 
                                          "<option value=T1>TWIN 1</option>" + 
                                          "<option value=T2>TWIN 2</option>" + 
                                          "<option value=T3>TWIN 3</option>" + 
                                          "<option value=8539AD35C9FE1DCADD39A14EDD3AFF44>TWIN DOMASHNIY</option>" + 
                                          "<option value=ADB0C571CFBFF39440612FAE5A139818>TWIN DOMASHNIY 1</option>" + 
                                          "<option value=6A490A4F9AC380FFB3725CB612E23ED4>TWIN DOMASHNIY 2</option>" + 
                                          "<option value=322037535E99813F382E10197F93ABD2>TWIN DOMASHNIY 3</option>" + 
                                          "<option value=08A8F9F73DB79DA0A7EFA13B525B3FE8>TWIN FAMILY HD</option>" + 
                                          "<option value=7148D34ABFFE1C13461D0E3618B1D389>TWIN FAMILY HD 1</option>" + 
                                          "<option value=683B6574EE8116D78DE2A969B69166E9>TWIN FAMILY HD 2</option>" + 
                                          "<option value=7308062B281D6D33176B42ADFD9A7539>TWIN FAMILY HD 3</option>" + 
                                          "<option value=9E384EF794955CBE99D6EDAF7612DD04>TWIN Family</option>" + 
                                          "<option value=TFM1>TWIN Family 1</option>" + 
                                          "<option value=TFM2>TWIN Family 2</option>" + 
                                          "<option value=TFM3>TWIN Family 3</option>" + 
                                          "<option value=72B5DEDE5C82C9604D522D54C276E35F>TWIN Favorite</option>" + 
                                          "<option value=TFA1>TWIN Favorite 1</option>" + 
                                          "<option value=TFA2>TWIN Favorite 2</option>" + 
                                          "<option value=TFA3>TWIN Favorite 3</option>" + 
                                          "<option value=0228205592FFDB1665A7122C9C9ED19C>TWIN HD</option>" + 
                                          "<option value=A3246D89210B29217E17170A5E3F09A3>TWIN HD 1</option>" + 
                                          "<option value=3121B9F6AF8D601EE659A818F01D36F0>TWIN HD 2</option>" + 
                                          "<option value=C3E4A5EA62A7FC970A39D917FAC11098>TWIN HD 3</option>" + 
                                          "<option value=64E35779CD574DB7B7BECE791AA24760>TWIN HD 49</option>" + 
                                          "<option value=A56D79ACF4974F3C2847EB4E46C2DE0E>TWIN HD 49 1</option>" + 
                                          "<option value=29DA20BBF17754E62CBC3EA6610DC7B2>TWIN HD 49 2</option>" + 
                                          "<option value=1B668069F7BFF76D5B5B36210A962041>TWIN HD 49 3</option>" + 
                                          "<option value=113C8CE61535B9444BD0DB54AC6BA02E>TWIN MAXIMUM</option>" + 
                                          "<option value=666D0CB027C05BE01DEDAB4EABB6BA3E>TWIN MAXIMUM 1</option>" + 
                                          "<option value=D31D23327A1691574B9DD1A0A45D6A46>TWIN MAXIMUM 2</option>" + 
                                          "<option value=86E11911257EADE9D98A623ABDB380EB>TWIN MAXIMUM 3</option>" + 
                                          "<option value=9A2989DB2AAA1B344677475CB3B10DD3>TWIN MEDIUM</option>" + 
                                          "<option value=734A3DB07854434A04D05C59679A1340>TWIN MEDIUM 1</option>" + 
                                          "<option value=B417A2B3314C303E07C2BA10B48A3624>TWIN MEDIUM 2</option>" + 
                                          "<option value=8A17EBE338169424C9B346699ADA7342>TWIN MEDIUM 3</option>" + 
                                          "<option value=17B251B37869A09C4572078924734C21>TWIN PRESTIGE</option>" + 
                                          "<option value=CAF02D9A7A6B8D7EDE6DD189189AFEC2>TWIN PRESTIGE 1</option>" + 
                                          "<option value=13B342808269C237EAF466A3958A1BB6>TWIN PRESTIGE 2</option>" + 
                                          "<option value=7687108F25FE048B0C8CA9BCF77F70F9>TWIN PRESTIGE 3</option>" + 
                                          "<option value=999214ED92FABE9EF2022930EA56070A>TWIN PRESTIGE ATO</option>" + 
                                          "<option value=39A2DDA52BA87FA59AAF82115B46B094>TWIN PRESTIGE ATO 1</option>" + 
                                          "<option value=B346ADCEEB05B6EA8937FCED1C874CEB>TWIN PRESTIGE ATO 2</option>" + 
                                          "<option value=F256008B6BCD5459DC7D2099CD54E08B>TWIN PRESTIGE ATO 3</option>" + 
                                          "<option value=40C687433D4FABD1E4BA676BF71C53AB>TWIN PRESTIGE MEGAHIT</option>" + 
                                          "<option value=9ADD4E07A86BDD8880789D12D3E1FAB3>TWIN PRESTIGE MEGAHIT 1</option>" + 
                                          "<option value=F5114767EE25EEE02B46514A8EFAC7AF>TWIN PRESTIGE MEGAHIT 2</option>" + 
                                          "<option value=717CE87C993A4C9E793E7819BCDC7C9B>TWIN PRESTIGE MEGAHIT 3</option>" + 
                                          "<option value=26E221D7CB017ECC1E509254B4263B95>TWIN Popular</option>" + 
                                          "<option value=TPO1>TWIN Popular 1</option>" + 
                                          "<option value=TPO2>TWIN Popular 2</option>" + 
                                          "<option value=TPO3>TWIN Popular 3</option>" + 
                                          "<option value=8B5815B7A1737D16E80552DBD1BA7C8F>TWIN Premium</option>" + 
                                          "<option value=B85BE66BC8B7BE0AC2040BFECE849989>TWIN Premium 1</option>" + 
                                          "<option value=64D4C7FA57661294166DD74EE9841C55>TWIN Premium 2</option>" + 
                                          "<option value=9863BC98ECACF4ACE8406B4C849F2190>TWIN Premium 3</option>" + 
                                          "<option value=2E99B3D616FA6C2B847492C0A75301B3>TWIN Premium HD</option>" + 
                                          "<option value=324EB9966397878351C88B73207FCA96>TWIN Premium HD 1</option>" + 
                                          "<option value=D26420FCD8FE3B2DDF0D1201A273AA98>TWIN Premium HD 2</option>" + 
                                          "<option value=EBF911AD1CA13ABCE936F1377B15014F>TWIN Premium HD 3</option>" + 
                                          "<option value=3DA602225CB335275850D417D1CB757C>TWIN Prestige 69/99</option>" + 
                                          "<option value=TPR1>TWIN Prestige 69/99 1</option>" + 
                                          "<option value=TPR2>TWIN Prestige 69/99 2</option>" + 
                                          "<option value=TPR3>TWIN Prestige 69/99 3</option>" + 
                                          "<option value=BC255740358FC59981B097907458E65A>TWIN Test Premium</option>" + 
                                          "<option value=DA0DB8E3690D1FE7CEA6B7CB56D7D26B>TWIN Test Premium 1</option>" + 
                                          "<option value=8EEAD1034745CDB0AEF6B38F2F32C85A>TWIN Test Premium 2</option>" + 
                                          "<option value=AF4FCEA99B553402536E94B1A9E3278D>TWIN Test Premium 3</option>" + 
                                          "<option value=839BFBC9A3ACA87C76EB17ED01AD5E6F>TWIN Test Premium HD</option>" + 
                                          "<option value=2D15EDD792B36CEC48925916FAA741CB>TWIN Test Premium HD 1</option>" + 
                                          "<option value=C0EFAEB3898056ACE2DABA2841D0F147>TWIN Test Premium HD 2</option>" + 
                                          "<option value=CD11B0D65948158F22DC6CFE419327EE>TWIN Test Premium HD 3</option>" + 
                                          "<option value=23EB4A46D245B4239FA0C3EFDFEDFD6E>TWIN-A</option>" + 
                                          "<option value=TA1>TWIN-A 1</option>" + 
                                          "<option value=TA2>TWIN-A 2</option>" + 
                                          "<option value=TA3>TWIN-A 3</option>" + 
                                          "<option value=7248C705E15C54CD6A90E97212CCC670>TWIN LEGKY 1</option>" + 
                                          "<option value=C09D88AB1B00668D42C46913AD6176E9>TWIN LEGKY 2</option>" + 
                                          "<option value=E57220E900E5166399D1ADA40BDCC75E>TWIN LEGKY 3</option>" +
                                          "<option value=D52D763B193110D45B50EBBC0C0445C9>TWIN EXTRA LEGKY 1</option>" + 
                                          "<option value=AB555E26622E47D074C191872C74DCCB>TWIN EXTRA LEGKY 2</option>" + 
                                          "<option value=0DBC33CCB7BB092864CCE099EC664CB1>TWIN EXTRA LEGKY 3</option>";
 });
}

//Добавить твины для смен пакетов 2
function totw() {
 totwin = $("[id*=_toservice] select[onchangefc*=setDefaultProductAttributes] option")[0];
 $(totwin).map(function(indx, element) {
  element.outerHTML = element.outerHTML + "<option value=C9F1259B43C1782B7757E1FD289EB7A1>TWIN</option>" + 
                                          "<option value=T1>TWIN 1</option>" + 
                                          "<option value=T2>TWIN 2</option>" + 
                                          "<option value=T3>TWIN 3</option>" + 
                                          "<option value=8539AD35C9FE1DCADD39A14EDD3AFF44>TWIN DOMASHNIY</option>" + 
                                          "<option value=ADB0C571CFBFF39440612FAE5A139818>TWIN DOMASHNIY 1</option>" + 
                                          "<option value=6A490A4F9AC380FFB3725CB612E23ED4>TWIN DOMASHNIY 2</option>" + 
                                          "<option value=322037535E99813F382E10197F93ABD2>TWIN DOMASHNIY 3</option>" + 
                                          "<option value=08A8F9F73DB79DA0A7EFA13B525B3FE8>TWIN FAMILY HD</option>" + 
                                          "<option value=7148D34ABFFE1C13461D0E3618B1D389>TWIN FAMILY HD 1</option>" + 
                                          "<option value=683B6574EE8116D78DE2A969B69166E9>TWIN FAMILY HD 2</option>" + 
                                          "<option value=7308062B281D6D33176B42ADFD9A7539>TWIN FAMILY HD 3</option>" + 
                                          "<option value=9E384EF794955CBE99D6EDAF7612DD04>TWIN Family</option>" + 
                                          "<option value=TFM1>TWIN Family 1</option>" + 
                                          "<option value=TFM2>TWIN Family 2</option>" + 
                                          "<option value=TFM3>TWIN Family 3</option>" + 
                                          "<option value=72B5DEDE5C82C9604D522D54C276E35F>TWIN Favorite</option>" + 
                                          "<option value=TFA1>TWIN Favorite 1</option>" + 
                                          "<option value=TFA2>TWIN Favorite 2</option>" + 
                                          "<option value=TFA3>TWIN Favorite 3</option>" + 
                                          "<option value=0228205592FFDB1665A7122C9C9ED19C>TWIN HD</option>" + 
                                          "<option value=A3246D89210B29217E17170A5E3F09A3>TWIN HD 1</option>" + 
                                          "<option value=3121B9F6AF8D601EE659A818F01D36F0>TWIN HD 2</option>" + 
                                          "<option value=C3E4A5EA62A7FC970A39D917FAC11098>TWIN HD 3</option>" + 
                                          "<option value=64E35779CD574DB7B7BECE791AA24760>TWIN HD 49</option>" + 
                                          "<option value=A56D79ACF4974F3C2847EB4E46C2DE0E>TWIN HD 49 1</option>" + 
                                          "<option value=29DA20BBF17754E62CBC3EA6610DC7B2>TWIN HD 49 2</option>" + 
                                          "<option value=1B668069F7BFF76D5B5B36210A962041>TWIN HD 49 3</option>" + 
                                          "<option value=113C8CE61535B9444BD0DB54AC6BA02E>TWIN MAXIMUM</option>" + 
                                          "<option value=666D0CB027C05BE01DEDAB4EABB6BA3E>TWIN MAXIMUM 1</option>" + 
                                          "<option value=D31D23327A1691574B9DD1A0A45D6A46>TWIN MAXIMUM 2</option>" + 
                                          "<option value=86E11911257EADE9D98A623ABDB380EB>TWIN MAXIMUM 3</option>" + 
                                          "<option value=9A2989DB2AAA1B344677475CB3B10DD3>TWIN MEDIUM</option>" + 
                                          "<option value=734A3DB07854434A04D05C59679A1340>TWIN MEDIUM 1</option>" + 
                                          "<option value=B417A2B3314C303E07C2BA10B48A3624>TWIN MEDIUM 2</option>" + 
                                          "<option value=8A17EBE338169424C9B346699ADA7342>TWIN MEDIUM 3</option>" + 
                                          "<option value=17B251B37869A09C4572078924734C21>TWIN PRESTIGE</option>" + 
                                          "<option value=CAF02D9A7A6B8D7EDE6DD189189AFEC2>TWIN PRESTIGE 1</option>" + 
                                          "<option value=13B342808269C237EAF466A3958A1BB6>TWIN PRESTIGE 2</option>" + 
                                          "<option value=7687108F25FE048B0C8CA9BCF77F70F9>TWIN PRESTIGE 3</option>" + 
                                          "<option value=999214ED92FABE9EF2022930EA56070A>TWIN PRESTIGE ATO</option>" + 
                                          "<option value=39A2DDA52BA87FA59AAF82115B46B094>TWIN PRESTIGE ATO 1</option>" + 
                                          "<option value=B346ADCEEB05B6EA8937FCED1C874CEB>TWIN PRESTIGE ATO 2</option>" + 
                                          "<option value=F256008B6BCD5459DC7D2099CD54E08B>TWIN PRESTIGE ATO 3</option>" + 
                                          "<option value=40C687433D4FABD1E4BA676BF71C53AB>TWIN PRESTIGE MEGAHIT</option>" + 
                                          "<option value=9ADD4E07A86BDD8880789D12D3E1FAB3>TWIN PRESTIGE MEGAHIT 1</option>" + 
                                          "<option value=F5114767EE25EEE02B46514A8EFAC7AF>TWIN PRESTIGE MEGAHIT 2</option>" + 
                                          "<option value=717CE87C993A4C9E793E7819BCDC7C9B>TWIN PRESTIGE MEGAHIT 3</option>" + 
                                          "<option value=26E221D7CB017ECC1E509254B4263B95>TWIN Popular</option>" + 
                                          "<option value=TPO1>TWIN Popular 1</option>" + 
                                          "<option value=TPO2>TWIN Popular 2</option>" + 
                                          "<option value=TPO3>TWIN Popular 3</option>" + 
                                          "<option value=8B5815B7A1737D16E80552DBD1BA7C8F>TWIN Premium</option>" + 
                                          "<option value=B85BE66BC8B7BE0AC2040BFECE849989>TWIN Premium 1</option>" + 
                                          "<option value=64D4C7FA57661294166DD74EE9841C55>TWIN Premium 2</option>" + 
                                          "<option value=9863BC98ECACF4ACE8406B4C849F2190>TWIN Premium 3</option>" + 
                                          "<option value=2E99B3D616FA6C2B847492C0A75301B3>TWIN Premium HD</option>" + 
                                          "<option value=324EB9966397878351C88B73207FCA96>TWIN Premium HD 1</option>" + 
                                          "<option value=D26420FCD8FE3B2DDF0D1201A273AA98>TWIN Premium HD 2</option>" + 
                                          "<option value=EBF911AD1CA13ABCE936F1377B15014F>TWIN Premium HD 3</option>" + 
                                          "<option value=3DA602225CB335275850D417D1CB757C>TWIN Prestige 69/99</option>" + 
                                          "<option value=TPR1>TWIN Prestige 69/99 1</option>" + 
                                          "<option value=TPR2>TWIN Prestige 69/99 2</option>" + 
                                          "<option value=TPR3>TWIN Prestige 69/99 3</option>" + 
                                          "<option value=BC255740358FC59981B097907458E65A>TWIN Test Premium</option>" + 
                                          "<option value=DA0DB8E3690D1FE7CEA6B7CB56D7D26B>TWIN Test Premium 1</option>" + 
                                          "<option value=8EEAD1034745CDB0AEF6B38F2F32C85A>TWIN Test Premium 2</option>" + 
                                          "<option value=AF4FCEA99B553402536E94B1A9E3278D>TWIN Test Premium 3</option>" + 
                                          "<option value=839BFBC9A3ACA87C76EB17ED01AD5E6F>TWIN Test Premium HD</option>" + 
                                          "<option value=2D15EDD792B36CEC48925916FAA741CB>TWIN Test Premium HD 1</option>" + 
                                          "<option value=C0EFAEB3898056ACE2DABA2841D0F147>TWIN Test Premium HD 2</option>" + 
                                          "<option value=CD11B0D65948158F22DC6CFE419327EE>TWIN Test Premium HD 3</option>" + 
                                          "<option value=23EB4A46D245B4239FA0C3EFDFEDFD6E>TWIN-A</option>" + 
                                          "<option value=TA1>TWIN-A 1</option>" + 
                                          "<option value=TA2>TWIN-A 2</option>" + 
                                          "<option value=TA3>TWIN-A 3</option>" + 
                                          "<option value=7248C705E15C54CD6A90E97212CCC670>TWIN LEGKY 1</option>" + 
                                          "<option value=C09D88AB1B00668D42C46913AD6176E9>TWIN LEGKY 2</option>" + 
                                          "<option value=E57220E900E5166399D1ADA40BDCC75E>TWIN LEGKY 3</option>" +
                                          "<option value=D52D763B193110D45B50EBBC0C0445C9>TWIN EXTRA LEGKY 1</option>" + 
                                          "<option value=AB555E26622E47D074C191872C74DCCB>TWIN EXTRA LEGKY 2</option>" + 
                                          "<option value=0DBC33CCB7BB092864CCE099EC664CB1>TWIN EXTRA LEGKY 3</option>";
 });
}

//Дополнительная функция поиска свободного договора ЮАТВ
function getmefirst(firstua, lastua) {
startnum = firstua.slice(0, 6);
allslasfirst = [];
bb = 0;
while (bb < 100) {
if (bb < 10) {
allslasfirst.push(startnum + '0' + bb);
} else {
allslasfirst.push(startnum + bb);
}
bb += 1;
}

allslas = allslasfirst.map(function(all) {
x = all.split('');
f = (x[0] * 2) + (+x[1]) + (x[2] * 2) + (+x[3]) + (x[4] * 2) + (+x[5]) + (x[6] * 2) + (+x[7]);
return all.toString() + f.toString() ;
});

bombresp = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=subscriptionsummary&plain=true');
var filtin = bombresp.slice(bombresp.indexOf("_MAIN") - 34, bombresp.indexOf("_MAIN"));
var subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7CSUBSCRIPTIONS.SubNum~' + startnum + '~%7C');
var mokey = subscrin.split('<B>Subscription no.</B><BR>');
var usedslas = mokey.map(function(x) {
    return x.slice(0, 10);
});
usedslas.splice(0, 1);
$.merge(allslas, usedslas);

var a = allslas,
    i = allslas.length;
a.sort();

while (i--) {
    if (a[i] == a[i-1]) {
        a.splice(i-1, 2);
    }
}

i = a.length;
while (i--) {
    if (a[i] > lastua || a[i] < firstua) {
        a.splice(i, 1);
    }
}

return a;

}

function uatvtest(firstua, lastua) {
 var spon;
 var gpc;
 var smd;
 var certindex;
 var dpgmain;
 var newdpgin;
 var getdpg2slice;
 var getdpg3slice;
 var getdpg2;
 var getdpg3;
 var ftransinresp;
 var dpgnewin;
 var getfinallresp;
 var actobin;

a = getmefirst(firstua, lastua);

uatvsubscr = a[0];

if (a.length < 4) {
  alert('Закканчиваются договора UATV (осталось ' + a.length + ')');
 } 
 if (uatvsubscr === undefined) {
  alert('Закончились договора UATV!');
  return;
 } 
 
  gpc = "http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG";
  smd = baseQuery;

  //номер договора
  slaget = $("tr[style*=silver] td a")[0];
  var slanum = $(slaget).text();
  slanumint = $("option").filter(function() {
   return $(this).text() == slanum;
  }).attr("value");
  podpis = $("a[onclick*=ccsubscriptionsummary][onclick*=window]").next().children().text();
  servis = $("div[id*=SubscriptionProvServicesSummary] div[id*=_NAV]").text();
  istwin = "ne";

  if (slanumint === undefined && podpis == "1-1 of 1") {
   slanum = $("div[id*=SubscriptionSummary] a[onclick*=CRMBOSubscription]").first().text();
   slanumint = $("option").filter(function() {
    return $(this).text() == slanum;
   }).attr("value");
  } else if (podpis != "1-1 of 1" && slanumint === undefined) {
   alert("Тут 2 основные подписки и ни одна из них не выбрана");
   return;
  }

  //Проверка твина
  if (servis != "1-1 of 1") {
   var contrnum = $("tr[style*=silver] td a").first().parent().next().text();
   var contrnumchek = contrnum.match(/\d+/);
   if (contrnumchek !== null) {
    if (contrnumchek[0].length == "10" && contrnumchek != slanum) {
     istwin = "da";
    } else {
     istwin = "ne";
    }
   }
  }


  //проверка штрафа - 200 или 400
  intextt = $("td").filter(function() {
   return $(this).text() == "Invoice";
  }).next().next().next().next();
  intexttt = $(intextt).filter(function() {
   return $(this).text() == slanum;
  }).prev().prev();
  intext200 = $(intexttt).filter(function() {
   return $(this).text() == 200;
  })[0];
  intext400 = $(intexttt).filter(function() {
   return $(this).text() == 400;
  })[0];
  if (intext200 === undefined && intext400 === undefined) {
   shtrafka = null;
  }
  if (intext400 !== undefined) {
   shtrafka = "C5921E7AE5D524E176C3187D8D8C6C80";
  }
  if (intext200 !== undefined) {
   shtrafka = "C7F0C90E6708372C0C8ABF81AD8011B4";
  }

  //ДПГ главной
  dpgmain = getdpgmain();

  //номер карты
  intext = $("div[id*=InstItemsSummary] tr td a[onclick*=displayModalCreate]").filter(function() {
   return $(this).text() == slanum;
  });
  if (istwin != "da") {
   intext = $(intext).parent().next().filter(function() {
    return $(this).text() == slanum;
   });
  }
  if (istwin == "da") {
   intext = $(intext).parent().next().filter(function() {
    return $(this).text() == contrnum;
   });
  }
  smartindex = $(intext).next().next().next().filter(function() {
   return $(this).text() == "SMARTCARD";
  }).first();
  smartcard = $(smartindex).prev().text();

  //номер тюнера
  decoindex = $(intext).next().next().next().filter(function() {
   return $(this).text() == "DECODER";
  }).first();
  decoder = $(decoindex).prev().text();

  //номер Сертификата если есть
  certindex = $(intext).next().next().next().filter(function() {
   return $(this).text() == "CERTIFICATE";
  }).first();
  if (certindex[0] !== undefined) {
   certificate = $(certindex).prev().text();
  }
  xmlhttp = getXmlHttp();
  installeditemsresp = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarydrilldown&params=subscriptionitems%7CSUBSCRIPTIONINSTALLEDITEMS.SubID~' + slanumint + '%7C%7Cccsubscriptionsummary-' + slanumint + '%7CInstalled%3Cnobr%3E%20items%3Cimg%20src%3D%22img%2Farrow_expand2.gif%22%20alt%3D%22%22%20width%3D%2211%22%20height%3D%2211%22%20border%3D%220%22%3E%3C%2Fnobr%3E');
  gogogo = $("div[id*=_MAIN]")[1];
  $(gogogo).map(function(indx, element) {
   element.innerHTML = element.innerHTML + installeditemsresp;
  });

  //внутренний номер тюнера (decnumin) и карты (smartnumin)
  smartin1 = $("a[href*=institem]").filter(function() {
   return $(this).text() == smartcard;
  });
  var smartin2 = $(smartin1).attr("href");
  smartnumin = smartin2.slice(60, -6);

  stbin1 = $("a[href*=institem]").filter(function() {
   return $(this).text() == decoder;
  });
  var stbin2 = $(stbin1).attr("href");
  decnumin = stbin2.slice(60, -6);

  // И сертификата если есть
  if (certindex[0] !== undefined) {
   certin1 = $("a[href*=institem]").filter(function() {
    return $(this).text() == certificate;
   });
   var certin2 = $(certin1).attr("href");
   certnumin = certin2.slice(60, -6);
  }

  //поехал хендлер
  newdpgin = zp('openpsa', dpgmain);
  newdpgslice = newdpgin.slice(48, 55);
  newdpg = Number(newdpgslice.match(/\d+/));

  //Сервис
  //xmlhttp.open('GET', gpc + newdpg + '|new|tab|subprovsevices&function=&databinding=&obj=tab_subprovsevices_DPG' + newdpg + '&tab=0', false);
  //xmlhttp.send(null);

//Деактивируем
zp('selectslapsa', newdpg, slanumint);
zp('acttypepsa', newdpg, '0');
zp('subacttypepsa', newdpg, '7');
zp('submitpsa', newdpg);
zp('editpsa', newdpg);

//Чендж оф инстал айтем
zp('acttypepsa', newdpg, '7');
zp('subacttypepsa', newdpg, '13');
zp('institmpsa', newdpg, smartnumin);
zp('submitpsa', newdpg);
zp('editpsa', newdpg);
zp('acttypepsa', newdpg, '7');
zp('subacttypepsa', newdpg, '13');
zp('institmpsa', newdpg, decnumin);
zp('submitpsa', newdpg);
  if (certindex[0] !== undefined) {
zp('editpsa', newdpg);
zp('acttypepsa', newdpg, '7');
zp('subacttypepsa', newdpg, '13');
zp('institmpsa', newdpg, certnumin);
zp('submitpsa', newdpg);
  }
zp('editpsa', newdpg);

  //Churn to UATV 
zp('acttypepsa', newdpg, '14C21933FFA995FE7ED947B7AA424E57');
zp('submitpsa', newdpg);
zp('editpsa', newdpg);

  //New Subscription
  getdpg2 = zp('nslapsa', newdpg);
  getdpg2slice = getdpg2.slice(45, 55);
  var newdpg2 = Number(getdpg2slice.match(/\d+/));
  zp('nslagopsa', newdpg2);

  //Новый фин аккаунт:
  //Создать
  getdpg3 = zp('nslafinakpsa', newdpg2);
  getdpg3slice = getdpg3.slice(45, 55);
  var newdpg3 = Number(getdpg3slice.match(/\d+/));
  zp('nslafinakgopsa', newdpg3);
  zp('nslafinaksavepsa', newdpg3, newdpg2);
  zp('nslanormalpsa', newdpg2);
  zp('nslaobuquetpsa', newdpg2, '8A1637F26D4046259E9BC0EA5A445E5A');
  zp('nslaobilingschemapsa', newdpg2, 'B197316AC6ADC8F9F7FEEA6F9B08F786');

a = getmefirst(firstua);
uatvsubscr = a[0];

  zp('nslaosubnumpsa', newdpg2, uatvsubscr);
 
  //Save
totalslas = a.length;
counter = 1;
do {
  trysave = zp('nslaosubnumsaveapsa', newdpg2);
  if (trysave != "<SCRIPT>deInitTabs();</SCRIPT>") {
   alert('Не получилось сохранить новый ЮАТВ, сейчас попробуем еще раз... Там чтото типа:' + trysave);
   uatvsubscr = a[counter];
     zp('nslaosubnumpsa', newdpg2, uatvsubscr);
     counter++;
     uspeh = '0';
  } else {
    counter = totalslas;
    uspeh = '1';
  }
} while (counter < totalslas);

if (uspeh == '0'){
alert('Не вышло сохранить новый договор ЮАТВ, возможно из-за: ' + trysave);
 return;
}
  //Продолжение сохранения
  zp('nslaosubnumsavebpsa', newdpg, newdpg2);

  //Добавляем сервис
  zp('acttypepsa', newdpg, '10');
  zp('addservpsa', newdpg);
  zp('prodtypepsa', newdpg, 'AED0177C40D247029D02792F2AEBA730');
  zp('pricelisttonewservpsa', newdpg, '2D637E4090AEF0AF5BCEBAC868C39FA1');
  zp('offetonewservpsa', newdpg, '00BEFE50B4A569E3A580FB5D25EB5A81');
  zp('codtonewservpsa', newdpg, shtrafka);
  zp('dilerpsa', newdpg, '9C22EA175E0060E6520A633216079860');
  zp('submitpsa', newdpg);
  zp('editpsa', newdpg);

  //Добавляем железяки
  zp('acttypepsa', newdpg, '11');
  zp('additempsa', newdpg, smartnumin);
  zp('additempsa', newdpg, decnumin);
  zp('submitpsa', newdpg);
  zp('editpsa', newdpg);

  //Активируем
  //Активейшн
  zp('acttypepsa', newdpg, '1');
  zp('subacttypepsa', newdpg, '0');
  zp('submitpsa', newdpg);

  //Обновить фин. транзакции
  finidallslice = $("div[id*=_FinTransSummary_] div").attr("id");
  finidall = finidallslice.slice(0, -5);
  getfinallresp = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + finidall + '%7C%7C');
  $("div[id*=_FinTransSummary_] div[id*=_SUMMARY_INNER]").parent().map(function(indx, element) {
   element.innerHTML = getfinallresp;
  });

  //находим плату за активацию
  findfirsttrans = $("td").filter(function() {
   return $(this).text() == uatvsubscr;
  }).prev().prev().prev().prev().prev().prev().filter(function() {
   return $(this).text() == "Плата за активацію";
  }).prev().find('a')[0];


  //Удаляем
  ftransnuminslice = $(findfirsttrans).attr("onclick");
  ftransnumin = ftransnuminslice.slice(165, 197);
  ftransinresp = zp('oktrtrans', '', ftransnumin);
  ftransinrespdpg = ftransinresp.slice(122, 125);
  ftransnewrespdpg = parseInt(ftransinrespdpg, 10);
  zp('deltrans', ftransnewrespdpg);

  //создаем пеймент 0грн
  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  all = day + '/' + month + '/' + year;
  //dpg будующего счета
  dpgnewin = zp('sozdrtrans', dpgmain);
  dpgnewslice = dpgnewin.slice(50, 55);
  dpgnew = Number(dpgnewslice.match(/\d+/));
  //находим внутренний номер нашего ЮАТВ
  $("div[id*=_FinTransSummary_] div[id*=_SUMMARY_INNER]").map(function(indx, element) {
   element.innerHTML = dpgnewin;
  });
  intext = $("option").filter(function() {
   return $(this).text() == uatvsubscr;
  });
  slanumint = $(intext).attr("value");
  zp('tiptrans', dpgnew, '22DE4950576EE9F1A92CD11538164107');
  zp('podpistrans', dpgnew, slanumint);
  zp('pricelistrans', dpgnew, '2D637E4090AEF0AF5BCEBAC868C39FA1');
  zp('paymettrans', dpgnew, 'PM7');
  zp('somemagiktrans', dpgnew);
  zp('savetrans', dpgnew);

  //Обновить фин. транзакции
  finidallslice = $("div[id*=_FinTransSummary_] div").attr("id");
  finidall = finidallslice.slice(0, -5);
  getfinallresp = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + finidall + '%7C%7C');
  $("div[id*=_FinTransSummary_] div[id*=_SUMMARY_INNER]").parent().map(function(indx, element) {
   element.innerHTML = getfinallresp;
  });

  //находим пеймент
  findfirsttrans = $("td").filter(function() {
   return $(this).text() == uatvsubscr;
  }).prev().prev().prev().prev().filter(function() {
   return $(this).text() == "Payment";
  }).prev().prev().prev().find('a')[0];

  //Удаляем
  ftransnuminslice = $(findfirsttrans).attr("onclick");
  ftransnumin = ftransnuminslice.slice(165, 197);
  ftransinresp = zp('oktrtrans', '', ftransnumin);
  ftransinrespdpg = ftransinresp.slice(122, 125);
  ftransnewrespdpg = parseInt(ftransinrespdpg, 10);
  zp('deltrans', ftransnewrespdpg);

  //Смотрим на последний кредит по основной и если что, удаляем его
  if (istwin == "ne") {
   cheknotnull1 = $("td").filter(function() {
    return $(this).text() == slanum;
   }).prev().prev().prev().prev().filter(function() {
    return $(this).text() == "Credit Invoice";
   }).first().next().next().next().text();
   cheknotnull2 = $("td").filter(function() {
    return $(this).text() == slanum;
   }).prev().prev().prev().prev().filter(function() {
    return $(this).text() == "Credit Invoice";
   }).first().next().next().text();
   if (cheknotnull1 < 0 && cheknotnull1 == cheknotnull2) {
    cheknotnull = $("td").filter(function() {
     return $(this).text() == slanum;
    }).prev().prev().prev().prev().filter(function() {
     return $(this).text() == "Credit Invoice";
    }).first().prev().prev().prev().find('a')[0];
    cheklast = $("td").filter(function() {
     return $(this).text() == slanum;
    }).prev().prev().prev().filter(function() {
     return $(this).text() == "Posted";
    }).first().prev().prev().prev().prev().find('a')[0];
    if (cheklast == cheknotnull) {
     ftransnuminslice = $(cheknotnull).attr("onclick");
     ftransnumin = ftransnuminslice.slice(165, 197);
     ftransinresp = zp('oktrtrans', '', ftransnumin);
     ftransinrespdpg = ftransinresp.slice(122, 125);
     ftransnewrespdpg = parseInt(ftransinrespdpg, 10);
     zp('deltrans', ftransnewrespdpg);
    }
   }
  }

  //Проверяем появился ли сервис со статусом Online
  chekokslice = $("div[id*=SubscriptionSummary] div[id*=_MAIN] input[name*=_SEARCHFIELDS]").attr("name");
  chekokin = chekokslice.slice(0, 34);
  chekok =req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + chekokin + '%7C%7C');
  chekok.indexOf("Online");
  if (chekok == "-1") {
   alert("Что-то полшо не так");
  }
  //Обновляем страничку
  $("li[id*=_Refresh_] a").click();
}


//Дата сегодня в формате дд/мм/гггг или на 1е след. мес. (дописать "0")
function dates(stat) {
d = new Date();
day = d.getDate();
mo = d.getMonth() + 1;
nextmo = d.getMonth() + 2;
ye = d.getFullYear();
nextye = ye;
if (nextmo > 12){
nextmo -= 12;
nextye += 1;
}
if (mo < 10) {
mo = "0" + mo;
}
if (nextmo < 10) {
nextmo  = "0" + nextmo;
}
nex = "01/" + nextmo + "/" + nextye;
cor = day + "/"  + mo + "/" + ye;
if (stat == "0") {
return nex;
} else {
return cor;
}
}

//добавить в заявки активный сервис
function totfinakslascalc(allslass, b){
  console.log(allslass.length);
  if (b==1){
        masikslasvstfinak = [];
  }
corslas = allslass[0];
 bombrespft = req('http://crm.viasat.ua/crm/pageSummary.jsp?xml=subscriptionsummary&plain=true');
 filtin = bombrespft.slice(bombrespft.indexOf("_MAIN") - 34, bombrespft.indexOf("_MAIN"));
 subscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7CSUBSCRIPTIONS.SubNum~' + corslas + '~%7C');
 fikakin = subscrin.slice(subscrin.indexOf('CRMBOFinancialAccount') + 48, subscrin.indexOf(">", subscrin.indexOf('CRMBOFinancialAccount'))-33);
 fiksubscrin = req('http://crm.viasat.ua/crm/ajaxservlet?perform=summarycomponent&params=' + filtin + '%7CFinaccount~' + fikakin + '~%7C');
 totfinakslas = Number((fiksubscrin.slice(fiksubscrin.indexOf(" of ")+4, fiksubscrin.indexOf(" of ")+5)).match(/\d+/));
 if (totfinakslas > 1){
 masikslasvstfinak.push(corslas);
 }
allslass = allslass.slice(1);
if (allslass.length > 0){
totfinakslascalc(allslass, 2);
} else {
  if (masikslasvstfinak.length > 0){
    if (masikslasvstfinak.length > 1){
  prompt("Договора с двойными фин. аккаунтами:", masikslasvstfinak.join("\n"));
  } else {
    prompt("Договора с двойными фин. аккаунтами:", masikslasvstfinak);
  }
  } else {
    alert("Договоров с двойными фин. аккаунтами не обнаружено");
  }
}
}

//конвертирование дат
function dt() {
dt.crm_sys = function(datka){
dast = datka.split("/");
somedatkais = dast[1] + "." + dast[0] + "." + dast[2];
datkais = new Date(somedatkais);
return Date.parse(datkais);
};

dt.sys_crm = function(datka){
datka = Number(datka);
datkais = new Date(datka);
return datkais.getDate() + "/" + (datkais.getMonth()+1) + "/" + datkais.getFullYear() + " " + datkais.getHours() + ":" + datkais.getMinutes() + ":" + datkais.getSeconds();
};

dt.crm_js = function(datka){
dast = datka.split("/");
somedatkais = dast[1] + "." + dast[0] + "." + dast[2];
datkais = new Date(somedatkais);
return datkais;
};

dt.js_crm = function(datka){
return datka.getDate() + "/" + (datka.getMonth()+1) + "/" + datka.getFullYear() + " " + datka.getHours() + ":" + datka.getMinutes() + ":" + datka.getSeconds();
};

dt.js_sys = function(datka){
return Date.parse(datka);
};

dt.sys_js = function(datka){
return new Date(datka);
};
}

//Вычисляем датки счетов
function finalalizatrast(datka, muninmon) {
 if (muninmon >= 0) {
  StarDays = dt.crm_js(datka);
  DaysInFirstMon = new Date(StarDays.getFullYear(), (StarDays.getMonth() + 1), 0).getDate();
  DaysOst = DaysInFirstMon - StarDays.getDate() + 1;
  KoefFirstDaysOst = DaysOst / DaysInFirstMon;
  PlusTotlMons = ~~ (muninmon - KoefFirstDaysOst);
  KoefNextMonOst = (muninmon - KoefFirstDaysOst) - PlusTotlMons;
  StarDays.setDate(1);
  StarDays.setMonth(StarDays.getMonth() + PlusTotlMons + 1);
  DaysInLastMon = new Date(StarDays.getFullYear(), (StarDays.getMonth() + 1), 0).getDate();
  if (PlusTotlMons === 0) {
   DaysInLastMon = DaysInFirstMon;
  }
  ToDayP = ~~ ((DaysInLastMon * KoefNextMonOst.toFixed(5)));
  StarDays.setDate(ToDayP);
  atata = dt.js_crm(StarDays);
 } else {
  TotMon = Math.ceil(muninmon * (-1));
  Ostat = TotMon - (muninmon * (-1));
  StarDays = dt.crm_js(datka);
  StarDays.setDate(StarDays.getDate() - 1);
  DaysInFirstMon = new Date(StarDays.getFullYear(), (StarDays.getMonth() + 1), 0).getDate();
  IsThisEnought = StarDays.getDate() / DaysInFirstMon;
  Enought = IsThisEnought - (muninmon * (-1));
  if (Enought > 0) {
   StarDays.setDate(1);
   finalalizatrast(dt.js_crm(StarDays), Enought);
  } else {
   StarDays.setDate(1);
   Enought = 1 + Enought;
   StarDays.setMonth(StarDays.getMonth() - TotMon);
   finalalizatrast(dt.js_crm(StarDays), Enought);
  }
 }
 return atata;
}

//Вычисляем датки счетов получше
function simpledatecalc(datochka, muninmon){
if (muninmon > 0){
StarDays = dt.crm_js(datochka);
muninmon = muninmon.toFixed(6);
StarDays.setDate(StarDays.getDate() - 1);
while (muninmon >= 0) {
DaysInFirstMon = new Date(StarDays.getFullYear(), (StarDays.getMonth() + 1), 0).getDate();
OneDayCost = (1/DaysInFirstMon).toFixed(6);
muninmon = (muninmon - OneDayCost).toFixed(6);
if (Math.abs(muninmon) < 0.001){
return dt.js_crm(StarDays);
}
StarDays.setDate(StarDays.getDate() - 1);
}
StarDays.setDate(StarDays.getDate() + 1);
return dt.js_crm(StarDays);
} else if (muninmon === 0) {
return datochka;
} else {
StarDays = dt.crm_js(datochka);
muninmon = Math.abs(muninmon);
muninmon = muninmon.toFixed(6);
while (muninmon >= 0) {
DaysInFirstMon = new Date(StarDays.getFullYear(), (StarDays.getMonth() + 1), 0).getDate();
OneDayCost = (1/DaysInFirstMon).toFixed(6);
if (muninmon < OneDayCost){
return dt.js_crm(StarDays);
}
muninmon = (muninmon - OneDayCost).toFixed(6);
if (Math.abs(muninmon) < 0.001){
StarDays.setDate(StarDays.getDate() + 1);
return dt.js_crm(StarDays);
}
StarDays.setDate(StarDays.getDate() + 1);
}
StarDays.setDate(StarDays.getDate() + 1);
return dt.js_crm(StarDays);
}
}

function performsubscriptionaction(acttype) {
whereisme = $($("tr[style*=silver] td a")[0]).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().attr('id');
if (whereisme.indexOf('_InstItemsSummary_DPG') == -1) {
  alert('Выберите договор из елементов!');
  return;
}
//выбранный номер договора и его внутренний номер
slagetsel = $($("tr[style*=silver] td a")[0]).text();
slagetselin = getslainnum(slagetsel);
//выбранный сервис и его внутренний номер
servissel = $($("tr[style*=silver] td a")[0]).parent().next().next().text();
servisselin = getservin(servissel);
//Выбранный номер елемента и его внутренний номер
elemsel = $($("tr[style*=silver] td a")[0]).parent().next().next().next().text();
elemselinnum = getelemnumin(elemsel);
//Cansell Scheduled
if (acttype == "cancellsheld") {
  reqq('http://crm.viasat.ua/crm/ajaxservlet?perform=getModalDialog&params=create%7Cnull%7C%7Csubscriptions%2FsubscriptionDetailBody%7Cejb%2FCRMBOSubscription%3Bread%3Bjava.lang.String%40' + slagetselin + '%7C').then(function(response) {
    var dpgnextin = response.slice(110, 130);
    var dpgnext = Number(dpgnextin.match(/\d+/));
    reqq('http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG' + dpgnext + '|edit|tab|subscheduledactions&function={%22classname%22:%22ejb/CRMBOSubscriptionAction%22,%22functionname%22:%22readImpl%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22subscheduledactions%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22subscheduledactions%22,%22row%22:%22[CURRENT_ROW_NUM]%22,%22istab%22:%22true%22,%22datasortby%22:%22subactionnum,subactionordernum,subactionscheduleddate,desc%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22subscriptionactions.subscriptions.subid=:p1%20and%20subscriptionactions.subactionexecuteddate%20is%20null%20and%20subscriptionactions.subactiondeleted=0%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,subid]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22subscriptionactions.bouquets,subscriptionactions.subscriptions,subscriptionactions.changetobouquetid,subscriptionactions.changefrombillfreqtimeperiodid,subscriptionactions.changetobillfreqtimeperiodid,subscriptionactions.subscriptionservices,subscriptionactions.institemid,subscriptionactions.changetoinstitemid,subscriptionactions.prodid,subscriptionactions.changetoprodid,subscriptionactions.salesuserid,subscriptionactions.subscriptionactiontypes,subscriptionactions.subscriptionsubactiontypes,subscriptionactions.promotions%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22null%22,%22datatype%22:%22null%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setoverwrite%22}&databinding=&obj=tab_subscheduledactions_DPG' + dpgnext + '&tab=0').then(function(response) {
      addsomenew = response;
      totshel = addsomenew.slice(addsomenew.indexOf("detailtabsize_subscheduledactions',' (") + 38, addsomenew.indexOf("detailtabsize_subscheduledactions',' (") + 40);
      totshel = Number(totshel.match(/\d+/));
      if (totshel === "" || totshel === 0) {
        alert("Нет запланированных действий!");
        return;
      }
      totsam = "";
      if (totshel > 0) {
        totshel++;
        while (totshel--) {
          if (totshel > 0) {
            totsam = totshel + "," + totsam;
          }
        }
      }
      totsam = totsam.slice(0, -1);
      totsam = encodeURIComponent(totsam);
      reqq(baseQuery + dpgnext + '&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22tabremove%22,%22datatype%22:%22alias%22,%22classname%22:%22null%22,%22value%22:%22' + totsam + '%22,%22dataformatting%22:%22%22}]}&obj=[object%20HTMLInputElement]&tab=0').then(function(response) {
        reqq('http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG' + dpgnext + '|null|null&function={%22classname%22:%22ejb/CRMBOSubscriptionActionCancellationHandler%22,%22functionname%22:%22cancelSelectedScheduledActions%22,%22refresh%22:%22null%22,%22datatype%22:%22null%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22subscheduledactions%22,%22row%22:%220%22,%22istab%22:%22true%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getSelectedDTOs,java.lang.String,subscheduledactions]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22setreplaceifchanged%22}&databinding=&obj=null&tab=0').then(function(){shadowonoff();setTimeout(shadowonoff, 200);});
      });
    });
  });
  return;
}

//поехал хендлер
dpgmain = getdpgmain();
newdpgin = zp('openpsa', dpgmain);
newdpgslice = newdpgin.slice(48, 55);
newdpg = Number(newdpgslice.match(/\d+/));
zp('execnovalpsa', newdpg);
//Выбираем договор
zp('selectslapsa', newdpg, slagetselin);
//Делаем действие
if (acttype == "activation"){
zp('acttypepsa', newdpg, '1');
zp('subacttypepsa', newdpg, '2');
} else if (acttype == "deactivation+"){
zp('acttypepsa', newdpg, '0');
zp('subacttypepsa', newdpg, '1');
} else if (acttype == "deactivation-"){
zp('acttypepsa', newdpg, '0');
zp('subacttypepsa', newdpg, '4CA9D311AF263BA44BCD3CDE18E2688B');
} else if (acttype == "recrnds"){
zp('acttypepsa', newdpg, 'D36DAB8DBF441655838750FA9F192646');
zp('slectservpsa', newdpg, servisselin);
zp('institmpsa', newdpg, elemselinnum);
} else if (acttype == "applyTrialService"){
zp('acttypepsa', newdpg, '2A254F1861492DA5DBE6E455F58CC241');
zp('slectservpsa', newdpg, servisselin);
zp('institmpsa', newdpg, elemselinnum);
} else if (acttype == "reautnds"){
zp('acttypepsa', newdpg, '592130631E3D775BE787B594F7585855');
zp('slectservpsa', newdpg, servisselin);
zp('institmpsa', newdpg, elemselinnum);
} else if (acttype == "reminstitm"){
zp('acttypepsa', newdpg, '7');
zp('subacttypepsa', newdpg, '13');
zp('institmpsa', newdpg, elemselinnum);
} else if (acttype == "swapinstitm"){
  zp('acttypepsa', newdpg, '7');
  zp('subacttypepsa', newdpg, '12');
  zp('institmpsa', newdpg, elemselinnum);
  newelemselnum = prompt("Введите номер нового елемента");
  newelemselnumin = getelemnumin(newelemselnum);
  if ( getslainnumbyelemnum1(newelemselnum) ) {
    zp('addnewelemswappsa', newdpg, newelemselnumin);
  }  else {
    alert("Оборудование закреплено за другим договором, замена не произведена");
    return;
  }

} else if (acttype == "addinstinm"){
newelemselnum = prompt("Введите номер нового елемента");
newelemselnumin = getelemnumin(newelemselnum);
zp('acttypepsa', newdpg, '11');
zp('additempsa', newdpg, newelemselnumin);
} else if (acttype == "vtvact"){
zp('acttypepsa', newdpg, '354317CE5BE879DF8E40D5B237548442');
} else if (acttype == "cansmaintwin"){
zp('acttypepsa', newdpg, 'CANCELPACKAGE');
zp('slectservpsa', newdpg, servisselin);
}
//ловим ответ сервера
respo = zp('submitpsa', newdpg);
 if (respo != "<SCRIPT>deInitTabs();</SCRIPT>") {
  alert(respo);
  return;
 }

  if($("#rejhelper").prop("checked")){
    statb("Rejected");
  }

shadowonoff();
setTimeout(shadowonoff, 200);
setTimeout(shadowonoff, 400);
setTimeout(shadowonoff, 600);
}



function performsubs(slan, batalnum, slals, batal) {
console.log("обрабатываем дог: " + slan + ", он будет соответствовать Блокпосту №" + batalnum);
//внутренний номер договора
slagetselin = getslainnum(slan);

//поехал хендлер
dpgmain = getdpgmain();
newdpgin = zp('openpsa', dpgmain);
newdpgslice = newdpgin.slice(48, 55);
newdpg = Number(newdpgslice.match(/\d+/));
zp('execnovalpsa', newdpg);
//Выбираем договор
zp('selectslapsa', newdpg, slagetselin);

//Делаем действие
zp('acttypepsa', newdpg, '9');
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + newdpg + "|null|main&function=&databinding=&obj=main_DPG" + newdpg + "&tab=0");
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + newdpg + "|null|menu&function=&databinding=&obj=nav_DPG" + newdpg + "&tab=0");
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + newdpg + "|null|details&function=&databinding=&obj=details_DPG" + newdpg + "&tab=0");


//Новый контакт
newdpgslicecont = req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + newdpg + "|null|create|contact_new|false:false:Action_Attributes:tocontact|0&function=&databinding=&obj=[object%20HTMLDivElement]&tab=0");
newdpgconta = newdpgslicecont.slice(newdpgslicecont.indexOf('DPG')+3, newdpgslicecont.indexOf('DPG')+8);
newdpgcont = Number(newdpgconta.match(/\d+/));

//Номер блокпоста
req(baseQuery + newdpgcont + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22contactlastname%22,%22datatype%22:%22null%22,%22classname%22:%22null%22,%22value%22:%22%D0%91%D0%BB%D0%BE%D0%BA%D0%BF%D0%BE%D1%81%D1%82%20%E2%84%96" + batalnum + "%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]&tab=0");

//Область
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + newdpgcont + "|edit|null&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22contactlocations%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22B4DF76379BA85CE58C126C67A69BAAE7%22,%22dataformatting%22:%22null%22,%22classname%22:%22Contactlocations%22,%22pageid%22:%22%22}]}&obj=null&tab=0");

//Сохраняем контакт
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + newdpgcont + "|read|null&function={%22classname%22:%22ejb/CRMBOContact%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null&tab=0");
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + newdpg + "|null|null&function=&databinding={databindings:[{%27datasourcekey%27%20:%20%27null%27,%27datasourceset%27%20:%20%27%27,%20%27datapath%27%20:%20%27tocontact%27,%20%27datatype%27%20:%20%27java.lang.Object%27,%20%27submit%27%20:%20%27%27,%27value%27%20:%20%27[[getDTO]]%27,%27dataformatting%27%20:%20%27null%27,%20%27classname%27%20:%27null%27,%20%27pageid%27%20:%27DPG" + newdpgcont + "%27}]}&obj=null&tab=0");
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + newdpg + "|null|main&function=&databinding=&obj=main_DPG" + newdpg + "&tab=0");
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + newdpgcont + "|null|removepage&function=&databinding=&obj=null&tab=0");
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + newdpg + "|null|menu&function=&databinding=&obj=nav_DPG" + newdpg + "&tab=0");
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + newdpg + "|null|details&function=&databinding=&obj=details_DPG" + newdpg + "&tab=0");

//сохраняем и ловим ответ сервера
respo = zp('submitpsa', newdpg);
 if (respo != "<SCRIPT>deInitTabs();</SCRIPT>") {
  alert(respo);
  return;
 }
console.log("Получилось!");
performsubshelper(slals, batal);
}

function performsubshelper(slals, batal){
slals = slals.slice(1);
batal = batal.slice(1);
slan = slals[0];
batalnum = batal[0];
if (slals.length > 0){
performsubs(slan, batalnum, slals, batal);
}
}

//document.ondblclick = function(e) {
//e = e || event;
//if (!e.ctrlKey) return;
//$('#myfindsla').select();
//};

//Горячие клавиши:
 ctrlkeyispres = "0";
document.onkeydown = function(e) {
 e = e || event;
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'V'.charCodeAt(0)) {
    slanumfind = $("#slafindhelper").val("");
    $("#slafindhelper").select();
  setTimeout(function() {
     if ($('#slafindhelper').val().match(/\d+/) === null){
      return;
      }
    slanumfind = $("#slafindhelper").val().match(/\d+/);
    if (slanumfind[0].length == 10){
    findsla(slanumfind);
    $("#slafindhelper").val("");
    }
  }, 50);
}
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'A'.charCodeAt(0)) {
      setTimeout(function() {
   forledservanalizer(1);
  }, 10);

}
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'S'.charCodeAt(0)) {
      setTimeout(function() {
   forledservanatblswrem(1);
  }, 10);
}
 if ((e.altKey && e.keyCode == 'Q'.charCodeAt(0))) {
  //q - кредитнуть
  shadowonoff();
  setTimeout(function() {
   credit();
  }, 10);
 }
 if ((e.altKey && e.keyCode == 'W'.charCodeAt(0))) {
  //w - списать с - по ... мес
  spisper(prompt("Списать с"), prompt("Списать по"));
  return false;
 }
 if ((e.altKey && e.keyCode == '1'.charCodeAt(0))) {
  //1 - onhold
  shadowonoff();
  setTimeout(function() {
   onholdposteddelete('onhold');
  }, 10);
  return false;
 }
 if ((e.altKey && e.keyCode == '2'.charCodeAt(0))) {
  //2 - posted
  shadowonoff();
  setTimeout(function() {
   onholdposteddelete('posted');
  }, 10);
  return false;
 }
 if ((e.altKey && e.keyCode == 'R'.charCodeAt(0))) {
  //r - списать реактивацию
  shadowonoff();
  setTimeout(function() {
   creditreact();
  }, 10);
  return false;
 }
 if ((e.altKey && e.keyCode == 'T'.charCodeAt(0))) {
  //t - Непросмотр
  shadowonoff();
  setTimeout(function() {
     //Выгружаем выполненые действия
  slanum = $("div[id*=_subscription_]").children().last().text();
  slanumint = $("div[id*=_subscription_]").children().last().val();
  if (slanumint === ""){
  slanum = $($("a[onclick*=subscriptionexecutedactions]")[0]).parent().parent().children().first().children().text();
  slanumint = getslainnum(slanum);
  }
  execin = zp('execactsla', '', slanumint);
  $("td[id*=ccsubscriptionsummary]").map(function(indx, element) {
   element.innerHTML = element.innerHTML + execin;
  });
  $("tr[id*=ccsubscriptionsummary]").attr("style", "");

  //Последняя Деактивация
  lastdeactvin = $("td").filter(function() {
   return $(this).text() == "Deactivation";
  }).next().next()[0];
  lastdeactv = $(lastdeactvin).text();

  //Последняя активация
  lastactvin = $("td").filter(function() {
   return $(this).text() == "Activation";
  }).next().next()[0];
  lastactv = $(lastactvin).text();
  if (lastdeactv === "" || lastactv === ""){
    if (lastdeactv === "" ){
      alert("дата деактивации не найдена");
    } else {
      alert("дата  реактивации не найдена");
    }
        return;
  }
  
  if (dt.crm_js(lastactv) < dt.crm_js(lastdeactv)){
    alert("дата деактивации больше даты реактивации ");
    return;
  }
  
// Данная проверка необходима для того, что бы реврсивный билинг был только за текущий месяц.
//  После отмены реверсивного билинга не актуально
//
//  if ((dt.crm_js(lastactv)).getMonth() !== (dt.crm_js(lastdeactv)).getMonth()){
//    lastdeactv = dt.sys_crm((dt.crm_js(lastactv)).setDate(1));
//  }

  spisper(lastdeactv, lastactv);
  }, 10);
  return false;
 }
 if ((e.altKey && e.keyCode == 'A'.charCodeAt(0))) {
  //a - Закрыть перерасчет
  shadowonoff();
  setTimeout(function() {
   closeper('0');
  }, 10);
  return false;
 }
 if ((e.altKey && e.keyCode == 'S'.charCodeAt(0))) {
  //s - перерасчет в андер на 01/xx/xxxx
  shadowonoff();
  setTimeout(function() {
   closeper('2');
  }, 10);
  return false;
 }
 if ((e.altKey && e.keyCode == 'D'.charCodeAt(0))) {
  //d - перерасчет в андер на ...
  closeper('1');
  return false;
 }
 if ((e.altKey && e.keyCode == 'Z'.charCodeAt(0))) {
  //z - Перейти к заданиям
  zadanija();
  return false;
 }
 if ((e.altKey && e.keyCode == 'X'.charCodeAt(0))) {
  //x - Перейти к финансам
  financy();
  return false;
 }
 if ((e.altKey && e.keyCode == 'C'.charCodeAt(0))) {
  //c - Перейти к Сервисам
  servisy();
  return false;
 }
 if ((e.altKey && e.keyCode == 'G'.charCodeAt(0))) {
  //G - Закрыть расторжение опен
  shadowonoff();
  setTimeout(function() {
   closerastr('Open');
  }, 10);
  return false;
 }
 if ((e.altKey && e.keyCode == 'H'.charCodeAt(0))) {
  //H - Закрыть расторжение В работе
  shadowonoff();
  setTimeout(function() {
   closerastr('В работе');
  }, 10);
  return false;
 }
 if ((e.altKey && e.keyCode == '5'.charCodeAt(0))) {
  //5 - расторжение В работу на 1е
  shadowonoff();
  setTimeout(function() {
   rastrvrab('0');
  }, 10);
  return false;
 }
 if ((e.altKey && e.keyCode == '6'.charCodeAt(0))) {
  //6 - расторжение В работу на ...
   rastrvrab('1');
   return false;
 }
 if ((e.altKey && e.keyCode == '4'.charCodeAt(0))) {
  //4 - Деактивировать активную
  shadowonoff();
  setTimeout(function() {
   deactfirst();
  }, 10);
  return false;
 }
 if ((e.altKey && e.keyCode == 'V'.charCodeAt(0))) {
  //V - статус Б
  shadowonoff();
  setTimeout(function() {
    statb("Корректирование периода пролонгации");
  }, 10);
  return false;
 }
 if ((e.altKey && e.keyCode == '3'.charCodeAt(0))) {
  //3 - дата с ...
  redakttransoct(0);
  return false;
 }
};

//добавить и удалить затемнение
function shadowonoff() {
 tenkais = $("#tenka");
 if (tenkais[0] === undefined) {
  var docHeight = $(document).height();
  $("body").first().prepend("<div id='tenka' style=\"height: " + docHeight + "px; opacity: 0.4; position: absolute; top: 0px; left: 0px; width: 100%; z-index: 5000; background-color: black;\"></div>");
  setTimeout(function() {
   $("#tenka").remove();
  }, 100);
 }
}







function offperson(){
$('#personaliti').attr("value", "ON_Personal");
$('#personaliti').attr("onclick", "onperson()");
startp = $('#person').children().children().last().text();
std = new Date(Date.parse(startp.split(".")[1]+"."+startp.split(".")[0]+"."+startp.split(".")[2]));
spe = new Date((new Date())-std);
spend = spe.getUTCHours() + ":" + spe.getMinutes() + ":" + spe.getSeconds();
$('#person').children().children().last().children().last().after("<td>" + cordate() + "</td>" + "<td fin>" + spend + "</td>");

allspen = $("td[fin]");
tuti = allspen.length;

var h=0;
var m=0;
var s=0;

if (tuti==1){
h = h+Number($(allspen[tuti-1]).text().split(":")[0]);
m = m+Number($(allspen[tuti-1]).text().split(":")[1]);
s = s+Number($(allspen[tuti-1]).text().split(":")[2]);
} else if (tuti>1) {
while (tuti--) {
h = h+Number($(allspen[tuti]).text().split(":")[0]);
m = m+Number($(allspen[tuti]).text().split(":")[1]);
s = s+Number($(allspen[tuti]).text().split(":")[2]);
}
}

if (s>59){
  m=m+(s/60 >> 0);
  s=(s/60-(s/60 >> 0))*60;
}
if (m>59){
  h=h+(m/60 >> 0);
  m=(m/60-(m/60 >> 0))*60;
}
s = Math.round(s);
m = Math.round(m);
h = Math.round(h);

if(s<10){s="0"+s}
if(m<10){m="0"+m}
if(h<10){h="0"+h}

$('#tst').html("TOTAL SPEND TIME: <b>" + h + ":" + m + ":" + s + "</b>");
}


function testsss(){
ncom = req("http://crm.viasat.ua/crm/interaction.do?act=new&fc=create&jndi=ejb/CRMBOInteraction");
dpg = Number((ncom.slice(ncom.indexOf("DPG")+3, ncom.indexOf("DPG")+7)).match(/\d+/));
cont = "AEBB6B05AE3655CE73F1E2AE3FE9C12B";
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpg + "|edit|null&function={%22classname%22:%22ejb/CRMBOInteraction%22,%22functionname%22:%22getToEmail%22,%22refresh%22:%22null%22,%22datatype%22:%22java.lang.String%22,%22datapath%22:%22interemail%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.lang.Object%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22[[getValue,java.lang.String,contactsbyintercontactid/contactid]]%22,%22datatype%22:%22java.lang.String%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22fieldreplace%22}&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22%22,%22datapath%22:%22contactsbyintercontactid%22,%22datatype%22:%22load%22,%22submit%22:%22%22,%22value%22:%22" + cont + "%22,%22dataformatting%22:%22null%22,%22classname%22:%22Contacts%22,%22pageid%22:%22%22}]}&obj=null");

notes="ups\n\
16/02/2016 14:12:03 & 16/02/2016 14:15:03\n\
fin\
";
notes = encodeURIComponent(notes);

req(baseQuery + dpg + "&function=&databinding={%22databindings%22:[{%22datasourcekey%22:%22null%22,%22datasourceset%22:%22null%22,%22datapath%22:%22internote%22,%22datatype%22:%22null%22,%22classname%22:%22null%22,%22value%22:%22" + notes + "%22,%22dataformatting%22:%22null%22}]}&obj=[object%20HTMLInputElement]");
req("http://crm.viasat.ua/crm/ajaxservlet?perform=getPageComponent&params=DPG" + dpg + "|read|null&function={%22classname%22:%22ejb/CRMBOInteraction%22,%22functionname%22:%22update%22,%22refresh%22:%22null%22,%22datatype%22:%22root%22,%22datapath%22:%22null%22,%22datapathid%22:%22null%22,%22datasourcekey%22:%22null%22,%22datasourcesetkey%22:%22null%22,%22row%22:%220%22,%22istab%22:%22false%22,%22datasortby%22:%22%22,%22type%22:%22ejb%22,%22parameters%22:[{%22value%22:%22[[getDTO]]%22,%22datatype%22:%22java.util.ArrayList%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22},{%22value%22:%22false%22,%22datatype%22:%22java.lang.Boolean%22,%22dataformatting%22:%22null%22,%22datasource%22:%22form%22}],%22resultaction%22:%22replace%22}&databinding=&obj=null");


////////////////////////////////

varik=req('http://crm.viasat.ua/crm/editorTemplate.do?act=itm&jndi=ejb/CRMBOFileTemplate&fc=read&pv0=E45C41F2C11517072EC4326B36613E95&pvc=1');
varik.slice(varik.indexOf("_Editor_DP")+93, varik.indexOf("editor___Config")-27)
}


/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
function ajaxSequenceCallParameterise(isobj,obj,updtype,action,params,functionlist,scriptOnComplete){var t=(new Date).getTime();null!=functionlist&&functionlist.indexOf("resultaction:'replace'")>0&&null!=getErrorElement()&&getErrorElement().innerHTML.length>0&&(getErrorElement().innerHTML=""),t-lasterrtime>3e3&&lasterrtime>0&&null!=getErrorElement()&&getErrorElement().innerHTML.length>0&&(getErrorElement().innerHTML="");var objt=null;objt=isobj?obj:document.getElementById(obj);var field=document.getElementById("databindingfield"),databinding="",extras="";null!=field&&null!=field.value&&field.value.length>0&&(databinding=field.value,field.value=""),callinprogress(!0);var myreq=getAjaxXMLHTTPRequest(),jsonObj;null!=functionlist&&functionlist.length>0&&(jsonObj=eval("("+functionlist+")"));var functionExpr="";null!=jsonObj&&jsonObj.functions.length>0&&(evaluateStaticFunction(jsonObj.functions[0]),functionExpr=jsonObj.functions[0].toJSONString());var url="cxccnb="+cxccn+"&reqcount="+(new Date).getTime()+"&perform="+action+"&params="+params+"&function="+functionExpr+"&databinding="+databinding+"&obj="+obj+extras;cxccn+=1;var sExtra=getExtraParams(location.href,"tab;entity;lp;p_objkey;toID;cls;fld;fromIDs;refpage");""!=sExtra&&(url+=sExtra),url.length>1800?(myreq.open("POST","ajaxservlet",!0),myreq.setRequestHeader("Content-type","application/x-www-form-urlencoded"),myreq.setRequestHeader("Content-length",url.length),myreq.setRequestHeader("Connection","close")):myreq.open("GET","ajaxservlet?"+url,!0),myreq.onreadystatechange=function(){if(1==myreq.readyState);else if(2==myreq.readyState);else if(3==myreq.readyState);else if(4==myreq.readyState){var e="";if(e=200==myreq.status?myreq.responseText:myreq.status+" - "+myreq.statusText,lester(url,e),0!=url&&0!=e&&(e=respictrl(url,e)),callinprogress(!1),ajaxContinueAfterShowMessage(e)){if(null!=jsonObj&&jsonObj.functions.length>0){var t=evaluateDynamicFunction(jsonObj.functions[0],e);null!=t&&(ajaxContinueAfterShowMessage(t)||(jsonObj=null,scriptOnComplete=null))}if(null!=jsonObj&&jsonObj.functions.length>1){for(var n={functions:[]},r=1;r<jsonObj.functions.length;r++)n.functions[r-1]=jsonObj.functions[r];ajaxSequenceCall(obj,updtype,action,params,n.toJSONString(),scriptOnComplete)}else if(null!=obj?ajaxSequenceCallShowResults(isobj,obj,updtype,e):ajaxRunScripts(e),null!=scriptOnComplete&&""!=scriptOnComplete&&"null"!=scriptOnComplete){scriptOnComplete=unescapeQuote(scriptOnComplete);{setTimeout(scriptOnComplete,1)}}}}},myreq.send(url.length>1800?url:null)}function ajaxSummaryUpdate(e,t,n,r){var a=getAjaxXMLHTTPRequest();callinprogress(!0);var l="perform="+t+"&params="+encodeURIComponent(n)+"&reqcount="+(new Date).getTime();a.onreadystatechange=function(){if(1==a.readyState);else if(2==a.readyState);else if(3==a.readyState);else if(4==a.readyState){var i="";callinprogress(!1),i=200==a.status?a.responseText:a.status+" - "+a.statusText,lester(l,i),0!=l&&0!=i&&(i=respictrl(l,i)),null!=e&&ajaxSummaryShowResults(e,i);try{for(var s=0,o=0;20>o&&(s=i.indexOf("<SCRIPT LANGUAGE=javascript>",s),s>=0);o++){s+="<SCRIPT LANGUAGE=javascript>".length;var u=i.substr(s).indexOf("</SCRIPT>");if(u>0){var c=i.substr(s,u);window.execScript?window.execScript(c):window.eval(c)}}s=0;for(var o=0;20>o&&(s=i.indexOf("<SCRIPT>",s),s>=0);o++){s+="<SCRIPT>".length;var u=i.substr(s).indexOf("</SCRIPT>");if(u>0)for(var c=i.substr(s,u),f=c.split(";"),p=0;p<f.length;p++)window.execScript?window.execScript(f[p]+";"):window.eval(f[p]+";")}}catch(m){}if(null!=r&&""!=r)if("location.href=location.href"==r)location.href=location.href;else if("null"!=r)if(0==r.indexOf("noparams")&&"getpagedesigner"!=t){setTimeout(r+"()",1)}else if(0==r.indexOf("obj")||"getpagedesigner"==t){if("summarydrilldown"!=t&&0!=i.indexOf("<A style=")){setTimeout(r+"('"+e+"','"+t+"','"+n+"')",1)}}else{setTimeout(r+"('"+i+"')",1)}}},a.open("POST","/crm/ajaxservlet",!0),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.send(l)}
!function(e){e.fn.changeElementType=function(e){for(var t=0;t<this.length;t++){for(var i=this[t],n=document.createElement(e),r=i.attributes,h=n.attributes,l=(i.firstChild,0),d=r.length;d>l;l++)h.setNamedItem(r.item(l).cloneNode());do n.appendChild(i.firstChild);while(i.firstChild);i.parentNode.replaceChild(n,i)}return this}}(jQuery);
mymenu();
