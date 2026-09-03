import Image from "next/image";
import {
  education,
  experience,
  projects,
  site,
  skills,
} from "@/lib/content";

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      width="18"
      height="18"
      fill="none"
    >
      <path
        d="M5 15 15 5M7 5h8v8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      width="18"
      height="18"
      fill="none"
    >
      <path
        d="M10 3v13m0 0 5-5m-5 5-5-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": site.url + "/#website",
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "en-IN",
        publisher: { "@id": site.url + "/#person" },
      },
      {
        "@type": "Person",
        "@id": site.url + "/#person",
        name: site.name,
        jobTitle: site.role,
        description: site.description,
        url: site.url,
        email: site.email,
        image: site.url + "/opengraph-image",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gurugram",
          addressRegion: "Haryana",
          addressCountry: "IN",
        },
        knowsAbout: [
          "AI-native product development",
          "AI agents",
          "Model Context Protocol",
          "React Native",
          "React",
          "Node.js",
          "TypeScript",
          "PostgreSQL",
          "AWS",
        ],
        sameAs: [site.linkedin, site.github],
        worksFor: {
          "@type": "Organization",
          name: "Zaptric Mobility",
          url: "https://zaptric.in/",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": site.url + "/#profilepage",
        url: site.url,
        name: site.name + " — " + site.role,
        isPartOf: { "@id": site.url + "/#website" },
        about: { "@id": site.url + "/#person" },
        mainEntity: { "@id": site.url + "/#person" },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="portfolio-shell">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Aashutosh Gandotra, home">
            <span>AG</span>
            <span className="wordmark-slash">/</span>
            <span className="wordmark-ai">AI</span>
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
          </nav>

          <a
            className="header-resume"
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
            <ArrowUpRight />
          </a>
        </header>

        <main id="main">
          <section className="hero" id="top">
            <div className="hero-copy">
              <div className="availability">
                <span className="availability-dot" aria-hidden="true" />
                {site.availability}
              </div>

              <p className="eyebrow">{site.role}</p>
              <h1>
                <span>I build intelligent products</span>
                <span className="hero-accent">from interface to infrastructure.</span>
              </h1>
              <p className="hero-summary">
                I combine React Native, Node.js, and production AI to turn
                complex operations into clear, useful products that ship.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore my work
                  <ArrowDown />
                </a>
                <a
                  className="button button-secondary"
                  href={"mailto:" + site.email}
                >
                  Start a conversation
                  <ArrowUpRight />
                </a>
              </div>

              <p className="hero-location">
                Based in {site.location}
                <span aria-hidden="true">/</span>
                Working worldwide
              </p>
            </div>

            <figure className="hero-visual">
              <div className="hero-visual-topline">
                <span>PRODUCT SYSTEM / 01</span>
                <span className="live-status">
                  <span aria-hidden="true" />
                  IN PRODUCTION
                </span>
              </div>

              <span className="hero-ai-mark" aria-hidden="true">
                AI
              </span>

              <div className="hero-product-preview">
                <Image
                  src="/images/customerapp.png"
                  alt="Mobile product screens from an electric mobility platform"
                  width={1574}
                  height={1068}
                  priority
                  sizes="(max-width: 900px) 92vw, 46vw"
                />
              </div>

              <div className="hero-agent-card">
                <span className="agent-card-label">AI OPS AGENT</span>
                <strong>Context → tools → action</strong>
                <span>Gemini · MCP · live workflows</span>
              </div>

              <div className="hero-ownership-card">
                <span>END TO END</span>
                <strong>Mobile / Web / API</strong>
              </div>

              <figcaption className="sr-only">
                A connected product system spanning mobile, web, backend, and
                AI operations.
              </figcaption>
            </figure>
          </section>

          <ul className="signal-strip" aria-label="Core practice areas">
            <li>
              <span>Mobile products</span>
              <strong>React Native</strong>
            </li>
            <li>
              <span>Full-stack ownership</span>
              <strong>Web + API</strong>
            </li>
            <li>
              <span>AI-native workflows</span>
              <strong>Gemini + MCP</strong>
            </li>
            <li>
              <span>Production delivery</span>
              <strong>AWS + Docker</strong>
            </li>
          </ul>

          <section className="page-section work-section" id="work">
            <div className="section-heading">
              <p className="section-kicker">
                <span>01</span>
                Selected work
              </p>
              <h2>Systems I have taken beyond the demo.</h2>
              <p>
                Product thinking, engineering depth, and operational ownership
                in the same loop.
              </p>
            </div>

            <div className="projects">
              {projects.map((project, index) => {
                const projectClassName =
                  index === 0
                    ? "project project-mobility"
                    : "project project-health";

                return (
                  <article className={projectClassName} key={project.name}>
                    <div className="project-visual">
                      <span className="project-visual-number" aria-hidden="true">
                        {project.number}
                      </span>

                      {project.secondaryImage ? (
                        <div className="mobility-composite">
                          <div className="phone-board">
                            <span className="board-label">MOBILE / DRIVER</span>
                            <Image
                              src={project.image}
                              alt={project.imageAlt}
                              width={1714}
                              height={1244}
                              sizes="(max-width: 760px) 88vw, 55vw"
                            />
                          </div>
                          <div className="dashboard-board">
                            <div className="browser-bar" aria-hidden="true">
                              <span />
                              <span />
                              <span />
                            </div>
                            <Image
                              src={project.secondaryImage}
                              alt={project.secondaryImageAlt || ""}
                              width={2928}
                              height={1496}
                              sizes="(max-width: 760px) 72vw, 48vw"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="health-preview">
                          <span className="board-label">MOBILE / PATIENT</span>
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            width={1774}
                            height={1166}
                            sizes="(max-width: 760px) 88vw, 70vw"
                          />
                        </div>
                      )}
                    </div>

                    <div className="project-content">
                      <div className="project-title-block">
                        <p className="project-kicker">{project.kicker}</p>
                        <h3>{project.name}</h3>
                        <p className="project-headline">{project.headline}</p>
                      </div>

                      <div className="project-details">
                        <p className="project-summary">{project.summary}</p>

                        <ul
                          className="capability-tags"
                          aria-label={project.name + " capabilities"}
                        >
                          {project.capabilities.map((capability) => (
                            <li key={capability}>{capability}</li>
                          ))}
                        </ul>

                        <ul className="contribution-list">
                          {project.contributions.map((contribution) => (
                            <li key={contribution}>
                              <span aria-hidden="true">↳</span>
                              {contribution}
                            </li>
                          ))}
                        </ul>

                        <div className="project-footer">
                          <ul
                            className="stack-list"
                            aria-label={project.name + " technology stack"}
                          >
                            {project.stack.map((technology) => (
                              <li key={technology}>{technology}</li>
                            ))}
                          </ul>

                          <div className="project-links">
                            {project.links.map((link) => (
                              <a
                                href={link.href}
                                key={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.label}
                                <ArrowUpRight />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section
            className="page-section capabilities-section"
            id="capabilities"
          >
            <div className="section-heading">
              <p className="section-kicker">
                <span>02</span>
                How I build
              </p>
              <h2>AI-native, with the full stack around it.</h2>
              <p>
                The model is one component. The product, data, tools, guardrails,
                and operating reality make it useful.
              </p>
            </div>

            <div className="capability-grid">
              {skills.map((skill) => (
                <article className="capability-card" key={skill.title}>
                  <span className="capability-number">{skill.number}</span>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <ul>
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="page-section experience-section" id="experience">
            <div className="section-heading">
              <p className="section-kicker">
                <span>03</span>
                Experience
              </p>
              <h2>A career built around ownership.</h2>
              <p>
                From teaching fundamentals to leading production systems across
                mobile, web, backend, and AI.
              </p>
            </div>

            <ol className="experience-list">
              {experience.map((job, index) => (
                <li key={job.company + job.dates}>
                  <span className="experience-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="experience-role">
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                  </div>
                  <div className="experience-description">
                    {job.bullets.map((bullet) => (
                      <p key={bullet}>{bullet}</p>
                    ))}
                  </div>
                  <div className="experience-meta">
                    <p>{job.dates}</p>
                    <p>{job.location}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="page-section about-section" id="about">
            <div className="about-portrait">
              <Image
                src="/images/me.jpg"
                alt="Portrait of Aashutosh Gandotra"
                width={800}
                height={800}
                sizes="(max-width: 760px) 90vw, 38vw"
              />
              <span className="portrait-caption">
                {site.location}
                <br />
                {site.remote}
              </span>
            </div>

            <div className="about-copy">
              <p className="section-kicker">
                <span>04</span>
                A little context
              </p>
              <h2>I care about the seams between product and engineering.</h2>
              <p className="about-lede">
                AI-native is a way of building, not a feature label. I connect
                models to the context, tools, permissions, and interfaces that
                let them do useful work—then engineer the surrounding product so
                it earns trust.
              </p>
              <p>
                I moved from teaching computer science in Jammu to owning
                mobility systems in Gurugram. That path made me equally
                comfortable explaining a hard idea, debugging the details, and
                taking responsibility for the outcome.
              </p>

              <div className="education-card">
                <span>EDUCATION</span>
                <strong>{education.degree}</strong>
                <p>{education.school}</p>
                <p>
                  {education.dates} · {education.detail}
                </p>
              </div>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div>
              <p className="section-kicker">
                <span>05</span>
                Say hello
              </p>
              <h2>Need someone who can own the whole path?</h2>
            </div>
            <div className="contact-action">
              <p>
                I am open to conversations about ambitious mobile, full-stack,
                and AI-native products.
              </p>
              <a href={"mailto:" + site.email}>
                {site.email}
                <ArrowUpRight />
              </a>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <div>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={site.resume} target="_blank" rel="noopener noreferrer">
              Résumé
            </a>
          </div>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </>
  );
}
