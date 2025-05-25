import { ArrowRight, Description } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

const projects = [
  {
    title: 'Graduation Project',
    description:
      'Classification of chest X-ray images by Data Preprocessing Techniques and Model Comparison',
    pdf: '/pdfs/graduation-project.pdf',
  },
  {
    title: 'NLP Project',
    description:
      'LGBT Cyberbullying Detection in Thai Language using NLP techniques',
    pdf: '/pdfs/nlp-project.pdf',
  },
  {
    title: 'Advanced Web (Facemash)',
    description:
      'A full-stack web app inspired by Facemash, using modern frontend/backend tech',
    link: 'https://github.com/WiraphongSrapsooksri/facemash',
  },
];

const listnamesubprojects = [
  {
    title: 'Association',
    description:
      'Data science project on finding support and confidence of association rules',
  },
  {
    title: 'Unix Shell Script',
    description:
      'Mini Project: Shell Script with menu functions for basic operations in Unix/Linux',
  },
];

const Projects: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Stack spacing={6}>
        {/* Section Header */}
        <Box textAlign="center">
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Projects
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            A showcase of my academic and personal projects
          </Typography>
        </Box>

        {/* Major Projects */}
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: '1px solid',
                  borderColor: 'grey.200',
                  borderRadius: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </Box>

                {project.pdf ? (
                  <Button
                    variant="outlined"
                    startIcon={<Description />}
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 2, alignSelf: 'flex-start' }}
                  >
                    View PDF
                  </Button>
                ) : project.link ? (
                  <Button
                    variant="outlined"
                    startIcon={<Description />}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 2, alignSelf: 'flex-start' }}
                  >
                    Visit Link
                  </Button>
                ) : null}
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Subprojects as List */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Other Mentioned Projects
          </Typography>
          <List>
            {listnamesubprojects.map((sub, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <ArrowRight />
                </ListItemIcon>
                <ListItemText
                  primary={sub.title}
                  secondary={sub.description}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Stack>
    </Container>
  );
};

export default Projects;
