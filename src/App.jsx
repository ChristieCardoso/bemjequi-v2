import { Outlet } from 'react-router-dom';
import './App.scss'


export function App() {
  return (
    <div id='portfolio'>
      <Outlet />
    </div>
  );
}


