const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --bg: #060810;
    --surface: #0d1117;
    --surface2: #111827;
    --blue: #2563eb;
    --blue-light: #3b82f6;
    --blue-glow: #60a5fa;
    --blue-dim: #1d4ed8;
    --text: #f1f5f9;
    --text-muted: #fdfdfd;
    --border: #1e2d45;
    --accent: #0ea5e9;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Mono', monospace;
    min-height: 100vh;
  }

  .cv-root {
    min-height: 100vh;
    background: var(--bg);
    overflow: hidden;
  }

  /* Grid background */
  .cv-root::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
    z-index: 0;
  }

  .cv-wrapper {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: 0 auto;
    padding: 48px 24px;
  }

  /* ── HEADER ── */
  .cv-header {
    display: flex;
    align-items: flex-start;
    gap: 32px;
    padding: 40px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    margin-bottom: 24px;
    position: relative;
    overflow: hidden;
  }

  .cv-header::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--blue-dim), var(--blue-glow), var(--blue-dim));
  }

  .cv-header::after {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 240px; height: 240px;
    background: radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%);
    pointer-events: none;
  }

  .cv-avatar {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--blue-dim), var(--blue-glow));
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Syne', sans-serif;
    font-size: 36px;
    font-weight: 800;
    color: white;
    flex-shrink: 0;
    border: 2px solid rgba(96,165,250,0.3);
    box-shadow: 0 0 32px rgba(37,99,235,0.3);
    overflow: hidden;
  }

  .cv-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .cv-header-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .cv-tag {
    display: inline-block;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--blue-glow);
    background: rgba(37,99,235,0.12);
    border: 1px solid rgba(37,99,235,0.3);
    padding: 3px 10px;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .cv-name {
    font-family: 'Syne', sans-serif;
    font-size: 40px;
    font-weight: 800;
    color: var(--text);
    line-height: 1.1;
    margin-bottom: 6px;
    letter-spacing: -0.02em;
  }

  .cv-role {
    font-size: 14px;
    color: var(--blue-light);
    font-weight: 500;
    margin-bottom: 14px;
    letter-spacing: 0.05em;
  }

  .cv-location {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
  }

  /* ── SOCIALS ── */
  .cv-socials {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 16px;
  }

  .social-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 16px;
    background: rgba(13,17,23,0.8);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text-muted);
    text-decoration: none;
    font-size: 12px;
    font-family: 'DM Mono', monospace;
    font-weight: 500;
    transition: all 0.2s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .social-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(37,99,235,0.08), transparent);
    opacity: 0;
    transition: opacity 0.2s;
  }

  .social-btn:hover {
    border-color: var(--blue-light);
    color: var(--blue-glow);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37,99,235,0.2);
  }

  .social-btn:hover::before { opacity: 1; }

  .social-btn svg {
    width: 16px; height: 16px;
    flex-shrink: 0;
  }

  .social-linkedin:hover { border-color: #0a66c2; color: #0a66c2; }
  .social-github:hover { border-color: #8b949e; color: #c9d1d9; }
  .social-email:hover { border-color: var(--blue-glow); color: var(--blue-glow); }

  /* ── GRID LAYOUT ── */
  .cv-grid {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 24px;
  }

  /* ── SECTION CARD ── */
  .cv-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px;
    margin-bottom: 20px;
  }

  .cv-card:last-child { margin-bottom: 0; }

  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--blue-glow);
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
  }

  .section-title::before {
    content: '';
    width: 4px;
    height: 16px;
    background: linear-gradient(180deg, var(--blue), var(--blue-glow));
    border-radius: 2px;
    flex-shrink: 0;
  }

  /* ── EXPERIENCE ── */
  .exp-item {
    position: relative;
    padding-left: 20px;
    padding-bottom: 28px;
  }

  .exp-item:last-child { padding-bottom: 0; }

  .exp-item::before {
    content: '';
    position: absolute;
    left: 0; top: 8px;
    width: 8px; height: 8px;
    background: var(--blue);
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(37,99,235,0.6);
  }

  .exp-item::after {
    content: '';
    position: absolute;
    left: 3px; top: 20px; bottom: 0;
    width: 1px;
    background: linear-gradient(180deg, var(--border), transparent);
  }

  .exp-item:last-child::after { display: none; }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 4px;
    flex-wrap: wrap;
    gap: 8px;
  }

  .exp-company {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: var(--text);
  }

  .exp-period {
    font-size: 11px;
    color: var(--blue-glow);
    background: rgba(37,99,235,0.1);
    border: 1px solid rgba(37,99,235,0.2);
    padding: 2px 8px;
    border-radius: 4px;
    white-space: nowrap;
  }

  .exp-role {
    font-size: 12px;
    color: var(--blue-light);
    margin-bottom: 8px;
    font-weight: 500;
  }

  .exp-desc {
    font-size: 12px;
    color: var(--text-muted);
    line-height: 1.7;
  }

  /* ── SKILLS ── */
  .skill-group { margin-bottom: 20px; }
  .skill-group:last-child { margin-bottom: 0; }

  .skill-group-title {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--text-muted);
    margin-bottom: 10px;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .skill-tag {
    font-size: 11px;
    padding: 4px 10px;
    border-radius: 4px;
    border: 1px solid var(--border);
    color: var(--text-muted);
    background: rgba(17,24,39,0.8);
    transition: all 0.2s;
    cursor: default;
  }

  .skill-tag:hover {
    border-color: var(--blue-light);
    color: var(--blue-glow);
    background: rgba(37,99,235,0.08);
  }

  /* ── EDUCATION ── */
  .edu-item { margin-bottom: 20px; }
  .edu-item:last-child { margin-bottom: 0; }

  .edu-degree {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: var(--text);
    margin-bottom: 3px;
  }

  .edu-school {
    font-size: 12px;
    color: var(--blue-light);
    margin-bottom: 4px;
  }

  .edu-year {
    font-size: 11px;
    color: var(--text-muted);
  }

  /* ── ABOUT / SUMMARY ── */
  .about-text {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.8;
  }

  .about-text strong { color: var(--blue-glow); font-weight: 500; }

  /* ── LANGUAGES ── */
  .lang-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid rgba(30,45,69,0.6);
  }

  .lang-item:last-child { border-bottom: none; }

  .lang-name {
    font-size: 13px;
    color: var(--text);
    font-weight: 500;
  }

  .lang-level {
    font-size: 11px;
    color: var(--blue-glow);
    background: rgba(37,99,235,0.1);
    border: 1px solid rgba(37,99,235,0.2);
    padding: 2px 8px;
    border-radius: 4px;
  }

  /* ── CERTIFICATIONS ── */
  .cert-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(30,45,69,0.6);
  }

  .cert-item:last-child { border-bottom: none; }

  .cert-dot {
    width: 6px; height: 6px;
    background: var(--blue);
    border-radius: 50%;
    margin-top: 6px;
    flex-shrink: 0;
    box-shadow: 0 0 6px rgba(37,99,235,0.5);
  }

  .cert-name {
    font-size: 12px;
    color: var(--text);
    line-height: 1.5;
  }

  .cert-issuer {
    font-size: 11px;
    color: var(--text-muted);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 680px) {
    .cv-grid { grid-template-columns: 1fr; }
    .cv-header { flex-direction: column; align-items: center; text-align: center; }
    .cv-socials { justify-content: center; }
    .cv-name { font-size: 30px; }
  }
`;

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function App() {
  return (
    <>
      <style>{styles}</style>
      <div className="cv-root">
        <div className="cv-wrapper">

          {/* ── HEADER ── */}
          <header className="cv-header">
            <div className="cv-avatar">
              <img
                src="https://avatars.githubusercontent.com/u/277013134?v=4"
                alt="Foto de Arlan Kelvyn"
              />
            </div>

            <div className="cv-header-info">
              <div className="cv-tag">Disponível para oportunidades</div>
              <h1 className="cv-name">Arlan Kelvyn</h1>

              {/* SOCIAL LINKS */}
              <div className="cv-socials">
                <a
                  href="https://linkedin.com/in/seuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn social-linkedin"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/arlanklevyn-creator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn social-github"
                >
                  <GitHubIcon />
                  GitHub
                </a>
                <a
                  href="mailto:joao.silva@email.com"
                  className="social-btn social-email"
                >
                  <EmailIcon />
                  arlanklevyn@email.com
                </a>
              </div>

              <p className="cv-role">Programador de software &amp; técnico em manutenção de computadores</p>
              <div className="cv-location">
                <MapPinIcon />
                Patos- PB, Brasil
              </div>
            </div>
          </header>

          {/* ── MAIN GRID ── */}
          <div className="cv-grid">

            {/* ── LEFT COLUMN ── */}
            <div>

              {/* ABOUT */}
              <div className="cv-card">
                <h2 className="section-title">Sobre Mim</h2>
                <p className="about-text">
                  Estudante de computação com <strong>com + de 1 ano de experiência</strong> criando 
                  softwares e prestando suporte técnico em manutenção de computadores,
                  Especializado em <strong> CSS, Node.js, e
                  PostgreSQL
                </strong>. Apaixonado por código limpo, boas práticas e
                  entrega de valor real ao usuário final.
                </p>
              </div>

              {/* EXPERIENCE */}
              <div className="cv-card">
                <h2 className="section-title">Experiência</h2>

                <div className="exp-item">
                  <div className="exp-header">
                    <span className="exp-company">ZELO- Serviço de locaçao de mao de obra</span>
                    <span className="exp-period">inicio em 2022 — Atual</span>
                  </div>
                  <div className="exp-role">A. S. G.</div>
                  <p className="exp-desc">
                    desenvolve atividades de suporte na area de limpeza, garantimdo 
                    um bom abiente de trabalho e satisfação dos pacientes, realizando a 
                    limpeza de áreas comuns, e banheiros, 
                    seguindo protocolos de higiene e segurança para prevenir infecções.
                  </p>
                </div>

                <div className="exp-item">
                  <div className="exp-header">
                    <span className="exp-company">GUEDES SUPERMERCADO</span>
                    <span className="exp-period">2014 — 2022</span>
                  </div>
                  <div className="exp-role">Operador de Caixa</div>
                  <p className="exp-desc">
                    Atendimento ao cliente, processamento de transações, controle de caixa e organização
                    do ambiente de trabalho, garantindo uma experiência de compra eficiente e agradável,
                    sempre prezando pela satisfação do cliente e contribuindo para o bom funcionamento do supermercado.
                  </p>
                </div>

                <div className="exp-item">
                  <div className="exp-header">
                    <span className="exp-company">GRANJA- ASA BRANCA</span>
                    <span className="exp-period">2013</span>
                  </div>
                  <div className="exp-role">AUXILIAR DE PRODUÇÃO</div>
                  <p className="exp-desc">
                    Responsável por auxiliar nas atividades de produção, garantindo a eficiência e qualidade.
                  </p>
                </div>
              </div>

              {/* SKILLS */}
              <div className="cv-card">
                <h2 className="section-title">Habilidades Técnicas</h2>

                <div className="skill-group">
                  <div className="skill-group-title">Frontend</div>
                  <div className="skill-tags">
                    {['React', 'TypeScript', 'Next.js', 'Tailwind CSS',].map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="skill-group">
                  <div className="skill-group-title">Backend</div>
                  <div className="skill-tags">
                    {['Node.js', 'PostgreSQL', 'REST APIs'].map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="skill-group">
                  <div className="skill-group-title">Cloud &amp; DevOps</div>
                  <div className="skill-tags">
                    {[         'GitHub Actions'    ].map(s => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div>

              {/* EDUCATION */}
              <div className="cv-card">
                <h2 className="section-title">Educação</h2>

                <div className="edu-item">
                  <div className="edu-degree">Administração - PROJOVEM TRABALHADOR </div>
                  <div className="edu-school">ESCOLAS PROFISSIONALIZANTES -Patos-PB</div>
                  <div className="edu-year">2011 — 2012</div>
                </div>

                <div className="edu-item">
                  <div className="edu-degree">INT A MONTAGEM E MANUTENÇÃO DE COMPUTADORES</div>
                  <div className="edu-school">FAC. INT de PATOS - FIP </div>
                  <div className="edu-year">2015</div>
                </div>
              </div>

              <div className="edu-item">
                  <div className="edu-degree">ENS- MEDIO COMPLETO </div>
                  <div className="edu-school">COLEGIO E CURSO SANTO EXPEDITO </div>
                  <div className="edu-local">Patos-PB</div>
                </div>

              {/* LANGUAGES */}
              <div className="cv-card">
                <h2 className="section-title">Idiomas</h2>
                {[
                  { lang: 'Português', level: 'Nativo' },
                  { lang: 'Inglês', level: 'Basico' },
                ].map(({ lang, level }) => (
                  <div key={lang} className="lang-item">
                    <span className="lang-name">{lang}</span>
                    <span className="lang-level">{level}</span>
                  </div>
                ))}
              </div>

              {/* CERTIFICATIONS */}
              <div className="cv-card">
                <h2 className="section-title">Certificações</h2>
                {[
                  { name: 'ADMINISTRAÇAO', issuer: 'PRO-JOVEM TRABALHADOR, 2012' },
                  { name: 'MONTAGEM E MANUTENÇÃO DE COMPUTADORES', issuer: 'FIP, 2015' },
                  { name: 'Programador de Software', issuer: 'Senac, 2026' },
                ].map(({ name, issuer }) => (
                  <div key={name} className="cert-item">
                    <div className="cert-dot" />
                    <div>
                      <div className="cert-name">{name}</div>
                      <div className="cert-issuer">{issuer}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
