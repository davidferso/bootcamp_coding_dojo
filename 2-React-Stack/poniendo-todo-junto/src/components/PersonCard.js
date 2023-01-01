import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    aumentarEdad = () => {
        this.setState({
            age: this.state.age + 1
        });
    }
    render() {
        const { firstName, lastName, hairColor } = this.props;
        const styleButton = {
            border: "none",
            padding: "10px 20px 10px 20px",
            borderRadius: "10px",
            color: "dimgrey"
        };
        const styleP = {
            padding: "0px 15%"
        };

        return (
            <p>
                <p style={styleP}>
                    <div style={{ fontSize: "xx-large" }}>{lastName}, {firstName}</div>
                    <div>Age: {this.state.age}</div>
                    <div>Hair color: {hairColor}</div>
                </p>
                <button style={styleButton} onClick={this.aumentarEdad}>Birthday button for {firstName} {lastName}</button>
            </p>
        )
    }
}

export default PersonCard;