/* heures */
function $(id){return document.getElementById(id)}
 
function hms(){
    var today=new Date();
    var hrs=today.getHours(),mns=today.getMinutes(),scd=today.getSeconds();
    var str=(hrs<10?"0"+hrs:hrs)+":"+(mns<10?"0"+mns:mns)+":"+(scd<10?"0"+scd:scd);
    $("clock").innerHTML=str;
    setTimeout(hms,1000);// réécriture toutes les 1000 millisecondes
}
hms();