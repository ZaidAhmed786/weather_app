
import './App.css';
import WeatherCard from './WeatherCard';
import { DateTime } from './Date';
import Clock from './Time';

function App() {
  
  return (
    <>
    <div className='main_div'>
    <WeatherCard/>
    {/* <WeatherCard/>
    <WeatherCard/> */}
    {/* {DateTime()} */}
    {/* <Clock/> */}
    </div>
    </>
  );
}

export default App;
