import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import React from 'react';

import './App.css';
import Home from './components/Home';


import {register} from 'swiper/element/bundle';

register()


function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
