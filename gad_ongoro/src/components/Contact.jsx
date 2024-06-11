import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Contact() {
	const [formData, setFormData] = useState({});
	const [open, setOpen] = React.useState(false);
	const [errorSnackOpen, setErrorSnackOpen] = React.useState(false);

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		e.target.reset();
		console.log(formData);
		setFormData({});
		fetch('http://127.0.0.1:8000/api/post/contacts/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(formData),
		})
		.then((res) => {
			if (res.ok) {
				setOpen(true);
				return res.json();
			} else {
				setErrorSnackOpen(true);
				return Promise.reject(res);				
			}
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.error(error);
		});
	}

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
		setErrorSnackOpen(false);
  };

  return (
		<div className='h-screen grid items-center'>
			<div className='grid justify-center items-center'>
				<Box
					component="form"
					sx={{
						'& > :not(style)': { m: 1, width: '50ch' },
					}}
					noValidate
					autoComplete="off"
					onSubmit={handleSubmit}
					className='grid'
				>
					<TextField 
						id="outlined-basic"
						label="Name" 
						variant="outlined" 
						name="name"
						onChange={handleChange}
					/>
					<TextField 
						id="outlined-basic" 
						label="Email" 
						variant="outlined" 
						name="email"
						onChange={handleChange}
					/>
					<TextField
						id="outlined-multiline-flexible"
						label="Message"
						multiline
						maxRows={5}
						name="message"
						onChange={handleChange}
					/>

					<button className='text-white bg-violet-500 hover:bg-violet-700 font-bold py-2 px-4 rounded' type='submit'>Send Message</button>
					
				</Box>
			</div>

			{/* Snackbars */}
			<div>
				<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
					{/* variant could be success, error, warning, info, or default */}
					<Alert
						onClose={handleClose}
						severity="success"
						variant="filled"
						sx={{ width: '100%' }}
					>
						Message Sent Successfully!
					</Alert>
				</Snackbar>
    	</div>

			<div>
				<Snackbar open={errorSnackOpen} autoHideDuration={3000} onClose={handleClose}>
					<Alert
						onClose={handleClose}
						severity="warning"
						variant="filled"
						sx={{ width: '100%' }}
					>
						Something went wrong! Please try again.
					</Alert>
				</Snackbar>
    	</div>
		</div>
  );
}
