//npm packages
const express = require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const _=require("lodash");
const mongoose= require("mongoose");
const { response } = require("express");
const cookieParser=require("cookie-parser")
const session= require("express-session");

const app = express();
app.use(express.json()); //to parse data in json
app.use(cors({ // to make browser send data on different hosts 
    origin:["http://localhost:3000"],
    methods:["Get","Post"],
    credentials: true
}));

app.use(bodyParser.urlencoded({ //to parse the data recieved with api
    extended:true
}));
app.use(bodyParser.json());
app.use(cookieParser()); // to generate cookies
app.use(session({ //to generate sessions;
    key:"userID", 
    secret:"vouchdigital",
    resave:false,
    saveUninitialized: true,
    cookie:{
        maxAge: 1000*60*60*24,
    }
}));

mongoose.connect("mongodb://localhost:27017/addressbook") //database url (mongodb)

const addressbookSchema={ //database schema 
    Name:String,
    address:String,
    rollno:{
       type: String
    },
    contactno:String,
    email:String
  }


  //Models 
const contact=mongoose.model("contact",addressbookSchema);



app.post("/create",(req,res)=>{ // adding data to database
    
    const newcontact=new contact({
        Name:_.capitalize(req.body.NAME),
          address:req.body.address,
            rollno:req.body.rollno,
            contactno:req.body.contactno,
            email:req.body.email
    }); 
    newcontact.save();
    res.send("contact created ! ")
})

app.post("/update",(req,res)=>{ //updating data at the database
   // console.log("update ! ",req.body);
    contact.updateOne({_id:req.body._id},{$set :{ Name:_.capitalize(req.body.NAME), // updateone function to find details of contact with id 
                                                    address:req.body.address,
                                                    rollno:req.body.rollno,
                                                    contactno:req.body.contactno,
                                                    email:req.body.email}
                                                },function(err,docs){ //error handling
                                                    if(err){
                                                        console.log(err);
                                                    }else{
                                                        console.log("updated docs : ",docs);
                                                        res.send("updated ! ")
                                                    }
                                                });
});
   
app.post("/delete",(req,res)=>{ //deleting data from the database
    //console.log("deleted",req.body)
    contact.findByIdAndDelete(req.body._id,(err)=>{
        res.send("deleted");
        if(err){
            console.log(err);
        }
    })
})

app.get("/search",(req,res)=>{ // searching contacts in database
   contact.find((err,foundlist)=>{
       res.send(foundlist);
       if(err){
           console.log(err);
       }
   });
});



const PORT = process.env.PORT || 8080; // setting port to 8080

app.listen(PORT, console.log(`Server started on port ${PORT}`));