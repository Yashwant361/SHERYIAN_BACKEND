const fs = require('fs');

//here we create file
// fs.writeFile('hey.md', 'Hello I am fs WriteFile', (err) => {
//     err ? console.log('error') : console.log("Done");
// })


//here we add(append data ) in exited file
// fs.appendFile('hey.txt', '\nI am good', (err) => {
//     err ? console.log('Error') : console.log('Done');
// })

//Rename file
// fs.rename('hey.txt',"hello.md",(err)=>{
//     err ? console.log(err) : console.log("Done");
// })

//Copy File
// fs.copyFile("hello.md","./copy/copy.txt",(err)=>{
//     err ? console.log("Error => ",err) : console.log("Done");
// })


//unlink (delete file)
// fs.unlink('./copy/copy.txt', (err) => {
//     err ? console.log(err) : console.log("File Removed");
// })

// rmdir (remove directory)
// fs.rmdir("./copy",{recursive:true},(err)=>{
//     err ? console.log("Error =>",err) : console.log("Floder Delete");
// })

/* Home Work */
//make directory (folder)
// const path = require('path')
// const dirPath = path.join(__dirname,"$new_Folder") 
// fs.mkdir(dirPath,(err)=>{
//     err ? console.log("Error =>", err) : console.log("Directory Created Successfully");  
// })

//read folder
// fs.readdir("./fileSystem/new_Folder",(err,files)=>{
// err ? console.log("Error:=>",err) : console.log("Files inside folder\n",files);
// })

//read file
// fs.readFile('./new_Folder/hello.md','utf-8',(err,data)=>{
//     err ? console.log("Error =>",err) : console.log("Success =>\n" , data);

// })