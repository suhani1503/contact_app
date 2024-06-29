import React from 'react';

class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    };
    
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""});
        this.props.history.push("/");
    }

  render() {
    return (
      <div className="add-contact-container ui main">
        <h2 style={{ textAlign: 'left' }}>Add Contact</h2>
        <form className="add-contact-form ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" value = {this.state.name} onChange= { (e) => this.setState({name: e.target.value})} style={{ marginBottom: '18px' } } />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" value = {this.state.email} onChange= { (e) => this.setState({email: e.target.value})} style={{ marginBottom: '18px' }} />
          </div>
          <button className="ui button blue" style={{ marginTop: '15px' }}>Add</button>
          {/* Adjust the marginTop value to add desired spacing */}
        </form>
      </div>
    );
  }
}

export default AddContact;

