const  http = require('http');
const fs = require('fs');
const url = require('url');
const  querystring = require('querystring');

// const { url } = {}('node:inspector');
// const { url } = require('node:inspector');
var i=0;
const server =http.createServer((req,res)=> {
    if(req.url=="/")
    {
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        // var fsData = fs.readFileSync("./test1.html");
        fs.readFile("./form3.html",(err,fsData)=>{
            if(err){
                console.log("read file");
                throw err;
            }
            res.write(fsData);
            res.end();
        })
        // res.write(fsData);
        // // res.write("root");
        // res.end("end");
    }
    else if(req.url=="/favicon.ico")
    {
        res.statusCode=200;
        res.setHeader('Content-Type','text/img');
        fs.readFile("jj.ico",(err,fsData)=>{
            if(err){
                console.log("read file");
                throw err;
            }
            console.log("11");
            res.write(fsData);
            res.end();
        })
        // var fsData = fs.readFileSync("jj.ico");
        // res.write(fsData);
        // res.write("root");
        // res.end("end");
    }
    else if(req.url.slice(0,6)=="/input"){
        let url1=req.url.split("?");
        // let urlquery=url1[1].split("&");
        // let firstquery = urlquery[0].split("=");
        // let secondquery = urlquery[1].split("=");
        // let queryData=url1.parse(req,url,true).query;
        let obQuery = querystring.parse(url1[1]);
        if(obQuery.submit1=="Save"){
            console.log("ss")
            fs.writeFile('./savefile',obQuery.name123,(err) =>{
                if(err) console.log("err");
                else console.log("writesuccess");
            })
        }
        else{
            fs.appendFile('./savefile',obQuery.name123,(err) =>{
                if(err) console.log("err");
                else console.log("append success");
            })
        }
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        fs.readFile("./form3.html",(err,fsData)=>{
            if(err){
                console.log("read file");
                throw err;
            }
            res.write(fsData);
            res.end();
        })

        // res.setHeader('Content-Type','text/html');
        // res.write(obQuery.name123+"<br>");
        // res.write(obQuery.submit1+"<br>");
        // res.end("submit OK");
    }
    else{
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');

        res.write('<h1> hch666,you are the '+i+'th vistor');
        res.end();
    }
    
    i++;

});
server.listen(3000);