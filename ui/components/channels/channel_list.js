import React, {Component} from 'react';
import Channel from './channel';
class ChannelList extends Component {
    render() {
        return (
            <ul>
                {this.props.channels.map(channel => {
                    return (
                        <Channel
                            key={channel.id}
                            setChannel={this.props.setChannel}
                            channel={channel}
                            activeChannel={this.props.activeChannel}
                        />
                    )
                })}

            </ul>
        );
    }
}

ChannelList.propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
};
ChannelList.defaultProps = {};

export default ChannelList;
