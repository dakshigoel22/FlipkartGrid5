import "./Profile.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { signout, updateName, updateAge,updateGender, updateEmail } from "../store/user/userSlice";

function Profile() {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  return <div className="profile">
    <h1 className="heading">Your Profile</h1>
    <div className="profile-content">
      <div className="grid-item">
        <FormControl fullWidth>
          <TextField id="name-input"
                     aria-describedby="my-helper-text"
                     label="Name"
                     value={user.name}
                     onChange={(e) => {
                      dispatch(updateName(e.target.value))
                    }} />
        </FormControl>
      </div>
      <div className="grid-item">
        <FormControl fullWidth>
          <TextField id="email-input"
                     aria-describedby="my-helper-text"
                     label="Email"
                     value={user.email}
                     onChange={(e) => {
                      dispatch(updateEmail(e.target.value))
                     }} />
        </FormControl>
      </div>
      <div className="grid-item">
        <FormControl fullWidth>
          <TextField id="outlined-basic"
                     inputProps={{ type: 'number'}}
                     label="Age"
                     variant="outlined"
                     value={user.age}
                     onChange={(e) => {
                      dispatch(updateAge(e.target.value))
                     }}
                    />
        </FormControl>
      </div>

      <FormControl fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          value={ user.gender }
          onChange={(e) => {
            dispatch(updateGender(e.target.value))
          }}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div className="bottom-buttons">
      <Button variant="contained">Save</Button>
      <Button variant="outlined" color="error" onClick={(e) => {
        dispatch(signout())
      }}>Sign Out</Button>
    </div>
  </div>;
}

export default Profile;