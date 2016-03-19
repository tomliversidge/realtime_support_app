import React, {Component} from 'react';
import Message from './message';
class MessageList extends Component {
    render() {
        return (
            <ul>
                {this.props.messages.map(message => {
                    return (
                        <Message
                            key={message.id}
                            message={message}
                        />
                    )
                })}
            </ul>
        );
    }
}

MessageList.propTypes = {
    messages: React.PropTypes.array.isRequired
};
MessageList.defaultProps = {};

export default MessageList;
