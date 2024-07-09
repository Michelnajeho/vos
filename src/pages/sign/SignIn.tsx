import { useNavigate } from "react-router-dom";
import Container from '../../components/layout/Container';

const Login = () => {

  const navigate = useNavigate();

  const goFindIdentifier = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    navigate("/find-identifier", {
      replace : false,
      state: {
        data:"asd"
      },
    });
  }

  
  const goFindPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    navigate("/find-password", {
      replace : false,
      state: {
        data:"asd"
      },
    });
  }

  return (
    <Container>
      로그인 페이지
      <button onClick={goFindIdentifier}>아이디찾기</button>
      <button onClick={goFindPassword}>비밀번호찾기</button>
    </Container>
  )
}

export default Login;