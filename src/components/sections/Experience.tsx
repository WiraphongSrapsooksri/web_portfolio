import {
    CalendarMonth,
    LocationOn,
    Work,
} from '@mui/icons-material';
import {
    Box,
    Chip,
    Container,
    Divider,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import React from 'react';

const Experience: React.FC = () => {
  const experience = {
    position: 'Full Stack Developer',
    type: 'Internship',
    company: 'soft square 1999 co. ltd',
    period: 'July - October 2024',
    location: 'Thailand',
    responsibilities: [
      'Developed web applications using Angular and C# .NET',
      'Designed UI/UX with Figma',
      'Customized calendar libraries and worked with PostgreSQL (stored procedures, Jaspersoft reports)',
      'Gained experience in Docker, Docker Compose, and DevOps (Nginx, Load Balancing)',
      'Built an AI Chatbot to store and display customer data in a Calendar system',
      'Assisted in research and data analysis for a Startup project',
    ],
    technologies: [
      'Angular',
      'C# .NET',
      'PostgreSQL',
      'Docker',
      'Docker Compose',
      'Nginx',
      'Figma',
      'Jaspersoft',
      'AI Chatbot',
      'DevOps',
    ],
  };

  return (
    <Container maxWidth="lg">
      <Stack spacing={6}>
        {/* Section Header */}
        <Box textAlign="center">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Experience
          </Typography>
        </Box>

        {/* Experience Card */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            border: '1px solid',
            borderColor: 'grey.200',
            borderRadius: 3,
            position: 'relative',
            '&:hover': {
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
              transform: 'translateY(-4px)',
            },
            transition: 'all 0.3s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              bgcolor: 'primary.main',
              borderRadius: '2px 0 0 2px',
            },
          }}
        >
          <Stack spacing={3}>
            {/* Header */}
            <Box>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems={{ xs: 'flex-start', sm: 'center' }}
                spacing={2}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      mb: 0.5,
                    }}
                  >
                    {experience.position}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 600,
                    }}
                  >
                    {experience.company}
                  </Typography>
                </Box>
                <Chip
                  label={experience.type}
                  color="primary"
                  variant="outlined"
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.9rem',
                  }}
                />
              </Stack>

              {/* Meta Information */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                sx={{ mt: 2 }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <CalendarMonth sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', fontWeight: 500 }}
                  >
                    {experience.period}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocationOn sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', fontWeight: 500 }}
                  >
                    {experience.location}
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            <Divider />

            {/* Responsibilities */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: 'text.primary',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Work sx={{ color: 'primary.main' }} />
                Key Responsibilities & Achievements
              </Typography>
              <Stack spacing={1.5}>
                {experience.responsibilities.map((responsibility, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        bgcolor: 'primary.main',
                        borderRadius: '50%',
                        mt: 1,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.primary',
                        lineHeight: 1.7,
                        fontSize: '1.1rem',
                      }}
                    >
                      {responsibility}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Divider />

            {/* Technologies */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                Technologies & Tools
              </Typography>
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1.5}
              >
                {experience.technologies.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    size="small"
                    sx={{
                      bgcolor: 'grey.100',
                      color: 'text.primary',
                      fontWeight: 500,
                      '&:hover': {
                        bgcolor: 'primary.100',
                        color: 'primary.main',
                        transform: 'translateY(-1px)',
                      },
                      transition: 'all 0.2s ease',
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Stack>
        </Paper>

        {/* Additional Note */}
        {/* <Paper
          elevation={0}
          sx={{
            p: 3,
            bgcolor: 'primary.50',
            border: '1px solid',
            borderColor: 'primary.100',
            borderRadius: 3,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'primary.main',
              fontWeight: 500,
              fontSize: '1.1rem',
            }}
          >
            💡 This internship provided valuable hands-on experience in full-stack development, 
            DevOps practices, and AI integration, strengthening my foundation for a career in Data Science.
          </Typography>
        </Paper> */}
      </Stack>
    </Container>
  );
};

export default Experience;