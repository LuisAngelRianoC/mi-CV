import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ textAlign: 'center', py: 2, bgcolor: '#f5f5f5'}}>
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} Luis Angel Riaño Calixto
    </Typography>
  </Box>
);

export default Footer;
