import "./Profile.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';


function Profile() {
  return <div className="profile">
    <h1 className="heading">Your Profile</h1>
    <div className="content">
      <div className="grid-item">
        <FormControl fullWidth>
          <InputLabel htmlFor="name-input">Name</InputLabel>
          <TextField id="name-input" aria-describedby="my-helper-text" />
        </FormControl>
      </div>
      <div className="grid-item">
        <FormControl fullWidth>
          <InputLabel htmlFor="email-input">Email address</InputLabel>
          <TextField id="email-input" aria-describedby="my-helper-text" />
        </FormControl>
      </div>
      <div className="grid-item">
        <FormControl fullWidth>
          <TextField id="outlined-basic" inputProps={{ type: 'number'}}  label="Age" variant="outlined" />
        </FormControl>
      </div>

      <FormControl fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="male"
          label="Age"
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
    </div>
  </div>;
}

export default Profile;