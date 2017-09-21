$(window).load(function(){
	$(".loader").fadeOut( "slow" );
})

$(document).ready(function(){
    function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

(function letItSnow(){
  var snowflakes = document.querySelectorAll('.snow');
  for (var i = 0; i < snowflakes.length; i++) {
    var snowflake = snowflakes[i];
    snowflake.setAttribute('cx', getRandom(1,100) + '%');
    snowflake.setAttribute('cy', '-' + getRandom(1,100));
    snowflake.setAttribute('r', getRandom(1,3));
  }
})();
})