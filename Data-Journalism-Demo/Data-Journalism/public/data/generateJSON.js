const fs = require('fs');

let states = {};

let scores_csv = fs.readFileSync('scores.csv', 'utf8');

let scores = scores_csv.split("\n");

scores.forEach(function(score) {
  let state_info = score.split(',');

  if(state_info[1]!=''){
    let state_name = state_info[1];

    if(state_name!="Jurisdiction"){
      let stateStats = {};

      stateStats['before'] = state_info[2];
      stateStats['after'] = state_info[3];
      stateStats['percent'] = (((state_info[3]-state_info[2])/(state_info[2])*100).toFixed(2)).toString();

      states[state_name]=stateStats;
    }
  }
});

fs.writeFileSync('scores.json', JSON.stringify(states), 'utf8');
