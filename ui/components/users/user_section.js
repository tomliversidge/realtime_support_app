import React, {Component} from 'react';
import UserList from './user_list';
import UserForm from './user_form';

class UserSection extends Component {
    render() {
        return (
            <div className="support panel panel-primary">
                <div className="panel-heading">
                    <strong>Users</strong>
                </div>
                <div className="panel-body users">
                    <UserList users={this.props.users}/>
                    <UserForm setUserName={this.props.setUserName}/>
                </div>
            </div>
        )
    };
}

UserSection.propTypes = {
    setUserName: React.PropTypes.func.isRequired,
    users: React.PropTypes.array.isRequired
};
UserSection.defaultProps = {};

export default UserSection;

