import logo from './logo.svg';
import './App.css';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div className='style'>
      <Welcome name="Sara" />      <Welcome name="Payal" />      <Welcome name="Aditi" />  
      <button> Click Here! </button>
      
      
        </div>
  );
}

export default App;
