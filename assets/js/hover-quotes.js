var topQuotes = document.getElementById('top-quotes');
var bottomQuotes = document.getElementById('bottom-quotes');
var blog = document.getElementById('blog');
var software = document.getElementById('software');
var design = document.getElementById('design');
var about = document.getElementById('about');
var contact = document.getElementById('contact');

blog.addEventListener('mouseover', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 -100px';
  bottomQuotes.style.backgroundPosition = '0 -100px';
});

blog.addEventListener('mouseout', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 0';
  bottomQuotes.style.backgroundPosition = '0 -200px';
});

software.addEventListener('mouseover', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 -50px';
  bottomQuotes.style.backgroundPosition = '0 -150px';
});

software.addEventListener('mouseout', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 0';
  bottomQuotes.style.backgroundPosition = '0 -200px';
});

design.addEventListener('mouseover', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 -50px';
  bottomQuotes.style.backgroundPosition = '0 -150px';
});

design.addEventListener('mouseout', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 0';
  bottomQuotes.style.backgroundPosition = '0 -200px';
});

about.addEventListener('mouseover', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 -150px';
  bottomQuotes.style.backgroundPosition = '0 -50px';
});

about.addEventListener('mouseout', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 0';
  bottomQuotes.style.backgroundPosition = '0 -200px';
});

contact.addEventListener('mouseover', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-start-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 -200px';
  bottomQuotes.style.backgroundPosition = '0 0';
});

contact.addEventListener('mouseout', function() {
  topQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  bottomQuotes.style.animation = 'float 2s infinite, quote-finish-transition 0.8s ease';
  topQuotes.style.backgroundPosition = '0 0';
  bottomQuotes.style.backgroundPosition = '0 -200px';
});
