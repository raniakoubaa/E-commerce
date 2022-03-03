import React from 'react'
import { Carousel } from 'react-bootstrap'
import ListProduct from '../Product/ListProduct'

const Home = () => {
  return (
    <div>
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.istore.com.tn/modules/ps_imageslider/images/f0f52d5a70da66211ce8caae5f00e0359c6e8aa2_iPhone%2013%20&%20mini%20_%20cover.png" width="250px"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.istore.com.tn/modules/ps_imageslider/images/c7082e61e1e207f99f568e8f45ba0d84b4349614_iPhone%2013%20Pro%20&%20Pro%20Max%20_%20cover.png"  width="250px"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.istore.com.tn/modules/ps_imageslider/images/49f80f0843c93d7831e7e627b4957261cd4fd5b1_iphopne%2012%20Pro%20%20banner%20hero.png"  width="50px"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<ListProduct/>
        </div>
  )
}

export default Home