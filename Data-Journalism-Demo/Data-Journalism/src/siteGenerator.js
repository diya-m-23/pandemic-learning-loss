const fs = require('fs');
const ejs = require('ejs');

let state_info = JSON.parse(fs.readFileSync('../data/scores.json', 'utf8'));
let index_template = fs.readFileSync('views/index.ejs', 'utf8');
let about_template = fs.readFileSync('views/about.ejs', 'utf8');
let state_template = fs.readFileSync('views/state.ejs', 'utf8');

/*
  1) Generate a web page for each state
  2) Keep track of the link for index.html
*/

let keys = Object.keys(state_info);

for (index in keys){

  let state = keys[index];

  let state_html = ejs.render(state_template, {
    filename: __dirname + '/views/state.ejs',
    data: state_info,
    state: state
  });

  let link = getBetterFileName(state);

  state_info[state].link = link;

  let filename = '../docs/'+ link+'.html';

  fs.writeFileSync(filename, state_html, 'utf8');

}

/*
  1) Generate an index page of all states
*/
let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  data: state_info
});

fs.writeFileSync('../docs/index.html', index_html, 'utf8');

let about_html = ejs.render(about_template, {
  filename: __dirname + '/views/about.ejs',
  data: state_info
});

fs.writeFileSync('../docs/about.html', about_html, 'utf8');

function getBetterFileName(stateName){
  let betterFileName = stateName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}
