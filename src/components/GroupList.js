import React, { Component } from 'react';
import Card from './Card';

// TODO GTB-知识点: - 从设计思路上说，应该要存在一个Group的组件，然后GroupList应该是由多个Group组成
class GroupList extends Component {
  render() {
    return (
      <div>
        <header>
          <h2 className="group-header">分组列表</h2>
          <button className="group-button" type="button">
            分组学员
          </button>
        </header>

        <section>
          <p>1组</p>
        </section>

        <section>
          <Card id="1." name="成吉思汗" />
        </section>
      </div>
    );
  }
}

export default GroupList;
