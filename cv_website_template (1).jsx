import React from "react";

const profile = {
  name: "Senne",
  role: "Leadership Expert | Empowering Teams & Driving Success",
  location: "Leeuwarden, The Netherlands",
  email: "me@mail.sennetjeeh.lol",
  phone: "Available on request",
  linkedin: "#",
  github: "https://github.com/way2sennee",
  summary:
    "Leadership expert focused on developing leaders, building high-performing teams, and driving organizational growth. Experienced in executive coaching, team dynamics, strategic planning, and creating strong organizational cultures through authentic leadership.",
};

const experiences = [
  {
    company: "Halesworth Primary School",
    title: "Chair of Governors",
    period: "Present",
    location: "United Kingdom",
    bullets: [
      "Providing strategic leadership and governance oversight for the school.",
      "Supporting school leadership teams in driving educational excellence and student wellbeing.",
      "Leading governance discussions, policy review, and long-term development planning.",
      "Promoting strong collaboration between staff, governors, parents, and the wider community.",
    ],
  },
  {
    company: "Aware",
    title: "CEO",
    period: "Present",
    location: "The Netherlands",
    bullets: [
      "Leading the strategic vision and overall operations of Aware.",
      "Driving organizational growth and mentoring high-performing teams.",
      "Overseeing strategic planning, financial management, and stakeholder relations.",
      "Building a culture of innovation, excellence, and long-term sustainable growth.",
    ],
  },
  {
    company: "Volt Radio",
    title: "Department Director of Social Media",
    period: "Present",
    location: "Remote",
    bullets: [
      "Leading the social media department and managing brand presence across multiple platforms.",
      "Developing and executing social media strategies and content planning.",
      "Managing community engagement and mentoring team members.",
    ],
  },
  {
    company: "Alveron",
    title: "Corporate Director",
    period: "Present",
    location: "Remote",
    bullets: [
      "Overseeing corporate strategy and operations.",
      "Driving business growth initiatives and organizational alignment.",
    ],
  },
  {
    company: "Volt Radio",
    title: "Team Manager",
    period: "Previous Role",
    location: "Remote",
    bullets: [
      "Managed internal teams and infrastructure account creation.",
      "Provided support and guidance to team members in a safe and reliable environment.",
    ],
  },
  {
    company: "Volt Radio",
    title: "Presenter",
    period: "Previous Role",
    location: "Remote",
    bullets: [
      "Hosted radio shows and engaged with listeners.",
      "Created entertaining and community-focused content.",
    ],
  },
  {
    company: "Alaris Network",
    title: "IT Admin",
    period: "Previous Role",
    location: "Remote",
    bullets: [
      "Managed account creation and technical support requests.",
      "Resolved operational and user-related technical issues.",
    ],
  },
];

const projects = [
  {
    name: "Leadership Development",
    description:
      "Focused on leadership growth, executive coaching, and empowering teams to reach their full potential through authentic leadership.",
    link: "https://sennetjeeh.lol",
    tags: ["Leadership", "Coaching", "Strategy"],
  },
  {
    name: "Social Media Strategy",
    description:
      "Led social media operations and community engagement initiatives for Volt Radio while managing branding and content strategy.",
    link: "https://sennetjeeh.lol",
    tags: ["Social Media", "Management", "Branding"],
  },
];

const skills = [
  "Leadership Development",
  "Team Management",
  "Executive Coaching",
  "Strategic Planning",
  "Organizational Culture",
  "Communication",
  "Social Media Strategy",
  "Community Engagement",
  "Operations Management",
  "Mentoring",
];

const education = [
  {
    school: "Student",
    degree: "Ongoing Education",
    period: "Current",
  },
];

const achievements = [
  "3 years of experience in leadership development",
  "CEO of Aware",
  "Department Director of Social Media at Volt Radio",
  "Corporate Director at Alveron",
  "Focused on servant leadership and authentic connection",
  "Passionate about empowering individuals and building high-performing teams",
];

function Section({ title, children }) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h2 className="mb-5 text-xl font-semibold text-slate-950">{title}</h2>
      {children}
    </section>
  );
}

export default function CVWebsite() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <header className="mb-8 rounded-3xl bg-slate-950 p-8 text-white shadow-xl md:p-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-300">
                Online CV
              </p>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-xl text-slate-200 md:text-2xl">
                {profile.role}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                {profile.summary}
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Contact Me
            </a>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-8">
            <Section title="Experience">
              <div className="space-y-7">
                {experiences.map((job) => (
                  <article
                    key={`${job.company}-${job.title}`}
                    className="border-l-2 border-slate-200 pl-5"
                  >
                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950">
                          {job.title}
                        </h3>
                        <p className="font-medium text-slate-700">{job.company}</p>
                      </div>
                      <div className="text-sm text-slate-500 md:text-right">
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Section>

            <Section title="Projects">
              <div className="grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                  <article
                    key={project.name}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-slate-950">{project.name}</h3>
                      <a
                        className="text-sm font-medium text-slate-500 hover:text-slate-950"
                        href={project.link}
                      >
                        View
                      </a>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </Section>
          </div>

          <aside className="space-y-8">
            <section
              id="contact"
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <h2 className="mb-5 text-xl font-semibold text-slate-950">Contact</h2>
              <div className="space-y-4 text-sm">
                <a
                  className="block hover:text-slate-950"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
                <a className="block hover:text-slate-950" href={`tel:${profile.phone}`}>
                  {profile.phone}
                </a>
                <p>{profile.location}</p>
                <a className="block hover:text-slate-950" href={profile.linkedin}>
                  LinkedIn
                </a>
                <a className="block hover:text-slate-950" href={profile.github}>
                  GitHub
                </a>
              </div>
            </section>

            <Section title="Skills">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Section>

            <Section title="Education">
              <div className="space-y-4">
                {education.map((item) => (
                  <div key={item.school}>
                    <h3 className="font-semibold text-slate-950">{item.degree}</h3>
                    <p className="text-sm text-slate-700">{item.school}</p>
                    <p className="text-sm text-slate-500">{item.period}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Highlights">
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                {achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </Section>
          </aside>
        </div>
      </div>
    </main>
  );
}
