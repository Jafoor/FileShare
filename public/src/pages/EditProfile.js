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
  import Profession from "../components/profile/profession";
  import GeneralInfo from "../components/profile/generalInfo";

  import { v4 as uuidv4 } from 'uuid';

  import { profileCreateRoute, profileUpdateRoute } from "../utils/APIRoutes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { profileGetRoute } from '../utils/APIRoutes';
  
  const EditProfile = () => {
    
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState(undefined);
    const [profileData, setProfileData] = useState({});
    const [socialInputForm, setSocialInputForm] = useState([
        { id: uuidv4(), socialwebsite:'', socialwebsitelink:'' },
      ])
      const [generalInputForm, setGeneralInputForm] = useState([
        { id: uuidv4(), fullName:'', bio:'', birthday:'' },
      ])
  
      const [professionInputForm, setProfessionInputForm] = useState([
        { id: uuidv4(), institution:'', position:'' },
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

    useEffect( () => {
        async function loginProcess() {
        if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            navigate("/login");
        } else {
            setCurrentUser(
            await JSON.parse(
                localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
            )
            );
        }
        }
        loginProcess();
    }, []);

    useEffect( () => {
        async function getProfileData(){
            const data = await axios.get(profileGetRoute, {
                params: {
                    user: currentUser._id
                }
            });
            const info = data.data;
            
            if(info){
                setProfileData(info);
                if(info.socialMedia.length > 0){
                    setSocialInputForm(info.socialMedia);
                }
                if(info.email.length > 0){
                    setEmailInputForm(info.email);
                }
                if(info.phoneNumber.length > 0){
                    setNumberInputForm(info.phoneNumber);
                }
                if(info.profession.length > 0){
                    setProfessionInputForm(info.profession);
                }
                if(info.address.length > 0){
                    setAddressInputForm(info.address);
                }
                if(info.generalInfo.length > 0){
                    setGeneralInputForm(info.generalInfo);
                }
            }

        }
        if(currentUser){
            getProfileData();
        }
    }, [currentUser])

    useEffect( ()=> {
      document.body.classList.add('bodyScroll');
  },[])

  
    const UpdateProfile = async (e) => {
        const userData = await JSON.parse(
            localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY));
      const body = {
                      id:profileData._id,
                      email:emailInputForm,
                      socialMedia: socialInputForm,
                      phoneNumber: numberInputForm,
                      address: addressInputForm,
                      generalInfo: generalInputForm, 
                      profession: professionInputForm, 
                      user:userData._id}
      e.preventDefault();
      const { data } = await axios.patch(profileUpdateRoute, body);
      console.log(data);
      if(data){
        navigate("/user/profile");
      }
      
    };
    return (
      <Container className="mt-5 mb-2">
        <Form className="form-section">
          <GeneralInfo inputFields={generalInputForm} setInputFields={setGeneralInputForm}/>
          <Email inputFields={emailInputForm} setInputFields={setEmailInputForm}/>
          <PhoneNumber inputFields={numberInputForm} setInputFields={setNumberInputForm} />
          <Address inputFields={addressInputForm}  setInputFields={setAddressInputForm}/>
          <Profession inputFields={professionInputForm} setInputFields={setProfessionInputForm}/>
          <SocialMedia inputFields={socialInputForm} setInputFields={setSocialInputForm} />
          <Button
            variant="dark"
            type="button"
            as={Col}
            sm={12}
            className="py-3 my-3"
            onClick={UpdateProfile}
          >
            Update Profile
          </Button>
        </Form>
      </Container>
    );
  };
  
  export default EditProfile;