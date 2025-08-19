import React from 'react';
import { Box, List, ListItem, ListItemText, Stack, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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

  // Tabla simple sin bordes
  return (
    <Box mb={2}>
      <TableContainer>
        <Table size="small" sx={{ minWidth: 320 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography fontWeight="bold">Nombre</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">Tecnologías</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((proj, idx) => (
              <TableRow key={idx} sx={{ border: 0 }}>
                <TableCell sx={{ border: 0 }}>
                  <Typography fontSize={16}>{proj.name}</Typography>
                </TableCell>
                <TableCell sx={{ border: 0 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    {(projectTechs[proj.id] || []).map((tech) =>
                      faIcons[tech] ? (
                        <i
                          key={tech}
                          className={faIcons[tech].className}
                          style={{
                            color: faIcons[tech].color,
                            fontSize: 22,
                            width: 28,
                            height: 28,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                          title={tech}
                        />
                      ) : null
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProjectsSection;
