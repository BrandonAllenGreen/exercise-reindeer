
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");
let str = "";

for(i = 0; i <reindeer.length; i++) {
  str += "<p>" + colors[i] + " " + reindeer[i] + "</p>";
  console.log(str);
  hohohoElement.innerHTML = str;
} 