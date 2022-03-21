// display date

var date = document.getElementById("date");
const options = {
weekday:'long',
month:'long',
day:'numeric'
}
const today=new Date();
date.innerHTML=today.toDateString("en-us",options);

// display date