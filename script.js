//your JS code here. If required.


function daysOfAYear(year){
	if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)){
		alert(366);
	}
	else{
		alert(365);
	}
}
const year = prompt("Enter the year");
daysOfAYear(year)
