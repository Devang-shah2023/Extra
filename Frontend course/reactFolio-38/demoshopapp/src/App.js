import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
const App= ()=> {
  const products =[
    {
      id:"p1",
      title:"Nirma",
      amount:100,
      date:new Date(2021,8,10),
    },
    {
      id:"p2",
      title:"Surf Excel",
      amount:200,
      date:new Date(2021,2,2),
    },
    {
      id:"p3",
      title:"Tide",
      amount:130,
      date:new Date(2021,12,28),
    },
    {
      id:"p4",
      title:"Maggi",
      amount:450,
      date:new Date(2021,5,5),
    }
  ];
  function printProductData(data){
    console.log("first")
    console.log(data);
  }
  return (
    <div>
    <NewProduct pranay= {printProductData}/>
       <Products items={products} />
    </div>
  );
}

export default App;
