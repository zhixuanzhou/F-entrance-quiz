import React, { Component } from 'react';
import Card from './Card';

class MembersList extends Component {
  render() {
    return (
      <div>
        <h2>学员列表</h2>

        <section>
          {this.props.members.map((member) => (
            <Card id={member.id} name={member.name} />
          ))}
        </section>

        <button className="group-button" type="button">
          + 添加学员
        </button>
      </div>
    );
  }
}

export default MembersList;
