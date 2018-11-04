/***********************************************************************************
 * 
 * Author: Tiia-Mai Truup
 * rev. 2018.10.19
 * 
 * *********************************************************************************/
"use strict";

var URL = "http://localhost/projekt_restapi/pub/weather.php/posts/";

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
    xmlhttp.open("POST", URL, false);
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
                var thisCity=localStorage.getItem("thisCity");
                for(var i=0; i < jsonData.length; i++){
                   document.getElementById("weatherlist").innerHTML += "<article class='" + jsonData[i].city + "'><img id='img' class='" + jsonData[i].info + "' src='' alt='weatherloga'/><p id='pcity'>"+jsonData[i].city + "</p><p id='ptemp'>" + jsonData[i].temp + "</p><p id='pinfo'>" + jsonData[i].info +"</p><p id='ptemp'>" + jsonData[i].postdate + "</p><button id='"+jsonData[i].ID+"'>TA BORT</button></article>";   
            } 

            //
            //filter city by thisCity
            var filter=document.getElementsByTagName("ARTICLE");
            for (var i=0; i<filter.length; i++){
            if(filter[i].className!=thisCity) {
            filter[i].style.display = 'none';
              }
            }

            //
            // Change img src depending on weather info
            var all=document.getElementsByClassName("sol");
            for (var i=0, max=all.length;i<max;i++){
                    all[i].src="images/sun.png";
            } 
            var all=document.getElementsByClassName("moln");
            for (var i=0, max=all.length;i<max;i++){
                    all[i].src="images/cloud.png";
            }
            var all=document.getElementsByClassName("regn");
            for (var i=0, max=all.length;i<max;i++){
                    all[i].src="images/rain.png";
            }  
            var all=document.getElementsByClassName("vind");
            for (var i=0, max=all.length;i<max;i++){
                    all[i].src="images/wind.png";
            } 
            var all=document.getElementsByClassName("snö");
            for (var i=0, max=all.length;i<max;i++){
                    all[i].src="images/snow.png";
            }
            var all=document.getElementsByClassName("åska");
            for (var i=0, max=all.length;i<max;i++){
                    all[i].src="images/thunder.png";
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


  
// script for google maps
var map;
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 59.334591, lng: 18.063240},
            zoom: 8
          });

          //declare city locations
          var locations = [
            ['Stockholm', 59.334591, 18.063240],
            ['Göteborg', 57.708870, 11.974560],
            ['Luleå', 65.584816, 22.156704],
            ['Trollhättan', 58.283489, 12.285821],
            ['Helsingborg', 56.04673, 12.69437],
            ['Sundsvall', 62.39129, 17.3063],
            ['Västerås', 59.61617, 16.55276]
          ];

          //create markers for cities
          var marker, i;
          
    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map,
          title: 'Klicka för väder info.'
        });
  
        //eventlistener for marker
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            
            localStorage.setItem("thisCity", locations[i][0]);    
            location.href='weather.html';
            
          }
        })(marker, i));
      } 

        }






