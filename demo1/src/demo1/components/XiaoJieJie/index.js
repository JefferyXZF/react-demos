import React, {Component, Fragment} from 'react';
import './index.css'

class XiaoJieJie extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputValue: '',
      list: []
     };
  }
  render() {
    return (
      <div className="list-app">
          <input value={this.state.inputValue} onChange={this.inputChange} />
          <button onClick={this.addServer}>增加服务</button>
          <ul>
            {
              this.state.list.map((item, index) => {
                return <li key={index} onClick={this.deleteItem.bind(this, index)}>{item}</li>
              })
            }
          </ul>
      </div>
    );
  }

  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  // 添加服务
  addServer = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  // 删除服务
  deleteItem = (index) => {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default XiaoJieJie;