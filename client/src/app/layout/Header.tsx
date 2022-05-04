import { AppBar, Toolbar, Typography } from '@mui/material'

export default function Header() {
  return (
    //margin bottom css
    <AppBar position='static' sx={{mb: 4}}>
        <Toolbar>
            <Typography variant='h6'>
                RE-STORE
            </Typography>
        </Toolbar>
    </AppBar>
  )
}
