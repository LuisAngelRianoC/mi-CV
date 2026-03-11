// Importa las imágenes para que Webpack las incluya en el build
import htmlImg from '../img/HTML.jpg';
import cssImg from '../img/css.jpg';
import jsImg from '../img/JavaScript.jpg';
import sqlImg from '../img/SimpleQueriesSQL.jpg';
import englishImg from '../img/b1.jpg';
import hikariImg from '../img/hikari.jpg';
import { google } from '../img/CloudDigitalLeader.jpg';

export function getImagePath(name: string): string {
  const images: Record<string, string> = {
    // Certificados
    'HTMLCurse': htmlImg,
    'CSSCurse': cssImg,
    'JavaScriptCurse': jsImg,
    'SQLSimpleQueries': sqlImg,
    'EnglishLevelB1': englishImg,
    'HikariKodama6N5': hikariImg,
    'GoogleCloudDigitalLeader': google,
  };
  return images[name] || '';    
}
