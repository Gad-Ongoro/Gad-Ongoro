import * as React from 'react';
import apiUrl from '../api';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import AnimatedPage from './AnimatedPage';
import Footer from './Footer';

export default function Contact() {
	const [formData, setFormData] = useState({});
	const [open, setOpen] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
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
		setLoading(true);
		console.log(formData);
		setFormData({});
		fetch(`${apiUrl}/post/contacts/`, {
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
				setLoading(false);
				return res.json();
			} else {
				setErrorSnackOpen(true);
				setLoading(false);
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
		<AnimatedPage>
		<div className='h-screen grid items-center'>
			<div className='grid justify-center items-center'>
				<h1 className='pacifico-regular text-violet-900 text-3xl md:text-4xl'>Get in Touch</h1>
				<div className='grid md:flex justify-center items-center gap-x-5'>
					<Box
						component="form"
						sx={{
							'& > :not(style)': { m: 1, width: '25ch' },
						}}
						noValidate
						autoComplete="off"
						onSubmit={handleSubmit}
						className='grid'
					>
						<TextField 
							id="outlined-basic"
							label="Your Name" 
							variant="outlined" 
							name="name"
							onChange={handleChange}
						/>
						<TextField 
							id="outlined-basic" 
							label="Your Email" 
							variant="outlined" 
							name="email"
							onChange={handleChange}
						/>
						<TextField
							id="outlined-multiline-flexible"
							label="Your Message"
							multiline
							maxRows={5}
							name="message"
							onChange={handleChange}
						/>

						<div className='flex justify-center'>
							<button className='text-white text-center bg-violet-500 transition duration-300 ease-in-out hover:bg-violet-700 font-bold py-2 px-4 rounded' type='submit'>Send Message</button>
							{loading && <Box sx={{ display: 'flex justify-center items-center' }}><CircularProgress /></Box>}
						</div>
					</Box>

						<div className=''>
							<div className='m-2 mt-0'>
								<h2 className='font-bold'>Email</h2>
								<p className='m-1 text-gray-500'>gadongoro1@gmail.com</p>
							</div>

							<div className='m-2 mt-4'>
								<h2 className='font-bold'>Phone</h2>
								<p className='m-1 text-gray-500'>+254 798 436 255</p>
							</div>

							<div className="m-2 mt-4">
								<h2 className='font-bold'>Let's Connect</h2>
								<div className='flex justify-center items-center gap-x-4'>
									<a href="mailto:gadongoro1@gmail.com;">
										<SiGmail size={30} className='text-gray-600 transition-all duration-200 hover:text-violet-700 hover:scale-110' />
									</a>

									<a href="https://wa.me/254798436255" target="_blank" rel="noreferrer">
										<FaWhatsapp size={30} className='text-gray-600 transition-all duration-200 hover:text-violet-700 hover:scale-110' />
									</a>

									<a href="https://www.linkedin.com/in/gad-ongoro-4a31b4215/" target="_blank" rel="noreferrer">
										<FaLinkedin size={30} className='text-gray-600 transition-all duration-200 hover:text-violet-700 hover:scale-110' />
									</a>
									
									<a href="https://twitter.com/gad_ongoro" target="_blank" rel="noreferrer">
										<BsTwitterX size={30} className='text-gray-600 transition-all duration-200 hover:text-violet-700 hover:scale-110' />
									</a>
									
									<a href="https://github.com/Gad-Ongoro" target="_blank" rel="noreferrer">
										<FaGithub size={30} className='text-gray-600 transition-all duration-200 hover:text-violet-700 hover:scale-110' />
									</a>
								</div>
							</div>
						</div>

					</div>
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

			<Footer></Footer>
		</div>
		</AnimatedPage>
	);
}
