import React from 'react'
import classes from './PhotoItem.module.css'

const PhotoItem = ({title, id, img}) => {
  return (
    <div className={classes.PhotoItemCard}>
       <div className={classes.blockTitle}>
       <div className={classes.title}>{title}</div>
        <div className={classes.id}>{id}</div>
       </div>
       <div className={classes.img}>
        <img src={img}/>
       </div>
    </div>
  )
}

export default PhotoItem