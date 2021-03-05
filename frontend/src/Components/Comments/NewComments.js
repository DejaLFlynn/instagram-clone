import React, { useState, useContext, useEffect } from "react";
import { Component } from 'react';
import axios from 'axios';
import {AContext} from '../../Providers/Context';
import {apiURL} from '../../Utils/apiURL';
import Divider from "@material-ui/core/Divider";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontFamily: "inherit",
        fontSize: "initial",
    },
    iconButton: {
        padding: 10,	
    },
}));


const NewComments = ({post_id})=>{
    const classes = useStyles();
    const API = apiURL();
	const { currentUsers } = useContext(AContext);
	
	const [comments, setComments] = useState([]);
	const [content, setContent] = useState("");
	const [short, setShort] = useState(true);
	const [shortComments, setShortComments] = useState([]);

    const handleSubmit = async (e) => {
		e.preventDefault();

        const dataObj = {
            user_id: currentUsers.id,
            post_id: post_id,
            comments: comments,
          }

		try {
            const res = await axios.post(API + `/comments/${post_id}`, dataObj)
            debugger
			setContent("")
            console.log(res.data)
            setComments(res.data.payload.content)
		} catch (error) {
			console.log(error);
		}
	};

    return(
        <div>
		<>
			{short ? (
				<>
					{" "}
					{shortComments.map((comment) => {
						return (
							<li key={comment.id} className="display-comments">
								{comment.content}
							</li>
						);
					})}
				
				</>
			) : (
				comments.map((comment) => {
					return (
						<li key={comment.id} className="display-comments-list">
							{comment.content}
						</li>
					);
				})
			)}
			<Divider className={classes.divider} orientation="horizontal" />
			<form onSubmit={handleSubmit} className="display-comments-form">
				<div component="form" className={classes.root}>
					<InputBase
						className={classes.input}
						placeholder="Add a comment…"
						type="text"
						name="comments"
						value={content}
						onChange={(e) => setContent(e.currentTarget.value)}
					/>
					<IconButton
						className={classes.iconButton}
						id="comment-button"
						type="submit"
					>
						Post
					</IconButton>
				</div>
			</form>
		</>
        </div>
    )

}

export default NewComments;