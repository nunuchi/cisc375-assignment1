

function saveInput() {
	var chore = document.getElementById("chore-item").value;
	var choreDate = document.getElementById("chore-date").value;
	var choreCategory = document.getElementById("chore-category").value;
	var d = new Date();
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("theChore",chore);
		localStorage.setItem("theDate",choreDate);
		localStorage.setItem("theCategory",choreCategory);

		document.getElementById("chore-list").innerHTML += 
		"<tr id='colorSwap'>"
		+"<td>"+localStorage.getItem("theChore")+"</td>"
		+"<td>"+d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+"</td>"
		+"<td>"+localStorage.getItem("theDate")+"</td>"
		+"<td>"+localStorage.getItem("theCategory")+"</td>"
		+"<td>	<select class='completionStatus'><option class='yesno' name='incomplete'>Incomplete</option><option class='yesno' name='complete'>Complete</option></select>"
		+"<td><button type='button' onclick='removeTableRow(this)'>Remove</button></td>";
		+"</tr>";

		var z = localStorage.getItem("theCategory");
		z = JSON.stringify(z);
		z = z.replace(/['"]+/g, '');
		z = document.getElementsByName(z);

		document.getElementById("colorSwap").style.backgroundColor = "#"+z[0].getAttribute('id');
		document.getElementById("colorSwap").removeAttribute("id");
		// "<td><button type='button' onclick='removeTableRow("choreValueNumber")'>"+"Remove Row "+(choreValueNumber)+"</button></td>";
	}
}

function removeTableRow(x) {
	var parent = x.parentNode.parentNode;

	if(confirm("Are you sure that you want to delete this task?")) {
	parent.parentNode.removeChild(parent);}
	else {}
}

function sortTableDate() {
	var table, rows, i, a, b, sortOn, swapOn;
	table = document.getElementById("chore-list");
	sortOn = true;

	while(sortOn) {
		sortOn = false;
		rows = table.getElementsByTagName("tr");
		for (i = 1; i<(rows.length-1); i++) {
			swapOn = false;
			a = rows[i].getElementsByTagName("td")[1];
			a = a.innerHTML.split("-");
			a = (a[0]+a[1]+a[2]);
		
			b = rows[i+1].getElementsByTagName("td")[1];
			b = b.innerHTML.split("-");
			b = (b[0]+b[1]+b[2]);
	
			if (a > b) {
				swapOn = true;
				break;
			} //if (a > b)
		}//for (i = 1; i<(rows.length-1); i++)

		if (swapOn) {
			rows[i].parentNode.insertBefore(rows[i+1], rows[i])
			sortOn = true;
			
		}//if (swapOn)
	}//while(sortOn)
}

function sortTableEndDate() {
	var table, rows, i, a, b, sortOn, swapOn;
	table = document.getElementById("chore-list");
	sortOn = true;

	while(sortOn) {
		sortOn = false;
		rows = table.getElementsByTagName("tr");
		for (i = 1; i<(rows.length-1); i++) {
			swapOn = false;
			a = rows[i].getElementsByTagName("td")[2];
			a = a.innerHTML.split("-");
			a = (a[0]+a[1]+a[2]);
		
			b = rows[i+1].getElementsByTagName("td")[2];
			b = b.innerHTML.split("-");
			b = (b[0]+b[1]+b[2]);
	
			if (a > b) {
				swapOn = true;
				break;
			} //if (a > b)
		}//for (i = 1; i<(rows.length-1); i++)

		if (swapOn) {
			rows[i].parentNode.insertBefore(rows[i+1], rows[i])
			sortOn = true;
			
		}//if (swapOn)
	}//while(sortOn)
}

function sortTableCategory() {
	var table, rows, i, a, b, sortOn, swapOn;
	table = document.getElementById("chore-list");
	sortOn = true;

	while(sortOn) {
		sortOn = false;
		rows = table.getElementsByTagName("tr");
		for (i = 1; i<(rows.length-1); i++) {
			swapOn = false;
			a = rows[i].getElementsByTagName("td")[3];
			b = rows[i+1].getElementsByTagName("td")[3];
			a = a.innerHTML;
			b = b.innerHTML;
			var x = a.localeCompare(b);
			var y = b.localeCompare(a);

			if (x > y) {
				swapOn = true;
				break;
			} //if (x > y)
		}//for (i = 1; i<(rows.length-1); i++)

		if (swapOn) {
			rows[i].parentNode.insertBefore(rows[i+1], rows[i])
			sortOn = true;
			
		}//if (swapOn)
	}//while(sortOn)
}

function sortTableDone() {
	var table, rows, i, a, b, sortOn, swapOn;
	table = document.getElementById("chore-list");
	sortOn = true;

	while(sortOn) {
		sortOn = false;
		rows = table.getElementsByTagName("tr");
		for (i = 1; i<(rows.length-1); i++) {
			swapOn = false;
			a = rows[i].getElementsByTagName("td")[4];
			b = rows[i+1].getElementsByTagName("td")[4];
			alert(a.options[a.selectedIndex].text);
			a = a.innerHTML;
			b = b.innerHTML;
			var x = a.localeCompare(b);
			var y = b.localeCompare(a);
			if (x > y) {
				swapOn = true;
				break;
			} //if (x > y)
		}//for (i = 1; i<(rows.length-1); i++)

		if (swapOn) {
			rows[i].parentNode.insertBefore(rows[i+1], rows[i])
			sortOn = true;
			
		}//if (swapOn)
	}//while(sortOn)
}

function dateForward() {
	var nowDate;
	nowDate = document.getElementById("month-now").innerHTML;


	if (nowDate == "January") {
		document.getElementById("month-now").innerHTML = "February";
	}
	else if (nowDate == "February") {
		document.getElementById("month-now").innerHTML = "March";
	}
	else if (nowDate == "March") {
		document.getElementById("month-now").innerHTML = "April";
	}
	else if (nowDate == "April") {
		document.getElementById("month-now").innerHTML = "May";
	}
	else if (nowDate == "May") {
		document.getElementById("month-now").innerHTML = "June";
	}
	else if (nowDate == "June") {
		document.getElementById("month-now").innerHTML = "July";
	}
	else if (nowDate == "July") {
		document.getElementById("month-now").innerHTML = "August";
	}
	else if (nowDate == "August") {
		document.getElementById("month-now").innerHTML = "September";
	}
	else if (nowDate == "September") {
		document.getElementById("month-now").innerHTML = "October";
	}
	else if (nowDate == "October") {
		document.getElementById("month-now").innerHTML = "November";
	}
	else if (nowDate == "November") {
		document.getElementById("month-now").innerHTML = "December";
	}
	else if (nowDate == "December") {
		document.getElementById("month-now").innerHTML = "January";
	}

	updateCalendar();
}

function dateBackward() {
	var nowDate;
	nowDate = document.getElementById("month-now").innerHTML;


	if (nowDate == "January") {
		document.getElementById("month-now").innerHTML = "December";
	}
	else if (nowDate == "February") {
		document.getElementById("month-now").innerHTML = "January";
	}
	else if (nowDate == "March") {
		document.getElementById("month-now").innerHTML = "February";
	}
	else if (nowDate == "April") {
		document.getElementById("month-now").innerHTML = "March";
	}
	else if (nowDate == "May") {
		document.getElementById("month-now").innerHTML = "April";
	}
	else if (nowDate == "June") {
		document.getElementById("month-now").innerHTML = "May";
	}
	else if (nowDate == "July") {
		document.getElementById("month-now").innerHTML = "June";
	}
	else if (nowDate == "August") {
		document.getElementById("month-now").innerHTML = "July";
	}
	else if (nowDate == "September") {
		document.getElementById("month-now").innerHTML = "August";
	}
	else if (nowDate == "October") {
		document.getElementById("month-now").innerHTML = "September";
	}
	else if (nowDate == "November") {
		document.getElementById("month-now").innerHTML = "October";
	}
	else if (nowDate == "December") {
		document.getElementById("month-now").innerHTML = "November";
	}

	updateCalendar();
}

function calendar2Input(dayNumber) {
	var nowDate = document.getElementById("month-now").innerHTML;
	var changeDate = document.getElementById("chore-date");
	var catenatedString;

	if (nowDate == "January") {
		nowDate = "01";
	}
	else if (nowDate == "February") {
		nowDate = "02";
	}
	else if (nowDate == "March") {
		nowDate = "03";
	}
	else if (nowDate == "April") {
		nowDate = "04";
	}
	else if (nowDate == "May") {
		nowDate = "05";
	}
	else if (nowDate == "June") {
		nowDate = "06";
	}
	else if (nowDate == "July") {
		nowDate = "07";
	}
	else if (nowDate == "August") {
		nowDate = "08";
	}
	else if (nowDate == "September") {
		nowDate = "09";
	}
	else if (nowDate == "October") {
		nowDate = "10";
	}
	else if (nowDate == "November") {
		nowDate = "11";
	}
	else if (nowDate == "December") {
		nowDate = "12";
	}
	
	catenatedString = "2018-"+nowDate+"-"+dayNumber;
	changeDate.value = catenatedString;

}


function saveColor() {
	var a = document.getElementById("newCategory").value;
	var b = document.getElementById("selectColor").value;

	var x = document.getElementById("chore-category");
	var option = document.createElement("option");
	option.innerHTML = a;
	option.setAttribute("name", a);
	option.id = b.replace('#', '');
	x.add(option);
	alert("Successfully added your custom category!")
}

function startUp() {
	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth()+1;
	var year = today.getFullYear();
	var i, j, monthSet, daySet, yearSet;
	var table = document.getElementById("calendar");

	if(day<10) { day = "0"+day; }
	if(month<10) { month = "0"+month; }

	var nowDate = document.getElementById("month-now").innerHTML;

	if (month==1) {document.getElementById("month-now").innerHTML = 'January';}
	else if (month==2) {document.getElementById("month-now").innerHTML = 'February';}
	else if (month==3) {document.getElementById("month-now").innerHTML = 'March';}
	else if (month==4) {document.getElementById("month-now").innerHTML = 'April';}
	else if (month==5) {document.getElementById("month-now").innerHTML = 'May';}
	else if (month==6) {document.getElementById("month-now").innerHTML = 'June';}
	else if (month==7) {document.getElementById("month-now").innerHTML = 'July';}
	else if (month==8) {document.getElementById("month-now").innerHTML = 'August';}
	else if (month==9) {document.getElementById("month-now").innerHTML = 'September';}
	else if (month==10) {document.getElementById("month-now").innerHTML = 'October';}
	else if (month==11) {document.getElementById("month-now").innerHTML = 'Novermber';}
	else if (month==12) {document.getElementById("month-now").innerHTML = 'December';}


	var nowDate = document.getElementById("month-now").innerHTML;
	if (nowDate == "January") {
		nowDate = "01";
	}
	else if (nowDate == "February") {
		nowDate = "02";
	}
	else if (nowDate == "March") {
		nowDate = "03";
	}
	else if (nowDate == "April") {
		nowDate = "04";
	}
	else if (nowDate == "May") {
		nowDate = "05";
	}
	else if (nowDate == "June") {
		nowDate = "06";
	}
	else if (nowDate == "July") {
		nowDate = "07";
	}
	else if (nowDate == "August") {
		nowDate = "08";
	}
	else if (nowDate == "September") {
		nowDate = "09";
	}
	else if (nowDate == "October") {
		nowDate = "10";
	}
	else if (nowDate == "November") {
		nowDate = "11";
	}
	else if (nowDate == "December") {
		nowDate = "12";
	}

	var calendarUpdate = new Date(2018, (nowDate-1), 1);
	var weekday = calendarUpdate.getDay()+1;

	var lastDate = new Date(2018, (nowDate-1)+1, 0);
	k = 1;
		for (i=1; i<6; i++) { //week set
			for (j=weekday; j<8; j++) { //weakday set
				if(k<=lastDate.getDate()) { document.getElementById("week"+i+"."+j).innerHTML = k;}
				k++;
			}//for (j=1; weekday<6; j++, weekday++)

			weekday = 1;
		}//for (i=1; i<6; i++)

	
}

function updateCalendar() {
	var nowDate = document.getElementById("month-now").innerHTML;

	if (nowDate == "January") {
		nowDate = "01";
	}
	else if (nowDate == "February") {
		nowDate = "02";
	}
	else if (nowDate == "March") {
		nowDate = "03";
	}
	else if (nowDate == "April") {
		nowDate = "04";
	}
	else if (nowDate == "May") {
		nowDate = "05";
	}
	else if (nowDate == "June") {
		nowDate = "06";
	}
	else if (nowDate == "July") {
		nowDate = "07";
	}
	else if (nowDate == "August") {
		nowDate = "08";
	}
	else if (nowDate == "September") {
		nowDate = "09";
	}
	else if (nowDate == "October") {
		nowDate = "10";
	}
	else if (nowDate == "November") {
		nowDate = "11";
	}
	else if (nowDate == "December") {
		nowDate = "12";
	}

	var calendarUpdate = new Date(2018, (nowDate-1), 1);
	var lastDate = new Date(2018, (nowDate-1)+1, 0);
	var weekday = calendarUpdate.getDay()+1;

		for (i=1; i<7; i++) { //week set
			for (j=1; j<8; j++) { //weakday set
				document.getElementById("week"+i+"."+j).innerHTML = "";
			}//for (j=1; weekday<6; j++, weekday++)
		}//for (i=1; i<6; i++)

	k = 1;
		for (i=1; i<7; i++) { //week set
			for (j=weekday; j<8; j++) { //weakday set
				if(k<=lastDate.getDate()) { 
				document.getElementById("week"+i+"."+j).innerHTML = k;
				k++;
				}
			}//for (j=1; weekday<6; j++, weekday++)

			weekday = 1;
		}//for (i=1; i<6; i++)
}

function sendDate(e) {
	a = document.getElementById("chore-date");
	var nowDate = document.getElementById("month-now").innerHTML;
	var catenatedString;

	if (nowDate == "January") {
		nowDate = "01";
	}
	else if (nowDate == "February") {
		nowDate = "02";
	}
	else if (nowDate == "March") {
		nowDate = "03";
	}
	else if (nowDate == "April") {
		nowDate = "04";
	}
	else if (nowDate == "May") {
		nowDate = "05";
	}
	else if (nowDate == "June") {
		nowDate = "06";
	}
	else if (nowDate == "July") {
		nowDate = "07";
	}
	else if (nowDate == "August") {
		nowDate = "08";
	}
	else if (nowDate == "September") {
		nowDate = "09";
	}
	else if (nowDate == "October") {
		nowDate = "10";
	}
	else if (nowDate == "November") {
		nowDate = "11";
	}
	else if (nowDate == "December") {
		nowDate = "12";
	}

	var p = e.innerHTML;
	if (p<10) {p = "0"+p;}
	a.value = "2018"+"-"+nowDate+"-"+p;
}

