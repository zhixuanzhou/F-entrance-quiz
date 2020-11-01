import React, { Component } from 'react';

// TODO GTB-工程实践: - Card这个命名没有体现业务逻辑，可以取名叫traineeItem
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
    };
  }

  render() {
    return (
      <div>
        <div>
          {this.state.id} {this.state.name}
        </div>
      </div>
    );
  }
}

export default Card;
