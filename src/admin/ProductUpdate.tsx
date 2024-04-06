import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { product } from '@/interfaces/product'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { useParams } from 'react-router-dom'
import instance from '../apis/index'
type Props = {
  onEdit: (product: product) => void
}

const productSchema = Joi.object({
  title: Joi.string().required().min(3),
  price: Joi.number().required().min(0),
  description: Joi.string().allow('', null)
})

const ProductEdit = ({ onEdit }: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<product | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<product>({
    resolver: joiResolver(productSchema)
  })
  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get(`/${id}`)
      setProduct(data)
    })()
  }, [id])
  const onSubmit = (product: product) => {
    onEdit({ ...product, id })
  }

  return (
    <div className='container'>
      <form className='max-w-sm mx-auto' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-5'>
          <label htmlFor='title' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            title
          </label>
          <input
            type='text'
            id='title'
            {...register('title', { required: true, minLength: 3, maxLength: 255 })}
            defaultValue={product?.title}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='name@xyz.com'
          />
          {errors.title && <div className='text-danger'>{errors.title.message}</div>}
        </div>
        <div className='mb-5'>
          <label htmlFor='price' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            price
          </label>
          <input
            type='number'
            id='price'
            {...register('price', { required: true, minLength: 3, maxLength: 255 })}
            defaultValue={product?.price}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
          />
          {errors.price && <div className='text-danger'>{errors.price.message}</div>}
        </div>
        <div className='mb-5'>
          <label htmlFor='description' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            description
          </label>
          <input
            type='text'
            id=' description'
            {...register('description')}
            defaultValue={product?.description}
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
          />
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          submit
        </button>
      </form>
    </div>
  )
}

export default ProductEdit
