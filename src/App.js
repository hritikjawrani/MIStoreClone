import './App.css';
import Prenavbar from './Components/Prenavbar';
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Offers from "./Components/Offers"
import Heading from "./Components/Heading"
import Banner from './Components/Banner'
import HotAccessoriesMenu from "./Components/HotAccessoriesMenu"
import StarProducts from './Components/StarProducts'
import ProductReview from './Components/ProductReview'
import data from "./data/data.json"
import HotAccessories from './Components/HotAccessories';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Footer from './Components/Footer'

 function App() {
  return (<Router>
    
    <Prenavbar/>
    <Navbar/>
 
    
    
    <Slider start={data.banner.start}/>
  <Offers offer={data.offer}/>
<Heading text="STAR PRODUCTS"/>
<StarProducts starProduct={data.starProduct}/>
<Heading text="HOT ACCESSORIES"/>
<HotAccessoriesMenu/>

       <Route exact path="/music">
       <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
       </Route>
       <Route exact path="/smartDevice">
       <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />
       </Route>
       <Route exact path="/home">
       <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />
       </Route>
       <Route exact path="/lifestyle">
       <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />
       </Route>
       <Route exact path="/mobileAccessories">
       <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />
       
       <Heading text="PRODUCTS REVIEWS"/>

       <ProductReview productReviews={data.productReviews}/>

       </Route>

       <Heading text="IN THE PRESS"/>
  
    <Banner banner={data.banner}/>
 
 <Footer/>

  </Router>
   );
}

export default App;
