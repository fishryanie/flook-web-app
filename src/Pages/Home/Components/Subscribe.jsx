import React from 'react'

export default function Subscribe() {
  return (
    <section className="subscribe-cta">
      <div className="container">
        <div className="row align-center-y">
          {/* Section Title */}
          <div className="col-12 col-m-6 col-l-3">
            <h2>Theo dõi</h2>
            <p><strong>BỘ TRUYỆN BẠN YÊU THÍCH </strong> ĐỂ NHẬN CẬP NHẬT MỚI NHẤT</p>
          </div>
          {/* Step 01 */}
          <div className="ti-user cta-column col-12 col-m-6 col-l-3">
            <span className="step">01 <i>Bước</i></span>
            <h3>Đăng ký <span>TẠO MỘT TÀI KHOẢN</span></h3>
          </div>
          {/* Step 02 */}
          <div className="ti-view-module cta-column col-12 col-m-6 col-l-3">
            <span className="step">02 <i>Bước</i></span>
            <h3>Chọn lựa <span>TÌM KIẾM TRUYỆN</span></h3>
          </div>
          {/* Step 03 */}
          <div className="ti-notifications cta-column col-12 col-m-6 col-l-3">
            <span className="step">03 <i>Bước</i></span>
            <h3>Theo dõi <span>NHẤN NÚT YÊU THÍCH</span></h3>
          </div>
        </div>
      </div>
    </section>
  )
}
