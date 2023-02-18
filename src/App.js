import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProduvtList';
import Form from './components/Form/Form';
import WebFont from 'webfontloader';

function App() {

  const {onToggleButton, tg} = useTelegram();

  useEffect(()=>{
    tg.ready();
  },[]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto','Montserrat']
      }
    });
   }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route index element={<ProductList />}/>
          <Route path={'form'} element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
