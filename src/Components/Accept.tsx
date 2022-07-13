import React, { Fragment, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import actionTypes from '../Store/Actions/constants';

const Accept: React.FC = () => {
  const accept = useSelector((state: RootStateOrAny) => state.AppReducer.accept)
  const [open, setOpen] = useState('')

  const dispatch = useDispatch()

  const handleClose = () => {
    setOpen('')
    dispatch({type: actionTypes.closeAccetp})
  }
  const handleYes = () => {
    accept.handleYes()
    console.log('handleYes')
    setOpen('')
    dispatch({type: actionTypes.closeAccetp})
  }

  useEffect(() => {
    setOpen('is--open') 
  },[dispatch, accept.status])

  return ( !accept.status ? <Fragment/> : (
    <section className="accept">    
      <div className={"panel " + open} id="js-panel">
        <div className="panel__content">
          <h4>{accept.title}</h4>
          <h2>{accept.content}</h2>
          <p>{accept.description}</p>
        </div>
        <div className="panel__flaps">
          <div className="flap outer flap--left" />
          <a className="flap flap__btn" href="#" onClick={handleYes}>YES</a>
          <a className="flap flap__btn" href="#" onClick={handleClose}>NO</a>
          <div className="flap outer flap--right" />
        </div>
      </div>
    </section>
  ));
};

export default Accept;