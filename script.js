$(document).ready(function () {
  let presentTime = moment().hour();
  let currentDate = moment().format("MMM Do YYYY");

  let div = $("<div>");
  div.addClass("card-body");
  div.attr("id", "date-body");
  $("#date-card-title").append(div);
  $(div).append("<h7>" + currentDate + "<h7>");

  const divIds = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  const value = divIds.values();

  for (const hour of value) {
    let local = localStorage.getItem(hour);
    $("#" + hour)
      .children(".description")
      .text(local);
    if (hour == presentTime) {
      $("#" + hour).addClass(" present");
    } else if (hour < presentTime) {
      $("#" + hour).addClass(" past");
    } else {
      $("#" + hour).addClass(" future");
    }
  }

  $(".btn").on("click", function () {
    let description = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, description);
  });
});
