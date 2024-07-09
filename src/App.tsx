import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import MembershipAgree from './pages/sign/MembershipAgree';
import SignUp from './pages/sign/SignUp';
import SignIn from './pages/sign/SignIn';
import FindIdentifier from './pages/find/FindIdentifier';
import FindPassword from './pages/find/FindPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/membership-agree" element={<MembershipAgree />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/find-identifier" element={<FindIdentifier />}></Route>
        <Route path="/find-password" element={<FindPassword />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
