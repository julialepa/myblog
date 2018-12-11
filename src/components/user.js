import React, { Component } from 'react';




class User extends Component {

  constructor(props) {
    super(props)
    this.state={
      user: {}
    }
    this.dataUser()
  }

  dataUser() {
    fetch('https://jsonplaceholder.typicode.com/users/' + this.props.id)
      .then(response => response.json())
      .then(json => this.setState({
        user: json
      })
      )
  }


  render() {
    const user= this.state.user

    if (user === {}){
        return <div>loading</div>
    } else {
        return (
          <div>
            <div className="feed-page">
                  id={user.email} name={user.name}
            </div>
          </div>
        );

    };

  }
}

export default User;