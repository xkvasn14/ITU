// start with
// node ./app.js
// http://localhost:4000/asdf?name=value&id=123

const http = require('http');
const fs = require('fs');
const url = require('url');
const util = require('util');
const formidable = require("formidable");
const { info } = require('console');


const server = http.createServer(function(req,res){
    
    if(req.method.toUpperCase() == "GET"){

        var rawData = fs.readFileSync("C:/Users/jarek/Desktop/ITU_server/persons.json");
        var osoby = JSON.parse(rawData);
        var path = url.parse(req.url,true);

        if(path.query.method.toUpperCase() == "GET"){
            for (let i of osoby.persons) {
                if (i.username == path.query.name) {
                    console.log("Welcome " + path.query.name);
                    res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
                    res.write("User is allowed");
                    res.end()
                    return;
                }
            }
                console.log("User " + path.query.name +" is not in DB");
                res.writeHead(400,{'Access-Control-Allow-Origin':'*'});
                res.write("User does not exist");
                res.end()
                return;   
        }
        else if(path.query.method.toUpperCase() == "REWARDS"){
            console.log("Sending Rewards data");
            res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
            res.write(rawData);
            res.end()
            return; 
        }
        else if(path.query.method.toUpperCase() == "INFORMATION"){
            console.log("Sending Information data");
            var data = {};
            for(let i of osoby.persons)
            {
                if(i.username == path.query.username){
                    data = i.infos;
                }
            }

            res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
            res.write(JSON.stringify({"infos":data}));
            res.end()
            return;
        }
        else{
            console.log("Wrong method");
            res.writeHead(404,{'Access-Control-Allow-Origin':'*'});
            res.write("Wrong method");
            res.end()
            return; 
        }
    }
    else if(req.method.toUpperCase() == "POST"){

        var rawData = fs.readFileSync("C:/Users/jarek/Desktop/ITU_server/persons.json");
        var osoby = JSON.parse(rawData);                

        let form = new formidable.IncomingForm();
        
        form.parse(req, function(err,fields,files){
            if(err)
            {
                console.log("form parsing err");
                res.writeHead(500,{'Access-Control-Allow-Origin':'*'});
                res.write("Something went wrong");
                res.end()
                return;
            }
            console.log(fields);
            var method = fields.method;
            var username = fields.username;
            var password = fields.password;
            var personName = fields.personName;

            if(method.toUpperCase() == "POST"){

            for(let i of osoby.persons){
                if(i.username == username)
                {
                    console.log("Username already exists");
                    res.writeHead(400,{'Access-Control-Allow-Origin':'*'});
                    res.write("Username already exists");
                    res.end()
                    return;
                }
            }
            var people = {"persons" : osoby.persons};
            people.persons[osoby.persons.length] = {
                "username" : username,
                "password" : password,
                "name" : personName,
                "rewards" : [],
                "infos" : [
                    {
                    "id": "1",
                    "date": "2000-01-01",
                    "type": "note-success",
                    "text": "Dummy note"
                  }
                ]
            };            
            console.log("User has been created");
            fs.writeFileSync('persons.json', JSON.stringify(people));
            res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
            res.write("User has been created");
            res.end();
            return;
        }
        else if(method.toUpperCase() == "DELETE")
        {
            for(let i of osoby.persons)
            {
                if(i.username == username && i.password == password)
                {
                    var new_osoby = [];
                    for(let i of osoby.persons)
                    {
                        if(i.username != username)
                        {
                            new_osoby.push(i);
                        }
                    }
                    var people = {"persons" : new_osoby};
                    console.log("User has been removed");
                    fs.writeFileSync('persons.json', JSON.stringify(people));
                    res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
                    res.write("User has been removed");
                    res.end();
                    return;
                }
            }
            console.log("Wrong initials");
            res.writeHead(400,{'Access-Control-Allow-Origin':'*'});
            res.write("Wrong username or password");
            res.end()
            return;
        }
        else if(method.toUpperCase() == "INFORMATION"){
            var id = fields.id;
            var new_persons = [];
            for(let i of osoby.persons)
            {
                if(i.username == username)
                {
                    var new_info = [];
                    for(let j of i.infos)
                    {
                        if(j.id != id)
                        {
                            new_info.push(j);
                        }
                    }
                    console.log(new_info);
                    i["infos"] = new_info;
                    console.log(i);
                }
                new_persons.push(i);
            }
            console.log("Note has been removed");
            var people = {"persons" : new_persons};
            fs.writeFileSync('persons.json', JSON.stringify(people));
            res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
            res.write(JSON.stringify({"infos":new_info}));
            res.end();
            return;
            }

            console.log("Wrong initials");
            res.writeHead(400,{'Access-Control-Allow-Origin':'*'});
            res.write("Wrong username or password");
            res.end()
            return;
        });
    }
    else{
        // SEND USER ERR MESSAGE
        console.log("Bad Request");
        res.writeHead(400,{'Access-Control-Allow-Origin':'*'});
        res.write("Bad request");
        res.end()
        return;
    }
})

server.listen(4000,function(){
    console.log("Listening on port: 4000")
})
