import React,{Component} from 'react';
import {BrowserRouter as Router ,Link,Route } from 'react-router-dom'
import './App.css'
import imgUrl from './1.jpg'
function Index(){
  return (
    <div  className='content'>
      <h2>首页</h2>
      <img src={imgUrl} alt='image' title='图片'></img>
    </div>
  )
}
function About(){
  return (
    <div className='content'>
      <h2>关于我们</h2>
    </div>
  )
}
function My(props){
  console.log(props);
  return (
    <div  className='content'>
      <h2>个人中心</h2>
    </div>
  )
}

class App extends Component{
  constructor(props){
      super(props)
      this.state = {
        newData:'我是数据'
      }
  }
  render(){
    return (
      <div id='app'>
          <Router>
            <div className='nav'>
              <Link to='/'>首页</Link>
              <Link to='/about'>关于我们</Link>
              <Link to={ {pathname:'/my',search:'username=zhansan',hash:'abc',state:this.state.newData} }>个人中心</Link>
            </div>
            <Route path='/' exact component={Index}></Route>
            <Route path='/about' exact component={About}></Route>
            <Route path='/my' exact component={My}></Route>
          </Router>
      </div>
    )
  }
}

//注意需要到处操作
export default App;
