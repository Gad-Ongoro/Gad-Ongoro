'use client';

import React, { useState } from 'react';
import { Pacifico } from 'next/font/google';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SiGmail } from 'react-icons/si';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import AnimatedPage from '../../components/animations/AnimatedPage';
import NewtonsCradleLoader from '@/components/loaders/NewtonsCradle';
import { notifySuccess, notifyInfo, notifyError } from '@/lib/toast';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      notifyInfo('All fields are required');
      return;
    }
    try {
      setLoading(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        notifyError(errorData.message || 'Failed to send message');
        return;
      }
      const data = await response.json();
      notifySuccess(data.message)
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      notifyError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
      setFormData({ name: '', email: '', message: '' });
      e.currentTarget.reset();
    }
  };

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
            onSubmit={handleSubmit}
          >
            <TextField label="Your Name" variant="outlined" name="name" onChange={handleChange} required />
            <TextField label="Your Email" variant="outlined" name="email" onChange={handleChange} required />
            <TextField label="Your Message" multiline maxRows={5} name="message" onChange={handleChange} required />

            { !loading ? (
              <div className="flex justify-center mt-3">
                <Button type="submit" variant="contained" color="primary">
                  Send Message
                </Button>
              </div>
              ) : (
                <NewtonsCradleLoader size="78" speed={1.4} color="purple" />
              )
            }
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
