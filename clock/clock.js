function clock()
{
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var second = document.getElementById('second');
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
hours.innerHTML = h;
minutes.innerHTML = m;
second.innerHTML = s;
}
var interval=setInterval(clock,1000);