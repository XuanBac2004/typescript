import './App.css'
import Home from './pages/home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/login'
import About from './pages/About'
import Register from './pages/register'
import NotFound from './pages/notFound'
// import Banner from './compoments/Banner'
// import Footer from './compoments/Footer'
import ProDetail from './pages/productDetail'
import Contact from './pages/lienhe'
import Dashboard from './admin/dashboard'
import { useEffect, useState } from 'react'
import { product } from './interfaces/product'
import instance from './apis'
import ProductAdd from './admin/ProductAdd'
import { getProducts, createProduct } from './apis/product'
import ProductEdit from './admin/ProductUpdate'
function App() {
  const [products, setProducts] = useState<product[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    // Tải danh sách sản phẩm khi component được render
    async function fetchData() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchData()
  }, [])

  //ADD
  // Xử lý thêm sản phẩm
  const handleAdd = async (product: product) => {
    try {
      const data = await createProduct(product)
      setProducts((prevProducts) => [...prevProducts, data])
      navigate('/admin')
    } catch (error) {
      console.error('Error adding product:', error)
    }
  }

  //EDIT
  // Lấy id từ URL
  const handleEdit = (product: product) => {
    ;(async () => {
      const { data } = await instance.put(`/${product.id}`, product)
      setProducts(products.map((item) => (item.id === data.id ? data : item)))
      navigate('/admin')
    })()
  }
  // DELETE
  const handleDel = (id: string | undefined) => {
    ;(async () => {
      const isConfirm = window.confirm('Are you sure?')
      if (isConfirm) {
        const data = await instance.delete(`/${id}`)
        console.log(data)
        setProducts(products.filter((item) => item.id !== id && item))
      }
    })()
  }
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Home products={products} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop/:id' element={<ProDetail />} />
          <Route path='/lienhe' element={<Contact />} />
        </Route>
        <Route path='/admin'>
          <Route index element={<Dashboard products={products} onDel={handleDel} />} />
          <Route path='/admin/add' element={<ProductAdd onAdd={handleAdd} />} />
          <Route path='/admin/edit/:id' element={<ProductEdit onEdit={handleEdit} />} />
          {/* Kiểm tra productToEdit có tồn tại không trước khi truyền */}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
