import React, {useState} from 'react'

function FruitInputEvent() {

    const [fruits, setFruits] = useState([]);

    const [fruit, setFruit] = useState("");
    const handleChange = (e) => {
        setFruit(e.target.value);
    }

    const handleSubmit = () => {
        // spread operator 
        setFruits([...fruits, fruit]);
        setFruit("")
    }

  return (
    <div>
        <h1>Fruit List</h1>
       
        <input placeholder='Enter Name'
        onChange={handleChange}
        value={fruit} />

        <button onClick={handleSubmit}>Submit</button>
        <br/>
        <p>Fruit : {fruit}</p>
        <p>Fruits : {fruits}</p>
        <ul>
            {
                fruits.map((item, index) => <li key={index}>{item}</li>)
            }
        </ul>
    </div>
  )
}

export default FruitInputEvent