function MovieTimeFilter () {
    return function (time) {
      var re = /^([0-9]{1,3})\smin$/;
      var minutes = re.exec(time);
      if (!minutes) {
        time = 'N/A';
        return time; // time could be N/A
      }
      var minute = minutes[1];
      var hours = 0;
      if (parseInt(minute, 10) < 60) {
        return minute + ' minutes';
      }
      var m = minute / 60;
      if (minute % 60 === 0) { m += 1; }
      for (var i = 0; i < m-1; i++) {
        hours += 1;
        minute -= 60;
      }
      var rs = hours + ' hour';
      rs += (hours > 1) ? 's' : '';
      if (minute > 0) {
        rs += ' ' + minute + ' minutes';
      }
      return rs;
    };
}

angular.module('ngMovies')
  .filter('MovieTime', MovieTimeFilter);
