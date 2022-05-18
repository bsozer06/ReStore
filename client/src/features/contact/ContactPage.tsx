import { Button, ButtonGroup, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { decrement, increment } from './counterReducer'

export default function ContactPage() {

  const dispatch = useAppDispatch();
  const { data, title } = useAppSelector(state => state.counter);

  return (
    <>
      <Typography variant='h2'>{title}</Typography>
      <Typography variant='h2'>{data}</Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(decrement()) } variant="contained" color="error">-</Button>
        <Button onClick={() => dispatch(increment()) } variant="contained" color="primary">+</Button>
        <Button onClick={() => dispatch(increment(10)) } variant="contained" color="secondary">+10</Button>
      </ButtonGroup>

    </>

  )
}
