import React, { useState } from 'react'

function InputMessageEvent() {

    const [message, setMessage] = useState("Hello")

    const handleChange = (e) => {
        const value = e.target.value;
        console.log('Value ',value);
        setMessage(value);
    }

  return (
    <div>
        <input placeholder="Enter Message"
                name="message"
               onChange={handleChange}
               value={message} />
        <br/>
        <p>{message}</p>
    </div>
  )
}

export default InputMessageEvent