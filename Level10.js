module.exports = {
  	closestNext:
    	function(x, y, items){
			let minDistance = null;
      		let closest = null;
    		for (let i = 0; i < items.length; i++) {
              	if (items[i].x <= x) continue;
            	let distance = Math.abs(x - items[i].x) + Math.abs(y - items[i].y);
              	if (minDistance == null ||
                    distance < minDistance) {
