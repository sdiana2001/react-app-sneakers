import './App.scss'
import search from "../public/icons/search.svg";
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer'

function App() {
 
    return (
      <div className="wrapper clear">
        <Drawer />
         <Header />         

        <div className="content p-40">
          <div className="d-flex align-center justify-between">
            <h1 className="mb-40">Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src={search} alt="Search" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>
          <div className="d-flex">
           <Card />
          </div>
        </div>
      </div>
    );
  };


export default App
