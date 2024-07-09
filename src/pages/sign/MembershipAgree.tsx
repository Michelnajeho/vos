import { useNavigate } from "react-router-dom";
import Container from '../../components/layout/Container';

const MembershipAgree = () => {

  const navigate = useNavigate();

  const nextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // agree validation

    navigate("/sign-up", {
      replace : false,
      state: {
        data:"asd"
      },
    });

  }

  return (
    <Container>
      회원가입 약관동의
      <button onClick={nextPage}>다음</button>
    </Container>
  )
}

export default MembershipAgree;