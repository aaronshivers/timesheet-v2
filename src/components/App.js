import React, { useContext } from 'react'
import { Container, Button } from 'react-bootstrap'
import Context from '../context/context'
import Navigation from './Navigation'
import JobsList from './JobsList'

const App = () => {
  const { uid } = useContext(Context)

  return (
    <>
      <Navigation />
      <Container>
        <Button href="/newjob">New Job</Button>
        <JobsList />
      </Container>
    </>
  )
}

export default App
