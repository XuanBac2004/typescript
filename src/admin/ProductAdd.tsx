import { product } from '../interfaces/product'
import { SubmitHandler, useForm } from 'react-hook-form'
import App from '../App'
import { Button, Label, TextInput } from 'flowbite-react'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
type Props = {
  onAdd: (product: product) => void
}
const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().allow('')
})
const ProductAdd = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<product>({
    resolver: joiResolver(schemaProduct)
  })
  const onSubmit: SubmitHandler<product> = (data) => {
    console.log(data)
    onAdd(data)
  }
  return (
    <div>
      <div className='container'>
        <h6>add product</h6>
        <form className='flex max-w-md flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='title' />
            </div>
            <TextInput
              id='title'
              placeholder='title'
              type='text'
              {...register('title', { required: true, minLength: 3, maxLength: 200 })}
            />
            {errors.title && <span>This field is required</span>}
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='price' />
            </div>
            <TextInput
              id='price'
              placeholder='price'
              type='number'
              {...register('price', { required: true, min: 0 })}
            />
            {errors.price && <span>This field is required</span>}
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='title' />
            </div>
            <TextInput id='description' placeholder='description' type='text' {...register('description')} />
            {errors.description && <span>This field is required</span>}
          </div>
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default ProductAdd
