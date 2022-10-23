import {
    Container,
    Form,
    Col,
    Button,
  } from "react-bootstrap";
  import { useEffect, useState } from "react";
  
  import Email from "../components/profile/email";
  import PhoneNumber from "../components/profile/phonenumber";
  import SocialMedia from "../components/profile/socialmedia";
  import Address from "../components/profile/address";

  import { v4 as uuidv4 } from 'uuid';

  import { profileCreateRoute } from "../utils/APIRoutes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
  
  const Profile = () => {
    
    const navigate = useNavigate();
    useEffect( ()=> {
        document.body.classList.add('bodyScroll');
    },[])

    const [socialInputForm, setSocialInputForm] = useState([
      { id: uuidv4(), socialwebsite:'', socialwebsitelink:'' },
    ])

    const [emailInputForm, setEmailInputForm] = useState([
        { id: uuidv4(), emailTitle:'', emailAddress:'' },
    ])
    const [numberInputForm, setNumberInputForm] = useState([
    { id: uuidv4(), numberTitle:'', number:'' },
    ])
    const [addressInputForm, setAddressInputForm] = useState([
    { id: uuidv4(), addressTitle:'', address:'' },
    ])
  

  console.log(emailInputForm);
  
    const CreateProfile = async (e) => {
        const userData = await JSON.parse(
            localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
      const body = {
                      email:emailInputForm,
                      socialMedia: socialInputForm,
                      phoneNumber: numberInputForm,
                      address: addressInputForm, 
                      user:userData._id}
      e.preventDefault();
      const { data } = await axios.post(profileCreateRoute, body);
      if(data.status === true){
        navigate("/");
      }
      
    };
    return (
      <Container className="mt-5 mb-2">
        <Form className="form-section">
          <Email inputFields={emailInputForm} setInputFields={setEmailInputForm}/>
          <SocialMedia inputFields={socialInputForm} setInputFields={setSocialInputForm} />
          <PhoneNumber inputFields={numberInputForm} setInputFields={setNumberInputForm} />
          <Address inputFields={addressInputForm}  setInputFields={setAddressInputForm}/>
          <Button
            variant="dark"
            type="button"
            as={Col}
            sm={12}
            className="py-3 my-3"
            onClick={CreateProfile}
          >
            Create Profile
          </Button>
        </Form>
      </Container>
    );
  };
  
  export default Profile;