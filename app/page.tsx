export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Senior Java Backend Engineer</p>
            <h1>Ankit Verma</h1>
            <p className="subtitle">
              Building cloud-native microservices and high-performance platforms for automotive and
              mobile products.
            </p>
            <div className="actions">
              <a href="mailto:vermaankit.2005@gmail.com" className="btn btnPrimary">
                Email Me
              </a>
              <a href="tel:+4915218728039" className="btn btnGhost">
                Call: +49 1521 8728039
              </a>
            </div>
          </div>

          <div className="contactCard">
            <p>
              <strong>Location:</strong> Cologne, Germany
            </p>
            <p>
              <strong>Email:</strong> vermaankit.2005@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +49 1521 8728039
            </p>
            <p>
              <strong>LinkedIn:</strong> <a href="#">Add your public URL</a>
            </p>
            <p>
              <strong>Experience:</strong> 9+ years
            </p>
          </div>
        </div>
      </header>

      <main className="container main">
        <section>
          <h2>Professional Summary</h2>
          <p>
            Senior Java Backend Engineer with 9+ years of experience delivering scalable,
            high-performance microservices and Android platforms across Automotive and Mobile domains.
            Proven expertise in Reactive Java, Spring Boot, distributed systems, and cloud-native
            delivery on Azure + Kubernetes.
          </p>
        </section>

        <section>
          <h2>Core Skills</h2>
          <div className="chips">
            {[
              "Java 11",
              "Project Reactor",
              "Spring Boot",
              "Spring Cloud",
              "REST APIs",
              "Kubernetes",
              "Docker",
              "Azure",
              "Cosmos DB",
              "Redis",
              "Kafka",
              "Azure Event Hub",
              "Azure AD",
              "CI/CD",
              "Grafana",
              "Elasticsearch",
              "TDD / BDD",
              "Secure API Design",
              "Android SDK",
            ].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </section>

        <section>
          <h2>Experience</h2>

          <article className="role">
            <div className="roleHead">
              <h3>Senior Software Engineer — Ford-Werke GmbH (via HAYS)</h3>
              <p>Nov 2021 – Present · Cologne, Germany</p>
            </div>
            <ul>
              <li>Designed cloud-native microservice architecture for V2 Connected Vehicle Cloud Adapter.</li>
              <li>Integrated Reactive Redis for sub-millisecond cache access in high-volume workflows.</li>
              <li>Implemented centralized observability, reducing incident resolution time by 40%.</li>
              <li>Improved platform resiliency/failover, maintaining availability above 99.95%.</li>
            </ul>
          </article>

          <article className="role">
            <div className="roleHead">
              <h3>Senior Engineer — Mercedes-Benz Research & Development India</h3>
              <p>Jul 2017 – Oct 2021 · Bangalore, India & Stuttgart, Germany</p>
            </div>
            <ul>
              <li>Tech Lead for real-time HD map telemetry ingestion pipelines.</li>
              <li>Migrated auth from mTLS to Azure AD + JWT, improving governance/onboarding.</li>
              <li>Re-architected services with Reactor, reducing API latency by ~30%.</li>
              <li>Led Daimler’s first Android rear-seat infotainment platform and cross-border delivery.</li>
              <li>Delivered seat-control module suite with zero post-launch critical defects.</li>
            </ul>
          </article>

          <article className="role">
            <div className="roleHead">
              <h3>Senior Software Engineer — LG Soft India</h3>
              <p>Jul 2015 – Jun 2017 · Bangalore, India</p>
            </div>
            <ul>
              <li>Built Android email modules on LEAP framework and delivered 15,000+ LOC.</li>
              <li>Migrated Mailbox features from native Android to LEAP with full parity.</li>
              <li>Developed secure Android extensions and API bridges with zero major defects.</li>
            </ul>
          </article>

          <article className="role">
            <div className="roleHead">
              <h3>Software Engineer — Huawei Technologies</h3>
              <p>Jul 2012 – Jul 2015 · Bangalore, India</p>
            </div>
            <ul>
              <li>Customized Android framework for AT&T contract-compliance requirements.</li>
              <li>Implemented contact sync services with multi-source backend integrations.</li>
              <li>Led Dialer/Contacts redesign work for EMUI 3.0 flagship release cycles.</li>
            </ul>
          </article>
        </section>

        <section className="twoCol">
          <div>
            <h2>Education</h2>
            <p>
              <strong>B.Tech, Computer Science</strong>
              <br />
              Uttar Pradesh Technical University (2008–2012)
            </p>
          </div>
          <div>
            <h2>Certifications</h2>
            <ul>
              <li>Oracle Certified Java Professional (2012)</li>
              <li>Microsoft AZ-900 Azure Fundamentals (2021)</li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footerWrap">
          <p>© {year} Ankit Verma</p>
          <p>Open to Senior Backend / Platform Engineering roles in Germany & EU.</p>
        </div>
      </footer>
    </>
  );
}
