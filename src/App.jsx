import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Counter from './components/Counter'
import DefaultVite from './components/DefaultVite'
import ComponentsBundle from './components/Components'
import './App.css'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function App() {
  return (
    <div>
      <h1>Hello REACT</h1>
      <h4>Welcome to my app</h4>
      <hr/>
      <MyButton />
      <hr/>
      <Counter />
      <hr />
      <ComponentsBundle.AboutPage />
      <hr/>
      <ComponentsBundle.Profile />
      <hr/>
      <DefaultVite />
    </div>
  );
}

export default App
