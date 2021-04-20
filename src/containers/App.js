import React, { Component } from 'react';
import CardList from '../components/CardList'
import Searchbox from '../components/Searchbox'
import Scroll from '../components/Scroll'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      Robot: [],
      searchfield: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      .then(users => {this.setState({Robot:users})})
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value })
  }
  render() {
    const filteredrobots = this.state.Robot.filter(Robot => {
      return Robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList Robot={filteredrobots} />
        </Scroll>
      </div>
    );
  
  }
}

export default App;
