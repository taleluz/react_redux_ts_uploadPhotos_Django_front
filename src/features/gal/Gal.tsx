import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {getImagesAsync,selectImages,delImageAsync,selectUpd} from './galSlice';
import styles from './Counter.module.css';

export const Gal=()=> {
  const images = useAppSelector(selectImages);
  const upd = useAppSelector(selectUpd);
  const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(getImagesAsync()) }
      , [upd])

    useEffect(() => {
      console.log(images)
    }, [images])
    
  return (
    <div>
        Images
        {images.map((img,i)=><div>{img.title},id: 
        <button onClick={()=>dispatch(delImageAsync(+img.id))} >{img.id}</button> ,
        {img.desc}<img src={`http://127.0.0.1:8000${img.image}`}></img></div>)}
    </div>
  );
}