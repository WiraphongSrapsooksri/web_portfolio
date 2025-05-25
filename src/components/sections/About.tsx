import {
  AutoAwesome,
  Business,
  Code,
  DataObject,
  ModelTraining,
  PanToolSharp,
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
      description: 'Passionate about analyzing data\nin business and general contexts\nto uncover meaningful insights',
    },
    {
      icon: <DataObject />,
      title: 'Machine Learning',
      description: 'Solid understanding of ML and DL\ntheories with practical\napplication experience',
    },
    {
      icon: <ModelTraining />,
      title: 'AI Technologies',
      description: 'Enthusiastic about emerging\ntechnologies like LLMs and\ncutting-edge AI research\nCurrently exploring RAG, MCP,\nReinforcement Learning for\nnext-generation solutions',
    },
    {
      icon: <Code />,
      title: 'Programming',
      description: 'Experience with multiple\nprogramming languages\nand frameworks',
    },
    // {
    //   icon: <PanToolSharp />,
    //   title: 'Tools',
    //   description: 'Often studying and\nexperimenting with\nnew tools',
    // }
  ];

  return (
    <Container maxWidth="lg">
      <Stack spacing={4}>
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
        </Grid>

        {/* Key Highlights */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 4,
              textAlign: 'center',
              color: 'text.primary',
            }}
          >
            Key Highlights
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {highlights.map((highlight, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 3 },
                    textAlign: 'center',
                    height: '100%',
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '350px', md: '100%' },
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    minHeight: { xs: 'auto', md: '200px' },
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                      transform: 'translateY(-3px)',
                      borderColor: 'primary.light',
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: { xs: 2, md: 1.5 },
                      '& svg': {
                        fontSize: { xs: '2.5rem', md: '2.2rem' },
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover svg': {
                        transform: 'scale(1.05)',
                      }
                    }}
                  >
                    {highlight.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: { xs: 1.5, md: 1 },
                      color: 'text.primary',
                      fontSize: { xs: '1.2rem', md: '1.1rem' },
                    }}
                  >
                    {highlight.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: { xs: '0.95rem', md: '0.875rem' },
                      flexGrow: 1,
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}
                  >
                    {highlight.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Stack>
    </Container>
  );
};

export default About;