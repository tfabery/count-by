//====Backend======
var num =[];
function inputGood (numEnd, numCount) {
  if (numCount <= 0 || numEnd <= 0) {
    alert('That\'s not a positive number');
  }
  else if (numEnd < numCount) {
    alert('Count by number is larger than the count to number');
  }
  else {
    countBy (numEnd, numCount)
  }
};

function countBy (numEnd, numCount) {
  for (var i = numCount; i <= numEnd; i += numCount) {
      alert(i);
      $('ul').append('<li>' + i + '</li>');
    }
};
//====Frontend=====
$(function() {
  $('form#painInTheAss').submit(function(event) {
    event.preventDefault();
    
  });
});


//inputGood (); //should alert 'That's not a number'
//inputGood ('hello', 9) //should alert 'That's not a number'
inputGood (23, -2); //should alert 'That's not a positive number'
//inputGood (23, 70); //should alert 'Count by number is larger than the count to number'
//inputGood (30, 5);
