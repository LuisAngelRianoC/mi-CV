import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Divider, Stack, Link, List, ListItem, ListItemIcon, ListItemText, IconButton, MenuItem, Select, Dialog, DialogContent } from '@mui/material';
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
import profileImg from '../img/perfil.jpg';
import { projectsTranslations } from '../locales/projects.ts'; // Asegúrate de que locales tenga las traducciones necesarias

const LANGUAGES = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' }
];

const Header: React.FC<{ onToggleTheme: () => void; darkMode: boolean }> = ({ onToggleTheme, darkMode }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'es');
  const [openAvatar, setOpenAvatar] = useState(false);

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

  const lang = i18n.language.startsWith('es') ? 'es' : 'en';

  return (
    <Box sx={{ p: 2, color: '#fff' }}>
      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
        <IconButton
          onClick={() => setOpenAvatar(true)}
          sx={{ p: 0, borderRadius: '50%' }}
        >
          <Avatar src={profileImg} sx={{ width: 120, height: 120, mb: 1, border: '2px solid #fff' }} />
        </IconButton>
        <Dialog open={openAvatar} onClose={() => setOpenAvatar(false)} maxWidth="md">
          <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'background.paper', p: 2 }}>
            <img
              src={profileImg}
              alt="profile"
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 4px 24px rgba(0,0,0,0.15)'
              }}
            />
          </DialogContent>
        </Dialog>
        <Typography variant="h5" fontWeight={600} sx={{ color: '#fff' }}>{t('Name')}</Typography>
        <Typography variant="subtitle1" sx={{ color: '#fff' }}>{t('Web Developer')}</Typography>
      </Box>
      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <IconButton onClick={onToggleTheme} sx={{ color: '#fff' }}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Select
          size="small"
          value={language}
          onChange={e => setLanguage(e.target.value)}
          sx={{ minWidth: 100, bgcolor: 'background.paper',
            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' }
          }}
          inputProps={{
            style: { color: '#fff' }
          }}
        >
          {LANGUAGES.map(lang => (
            <MenuItem key={lang.code} value={lang.code} sx={{ color: '#222' }}>{lang.label}</MenuItem>
          ))}
        </Select>
      </Stack>
      <Divider sx={{ my: 2, borderColor: '#fff', opacity: 0.3 }} />
      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <Link href="https://www.facebook.com/LuisAngelRC97" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
          <FacebookIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/luis-angel-riaño-calixto-5b1a41200/" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
          <LinkedInIcon />
        </Link>
        <Link href="https://github.com/LuisAngelRianoC" target="_blank" rel="noopener" sx={{ color: '#fff' }}>
          <GitHubIcon />
        </Link>
      </Stack>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#fff' }}>
        {t('Contact')}
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon sx={{ color: '#fff' }}><PhoneIcon /></ListItemIcon>
          <ListItemText
            primary={
              <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: '#fff' }}>
                {t('PhoneNumber')}
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: '#fff' }}><EmailIcon /></ListItemIcon>
          <ListItemText
            primary={
              <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: '#fff' }}>
                {t('Email')}
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: '#fff' }}><LocationOnIcon /></ListItemIcon>
          <ListItemText
            primary={
              <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: '#fff' }}>
                {t('Location')}
              </Typography>
            }
          />
        </ListItem>
      </List>
      <Divider sx={{ my: 2, borderColor: '#fff', opacity: 0.3 }} />
      <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>{t('Education')}</Typography>
      <List dense>
        <ListItem>
          <ListItemIcon sx={{ color: '#fff' }}><SchoolIcon /></ListItemIcon>
          <ListItemText
            primary={<span style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>{t("Master's Degree")}</span>}
            secondary={<span style={{ color: '#fff', fontSize: '1rem' }}>{`2022 - 2025, ${t('TecNM Acapulco')}`}</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: '#fff' }}><SchoolIcon /></ListItemIcon>
          <ListItemText
            primary={<span style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>{t('ICT Engineering')}</span>}
            secondary={<span style={{ color: '#fff', fontSize: '1rem' }}>{`2016 - 2021, ${t('TecNM Costa Chica')}`}</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: '#fff' }}><SchoolIcon /></ListItemIcon>
          <ListItemText
            primary={<span style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>{t('Electronics Technician')}</span>}
            secondary={<span style={{ color: '#fff', fontSize: '1rem' }}>{`2013 - 2016, ${t('Conalep II - Acapulco')}`}</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: '#fff' }}><SchoolIcon /></ListItemIcon>
          <ListItemText
            primary={<span style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>{t('Computer Technician')}</span>}
            secondary={<span style={{ color: '#fff', fontSize: '1rem' }}>{`2013 - 2015, ${t('Cetec - Acapulco')}`}</span>}
          />
        </ListItem>
      </List>
      <Divider sx={{ my: 2, borderColor: '#fff', opacity: 0.3 }} />
      <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>{t('Languages')}</Typography>
      <List dense>
        <ListItem>
          <ListItemIcon sx={{ color: '#fff' }}><LanguageIcon /></ListItemIcon>
          <ListItemText
            primary={<span style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>{t('Spanish')}</span>}
            secondary={<span style={{ color: '#fff', fontSize: '1rem' }}>{t('Native')}</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: '#fff' }}><LanguageIcon /></ListItemIcon>
          <ListItemText
            primary={<span style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>{t('English')}</span>}
            secondary={<span style={{ color: '#fff', fontSize: '1rem' }}>{t('B1')}</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: '#fff' }}><LanguageIcon /></ListItemIcon>
          <ListItemText
            primary={<span style={{ color: '#fff', fontSize: '1rem', fontWeight: 600 }}>{t('Japanese')}</span>}
            secondary={<span style={{ color: '#fff', fontSize: '1rem' }}>{t('N5')}</span>}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Header;
