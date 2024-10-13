// file needs to be named index.js as the npm installation was initialized to look for the index.js file
const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const cors = require('cors');
const port = 3001;
const XLSX = require('xlsx');


app.use(cors());
app.use(bodyParser.json());

// The single slash is supposed to be the index page that is accessed once you start.
app.get("/",(req,res)=>{
    res.send("hi")
})
// forward slash is to represent from the home page
app.get("/helloWorld",(req,res) =>{
    // req represents the request
    // res represents the response

    // console.log(req) 
    res.send("<h1>Hello World!<h1>")
})

app.get("/about",(req,res) =>
{
    res.send("<h1>About me<h1> <p> My name is Chidubem</p>")
})

app.get("/cardData",(req,res)=>
{
    const excelFilePath = 'SQL Flashcards.xlsx';
    // Read the Excel file into a workbook object
    const workbook = XLSX.readFile(excelFilePath);

// Get the sheet names from the workbook
    const sheetNames = workbook.SheetNames;

    const sheet = workbook.Sheets["SQL"]

    const jsonData = XLSX.utils.sheet_to_json(sheet);
    
    res.send(jsonData)

})

//This is the line that starts the server and make it listen on the specified port. When hosting online, you may have to start the server in another file then connect this to that server
app.listen(port,()=>{
    console.log(`Server runnning on port ${port} (local)`)
})
