
import './App.css';
import Product from './Product';

const products = [
  {
    id:1, name:"Coca Cola", price:12, description:"Es de color negro", available: true
  },
  {
    id: 2,name:"Fanta", price:12, description:"Es de color naranja", available:true
  },
  {
    id:3,name:"Pepsi", price:10, description:"Es de color negro, es cola", available:false
  }
];
function App() {
  return (
    <div >
      Ejercicio Props
      <hr/>
      {
        products.map((item) => {
          return <Product key={item.id} name={item.name} price={item.price} description={item.description} available={item.available} />
        })
      }
    </div>
    
  );
}

export default App;
