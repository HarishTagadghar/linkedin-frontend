import React from "react";

export class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.submitApi = this.submitApi.bind(this);
  }
  submitApi(params) {
    console.log(this.state, "api called");
    this.state.email = "";
    this.state.password = "";
    this.state.name = "";
    this.setState({ email:"" , password: "" , name: ""});    console.log(this.state, "values cleared");
  }
  handleOnChange(event) {
    console.log(event.target.value, event.target.name);
 
    this.setState({ [event.target.name]:event.target.value });
  }
  clearState () {
    this.setState({ email:"" , password: "" , name: ""});
  }

  render() {
    return (
      <div>
        <h1>signUp</h1>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.handleOnChange}
          value={this.state.email}
        />
        <input type="password" name="password" placeholder="password"  onChange={this.handleOnChange} value={this.state.password}  />
        <input type="text" name="name"  onChange={this.handleOnChange} value={this.state.name}  placeholder="name" />
        <button type="submit" onClick={this.submitApi}>
          click{" "}
        </button>
      </div>
    );
  }
}

//   root.render(<MarkdownEditor />);
