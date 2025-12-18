document.addEventListener('DOMContentLoaded', function() {

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
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20me%20interesa%20consultar%20sobre%20alineadores%20para%20api%C3%B1amiento."
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
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20me%20interesa%20consultar%20sobre%20alineadores%20para%20diastemas."
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
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20me%20interesa%20consultar%20sobre%20alineadores%20para%20mordida%20cruzada."
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
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20me%20interesa%20consultar%20sobre%20alineadores%20para%20sobremordida."
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
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20me%20interesa%20consultar%20sobre%20alineadores%20para%20mordida%20abierta."
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
            docturno_link: "https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&",
            whatsapp_link: "https://wa.me/5491128892043?text=Hola%2C%20me%20interesa%20consultar%20sobre%20alineadores%20para%20clase%20III%20o%20prognatismo."
        }
    };

    // --- 2. LÓGICA DEL EVALUADOR ---
    const options = document.querySelectorAll('.bite-option');
    const detailsContainer = document.getElementById('details');

    if (options.length > 0 && detailsContainer) {
        options.forEach(option => {
            option.addEventListener('click', function() {
                const pathologyKey = this.dataset.pathology;
                const data = pathologyData[pathologyKey];

                if (data) {
                    detailsContainer.innerHTML = `
                        <h3>${data.title}</h3>
                        <p><strong>Descripción:</strong> ${data.description}</p>
                        <p><strong>Causas comunes:</strong> ${data.causes}</p>
                        <p><strong>Consecuencias:</strong> ${data.consequences}</p>
                        <p><strong>Por qué corregirlo:</strong> ${data.why_correct}</p>
                        <p>${data.treatment_focus}</p>
                        <em>Duración estimada: ${data.duration_range}</em>
                        <div class="details-buttons">
                            <a href="${data.learn_more_url}" class="btn btn-secondary">Ver guía completa</a>
                            <a href="${data.docturno_link}" target="_blank" rel="noopener" class="btn btn-secondary">Agendar turno</a>
                            <a href="${data.whatsapp_link}" target="_blank" rel="noopener" class="btn btn-primary btn-whatsapp-contact">
                                <img src="/img/WhatsApp.svg" alt="WhatsApp" class="whatsapp-icon"> Consultar por WhatsApp
                            </a>
                        </div>
                    `;
                    detailsContainer.style.display = 'block';
                } else if (pathologyKey === "unknown") {
                    detailsContainer.innerHTML = `
                        <h3>No pasa nada</h3>
                        <p>Es muy común no estar seguro. Con una evaluación rápida te decimos qué tipo de corrección conviene.</p>
                        <div class="details-buttons">
                            <a href="/alineadores-invisibles-palermo/" class="btn btn-secondary">Ver cómo trabajamos</a>
                            <a href="https://paciente.docturno.com/agenda/ortodonciafast/tkach-daniela?originType=clinic-page&" target="_blank" rel="noopener" class="btn btn-secondary">Agendar evaluación</a>
                            <a href="https://wa.me/5491128892043?text=Hola%2C%20quisiera%20consultar%20sobre%20alineadores%20invisibles." target="_blank" rel="noopener" class="btn btn-primary btn-whatsapp-contact">
                                <img src="/img/WhatsApp.svg" alt="WhatsApp" class="whatsapp-icon"> Enviar foto por WhatsApp
                            </a>
                        </div>
                    `;
                    detailsContainer.style.display = 'block';
                } else {
                    detailsContainer.style.display = 'none';
                }

                if (detailsContainer.style.display === 'block') {
                    detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

        document.querySelectorAll('.nav-menu a').forEach(link => {
            if (!link.classList.contains('dropbtn')) {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            }
        });
    }

    // --- 4. AÑO EN EL FOOTER ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});
