import data from "./data";
import Review from "./Review";

function App() {
  const reviewElement = data.map((review) => {
    return < Review key={review.id} name={review.name} job={review.job} img={review.image} text={review.text} />
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
