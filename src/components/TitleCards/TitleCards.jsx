import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([])
   //const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTAyYTdiOWMwOGZjYzM3NzIyOTliZDFmMDkxZjY0NCIsInN1YiI6IjY2MzYzNjk0ZmU2YzE4MDEyYzMwNmQ0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0I3tVHr0aSNTZLvFFrjr-x25KKvsT3wvVLy4vvWnf6Q'
    }
  };
  


  //  const handleWheel = (event)=>{
  //   event.preventDefault();
  //   cardsRef.current.scrollLeft += event.deltaY;
  //  }

     useEffect(()=>{

      fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response =>setApiData(response.results))
      .catch(err => console.error(err));

    //cardsRef.current.addEventListner('wheel', handleWheel);
     },[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Nflix"}</h2>
      <div className="card-list">
        {apiData.map((card, index)=>{
          return<Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
