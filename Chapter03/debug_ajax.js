function debugCallback(response){
    // Since 'response' is an object containing the response, you should convert it to JSON first
    response.json().then(data => {
        document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(data));
    });
}

function debugAjax(){
    // Fetch the GeoJSON data
    fetch("data/MegaCities.geojson")
        .then(response => {
            if (response.ok) {
                debugCallback(response);
            } else {
                console.log('Network response was not ok.');
            }
        })
        .catch(error => {
            console.log('There has been a problem with your fetch operation: ', error.message);
        });
}

// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function(){
    debugAjax();
});
