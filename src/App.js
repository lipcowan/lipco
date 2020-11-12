import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import React, {Component} from 'react'
import './App.css'

class App extends Component {
  render(){
    return (
      <div className="lipco_app">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App;
