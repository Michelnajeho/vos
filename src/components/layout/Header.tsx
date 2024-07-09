import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            HEADER
            <Link to='/'>Home</Link>
            <Link to='/sign-in'>로그인</Link>
            <Link to='/membership-agree'>회원가입</Link>
        </header>
    )
}

export default Header;