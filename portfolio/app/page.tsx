import WatchingFace from "@/components/WatchingFace";
import {
  education,
  experience,
  projects,
  site,
  skills,
} from "@/lib/content";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.title,
        inLanguage: "en-IN",
        publisher: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        jobTitle: "Lead Full Stack Engineer",
        description: site.title,
        url: site.url,
        email: site.email,
        image: `${site.url}/opengraph-image`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gurugram",
          addressRegion: "Haryana",
          addressCountry: "IN",
        },
        homeLocation: {
          "@type": "Place",
          name: "Jammu and Kashmir, India",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Jammu and Kashmir",
            addressCountry: "IN",
          },
        },
        knowsAbout: [
          "React Native",
          "React",
          "Node.js",
          "TypeScript",
          "Full Stack Engineering",
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
        "@id": `${site.url}/#profilepage`,
        url: site.url,
        name: `${site.name} — Lead Full Stack Engineer`,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#person` },
        mainEntity: { "@id": `${site.url}/#person` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-border focus:bg-bg focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <main
        id="main"
        className="mx-auto w-full max-w-page px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      >
        {/* Identity + contact in one compact band */}
        <header className="mb-8 border-b border-border pb-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="display text-[clamp(2rem,5vw,2.75rem)] text-fg">
                {site.name}
              </h1>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent sm:text-[0.8rem]">
                {site.role}
              </p>
              <p className="lede mt-2 max-w-measure text-fg">{site.title}</p>
              <p className="meta mt-2">
                {site.location}
                <span className="mx-1.5 text-border" aria-hidden="true">
                  ·
                </span>
                {site.remote}
                <span className="mx-1.5 text-border" aria-hidden="true">
                  ·
                </span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <nav aria-label="Primary" className="mt-4">
                <ul className="flex flex-wrap items-center gap-2">
                  <li>
                    <a className="primary-action" href={site.resume} download>
                      Download résumé
                    </a>
                  </li>
                  <li>
                    <a className="secondary-action" href={`mailto:${site.email}?subject=Role%20inquiry%20%E2%80%94%20${encodeURIComponent(site.name)}`}>
                      Email me
                    </a>
                  </li>
                  <li className="nav-links ml-1">
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="nav-links">
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <WatchingFace />
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)] lg:gap-10">
          <div className="space-y-8">
            <section aria-labelledby="experience-heading">
              <h2 id="experience-heading" className="section-label">
                Experience
              </h2>
              <ol className="space-y-3">
                {experience.map((job) => (
                  <li key={`${job.company}-${job.dates}`}>
                    <article>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                        <h3 className="text-[0.98rem] font-semibold tracking-tight text-fg">
                          {job.role}
                          <span className="font-normal text-muted">
                            {" "}
                            · {job.company}
                          </span>
                        </h3>
                        <p className="text-xs tabular-nums text-muted">
                          {job.dates}
                        </p>
                      </div>
                      <p className="mt-0.5 text-xs text-muted">{job.location}</p>
                      <ul className="mt-1.5 list-disc space-y-1 pl-4 text-[0.9rem] leading-snug text-fg marker:text-accent">
                        {job.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </article>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="section-label">
                Skills
              </h2>
              <dl className="space-y-1.5">
                {skills.map((group) => (
                  <div
                    key={group.label}
                    className="grid grid-cols-[7.5rem_1fr] gap-2 text-[0.9rem] sm:grid-cols-[8.5rem_1fr]"
                  >
                    <dt className="font-semibold text-fg">{group.label}</dt>
                    <dd className="leading-snug text-muted">{group.items}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section aria-labelledby="education-heading">
              <h2 id="education-heading" className="section-label">
                Education
              </h2>
              <div className="text-[0.9rem] leading-snug">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                  <p className="font-semibold text-fg">
                    {education.degree}
                    <span className="font-normal text-muted"> · {education.school}</span>
                  </p>
                  <p className="text-xs tabular-nums text-muted">{education.dates}</p>
                </div>
                <p className="mt-1 text-xs text-muted">{education.detail}</p>
              </div>
            </section>

          </div>

          <section aria-labelledby="work-heading">
            <h2 id="work-heading" className="section-label">
              Selected work
            </h2>
            <ol className="space-y-5">
              {projects.map((project) => (
                <li
                  key={project.name}
                  className="border-t border-border pt-4 first:border-t-0 first:pt-0"
                >
                  <article>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="project-title text-fg">{project.name}</h3>
                      {project.links.length > 0 && (
                        <p className="nav-links flex flex-wrap items-center gap-x-1 text-[0.85rem]">
                          {project.links.map((link, index) => (
                            <span
                              key={link.href}
                              className="inline-flex items-center"
                            >
                              {index > 0 && (
                                <span
                                  aria-hidden="true"
                                  className="px-1.5 text-border"
                                >
                                  /
                                </span>
                              )}
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.label}
                              </a>
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                    <p className="mt-1 text-[0.92rem] leading-snug text-muted">
                      {project.problem}
                    </p>
                    <p className="mt-1.5 text-[0.8rem] leading-snug text-fg">
                      <span className="font-semibold">Stack</span>
                      <span className="text-muted"> — {project.stack}</span>
                    </p>
                    <ul className="mt-1.5 list-disc space-y-1 pl-4 text-[0.9rem] leading-snug text-fg marker:text-accent">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section
          aria-labelledby="contact-heading"
          className="mt-8 border-t border-border pt-6"
        >
          <h2 id="contact-heading" className="section-label">
            Contact me
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div>
              <p className="display text-xl text-fg sm:text-2xl">
                <a
                  href={`mailto:${site.email}?subject=Role%20inquiry%20%E2%80%94%20${encodeURIComponent(site.name)}`}
                >
                  {site.email}
                </a>
              </p>
              <p className="meta mt-1.5 max-w-measure">
                Open to remote React Native / full-stack roles.
              </p>
            </div>
            <nav aria-label="Contact" className="nav-links shrink-0">
              <ul className="flex flex-wrap items-center gap-x-1 gap-y-1">
                <li>
                  <a
                    href={`mailto:${site.email}?subject=Role%20inquiry%20%E2%80%94%20${encodeURIComponent(site.name)}`}
                  >
                    Email
                  </a>
                </li>
                <li aria-hidden="true" className="px-2 text-border">
                  /
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li aria-hidden="true" className="px-2 text-border">
                  /
                </li>
                <li>
                  <a href={site.resume} download>
                    Resume (PDF)
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <footer className="mt-6 flex flex-col gap-1 border-t border-border pt-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Gurugram · Jammu and Kashmir · Remote</p>
        </footer>
      </main>
    </>
  );
}
