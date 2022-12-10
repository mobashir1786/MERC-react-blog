import React from 'react';
import axios from 'axios';

export default function CreateCard() {
  const inputStyle = { width: "30vw", borderRadius: "5px", height: "30px", backgroundColor: "#FFFFFF", border: "2px solid tomato" };
  const lebalStyle = { fontSize: "20px", marginTop: "10px" };
  const textAreaStyle = { width: "30vw", borderRadius: "5px", height: "80px", backgroundColor: "#FFFFFF", border: "2px solid tomato" }

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target[0].value;
    const catogery = event.target[1].value;
    const imgurl = event.target[2].value;
    const desc = event.target[3].value;

    if (title && catogery && imgurl && desc) {
      axios.post("http://localhost:4000/createcard", { title: title, catogery: catogery, imgurl: imgurl, desc: desc })
        .then(res => {
          console.log(res)
          alert(res.data.message)
        })
      .catch(e => {
          console.log(e);
      })
    }
    else {
      alert("fill all the required data")
    }


  }
  return (
    <div className='same'>
      <form onSubmit={handleSubmit} className="createCard">
        <label style={lebalStyle}>Title Name</label><br />
        <input type="text" style={inputStyle} /><br />

        <label style={lebalStyle}>Catogery</label><br />
        <input type="text" style={inputStyle} /><br />

        <label style={lebalStyle}>Image url</label><br />
        <input type="text" style={inputStyle} /><br />

        <label style={{ marginTop: "10px", fontSize: "20px" }}>Description</label><br />
        <textarea className="textarea" placeholder='Enter your description' style={textAreaStyle} /><br />
        <button className="btn btn-warning click" style={{ backgroundColor: "tomato", padding: "10px", marginTop: "10px", borderRadius: "10px" }} type="submit" >Create Card</button>
      </form>
    </div>
  )
}
