import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import SignIn from './pages/sign/SignIn';
import SignUp from './pages/sign/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
