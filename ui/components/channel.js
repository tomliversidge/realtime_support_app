import React from 'react';

class Channel extends React.Component {
    
    onClick(){
        console.log("clicked", this.props.name)
    }
  render() {
    return (
      <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
    );
  }
}

Channel.propTypes = {};
Channel.defaultProps = {};

export default Channel;
