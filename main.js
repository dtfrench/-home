
$(document).ready(function(){
  
  $("#new-quote").click(function(){
    
    let randomNum = Math.floor(Math.random() * quotes.length);

    /*When the "new" button is clicked, the quote text fade outs, 
    changes to the new quote, and then fades back in.*/
    $("#text").fadeOut(1000, function(){ 

      $("#text").text('"' + quotes[randomNum].quote + '"').fadeIn(1000);
      });
    
    /*When the "new" button is clicked, the author text fade outs, 
    changes to the new author, and then fades back in.*/
    $("#author").fadeOut(1000, function(){ 

      $("#author").text("-" + quotes[randomNum].author + "-").fadeIn(1000);
      });
    
    /*When the "new" button is clicked, it fades out and then fades
    back in.*/
    $("#new-quote").fadeOut(1000).fadeIn(1000);

  });
  
});

var quotes = [{ quote: 'The curisosity is useful, the fear useless.', author: 'Isaac Asimov' }, { quote: 'No rest for the wicked, no peace for the good.', author: 'James S.A. Corey' }, { quote: 'It was necessary, and the necessary was always possible.', author: 'C.S. Lewis' }, { quote: 'Our opponent is an alien starship packed with atomic bombs, I said. We have a protractor.', author: 'Neal Stephenson' }, { quote: 'He who controls the spice controls the universe.', author: 'Frank Herbert' }, { quote: 'Beware ground on loose rock. Beware hale strangers. Beware sudden silence.', author: 'N.K. Jemisin' }, { quote: 'The gods do not protect fools. Fools are protected by more capable fools', author: 'Larry Niven' }, { quote: 'They have never believed us human, but we will prove by our actions today that we are more than tools.', author: 'N.K. Jemisin' }, { quote: 'We go to seek a better world. May you find one, as well.', author: 'Stephen King' }, {quote: 'We\'ve been betrayed! We\'re outnumbered! Our backs are to the sea! We\'ve got em right where we want em! Shall we charge?', author:'Stephen King'},{quote: 'You are a man of many words but few specifics. You\'d do well in Parliament', author:'Neal Stephenson'},];

//Draw random quote from quotes array so a quote will appear when page loads
var randomNum = Math.floor(Math.random() * quotes.length);

//Display a quote when the page loads
var text = document.getElementById("text");
text.textContent = quotes[randomNum].quote;

//Display the author of the quote when the page loads
var author = document.getElementById("author");
author.textContent = "-" + quotes[randomNum].author + "-";

/*
Learned .click function from w3schools: https://www.w3schools.com/jquery/ ($("#new-quote").click(function(){)

Learned putting function inside fadeout function: 
https://stackoverflow.com/questions/47540708/jquery-fade-in-fade-out-text-then-fade-in-new-text
*/


 




