const express = require("express");
// require('express') returns us a funcion , we are storing that in  express variable

const morgan = require("morgan");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const { size } = require("lodash");

// express app
const app = express();

// listen for requests
var port_no=process.env.PORT || 3000
app.listen(port_no, () => {
  console.log(`server started for port no. ${port_no}`);
}); // 1st parameter = port number , 2nd parameter = host ip(default = localhost)

// it returns us the instance of the server, we can store this instance in a variable in order to use it later (for ex - in web sockets).

// listening for GET requests
let path = "";

// app.use((req,res,next)=>
// {
//     console.log("Hostname ->"+req.hostname);
//     console.log("Path->"+req.path);
//     console.log("Method ->"+req.method);
//     console.log("----------------------------------------------");
//     next(); // to specify that  we are not sending any response to the browser , and the compiler will now match the path the get request handler written down below.
// });

app.use(morgan("dev"));
app.get("/", (req, res) => {
  console.log("Pagename = Homepage");
  console.log("------------------------------------------");
  path =
    "./src/homepage2.html";

  res.sendFile(path,{ root: __dirname });

  // send and sendFile function automatically sets the  header type, as well as the status code , but we can always set our own status code.

  // sendFile function be default takes absolute path
  // in order to use relative path
  // syntax =>
  // sendFile('relative path',{root:'absolute path of the directory where the express app file resides ( use __dirname  to retrieve the directory name)'})
});

app.get("/home.js", (req, res) => {
  path =
    "./src/home.js";
  res.sendFile(path,{ root: __dirname });
});

app.get("/price.json", (req, res) => {
  path =
    "./src/price.json";
  res.sendFile(path,{ root: __dirname });
});

app.get("/about", (req, res) => {
  console.log("Pagename = about page");
  console.log("------------------------------------------");
  path = "./about.html";
  res.sendFile(path, { root: __dirname });
});

app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.get("/success",(req,res)=>
{
  path = "./src/gifs/782-check-mark-success.gif";

  res.sendFile(path, { root: __dirname });
});

app.get("/fail",(req,res)=>
{
  path = "./src/gifs/76705-error-animation.gif";

  res.sendFile(path, { root: __dirname });
});

//console.log("anythins"); // this only gets executed once in the begining
// --------------------------------------------------------------

// listening for POST requests

app.post("/saveData", bodyParser.json(), (req, res) =>
  // bodyparser.json is required in order to access the req.body method
  {
    console.log("post call hit");
    // var obj={a:10};
    // res.send(obj);
    console.log(req.body); // prints the payload
    // console.log(req.body.timestamp);
    // console.log(typeof(req.body.timestamp));
    // console.log(new Date(req.body.timestamp));
    
    
    // Database Code (mysql)

    const con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      port:3306,
      database:"jumbo_tray"
    });

    con.connect((err)=> 
    { // its an asynchronous call
        if(err)
        {
            console.log(err);
            res.json({
              received: false,
              error:err
            });
        }
        else
        {
            let items = req.body.item_lst;
            let sizes = req.body.size_lst;
            let qty = req.body.qty_lst;
            let name = req.body.name;
            let time = req.body.timestamp;
            console.log(time);
            console.log("successfullly connected");
            for(let i=0;i<items.length;i++)
            {

            

            con.query(`INSERT INTO total_data (Order_name,${sizes[i]},Customer_name,Timestamp) VALUES ('${items[i].toString()}',${qty[i]},'${name.toString()}','${time.toString()}')`,(err,result)=>{
                if(err)
                {
                    console.log(err);
                    console.log(err.sqlMessage)
                }
                else{
                    console.log(result);
                }
            });

          }
            res.json({
              received: true,
            });

            con.end();
        }
    });
   
  }
);

// --------------------------------------------------------------
// for a 404 page , use function should be at the last of the js file
// 404 page
app.use((req, res) => {
  path = "./404.html";
  res.status(404);
  res.sendFile(path, { root: __dirname });
});

//  use function is called everytime there is a request from client , it only executes if none of the above functions gets triggered.

// i-e wherever the use function is used inside a js file , its like a debugger it will get hit by compiler when the compiler is at the particular line.

// i-e for just explaination  - this is a debugger line, when gets hit by the compiler , call a callback function.
