import React from 'react';
import ChannelList from './channel_list';
import ChannelForm from './channel_form';

class ChannelSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            channels: [
            {name: 'Channel 1'},
            {name: 'Channel 2'}
        ]};
    }

    addChannel(name){
        let {channels} = this.state;
        channels.push({name:name});

        this.setState( {
            channels:channels
        });
    }

    render() {
        return (
            <div>
                <ChannelList channels={this.state.channels}></ChannelList>
                <ChannelForm addChannel={this.addChannel.bind(this)}></ChannelForm>
            </div>
        );
    }
}

ChannelSection.propTypes = {};
ChannelSection.defaultProps = {};

export default ChannelSection;
