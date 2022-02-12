import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Nutri from './pages/Nutri';
import Item from './pages/Item';

export default function Pages() {
  const [user, setUser] = useState({name:'João Miranda', link:'miranda', id:'11'});
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard user={user}/>}>
          <Route path="/home" element={<Home>TESTE</Home>}/>
          <Route path="/item/:id" element={<Item/>}/>
          <Route path="/nutri/:id" element={<Nutri user={user}/>}/>
        </Route>
        <Route path="*" element={<h1>NOT FOUND!</h1>}/>
      </Routes>
    </Router>
  );
}