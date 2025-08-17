const projectsTranslations = {
  en: {
    projects: [
      {
        id: 'learn-kanjis',
        date: 'In process',
        company: 'Freelance',
        name: 'Learn Kanjis',
      },
      {
        id: 'cecyteg',
        date: '2024',
        company: 'CECyTEG',
        name: 'Files Management Platform',
      },
      {
        id: 'facial-recognition',
        date: '2022',
        company: 'TecNM Campus Acapulco',
        name: 'Facial Recognition',
      },
      {
        id: 'auto-irrigation',
        date: '2022',
        company: 'TecNM Campus Acapulco',
        name: 'Automatic Irrigation System',
      },
      {
        id: 'sexeducation',
        date: '2020',
        company: 'Freelance',
        name: 'SexEducation Game',
      },
      {
        id: 'hmk-page',
        date: '2020',
        company: 'Freelance',
        name: 'HMK Page',
      },
      {
        id: 'postreria-amador',
        date: '2020',
        company: 'Freelance',
        name: 'Postreria Amador',
      },
      {
        id: 'robotic-arm',
        date: '2015',
        company: 'Conalep II',
        name: 'Robotic Arm',
      },
    ]
  },
  es: {
    projects: [
      {
        id: 'learn-kanjis',
        date: 'En proceso',
        company: 'Freelance',
        name: 'Aprende Kanjis',
      },
      {
        id: 'cecyteg',
        date: '2024',
        company: 'CECyTEG',
        name: 'Plataforma de Gestión de Archivos',
      },
      {
        id: 'facial-recognition',
        date: '2022',
        company: 'TecNM Campus Acapulco',
        name: 'Reconocimiento Facial',
      },
      {
        id: 'auto-irrigation',
        date: '2022',
        company: 'TecNM Campus Acapulco',
        name: 'Sistema de Riego Automático',
      },
      {
        id: 'sexeducation',
        date: '2020',
        company: 'Freelance',
        name: 'Juego SexEducation',
      },
      {
        id: 'hmk-page',
        date: '2020',
        company: 'Freelance',
        name: 'Página HMK',
      },
      {
        id: 'postreria-amador',
        date: '2020',
        company: 'Freelance',
        name: 'Postrería Amador',
      },
      {
        id: 'robotic-arm',
        date: '2015',
        company: 'Conalep II',
        name: 'Brazo Robótico',
      },
    ]
  }
};

// Relaciona tecnologías con el id del proyecto
const projectTechs: Record<string, string[]> = {
  'learn-kanjis': ['HTML', 'CSS', 'JavaScript'],
  'cecyteg': ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel'],
  'facial-recognition': ['Python', 'OpenCV', 'Raspberry Pi'],
  'auto-irrigation': ['JavaScript', 'Python'],
  'sexeducation': ['HTML', 'CSS', 'JavaScript'],
  'hmk-page': ['HTML', 'CSS', 'JavaScript'],
  'postreria-amador': ['HTML', 'CSS', 'JavaScript'],
  'robotic-arm': ['C', 'C++'],
};

export { projectsTranslations, projectTechs };
