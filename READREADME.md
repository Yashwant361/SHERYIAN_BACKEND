// const express = require('express')
// const app = express()

// let PORT = 8085

// // app.get('/',(req,res)=>{
// //     return res.status(200).json({message:'Hello World Ji'})
// // })
// // or


// //middleware  - first way
// // app.use((req, res, next) => {
// //     console.log('Hii...middleware_1 is here');
// //     // res.send('Hii...middleware is here')
// //     next();
// // });

// // app.use((req, res,next) => {
// //     console.log('Hii...middleware_2 is here');
// //     // res.send('Hii...middleware is here')
// //     next();
// // })

// // //middleware  - second way
// // app.use(myMiddleware1, myMiddleware2)

// // function myMiddleware1(req, res, next) {
// //     console.log('Hii...middleware_1 is here');
// //     next();
// // }

// // function myMiddleware2(req, res, next) {
// //     console.log('Hii...middleware_2 is here');
// //     next();
// // }





// //routes home creation here


// app.use(express.json()); //Client se aane wali JSON body ko parse karta hai , req.body ke andar usable object bana deta hai
// app.use(express.urlencoded({extended:true})); //HTML form se aane wala data parse karta hai ,application/x-www-form-urlencoded format ko handle karta hai


// app.get('/', (req, res) => {
//     res.send('Hello world ')
// });

// //profile route
// app.get('/profile', (req, res) => {
//     res.send('This is Profile Routes')
// });
// //about route
// app.get('/about', (req, res) => {
//     res.send('This is about page')
// });

// // app.get('/singup', (req, res, next) => {
// //     return next(new Error('Something went Wrong'))
// // })

// //Error Handling Middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!')

// })

// //listen --> server is created here
// app.listen(PORT, () => {
//     console.log(`Server runs on http://localhost:${PORT}`)
// });