// Generated by CoffeeScript 1.6.2
(function() {
  $.get('example.php', function(data) {
    if (data.errors != null) {
      return alert("There was an error!");
    } else {
      return $('#content').text(data.message);
    }
  }, 'json');

}).call(this);
