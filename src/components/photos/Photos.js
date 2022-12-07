import React from 'react'
import PhotoItem from '../photoItem/PhotoItem'

const Photos = ({photos}) => {
  return (
    <div className='photos-cards'>
       {photos.map((el,id) => <PhotoItem key={el.id} title={el.title}
        id={el.id} img={el.thumbnailUrl}/>)}
    </div>
  )
}

export default Photos