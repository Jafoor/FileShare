import {
    Form,
    Col,
    Row
  } from "react-bootstrap";

  import IconButton from '@material-ui/core/IconButton';
  import RemoveIcon from '@material-ui/icons/Remove';
  import AddIcon from '@material-ui/icons/Add';
  
  import { v4 as uuidv4 } from 'uuid';


import React from 'react'

const PhoneNumber = ({inputFields, setInputFields}) => {

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
    setInputFields([...inputFields, { id: uuidv4(),  numberTitle: '', number: '' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }


  return (

    
    <div>
        <h1 className="text-dark font-weight-bold py-4">Phone Number</h1>
        { inputFields.map((inputField) => (
          <div key={inputField.id}> 
        <Form as={Row}>
          <Form.Group as={Col} sm={12} md={6}>
            <Form.Label>Number Title</Form.Label>
            <Form.Control
              name="numberTitle"
              type="text"
              placeholder="Work, Personal.."
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.numberTitle}
              required
            />
          </Form.Group>
          <Form.Group as={Col} sm={12} md={6}>
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              name="number"
              type="text"
              placeholder="01846825017"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.number}
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

export default PhoneNumber;