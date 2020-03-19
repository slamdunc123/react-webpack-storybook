import React, { Component } from 'react';
import axios from './AxiosTest.data';

export default class AxiosTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}
	getUsersData() {
		axios
			.get(`/users`, {})
			.then(res => {
				const data = res.data;
				console.log(data);
				// const users = data.map(u => (
				// 	<div>
				// 		<p>{u.id}</p>
				// 		<p>{u.name}</p>
				// 		<p>{u.email}</p>
				// 		<p>{u.website}</p>
				// 		<p>{u.company.name}</p>
				// 	</div>
				// ));

				this.setState({
					users: data
				});
			})
			.catch(error => {
				console.log(error);
			});
	}
	componentDidMount() {
		this.getUsersData();
	}
	render() {
		const { users } = this.state;
		// return <div>{this.state.users}</div>;
		return (
			<div>
				{users.map(u => (
					<div key={u.id}>
						<p>{u.id}</p>
						<p>{u.name}</p>
						<p>{u.email}</p>
						<p>{u.website}</p>
						<p>{u.company.name}</p>
					</div>
				))}
			</div>
		);
	}
}
