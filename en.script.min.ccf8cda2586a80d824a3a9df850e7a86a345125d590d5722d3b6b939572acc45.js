$(function(){var baseURL="https://webninjasi.github.io/tfmrecords/";var maps={"1234":1,};$('.date-convert').each(function(){$(this).text(moment.unix($(this).text()).format("LL"));});$("#book-search-input").keypress(function(e){if(e.keyCode!=13){return true;}
var mapid=parseInt($(this).val().trim().replace('@',''));if(isNaN(mapid)){$("#book-search-results").text("Map ID is invalid!");return false;}
if(!(mapid in maps)){$("#book-search-results").text("Map not found!");return false;}
$("#book-search-results").text("Redirecting to the page...");document.location=baseURL+"maps/"+mapid;});});