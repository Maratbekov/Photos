import React,{useState,useEffect} from "react";
import Photos from "./components/photos/Photos";



function App() {
  const [photos,setPhotos] = useState([])

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    const data = await response.json()
    setPhotos(data)    
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="container">
     <Photos photos={photos} />
    </div>
  );
}

export default App;
