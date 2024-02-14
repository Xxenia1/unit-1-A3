/* Mainsheet by Xun Gong, 2024 */
// Initialize function called when the script loads
function initialize(){
	cities();	
	addEvents();	
	};	
	// Function to create a table with cities and their populations
	function cities(){
	var cityPop = [
	 { city: 'Madison', population: 233209 },
	 { city: 'Milwaukee', population: 594833 },
	 { city: 'Green Bay', population: 104057 },
	 { city: 'Superior', population: 27244 }
	 ];
	// Create the table element and header row
	var table = document.createElement("table");
	var headerRow = document.createElement("tr");
	headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>");
	table.appendChild(headerRow);
	// Loop to add a new row for each city
	for(var i = 0; i < cityPop.length; i++){
	var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
	table.insertAdjacentHTML('beforeend', rowHtml);
	 }
	// Append the table to "mydiv"
	document.querySelector("#myDiv").appendChild(table);
	// Add a new column for city size
	addColumns(cityPop);
	// Style changes for "mydiv"
	var myDiv = document.querySelector('#myDiv');
	myDiv.style.color = 'blue';
	myDiv.style.fontSize = '2em';
	myDiv.style.textAlign = 'left';
	}
	// Function to add a new 'City Size' column
	function addColumns(cityPop){
	document.querySelectorAll("tr").forEach(function(row, i){
	if (i === 0){
	row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
	 } else {
	var citySize = (cityPop[i - 1].population < 100000) ? 'Small' :
	 (cityPop[i - 1].population < 500000) ? 'Medium' : 'Large';
	row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
	 }
	 });
	}
	// Function to add events to the table
	function addEvents() {
	var table = document.querySelector("table");
	// Change the background color on mouseover
	table.addEventListener("mouseover", function() {
	var color = "rgb(";
	for (var i = 0; i < 3; i++) {
	var random = Math.round(Math.random() * 255);
	color += random + (i < 2 ? "," : ")");
	 }
	table.style.backgroundColor = color;
	 });
	// Alert on click
	table.addEventListener("click", function() {
	alert('Hey, you clicked me!');
	 });
	}
    document.addEventListener('DOMContentLoaded', initialize);

function jsAjax() {
    // Step 1: Create the data request 
    // Define the Request
    var request = new Request('MegaCities.geojson');

    // Step 2: define Fetch parameters 
    var init = {
        method: 'GET'
    };

    // Step 3: use Fetch to retrieve the data
    fetch(request, init)
    .then(conversion) // Step 4 convert data to usable form
    .then(callback) // Step 5 Send retrieved data to a callback function
}
// Define conversion callback function
function conversion(response) {
    console.log(response) //tasks using the data go here
    // Convert data to usable form
    return response.json();
}

// Define callback function
function callback(data) {
    // Insert data into the HTML
    document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:</br>' + JSON.stringify(data));
    // Tasks using the data go here
    console.log(data);
} 
// Assign jsAjax to window.onload to be called when the window loads
window.onload = jsAjax;