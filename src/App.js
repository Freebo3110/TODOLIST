import './App.css';
import image from './do.jpg';
import imageTwo from './pen.jpg';
import { List } from './List';




function App() {
  return (
    <div  className='app'>
        <div className='container'>
          <img src = { image } width='300px' alt='do' />
        </div>
        <div className='container'>
          <h1>To Do List</h1>
        </div>
        <List />
        <div className='container'>
          <img src={ imageTwo } width='300px' alt="pen"/>
        </div>
    </div>
  );
}

export default App;
