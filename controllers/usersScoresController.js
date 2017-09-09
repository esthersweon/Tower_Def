let db = require('../models');

function index(req, res) {
	db.Score.find({}, function (err, allScores){
		res.json(allScores);
	});
}

// function showAll(req, res) {
// 	// -1 MEANS DESCENDING
// 	// db.Score.findOne({name: NEWDUDE}, null, {sort: {score: -1}}, function(err, users) {
// 	//  res.json(users);});
// 	db.User.find({}, function(err, users){
// 		users[1].scores.sort(function(a,b){
// 			return b.score - a.score;
// 		})
// 		res.json(users[1]);
// 	});
// }

function create(req, res) {
	console.log( req.body.score + req.body.date + " score and time");
	db.User.findOne({name: req.params.name}, function(err,user){
		let newScore = new db.Score({
			score : req.body.score,
			date : req.body.date,
		});
				console.log("user is" + user);
		console.log(user.scores, "USER SCORES IS");

		user.scores.push(newScore);
		user.save(function(err,savedUser){
			console.log(user);
			res.json(user);
		})
	})
}

module.exports = {
	index: index,
	create: create,

}