import React,{Component} from 'react';
import {BrowserRouter as Router ,Link,Route } from 'react-router-dom'
import './App.css'

import {Button,Pagination,DatePicker,Carousel   } from 'antd'
const { RangePicker } = DatePicker;
const demoImgArr = ["1" , "2" , "3","4"]
const ticks = demoImgArr.map(item => require('./'+item + ".jpg"))
console.log(ticks);
function Index(){
  return (
    <div  className='content'>
      <h2>首页</h2>
      <Button type="primary">Button</Button>
      {/* <img src={imgUrl} alt='image' title='图片'></img> */}
    </div>
  )
}
function About(){
  return (
    <div className='content'>
      <h2>关于我们</h2>
      <RangePicker showTime />

    </div>
  )
}

function onChange(a, b, c) {
  console.log(a, b, c);
}

function My(props){
  console.log(props);
  return (
    <div  className='content'>
      <h2>个人中心</h2>
      <div className='banner'>
      <Carousel afterChange={onChange} autoplay>
    <div>
    <img src={ticks[0]} alt='image' title='图片'></img>
    </div>
    <div>
    <img src={ticks[1]} alt='image' title='图片'></img>
    </div>
    <div>
    <img src={ticks[2]} alt='image' title='图片'></img>
    </div>
    <div>
    <img src={ticks[3]} alt='image' title='图片'></img>
    </div>
  
  </Carousel>
      </div>
      {/* <Pagination defaultCurrent={10} total={150} /> */}

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
