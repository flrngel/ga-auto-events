import unique from 'unique-selector';
var $ = require('jquery');

$('[href]').click(function(event) {
  var url = [location.protocol, '//', location.host, location.pathname].join('');

  gtag('event', 'click', {
    'event_category': url,
    'event_label': unique(event.target) + " // " + $(event.target).text().trim(),
    'value': 1
  });
});
