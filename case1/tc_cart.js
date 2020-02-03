"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Joel Mendivil
   Date: 2/3/2020   
   
   Filename: tc_cart.js
	
*/

//Variables for the code and the default total
var orderTotal = 0;
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

//Adds the item, price, and quantity of items in the table
for(var i = 0; i<item.length; i++){
    //Adds a picture of the item along with a description and the price
    cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";

    //Finds the item cost
    var itemCost = itemPrice[i] * itemQty[i];

    cartHTML += "<td>$" + itemCost + "</td></tr>";

    //Finds the total cost
    orderTotal += itemCost;
}

//Adds the code to the html to state the total cost
cartHTML += "<tr><td colspan = '4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";

//Applies the code to the element with the id "cart"
document.getElementById("cart").innerHTML = cartHTML;