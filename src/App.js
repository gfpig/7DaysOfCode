import logo from './logo.svg';
//import "@fontsource/montserrat";
import './App.css';
import Menu from './components/Menu/Menu';
import AssinaturaNewsletter from './components/AssinaturaNewsletter/AssinaturaNewsletter';

function App() {
  return (
    <div className="App">
      <Menu />
      <AssinaturaNewsletter />
    </div>
  );
}

export default App;
