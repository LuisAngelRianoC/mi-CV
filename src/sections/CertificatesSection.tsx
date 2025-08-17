import React, { useState } from 'react';
import { Typography, Box, Grid, Card, CardActionArea, CardMedia, CardContent, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useTranslation } from 'react-i18next';
import htmlImg from '../img/HTML.jpg';
import cssImg from '../img/css.jpg';
import jsImg from '../img/JavaScript.jpg';
import sqlImg from '../img/SimpleQueriesSQL.jpg';
import englishImg from '../img/b1.jpg';
import hikariImg from '../img/hikari.jpg';

const certificates = [
  { name: 'Udemy: HTML Curse', key: 'cert_html', img: htmlImg },
  { name: 'Udemy: CSS Curse', key: 'cert_css', img: cssImg },
  { name: 'Udemy: JavaScript Curse', key: 'cert_js', img: jsImg },
  { name: 'Udemy: SQL - Simple Queries', key: 'cert_sql', img: sqlImg },
  { name: 'EuroCentro: English Level B1', key: 'cert_english', img: englishImg },
  { name: 'Hikari: Kodama 6 (N5)', key: 'cert_japanese', img: hikariImg },
];

const CertificatesSection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{ name: string; img: string; key: string } | null>(null);
  const { t } = useTranslation();

  const handleOpen = (cert: { name: string; img: string; key: string }) => {
    setSelected(cert);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <Box mb={2}>
      <Grid container spacing={2}>
        {certificates.map((cert, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card>
              <CardActionArea onClick={() => handleOpen(cert)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={cert.img}
                  alt={t(cert.key)}
                  sx={{ objectFit: 'contain', bgcolor: '#fafafa' }}
                />
                <CardContent>
                  <Typography variant="body2" align="center">{t(cert.name)}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        {selected && (
          <>
            <DialogTitle>{t(selected.name)}</DialogTitle>
            <DialogContent>
              <img
                src={selected.img}
                alt={t(selected.key)}
                style={{ width: '100%', maxWidth: 600, display: 'block', margin: 'auto' }}
              />
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default CertificatesSection;
