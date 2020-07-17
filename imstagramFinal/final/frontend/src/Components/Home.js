import React from 'react'
import { Typography, Paper, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

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

	submit: {
		marginTop: theme.spacing.unit * 3,
	},
})

function Home(props) {
	const { classes } = props

	return (
		<main className={classes.main}>
            <div className="iphone">
        <img src ="https://media.giphy.com/media/hsDY1IPzpP4DcB1Ba5/giphy.gif">
        </img>
            </div>
			<Paper className={classes.paper}>
				<Typography component="h1" variant="h5">
					Imstagram
				</Typography>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/register"
					className={classes.submit}>
					Register
          		</Button>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/login"
					className={classes.submit}>
					Login
          		</Button>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					component={Link}
					to="/dashboard"
					className={classes.submit}>
					Dashboard
          		</Button>
			</Paper>
		</main>
	)
}

export default withStyles(styles)(Home)