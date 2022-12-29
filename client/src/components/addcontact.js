import axios from "axios"
import {useState,useEffect} from "react"
import "../styles/addcontact.css"
import { useNavigate } from "react-router-dom";

function Addcontact(){


  axios.defaults.withCredentials=true; 

  const nav = useNavigate();

    const [formdata,setformdata]=useState({ //state variable to store data of new contact
        "Name":"", 
        "address":"",
        "rollno":"",
        "contactno":"",
        "email":""
    });
    const handlechange=(e)=>{ //function to dynamically store data on change
        setformdata({
            ...formdata,
            [e.target.name]:  e.target.value
        }) 
        //console.log(e.target.value);
    }

    const handlesubmit =async (e)=>{ // fucntion used to add data to backend
      e.preventDefault();
            // console.log("token :", localStorage.getItem("token"));
        await axios.post("http://localhost:8080/create",{
            NAME:formdata.Name,
            address:formdata.address,
            rollno:formdata.rollno,
            contactno:formdata.contactno,
            email:formdata.email
          ,
        })
        .then(response=>{
            console.log("post",response);
            nav("/contact");
        });
    }

    useEffect(()=>{ // checking if user is logged in or not
      axios.get("http://localhost:8080/login") 
      
     .then(Response=>{
      if(Response.data.loggedIn===false){
        nav("/login")
      }
         
     }) 
  },[])

    return( //form to collect data
    <div class="main">
    <form onSubmit={handlesubmit}>
  <div class="form-row">
    <div class="form-group ">
      <label for="Name">Name</label>
      <input type="text" class="form-control" name="Name" required placeholder="Name"  onChange={handlechange} />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" name="address" required placeholder="Address"  onChange={handlechange}/>
  </div>
  
  <div className="sec">
    <div class="form-group ">
      <label for="inputCity">Roll Number</label>
      <input type="text" class="form-control" name="rollno" required placeholder="Roll Number" onChange={handlechange} />
    </div>
    <div class="form-group ">
    <label for="inputState">Contact Number</label>
      <input type="text" class="form-control" name="contactno" required minlength="10" maxlength="10" placeholder="contact Number" onChange={handlechange} />
    </div>
    <div class="form-group ">
      <label for="inputZip">Email</label>
      <input type="text" class="form-control" name="email" required placeholder="Email" onChange={handlechange} />
    </div>
  </div>
  
  <button type="submit" class="btn btn-primary">create</button>
</form>

    </div>
    )
}

export default Addcontact;
