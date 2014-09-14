app.filter('movietime', function () {
  return function (time) {
    var re = /^([0-9]{1,3})\smin$/;
    var minutes = re.exec(time);
    if (!minutes) return time; // time could be N/A
    var minutes = minutes[1];
    var hours = 0;
    if (parseInt(minutes, 10) < 60) {
      return minutes + " minutes";
    }
    var m = minutes / 60;
    if (minutes % 60 === 0) m += 1;
    for (var i = 0; i < m-1; i++) {
      hours += 1;
      minutes -= 60;
    }
    var rs = hours + " hour";
    rs += (hours > 1) ? "s" : "";
    if (minutes > 0) {
      rs += " and " + minutes + " minutes";
    }
    return rs;
  };
});
