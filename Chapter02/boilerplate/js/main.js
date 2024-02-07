//initialize function called when the script loads

function initialize(){

    cities();
    
    };
    
    
    
    //function to create a table with cities and their populations
    
    function cities(){
    
    //define two arrays for cities and population
    
    var cityPop = [
    
     {
    
    city: 'Madison',
    
    population: 233209
    
     },
    
     {
    
    city: 'Milwaukee',
    
    population: 594833
    
     },
    
     {
    
    city: 'Green Bay',
    
    population: 104057
    
     },
    
     {
    
    city: 'Superior',
    
    population: 27244
    
     }]
    
    
    
    //create the table element
    
    var table = document.createElement("table");
    
    
    
    //create a header row
    
    var headerRow = document.createElement("tr");
    
    
    
    //add the "City" and "Population" columns to the header row
    
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
    
    
    
    //add the row to the table
    
    table.appendChild(headerRow);
    
    
    
    //loop to add a new row for each city
    
    for(var i = 0; i < cityPop.length; i++){
    
    //assign longer html strings to a variable
    
    var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
    
    //add the row's html string to the table
    
    table.insertAdjacentHTML('beforeend',rowHtml);
    
     }
    
    // Append the table to "myDiv"
    
    document.querySelector("#myDiv").appendChild(table);
    
    //click listener with anonymous handler function
    
    document.querySelector("table").addEventListener("click", function(){
    
    alert('Madison Rocks! Go Badgers!');
    
     });
    
    
    
    //named handler function for removable listener
    
    function initialize(){
    
    cities();
    
     };
    
    // Add event listener for DOMContentLoaded
    
    document.addEventListener('DOMContentLoaded', initialize);
    
    //change the text color
    
    document.querySelector('#myDiv').style.color = 'blue';
    
    //change the text size and alignment
    
    document.querySelector('#myDiv').style.fontSize = '2em';
    
    document.querySelector('#myDiv').style.textAlign = 'left';
    
    //get the text color and add it as text to the div
    
    var thecolor = document.querySelector('#myDiv').style.color;
    
    document.querySelector('#myDiv').insertAdjacentHTML('beforeend',thecolor);
    
    document.querySelector("#myDiv").appendChild(table);
    
    }
    
    document.addEventListener('DOMContentLoaded',initialize)