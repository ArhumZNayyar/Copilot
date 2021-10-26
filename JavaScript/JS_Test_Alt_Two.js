function calculateDaysBetweenDates(begin, end) {
      var b = begin.split("-");
  var e = end.split("-");
  var db = new Date(b[0], b[1] - 1, b[2]);
  var de = new Date(e[0], e[1] - 1, e[2]);
  var ms = de - db;
  var d = ms / 1000 / 60 / 60 / 24;
  return d;
}