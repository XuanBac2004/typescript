import React from 'react'

type Props = {}

const About: React.FC = (props: Props) => {
  return (
    <>
      <div className='container'>
        <p>
          Chào mừng bạn đến với trang "Về chúng tôi" của chúng tôi. Chúng tôi là một công ty chuyên cung cấp các sản
          phẩm và dịch vụ hàng đầu trong ngành của chúng tôi.
        </p>
        <p>
          Chúng tôi cam kết cung cấp cho khách hàng các sản phẩm và dịch vụ chất lượng, với dịch vụ hỗ trợ khách hàng
          tốt nhất và giá cả cạnh tranh nhất.
        </p>
        <p>Hãy liên hệ với chúng tôi để biết thêm thông tin chi tiết về sản phẩm và dịch vụ của chúng tôi.</p>
      </div>
    </>
  )
}

export default About
