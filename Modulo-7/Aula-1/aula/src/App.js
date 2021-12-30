import './App.css';
import  Header  from "./components/Header";
import  Menu  from "./components/Menu";
import  Body  from "./components/Body";

function App() {
  let userName = 'Mizael';

  return (
    <div className="App">
      <Header userName/>
      <section>
        <Menu />
        <Body />
      </section>

    </div>
  );
}

export default App;
