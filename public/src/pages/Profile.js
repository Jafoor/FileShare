import React, { useEffect, useState } from 'react';
import { profileGetRoute } from '../utils/APIRoutes';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(undefined);
    const [profileData, setProfileData] = useState({});
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

    useEffect( ()=> {
      document.body.classList.add('bodyScroll');
  },[])


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
            }
            
            // console.log(profileData);
        }
        if(currentUser){
            getProfileData();
        }
    }, [currentUser])
  return (
    <div>
        { Object.keys(profileData).length === 0  ? (
        <div> Loading..</div>
    ) :

    (
        <div className='padding-10' >
        <div className="container  padding-top-xl">
            <div className="main-body">
            <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                  <img
              src={`data:image/svg+xml;base64,${currentUser.avatarImage}` }
              alt=""
              className="rounded-circle" width="150"
            />
                    <div className="mt-3">
                      <h4>{currentUser.fullName}</h4>
                      <p className="text-secondary mb-1">{profileData.bio}</p>
                      <button className="btn btn-primary" onClick={ (e) => {navigate("/user/profile/update")}}>Edit</button>
                      <button className="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                { profileData.socialMedia.map((item) => (
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  
                    <h6 class="mb-0">{item.socialwebsite}</h6>
                    <span class="text-secondary">{item.socialwebsitelink}</span>
                  </li>
                ))}
                </ul>
              </div>

              

              </div>
            
              <div className="col-md-8">

              <div className="row gutters-sm">

              { profileData.generalInfo.length > 0 ? (
                  <div className="col-sm-6 mb-3">
                  <div className="card h-auto">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">General Information</h6>
                      { profileData.generalInfo.map( (item) => (
                        <>
                        <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {item.fullName}
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Bio</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {item.bio}
                        </div>
                      </div>
                      <hr/>
                      <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Birthday</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {item.birthday}
                        </div>
                      </div>
                      <hr/>
                      </>
                      ))}
                      
                    </div>
                  </div>
                </div>
                ) : (
                  <></>
                )}

                <div className="col-sm-6 mb-3">
                  <div className="card h-auto">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">Email Address</h6>
                      { profileData.email.map( (item) => (
                        <>
                        <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">{item.emailTitle}</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {item.emailAddress}
                        </div>
                      </div>
                      <hr/>
                      </>
                      ))}
                      
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="card h-auto">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">Address</h6>
                      { profileData.address.map( (item) => (
                        <>
                        <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">{item.addressTitle}</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {item.address}
                        </div>
                      </div>
                      <hr/>
                      </>
                      ))}
                      
                    </div>
                  </div>
                </div>
                { profileData.phoneNumber.length > 0 ? (
                  <div className="col-sm-6 mb-3">
                  <div className="card h-auto">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">Phone Number</h6>
                      { profileData.phoneNumber.map( (item) => (
                        <>
                        <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">{item.numberTitle}</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {item.number}
                        </div>
                      </div>
                      <hr/>
                      </>
                      ))}
                      
                    </div>
                  </div>
                </div>
                ) : (
                  <></>
                )}

                { profileData.profession.length > 0 ? (
                  <div className="col-sm-6 mb-3">
                  <div className="card h-auto">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">Profession</h6>
                      { profileData.profession.map( (item) => (
                        <>
                        <div className="row">
                        <div className="col-sm-3">
                          <h6 className="mb-0">{item.institution}</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {item.position}
                        </div>
                      </div>
                      <hr/>
                      </>
                      ))}
                      
                    </div>
                  </div>
                </div>
                ) : (
                  <></>
                )}
                

              </div>



            </div>
            
            

              
              </div>
            </div>
        </div>

        <hr/>
        <hr/>

        <ul class="list-group">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        

    </div>
    )
        
    }
    </div>
  )
}

export default Profile;