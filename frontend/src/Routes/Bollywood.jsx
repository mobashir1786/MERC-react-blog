import React, { useEffect, useState } from 'react';
import Card from '../component/Card';
import Header from '../component/Header';
import axios from 'axios';

export default function Bollywood() {
  let [allCard, setAllCard] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/bollywood')
      .then((res) => {
        const data = res.data.output;
        setAllCard(data)
        // console.log(allCard);
      })
  }, []);
  return (
    <div className='bollywood same'>
      <Header catogery="Bollywood" />
      {allCard.length > 0 ?
        allCard.map((n) => (<Card key={n._id} title={n.title} catogery={n.catogery} imgurl={n.imgurl} description={n.desc} />)) :
        "card not fount in this catogery"
      }
    </div>
  )
}
