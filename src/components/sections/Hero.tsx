import {
  Email,
  GitHub,
  KeyboardArrowDown,
  LinkedIn,
  Phone,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Email />, href: 'mailto:wiraphong.srap@gmail.com', label: 'Email' },
    { icon: <Phone />, href: 'tel:+66838380593', label: 'Phone' },
    { icon: <LinkedIn />, href: 'https://www.linkedin.com/in/wiraphongsrapsooksri', label: 'LinkedIn' },
    { icon: <GitHub />, href: 'https://github.com/WiraphongSrapsooksri', label: 'GitHub' }, 
  ];

  return (
    <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
          py: 8,
        }}
      >
        <Stack spacing={3} alignItems="center">
          {/* Profile Avatar */}
          <Avatar
            src="/images/profile.png"
            alt="Wiraphong Srapsooksri"
            sx={{
              width: { xs: 120, md: 180 },
              height: { xs: 120, md: 180 },
              border: '4px solid',
              borderColor: 'primary.main',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
          />

          {/* Main Content */}
          <Stack spacing={3} alignItems="center" maxWidth="800px">
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                color: 'text.primary',
                lineHeight: 1.2,
              }}
            >
              Wiraphong Srapsooksri
            </Typography>

            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '0.8rem', md: '1.1rem' },
                color: 'primary.main',
                mb: 2,
              }}
            >
              Data Scientist | Software Developer
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.25rem' },
                fontWeight: 400,
              }}
            >
              I am a recent graduate with a strong passion for Data Science. I enjoy analyzing data
              to uncover meaningful insights and make informed, impactful decisions through effective actions.
              {/* ฉันเพิ่งสำเร็จการศึกษาและมีความหลงใหลในศาสตร์ข้อมูลอย่างมาก ฉันสนุกกับการวิเคราะห์ข้อมูลเพื่อค้นหาข้อมูลเชิงลึกที่มีความหมาย และตัดสินใจอย่างรอบรู้และทรงพลังผ่านการกระทำที่มีประสิทธิภาพ */}
            </Typography>

            {/* Contact Buttons */}
            {/* <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button
                variant="contained"
                size="large"
                href="mailto:wiraphong.srap@gmail.com"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 14px rgba(25, 118, 210, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(25, 118, 210, 0.4)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get In Touch
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View My Work
              </Button>
            </Stack> */}

            {/* Social Links */}
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  sx={{
                    color: 'text.secondary',
                    bgcolor: 'grey.100',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'primary.50',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                    width: 48,
                    height: 48,
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Stack>

          {/* Scroll Down Indicator */}
          <IconButton
            onClick={handleScrollToAbout}
            sx={{
              mt: 6,
              color: 'text.secondary',
              animation: 'bounce 2s infinite',
              '@keyframes bounce': {
                '0%, 20%, 50%, 80%, 100%': {
                  transform: 'translateY(0)',
                },
                '40%': {
                  transform: 'translateY(-10px)',
                },
                '60%': {
                  transform: 'translateY(-5px)',
                },
              },
              '&:hover': {
                color: 'primary.main',
                animation: 'none',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
            aria-label="scroll to about section"
          >
            <KeyboardArrowDown fontSize="large" />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default Hero;