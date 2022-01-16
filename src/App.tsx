import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
interface IState{
  people:{
    name: String
    age: Number
    url?: String
    note?:String
  }[]
}
function App() {
  const[people, setPeople] = useState<IState["people"]>([
    {
    name: "Kritika",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2FAnime-Girl-429719194145690%2Fposts&psig=AOvVaw1Vof60k4U9TUXg0ef7Haxz&ust=1642449211916000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCPjSh6eGt_UCFQAAAAAdAAAAABAD",
    age: 22,
    note: "Accenture employee",
}
])
  
  return (
    <div className="App">
      <h1>Invited people list</h1>
      <List people={people} />
    </div>
  );
}

export default App;
