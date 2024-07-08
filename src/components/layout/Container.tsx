import Header from './Header';
import Footer from './Footer';

const Container = (props: {children: React.ReactNode}) => {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
}

export default Container;