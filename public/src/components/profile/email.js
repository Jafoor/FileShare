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

const Email = ({inputFields, setInputFields}) => {

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(),  emailTitle: '', emailAddress: '' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }


  return (

    
    <div>
        <h1 className="text-dark font-weight-bold py-4">Email Address</h1>
        { inputFields.map((inputField, index) => (
          <div key={inputField.id}> 
        <Form as ={Row}>
          <Form.Group as={Col} sm={12} md={6}>
            <Form.Label>Email Title</Form.Label>
            <Form.Control
              name="emailTitle"
              type="text"
              placeholder="Work, Personal.."
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.emailTitle}
              required
            />
          </Form.Group>
          <Form.Group as={Col} sm={12} md={6}>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="emailAddress"
              type="text"
              placeholder="abujafor.cse11@gmail.com"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.emailAddress}
              required
            />
          </Form.Group>
        </Form>

        <div className="text-center">
        <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
        <RemoveIcon />
      </IconButton>
      <IconButton
        onClick={handleAddFields}
      >
        <AddIcon />
      </IconButton>
      </div>

        </div>
        ))}
    </div>
  )
}

export default Email;