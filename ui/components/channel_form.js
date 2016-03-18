import React from 'react';

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    onSubmit(e){
        let channelName = this.state.channelName;
        this.setState({channelName:''});
        this.props.addChannel(channelName);
        e.preventDefault();
    }

    onChange(e){
        this.setState({channelName:e.target.value});
    }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text"
                 value={this.state.channelName}
                 onChange={this.onChange.bind(this)}></input>
      </form>
    );
  }
}

ChannelForm.propTypes = {};
ChannelForm.defaultProps = {};

export default ChannelForm;
