import React from 'react'

function FormEvent() {

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Form Not Submitted');
    }

  return (
    <div>
        <h1>Form Event</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="first_name" />
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default FormEvent