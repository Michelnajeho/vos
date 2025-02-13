import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Container from '../../components/layout/Container';

const SignUp = () => {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const idInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  }
  
  const passwordInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const singUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // validation
    // 
    console.log('id:', id);
    console.log('password:', password);

    navigate("/sign-in", {
      replace : false,
      state: {
        data:"asd"
      },
    });

  }

  return (
    <Container>
      <div>
        <h1>회원가입 페이지</h1>
        <div>
          <input type="text" id="id" placeholder='아이디' onChange={idInputOnChange} />
          <input type="password" id="password" placeholder='비밀번호' onChange={passwordInputOnChange} />
          <button onClick={singUp}>회원가입</button>
        </div>
      </div>
    </Container>
  )
}

export default SignUp;