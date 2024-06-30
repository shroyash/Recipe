
import './App.css';
import Sidenavbar from './Component/Sidenavbar';
import Router from './Router/Router';
import HeroSlider from './Component/Slider';
import { RecipeProvider } from './Context/RecipeContext';

function App() {
  

  return (
    <>
      <div className="nav">
        <Sidenavbar />
      </div>
      <div className="slider">
        <HeroSlider/>
      </div>
     
      
      <RecipeProvider>
      <Router />
      </RecipeProvider>
    </>
  );
}

export default App;

