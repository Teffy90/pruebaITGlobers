//import './App.css';
import NavBar from './components/NavBar';
import ImgCarousel from './components/ImgCarousel';
import AutoLayoutBody from './components/Body';
import SocialNetwork from './components/SocialNetwork';
import ValidationInputEmail from './components/Newslatter';
import { Footer } from './components/Footer';
import { Copyright } from './components/Copyright';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
       <ImgCarousel/>
       <AutoLayoutBody/>
       <SocialNetwork/>
       <ValidationInputEmail/>
       <Footer/>
       <Copyright/>

      </header>
    </div>
  );
}

export default App;
