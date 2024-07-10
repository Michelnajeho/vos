import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import * as validation from '../../utils/validation';
import Container from '../../components/layout/Container';

const SignUp = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [membershipAgreeData] = useState(location.state || {});

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  /**
   * Go to the Terms and Conditions of Use page when accessing the page without proceeding with the terms and conditions of use
   */
  useEffect(() => {
    if (validation.isEmpty(membershipAgreeData["contract"]) && membershipAgreeData["contract"] !== true) {
      console.log("Navigate to membership-agree page");
      navigate("/membership-agree", { replace: false });
    }
  }, [membershipAgreeData, navigate]);

  // if agreeInfo null erre message alert and redirect agree page


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

    // set user data and redirect login page
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