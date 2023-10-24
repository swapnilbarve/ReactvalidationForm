import React from 'react';
import { router } from "./Routes";
import { RouterProvider } from 'react-router-dom';
import Axiostutorial from './Axiostutorial';

function App(){
  return(
  <RouterProvider router={router} />
  // <Axiostutorial />
  )
}
export default App;