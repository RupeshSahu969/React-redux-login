
import './App.css';
import { useSelector } from 'react-redux/es/exports';
import Login from './component/Login';
import { selectUser } from './features/userSlice';
import {Logout} from "./component/Logout"
function App() {

const user =useSelector(selectUser)

  return (
    <div className="App">
      {user ? <Logout/> :<Login/>}
  
    </div>
  );
}

export default App;
