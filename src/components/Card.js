import React, { Component } from 'react';

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
