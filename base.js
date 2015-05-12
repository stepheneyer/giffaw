$(document).on("ready", function(){

//Set global variables

var searchRequest;
var newSearch;
var apiData;

//Setup event listener for search field

$("#search").on("change", function(event) {
  searchRequest = $(this).val();
  // event.preventDefault();
  appendSearch(searchRequest);
});

})//end of document ready


function removeSpaces(string) {
 return string.split(' ').join('');
}

//Add new search term to API call

function appendSearch (searchRequest) {
	newSearch = ("http://api.giphy.com/v1/gifs/search?q=" + searchRequest + "&limit=10&api_key=dc6zaTOxFJmzC");
	console.log(newSearch);
	$.get(newSearch, render);
}

//Render API results into body of HTML

function render(apiData){
  var newData = apiData.data;
  newData.forEach(function(item,i){
    var thumb = item.images.fixed_width.url;
    $("body").append("<img src='" + thumb + "'>"); // mind the single vs. double quotes!
  })  
}