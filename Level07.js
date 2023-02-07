function init(robot) {
	// your code goes here
	robot.oldCoins = 0;
	robot.oldEnergy = 100;
}

function loop(robot) {
	// your code goes here
	robot.action = {type: "move", amount: "40"};
	if (robot.info().coins > robot.oldCoins ||
	    robot.info().energy > robot.oldEnergy) {
			robot.action = {type: "jump", amount:"10"};
	}
	robot.oldCoins = robot.info().coins;
	robot.oldEnergy = robot.info().energy;
}
