const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const fs = require('fs');
const cors = require('cors');


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json({limit: '1000mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '1000mb', extended: true}))

// add router in the Express app.
app.use("/", router);

router.use(cors());
router.options('*', cors())

    router.post('/login', function(req, res, next) {

        var body = req.body;
        
       fs.readFile('collectedData/login.json','utf8', function(err,data){
           var obj = JSON.parse(data);
            obj.push(body);
            var loginInformations = JSON.stringify(obj);
            fs.writeFile('collectedData/login.json',loginInformations, function(err){
                if(err) return console.log(err);
                console.log('Note added');
                res.status(200).send('done');
            });

        })
    
    });


    router.post('/gazeData', function(req, res, next) {

        var body = req.body;
        
       fs.readFile('collectedData/gazeData.json','utf8', function(err,data){
           var obj = JSON.parse(data);
            obj.push(body);
            var gazeData = JSON.stringify(obj);
            fs.writeFile('collectedData/gazeData.json',gazeData, function(err){
                if(err) return console.log(err);
                console.log('Note added');
                res.status(200).send('done');
            });

        })
    
    });

    router.post('/mouseData', function(req, res, next) {

        var body = req.body;
        
       fs.readFile('collectedData/mouseData.json','utf8', function(err,data){
           var obj = JSON.parse(data);
            obj.push(body);
            var mouseData = JSON.stringify(obj);
            fs.writeFile('collectedData/mouseData.json',mouseData, function(err){
                if(err) return console.log(err);
                console.log('Note added');
                res.status(200).send('done');
            });

        })
    
    });

    router.post('/accuracy', function(req, res, next) {

        var body = req.body;
        
       fs.readFile('collectedData/accuracy.json','utf8', function(err,data){
           var obj = JSON.parse(data);
            obj.push(body);
            var accuracyData = JSON.stringify(obj);
            fs.writeFile('collectedData/accuracy.json',accuracyData, function(err){
                if(err) return console.log(err);
                console.log('Note added');
                res.status(200).send('done');
            });

        })
    
    });

    router.post('/demographics', function(req, res, next) {

        var body = req.body;
       fs.readFile('collectedData/demographics.json','utf8', function(err,data){
           var obj = JSON.parse(data);
            obj.push(body);
            var demographicsData = JSON.stringify(obj);
            fs.writeFile('collectedData/demographics.json',demographicsData, function(err){
                if(err) return console.log(err);
                console.log('Note added');
                res.status(200).send('done');
            });

        })
    
    });

app.listen(8888,() => {
    console.log("Started on PORT 8888");
  })