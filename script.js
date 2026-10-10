var selectedLanguage = 'es';

function translateTo(lang, attemptsLeft, forceChange) {
  selectedLanguage = lang;
  var select = document.querySelector('.goog-te-combo');
  var status = document.getElementById('translate-status');

  if (!select) {
    if (attemptsLeft === undefined) {
      attemptsLeft = 20;
    }
    if (attemptsLeft > 0) {
      window.setTimeout(function() {
        translateTo(lang, attemptsLeft - 1, forceChange);
      }, 250);
      return;
    }
    status.textContent = 'El traductor no está disponible. Verifica tu conexión e inténtalo de nuevo.';
    console.error('No se encontró el selector de idioma de Google Translate.');
    return;
  }

  status.textContent = '';
  if (forceChange || select.value !== lang) {
    select.value = lang;
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }
}

var activeProfileRequest = 0;

function ObtenerDatos(file) {
  var requestId = ++activeProfileRequest;
  fetch(file)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('No se pudo cargar ' + file + ': ' + response.status);
      }
      return response.json();
    })
    .then(function(data) {
      if (requestId !== activeProfileRequest) {
        return;
      }
      renderCatalog(data);
      if (selectedLanguage !== 'es') {
        window.setTimeout(function() {
          translateTo(selectedLanguage, undefined, true);
        }, 500);
      }
    })
    .catch(function(error) {
      if (requestId !== activeProfileRequest) {
        return;
      }
      console.error('Error al cargar el catálogo del CV:', error);
      var errorMessage = document.createElement('p');
      errorMessage.className = 'catalog-error';
      errorMessage.setAttribute('role', 'alert');
      errorMessage.textContent = 'No se pudo cargar la información del CV. Abre el sitio desde un servidor web.';
      document.querySelector('main').prepend(errorMessage);
    });
}

function createElement(tagName, className, text) {
  var element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (text !== undefined) {
    element.textContent = text;
  }
  return element;
}

function renderCatalog(data) {
  document.getElementById('profile-name').textContent = data.profile.name || '';
  document.getElementById('profile-title').textContent = data.profile.title || '';
  document.title = 'Currículum - ' + (data.profile.title || data.profile.name);
  document.getElementById('profile-specialties').textContent = data.profile.specialties || '';
  document.getElementById('profile-headline').textContent = data.profile.headline || '';
  document.getElementById('profile-summary').textContent = data.profile.summary || '';
  document.getElementById('soft-skills-list').textContent = (data.profile.softSkills || []).join(' | ');
  document.getElementById('footer-text').textContent = data.footer || '';

  document.querySelectorAll('[data-catalog-heading]').forEach(function(heading) {
    heading.textContent = (data.sections || {})[heading.dataset.catalogHeading] || '';
  });

  var visibleSections = Array.isArray(data.visibleSections)
    ? data.visibleSections
    : Array.from(document.querySelectorAll('[data-profile-section]')).map(function(section) {
      return section.dataset.profileSection;
    });
  document.querySelectorAll('[data-profile-section]').forEach(function(section) {
    section.hidden = visibleSections.indexOf(section.dataset.profileSection) === -1;
  });

  [
    'contact-list',
    'education-list',
    'language-list',
    'experience-list',
    'knowledge-list',
    'certificate-list',
    'project-list'
  ].forEach(function(id) {
    document.getElementById(id).textContent = '';
  });

  renderContact(data.contact || []);
  renderEducation(data.education || []);
  renderLanguages(data.languages || []);
  renderExperience(data.experience || []);
  renderKnowledge(data.knowledge || []);
  renderCertificates(data.certificates || []);
  renderProjects(data.projects || [], data.sections || {});
}

function renderContact(items) {
  var list = document.getElementById('contact-list');
  items.forEach(function(item) {
    var row = createElement('div', 'contact-item');
    var iconContainer = createElement('div', 'contact-icon');
    var icon = createElement('i');
    icon.className = item.icon;
    iconContainer.append(icon);

    var content = createElement('div', 'contact-content');
    content.append(createElement('p', 'contact-label', item.label));
    var value = createElement('p', 'contact-value');
    if (item.url) {
      var link = createElement('a', null, item.value);
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      var externalIcon = createElement('i', 'fa-solid fa-external-link-alt');
      link.append(' ', externalIcon);
      value.append(link);
    } else {
      value.textContent = item.value;
    }
    content.append(value);
    row.append(iconContainer, content);
    list.append(row);
  });
}

function renderEducation(items) {
  var list = document.getElementById('education-list');
  items.forEach(function(item) {
    var row = createElement('div', 'education-item');
    var iconContainer = createElement('div', 'education-icon');
    iconContainer.append(createElement('i', 'fa-solid fa-graduation-cap'));
    var content = createElement('div', 'education-content');
    content.append(
      createElement('h4', 'degree-title', item.degree),
      createElement('p', 'degree-period', item.period),
      createElement('p', 'degree-institution', item.institution)
    );
    row.append(iconContainer, content);
    list.append(row);
  });
}

function renderLanguages(items) {
  var list = document.getElementById('language-list');
  items.forEach(function(item) {
    var row = createElement('div', 'language-item');
    var iconContainer = createElement('div', 'language-icon');
    iconContainer.append(createElement('i', 'fa-solid fa-globe'));
    var content = createElement('div', 'language-content');
    content.append(
      createElement('p', 'language-name', item.name),
      createElement('p', 'language-level', item.level)
    );
    row.append(iconContainer, content);
    list.append(row);
  });
}

function renderExperience(items) {
  var list = document.getElementById('experience-list');
  items.forEach(function(item) {
    var job = createElement('div', 'job');
    var header = createElement('div', 'job-header');
    var title = createElement('div');
    title.append(
      createElement('h4', null, item.company),
      createElement('p', 'job-position', item.position)
    );
    header.append(title, createElement('p', 'job-period', item.period));
    job.append(header);

    if (item.highlights) {
      var highlights = createElement('ul', 'job-highlights');
      item.highlights.forEach(function(highlight) {
        highlights.append(createElement('li', null, highlight));
      });
      job.append(highlights);
    }

    if (item.description) {
      job.append(createElement('p', 'job-description', item.description));
    }

    if (item.projects) {
      item.projects.forEach(function(project) {
        var subjob = createElement('div', 'subjob');
        subjob.append(
          createElement('h5', null, project.title),
          createElement('p', null, project.description)
        );
        job.append(subjob);
      });
    }
    if (item.technologies) {
      var tools = createElement('div', 'subjob');
      tools.append(createElement('h5', null, 'Tecnologías y herramientas'));
      item.technologies.forEach(function(group) {
        tools.append(createElement('p', null, group.category + ': ' + group.items));
      });
      job.append(tools);
    }
    list.append(job);
  });
}

function renderKnowledge(items) {
  var list = document.getElementById('knowledge-list');
  items.forEach(function(item) {
    var category = createElement('div', 'knowledge-category');
    var values = createElement('ul');
    item.items.forEach(function(value) {
      values.append(createElement('li', null, value));
    });
    category.append(createElement('h4', null, item.category), values);
    list.append(category);
  });
}

function renderCertificates(items) {
  var list = document.getElementById('certificate-list');
  items.forEach(function(item) {
    var row = createElement('li');
    if (item.url) {
      var link = createElement('a', null, item.name);
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.append(createElement('i', 'fa-solid fa-arrow-up-right-from-square'));
      row.append(link);
    } else {
      row.append(createElement('span', 'certificate-name', item.name));
    }
    list.append(row);
  });
}

function renderProjects(items, sections) {
  if (!items.length) {
    return;
  }
  var list = document.getElementById('project-list');
  var heading = createElement('div', 'project-row project-heading');
  var projectName = createElement('div', 'project-name');
  projectName.append(createElement('strong', null, sections.projectName));
  var technologies = createElement('div', 'project-tech-heading');
  technologies.append(createElement('strong', null, sections.projectTechnologies));
  heading.append(projectName, technologies);
  list.append(heading);

  items.forEach(function(item) {
    var row = createElement('div', 'project-row');
    row.append(
      createElement('div', 'project-name', item.name),
      createElement('div', 'project-tech', item.technologies)
    );
    list.append(row);
  });
}

document.querySelectorAll('.profile-switch-button').forEach(function(button) {
  button.addEventListener('click', function() {
    document.querySelectorAll('.profile-switch-button').forEach(function(profileButton) {
      var isActive = profileButton === button;
      profileButton.classList.toggle('is-active', isActive);
      profileButton.setAttribute('aria-pressed', String(isActive));
    });
    ObtenerDatos(button.dataset.profileFile);
  });
});

document.querySelectorAll('[data-language]').forEach(function(button) {
  button.addEventListener('click', function() {
    translateTo(button.dataset.language, undefined, true);
  });
});

document.getElementById('export-pdf').addEventListener('click', function() {
  window.print();
});

ObtenerDatos('./data.json');