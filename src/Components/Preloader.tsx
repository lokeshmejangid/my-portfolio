import React from 'react'
import { ILoader } from '../Interface/Common';

interface IData {
    load: boolean;
}

const Preloader = (item: IData) => {
  return (
    <div id = {item.load ? 'preloader' : 'preloader-none'}></div>
  )
}

export default Preloader