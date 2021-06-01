$(document).ready(function () {
    // listen for the clicks on the save button
    $('.saveBtn').on('click', function () {
      
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');

      localStorage.setItem(time, value);
