$(document).ready(function () {
    // listen for the clicks on the save button
    $('.saveBtn').on('click', function () {
      
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');

      localStorage.setItem(time, value);

      $('.notification').addClass('show');

      // remove 'show' class after 5 seconds
      setTimeout(function () {
        $('.notification').removeClass('show');
      }, 5000);
    });

function hourUpdater() {
        // get current number of hours
        var currentHour = moment().hours();
    
        // loop over time blocks
        $('.time-block').each(function () {
          var blockHour = parseInt($(this).attr('id').split('-')[1]);
    
          // check if we've moved past this time
          if (blockHour < currentHour) {
            $(this).addClass('past');
          } else if (blockHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
          } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          }
        });
      }
    
      hourUpdater();

// check if current time needs to be updated
var interval = setInterval(hourUpdater, 15000);

// load saved data from localStorage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

// display current day 
$('#currentDay').text(moment().format('dddd, MMMM Do'));
});
    