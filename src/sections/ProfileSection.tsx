import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ProfileSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box mb={2}>
      <Typography variant="body1" textAlign="justify">
        {t('ProfileText')}
      </Typography>
    </Box>
  );
};

export default ProfileSection;
