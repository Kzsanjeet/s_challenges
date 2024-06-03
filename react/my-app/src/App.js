import logo from './logo.svg';
import './App.css';

let name = "Sanjeet"

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="container">
        <p>
          {/* Content goes here */}
        </p>
      </div>
      <div className="blank">
        <h1>Hello my name is {name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer ultricies nisi sit amet vehicula varius. Phasellus venenatis, velit in vulputate fermentum, justo arcu aliquam urna, nec rhoncus quam libero nec metus. In dictum metus sed nisl scelerisque, in posuere neque consectetur. Sed in sagittis purus, nec fringilla justo.</p>
      </div>
    </>
  );
}

export default App;
