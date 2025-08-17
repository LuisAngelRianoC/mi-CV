import React, { useState } from 'react';
import { Box, Divider, Collapse, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ProfileSection from '../sections/ProfileSection.tsx';
import ExperienceSection from '../sections/ExperienceSection.tsx';
import KnowledgeSection from '../sections/KnowledgeSection.tsx';
import CertificatesSection from '../sections/CertificatesSection.tsx';
import ProjectsSection from '../sections/ProjectsSection.tsx';

const sections = [
  { label: 'Profile', Component: ProfileSection },
  { label: 'Experience', Component: ExperienceSection },
  { label: 'Knowledge', Component: KnowledgeSection },
  { label: 'Certificates & Courses', Component: CertificatesSection },
  { label: 'Projects', Component: ProjectsSection },
];

const MainContent: React.FC = () => {
  const [open, setOpen] = useState<boolean[]>(Array(sections.length).fill(true));

  const handleToggle = (idx: number) => {
    setOpen((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <Box
      sx={{
        pr: 1,
      }}
    >
      {sections.map(({ label, Component }, idx) => (
        <Box key={label}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" fontWeight={600} sx={{ my: 2 }}>
              {label}
            </Typography>
            <IconButton onClick={() => handleToggle(idx)} size="small">
              {open[idx] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Collapse in={open[idx]}>
            <Component />
          </Collapse>
          {idx < sections.length - 1 && <Divider sx={{ my: 2 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default MainContent;
