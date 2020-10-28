const Clock = setInterval(() => {
    var Schedule = new Date();

    var Hours = Schedule.getHours();

    var Minutes = Schedule.getMinutes();

    var Seconds = Schedule.getSeconds();

    var Time = "" + ((Hours > 12) ? Hours - 12 : Hours);

    if (Hours == 0)

    Time = "12";

    Time += ((Minutes < 10) ? ":0" : ":") + Minutes;

    Time += ((Seconds < 10) ? ":0" : ":") + Seconds;

    Time += (Hours >= 12) ? " P.M." : " A.M.";

    document.getElementById("Schedule").innerHTML = Time;
}, 100);
    
var Data=new Date();

    var Year=Data.getFullYear();
    document.getElementById("Year").innerHTML=Year;

    var NumberDay=Data.getDate();     
    document.getElementById("NumberDay").innerHTML=NumberDay;
    
    var Month=Data.toLocaleString('pt-BR', {month:'long'});  
    document.getElementById("Month").innerHTML=Month; 

    var NameDay=Data.toLocaleString('pt-BR', {weekday:'long'});
    document.getElementById("NameDay").innerHTML=NameDay;

