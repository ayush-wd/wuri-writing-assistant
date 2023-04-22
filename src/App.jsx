import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import ReactPlayer from 'react-player'

function App() {
  // const [count, setCount] = useState(0)
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <>
      <nav>
        <nav-left>
          <img className='logo-img' src="LogoMakr-4qrADY.png" />
          <h1 className='left-title'>Wuri</h1>
        </nav-left>
        <h1>Writing Assistant</h1>
      </nav>
      <main>
        <main-left>
          <button className='btn-enter-app-name'>Enter your App name</button>
          <div className="main-left-p">
            <p>Upload game files : </p>
          </div>
          
          <btn-list>
            <Button className='btn-upload' variant="contained" component="label">
              CSV for Story
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
            </IconButton>
            <Button className='btn-upload' variant="contained" component="label">
              Game Assets
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
            </IconButton>
            {/* <button className='btn-upload'>App icon</button> */}
            <Button className='btn-upload' variant="contained" component="label">
              App Icon
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
            </IconButton>
            {/* <input onChange={handleChange} type='file' /> */}
          </btn-list>
          <a href="#" className='a-download'>Click here to download files</a>
          <button className='btn-build-game'>Click to build the game</button>
        </main-left>
        <main-right>
          <ReactPlayer url='https://www.youtube.com/watch?v=pnY1cQ3Cbnw' />
          <p className='p-main-right'>Check out the demo to get started</p>
        </main-right>
      </main>
    </>
  )
}

export default App
