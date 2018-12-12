
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modal.css'

class UserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            user: null
        };
        this.dataUser()
        this.toggle = this.toggle.bind(this);
    }

    dataUser() {
        fetch('https://jsonplaceholder.typicode.com/users/' + this.props.id)
            .then(response => response.json())
            .then(json => this.setState({
                user: json
            })
            )
    }


    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const {user} = this.state

        console.log('>>>>>>>', user)
        if (user) {
            return (
                <div>
                    <div className="user one" onClick={this.toggle}>{this.props.buttonLabel}</div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className='modal-content'>
                        <ModalHeader toggle={this.toggle}>{user.username}</ModalHeader>
                        <ModalBody>
                            <div className="modal-container">
                                <div className="modal-detail-user">
                                    <p><i class="fas fa-user"></i></p>
                                    <p><i class="fas fa-at"></i></p>
                                    <p><i class="fas fa-phone"></i> </p>
                                </div>
                                <div className="modal-detail2-user">
                                    <p>{user.name}</p>
                                    <p>{user.email}</p>
                                    <p>{user.phone}</p>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            )

        }
        else {
            return <div>Loading</div>
        }
    }
}

export default UserModal;











  /*ender() {

    if (user === {}) {
      return <div>loading</div>
    } else {
      return (
        <div className={this.state.isOpen ? "sidebar" : "sidebar closed"} onClick={this.toggle}>
          <div className="container">
            <div className="user one"></div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <input className="my-input" type="text" placeholder="Cerca..." />
          </div>
        </div>
      );

    };
  }
}

export default Home;*/