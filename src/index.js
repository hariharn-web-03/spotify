import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Main } from './navtabs/main';

// import { Props,Profile,Input1,Input2  } from './demo';


// let profimag = prompt("Please enter the URL");
// let profname = prompt("Please enter the name");
// let profbio = prompt("Please enter the bio");
// let des = prompt("Add your description");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Props />
    <Profile imag={profimag}/>
    <Input1 name={profname} bio={profbio} />
    <Input2 desc={des}/> */}

    <BrowserRouter>
    <Link to={"/"}><Main/></Link>
    <Routes>
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
