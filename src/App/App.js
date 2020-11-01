import React, { Component } from 'react';
import './App.scss';
import GroupList from '../components/GroupList';
import MembersList from '../components/MembersList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        { id: 1, name: '成吉思汗' },
        { id: 2, name: '鲁班七号' },
        { id: 3, name: '太乙真人' },
        { id: 4, name: '钟无艳' },
        { id: 5, name: '花木兰' },
        { id: 6, name: '雅典娜' },
        { id: 7, name: '芈月' },
        { id: 8, name: '白起' },
        { id: 9, name: '刘禅' },
        { id: 10, name: '庄周' },
        { id: 11, name: '马超' },
        { id: 12, name: '刘备' },
        { id: 13, name: '哪吒' },
        { id: 14, name: '大乔' },
        { id: 15, name: '蔡文姬' },
      ]
    }
  }

  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <MembersList 
        members={this.state.members} 
        callBack={(member) => {
          // TODO GTB-知识点: - syntax error: 你的state上面的定义的变量是members,不是member
          // TODO GTB-知识点: - 不建议给回调函数直接传入一个新的方法定义，这样会有性能问题
          // TODO GTB-工程实践: - callBack这个prop的命名没有体现业务逻辑
                    this.setState((pre) => ({member: [...pre.members, member]}));
        }}/>
      </div>
    );
  }
}

export default App;
