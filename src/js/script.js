document.addEventListener('DOMContentLoaded', function () {

  // --- Site constants (kept aligned with src/_data/site.json) ---
  const WA_NUMBER = '5491128892043';
  const DOCTURNO_URL = 'https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&';
  const SMILEVIEW_BASE = 'https://providerbio-latam.invisalign.com/sv/c22755130';
  const utm = (medium, content) =>
    `?utm_source=site&utm_medium=${medium}&utm_campaign=smileview&utm_content=${content}`;

  // --- 1. DATOS DE PATOLOGÍAS ---
  const pathologyData = {
    "apiñamiento": {
      title: "Apiñamiento Dental",
      description: "Cuando no hay espacio suficiente para que los dientes se alineen correctamente.",
      causes: "Falta de espacio óseo, dientes grandes, pérdida temprana de dientes de leche.",
      consequences: "Dificulta la higiene, riesgo de caries/gingivitis, problemas de mordida, estética.",
      why_correct: "Facilita la limpieza, previene enfermedades, mejora función y estética.",
      treatment_focus: "Los <strong>alineadores invisibles</strong> son ideales para corregir el apiñamiento de forma discreta y eficiente.",
      duration_range: "6 - 18 meses (Estimado)",
      learn_more_url: "/apinamiento-alineadores/",
      wa_text: "Hola%2C%20me%20interesa%20consultar%20sobre%20alineadores%20para%20api%C3%B1amiento."
    },
    "diastemas": {
      title: "Diastemas (Dientes Separados)",
      description: "Espacios visibles entre dientes.",
      causes: "Desproporción dientes/maxilar, frenillo labial grueso, hábitos.",
      consequences: "Impacto estético, posible dificultad fonética, acumulación de comida.",
      why_correct: "Mejora estética, función y previene problemas de encías.",
      treatment_focus: "Los <strong>alineadores invisibles</strong> cierran estos espacios de manera controlada y estética.",
      duration_range: "6 - 12 meses (Estimado)",
      learn_more_url: "/diastemas-alineadores/",
      wa_text: "Hola%2C%20me%20interesa%20consultar%20sobre%20alineadores%20para%20diastemas."
    },
    "mordida_cruzada": {
      title: "Mordida Cruzada",
      description: "Uno o más dientes superiores muerden por dentro de los inferiores.",
      causes: "Genética, desarrollo desigual maxilares, hábitos.",
      consequences: "Desgaste dental anormal, problemas ATM, asimetría facial, masticación ineficiente.",
      why_correct: "Logra mordida funcional, previene desgaste y problemas articulares, mejora simetría.",
      treatment_focus: "<strong>Alineadores invisibles</strong>, a menudo con auxiliares (elásticos), pueden corregir muchos casos.",
      duration_range: "12 - 24 meses (Estimado)",
      learn_more_url: "/mordida-cruzada-alineadores/",
      wa_text: "Hola%2C%20me%20interesa%20consultar%20sobre%20alineadores%20para%20mordida%20cruzada."
    },
    "sobremordida": {
      title: "Sobremordida Aumentada",
      description: "Los dientes superiores cubren excesivamente a los inferiores al morder.",
      causes: "Genética, hábitos orales, desarrollo óseo.",
      consequences: "Desgaste de dientes inferiores, problemas en encías, dolor mandibular.",
      why_correct: "Evita el desgaste prematuro y mejora la funcionalidad de la mandíbula.",
      treatment_focus: "En muchos casos, con <strong>alineadores</strong> y auxiliares (como elásticos) se puede mejorar la relación de mordida.",
      duration_range: "12 - 24 meses (Estimado)",
      learn_more_url: "/sobremordida-mordida-abierta-prognatismo/",
      wa_text: "Hola%2C%20me%20interesa%20consultar%20sobre%20alineadores%20para%20sobremordida."
    },
    "mordida_abierta": {
      title: "Mordida Abierta",
      description: "Los dientes superiores e inferiores no se tocan al cerrar la boca (generalmente al frente).",
      causes: "Uso prolongado de chupete, chuparse el dedo, empuje lingual.",
      consequences: "Dificultad para morder y hablar, sobrecarga en dientes posteriores.",
      why_correct: "Restaura la función masticatoria y mejora la estética de la sonrisa.",
      treatment_focus: "El tratamiento con <strong>alineadores</strong> puede ser muy efectivo, sobre todo en mordida abierta anterior.",
      duration_range: "12 - 24+ meses (Estimado)",
      learn_more_url: "/sobremordida-mordida-abierta-prognatismo/",
      wa_text: "Hola%2C%20me%20interesa%20consultar%20sobre%20alineadores%20para%20mordida%20abierta."
    },
    "prognatismo": {
      title: "Prognatismo (Clase III)",
      description: "La mandíbula inferior se proyecta hacia adelante más que la superior.",
      causes: "Principalmente genético y de desarrollo óseo.",
      consequences: "Problemas para masticar, molestias articulares, perfil facial cóncavo.",
      why_correct: "Mejora función y estética; en algunos casos reduce sobrecarga articular.",
      treatment_focus: "Casos leves o moderados pueden camuflarse con <strong>alineadores</strong>; casos severos pueden requerir cirugía.",
      duration_range: "18 - 24+ meses (Estimado)",
      learn_more_url: "/sobremordida-mordida-abierta-prognatismo/",
      wa_text: "Hola%2C%20me%20interesa%20consultar%20sobre%20alineadores%20para%20clase%20III%20o%20prognatismo."
    }
  };

  // --- 2. LÓGICA DEL EVALUADOR ---
  const options = document.querySelectorAll('.bite-option');
  const detailsContainer = document.getElementById('details');

  function renderPathology(key) {
    const data = pathologyData[key];
    if (!data) return null;
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${data.wa_text}`;
    const smileUrl = SMILEVIEW_BASE + utm('evaluator', `evaluator-${key}`);
    return `
      <h3>${data.title}</h3>
      <p><strong>Descripción:</strong> ${data.description}</p>
      <p><strong>Causas comunes:</strong> ${data.causes}</p>
      <p><strong>Consecuencias:</strong> ${data.consequences}</p>
      <p><strong>Por qué corregirlo:</strong> ${data.why_correct}</p>
      <p>${data.treatment_focus}</p>
      <em>Duración estimada: ${data.duration_range}</em>
      <div class="details-buttons">
        <a href="${data.learn_more_url}" class="btn btn-secondary" data-cta="evaluator-learn-more-${key}">Ver guía completa</a>
        <a href="${smileUrl}" target="_blank" rel="noopener" class="btn btn-smileview" data-cta="smileview-evaluator-${key}">✨ Probá tu nueva sonrisa en 60s</a>
        <a href="${DOCTURNO_URL}" target="_blank" rel="noopener" class="btn btn-secondary" data-cta="docturno-evaluator-${key}">Agendar turno</a>
        <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-whatsapp-contact" data-cta="whatsapp-evaluator-${key}">
          <img src="/img/WhatsApp.svg" alt="WhatsApp" class="whatsapp-icon"> Consultar por WhatsApp
        </a>
      </div>
    `;
  }

  function renderUnknown() {
    const smileUrl = SMILEVIEW_BASE + utm('evaluator', 'evaluator-unknown');
    return `
      <h3>No pasa nada</h3>
      <p>Es muy común no estar seguro. Con una evaluación rápida te decimos qué tipo de corrección conviene. O probá la simulación de sonrisa con la herramienta oficial de Invisalign.</p>
      <div class="details-buttons">
        <a href="${smileUrl}" target="_blank" rel="noopener" class="btn btn-smileview" data-cta="smileview-evaluator-unknown">✨ Probá tu nueva sonrisa en 60s</a>
        <a href="/alineadores-invisibles-palermo/" class="btn btn-secondary" data-cta="evaluator-cmotrabajamos">Ver cómo trabajamos</a>
        <a href="${DOCTURNO_URL}" target="_blank" rel="noopener" class="btn btn-secondary" data-cta="docturno-evaluator-unknown">Agendar evaluación</a>
        <a href="https://wa.me/${WA_NUMBER}?text=Hola%2C%20quisiera%20consultar%20sobre%20alineadores%20invisibles." target="_blank" rel="noopener" class="btn btn-primary btn-whatsapp-contact" data-cta="whatsapp-evaluator-unknown">
          <img src="/img/WhatsApp.svg" alt="WhatsApp" class="whatsapp-icon"> Enviar foto por WhatsApp
        </a>
      </div>
    `;
  }

  if (options.length > 0 && detailsContainer) {
    options.forEach(option => {
      option.addEventListener('click', function () {
        const key = this.dataset.pathology;
        const html = key === 'unknown' ? renderUnknown() : renderPathology(key);

        if (html) {
          detailsContainer.innerHTML = html;
          detailsContainer.style.display = 'block';
          detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
          fireCta(`evaluator-pathology-${key}`);
        } else {
          detailsContainer.style.display = 'none';
        }
      });
    });
  }

  // --- 3. MENÚ MÓVIL (HAMBURGUESA) ---
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a:not(.dropbtn)').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- 4. DROPDOWN TOUCH-FRIENDLY (click toggles open class) ---
  document.querySelectorAll('.dropdown .dropbtn').forEach(btn => {
    btn.addEventListener('click', e => {
      const parent = btn.closest('.dropdown');
      if (!parent) return;
      // Solo intercepta si no es navegable; en mobile siempre toggle.
      e.preventDefault();
      const wasOpen = parent.classList.contains('open');
      document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
      if (!wasOpen) parent.classList.add('open');
    });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });

  // --- 5. AÑO EN EL FOOTER ---
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // --- 6. CTA TRACKING (delegated) ---
  // Pushes to dataLayer if GA4/GTM present, otherwise just logs.
  function fireCta(id, extra) {
    const payload = Object.assign({ event: 'cta_click', cta_id: id }, extra || {});
    if (window.dataLayer) window.dataLayer.push(payload);
    if (typeof window.gtag === 'function') window.gtag('event', 'cta_click', { cta_id: id });
  }
  document.addEventListener('click', e => {
    const link = e.target.closest('[data-cta]');
    if (!link) return;
    fireCta(link.dataset.cta, { href: link.getAttribute('href') });
  });

  // --- 7. QUICK-QUOTE FORM (homepage) → WhatsApp con datos pre-llenados ---
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(quoteForm);
      const motivo = data.get('motivo') || '';
      const zona = data.get('zona') || '';
      const edad = data.get('edad') || '';
      const text = `Hola, quiero una cotización rápida.%0AMotivo: ${motivo}%0AZona: ${zona}%0AEdad: ${edad}`;
      fireCta('whatsapp-quickquote', { motivo, zona, edad });
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text).replace(/%2520/g, '%20').replace(/%250A/g, '%0A')}`, '_blank', 'noopener');
    });
  }
});
