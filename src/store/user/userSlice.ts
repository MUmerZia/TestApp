import {createSlice} from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    user: { 
    },
    signup:{ 
    },
    forgotEmail:'',
    token: null,
    otp: '',
    initalRoute: 'Splash',
    route: true,
    routeName: true,
    notifications: [],
    reminder: [],
  },
  reducers: {
    saveToken: (state, {payload}) => {
      state.token = payload;
    },
    saveInitalRoute: (state, {payload}) => {
      state.initalRoute = payload;
    },
    saveUserData: (state, {payload}) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = '';   
    },
    saveLogout: (state, {payload}) => {
      state.user = payload;
    },
    saveRoute: (state, {payload}) => {
      state.route = payload;
    },
    saveRouteName: (state, {payload}) => {
      state.routeName = payload;
    },
    saveForgotEmail: (state, {payload}) => {
      state.forgotEmail = payload;
    },
    saveSingup: (state, {payload}) => {
      state.signup = payload;
    },
    saveOtp: (state, {payload}) => {
      state.otp = payload;
    },
  },
});

export const {
  saveToken,
  saveInitalRoute,
  saveUserData,
  saveLogout,
  saveRoute,
  saveRouteName,
  saveForgotEmail,
  saveSingup,
  saveOtp,
  logout 
} = usersSlice.actions;

export default usersSlice.reducer;
