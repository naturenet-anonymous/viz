var _ = require('lodash');

// // Test Data 
// var full = require('./full_export.json')
// var observations = full.observations
// var comments = full.comments
// var ideas = full.ideas
// var users = full.users

// group by user
function groupByUser(input, dataKey){
	var output = _.groupBy(input, (d) => {
      return d[dataKey]; })
	return output
}

//get number per month/year
function getCount(input){
	var output = _.mapValues(input, (d) => {
    return _.size(d); })
	return output
}

//change format
function format(input, dataKey) {
	var output = _.map(input, (d,i) => {
			var dict = { user: i, [dataKey]: d }
			return dict;
		})
	return output
}

//return whole shebang
export function userTotals(input, dataKey, dataKey2) {
	var output = format(getCount(groupByUser(input, dataKey2)), dataKey)

	return output
}

//console.log(userTotals(comments, 'comments', "commenter"))
