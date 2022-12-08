const fs = require('fs');

fs.rmdirSync('../public', { recursive: true, force: true });
fs.mkdirSync('../public'); //delete and remake public folder

fs.copyFileSync('styles.css', '../public/styles.css'); //move styles.css into public
fs.copyFileSync('../diya-prototype.jpg', '../public/diya-prototype.jpg');
fs.copyFileSync('../isabella-macropage.jpg', '../public/isabella-macropage.jpg');
fs.copyFileSync('../isabella-micropage.jpg', '../public/isabella-micropage.jpg');
fs.copyFileSync('../project-pipeline.jpg', '../public/project-pipeline.jpg'); //move images into public

fs.mkdirSync('../public/data');
fs.copyFileSync('../data/generateJSON.js', '../public/data/generateJSON.js');
fs.copyFileSync('../data/scores.csv', '../public/data/scores.csv');
fs.copyFileSync('../data/scores.json', '../public/data/scores.json');
//copy sync data folder into public -- generateJSON, scores.csv, scores.json
