// code taken from http://stackoverflow.com/questions/17500312/is-there-some-way-i-can-join-the-contents-of-two-javascript-arrays-much-like-i
// in post by Aadit M Shah (solution suggested by pebbl)
// This code does an inner join on two sets of json objects

// // Test Data
// var observations = [
//   {time: "2016-07", observations: 20},
//   {time: "2016-08", observations: 10},
// ]
//
// var comments = [
//   {time: "2016-07", comments: 0},
//   {time: "2016-08", comments: 10},
// ]

 export function equijoin(primary, foreign, primaryKey, foreignKey, select) {
    var m = primary.length, n = foreign.length, index = [], c = [];

    for (var i = 0; i < m; i++) {     // loop through m items
        var row = primary[i];
        index[row[primaryKey]] = row; // create an index for primary table
    }

    for (var j = 0; j < n; j++) {     // loop through n items
        var y = foreign[j];
        var x = index[y[foreignKey]]; // get corresponding row from primary
        c.push(select(x, y));         // select only the columns you need
    }

    return c;
}

// // This is example code for using equijoin
// var merged = equijoin(observations, comments, 'time', 'time', function (a,b) {
// 	return {
// 		time: b.time,
//     observations: a.observations,
//     comments: b.comments
// 	};
// })
