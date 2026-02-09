import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [date, setDate] = useState("");
  const [temp, setTemp] = useState(0);
  const [summary, setSummary] = useState("");

  async function getWeather()
  {
    const response = await fetch('https://otus-hw-back.syrex.ru.net/WeatherForecast/');
    const data = await response.json();
    setDate(data[0].date);
    setTemp(data[0].temperatureC);
    setSummary(data[0].summary);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={ getWeather }>
          Дата {date}
          <br/>
          Температура {temp}
          <br/>
          Описание {summary}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
