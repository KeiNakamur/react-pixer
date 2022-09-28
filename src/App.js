import logo from './logo.svg';
import './App.css';
import ImageGallery from './ImageGallery';
import { useRef, useState } from 'react';

function App() {

  const [inputText, setInputText] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //APIを叩く(fetch)
    const apiUrl = `https://pixabay.com/api/?key=30225729-a2a236b999e37db9502bc92c5&q=${ref.current.value}&image_type=photo`;
    fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //これでinputTextに格納される
      //console.log(data);
      setInputText(data.hits);
    })
  };

  return (
    <div className="container">
      <h2>My Pixer</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="search for images" ref={ref}/>

      </form>
      {/* fetchDataをpropsでImageGalleryへ渡す*/}
    <ImageGallery fetchData={inputText}/>
    </div>
  );
}

export default App;
