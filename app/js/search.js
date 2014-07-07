
// load all countries from the localstorage
var countries = JSON.parse(localStorage.getItem('country_data'));

// get all the country names as an array
var country_names = countries.map(function(elem){
    return elem.name.toLowerCase();
});

console.log(country_names);

// wait for the page to load
document.addEventListener('DOMContentLoaded', function(){


    // get the reference to the div element where the results will be displayed
    var results_div = document.getElementById('results');

    // wait for a key down event on the search div
    document.getElementById('search').addEventListener('keydown', function(event){

        // if the user pressed the enter button
        if (event.keyCode === 13) {

            // get the country name that the user entered and convert it to lower case
            var country_name = event.target.value.toLowerCase();

            // get the index of the country name that the user entered within
            // the array of country names
            var index = country_names.indexOf(country_name);

            // check if the country name exists within the array
            if (index !== -1) {
                // set the search box to empty
                event.target.value = '';
                // print out the country data
                console.log(countries[index]);
                // print the country data to the results div
                results_div.innerHTML = JSON.stringify(countries[index]);
            } else {
                // if the country is not found, let the user know
                results_div.innerHTML = 'Data does not exist for the search string: ' + event.target.value;
            }
        }
    });
});
