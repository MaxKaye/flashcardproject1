
var myCharacters = [
 {english: "hello", chinese: "你好", pronounce: "ni3hao3"}
];
myCharacters.forEach(function(character){
 var myText = document.createElement("INPUT");
 myText.value = character.chinese;
 var translate = document.createElement("BUTTON");
 button.addEventListener("click", function(){
   alert(character.english);
 });
});
