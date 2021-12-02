import './App.css';
import { useContext }  from 'react'
import { AuthRouter } from './routes/AuthRouter';
import { UnAuthRouter } from './routes/UnAuthRouter';
import AuthContext from './context/AuthContext';

function App() {

  const {auth} = useContext(AuthContext)

  return (
    <div className="App">
      <header className="App-header">
        {auth?<AuthRouter /> : <UnAuthRouter />}
      </header>
    </div>
  );
}

export default App;
