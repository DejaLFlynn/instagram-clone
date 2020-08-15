import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon'
import TimeRangePicker from '@wojtekmaj/react-timerange-picker'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
      width: '100%',
      '& *': {
          fontFamily: 'audiowide',
          textAlign: 'center',
          outlineColor: '#36386D',
          border: 'none',
      },
  },
  container: {
      marginBottom: theme.spacing(1)
  },
  input: {
      width: '100%',
      fontFamily: 'audiowide',
      marginBottom: theme.spacing(1)
  }
  
}));
const Upload =()=>{
  const classes = useStyles();

    const [image, setImage] = useState(null);

    const handleChange = e => {
      if(imageFile[0]){
        handleUpload(imageFile[0])
       }
    };
  
    const handleUpload = async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", image.raw);
  
      await fetch("YOUR_URL", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: formData
      });
    };
    const handleSubmit = async (event) => {

      event.preventDefault()
      let id = uuidv4()
      try {
          let res = await axios.post(`${apiURL()}/workshops`, {
              id: id,
              user_id: currentUser.uid,
              content: content.value,
              workshop_img: workshopImage
          })
      
          skills.forEach( async (skill) => {
              let res = await axios.post(`${apiURL()}/posts`, {
                posts_id: id
                
           })
      })
      } catch (error) {
          throw Error(error)
      }

      debugger
      handleCloseModal()
  }
  
    return (
      <div>
           <form onSubmit={handleSubmit}>

        <label htmlFor="upload-button">
          {image.preview ? (
            <img src={image.preview} alt="holder" width="300" height="300" />
            ) : (
              <>
              <span className="stack">
                <i className="circle" />
                <i className="store" />
              </span>
              <h5 className="text">Upload your photo</h5>
            </>
          )}
        </label>
        <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleChange}
          />
        <br />
        <button onClick={handleUpload}>Upload</button>
          </form>
      </div>
    );
};
export default Upload;