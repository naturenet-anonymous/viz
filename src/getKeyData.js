var _ = require('lodash');
var moment = require('moment');

// // Test Data
// var full = require('./full_export.json')
// var observations = full.observations
// var comments = full.comments
// var ideas = full.ideas
// var users = full.users


//change format
function format(input, dataKeys) {
	var output = _.map(input, (d) => {
		var dict = {}
		for(var i=0; i < dataKeys.length; i++){
				dict[dataKeys[i]] = d[dataKeys[i]];
		};
		return dict
		})
	return output
}

//getting the data since July 1st, 2016
function filterSinceLaunch(input, dataKey) {
	var output = _.filter(input, (d) => {
		var launch = moment("2016-07-01");
		return moment(d[dataKey]).isAfter(launch);
	})
	return output
}

//merge data with array of empty dates
function mergeData(data, dataKey) {
	var output = {}
	for (var i=0; i < data.length; i++){
		output[dataKey[i]] = data[i]
	}
	return output
}

//return whole shebang
export function processing(observations, comments, ideas, users) {
	var ob = filterSinceLaunch(format(observations, ['id', 'created_at', 'observer', 'site', 'activity']), 'created_at')
	var com = filterSinceLaunch(format(comments, ['id', 'created_at', 'commenter']), 'created_at')
	var id = filterSinceLaunch(format(ideas, ['id', 'created_at', 'submitter']), 'created_at')
	var us = filterSinceLaunch(format(users, ['affiliation', 'created_at', 'updated_at', 'id', 'display_name']), 'updated_at')

	var output = mergeData([ob, com, id, us], ["observations", "comments", "ideas", "users"])
	return output
}

 // console.log(processing(observations, comments, ideas, users))
