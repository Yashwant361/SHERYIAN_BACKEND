require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path'); // path package

const app = express();
app.set("view engine", "ejs");// setup view engine 
//parser here 
app.use(express.json());// client se jo bhi request aagyi usko parser karega
app.use(express.urlencoded({ extended: true })); //Html form se aane wla data parse krta hai
app.use(express.static(path.join(__dirname, 'public'))); //setup the path


app.get('/', (req, res) => {
    fs.readdir(path.join(__dirname, 'files'), (err, files) => {
        if (err) {
            console.log("Error:", err);
            return res.send("Error reading folder");
        }
        console.log("Files inside folder:", files);
        res.render('index', { files: files });  // pass to ejs
    });
});

app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split('').join('')}.txt`,
        req.body.details,
        (err) => {
           res.redirect('/')
        })
        ;

})

app.get('/profile/:username', (req, res) => {
    res.send(`Welcome, ${req.params.username}`)
})
app.get('/profile/:username/:age', (req, res) => {
    res.send(`Welcome, ${req.params.username} your age is ${req.params.age}`)
})



let PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`Server Runs on http://localhost:${PORT}`);
});






