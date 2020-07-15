import React,{Component} from 'react';
import axios from 'axios'

class App extends Component{
  constructor(props){
      super(props)
      this.state = {
        newData:' '
      }
  }
  async componentDidMount(){
    var res = await axios.get('http://localhost:8000/api/News');
    // let data = res.data.data.list;
    // let data = JSON.parse(res.data.forum.extra.ncov_string_list)
    console.log(res.data);
  }
  render(){
    return (
      <div>
        <h1>这是首页</h1>
      </div>
    )
  }
}

//注意需要到处操作
export default App;
