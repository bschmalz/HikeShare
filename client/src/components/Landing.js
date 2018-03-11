import React from 'react';
import text from './text.module.css';
console.log('text', text);

const Landing = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 className={text.text}>
        Welcome Page.
      </h1>
    </div>
  )
}

export default Landing;