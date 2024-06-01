import logo from "./assets/logo.jpg"
import './App.css'
import ComingSoon from "./components/ComingSoon"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.instagram.com/shtreboss/"><img src={logo} className="App-logo" alt="logo" /></a>
        <ComingSoon />
      </header>
    </div>
  );
}

export default App
