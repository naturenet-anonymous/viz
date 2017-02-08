import {equijoin} from './join';

export function merge(observations, comments, ideas, dataKey) {
  console.log('in merge function')

  var first_merge = equijoin(observations, comments, dataKey, dataKey, function (a,b) {
      console.log(dataKey)
			return {
        [dataKey]: a[dataKey],
        observations: a.observations,
        comments: b.comments,
			};
		})

console.log('complete first')
var merged = equijoin(first_merge, ideas, dataKey, dataKey, function (a,b) {
  return {
    [dataKey]: a[dataKey],
    observations: a.observations,
    comments: a.comments,
    design_ideas: b.design_ideas,
  };
})
console.log('complete second')

return merged
}
