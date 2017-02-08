var _ = require('lodash');
var moment = require('moment');

// // Test Data
// var full = require('./full_export.json')
// var observations = full.observations
// var comments = full.comments
// var ideas = full.ideas
// var users = full.users

//remove 'deleted data'
function removeDeleted(input) {
	var output = _.filter(input, (d) => {
			return d.status != 'deleted';
	})
	return output
}

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

//getting the data since July 1st, 2016
function filterSinceLaunchPlusExceptions(input, dataKey) {
	var sinceLaunch = _.filter(input, (d) => {
		var launch = moment("2016-07-01");
		return moment(d[dataKey]).isAfter(launch);
	})

	var exceptions= _.filter(input, (d) => {
			var exceptions = ["2e168905-0737-491d-a28e-a4933ca56d75", "ab6ee460-00c8-4c39-ad46-10bd87a31b23",
				"47f683a1-a34e-41a7-887b-39ba6471638d", "605e9091-34d4-4257-907e-c8e8c46029c4"]
			if(_.includes(exceptions, d.id)){
				return moment(d[dataKey]);
			}
	})

	var output = sinceLaunch.concat(exceptions)
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
	var ob = filterSinceLaunch(format(removeDeleted(observations), ['id', 'created_at', 'observer', 'site', 'activity']), 'created_at')
	var com = filterSinceLaunch(format(removeDeleted(comments), ['id', 'created_at', 'commenter']), 'created_at')
	var id = filterSinceLaunch(format(removeDeleted(ideas), ['id', 'created_at', 'submitter']), 'created_at')
	var us = filterSinceLaunchPlusExceptions(format(users, ['affiliation', 'created_at', 'updated_at', 'id', 'display_name']), 'updated_at')

	var output = mergeData([ob, com, id, us], ["observations", "comments", "ideas", "users"])
	return output
}

 // console.log(processing(observations, comments, ideas, users))
// console.log(filterSinceLaunchPlusExceptions(format(users, ['affiliation', 'created_at', 'updated_at', 'id', 'display_name']), 'updated_at'))
