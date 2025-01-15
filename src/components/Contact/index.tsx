import { useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import { GoPerson } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './contact.css';

const sharedStyles = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'black',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'black',
  },
  '& .MuiOutlinedInput-input': {
    color: 'black',
  },
  '& .MuiFormLabel-asterisk': {
    color: 'var(--pink-color)',
  },
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const isFormComplete = Object.values(formData).every((value) => value.trim() !== '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // @ts-ignore
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    // @ts-ignore
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    // @ts-ignore
    const userId = import.meta.env.VITE_EMAILJS_USER_ID || '';

    emailjs.sendForm(serviceId, templateId, '#form', userId)
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch(() => {
        alert("Erro ao enviar mensagem. Tente novamente.");
      });
  };

  return (
    <div className="container-contact" id="contact">
      <motion.div
        className="card-container-projetos"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          component="form"
          id="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
            maxWidth: 600,
            margin: '170px 0 69px',
          }}
        >
          <div className="imgContact"></div>
          <div className="formDiv">
            <div className="divH1P">
              <h1 className="title">Let's work together</h1>
              <p>Let's talk and develop solutions for your company, together!</p>
            </div>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GoPerson />
                    </InputAdornment>
                  ),
                }}
                sx={sharedStyles}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GoPerson />
                    </InputAdornment>
                  ),
                }}
                sx={sharedStyles}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdOutlineMailOutline />
                    </InputAdornment>
                  ),
                }}
                sx={sharedStyles}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                label="Phone"
                type="tel"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoMdPhonePortrait />
                    </InputAdornment>
                  ),
                }}
                sx={sharedStyles}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Box>
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              sx={sharedStyles}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              className={`StyleBtnForm ${!isFormComplete ? 'disabled' : ''}`}
              type="submit"
              disabled={!isFormComplete}
            >
              Send
            </button>
          </div>
        </Box>
      </motion.div>
    </div>
  );
};