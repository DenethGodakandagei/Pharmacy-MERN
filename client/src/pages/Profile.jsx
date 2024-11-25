import NavBar from "../components/NavBar";
import { registertrue } from "../App";
import { useContext } from "react";
import profileimg from "../assets/profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import Seller from "../components/Seller";

const Profile = () => {
 
  const { uservalue, toggleValue } = useContext(registertrue);
 
  console.log(uservalue);
  return (
    <>

{uservalue.acounttype === "buyer" ? (
                <>
                
                  <h2 className="text-xl font-bold mb-4">seller details</h2>
                </>
              ) : (
                <> <h2 className="text-xl font-bold mb-4">buyer details</h2></> ) }
      <NavBar />  
       <Seller />
    </>
  );
};

export default Profile;
