import React, { useEffect, useState } from "react";
import Navigation from "./src/navigation/Navigation";
import { Provider } from "react-redux";
import { persister, store } from "./src/store/Store";
import { PersistGate } from 'redux-persist/integration/react'
import { GestureHandlerRootView } from "react-native-gesture-handler"; 
import { LogBox } from "react-native";     

LogBox.ignoreLogs([""]);

const App = () => {

  return (
    <Provider store={store}> 
      <PersistGate loading={null} persistor={persister}>
        <GestureHandlerRootView style={{ flex: 1 }}> 
            <Navigation /> 
        </GestureHandlerRootView>
      </PersistGate> 
    </Provider>
  );
};

export default App;
 
