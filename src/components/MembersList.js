import React, { Component } from 'react';
import Card from './Card';

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
            <Card id={member.id} name={member.name} />
          ))}
        </section>

        <button onClick={() => this.props.callBack(this.state)}>
          + 添加学员
        </button>
      </div>
    );
  }
}

export default MembersList;
