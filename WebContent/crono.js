var crono = {

	data : {
		names : []
	},

	start : function(name) {
		// this.data.names.push(name);
		this.data[name] = {
			start : new Date(),
			stop : null
		};
	},

	stop : function(name) {
		if (this.data[name]) {
			this.data[name].stop = new Date();
			var span = this.data[name].stop - this.data[name].start;
			return span;
		} else {
			return false;
		}
	},

	stopcallbak : function(name, funct) {
		var span = this.stop(name);
		if (span) {
			var msg = span / 1000 + "s";
			funct(msg);
		}
	},

	stoplog : function(name) {
		this.stopcallbak(name, function(message) {
			console.log(message);
		});

	}
};