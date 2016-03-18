import React from 'react';
import Channel from './channel';
class ChannelList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.channels.map(channel => {
                    return (
                        <Channel name={channel.name}/>
                            )
                            })}

            </ul>
        );
    }
}

ChannelList.propTypes = {};
ChannelList.defaultProps = {};

export default ChannelList;
