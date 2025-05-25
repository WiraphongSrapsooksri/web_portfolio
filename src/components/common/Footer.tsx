import {
    Email,
    GitHub,
    KeyboardArrowUp,
    LinkedIn,
    Phone,
} from '@mui/icons-material';
import {
    Box,
    Container,
    Divider,
    IconButton,
    Link,
    Stack,
    Typography,
} from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const contactInfo = [
    {
      icon: <Email />,
      text: 'wiraphong.srap@gmail.com',
      href: 'mailto:wiraphong.srap@gmail.com',
    },
    {
      icon: <Phone />,
      text: '083 838 0593',
      href: 'tel:+66838380593',
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      href: '#', // แทนที่ด้วย LinkedIn URL จริง
      label: 'LinkedIn',
    },
    {
      icon: <GitHub />,
      href: '#', // แทนที่ด้วย GitHub URL จริง
      label: 'GitHub',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        py: 2,
        mt: 'auto',
      }}
    >
 
    </Box>
  );
};

export default Footer;