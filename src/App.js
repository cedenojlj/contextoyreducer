
import './App.css';
import data from './data';

function App() {
  return (
    <div className="App">

      <header className="App-header">
       <a href='/'>Amazon</a>
      </header>

      <main>
        list products
        {
          data.products.map(product =>(
            <div>
              <img src={product.image} alt={product.name}></img>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))
        }
      </main>
    </div>
  );
}

export default App;
