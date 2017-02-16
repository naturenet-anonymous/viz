var _ = require('lodash');
var joins = require('lodash-joins');

// // Test Data
// var full = require('./full_export.json')
// var observations = full.observations
// var comments = full.comments
// var ideas = full.ideas
// var users = full.users

// merge with users to get site
function integrateUsers(primary, dataKey1, foreign, dataKey2){
  var output = joins.nestedLoopFullOuterJoin(primary, dataKey1, foreign, dataKey2)
	return output
}

// group by user
function groupBySite(input, groupKey){
	var output = _.groupBy(input, (d) => {
      return d[groupKey]; })
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
			var dict = { site: i, [dataKey]: d }
			return dict;
		})
	return output
}


//return whole shebang
export function siteTotals(data, dataKey) {
 if (dataKey == "observations"){

	 var output = format(getCount(groupBySite(data.observations, "site")), "observations")
	 console.log(output)
 }

 else if (dataKey == "comments"){
	 var users = _.map(data.users, (d) => {
	 	var dict = {user: d.id, site: d.affiliation}
	 	return dict; })

		var output = format(getCount(groupBySite(integrateUsers(data.comments, "commenter", users, "user"), "site")), "comments")
		console.log(output)
 }

 else if (dataKey == "design_ideas"){
	 var users = _.map(data.users, (d) => {
	 	var dict = {user: d.id, site: d.affiliation}
	 	return dict; })

		var output = format(getCount(groupBySite(integrateUsers(data.ideas, "submitter", users, "user"), "site")), 'design_ideas')
 }

	return output
}

// console.log(siteTotals(full))
