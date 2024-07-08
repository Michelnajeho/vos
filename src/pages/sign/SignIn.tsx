import { useLocation } from 'react-router-dom';
import Container from '../../components/layout/Container';

const Login = () => {

  const location = useLocation();
  const userInfo = { ...location.state };
  console.log(userInfo);

  return (
    <Container>
      로그인 페이지
    </Container>
  )
}

export default Login;