import Image from "next/image";

const skills = [
  "Java 11",
  "Spring Boot",
  "Project Reactor",
  "Spring Cloud",
  "Kubernetes",
  "Azure",
  "Redis",
  "Kafka",
  "Cosmos DB",
  "CI/CD",
  "Grafana",
  "Elasticsearch",
  "Secure API Design",
  "Android SDK",
];

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Ford-Werke GmbH (via HAYS)",
    date: "Nov 2021 – Present",
    location: "Cologne, Germany",
    points: [
      "Designed cloud-native architecture for V2 Connected Vehicle Cloud Adapter.",
      "Integrated Reactive Redis for sub-millisecond cache performance in high-volume workflows.",
      "Improved production observability and reduced incident resolution time by 40%.",
      "Drove resiliency and failover hardening, maintaining availability above 99.95%.",
    ],
  },
  {
    role: "Senior Engineer",
    company: "Mercedes-Benz R&D India",
    date: "Jul 2017 – Oct 2021",
    location: "Bangalore, India & Stuttgart, Germany",
    points: [
      "Led real-time HD map telemetry ingestion as technical lead for a 4-member team.",
      "Migrated auth from mTLS to Azure AD + JWT and improved onboarding efficiency.",
      "Re-architected services with Reactor, reducing API latency by nearly 30%.",
      "Led Daimler’s Android rear-seat infotainment platform delivery across global teams.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "LG Soft India",
    date: "Jul 2015 – Jun 2017",
    location: "Bangalore, India",
    points: [
      "Built Android email modules on LEAP framework and migrated native Mailbox features.",
      "Delivered 15,000+ LOC with low defect density and strong release reliability.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Huawei Technologies",
    date: "Jul 2012 – Jul 2015",
    location: "Bangalore, India",
    points: [
      "Customized Android framework for AT&T compliance and backend sync integration.",
      "Contributed to EMUI 3.0 Dialer/Contacts redesign across flagship release cycles.",
    ],
  },
];

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <header className="topbar container fadeIn">
        <div className="logo">AV.</div>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero container" id="about">
        <div className="heroLeft slideUp delay1">
          <p className="status">Open to Senior Backend Engineering roles</p>
          <h1>
            Building resilient,
            <br />
            high-performance backend systems.
          </h1>
          <p className="heroText">
            I’m Ankit Verma, a Senior Java Backend Engineer with 9+ years of experience shipping
            cloud-native microservices and Android platforms across automotive and mobile domains.
          </p>

          <div className="ctaRow">
            <a className="btn primary" href="mailto:vermaankit.2005@gmail.com">
              Let&apos;s Talk
            </a>
            <a className="btn ghost" href="/Ankit-Verma-Resume.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </div>

          <div className="socialRow" id="contact">
            <a href="mailto:vermaankit.2005@gmail.com">Email</a>
            <a href="tel:+4915218728039">Phone</a>
            <a href="https://www.linkedin.com/in/vermaankit2005/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/vermaankit2005" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>

          <div className="metrics">
            <article>
              <h3>9+</h3>
              <p>Years Experience</p>
            </article>
            <article>
              <h3>99.95%</h3>
              <p>Availability Target</p>
            </article>
            <article>
              <h3>-40%</h3>
              <p>Incident Resolution Time</p>
            </article>
          </div>
        </div>

        <aside className="heroCard slideUp delay2">
          <div className="imageFrame">
            <Image src="/profile.jpg" alt="Ankit Verma" width={680} height={960} priority />
          </div>
          <h2>Ankit Verma</h2>
          <p>Senior Java Backend Engineer · Cologne, Germany</p>
        </aside>
      </section>

      <main className="container main">
        <section className="panel slideUp delay2" id="experience">
          <div className="sectionHead">
            <p>Experience</p>
            <h2>Career Highlights</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.company}-${item.date}`} className="timelineItem">
                <div className="timelineHead">
                  <h3>{item.role}</h3>
                  <p>
                    {item.company} · {item.date}
                  </p>
                  <small>{item.location}</small>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="splitRow" id="skills">
          <article className="panel compact slideUp delay3">
            <div className="sectionHead">
              <p>Technical Stack</p>
              <h2>Core Skills</h2>
            </div>
            <div className="chipWrap">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>

          <article className="panel compact slideUp delay3">
            <div className="sectionHead">
              <p>Education & Credentials</p>
              <h2>Qualifications</h2>
            </div>
            <div className="qualifications">
              <div>
                <h4>B.Tech — Computer Science</h4>
                <p>Uttar Pradesh Technical University (2008–2012)</p>
              </div>
              <div>
                <h4>Certifications</h4>
                <p>Oracle Certified Java Professional (2012)</p>
                <p>Microsoft AZ-900 Azure Fundamentals (2021)</p>
              </div>
            </div>
          </article>
        </section>
      </main>

      <footer className="container footer">
        <p>© {year} Ankit Verma</p>
        <p>Available for Senior Backend / Platform Engineering roles across Germany & EU.</p>
      </footer>
    </div>
  );
}
