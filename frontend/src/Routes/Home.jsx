import React, { useEffect, useState } from 'react'
import Card from '../component/Card';
import axios from 'axios'

export default function Home() {
  let [allCard, setAllCard] = useState([]);
  useEffect(() => {
    getData()
  },[]);
  const getData = () => {
    axios.get('http://localhost:4000/getallcard')
      .then((res) => {
        const data = res.data.output;
        setAllCard(data);
      })
  }

  return (
    <div className='home same'>
      <h1 className='header color'>All Card Which Stored In Database</h1>
      {allCard.length > 0 ?
        allCard.map((n) => (<Card key={n._id} title={n.title} catogery={n.catogery} imgurl={n.imgurl} description={n.desc} />)) :
        "card not fount in this catogery"
      }
    </div>
  )
}
