import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: '',
    token: null,
    email: '',
    age: null,
    gender: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    signout: (state, action) => {
      return {
        name: '',
        token: null,
        email: '',
        age: null,
        gender: null,
      }
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateGender: (state, action) => {
      state.gender = action.payload;
    }
  }
});

export const { updateAge, updateEmail, updateGender, updateName, setToken, signout } = userSlice.actions;

export default userSlice.reducer;
