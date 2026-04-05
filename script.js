function translateTo(lang) {
  console.log('Cambiando idioma a:', lang);
  
  var select = document.querySelector('.goog-te-combo');
  
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event('change', { bubbles: true }));
    console.log('✓ Idioma cambiado a:', lang);
  } else {
    console.log('Selector no encontrado, reintentando...');
    setTimeout(function() {
      var selectRetry = document.querySelector('.goog-te-combo');
      if (selectRetry) {
        selectRetry.value = lang;
        selectRetry.dispatchEvent(new Event('change', { bubbles: true }));
        console.log('✓ Idioma cambiado a:', lang);
      } else {
        console.error('✗ Widget de traducción no disponible');
      }
    }, 300);
  }
}