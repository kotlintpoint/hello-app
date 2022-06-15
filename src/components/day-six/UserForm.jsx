import React, {useState} from 'react'

function UserForm() {

    const [user, setUser] = useState({
        firstName : "",
        lastName : "",
        email : "",
        error : {
            firstName : "Required",
            lastName : "Required",
            email : "Required"
        }
    })

    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const error= user.error;
        switch(name){
            case "firstName":
                if(value.length>3){
                    error.firstName=""
                }else{
                    error.firstName="Required"
                }
                break;
            case "lastName":
                if(value.length>3){
                    error.lastName=""
                }else{
                    error.lastName="Required"
                }
                break;
            case "email":
                if(value.length>3){
                    error.email=""
                }else{
                    error.email="Required"
                }
                break;
        }

        setUser({
            ...user,
            [name] : value,
            error : error 
        })
    }

    const hasSomeValue = (value)=>{
        return value.length > 0
    }

    const hasSomeError = (value) => {
        return value.length > 0 
    }

    const handleSubmit=()=>{
        // validation 1
        
        /*const values = Object.values(user);
        if(values.every(hasSomeValue)){
            setShow(true);
        }else{
            alert("Some Data Missing");
        }*/

        // validation 2

       
        //console.log(keys);
        let error=false;
        const values = Object.values(user.error);
        if(values.some(hasSomeError)){
            alert("Some Data Missing");
        }else{
            setShow(true);
        }
    }

    const errorStyle={
        color:"red"
    }

  return (
    <div>
        <h1>User Form</h1>
        <input name="firstName" 
               placeholder="Enter First Name"
               value={user.firstName}
               onChange={handleChange} />
               <span style={errorStyle}>{user.error.firstName}</span>
               <br/>
        <input name="lastName" 
               placeholder="Enter Last Name" 
               value={user.lastName}
               onChange={handleChange} />
                 <span style={errorStyle}>{user.error.lastName}</span>
                 <br/>
        <input name="email" 
               placeholder="Enter Email"
               value={user.email}
               onChange={handleChange} />
                 <span style={errorStyle}>{user.error.email}</span>
               <br/>
        <button onClick={handleSubmit}>Submit</button>
        <hr/>
        {show && <p>{JSON.stringify(user)}</p>}
    </div>
  )
}

export default UserForm