
var dataManager = require("./../data/friends.js");

function init(app, path) {
	app.get("/api/friends", function(req, res) {
	  	res.json(dataManager.data);
	});

	app.post("/api/new", function(req, res) {
		var friendData = req.body;

		dataManager.addData(friendData);

		res.json(friendData);
	});
};

module.exports = { init };
