// beware! don't try to repeat it at home :)
function stackoverflowPlease(query) {
  window.location.href = 'http://stackoverflow.com/search?q=[js]' + query;
}

try {
  foo.bar;
} catch(err) {
  stackoverflowPlease(err.message);
}
