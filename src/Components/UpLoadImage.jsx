import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export default function UpLoadImage(props) {
  const { setValue, register, field } = props;
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const containerRef = useRef(null);

  const infoRowTable = useSelector((state) => state.AppReducer.infoRowTable);
  const typeDialog = useSelector((state) => state.AppReducer.typeDialog);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
    console.log('🚀 ~ file: UpLoadImage.jsx ~ line 15 ~ UpLoadImage ~ e.target.files[0]', e.target.files[0]);
  };

  const closeFile = (e) => {
    document.querySelector('#uploaded_view').classList.remove('show');
    document.querySelector('#uploaded_view').querySelector('img').remove();
    document.querySelector('.button_outer').classList.remove('file_uploading');
    document.querySelector('.button_outer').classList.remove('file_uploaded');
    document.querySelector('.button_outer').style.display = 'inline-block';
  };

  // useEffect(() => {
  //   if (typeDialog !== 'FORM_CREATE') {
  //     setPreview(infoRowTable.images.background.url) || setPreview(infoRowTable.images.url)
  //   }
  // }, [selectedFile]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    console.log('objectUrl', objectUrl);
    document.querySelector('.button_outer').classList.add('file_uploading');
    setPreview(objectUrl);
    setTimeout(function () {
      document.querySelector('#uploaded_view').classList.add('show');
      document.querySelector('.button_outer').classList.remove('file_uploading');
      document.querySelector('.button_outer').style.display = 'none';
      containerRef.current.insertAdjacentHTML('beforeend', '<img src="' + objectUrl + '" />');
    }, 2000);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <main className="uploadImage">
      <div className="container">
        <div className="panel">
          <div className="button_outer" id="box">
            <div className="btn_upload">
              <input type="file" id="upload_file" {...register(field)} onChange={onSelectFile} />
              Upload Image
            </div>
            <div className="processing_bar" />
            <div className="success_box" />
          </div>
        </div>
        <div className="error_msg" />
        <div className="uploaded_file_view" id="uploaded_view" ref={containerRef}>
          <span className="file_remove" onClick={closeFile}>
            X
          </span>
        </div>
      </div>
    </main>
  );
}
