module.exports = {
  	queue: [],
  	push: function(item, t){
		t = t || 1;
    	for (let i = 0; i < t; i++) {
			this.queue.push(item);
      }
	},
	pop: function(){
     	if(this.empty()){
			return null;
      }
     }
