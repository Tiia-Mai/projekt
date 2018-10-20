/***********************************************************************************
 * 
 * Author: Tiia-Mai Truup
 * rev. 2018.10.19
 * 
 * *********************************************************************************/
"use strict";

var URL = "http://localhost/projekt_restapi/weather.php/posts/";

//
// DOM onload
document.addEventListener("DOMContentLoaded", function(){ // Wait for DOM tree to get parsed
  //
  // Click on delete weather button - DELETE
    document.getElementById("weatherlist").addEventListener("click", function(ev){ 
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("DELETE", URL+"/"+ev.target.id, true);
        xmlhttp.send();

        xmlhttp.onload = function() {
            location.reload();
        }
    })

 //
  // Click on add weather button - POST
  document.getElementById("add").addEventListener("click", function(ev){
    let city = document.getElementById("city").value;
    let temp = document.getElementById("temp").value;
    let info = document.getElementById("info").value;
    if( !(city != '' && temp != '' && info != '') ) location.reload();
    let json =  {"city": city, "temp": temp, "info": info};
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", URL, true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send( JSON.stringify(json) );

    xmlhttp.onload = function() {
        location.reload();
    }
})


  //
  // Show all posts in table - GET
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {

                var jsonData = JSON.parse( xmlhttp.responseText );
                for(var i=0; i < jsonData.length; i++){

                   document.getElementById("weatherlist").innerHTML += "<div><p>"+jsonData[i].city +"</p><p>" + jsonData[i].temp + "</p><p>" + jsonData[i].info + "</p><p><button id='"+jsonData[i].ID+"'>Delete #"+jsonData[i].ID+"</button></p></div>";    
                }
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", URL, true);
    xmlhttp.send();

}); 
