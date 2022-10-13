
import Rreact from 'react'
import At02 from './layout/Amthanhh/At02';
// import Amthanh from './layout/Amthanh';
import AppleWatch from './layout/AW/AppleWatch';
import Aw01 from './layout/AW/Aw01';
import Bodyy from './layout/Home/BodyHome';
import Footer from './layout/footer/footer';

import Header from './layout/header/Header';
import Phone01 from './layout/iPhonee/iPhone01';
import Phone02 from './layout/iPhonee/iPhone02';
import Phone03 from './layout/iPhonee/iPhone03';
import Phone04 from './layout/iPhonee/iPhone04';
import Mac01 from './layout/Macc/Mac01';
import Mac02 from './layout/Macc/Mac02';
import Mac03 from './layout/Macc/Mac03';
import Phukien from './PK/Phukien';
import Phukien01 from './PK/Phukien01';
import Phukien02 from './PK/Phukien02';
import Main from './layout/iPhonee/iPhone';
// import Mac from './layout/Mac';
import { Route, Link, Routes } from 'react-router-dom'
import Mac from './layout/Macc/Mac';
import Amthanh from './layout/Amthanhh/Amthanh';
import Aw02 from './layout/AW/Aw02';
import At01 from './layout/Amthanhh/At01';
import About from './layout/All-About/all-about'
import Login from './layout/log in/login';
import Register from './layout/regester/all-regester';
import Detailip from './page/Detail_iPhone';
import Cart from './page/Cart';




function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/Phukien01' element={<Phukien01 />} />
        <Route path='/Phukien02' element={<Phukien02 />} />
        <Route path='/Mac01' element={<Mac01 />} />
        <Route path='/Mac02' element={<Mac02 />} />
        <Route path='/Mac03' element={<Mac03 />} />
        <Route path='/Watch01' element={<Aw01 />} />
        <Route path='/Watch02' element={<Aw02 />} />
        <Route path='/Amthanh01' element={<At01 />} />
        <Route path='/Amthanh02' element={<At02 />} />
        <Route path='/iPhone14' element={<Phone01 />} />
        <Route path='/iPhone13' element={<Phone02 />} />
        <Route path='/iPhone12' element={<Phone03 />} />
        <Route path='/iPhone11' element={<Phone04 />} />
        <Route path='/' element={<Bodyy />} />
        <Route path='/iPhone' element={<Main />} />
        <Route path='/Mac' element={<Mac />} />
        <Route path='/Watch' element={<AppleWatch />} />
        <Route path='/Amthanh' element={<Amthanh />} />
        <Route path='/Phukien' element={<Phukien />} />
        <Route path='/About' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/detail/:id' element={<Detailip/>}/>
        <Route path='/Cart' element={ <Cart/> } />
     
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
