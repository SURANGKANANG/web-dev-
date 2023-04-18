import React from 'react'

function buttonVote(props) {
    const{clickvote,count} = props;
  return (
    <button onClick={count}>{clickvote}</button>
  )
}

export default buttonVote