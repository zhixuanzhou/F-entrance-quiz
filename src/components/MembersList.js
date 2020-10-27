import React, { Component } from 'react';
import Card from './Card';

class MembersList extends Component {
  render() {
    return (
      <div>
        <h2>学员列表</h2>
        <section>
          <Card id="1" name="成吉思汗" />
        </section>
      </div>
    );
  }
}

export default MembersList;
