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
import profileImg from '../img/perfil2.jpeg';

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
    <Box sx={{  p: 2, color: '#333', bgcolor: '#f9f9f9' }}>
      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
        <IconButton
          onClick={() => setOpenAvatar(true)}
          sx={{ p: 0, borderRadius: '50%' }}
        >
          <Avatar src={profileImg} sx={{ width: 120, height: 120, mb: 1, border: '2px solid #333' }} />
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
        <Typography variant="h5" fontWeight={600} sx={{ color: '#333' }}>{t('José Miguel Riaño Calixto')}</Typography>
      </Box>
      <Divider sx={{ my: 2, borderColor: '#333', opacity: 0.3 }} />
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#333' }}>
        {t('Contact')}
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon sx={{ color: '#333' }}><PhoneIcon /></ListItemIcon>
          <ListItemText
            primary={
              <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: '#333' }}>
                {t('744 260 5935')}
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: '#333' }}><EmailIcon /></ListItemIcon>
          <ListItemText
            primary={
              <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: '#333' }}>
                {t('josecalixto884@gmail.com')}
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: '#333' }}><LocationOnIcon /></ListItemIcon>
          <ListItemText
            primary={
              <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: '#333' }}>
                {t('Location')}
              </Typography>
            }
          />
        </ListItem>
      </List>
      <Divider sx={{ my: 2, borderColor: '#333', opacity: 0.3 }} />
      <Typography variant="h6" gutterBottom sx={{ color: '#333' }}>{t('Education')}</Typography>
      <List dense>
        <ListItem>
          <ListItemIcon sx={{ color: '#333' }}><SchoolIcon /></ListItemIcon>
          <ListItemText
            primary={<span style={{ color: '#333', fontSize: '1rem', fontWeight: 600 }}>{t('Técnico en Computación')}</span>}
            secondary={<span style={{ color: '#333', fontSize: '1rem' }}>{`2017 - 2020, ${t('Conalep II - Acapulco')}`}</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: '#333' }}><SchoolIcon /></ListItemIcon>
          <ListItemText
            primary={<span style={{ color: '#333', fontSize: '1rem', fontWeight: 600 }}>{t('Estudiante')}</span>}
            secondary={<span style={{ color: '#333', fontSize: '1rem' }}>{`2011 - 2017, ${t('Escuela Secundaria Técnica N°194 ')}`}</span>}
          />
        </ListItem>
        


      </List>
      <Divider sx={{ my: 2, borderColor: '#333', opacity: 0.3 }} />
      <Typography variant="h6" gutterBottom sx={{ color: '#333' }}>{t('Languages')}</Typography>
      <List dense>
        <ListItem>
          <ListItemIcon sx={{ color: '#333' }}><LanguageIcon /></ListItemIcon>
          <ListItemText
            primary={<span style={{ color: '#333', fontSize: '1rem', fontWeight: 600 }}>{t('Spanish')}</span>}
            secondary={<span style={{ color: '#333', fontSize: '1rem' }}>{t('Native')}</span>}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: '#333' }}><LanguageIcon /></ListItemIcon>
          <ListItemText
            primary={<span style={{ color: '#333', fontSize: '1rem', fontWeight: 600 }}>{t('English')}</span>}
            secondary={<span style={{ color: '#333', fontSize: '1rem' }}>{t('A1')}</span>}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Header;
