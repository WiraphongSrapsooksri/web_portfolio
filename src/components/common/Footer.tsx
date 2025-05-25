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
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* Header */}
          <Box textAlign="center">
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 1,
                color: 'white',
              }}
            >
              Wiraphong Srapsooksri
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'grey.300',
                fontWeight: 500,
              }}
            >
              Data Scientist | Full Stack Developer
            </Typography>
          </Box>

          <Divider sx={{ borderColor: 'grey.700' }} />

          {/* Contact Info and Social Links */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            {/* Contact Info */}
            <Stack direction="row" spacing={3} alignItems="center">
              {contactInfo.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  color="inherit"
                  underline="none"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'grey.300',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    transition: 'color 0.2s ease',
                  }}
                >
                  {contact.icon}
                  <Typography variant="body2">{contact.text}</Typography>
                </Link>
              ))}
            </Stack>

            {/* Social Links */}
            <Stack direction="row" spacing={1}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'grey.300',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: 'grey.700' }} />

          {/* Bottom Section */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'grey.400',
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              © {currentYear} Wiraphong Srapsooksri. All rights reserved.
            </Typography>

            <IconButton
              onClick={handleScrollToTop}
              sx={{
                color: 'grey.400',
                border: '1px solid',
                borderColor: 'grey.700',
                '&:hover': {
                  color: 'primary.main',
                  borderColor: 'primary.main',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s ease',
              }}
              aria-label="scroll to top"
            >
              <KeyboardArrowUp />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;