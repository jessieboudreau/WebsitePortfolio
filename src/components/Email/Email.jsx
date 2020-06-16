import React, { Component } from 'react';
// import {  FormGroup, Input, Button} from 'reactstrap';
import './Email.css';
import { makeStyles, createMuiTheme, ThemeProvider, } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        margin: theme.spacing(1),
        padding: '15px 20px 25px 20px',
        minWidth: 120,
    },
  },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ed4856',
          },
    },
    });

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class email extends Component{
    constructor(){
        super()
        this.state={
            sucessSnack:false,
            errorSnack:false,
            errorMsg:"",
            firstName:"",
            lastName:"",
            email:"",
            message:"",
            sendButton:
                <div className="send-btn-container">
                    <Button
                        disabled 
                        type="submit"
                        // onClick={() => {this.handleReset()}}
                        style={{ maxWidth: 300, width: '70vw', height: 55 }} 
                        size="large" 
                        variant="outlined">
                            Send
                    </Button>
                </div>
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleSuccessClose = (event, reason) => {
        if (reason === 'clickaway') {
          this.setState({
              sucessSnack:false,
          });
        }
      };

    handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
        this.setState({
            errorSnack:true,
        });
    }
    };

    handleSuccess = () => {
        this.setState({ sucessSnack:true, firstName:"", lastName:"", email:"", message:"", })
    }

    handleError = (error) => {
        this.setState({ errorSnack:true, errorMsg:error })
    }

    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert('Success! Your message has been sent.'), this.handleSuccess())
          .catch(() => alert('Sorry, an error occurred while sending your message.'), this.handleError());
  
        e.preventDefault();
      };

    handleChange = e => {
        console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value})

        if(this.state.firstName !== "" && this.state.lastName !== "" && this.state.email !== "" && this.state.message !== "")
        {
            this.setState({sendButton:
                <div className="send-btn-container">
                    <Button
                        type="submit"
                        onClick={() => this.handleSuccess}
                        style={{ maxWidth: 300, width: '70vw', height: 55 }} 
                        size="large" 
                        variant="outlined">
                            Send
                    </Button>
                </div>
                })
        }
        else{
            this.setState({sendButton:
                <div className="send-btn-container">
                    <Button
                        disabled 
                        type="submit"
                        // onClick={() => {this.handleReset()}}
                        style={{ maxWidth: 300, width: '70vw', height: 55 }} 
                        size="large" 
                        variant="outlined">
                            Send
                    </Button>
                </div>
                })
        }
    }

    render(){

        return (
            <div className="form-full">
                <Snackbar open={this.state.sucessSnack} autoHideDuration={6000} onClose={this.handleSuccessClose}>
                    <Alert onClose={this.handleSuccessClose} severity="success">
                        Thanks! Your message has been sent.
                    </Alert>
                </Snackbar>
                <Snackbar open={this.state.errorSnack} autoHideDuration={6000} onClose={this.handleErrorClose}>
                    <Alert onClose={this.handleErrorClose} severity="error">
                        Sorry, there was an error sending your message. Error: {this.state.errorMsg}
                    </Alert>
                </Snackbar>
                <ThemeProvider theme={theme}>
                    <div className="tab-paragraph-container">
                        <h1 className="tab-title">Drop me a line!</h1>
                    </div>
                    <form className={useStyles.root} name="contact" method="POST" id="email-form" onSubmit={this.handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                        <div className="input-container">
                            <div>
                                <TextField 
                                    id="fname" 
                                    style={{ width: '100%', height: 56, margin: 10, }}
                                    label="Outlined" 
                                    variant="outlined"
                                    name="firstName"
                                    label="First name"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    />
                                <TextField 
                                    id="lname" 
                                    style={{ width: '100%', height: 56, margin: 10, }}
                                    label="Outlined" 
                                    variant="outlined"
                                    name="lastName" 
                                    label="Last name"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    />
                                <TextField 
                                    id="email" 
                                    style={{ width: '100%', height: 56, margin: 10, }}
                                    label="Outlined" 
                                    variant="outlined"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    />
                            </div>
                            <div>
                                <TextField 
                                    multiline
                                    rows={9}
                                    id="message" 
                                    style={{ width: '100%', minHeight: '100%', margin: 10, }}
                                    label="Outlined" 
                                    variant="outlined"
                                    name="message"
                                    label="Message"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                    />
                            </div>
                        </div>
                        
                        {this.state.sendButton}

                    </form>
                </ThemeProvider>
            </div>
        )
    }
    
}

export default email
