import React, { Component } from 'react';
import Card from './Card';

// TODO GTB-工程实践: - MembersList这个命名没有体现业务逻辑，可以取名叫traineeList
class MembersList extends Component {

    constructor(props) {
        super(props);
        this.state = {id:"16", name:"我要选李白"};
    }


  render() {
    return (
      <div>
        <h2>学员列表</h2>

        <section>
          {this.props.members.map((member) => (
              // TODO GTB-知识点: - React里面，每一个列表元素都应该有一个key
            <Card id={member.id} name={member.name} />
          ))}
        </section>
        {/*  // TODO GTB-完成度: - 添加学员是需要发送API请求的，由后台server完成的 */}
        <button type="submit" onClick={() => this.props.callBack(this.state)}>
          + 添加学员
        </button>
      </div>
    );
  }
}

export default MembersList;
