import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
 
  constructor (){
    super();
    this.state = {
      monsters : [],
      searchField: ''
    }
  }


  filterItems(arr, query) {
    return arr.filter(function(el) {
        return el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {this.setState({monsters : users});});
  
  }

 render (){
   const {monsters, searchField} = this.state;
   const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return(    
    <div className="App">
        <h1>Monster's Rolodex</h1>
        <SearchBox placeHolder="Search Monsters" 
                  handleChange={e => this.setState({searchField: e.target.value})} />
        <CardList monsters={filteredMonsters}>
        </CardList>
    </div>

    )
  }
}
export default App;
