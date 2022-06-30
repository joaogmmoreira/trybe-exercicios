import React from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header className="header"/>
        <Content className="content"/>
        <Footer className="footer"/>
      </>
    )
  }
}

export default App;
