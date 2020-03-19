import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import api from './MuiSelect.data';
import MuiSelect from './MuiSelect';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export default function Mui() {
	const classes = useStyles();

	const inputLabel = React.useRef(null);
	const [users, setUsers] = React.useState([]);

	const getUsersData = () => {
		api
			.get(`/users`, {})
			.then(res => {
				const data = res.data;
				console.log(data);

				setUsers(data);
			})
			.catch(error => {
				console.log(error);
			});
	};
	React.useEffect(() => {
		// setLabelWidth(inputLabel.current.offsetWidth);
		getUsersData();
	}, []);

	return (
		<div>
			<MuiSelect data={users} />
		</div>
	);
}
