'use client';

import { Pacifico } from 'next/font/google';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SiGmail } from 'react-icons/si';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import AnimatedPage from '../Components/AnimatedPage';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
});

export default function Contact() {
  return (
    <AnimatedPage>
      <div className="h-screen flex flex-col justify-center items-center backdrop-blur-[1px]">
        <h1 className={`${pacifico.className} text-violet-900 text-3xl md:text-4xl`}>Get in Touch</h1>
        <div className="grid md:flex justify-center items-center gap-x-5">
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            className="grid"
          >
            <TextField label="Your Name" variant="outlined" name="name" />
            <TextField label="Your Email" variant="outlined" name="email" />
            <TextField label="Your Message" multiline maxRows={5} name="message" />

            <div className="flex justify-center mt-3">
              <Button type="submit" variant="contained" color="primary">
                Send Message
              </Button>
            </div>
          </Box>

          <div className="text-center md:text-left">
            <h2 className="font-bold text-gray-900">Email</h2>
            <p className="text-gray-500">gadongoro1@gmail.com</p>

            <h2 className="font-bold text-gray-900 mt-4">Phone</h2>
            <p className="text-gray-500">+254 798 436 255</p>

            <h2 className="font-bold text-gray-900 mt-4">Let&apos;s Connect</h2>
            <div className="flex justify-center md:justify-start gap-x-4 mt-2">
              <a href="mailto:gadongoro1@gmail.com">
                <SiGmail size={30} className="text-gray-600 hover:text-violet-700 hover:scale-110" />
              </a>
              <a href="https://wa.me/254798436255" target="_blank" rel="noreferrer">
                <FaWhatsapp size={30} className="text-gray-600 hover:text-violet-700 hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/gad-ongoro-4a31b4215/" target="_blank" rel="noreferrer">
                <FaLinkedin size={30} className="text-gray-600 hover:text-violet-700 hover:scale-110" />
              </a>
              <a href="https://twitter.com/gad_ongoro" target="_blank" rel="noreferrer">
                <BsTwitterX size={30} className="text-gray-600 hover:text-violet-700 hover:scale-110" />
              </a>
              <a href="https://github.com/Gad-Ongoro" target="_blank" rel="noreferrer">
                <FaGithub size={30} className="text-gray-600 hover:text-violet-700 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
