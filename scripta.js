var kaeb = ["first", "second", "third"];
var kaeba = {"first": 1, "second": 2, "third": 3};
window["console"]["log"] = function(e){}
kaeb.forEach(function(e){document.getElementById(e).onclick = function(){kaebe();kaeba[e]=0};});