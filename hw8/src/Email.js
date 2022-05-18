import TextField from '@mui/material/TextField';
function Email()
{
     return(
          <TextField
              margin="normal"
              required
              width='320px'
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
          />
     );
}
export default Email;