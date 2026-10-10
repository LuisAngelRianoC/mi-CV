# Mi currículum

## Descripción
Este proyecto es un currículum vitae interactivo y adaptable, desarrollado como un sitio web estático. Presenta el perfil profesional, la experiencia laboral, la educación, los conocimientos técnicos, los certificados y los proyectos.

## Características
- **Diseño adaptable**: optimizado para dispositivos móviles y de escritorio.
- **Traducción automática**: integración con Google Translate.
- **Iconos y colores**: uso de Font Awesome e identidad visual por sección.
- **Diseño profesional**: barra lateral con información personal y contenido principal con detalles profesionales.

## Tecnologías utilizadas
- **HTML5**: estructura del sitio web.
- **CSS3**: estilos y diseño adaptable con Flexbox y Grid.
- **JavaScript**: generación del currículum desde el catálogo y controles de traducción.
- **Catálogo JSON**: información centralizada en `data.json`.
- **Font Awesome**: iconos de la interfaz.
- **Google Translate**: traducción del contenido.

## Instalación y uso
1. Clona el repositorio:
   ```bash
   git clone https://github.com/LuisAngelRianoC/mi-CV.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd mi-CV
   ```
3. Inicia un servidor web local (por ejemplo, con la extensión Live Server de VS Code) y abre `index.html` desde la dirección del servidor. El navegador bloquea la carga de los catálogos JSON cuando se abre el HTML directamente como archivo local.

No se requieren dependencias adicionales; el proyecto es un sitio web estático.

## Administración del contenido
Edita los datos personales, la experiencia, los conocimientos, los certificados y los proyectos del perfil de sistemas en `data.json`. El perfil de servicio al cliente se administra por separado en `data-mesero.json`; ambos se pueden alternar desde el menú superior. Desde ese menú también se cambia el idioma y se puede exportar el currículum a un PDF de varias páginas mediante la opción de impresión del navegador. El diseño de impresión adapta el contenido para evitar que las secciones y responsabilidades queden cortadas entre páginas.

## Estructura del proyecto
```
mi-CV/
├── index.html          # Archivo principal del currículum
├── data.json           # Catálogo centralizado con la información del CV
├── data-mesero.json    # Catálogo del perfil de servicio al cliente
├── css/
│   └── style.css        # Estilos de la página
├── script.js            # Generación del contenido y traducción
├── img/
│   └── perfil.jpg       # Fotografía de perfil
└── README.md            # Este archivo
```

## Autor
**Luis Angel Riaño Calixto**  
Ingeniero en Sistemas  
- Correo: luisangelriano.c@gmail.com
- LinkedIn: [Luis Angel Riaño Calixto](https://www.linkedin.com/in/luis-angel-riaño-calixto-5b1a41200/)
- GitHub: [LuisAngelRianoC](https://github.com/LuisAngelRianoC)
