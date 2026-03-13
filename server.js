//console.log("Hi I'm working now!!!");

//port config
const port = 3001;
//express config
const exp = require('express');
//config the server application
const app = exp();

app.use(exp.json());

// serve static files
app.use(exp.static('public'));

//contants
const Name = "Sammanie";
const Batch = "25.1";

//old way
//app.listen(port, function(){
    //console.log("{port}");
//});

app.get('/api', (req,res)=>{
    res.json({message:"HELLO"});

});

app.listen(port,()=>{
    console.log(`Server Started At Port: ${port}. \n Enter Ctrl+C to stop the server.`);
    console.log(`Name: ${Name} \n Batch: ${Batch}`);
});
//new way
//app.listen(port);

