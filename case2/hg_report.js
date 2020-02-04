"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Joel Mendivil
   Date: 2/3/2020  
   
   Filename: hg_report.js
	
*/

//variable to display the code to display in the article element
var gameReport = "<h1>" + itemTitle + "</h1><h2>By: " + itemManufacturer + "</h2><img src ='hg_" + itemID + ".png' alt='" + 
   itemID +"' " + itemID + "='gameImg' /><table><tr><th>Product ID</th><td>" + itemID + "</td></tr><tr><th>List Price</th><td>" + itemPrice + 
   "</td></tr><tr><th>Platform</th><td>" + itemPlatform + "</td></tr><tr><th>ESRB Rating</th><td>" + itemESRB + 
   "</td></tr><tr><th>Condition</th><td>" + itemCondition + "</td></tr><tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + 
   itemSummary;
document.getElementsByTagName("article")[0].innerHTML = gameReport;

//variables to set the default value of the rating system
var ratingsSum = 0;
var ratingsCount = ratings.length;
//sets the current value of the rating 
for(var i = 0; i<ratings.length; i++){
   ratingsSum += ratings[i];
}
//finds the average of all the ratings from the reviews
var ratingAvg = ratingsSum/ratingsCount;
var ratingReport = "<h1>Customer Reviews</h1><h2>" + ratingAvg + " out of 5 stars (count reviews)</h2>";

//adds more stars based on the review and displays it in the aside
for(var i = 0; i<3; i++){
   ratingReport += "<div class='review'><h1>" + ratingTitles[i] + "</h1><table><tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr><tr><th>Review Date</th><td>" + 
      ratingDates[i] + "</td></tr><tr><th>Rating</th><td>";
   for(var j = 1; j<=ratings[i]; j++){
      ratingReport += "<img src='hg_star.png' />"
   }
   ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;