import {
    AutoAwesome,
    DataObject,
    ModelTraining,
    Psychology,
} from '@mui/icons-material';
import {
    Box,
    Chip,
    Container,
    Grid,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import React from 'react';

const About: React.FC = () => {
  const interests = [
    'Machine Learning',
    'Deep Learning',
    'Large Language Models',
    'Data Analysis',
    'Retrieval-Augmented Generation (RAG)',
    'Model Context Protocol (MCP)',
    'Reinforcement Learning (RL)',
    'Business Intelligence',
    'Computer Vision',
    'Natural Language Processing',
  ];

  const highlights = [
    {
      icon: <Psychology />,
      title: 'Data Analysis',
      description: 'Passionate about analyzing data in business and general contexts to uncover meaningful insights',
    },
    {
      icon: <DataObject />,
      title: 'Machine Learning',
      description: 'Solid understanding of ML and DL theories with practical application experience',
    },
    {
      icon: <ModelTraining />,
      title: 'AI Technologies',
      description: 'Enthusiastic about emerging technologies like LLMs and cutting-edge AI research',
    },
    {
      icon: <AutoAwesome />,
      title: 'Innovation',
      description: 'Currently exploring RAG, MCP, and Reinforcement Learning for next-generation solutions',
    },
  ];

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
            About Me
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            A passionate Data Scientist focused on turning data into actionable insights
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Personal Profile */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                border: '1px solid',
                borderColor: 'grey.200',
                borderRadius: 3,
                '&:hover': {
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'primary.main',
                }}
              >
                Personal Profile
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                }}
              >
                I am a recent graduate with a strong passion for Data Science. I enjoy analyzing data—whether 
                in business or general contexts—to uncover meaningful insights and make informed, impactful 
                decisions through effective actions.
                <br /><br />
                In addition to my interest in data analysis, I have a solid understanding of Machine Learning (ML) 
                and Deep Learning (DL), both in theory and practical application. I am especially enthusiastic 
                about emerging technologies such as Large Language Models (LLMs), and I am currently exploring 
                areas like Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP), and Reinforcement 
                Learning (RL).
              </Typography>
            </Paper>
          </Grid>

          {/* Contact Information */}
          {/* <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                border: '1px solid',
                borderColor: 'grey.200',
                borderRadius: 3,
                '&:hover': {
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'primary.main',
                }}
              >
                Contact Information
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                    Full Name
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                    Wiraphong Srapsooksri
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                    Email
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                    wiraphong.srap@gmail.com
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                    Phone
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                    083 838 0593
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                    Desired Position
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 600, color: 'primary.main' }}>
                    Data Scientist
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid> */}
        </Grid>

        {/* Key Highlights */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 3,
              textAlign: 'center',
              color: 'text.primary',
            }}
          >
            Key Highlights
          </Typography>
          <Grid container spacing={3}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: 3,
                    '&:hover': {
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                      transform: 'translateY(-4px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      '& svg': {
                        fontSize: '2.5rem',
                      },
                    }}
                  >
                    {highlight.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: 'text.primary',
                    }}
                  >
                    {highlight.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {highlight.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Areas of Interest */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 3,
              textAlign: 'center',
              color: 'text.primary',
            }}
          >
            Areas of Interest
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              border: '1px solid',
              borderColor: 'grey.200',
              borderRadius: 3,
            }}
          >
            <Stack
              direction="row"
              flexWrap="wrap"
              gap={2}
              justifyContent="center"
            >
              {interests.map((interest, index) => (
                <Chip
                  key={index}
                  label={interest}
                  variant="outlined"
                  sx={{
                    px: 2,
                    py: 1,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </Container>
  );
};

export default About;