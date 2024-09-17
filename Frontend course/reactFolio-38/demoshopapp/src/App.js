import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
function App() {
  const response=[
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"June",
      itemYear:"1998"
    },
    {
      itemName:"Nirma2",
      itemDate:"202",
      itemMonth:"June2",
      itemYear:"199982"
    },
    {
      itemName:"Nirma3",
      itemDate:"203",
      itemMonth:"June3",
      itemYear:"19983"
    }
  ];
  return (
    <div>
    
    <Item name={response[0].itemName} ></Item>
    <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

    <Item name={response[1].itemName} ></Item>
    <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

    <Item name={response[2].itemName} ></Item>
    <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
    <div classname="App">
      Hello jee
    </div>
    </div>
  );
}

export default App;
