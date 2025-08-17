import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import experienceTranslations from '../locales/experience.ts';

const ExperienceSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('es') ? 'es' : 'en';
  const experiences = experienceTranslations[lang].experiences;
  return (
    <Box mb={2}>
      <List>
        {experiences.map((exp, idx) => (
          <ListItem key={idx} alignItems="flex-start">
            <ListItemText
              primary={
                <Typography sx={{ textAlign: 'justify', fontWeight: 'bold' }}>
                  {`${exp.role} @${exp.company} (${exp.date})`}
                </Typography>
              }
              secondary={
                <Typography sx={{ textAlign: 'justify' }}>
                  {exp.description}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ExperienceSection;
     