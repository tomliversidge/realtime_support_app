import React, {Component} from 'react';
import ChannelList from './channel_list';
import ChannelForm from './channel_form';

class ChannelSection extends Component {
    render() {
        return (
            <div className="support panel panel-primary">
                <div className="panel-heading">
                    <strong>Channels</strong>
                </div>
                <div className="panel-body channels">
                    <ChannelList {...this.props} />
                    <ChannelForm {...this.props} />
                </div>
            </div>
        )
    };
}

ChannelSection.propTypes = {
    addChannel: React.PropTypes.func.isRequired,
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
};
ChannelSection.defaultProps = {};

export default ChannelSection;

