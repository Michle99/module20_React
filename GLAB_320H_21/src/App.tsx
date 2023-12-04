import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Content } from './components/Content'

function App() {

  return (
    <>
      <div className="App">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <Header/>
        <Content color="yellow" text="This is my first React Application!" />
        <Content color="red" text="Wish me luck..." />
        <Content color="green" text="I think I've got it!" />
        <Footer/>
      </div>
    </>
  )
}

export default App
