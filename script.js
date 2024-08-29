//your JS code here. If required.

const year = prompt("Enter the year");
function daysOfAYear(year){
	if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)){
		alert("366");
	}

	else{
		alert("365");
	}
}
daysOfAYear(year)
