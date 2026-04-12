export default function Home() {
  const stats = [
    { value: "$110M+", label: "Marketing budgets managed" },
    { value: "28+", label: "Team members led" },
    { value: "7x", label: "Revenue growth (eCom brand)" },
    { value: "#8", label: "Amazon ranking achieved in 2 years" },
  ]

  const roles = [
    {
      title: "VP, Experiential Marketing",
      context: "Department Head",
      impact: "Built and led a full experiential marketing department, overseeing strategy, execution, and team growth across large-scale brand activations.",
    },
    {
      title: "VP, Strategic Communications & Marketing",
      context: "Enterprise",
      impact: "Directed integrated communications and marketing strategy, aligning brand messaging across channels and internal stakeholders.",
    },
    {
      title: "SVP, Marketing & Communications",
      context: "Senior Leadership",
      impact: "Rebuilt a struggling department, restructured the team, and repositioned the brand to drive renewed growth and visibility.",
    },
    {
      title: "VP, Brand",
      context: "Client Side",
      impact: "Took an eCom brand from $400K to $2.8M in revenue in one year with minimal spend. Built influencer and affiliate programs from scratch.",
    },
  ]

  const services = [
    {
      title: "Brand Strategy",
      description: "Positioning, identity systems, messaging architecture, and brand governance. Built for companies that want to mean something to their audience.",
    },
    {
      title: "Experiential Marketing",
      description: "Live events, activations, and immersive brand experiences that create lasting impressions and drive measurable engagement.",
    },
    {
      title: "Growth & Revenue",
      description: "Marketing strategy tied directly to business outcomes. From team building to channel strategy, with a track record of results.",
    },
  ]

  return (
    <main className="bg-white text-gray-900">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-900 tracking-tight">Fabrizia Cannalonga</span>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
            <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">Marketing Executive & Consultant</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight max-w-4xl">
            I build brands,<br />lead teams, and<br />drive real growth.
          </h1>
          <p className="mt-8 text-xl text-gray-500 max-w-2xl leading-relaxed">
            15+ years across client, agency, and supplier sides. Specializing in brand strategy, experiential marketing, and building the kind of marketing organizations that actually perform.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-block bg-gray-900 text-white px-8 py-4 text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Work With Me
            </a>
            <a
              href="https://www.linkedin.com/in/fabrizia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-300 text-gray-700 px-8 py-4 text-sm font-medium hover:border-gray-900 transition-colors"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value}>
              <p className="text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">What I Do</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-16">Areas of expertise</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service) => (
              <div key={service.title}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Career Highlights</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-16">Selected roles & impact</h2>
          <div className="space-y-0 divide-y divide-gray-200">
            {roles.map((role) => (
              <div key={role.title} className="py-8 grid md:grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold text-gray-900">{role.title}</p>
                  <p className="text-sm text-gray-400 mt-1">{role.context}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 leading-relaxed">{role.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Together */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">How We Work Together</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-16">Two ways to engage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Full-Time Role</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                Available for VP and SVP-level marketing leadership roles. I build and lead departments, drive strategy, and deliver measurable results for organizations ready to take their marketing seriously.
              </p>
              <a href="https://www.linkedin.com/in/fabrizia/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-900 underline underline-offset-4">
                View my LinkedIn →
              </a>
            </div>
            <div className="border border-gray-900 bg-gray-900 text-white p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Consulting & Freelance</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Available for project-based brand strategy, experiential marketing, and marketing leadership consulting. Ideal for brands needing senior-level expertise without a full-time hire.
              </p>
              <a href="#contact" className="text-sm font-medium text-white underline underline-offset-4">
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's talk.</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you're looking for a marketing executive to join your team or a senior consultant to lead a project — reach out and let's see if it's a fit.
            </p>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                <span className="font-medium text-gray-900">Email: </span>
                <a href="mailto:fabriziacanna@gmail.com" className="hover:text-gray-900 transition-colors">fabriziacanna@gmail.com</a>
              </p>
              <p>
                <span className="font-medium text-gray-900">LinkedIn: </span>
                <a href="https://www.linkedin.com/in/fabrizia/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">linkedin.com/in/fabrizia</a>
              </p>
            </div>
          </div>
          <form action="mailto:fabriziacanna@gmail.com" method="GET" className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="body"
                rows={5}
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors resize-none"
                placeholder="Tell me about your project or role..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-4 text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm text-gray-400">
          <span>© 2026 Fabrizia Cannalonga</span>
          <a href="https://www.linkedin.com/in/fabrizia/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
        </div>
      </footer>

    </main>
  )
}
