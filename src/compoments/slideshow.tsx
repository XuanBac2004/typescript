import { Carousel } from 'flowbite-react'
import styled from 'styled-components'
import React from 'react'
const Class = styled.div`
  margin-top: 80px;
  border-radius: 0px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`
const Slideshow: React.FC = () => {
  return (
    <Class className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
      <Carousel slideInterval={2000}>
        <Image src='https://png.pngtree.com/thumb_back/fw800/background/20230614/pngtree-samsung-galaxy-device-sits-on-a-wooden-dock-overlooking-a-lake-image_2914533.jpg' />
        <Image src='https://cctvcamera.com.vn/wp-content/uploads/2024/02/camera-eziviz-c8c-360-do-quay-quet-ngoai-troi-gia-re-6.jpg' />
        <Image src='https://www.gosell.vn/blog/wp-content/uploads/2022/10/Anh-facebook-1.jpg' />
        <Image src='https://cdn.mobilecity.vn/mobilecity-vn/images/2024/01/w800/banner-dien-thoai-mobilecity-02.jpg.webp' />
        <Image src='https://vatvostudio.vn/wp-content/uploads/2022/09/photo-1662702944271-16627029448121796451591-1662708100782-16627081015791962916141.webp' />
      </Carousel>
    </Class>
  )
}
export default Slideshow
