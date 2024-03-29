import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function UpLoadImage(props) {
  const { setValue, register, field } = props;
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const containerRef = useRef(null);

  const infoRowTable = useSelector((state) => state.AppReducer.infoRowTable);
  const typeDialog = useSelector((state) => state.AppReducer.typeDialog);

  const dispatch = useDispatch();

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
    dispatch({ type: 'uploadImage', payload: { typeImage: 'IMAGE' } })
  };

  const closeFile = (e) => {
    document.querySelector('#uploaded_view').classList.remove('show');
    document.querySelector('#uploaded_view').querySelector('img').remove();
    document.querySelector('.button_outer').classList.remove('file_uploading');
    document.querySelector('.button_outer').classList.remove('file_uploaded');
    document.querySelector('.button_outer').style.display = 'inline-block';
  };

  // if (typeDialog !== 'FORM_CREATE') {
  //   setPreview(infoRowTable?.images?.avatar?.url);
  //   document.querySelector('#uploaded_view').classList.add('show');
  //   document.querySelector('.button_outer').classList.remove('file_uploading');
  //   document.querySelector('.button_outer').style.display = 'none';
  //   containerRef.current.insertAdjacentHTML('beforeend', '<img src="' + infoRowTable?.images?.avatar?.url + '" />');
  //   setSelectedFile(undefined);
  // }else 

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      dispatch({ type: 'uploadImage', payload: { typeImage: '{}' } })
      return;
    } else {
      const objectUrl = URL.createObjectURL(selectedFile);
      document.querySelector('.button_outer').classList.add('file_uploading');
      setPreview(objectUrl);
      setTimeout(function () {
        document.querySelector('#uploaded_view').classList.add('show');
        document.querySelector('.button_outer').classList.remove('file_uploading');
        document.querySelector('.button_outer').style.display = 'none';
        containerRef.current.insertAdjacentHTML('beforeend', '<img src="' + objectUrl + '" />');
      }, 2000);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [selectedFile]);

  return (
    <main className="uploadImage">
      <div className="container">
        <div className="panel">
          <div className="button_outer" id="box">
            <div className="btn_upload">
              <input type="file" id="upload_file" {...register(field)} onChange={onSelectFile} />
              Chọn ảnh
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
