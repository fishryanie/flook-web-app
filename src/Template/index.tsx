import React from 'react';
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

export interface TemplateProps {
  Component: any;
  Carousel: any;
}

export const  AppTemplate = (props: TemplateProps) => {
  let { Component, Carousel } = props;
  return (
    <React.Fragment>
      <Header carousel={Carousel}/>
      <Component/>
      <Footer />
    </React.Fragment>
  )
}



