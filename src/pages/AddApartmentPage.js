import { useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";



function AddApartmentPage() {
  const navigate = useNavigate()
  const params = useParams()
  const [newApart, setNewApart] = useState({
    title: "",
    pricePerDay: 0,
    img:""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://ironbnb-m3.herokuapp.com/apartments/`,
        newApart
      )
      .then((newData) => navigate("/"))
      .catch((error) => navigate(`/apartments/add-apartment`));
  
    
  };

  function handleInput(event){
    const inputName = event.target.name;
    const value = event.target.value;
  
    setNewApart((newApart) => {
      return { ...newApart, [inputName]: value };
    });
  }


  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={handleInput}
          value={newApart.title}
        />

        <label>Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={handleInput}
          value={newApart.price}
        />
        <label>Image URL</label>
        <input
          type="text"
          name="img"
          onChange={handleInput}
          value={newApart.img}
        />
        
        <button type="submit">Create Apartment</button>
        
      </form>
    </div>
  );
}

export default AddApartmentPage;