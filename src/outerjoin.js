//can't handle different keys
var joins = require('lodash-joins');
var _ = require('lodash');

// // Test Data
// var observations = [
//   {time: "2016-07", observations: 20},
//   {time: "2016-08", observations: 10},
// ]
//
// var accessor = 'time'
//
//
// var comments = [
//   {time: "2016-06", comments: 2},
//   {time: "2016-08", comments: 10},
// ]


function generateEmptyArray(input, dataKey){
  var empty = []

  var getKeys = _.uniq(_.flatten(_.map(input, function(d){
    return _.keys(d)
  })))

  var getData =_.map(input, function(d){
    return d[dataKey];
  })

  for(var i = 0; i < getData.length; i++){
    var emptyElement = _.mapValues(_.mapKeys(getKeys, (d) => {
        return d;}), (d) => {return 0;})
    emptyElement[dataKey] = getData[i];
    empty.push(emptyElement);

  }
  return empty;
}

export function outerJoinPlus(primary, foreign, dataKey){
  var first_join = joins.nestedLoopFullOuterJoin(primary, dataKey, foreign, dataKey);
  var empty = generateEmptyArray(first_join, dataKey)
  var output = _.merge(empty, first_join)

  return output
}

// console.log(outerJoinPlus(observations, comments, accessor))
