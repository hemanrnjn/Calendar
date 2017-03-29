    var d = new Date();
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = d.getMonth();   //0-11
    var year = d.getFullYear(); //2014

window.onload = function(){
    var first_date = month_name[month] + " " + 1 + " " + year;
    //September 1 2014
    var tmp = new Date(first_date).toDateString();
    //Mon Sep 01 2014 ...
    var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(year, month+1, 0).getDate();    //30
    //Tue Sep 30 2014 ...
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);
}

function get_calendar(day_no, days){
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    
    //row for the day letters
    for(var c=0; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[c];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //create 2nd row
    tr = document.createElement('tr');
    var c;
    for(c=0; c<=6; c++){
        if(c == day_no){
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    
    var count = 1;
    for(; c<=6; c++){
        var currid = count + '-' + month_name[month] + '-' + year;
        var td = document.createElement('td');
        td.innerHTML = '<a href="#" onclick="eventadd(this.id)" id="' + currid + '">' + count + '</a>';
        if(localStorage.getItem(currid) !== null){
            td.innerHTML += '<div><button onclick="eventshow(this.id)" class="showevent-'+currid+'" id="' + currid + '">Show</button><button onclick="eventdelete(this.id)" class="deleteevent-'+currid+'" id="' + currid + '">x</button></div><div><button onclick="eventedit(this.id)" class="editevent-'+currid+'" id="' + currid + '">Edit</button></div>';
        }
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //rest of the date rows
    for(var r=3; r<=7; r++){
        tr = document.createElement('tr');
        for(var c=0; c<=6; c++){
            if(count > days){
                table.appendChild(tr);
                return table;
            }
            var currid = count + '-' + month_name[month] + '-' + year;
            var td = document.createElement('td');
            td.innerHTML = '<a href="#" onclick="eventadd(this.id)" id="' + currid + '">' + count + '</a>';
            if(localStorage.getItem(currid) !== null){
            td.innerHTML += '<div><button onclick="eventshow(this.id)" class="showevent-'+currid+'" id="' + currid + '">Show</button><button onclick="eventdelete(this.id)" class="deleteevent-'+currid+'" id="' + currid + '">x</button></div><div><button onclick="eventedit(this.id)" class="editevent-'+currid+'" id="' + currid + '">Edit</button></div>';
            }
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
	return table;
}

function nextClicked(){
    var myNode = document.getElementById("calendar-dates");
    myNode.innerHTML = '';
    month++;
    if(month>11){
        month = 0;
        year++;
    }
    var first_date = month_name[month] + " " + 1 + " " + year;
    //September 1 2014
    var tmp = new Date(first_date).toDateString();
    //Mon Sep 01 2014 ...
    var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(year, month+1, 0).getDate();    //30
    //Tue Sep 30 2014 ...
    var calendar = get_calendarnext(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);

function get_calendarnext(day_no, days){
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    
    //row for the day letters
    for(var c=0; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[c];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //create 2nd row
    tr = document.createElement('tr');
    var c;
    for(c=0; c<=6; c++){
        if(c == day_no){
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    
    var count = 1;
    for(; c<=6; c++){
        var currid = count + '-' + month_name[month] + '-' + year;
        var td = document.createElement('td');
        td.innerHTML = '<a href="#" onclick="eventadd(this.id)" id="' + currid + '">' + count + '</a>';
        if(localStorage.getItem(currid) !== null){
            td.innerHTML += '<div><button onclick="eventshow(this.id)" class="showevent-'+currid+'" id="' + currid + '">Show</button><button onclick="eventdelete(this.id)" class="deleteevent-'+currid+'" id="' + currid + '">x</button></div><div><button onclick="eventedit(this.id)" class="editevent-'+currid+'" id="' + currid + '">Edit</button></div>';
        }
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //rest of the date rows
    for(var r=3; r<=7; r++){
        tr = document.createElement('tr');
        for(var c=0; c<=6; c++){
            if(count > days){
                table.appendChild(tr);
                return table;
            }
            var currid = count + '-' + month_name[month] + '-' + year;
            var td = document.createElement('td');
            td.innerHTML = '<a href="#" onclick="eventadd(this.id)" id="' + currid + '">' + count + '</a>';
            if(localStorage.getItem(currid) !== null){
            td.innerHTML += '<div><button onclick="eventshow(this.id)" class="showevent-'+currid+'" id="' + currid + '">Show</button><button onclick="eventdelete(this.id)" class="deleteevent-'+currid+'" id="' + currid + '">x</button></div><div><button onclick="eventedit(this.id)" class="editevent-'+currid+'" id="' + currid + '">Edit</button></div>';
            }
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
    }
}


function previousClicked(){
    var myNode = document.getElementById("calendar-dates");
    myNode.innerHTML = '';
    month--;
    if(month<0){
        month=11;
        year--;
    }
    var first_date = month_name[month] + " " + 1 + " " + year;
    //September 1 2014
    var tmp = new Date(first_date).toDateString();
    //Mon Sep 01 2014 ...
    var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(year, month+1, 0).getDate();    //30
    //Tue Sep 30 2014 ...
    var calendar = get_calendarprevious(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);

function get_calendarprevious(day_no, days){
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    
    //row for the day letters
    for(var c=0; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[c];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //create 2nd row
    tr = document.createElement('tr');
    var c;
    for(c=0; c<=6; c++){
        if(c == day_no){
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    
    var count = 1;
    for(; c<=6; c++){
        var currid = count + '-' + month_name[month] + '-' + year;
        var td = document.createElement('td');
        td.innerHTML = '<a href="#" onclick="eventadd(this.id)" id="' + currid + '">' + count + '</a>';
        if(localStorage.getItem(currid) !== null){
            td.innerHTML += '<div><button onclick="eventshow(this.id)" class="showevent-'+currid+'" id="' + currid + '">Show</button><button onclick="eventdelete(this.id)" class="deleteevent-'+currid+'" id="' + currid + '">x</button></div><div><button onclick="eventedit(this.id)" class="editevent-'+currid+'" id="' + currid + '">Edit</button></div>';
        }
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    //rest of the date rows
    for(var r=3; r<=7; r++){
        tr = document.createElement('tr');
        for(var c=0; c<=6; c++){
            if(count > days){
                table.appendChild(tr);
                return table;
            }
            var currid = count + '-' + month_name[month] + '-' + year;
            var td = document.createElement('td');
            td.innerHTML = '<a href="#" onclick="eventadd(this.id)" id="' + currid + '">' + count + '</a>';
            if(localStorage.getItem(currid) !== null){
            td.innerHTML += '<div><button onclick="eventshow(this.id)" class="showevent-'+currid+'" id="' + currid + '">Show</button><button onclick="eventdelete(this.id)" class="deleteevent-'+currid+'" id="' + currid + '">x</button></div><div><button onclick="eventedit(this.id)" class="editevent-'+currid+'" id="' + currid + '">Edit</button></div>';
            }
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}
}


function eventadd(clickedid){
    if (localStorage.getItem(clickedid) == undefined || localStorage.getItem(clickedid).equals(null)) {
        document.getElementById("addButton").innerHTML = '<div><button onclick="eventcreate(this.id)" class="btn btn-default addevent-' + clickedid + '" id="' + clickedid + '">Create</button></div><br>';
        $('#myModal3').modal('show');
    }
}

function eventcreate(clickedid) {
    if (localStorage.getItem(clickedid) == undefined || localStorage.getItem(clickedid).equals(null)) {
        var a = document.getElementById("createEvent").value;
        localStorage.setItem(clickedid, a);
        document.getElementById(clickedid).insertAdjacentHTML('afterend', '<div><button onclick="eventshow(this.id)" class="showevent-' + clickedid + '" id="' + clickedid + '">Show</button><button onclick="eventdelete(this.id)" class="deleteevent-' + clickedid + '" id="' + clickedid + '">x</button></div><div><button onclick="eventedit(this.id)" class="editevent-' + clickedid + '" id="' + clickedid + '">Edit</button></div>');
        $('#myModal3').modal('hide');
        document.getElementById("createEvent").value = "";
        alert("Created!");
        }
}

function eventdelete(clickedid){
    if(localStorage.getItem(clickedid) == undefined || localStorage.getItem(clickedid) == null){
       alert("Add an Event First!!!"); 
    }
    else{
    localStorage.removeItem(clickedid);
    $(".showevent-"+clickedid).remove();
    $(".deleteevent-"+clickedid).remove();
    $(".editevent-"+clickedid).remove();
    document.getElementById("editEvent").value = "";
    alert("Event Deleted");
}
}

function eventshow(clickedid){
    document.getElementById("modalText").innerHTML = localStorage.getItem(clickedid);
    $('#myModal').modal('show');
}

function eventedit(clickedid){
    document.getElementById("editEvent").value = localStorage.getItem(clickedid);
    document.getElementById("saveButton").innerHTML = '<div><button onclick="eventsave(this.id)" class="btn btn-default editevent-'+clickedid+'" id="'+clickedid+'">Save</button></div><br>';
    $('#myModal2').modal('show');
}

function eventsave(clickedid){
    var a = document.getElementById("editEvent").value;
    localStorage.setItem(clickedid, a);
    document.getElementById("modalText").innerHTML = a;
    $('#myModal2').modal('hide');
    alert("Saved!");
}