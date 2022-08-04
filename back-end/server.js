const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http')
global.__basedir = __dirname;

//references to models 
const  FileStorage  = require("./models/FileStorage");
const  DbStorage  = require("./models/DbStorage");
const  Duration = require("./models/Method");
const upload = require('./multerconfig/filesys');
const stream = require('./multerconfig/dbsys');

// create express app
const app = express();
app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
    extended: true ,
    "Content-Type":"application/x-www-form-urlencoded"
}))
app.use(express.static(__dirname));  //resolve base url

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.post('/filestorage', upload.single('streamfile') ,(req,res) => {
    var pre_query = new Date().getTime();
    
    let results = [];
    results.push(req.file.size);

    FileStorage.addFileStorage(req.file).then( result => {

        var post_query = new Date().getTime();
        // calculate the duration in seconds
        var duration = (post_query - pre_query) / 1000;

        res.json({success: true, Duration:duration, result:results, type:'filesystem'})
    })
    .catch(err => {
        res.json({type:'filesystem', success: false, reason: err})
        console.log(err)
    }) 
     
})   

app.post('/dbstorage', stream.single('streamfile') ,(req,res) => {
    var pre_query = new Date().getTime();
    
    let results = [];
    results.push(req.file.size);

    DbStorage.addDbStorage(req.file).then( result => {

        var post_query = new Date().getTime();
        // calculate the duration in seconds
        var duration = (post_query - pre_query) / 1000;

        res.json({success: true, Duration:duration, result:results, type:'dbstorage'})
    })
    .catch(err => {
        res.json({type:'dbstorage', success: false, reason: err})
        console.log(err)
    }) 
    
})  

app.get('/filestorage/all', (req,res) => {
    var pre_query = new Date().getTime();
    FileStorage.getAll().then( result => {
        
        var post_query = new Date().getTime();
        // calculate the duration in seconds
        var duration = (post_query - pre_query) / 1000;

        res.json({success: true, Duration:duration, result:result, appRoot:__basedir})
    })
    .catch(err => {
        res.json({type:'filesystem', success: false, reason: err})
        console.log(err)
    }) 
    
})   

app.get('/dbstorage/all', (req,res) => {
   
    var pre_query = new Date().getTime();
    DbStorage.getAll().then( result => {

        var post_query = new Date().getTime();
        // calculate the duration in seconds
        var duration = (post_query - pre_query) / 1000;

        res.json({success: true, Duration:duration, result:result})
    })
    .catch(err => {
        res.json({type:'dbsystem', success: false, reason: err})
        console.log(err)
    }) 
    
}) 

//record duration
app.post('/duration/download' ,(req,res) => {
    
    Duration.addHistory(req.body).then( result => {
        
        res.json({success: true, type:'duration'})
    })
    .catch(err => {
        res.json({type:'duration', success: false, reason: err})
        console.log(err)
    }) 
    
})  

app.get('/history', (req,res) => {
    
    Duration.getAll().then( result => {
        res.json({ success: true, result:result })
    })
    .catch(err => {
        res.json({type:'duration', success: false, reason: err})
        console.log(err)
    }) 
    
})   

app.delete('/del-file/:id', (req,res) => {
    FileStorage.delete(req.params.id).then( result => {
        res.json({ success: true, result:result })
    })
    .catch(err => {
        res.json({type:'filesystem', success: false, reason: err})
        console.log(err)
    }) 
})  

app.delete('/del-dbfile/:id', (req,res) => {
    DbStorage.delete(req.params.id).then( result => {
        res.json({ success: true, result:result })
    })
    .catch(err => {
        res.json({type:'dbsystem', success: false, reason: err})
        console.log(err)
    }) 
})  

// listen for requests 
app.listen(5000, () => {
    console.log('Server is listening on port 5000');
}); 