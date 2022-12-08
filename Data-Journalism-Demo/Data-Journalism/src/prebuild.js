const fs = require('fs');

fs.rmdirSync('public');
fs.mkdirSync('public');

fs.copyFileSync('styles.css', 'public');
fs.copyFileSync('diya_prototype.jpg', 'public');
fs.copyFileSync('isabella_macropage.jpg', 'public');
fs.copyFileSync('isabella_micropage.jpg', 'public');
fs.copyFileSync('project-pipeline.jpg', 'public');
