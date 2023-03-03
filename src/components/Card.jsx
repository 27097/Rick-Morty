import App from "../App";
import { Link } from "react-router-dom";

export default function Card({name, species, gender, image, onClose, id}) {
  
  
   return (
      <div class="col-3 mx-auto">
         <div class="col-3 mx-auto" >
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}` } ><h2> {name} </h2> </Link>
         {/* <h2> {species} </h2> */}
         {/* <h2> {gender} </h2> */}
         <img className="" src={image} alt={name} />
         </div>
      </div>

);
}

          
         
