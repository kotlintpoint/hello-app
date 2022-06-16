import React, {useState} from 'react'


const UserRowItem = (props)=>{
    // const userValue = props.userValue;
    // const position = props.position;

    const {userValue, position} = props;

    return <tr>
        <td>{userValue.firstName}</td>
        <td>{userValue.lastName}</td>
        <td>{userValue.email}</td>
        <td>
            <button>Edit</button>
            {' '}
            <button onClick={() => props.deleteUser(position)}>Delete</button>
        </td>
    </tr>
}

function UserTableForm() {

    const [users, setUsers] = useState([]);

    const initialUser = {
        firstName : "",
        lastName : "",
        email : "",
        error : {
            firstName : "Required",
            lastName : "Required",
            email : "Required"
        }
    }
    const [user, setUser] = useState(initialUser)

    // const [show, setShow] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const error= {
            firstName : "",
            lastName : "",
            email : ""
        };
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
        //console.log(keys);
        let error=false;
        const values = Object.values(user.error);
        if(values.some(hasSomeError)){
            alert("Some Data Missing");
        }else{
            const data = {...user};
            delete data.error;
            setUser(initialUser);
            setUsers([
                ...users,
                data
            ])
        }
    }

    const errorStyle={
        color:"red"
    }

    const deleteUser=(position)=>{
        // remove user from users using position
        const tempUsers = [...users];
        tempUsers.splice(position, 1);
        setUsers(tempUsers);
    }

    const userRows = users.map((userValue, index) => {
        return <UserRowItem key={index} position={index} userValue={userValue}
        deleteUser={deleteUser} />
    })

  return (
    <div>
        <h1>User Form</h1>
        <input name="firstName" 
               placeholder="Enter First Name"
               value={user.firstName}
               onChange={handleChange} />
               <span style={errorStyle}>{user.error?.firstName}</span>
               <br/>
        <input name="lastName" 
               placeholder="Enter Last Name" 
               value={user.lastName}
               onChange={handleChange} />
                 <span style={errorStyle}>{user.error?.lastName}</span>
                 <br/>
        <input name="email" 
               placeholder="Enter Email"
               value={user.email}
               onChange={handleChange} />
                 <span style={errorStyle}>{user.error?.email}</span>
               <br/>
        <button onClick={handleSubmit}>Submit</button>
        <hr/>
        <table>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>#</th>
            </thead>
            {
               userRows
            }
        </table>
    </div>
  )
}

export default UserTableForm