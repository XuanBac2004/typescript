import React from 'react'
import styled from 'styled-components'
const Galley1 = styled.div`
  margin-bottom: 90px;
`
const Shadow = styled.div`
  box-shadow: 4px 3px 5px 0px;
`
const Galley = () => {
  return (
    <Galley1 className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div className='grid gap-4'>
        <Shadow>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
          />
        </Shadow>
        <Shadow>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
          />
        </Shadow>
        <Shadow>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
          />
        </Shadow>
      </div>
      <div className='grid gap-4'>
        <Shadow>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
          />
        </Shadow>
        <Shadow>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
          />
        </Shadow>
        <Shadow>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
          />
        </Shadow>
      </div>
      <div className='grid gap-4'>
        <Shadow>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
          />
        </Shadow>
        <Shadow>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
          />
        </Shadow>
        <Shadow>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
          />
        </Shadow>
      </div>
      <div className='grid gap-4'>
        <Shadow>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'
          />
        </Shadow>
        <Shadow>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
          />
        </Shadow>
        <Shadow>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'
          />
        </Shadow>
      </div>
    </Galley1>
  )
}

export default Galley
