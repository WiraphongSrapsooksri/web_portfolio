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
          <Typography
            variant="h6"
            sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
          >
            Academic background and leadership experiences
          </Typography>
        </Box>

        {/* Academic Background */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            Academic Background
          </Typography>
          <Grid container spacing={3}>
            {education.map((edu, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    border: "1px solid",
                    borderColor: "grey.200",
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    "&:hover": {
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box sx={{ color: "primary.main" }}>{edu.icon}</Box>
                  <Typography variant="h6" fontWeight={600}>
                    {edu.institution}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {edu.field}
                  </Typography>
                  <Typography variant="body2">{edu.period}</Typography>
                  {edu.gpa !== "N/A" && (
                    <Typography variant="body2">GPA: {edu.gpa}</Typography>
                  )}
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
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            Activities & Achievements
          </Typography>
          <Grid container spacing={3}>
            {activities.map((activity, index) => (
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
                  <Box sx={{ color: "primary.main", mb: 1 }}>
                    {activity.icon}
                  </Box>
                  <Typography variant="h6" fontWeight={600}>
                    {activity.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {activity.organization}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {activity.year}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
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
