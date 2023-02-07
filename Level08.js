function init(robot) {
	// your code goes here
	robot.iterationsAfterCoin = 0;
}

function loop(robot) {
	// your code goes here
	if (robot.iterationsAfterCoin > 4) {
		robot.action = {type: "jump", amount: 10};
	}
	if (robot.info().coins > 0) {
		robot.iterationsAfterCoin++;
	}
}

