import React from 'react'


export default function Review({name,job,img,text}) {

  return (
    <div className="review">
      <div className="img-container">
        <img src={img} alt={name} className="person-img" />
        <span className="quote-icon">
        <i className="fa-solid fa-quote-right"></i>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <button  className="prev-btn">
        <span><i className="fa-solid fa-chevron-left"></i></span>
      </button>
      <button className="next-btn">
      <span><i className="fa-solid fa-chevron-right"></i></span>
      </button>
    </div>
  )
}
