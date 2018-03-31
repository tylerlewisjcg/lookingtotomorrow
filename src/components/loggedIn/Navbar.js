import React, { Component } from 'react';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    ////// might need to take out edit profile button
    render() { 
        return ( <div>
            <section>
            <span>Website Name</span>
            <span>Username</span>
            <button>Edit Profile</button>
            <button>Logout</button>
            </section>
            <section>
                <button>Home</button>
                <button>Parent Page</button>
                <button>Current Page</button>
            </section>
        </div> )
    }
}
 
export default Navbar;