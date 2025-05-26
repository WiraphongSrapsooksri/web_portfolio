import { Description, EmojiEvents, Groups, School, Star } from "@mui/icons-material";
import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const Education: React.FC = () => {
  const education = [
    {
      level: "Bachelor Degree",
      field: "Computer Science",
      institution: "Mahasarakham University",
      period: "2021 - 2024",
      gpa: "3.63",
      icon: <School />,
    },
    {
      level: "High School",
      field: "Science-Mathematics",
      institution: "S.K. Wanalai Stuk Buriram",
      period: "2017 - 2021",
      gpa: "N/A",
      icon: <School />,
    },
  ];

  const certificates = [
    {
      title: "Google Data Analytics",
      organization: "Google",
      year: "2024",
      description:
        "Spreadsheets, SQL, Tableau, and R. They know how to prepare, process, analyze, and share data for thoughtful action.",
      icon: <EmojiEvents />,
      pdf: "/pdfs/google-data-analytics.pdf",
    },
  ];

  const activities = [
    {
      title: "Class President",
      organization: "Computer Science Class",
      year: "2021 - 2024",
      description:
        "Led class activities and represented students in academic matters",
      icon: <Groups />,
    },
    {
      title: "Leader of Homecoming 2023 event",
      organization: "Mahasarakham University",
      year: "2023",
      description:
        "Organized and led the annual homecoming event for university students",
      icon: <EmojiEvents />,
    },
    {
      title: "Head in C4C (Computer Camp for the Community)",
      organization: "Computer Science Department",
      year: "2022 and 2023",
      description:
        "Led computer education camp for community members and students",
      icon: <Groups />,
    },
    {
      title: "ELP (Experiential Learning Program)",
      organization: "Mahasarakham University",
      year: "2023",
      description:
        "Participated in hands-on learning experiences and practical projects",
      icon: <Star />,
    },
    {
      title: "Top 100 Team Startup Thailand League 2024",
      organization: "Startup Thailand",
      year: "2024",
      description: "Achieved top 100 ranking in national startup competition",
      icon: <EmojiEvents />,
    },
    {
      title: "Member MSU Cybersecurity Club",
      organization: "Mahasarakham University",
      year: "2022 - 2024",
      description: "Active member in cybersecurity research and activities",
      icon: <Groups />,
    },
  ];

  return (
    <Container maxWidth="lg">
      <Stack spacing={6}>
        <Box textAlign="center">
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Education
          </Typography>
        </Box>

        {/* Academic Background */}
        <Box>
          <Grid container spacing={3} justifyContent="center">
            {education.map((edu, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={6}
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '400px', lg: '500px' },
                    border: "1px solid",
                    borderColor: "grey.200",
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    height: '100%',
                    minHeight: { xs: 'auto', lg: '200px' },
                    "&:hover": {
                      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
                      transform: "translateY(-4px)",
                      borderColor: 'primary.light',
                    },
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <Box
                    sx={{
                      color: "primary.main",
                      mb: 2,
                      '& svg': {
                        fontSize: { xs: '2.5rem', md: '3rem' },
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover svg': {
                        transform: 'scale(1.1)',
                      }
                    }}
                  >
                    {edu.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: 'text.primary',
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                      lineHeight: 1.2,
                    }}
                  >
                    {edu.institution}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "primary.main",
                      fontWeight: 600,
                      mb: 1,
                      fontSize: { xs: '1.1rem', md: '1.2rem' }
                    }}
                  >
                    {edu.level}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 500,
                      mb: 1.5,
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    {edu.field}
                  </Typography>

                  <Box sx={{ mt: 'auto' }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                        mb: 0.5,
                        fontSize: { xs: '0.95rem', md: '1rem' }
                      }}
                    >
                      📅 {edu.period}
                    </Typography>
                    {edu.gpa !== "N/A" && (
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'success.main',
                          fontWeight: 600,
                          fontSize: { xs: '0.95rem', md: '1rem' }
                        }}
                      >
                        🎯 GPA: {edu.gpa}
                      </Typography>
                    )}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Certificates */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            Certificates
          </Typography>
          <Grid container spacing={3}>
            {certificates.map((cert, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    border: "1px solid",
                    borderColor: "grey.200",
                    borderRadius: 3,
                    "&:hover": {
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box sx={{ color: "primary.main", mb: 1 }}>{cert.icon}</Box>
                  <Typography variant="h6" fontWeight={600}>
                    {cert.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {cert.organization}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cert.year}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {cert.description}
                  </Typography>
                  {cert.pdf && (
                    <Button
                      variant="outlined"
                      startIcon={<Description />}
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mt: 2 }}
                    >
                      View Certificate
                    </Button>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Activities */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 4,
              textAlign: 'center',
              color: 'text.primary'
            }}
          >
            Activities & Achievements
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {activities.map((activity, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '400px', lg: '100%' },
                    border: "1px solid",
                    borderColor: "grey.200",
                    borderRadius: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: { xs: 'auto', lg: '240px' },
                    "&:hover": {
                      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
                      transform: "translateY(-4px)",
                      borderColor: 'primary.light',
                    },
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <Box
                    sx={{
                      color: "primary.main",
                      mb: 2,
                      '& svg': {
                        fontSize: { xs: '2.2rem', md: '2.5rem' },
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover svg': {
                        transform: 'scale(1.1)',
                      }
                    }}
                  >
                    {activity.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1.5,
                      color: 'text.primary',
                      fontSize: { xs: '1.1rem', md: '1.2rem' },
                      lineHeight: 1.3,
                      minHeight: { xs: 'auto', lg: '3rem' },
                      display: 'flex',
                      alignItems: 'flex-start',
                    }}
                  >
                    {activity.title}
                  </Typography>

                  <Box sx={{ mb: 1 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "primary.main",
                        fontWeight: 600,
                        fontSize: '0.9rem'
                      }}
                    >
                      {activity.organization}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: '0.85rem',
                        fontWeight: 500
                      }}
                    >
                      {activity.year}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      fontSize: { xs: '0.95rem', md: '0.9rem' },
                      flexGrow: 1,
                      mt: 'auto'
                    }}
                  >
                    {activity.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Gallery */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 3,
              textAlign: "center",
              color: "text.primary",
            }}
          >
            Activity Gallery
          </Typography>
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            {Array.from({ length: 14 }).map((_, index) => (
              <Grid
                item
                xs={4}
                sm={3}
                md={2}
                key={index}
              >
                <Box
                  component="img"
                  src={`/activities/Ac${index + 1}.jpg`}
                  alt={`Activity ${index + 1}`}
                  sx={{
                    width: "100%",
                    maxHeight: 120,
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: 1,
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default Education;
