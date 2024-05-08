import './App.css'
import image from "./assets/me.jpg"

export default function App() {
  return (
    <main>
      <div className='container'>
      <div className='first'>
        <p>I am uboh Junior <span> Chukwuemeke</span></p>
      <h1>Frontend web developer</h1>
        

        <button>Click to know more</button>
      </div>
        
        <div className='second'>
        <img src={image} alt='image' />
        </div>
      </div>
    </main>
  )
}
