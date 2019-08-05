import React, { useState, useEffect, useContext } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import Context from '../context/context'
import Navigation from './Navigation'
import { updateJob } from '../actions/jobs'

const EditJobPage = () => {
  const { uid, state, dispatch } = useContext(Context)
  const [ customer, setCustomer ] = useState('')
  const [ description, setDescription ] = useState('')

  const handleFormSubmit = e => {
    e.preventDefault()
    updateJob({ customer, description })(dispatch)(uid)
  }

  useEffect(() => console.log(state), [state])

  return (
    <>
      <Navigation />
      <Container>
        <h1>New Job</h1>
        <Form onSubmit={ handleFormSubmit }>
          <Form.Group controlId="customer">
            <Form.Label>Customer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Customer..."
              value={ customer }
              onChange={ e => setCustomer(e.target.value) }
            >
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description..."
              value={ description }
              onChange={ e => setDescription(e.target.value) }
            >
            </Form.Control>
          </Form.Group>
          <Button
            type="submit"
            size="lg"
          >
            Update Job
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default EditJobPage
