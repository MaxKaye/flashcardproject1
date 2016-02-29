//mms: I like what I am seeing here.  Start small.  Replace a small portion of your page with reusable functionality, then just add to your dataset.
var myCharacters = [
 {english: "hello", chinese: "你好", pronounce: "ni3hao3"}
];
myCharacters.forEach(function(character){
 var myText = document.createElement("INPUT");
 myText.value = character.chinese;
 var translate = document.createElement("BUTTON");
 // mms: You are getting close here.  Remember, your newly created elements must associated with/appended to an existing DOM element, in order for them to appear on the page.
 button.addEventListener("click", function(){
   alert(character.english);
 });
});
