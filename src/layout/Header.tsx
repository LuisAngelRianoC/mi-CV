import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Divider, Stack, Link, List, ListItem, ListItemIcon, ListItemText, IconButton, MenuItem, Select } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' }
];

const Header: React.FC<{ onToggleTheme: () => void; darkMode: boolean }> = ({ onToggleTheme, darkMode }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'es');

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('cv-lang', language);
  }, [language, i18n]);

  useEffect(() => {
    const savedLang = localStorage.getItem('cv-lang');
    if (savedLang && savedLang !== language) {
      setLanguage(savedLang);
    }
  }, []);

  return (
    <Box sx={{ backgroundColor: 'background.paper' }}>
      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
        <Avatar sx={{ width: 80, height: 80, mb: 1 }} />
        <Typography variant="h5" fontWeight={600}>{t('Name')}</Typography>
        <Typography variant="subtitle1" color="text.secondary">{t('Web Developer')}</Typography>
      </Box>
      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <IconButton onClick={onToggleTheme} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Select
          size="small"
          value={language}
          onChange={e => setLanguage(e.target.value)}
          sx={{ minWidth: 100, bgcolor: 'background.paper' }}
        >
          {LANGUAGES.map(lang => (
            <MenuItem key={lang.code} value={lang.code}>{lang.label}</MenuItem>
          ))}
        </Select>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <Link href="https://www.facebook.com/LuisAngelRC97" target="_blank" rel="noopener">
          <FacebookIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/luis-angel-riaño-calixto-5b1a41200/" target="_blank" rel="noopener">
          <LinkedInIcon />
        </Link>
        <Link href="https://github.com/LuisAngelRianoC" target="_blank" rel="noopener">
          <GitHubIcon />
        </Link>
      </Stack>
      <Typography variant="h6" gutterBottom>{t('Contact')}</Typography>
      <List dense>
        <ListItem>
          <ListItemIcon><PhoneIcon /></ListItemIcon>
          <ListItemText primary={t('PhoneNumber')} />
        </ListItem>
        <ListItem>
          <ListItemIcon><EmailIcon /></ListItemIcon>
          <ListItemText primary={t('Email')} />
        </ListItem>
        <ListItem>
          <ListItemIcon><LocationOnIcon /></ListItemIcon>
          <ListItemText primary={t('Location')} />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" gutterBottom>{t('Education')}</Typography>
      <List dense>
        <ListItem>
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText primary={t("Master's Degree")} secondary={`2022 - Now, ${t('TecNM Acapulco')}`} />
        </ListItem>
        <ListItem>
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText primary={t('ICT Engineering')} secondary={`2016 - 2021, ${t('TecNM Costa Chica')}`} />
        </ListItem>
        <ListItem>
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText primary={t('Electronics Technician')} secondary={`2013 - 2016, ${t('Conalep II - Acapulco')}`} />
        </ListItem>
        <ListItem>
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText primary={t('Computer Technician')} secondary={`2013 - 2015, ${t('Cetec - Acapulco')}`} />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" gutterBottom>{t('Languages')}</Typography>
      <List dense>
        <ListItem>
          <ListItemIcon><LanguageIcon /></ListItemIcon>
          <ListItemText primary={t('Spanish')} secondary={t('Native')} />
        </ListItem>
        <ListItem>
          <ListItemIcon><LanguageIcon /></ListItemIcon>
          <ListItemText primary={t('English')} secondary={t('B1')} />
        </ListItem>
        <ListItem>
          <ListItemIcon><LanguageIcon /></ListItemIcon>
          <ListItemText primary={t('Japanese')} secondary={t('N5')} />
        </ListItem>
      </List>
    </Box>
  );
};

export default Header;
