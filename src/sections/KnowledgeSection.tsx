import React from 'react';
import { Typography, Box, Chip } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useTranslation } from 'react-i18next';

const knowledge = [
  {
    titleKey: 'Databases',
    icon: <StorageIcon color="primary" />,
    items: ['MySQL', 'SQL Server'],
  },
  {
    titleKey: 'Languages',
    icon: <CodeIcon color="success" />,
    items: ['JavaScript', 'HTML', 'CSS', 'PHP', 'Java'],
  },
  {
    titleKey: 'Design',
    icon: <PaletteIcon sx={{ color: '#e7aa27' }} />,
    items: ['Figma', 'Canva', 'Balsamiq', 'UML', 'Responsive Design'],
  },
  {
    titleKey: 'Frameworks & Libraries',
    icon: <LightbulbIcon sx={{ color: '#e7da27' }} />,
    items: ['GitHub', 'Arduino', 'API REST', 'Jest', 'Bootstrap', 'React', 'Laravel', 'Node.js'],
  },
];

const KnowledgeSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box mb={2}>
      <Grid2 container spacing={2}>
        {knowledge.map((k, idx) => (
          <Grid2 xs={12} sm={6} md={6} key={idx}>
            <Box display="flex" alignItems="center" mb={1}>
              {k.icon}
              <Typography variant="subtitle1" fontWeight={600} ml={1}>
                {t(k.titleKey)}
              </Typography>
            </Box>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {k.items.map((item, i) => (
                <Chip key={i} label={t(item)} variant="outlined" />
              ))}
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default KnowledgeSection;
