const fs=require('node:fs');

//fs.mkdirSync('New_folder');
fs.mkdirSync('New_folder/fold',{recursive:true});

fs.rmdirSync('New_folder/fold');

