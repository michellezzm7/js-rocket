var timer = null;
var countdownNumber =10;

var changeState = function (state) {
	document.body.className ='body-state'+state;
	clearInterval(timer);
	countdownNumber =10;
	document.getElementById('countdown').innerHTML=countdownNumber;

	//count down
	if (state == 2) {
		//The setInterval() method calls a function at specified intervals (in milliseconds). The setInterval() method continues calling the function until clearInterval() is called, or the window is closed. 1 second = 1000 milliseconds.
		timer = setInterval(function() {
			countdownNumber = countdownNumber-1;
			document.getElementById('countdown').innerHTML=countdownNumber;
			if (countdownNumber <= 0) {
				changeState(3);}
		},500);
		
	} else if (state == 3){
		// The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.The commonly used syntax of JavaScript setTimeout is: setTimeout(function, milliseconds)
		var success = setTimeout(function () {
			var randomNumber=Math.round(Math.random()*10);

			//The console.log() is a function in JavaScript that is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.
			console.log('randomNumber:', randomNumber)

			//success
			if(randomNumber>5){
				changeState(4);
			} else{
				changeState(5); //oh no!
			}

		}, 2000)
	};
}