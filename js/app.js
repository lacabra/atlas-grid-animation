/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */

particlesJS.load('particles-js', 'particles.json?nocache=' + (new Date()).getTime(), function() {
  console.log('particles.js loaded - callback');
  particlesJS.animateBS();
});
