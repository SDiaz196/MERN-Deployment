import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AllStores from './components/AllStores';
import OneStore from './components/OneStore';
import EditStore from './components/EditStore';
import NewStore from './components/NewStore';

function App() {
  return (
    <div className="App">
      <h1>Store Finder</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/stores" />}></Route>
        <Route path="/stores" element={<AllStores />}></Route>
        <Route path="/stores/new" element={<NewStore />}></Route>
        <Route path="/stores/:id" element={<OneStore />}></Route>
        <Route path="/stores/:id/edit" element={<EditStore />}></Route>
      </Routes>
    </div>
  );

  }
export default App;

