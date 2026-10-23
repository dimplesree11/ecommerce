import HomePageNavbar from './componenets/navbar/homenavbarpage/HomePageNavbar'
import Layout from './layouts/Layout'
import CartPage from './pages/cartpage/CartPage'
import DetailPage from './pages/detailpage/DetailPage'
import HomePage from './pages/hompage/HomePage'
import LandingPage from './pages/landingpage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProccedToBuyPage from './pages/proccedtobuypage/ProccedToBuyPage'
import CheckOutPage from './pages/checkoutpage/CheckOutPage'
import ReturnReplacePage from './pages/returnpage/returnorreplace/ReturnReplacePage'
import ListingPage from './pages/listingpage/ListingPage'
import OrdersPage from './pages/orderspage/OrdersPage'
import AddressPage from './pages/addresspage/AddressPage'
import TrackPage from './pages/trackpage/TrackPage'
import ViewOrderDetailsPage from './pages/vieworderdetailspage/ViewOrderDetailsPage'
import CheckOutChangeAddressMob from './pages/checkoutpage/CheckOutChangeAddressMob'
import AddDeliveryInstruc from './pages/checkoutpage/AddDeliveryInstruc'
import MenuPage from './pages/Menupage/MenuPage'
import ForestEssentials from './pages/forestessentials/ForestEssentials'

const App = () => {
  return (
   <BrowserRouter>
   <Layout>
    <Routes>
      <Route path='/LandingPage' element={< LandingPage/>}/>
      <Route path='/' element={< HomePage/>}/>
      <Route path='/DetailPage' element={< DetailPage/>}/>
      <Route path='/CartPage' element={< CartPage/>}/>
      <Route path='/ProceedToBuyPage' element={< ProccedToBuyPage/>}/>
      <Route path='/CheckOutPage' element={< CheckOutPage/>}/>
      <Route path='/ReturnReplacePage' element={< ReturnReplacePage/>}/>
      <Route path='/ListingPage' element={< ListingPage/>}/>
      <Route path='/OrdersPage' element={< OrdersPage/>}/>
      <Route path='/AddressPage' element={< AddressPage/>}/>
      <Route path='/TrackPage' element={< TrackPage/>}/>
      <Route path='/ViewOrderDetailsPage' element={< ViewOrderDetailsPage/>}/>
      <Route path='/CheckOutChangeAddressMob' element={< CheckOutChangeAddressMob/>}/>
      <Route path='/AddDeliveryInstruc' element={< AddDeliveryInstruc/>}/>
      <Route path='/MenuPage' element={< MenuPage/>}/>
      <Route path='/ForestEssentials' element={< ForestEssentials/>}/>
    </Routes>
   </Layout>
   </BrowserRouter>
  )
}

export default App