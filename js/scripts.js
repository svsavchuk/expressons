var sentence;
var first;
var last;
var rest;

$(function(){
  $("p").click(function(){
    sentence = prompt("enter a sentence:");
    first = sentence.charAt(0).toUpperCase();
    last = sentence.charAt(sentence.length-1).toUpperCase();
    rest = sentence.subString(0,sentence.length-1);
  });

  $("img").click(function(){
    alert(first+last);

    });
});
