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
        fs.readFile("./form1.html",(err,fsData)=>{
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
        res.statusCode=200;
        let url1=req.url.split("?");
        // let urlquery=url1[1].split("&");
        // let firstquery = urlquery[0].split("=");
        // let secondquery = urlquery[1].split("=");
        // let queryData=url1.parse(req,url,true).query;
        let obQuery = querystring.parse(url1[1]);
        res.setHeader('Content-Type','text/html');
        res.write(obQuery.name+"<br>");
        res.write(obQuery.submit1+"<br>");
        res.end("submit OK");
    }
    else{
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        // res.write(req.url)
        res.write('<h1> hch666,you are the '+i+'th vistor');
        res.end();
    }
    // res.write('<h1> hch666,you are the '+i+'th vistor');
    
    i++;

});
server.listen(3000);