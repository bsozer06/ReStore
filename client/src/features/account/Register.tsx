import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Alert, AlertTitle, List, ListItem, ListItemText, Paper } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import agent from '../../app/api/agent';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';

// const theme = createTheme();

export default function Register() {

  // const history = useHistory()
  const [validationErrors, setValidationErrors] = useState([]);
  const { register, handleSubmit, formState: { isSubmitting, isValid, errors } } = useForm({
    mode: "all"
  })

  return (
    <Container component={Paper} maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 4 }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit((data) =>
          agent.Account.register(data).catch(error => setValidationErrors(error)))
        }
        noValidate sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          fullWidth
          label="Username"
          autoFocus
          {...register("username", { required: "Username is required" })}
          error={!!errors.username}
          helperText={errors?.username?.message}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Email address"
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
         {
        validationErrors.length > 0 &&
          <Alert severity='error'>
            <AlertTitle>Validation Error</AlertTitle>
            <List>
              {
                validationErrors.map(error => (
                  <ListItem key={error}>
                    <ListItemText>{error}</ListItemText>
                  </ListItem>
                ))
              }
            </List>
          </Alert>
      }
        <LoadingButton
          disabled={!isValid}
          loading={isSubmitting}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </LoadingButton>
        <Grid container>
          <Grid item>
            <Link to="/register" >
              {"Already have an account. Sign In"}
            </Link>
          </Grid>
        </Grid>
      </Box>

    </Container>
  )
}