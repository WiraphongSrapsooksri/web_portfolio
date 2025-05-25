import {
    Email,
    GitHub,
    LinkedIn,
    Phone,
} from '@mui/icons-material';
import {
    Box,
    Container,
    IconButton,
    Link,
    Paper,
    Stack,
    Typography
} from '@mui/material';
import React from 'react';

const Contact: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Stack spacing={6}>
        <Box textAlign="center">
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Contact
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            Feel free to reach out for collaborations or just a friendly hello 👋
          </Typography>
        </Box>

        {/* Contact Info */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            border: '1px solid',
            borderColor: 'grey.200',
            borderRadius: 3,
            textAlign: 'center',
            '&:hover': {
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <Stack spacing={2}>
            <Link href="mailto:wiraphong.srap@gmail.com" underline="none" color="text.primary">
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                <Email fontSize="small" />
                <Typography>wiraphong.srap@gmail.com</Typography>
              </Stack>
            </Link>
            <Link href="tel:+66838380593" underline="none" color="text.primary">
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                <Phone fontSize="small" />
                <Typography>083 838 0593</Typography>
              </Stack>
            </Link>
            <Stack direction="row" spacing={2} justifyContent="center">
              <IconButton href="#" aria-label="LinkedIn" sx={{ color: 'text.secondary' }}>
                <LinkedIn />
              </IconButton>
              <IconButton href="#" aria-label="GitHub" sx={{ color: 'text.secondary' }}>
                <GitHub />
              </IconButton>
            </Stack>
          </Stack>
        </Paper>

        {/* Optional Contact Form (for future use) */}
        {/* <Paper
          elevation={0}
          sx={{
            p: 4,
            border: '1px solid',
            borderColor: 'grey.200',
            borderRadius: 3,
          }}
        >
          <Stack spacing={3}>
            <TextField label="Name" fullWidth variant="outlined" />
            <TextField label="Email" fullWidth variant="outlined" />
            <TextField label="Message" fullWidth variant="outlined" multiline rows={4} />
            <Button variant="contained" size="large">
              Send Message
            </Button>
          </Stack>
        </Paper> */}
      </Stack>
    </Container>
  );
};

export default Contact;
