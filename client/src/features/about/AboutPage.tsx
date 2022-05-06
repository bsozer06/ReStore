import { Button, ButtonGroup, Container, Typography } from '@mui/material'
import React from 'react'
import agent from '../../app/api/agent'

export default function AboutPage() {
  return (
    <Container>
      <Typography gutterBottom variant='h2'>Errors for testing purposes</Typography>
      <ButtonGroup>
        <Button variant='contained' onClick={() => agent.TestErrors.get400Error().catch(err => console.log(err))}>Test 400 error</Button>
        <Button variant='contained' onClick={() => agent.TestErrors.get401Error().catch(err => console.log(err))}>Test 401 error</Button>
        <Button variant='contained' onClick={() => agent.TestErrors.get404Error().catch(err => console.log(err))}>Test 404 error</Button>
        <Button variant='contained' onClick={() => agent.TestErrors.get500Error().catch(err => console.log(err))}>Test 500 error</Button>
        <Button variant='contained' onClick={() => agent.TestErrors.getValidationError().catch(err => console.log(err))}>Test validation error</Button>
      </ButtonGroup>
    </Container>
  )
}
