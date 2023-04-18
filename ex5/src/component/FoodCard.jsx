import React,{useState} from 'react'
import './FoodCard.css'
import Vote from './buttonVote.jsx'

function FoodCard(props) {
  const {title,subTitle,imgSrc,info} = props;
  
  const [counter, setCounter] = useState('MIN');
  const increaseVote = () =>{
    if (counter === 'MIN'){
        setCounter(1);
    }
    else if(counter === 9){
        setCounter('MAX');
    }
    else if(counter === 'MAX'){
        alert('Cannot Vote more');
    }
    else{
        setCounter(counter+1);
    }
  }
  const decreaseVote = () =>{
    if (counter === 'MAX'){
        setCounter(9);
    }
    else if(counter===1){
        setCounter('MIN');
    }

    else if(counter === 'MIN'){
         alert('Cannot unvote ');
    }
    else{
        setCounter(counter-1);
    }
  }
  return (
    <>
        <div className='flexBox'>
        <div className="Food">
            <div className='infoAndPhoto'>
                <div className='info'>
                    <h2>{title}</h2>
                    <h4>{subTitle}</h4>
                    <p>{info}</p>
                </div>
                <img src={imgSrc} alt="..."></img>
            </div>
            <div className='groupButton'>
                <Vote clickvote='Click to Vote' count = {increaseVote}/>
                <div className='score'>
                    <p className='scoreText'>{counter}</p>
                </div>
                <Vote clickvote='Click to unvote'count = {decreaseVote} />
            </div>
        </div>
    </div>
        

    </>
  )
}


export default FoodCard