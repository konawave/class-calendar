$(document).ready(function() {
  // This displays the current date/time
  $("#currentDay").text(dayjs().format("ddd, MMM DD, YYYY h:mm a"))
  var hourId = dayjs().hour()

  // This saves the textArea inputs to local storage, with the id as the key and input as the value
  $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    const savedInput = $(this).siblings("textarea").val()
    const timeInput = $(this).parent().attr('id');
    localStorage.setItem(timeInput, savedInput);
  });
  
  // This changes the id between past, present, and future depending on what time it is. 
  $('.time-block').each(function(event) {
      event.preventDefault;
      if (Number(this.id) === hourId) {
        $(this).toggleClass('present');
      }
      else if (Number(this.id) < hourId) {
        $(this).toggleClass('past');
      } 
      else {
        $(this).toggleClass('future');

      }
  });
  // This for-loop keeps text in their respective textArea upon page reloads. 
  for (let i = 9; i < 18; i++) {
    console.log($('#' + i).children('textArea'))
    $('#' + i).children('textArea').text(localStorage.getItem(i));
  }})