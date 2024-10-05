import axios from 'axios';
import {Alert} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
export const BASE_URL = 'https://reqres.in/api/';

interface props {
  path: string;
  isForm?: boolean;
  method?: string;
  url?: any;
  body?: any;
  params?: any;
  token?: any;
}

const apiCall = async ({ path, method = 'GET', isForm, url = null, body = null, token = null, params = null }: props) => {
  let urlString = BASE_URL + path; 
  let headers: any = {  ...(isForm ? { 'Content-Type': 'multipart/form-data' } : { 'Content-Type': 'application/json', Accept: 'application/json' })};
  let options: any = {  method,  };
  if (token) headers['authorization'] = 'Bearer ' + token;
  options.headers = headers;
  if (body) options.data = body;
  if (params) options.params = params; 
  if (url) urlString = url;
  options.url = urlString;

  try {
    const response = await axios(options); 
    if (response.data?.status_code === 400) { 
      console.log('===');
      // Alert.alert();
    }
    return response.data;
  } catch (error) {
    console.log('api error: ', error); 
    const networkState = await NetInfo.fetch();

    if (networkState.isConnected === false) {
      Alert.alert('', 'No Internet Connection');
    } 
    throw error;
  }
};
 
export default apiCall;
