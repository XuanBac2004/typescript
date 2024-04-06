import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { product } from '@/interfaces/product'
import instance from '../apis/index'

const ProDetail = () => {
  const { id } = useParams()
  const [product, setProducts] = useState<product | null>(null)
  useEffect(() => {
    const ProDetail = async () => {
      const { data } = await instance.get(`/${id}`)
      setProducts(data)
    }
    ProDetail()
  })
  return (
    <>
      <section className='py-5'>
        <div className='container'>
          <div className='row gx-5'>
            <aside className='col-lg-6'>
              <div className='border rounded-4 mb-3 d-flex justify-content-center'>
                <a
                  data-fslightbox='mygalley'
                  className='rounded-4'
                  target='_blank'
                  data-type='image'
                  href='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp'
                >
                  <img className='rounded-4 fit' src={product?.images} />
                </a>
              </div>
              <div className='d-flex justify-content-center mb-3'>
                <a
                  data-fslightbox='mygalley'
                  className='item-thumb border mx-1 rounded-2'
                  target='_blank'
                  data-type='image'
                  href='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp'
                  />
                </a>
                <a
                  data-fslightbox='mygalley'
                  className='item-thumb border mx-1 rounded-2'
                  target='_blank'
                  data-type='image'
                  href='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp'
                  />
                </a>
                <a
                  data-fslightbox='mygalley'
                  className='item-thumb border mx-1 rounded-2'
                  target='_blank'
                  data-type='image'
                  href='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp'
                  />
                </a>
                <a
                  data-fslightbox='mygalley'
                  className='item-thumb border mx-1 rounded-2'
                  target='_blank'
                  data-type='image'
                  href='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp'
                  />
                </a>
                <a
                  data-fslightbox='mygalley'
                  className='item-thumb border mx-1 rounded-2'
                  target='_blank'
                  data-type='image'
                  href='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp'
                  />
                </a>
              </div>
            </aside>
            <main className='col-lg-6'>
              <div className='ps-lg-3'>
                <h4 className='title text-dark'>{product?.title}</h4>
                <div className='d-flex flex-row my-3'>
                  <div className='text-warning mb-1 me-2'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fas fa-star-half-alt'></i>
                    <span className='ms-1'>4.5</span>
                  </div>
                  <span className='text-muted'>
                    <i className='fas fa-shopping-basket fa-sm mx-1'></i>154 orders
                  </span>
                  <span className='text-success ms-2'>{product?.stock}</span>
                </div>

                <div className='mb-3'>
                  <span className='h5'>{product?.price}$</span>
                  <span className='text-muted'>/per box</span>
                </div>

                <p>{product?.description}</p>

                <div className='row'>
                  <dt className='col-3'>Type:</dt>
                  <dd className='col-9'>Regular</dd>

                  <dt className='col-3'>Color</dt>
                  <dd className='col-9'></dd>

                  <dt className='col-3'>Material</dt>
                  <dd className='col-9'>Cotton, Jeans</dd>

                  <dt className='col-3'>Brand</dt>
                  <dd className='col-9'>{product?.brand}</dd>
                </div>

                <hr />

                <div className='row mb-4'>
                  <div className='col-md-4 col-6'>
                    <label className='mb-2'>Size</label>
                    <select className='form-select border border-secondary'>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div className='col-md-4 col-6 mb-3'>
                    <label className='mb-2 d-block'>quantity</label>
                    <div className='input-group mb-3'>
                      <button
                        className='btn btn-white border border-secondary px-3'
                        type='button'
                        id='button-addon1'
                        data-mdb-ripple-color='dark'
                      >
                        <i className='fas fa-minus'></i>
                      </button>
                      <input
                        type='text'
                        className='form-control text-center border border-secondary'
                        placeholder='14'
                        aria-label='Example text with button addon'
                        aria-describedby='button-addon1'
                      />
                      <button
                        className='btn btn-white border border-secondary px-3'
                        type='button'
                        id='button-addon2'
                        data-mdb-ripple-color='dark'
                      >
                        <i className='fas fa-plus'></i>
                      </button>
                    </div>
                  </div>
                </div>
                <button>
                  <a href='#' className='btn btn-warning shadow-0'>
                    {' '}
                    Buy now{' '}
                  </a>
                </button>
                <button>
                  <a href='#' className='btn btn-primary shadow-0'>
                    {' '}
                    <i className='me-1 fa fa-shopping-basket'></i> Add to cart{' '}
                  </a>
                </button>
                <button>
                  <a href='#' className='btn btn-light border border-secondary py-2 icon-hover px-3'>
                    {' '}
                    <i className='me-1 fa fa-heart fa-lg'></i> Save{' '}
                  </a>
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProDetail
