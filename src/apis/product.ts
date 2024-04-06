import { product } from '../interfaces/product'
import instance from '.'

export const getProducts = async () => {
  try {
    const { data } = await instance.get('/')
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProduct = async (id: number) => {
  try {
    const { data } = await instance.get(`/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const createProduct = async (product: product) => {
  try {
    const { data } = await instance.post(`/`, product)
    return data
  } catch (error) {
    console.log(error)
  }
}
