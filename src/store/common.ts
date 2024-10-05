import {createSlice} from '@reduxjs/toolkit';  
import Toast from 'react-native-simple-toast';  

const initialState = {
  loading: false, 
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading: (state, {payload}) => {
      state.loading = payload;
    }, 
    showMessage: (_, {payload}) => {
      Toast.show(payload, Toast.SHORT, {
        backgroundColor: 'transparent',
      });
    }, 
  },
});

export const {setLoading, showMessage} = commonSlice.actions;

export default commonSlice.reducer;
