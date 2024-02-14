function jsAjax(){
    //define a variable to hold the data
    var myData;

    //basic fetch
    fetch('MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        .then(function(response){
            myData = response;

            //check the data
            console.log(myData)
        }) 

    //check the data
    console.log(myData)
};
