import apiCall from '../../services';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {saveToken} from './userSlice';
import {setLoading, showMessage} from '../common'; 
 


export const login = createAsyncThunk('login',async (data: any, {dispatch}) => { 
  console.log('data: ', data);
    dispatch(setLoading(true));
    try {
      const res = await apiCall({path: 'login', method: 'POST',body: data});   
      // console.log('r: ', res);
        dispatch(saveToken(res?.token))
        dispatch(setLoading(false)); 
        return res; 
    } catch (error) { 
      dispatch(setLoading(false));
      dispatch(showMessage('user not found'));
    }
  },
);

 