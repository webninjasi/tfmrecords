$(function(){var baseURL="https://webninjasi.github.io/tfmrecords/";var maps={"1":1,"1234":1,"123456":1,};$('.date-convert').each(function(){$(this).text(moment.unix($(this).text()).format("LL"));});$("#book-search-input").keypress(function(e){if(e.keyCode!=13){return true;}
var mapid=parseInt($(this).val().trim().replace('@',''));if(isNaN(mapid)){$("#book-search-results").text("Map ID is invalid!");return false;}
if(!(mapid in maps)){$("#book-search-results").text("Map not found!");return false;}
$("#book-search-results").text("Redirecting to the page...");document.location=baseURL+"maps/"+mapid;});if(window.localStorage.getItem('useProxy'))
{$('img').each(function(){if(this.src.indexOf('imgur')==-1)
{return;}
this.originalSrc=this.src;this.src='https://images-docs-opensocial.googleusercontent.com/gadgets/proxy?url='+encodeURIComponent(this.originalSrc)+'&container=docs&gadget=a&rewriteMime=image%2F*&refresh=86400';});}
$('img').on("error",function(){this.originalSrc=this.src;this.src='https://images-docs-opensocial.googleusercontent.com/gadgets/proxy?url='+encodeURIComponent(this.originalSrc)+'&container=docs&gadget=a&rewriteMime=image%2F*&refresh=86400';window.localStorage.setItem('useProxy',true);});});