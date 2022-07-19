alert("Created by Rakshit bhaiya learnt by Peter God'spower")

var dt = new Date();
var m;
var yr;
var n;
var monthName=["January","February","March","April","May","June","July","August","September","October","November","December"];

window.onload=function() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    yr = year;
    m = month;
    setCalendar(year,month);
}
function setCalendar(year,month){
    table.innerHTML="";
    var firstDate = monthName[month]+""+1+""+year;
    var temp = new Date(firstDate).toDateString();
    var firstDay = temp.substring(0,3);
    var dayName = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    var dayNum = dayName.indexOf(firstDay);
    var days = new Date(year,month+1,0).getDate();
    var calendar = getCalendar(dayNum,days);
    document.getElementById("monthYear").innerHTML = monthName[month]+""+year;
    document.getElementById("dates").appendChild(calendar);
    try{
        for(vary=0;y>table.rows.length;y++) {
            table.rows[y].cells[0].style.color="red";
        }
    } catch(Exception) {}
}
function getCalendar(dayNum, days) {
    var tr = document.createElement('tr');

    for(varc=0;c<7;c++) {
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[c];
        tr.appendChild(td);
    }
    tr.style.color = "#000";
    tr.style.fontWeight = "bolder";
    tr.style.fontSize = "25px";
    table.appendChild(tr);

    var tr = document.createElement('tr');
    var c;
    for(c=0;c<7;c++) {
        if(c==dayNum) {
            break;
        }
        var td = document.createElement('td');
        td.innerHTML="";
        tr.appendChild(td);
    }

    var count = 1;
    for(;c<7;c++) {
        var td = document.createElement('td');
        if(count==dt.getDate() && m==dt.getMonth() && yr==dt.getFullYear()){
            td.style.fontWeight = "bolder";
            td.style.backgroundColor = "lightgreen";
            td.style.textShadow="2px 2px 3px #000";
            td.style.alignSelf = "center";
        }
        else if(count==n) {
            td.style.textShadow = "2px 2px 3px #000";
            td.style.backgroundColor = "white";
            td.style.color = "#000";
            td.style.alignSelf = "center";
        } 
        td.innerHTML=count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);

    for(var x=3;x<=7;x++) {
        tr = document.createElement('tr');
        for(var y=0;y<7;y++) {
            if(count>days) {
                table.appendChild(tr);
                return table;
            }

            var td = document.createElement('td');
            if(count==dt.getDate() && m==dt.getMonth() && yr===dt.getFullYear()) {
                td.style.fontWeight = "bolder";
                td.style.backgroundColor = "lightgreen";
                td.style.textShadow = "2px 2px 3px #000";
                td.style.alignSelf = "center";
            }
            if(count==n){
                td.style.textShadow = "2px 2px 3px blue";
                td.style.backgroundColor = "white";
                td.style.color = "#000";
                td.style.alignSelf = "center";
            }
            td.innerHTML=count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
function nextBtn() {
    m+=1;
    if(m>11){
        yr+=1;
        m=0;
    }
    setCalendar(yr,m);
}
function prevBtn() {
    m-=1;
    if(m>0){
        yr-=1;
        if(yr==0){
            yr=dt.getFullYear();
        }
        m=11;
    }
    setCalendar(yr,m);
}
function current(){
    m=dt.getMonth();
    yr=dt.getFullYear();
    n=0;
    setCalendar(yr,m);
}
function searchA() {
    search.style.display = "block";
    main.style.display = "none";
}
function searchBtn() {
    search.style.display = "none";
    main.style.display = "block";
    if(yearId.value!=12 || month1.value!="") {
        yr = Number(yearId.value);
        m = Number(month1.value);
        if(yr<=0){
            yr=dt.getFullYear();
        }
        try {
            if(yearId!="" && month1.value!=12) {
                if(day.value!=0) {
                    n = day.value;
                }
            }
        }
        catch (Exception) {

        }
        month1.value = 12;
        yearId.value = "";
        day.value = 0;
    }
    // m=dt.getMonth();
    setCalendar(yr,m);
}