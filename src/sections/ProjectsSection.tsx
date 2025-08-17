import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Stack, CardActions } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { projectsTranslations, projectTechs } from '../locales/projects.ts';

// Mapea tecnologías a clases de FontAwesome y colores
const faIcons: Record<string, { className: string; color: string }> = {
  JavaScript: { className: 'fab fa-js', color: '#F7DF1E' },
  HTML: { className: 'fab fa-html5', color: '#E44D26' },
  CSS: { className: 'fab fa-css3-alt', color: '#1572B6' },
  PHP: { className: 'fab fa-php', color: '#777BB4' },
  Laravel: { className: 'fab fa-laravel', color: '#FF2D20' },
  Python: { className: 'fab fa-python', color: '#3776AB' },
  'OpenCV': { className: 'fas fa-cogs', color: '#5C3EE8' },
  'Raspberry Pi': { className: 'fab fa-raspberry-pi', color: '#C51A4A' },
  C: { className: 'fab fa-cuttlefish', color: '#00599C' },
  'C++': { className: 'fa-brands fa-c-plus-plus', color: '#004482' },
};

const ProjectsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('es') ? 'es' : 'en';
  const projects = projectsTranslations[lang].projects;

  return (
    <Box mb={2}>
      <Grid container spacing={2}>
        {projects.map((proj, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card variant="outlined" sx={{ height: '100%', boxShadow:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
              <CardContent>
                <Typography variant="h6" fontSize={'20px'} fontWeight="bold" gutterBottom>
                  Nombre: {`${proj.name}`}
                </Typography>
                <Typography variant="h6" fontSize={'14px'} fontWeight="bold" gutterBottom>
                  {`${proj.company}`}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {proj.date}
                </Typography>
              </CardContent>
              <CardActions
                id="tech-stack"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: 60,
                  p: 0,
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ width: '100%' }}
                >
                  {(projectTechs[proj.id] || []).map((tech) =>
                    faIcons[tech] ? (
                      <i
                        key={tech}
                        className={faIcons[tech].className}
                        style={{
                          color: faIcons[tech].color,
                          fontSize: 32,
                          width: 40,
                          height: 40,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        title={tech}
                      />
                    ) : null
                  )}
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
