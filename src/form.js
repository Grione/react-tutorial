import React, { Component } from 'react';

class Form extends Component {
	initialState = {
		name: '',
		job: ''
	};

	state = this.initialState;

	_handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value // [name] - вычисляемое св-во берётся из const
		});
	};

	submitForm = () => {
		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
	};

	render() {
		const { name, job } = this.state;

		return (
			<form>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" value={name} onChange={this._handleChange} />
				<label htmlFor="job">Job</label>
				<input type="text" name="job" id="job" value={job} onChange={this._handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
			</form>
		);
	}
}

export default Form;
