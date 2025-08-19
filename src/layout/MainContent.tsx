import React, { useState } from 'react';
import { Box, Divider, Collapse, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ProfileSection from '../sections/ProfileSection.tsx';
import ExperienceSection from '../sections/ExperienceSection.tsx';
import KnowledgeSection from '../sections/KnowledgeSection.tsx';
import CertificatesSection from '../sections/CertificatesSection.tsx';
import ProjectsSection from '../sections/ProjectsSection.tsx';
import { useTranslation } from 'react-i18next';

// Usa los labels desde locales
const sectionKeys = [
  { key: 'Profile', Component: ProfileSection },
  { key: 'Experience', Component: ExperienceSection },
  { key: 'Knowledge', Component: KnowledgeSection },
  { key: 'Certificates & Courses', Component: CertificatesSection },
  { key: 'Projects', Component: ProjectsSection },
];

const MainContent: React.FC = () => {
  const [open, setOpen] = useState<boolean[]>(Array(sectionKeys.length).fill(true));
  const { t } = useTranslation();

  const handleToggle = (idx: number) => {
    setOpen((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <Box
      sx={{
        pr: 1,
        color: (theme) => theme.palette.text.primary,
        minHeight: '100vh',
        height: '100%',
      }}
    >
      {sectionKeys.map(({ key, Component }, idx) => (
        <Box key={key} sx={{ padding: 2, bgcolor: '#CCEBCC' }}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" fontWeight={600} sx={{ my: 2 }}>
              {t(key)}
            </Typography>
            <IconButton onClick={() => handleToggle(idx)} size="small">
              {open[idx] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Collapse in={open[idx]}>
            <Component />
          </Collapse>
          {idx < sectionKeys.length - 1 && <Divider sx={{ my: 2 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default MainContent;
