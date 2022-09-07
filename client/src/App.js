import './App.scss';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/warehouses' element={<WarehouseDetails />}></Route>
          {/* <Route path='/inventory' element={<Inventory />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;