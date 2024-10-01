import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './store/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import AddProductPage from './pages/AddProductPage/AddProductPage';
// import FrontPage from './pages/AddProductPage/FrontPage';
// import AddProductOrignal from './Backup/AddProductOrignal';
// import AddProduct from './pages/AddProductPage/AddProduct';
// import AddProductTwo from './pages/AddProductPage/AddProductTwo';
// import Productt from './Backup/Productt';
// import Datee from './Backup/Datee';
//  import TestStore from './pages/Store/TestStore';

// import Multis from './pages/MultiStepForm/Multis';
// import MultiStepForm from './pages/MultiStepForm/MultiStepForm';
// import MultiStep from './pages/MultiStepForm/MultiStep';
//  import Store from './pages/Store/Store';
// import StoreTiming from './components/StoreTiming/StoreTiming';
// import Store from './pages/Store/Store';
// import DaysTime from './components/StoreTiming/DaysTime';
//  import FormData from './Backup/FormData';
// import Customize from './pages/AddProductPage/Customize'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
   {/* <AddProduct/> */}
   {/* <AddProductTwo/> */}
      {/* <MultiStep/> */}
     <App /> 
      {/* <MultiStepForm/> */}
      {/* <Multis/> */}
      {/* <Store/> */}
      {/* <DaysTime/> */}
      {/* <StoreTiming/> */}
      {/* <Datee/> */}
      {/* <Productt/> */}
      {/* <AddProductOrignal/> */}
      {/* <AddProductPage/> */}
      {/* <FrontPage/> */}
     {/* <FormData/> */}
      {/* <Customize/> */}
      {/* <TestStore/>   */}
      <ToastContainer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
    </AuthProvider>
  </React.StrictMode>
);
reportWebVitals();
