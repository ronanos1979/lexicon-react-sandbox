import React from 'react';
import { useState } from 'react'
import Counter from '../components/Counter'
import DefaultVite from '../components/DefaultVite'
import ComponentsBundle from '../components/Components'

import '../css/ComponentsDemo.css'

export default function ComponentsDemo() {
  const [count, setCount] = useState(0);
  function handleGlobalClick() {
    setCount(count + 1);
  }


  return (
    <div>
      <h1>Hello REACT</h1>
      <h4>Welcome to my app</h4>
      <hr />
      <p>These are counted together as they are at the App level.</p>
      <ComponentsBundle.GlobalMyButton count={count} onClick={handleGlobalClick} />      
      <ComponentsBundle.GlobalMyButton count={count} onClick={handleGlobalClick} />
      <hr />
      <ComponentsBundle.ShoppingList />
      <hr />
      <p>These are counted indepenently.</p>
      <ComponentsBundle.MyButton />
      <ComponentsBundle.MyButton />
      <hr />
      <Counter />
      <hr />
      <ComponentsBundle.AboutPage />
      <hr />
      <ComponentsBundle.Profile />
      <hr />
      <DefaultVite />
    </div>
  );
}

