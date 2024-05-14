import "./App.css";
import Header from './components/Header'
import Services from './components/Services'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Nav from "./components/Nav";


function App() {
    return (
        <>  
            <Nav></Nav>
            <Header></Header>
            <Services></Services>
            <Hero></Hero>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
}

export default App;
