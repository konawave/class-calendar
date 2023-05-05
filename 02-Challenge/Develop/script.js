// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$( document ).ready(function() {

    $("#currentDay").text(dayjs().format("ddd, MMM DD, YYYY h:mm a"))

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //  ! $('.saveBtn').on('click', function() {
  //     console.log(this.parentElement.id);
  //     const savedInput = $(this).siblings("textarea").val()
  //     const timeInput = $(this).parent().attr("value")
  //     // console.log(savedInput);
  //     // console.log(timeInput);
  //     localStorage.setItem('test', this.parentElement.id);

  // })
  $(".saveBtn").on("click", function () {
    const savedInput = $(this).siblings("textarea").val()
    const timeInput = this.parentElement.id  
    console.log(savedInput)
    console.log(timeInput)
    localStorage.setItem(timeInput, savedInput);
  });
  
  for (let i = 9; i < 18; i++) {
    localStorage.getItem(i);
  }
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  //! TODO: Add code to display the current date in the header of the page.
  });

// # 05 Third-Party APIs: Work Day Scheduler



// ## Your Task

// Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

// You'll need to use the [Day.js](https://day.js.org/en/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

// ## User Story

// !```md
// !AS AN employee with a busy schedule
// !I WANT to add important events to a daily planner
// !SO THAT I can manage my time effectively
// !```

// ## Acceptance Criteria

// ```md
// !GIVEN I am using a daily planner to create a schedule
// !WHEN I open the planner
// !THEN the current day is displayed at the top of the calendar

// !WHEN I scroll down
// !THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// !WHEN I click into a timeblock
// !THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
// ```

// The following animation demonstrates the application functionality:

// <!-- @TODO: create ticket to review/update image) -->
// [A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)
