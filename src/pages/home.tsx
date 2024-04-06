import Banner from '../compoments/Banner'
// import Header from '../compoments/Footer'
import Slideshow from '../compoments/slideshow'
import Galley from '../compoments/galley'
import styled from 'styled-components'
import { product } from '../interfaces/product'
import { NavLink } from 'react-router-dom'
import Footer from '../compoments/Footer'
type Prop = {
  products: product[]
}
const List = styled.div`
  .Danhsach {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const Home = ({ products }: Prop) => {
  return (
    <div>
      <Banner />
      <Slideshow />
      <div className='product-list'>
        <h1>List Animals</h1>
        <List className='Danhsach'>
          {products.map((data) => (
            <div className='card' key={data.id}>
              <NavLink to={`/shop/${data.id}`}>
                <img src={data.images} alt={data.title} width={231} />
              </NavLink>
              <NavLink to={`/shop/${data.id}`}>
                <h2>{data.title}</h2>
              </NavLink>
              <p className='price'>{data.price}$</p>
              <p>{data.description}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          ))}
        </List>
      </div>
      <Galley />
      <Footer />
    </div>
  )
}

export default Home
