import TextField from '@mui/material/TextField';
function PassWord()
{
     return(
          <TextField
              margin="normal"
              required
              width='320px'
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
          />
     );
}
export default PassWord;