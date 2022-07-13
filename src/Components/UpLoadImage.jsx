import React from 'react'

export default function UpLoadImage() {

  

  return (
    <main className="main_full">
      <div className="container">
        <div className="panel">
          <div className="button_outer">
            <div className="btn_upload">
              <input type="file" id="upload_file" />
              Upload Image
            </div>
            <div className="processing_bar" />
            <div className="success_box" />
          </div>
        </div>
        <div className="error_msg" />
        <div className="uploaded_file_view" id="uploaded_view">
          <span className="file_remove">X</span>
        </div>
      </div>
    </main>
  )
}
