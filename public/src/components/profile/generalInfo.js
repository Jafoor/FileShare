import {
    Form,
    Col,
    FormGroup,
    FormLabel,
    FormControl,
    Row
  } from "react-bootstrap";

  import IconButton from '@material-ui/core/IconButton';
  import RemoveIcon from '@material-ui/icons/Remove';
  import AddIcon from '@material-ui/icons/Add';
  
  import { v4 as uuidv4 } from 'uuid';


import React from 'react'

const GeneralInfo = ({inputFields, setInputFields}) => {

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

//   const handleAddFields = () => {
//     setInputFields([...inputFields, { id: uuidv4(),  fullName: '', bio: '', birthday: '' }])
//   }

//   const handleRemoveFields = id => {
//     const values  = [...inputFields];
//     values.splice(values.findIndex(value => value.id === id), 1);
//     setInputFields(values);
//   }


  return (

    
    <div>
        <h1 className="text-dark font-weight-bold py-4">General Information</h1>
        { inputFields.map((inputField, index) => (
          <div key={inputField.id}> 
        <Form as ={Row}>
          <Form.Group as={Col} sm={12} md={6}>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name="fullName"
              type="text"
              placeholder="Abu Jafor Mohamamd Saleh"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.fullName}
              required
            />
          </Form.Group>
          <Form.Group as={Col} sm={12} md={6}>
            <Form.Label>Bio</Form.Label>
            <Form.Control
              name="bio"
              type="text"
              placeholder="Hello.."
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.bio}
              required
            />
          </Form.Group>
          <Form.Group as={Col} sm={12} md={6}>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              name="birthday"
              type="date"
              placeholder=""
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.birthday}
              required
            />
          </Form.Group>
        </Form>

        {/* <div className="text-center">
        <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
        <RemoveIcon />
      </IconButton>
      <IconButton
        onClick={handleAddFields}
      >
        <AddIcon />
      </IconButton>
      </div> */}

        </div>
        ))}
    </div>
  )
}

export default GeneralInfo;