import React, {Component} from 'react';
import MessageList from './message_list';
import MessageForm from './message_form';

class MessageSection extends Component {
    render() {
        let { activeChannel} = this.props;
        let activeChannelName = activeChannel.name !== undefined ? activeChannel.name : "Please select a channel";
        return (
            <div className="messages-container panel panel-default">
                <div className="panel-heading">
                    <strong>{activeChannelName}</strong>
                </div>
                <div className="panel-body messages">
                    <MessageList {...this.props}/>
                    <MessageForm {...this.props}/>
                </div>
            </div>
        )
    };
}

MessageSection.propTypes = {
    activeChannel: React.PropTypes.object.isRequired,
    addMessage: React.PropTypes.func.isRequired,
    messages: React.PropTypes.array.isRequired
};
MessageSection.defaultProps = {};

export default MessageSection;

