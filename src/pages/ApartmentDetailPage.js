import axios from "axios";
import { useState, useEffect } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import marcoPic from "../components/images/loading.png"

export default function ApartmentDetailPage() {
  const [apartment, setApartment] = useState({});
  //const { apartmentId } = useParams(); // same as req.params.apartmentId
  const params = useParams(); // same as req.params.apartmentId

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(()=>{
      axios
      .get(`https://ironbnb-m3.herokuapp.com/apartments/${params.apartmentId}`)
      .then((response) => setApartment(response.data))
      .catch((error) => console.log(error));
    },1500)
    
  }, [params.apartmentId]);

  return apartment._id ? (
    <div key={apartment._id} className="card">
      <img src={apartment.img} alt="apartment" />
      <h3>{apartment.title}</h3>
      <p>Price: {apartment.pricePerDay}</p>
      <button onClick={()=>navigate(`/apartments/${apartment._id}/edit`)}>
        Edit apartment
      </button>
    </div>
  ) : (
    <div>
        <img src={marcoPic} alt="Marco Pic"/>
    </div>
  );
}
