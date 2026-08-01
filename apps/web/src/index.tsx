import { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Logo } from "./components/Logo";
import { content, languages, type Language } from "./content";
import "./style.css";

const App = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[language];

  const navItems = useMemo(() => t.nav, [t.nav]);

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand-mark" href="#top" aria-label="Sapar home">
          <Logo className="brand-mark__logo" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`topbar__actions ${menuOpen ? "is-open" : ""}`}>
          <nav className="navbar" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <label className="lang-select">
            <span className="sr-only">Language</span>
            <select
              aria-label="Select language"
              value={language}
              onChange={(event) => setLanguage(event.target.value as Language)}
            >
              {languages.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </header>

      <main id="top">
        <section className="hero" data-reveal>
          <div className="hero__grid">
            <div className="hero__content">
              <p className="eyebrow">{t.eyebrow}</p>
              <h1>{t.title}</h1>
              <p className="hero__intro">{t.intro}</p>
              <div className="hero__actions">
                <a className="button button--primary" href="#contact">
                  {t.primaryCta}
                </a>
                <a className="button button--secondary" href="#modules">
                  {t.secondaryCta}
                </a>
              </div>
              <div className="hero__highlights" aria-label="Highlights">
                {t.stats.map((item, index) => (
                  <div key={item} className="highlight-pill" data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero__visual" data-reveal>
              <div className="hero__visual-card">
                <img
                  className="hero__image"
                  src="/sapar-illustration.svg"
                  alt="Sapar operating system dashboard illustration"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="why-sapar" data-reveal>
          <div className="section__header">
            <p className="section__eyebrow">{t.whyTitle}</p>
            <h2>{t.whyTitle}</h2>
          </div>
          <p className="section__intro">{t.whyIntro}</p>
          <div className="card-grid">
            {t.whyItems.map((item, index) => (
              <article key={item.title} className="card" data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                <span className="card__dot" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--dark" id="modules" data-reveal>
          <div className="section__header section__header--light">
            <p className="section__eyebrow">{t.modulesTitle}</p>
            <h2>{t.modulesTitle}</h2>
          </div>
          <p className="section__intro section__intro--light">{t.modulesIntro}</p>
          <div className="card-grid">
            {t.modules.map((module, index) => (
              <article key={module} className="card card--flat" data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                <span className="card__dot" aria-hidden="true" />
                <h3>{module}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="compliance" data-reveal>
          <div className="section__header">
            <p className="section__eyebrow">{t.complianceTitle}</p>
            <h2>{t.complianceTitle}</h2>
          </div>
          <p className="section__intro">{t.complianceIntro}</p>
          <div className="card-grid card-grid--two">
            {t.complianceItems.map((item, index) => (
              <article key={item} className="card card--flat" data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                <span className="card__dot" aria-hidden="true" />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section" data-reveal>
          <div className="section__header">
            <p className="section__eyebrow">{t.industriesTitle}</p>
            <h2>{t.industriesTitle}</h2>
          </div>
          <p className="section__intro">{t.industriesIntro}</p>
          <div className="tag-grid">
            {t.industries.map((industry, index) => (
              <div key={industry} className="tag-pill" data-reveal style={{ transitionDelay: `${index * 50}ms` }}>
                {industry}
              </div>
            ))}
          </div>
        </section>

        <section className="section" data-reveal>
          <div className="section__header">
            <p className="section__eyebrow">{t.useCasesTitle}</p>
            <h2>{t.useCasesTitle}</h2>
          </div>
          <ol className="usecase-list">
            {t.useCases.map((item, index) => (
              <li key={item.title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                <span className="usecase-list__index">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section section--footer" id="contact" data-reveal>
          <div className="section__header">
            <p className="section__eyebrow">Sapar</p>
            <h2>{t.teamTitle}</h2>
          </div>
          <p className="section__intro">{t.teamBody}</p>
          <a className="button button--primary" href="mailto:hello@sapar.ai">
            hello@sapar.ai
          </a>
        </section>
      </main>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
