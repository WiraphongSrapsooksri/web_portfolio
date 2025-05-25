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

const skills = [
  {
    category: 'Programming Languages',
    items: ['SQL', 'Python', 'C#', 'JavaScript']
  },
  {
    category: 'Data Science & AI',
    items: ['Stats', 'EDA', 'ML (KNN, Naive Bayes, Decision Trees)', 'DL (Transformers, Object Detection, Image Classification)', 'NLP']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['FastAPI', 'React', 'Angular', 'Node.js', '.NET', 'TensorFlow']
  },
  {
    category: 'Tools & Platforms',
    items: ['Google Colab', 'Docker', 'Cloudflare', 'Nginx', 'Unix Command']
  },
  {
    category: 'Concepts',
    items: ['Large Language Models', 'Retrieval-Augmented Generation (RAG)', 'Model Context Protocol (MCP)', 'Reinforcement Learning']
  }
];

const Skills: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Stack spacing={6}>
        <Box textAlign="center">
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Skills
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            A collection of tools, languages, and concepts I have mastered or am actively exploring
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {skills.map((group, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
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
                <Typography variant="h6" fontWeight={600} mb={2}>
                  {group.category}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1.5}>
                  {group.items.map((item, idx) => (
                    <Chip
                      key={idx}
                      label={item}
                      variant="outlined"
                      sx={{
                        px: 1.5,
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          color: 'white',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default Skills;
