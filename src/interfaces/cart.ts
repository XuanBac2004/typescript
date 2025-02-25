export type cart = {
  id: number
  products: Array<pro>
  total: number
  discountedTotal: number
  userId: number
  totalProducts: number
  totalQuantity: number
}

type pro = {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedPrice: number
  thumbnail: string
}

const carts: cart = {
  id: 19,
  products: [
    {
      id: 43,
      title: 'frock gold printed',
      price: 600,
      quantity: 3,
      total: 1800,
      discountPercentage: 15.55,
      discountedPrice: 1520,
      thumbnail: 'https://cdn.dummyjson.com/product-images/43/thumbnail.jpg'
    },
    {
      id: 77,
      title: 'Rose Ring',
      price: 100,
      quantity: 3,
      total: 300,
      discountPercentage: 3.22,
      discountedPrice: 290,
      thumbnail: 'https://cdn.dummyjson.com/product-images/77/thumbnail.jpg'
    },
    {
      id: 50,
      title: 'Women Shoes',
      price: 36,
      quantity: 3,
      total: 108,
      discountPercentage: 16.87,
      discountedPrice: 90,
      thumbnail: 'https://cdn.dummyjson.com/product-images/50/thumbnail.jpg'
    },
    {
      id: 31,
      title: 'Mornadi Velvet Bed',
      price: 40,
      quantity: 2,
      total: 80,
      discountPercentage: 17,
      discountedPrice: 66,
      thumbnail: 'https://cdn.dummyjson.com/product-images/31/thumbnail.jpg'
    },
    {
      id: 75,
      title: 'Seven Pocket Women Bag',
      price: 68,
      quantity: 3,
      total: 204,
      discountPercentage: 14.87,
      discountedPrice: 174,
      thumbnail: 'https://cdn.dummyjson.com/product-images/75/thumbnail.jpg'
    }
  ],
  total: 2492,
  discountedTotal: 2140,
  userId: 5,
  totalProducts: 5,
  totalQuantity: 14
}
export default carts
