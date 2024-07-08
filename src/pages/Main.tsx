import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';

const Main = () => {
  return (
    <Container>
      Main
      <Link to='/login'>로그인</Link>
    </Container>
  )
}

export default Main;