import React, {useState, useEffect } from 'react'
import { Typography, Paper, Avatar, CircularProgress, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import firebase from '../Firebase'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
})

const Dashboard=(props)=> {
    const { classes } = props
    const [posts, setPosts]=useState([])
    // const API = apiURL()
    
    useEffect(() => {
        const fetchPosts = async()=>{
            let res = await axios({
                method: 'get',
                url: `http://localhost:4001/posts`
            })
            debugger
            setPosts(res.data);
        }
        fetchPosts()
    }, []);

    


	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>

				<Typography component="h1" variant="h5">
					Hello { firebase.getCurrentUsername() }
				</Typography>
			
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					onClick={logout}
					className={classes.submit}>
					Logout
          		</Button>
			</Paper>
            
		</main>
	)

	async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}

export default withRouter(withStyles(styles)(Dashboard))