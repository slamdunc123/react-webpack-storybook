import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export default function MuiSelect({ data }) {
	const classes = useStyles();
	// const [age, setAge] = React.useState('');

	const inputLabel = React.useRef(null);
	const [labelWidth, setLabelWidth] = React.useState(0);
	// const [users, setUsers] = React.useState(users);

	const handleChange = event => {
		// setAge(event.target.value);
		// console.log(age);
		console.log(event.target.value);
	};

	return (
		<div>
			<FormControl variant='outlined' className={classes.formControl}>
				<InputLabel ref={inputLabel} id='demo-simple-select-outlined-label'>
					Users
				</InputLabel>
				<Select
					labelId='demo-simple-select-outlined-label'
					id='demo-simple-select-outlined'
					defaultValue=''
					onChange={handleChange}
					labelWidth={labelWidth}
				>
					{data.map(u => (
						<MenuItem key={u.id} value={u.id}>
							{u.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
