import React, {Component} from 'react';

class User extends Component {
    render() {
        return (
            <li className="active">
                <a>
                    {this.props.user.name}
                </a>
            </li>
        );
    }
}

User.propTypes = {
    user: React.PropTypes.object.isRequired
};
User.defaultProps = {};

export default User;
