import data from "./data";

import React from 'react';

import Review from "./Review";


function App() {
  const [imageId, setImageId ] = React.useState(1);

  function nextImage() {
    if(imageId === 4) {
      setImageId(0)
    }
    setImageId(prevState => prevState + 1);
  }

  function prevImage() {
    if(imageId === 1) {
      setImageId(5);
    } 
    setImageId(prevState => prevState - 1);

  }
  const reviewElement = data.map((review) => {
    return < Review key={review.id} name={review.name} job={review.job} img={review.image}
     text={review.text}  id={review.id} imageId={imageId} nextImage={nextImage} prevImage={prevImage}/>
  })
  return (
    <main>
      <div className="App container">
        <h1 className="title">Our Reviews</h1>
        <div className="underline"></div>
        {reviewElement}
      </div>
    </main>
  );
}

export default App;
