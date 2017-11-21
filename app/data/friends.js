
var data = [
	{
		"name": "Harry Plopper",
		"photo": "https://vignette.wikia.nocookie.net/simpsons/images/d/df/Bj7MhbhCAAAzAnY.jpg/revision/latest/scale-to-width-down/220?cb=20170101202323",
		"scores": [
			5,
			1,
			4,
			4,
			5,
			1,
			2,
			5,
			4,
			1
		]
	},
	{
		"name": "Spider Pig",
		"photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6prQF-hNpTKufZyLYUddt2fQc3vqPfI2vumcLVvEnPTcNMeqS",
		"scores": [
			4,
			5,
			1,
			2,
			5,
			3,
			2,
			2,
			3,
			4
		]
	},
	{
		"name": "Stuart Lindstrom",
		"photo": "https://i2.wp.com/loweringthebar.net/wp-content/uploads/2017/02/skeleton-lounger.png",
		"scores": [
			2,
			5,
			5,
			2,
			1,
			2,
			2,
			2,
			4,
			2
		]
	},
];

function addData(dataEntry) {
	if (!dataEntry) {
		return;
	}

	for (var i = 0; i < data.length; i++) {
		if (dataEntry.name === data[i].name) {
			data.splice(i, 1);
			i--;
		}
	}
	if (dataEntry['scores[]']) {
		dataEntry['scores'] = dataEntry['scores[]'];
		dataEntry['scores[]'] = undefined;
	}
	var newScores = [];
	for (var i = 0; i < dataEntry.scores.length; i++) {
		newScores.push(parseInt(dataEntry.scores[i]));
	}
	dataEntry.scores = newScores;

	data.push(dataEntry);
};

module.exports = { data, addData };
