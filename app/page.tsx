import ScrollReveal from "./components/ScrollReveal";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main>
      {/* ─── NAV ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 mix-blend-normal">
        <a
          href="#hero"
          className="text-marrow-white font-medium text-xl tracking-tight"
          style={{ fontWeight: 500 }}
        >
          marrow
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-marrow-white border border-marrow-white/30 px-4 py-2 hover:border-marrow-red hover:text-marrow-red transition-colors duration-200"
        >
          Work with us →
        </a>
      </nav>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center bg-charcoal px-6 md:px-12 pt-24 pb-20"
      >
        <div className="max-w-5xl">
          <ScrollReveal>
            <p className="text-marrow-white/50 text-sm font-medium tracking-widest uppercase mb-8">
              marrow
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h1
              className="text-marrow-white leading-tight mb-6"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                fontWeight: 700,
                lineHeight: 1.05,
              }}
            >
              We go to the{" "}
              <span className="text-marrow-red">marrow.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p
              className="text-marrow-white/70 mb-4"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", maxWidth: "42ch" }}
            >
              Cultural intelligence turned into creative firepower.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <p
              className="text-marrow-white/50 mb-12"
              style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.125rem)", maxWidth: "55ch", lineHeight: 1.6 }}
            >
              We live inside internet culture — not observing it, not reporting on it.
              We go where culture is forming, before it surfaces. Then we make it loud
              for the companies we work with.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={4}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-marrow-red text-marrow-white px-8 py-4 text-base font-medium hover:bg-marrow-white hover:text-charcoal transition-colors duration-200"
            >
              Work with us →
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── WHAT WE DO ──────────────────────────────────────────── */}
      <section
        id="services"
        className="bg-marrow-white text-charcoal px-6 md:px-12 py-24 md:py-32"
      >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-charcoal/40 text-sm font-medium tracking-widest uppercase mb-4">
              What We Do
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p
              className="text-charcoal/60 mb-16"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
            >
              Four things. All of them sharp.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-charcoal/10">
            {[
              {
                title: "Brand Strategy",
                body: "We figure out what you actually stand for — in a way that lands with the people you're trying to reach, not just in a deck.",
              },
              {
                title: "Campaign Creative",
                body: "Full campaigns built around cultural insight. Not trend-chasing. Not safe. Work that knows where it's standing.",
              },
              {
                title: "Content Production",
                body: "Strategy-led content that fits how people actually consume. Platform-native. Built to perform.",
              },
              {
                title: "Trend Intelligence",
                body: "We read the signals early. You get the brief before your competitors get the headline.",
              },
            ].map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="bg-marrow-white p-8 md:p-10 h-full">
                  <h3
                    className="text-charcoal font-semibold mb-3"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-charcoal/70 leading-relaxed"
                    style={{ fontSize: "1rem" }}
                  >
                    {pillar.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ─────────────────────────────────────────── */}
      <section
        id="how"
        className="bg-charcoal text-marrow-white px-6 md:px-12 py-24 md:py-32"
      >
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-marrow-white/40 text-sm font-medium tracking-widest uppercase mb-8">
              How We Work
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p
              className="text-marrow-white leading-relaxed mb-6"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.375rem)", lineHeight: 1.7 }}
            >
              Most agencies skim the culture from the outside. We don't.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p
              className="text-marrow-white/70 leading-relaxed mb-6"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.7 }}
            >
              We're soaked in it — the group chats, the comment sections, the weird
              corners of the internet where things form before they break. That's not a
              process. It's a posture.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <p
              className="text-marrow-white/70 leading-relaxed"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.7 }}
            >
              When you work with us, you get that posture applied to your brand. Every
              brief is informed by what's actually moving, not what moved six months ago.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CLIENTS ─────────────────────────────────────────────── */}
      <section
        id="clients"
        className="bg-marrow-white text-charcoal px-6 md:px-12 py-24 md:py-32"
      >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-charcoal/40 text-sm font-medium tracking-widest uppercase mb-4">
              Clients
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2
              className="text-charcoal font-semibold mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", lineHeight: 1.15 }}
            >
              Select partners
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p
              className="text-charcoal/60 mb-12"
              style={{ fontSize: "1.125rem" }}
            >
              We work with a small number of companies at a time. Intentionally.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <p
              className="text-charcoal/40 text-sm font-medium tracking-wide border-t border-charcoal/10 pt-8"
            >
              Currently building our first client roster. If you're reading this early —
              that's the point.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CONTACT ─────────────────────────────────────────────── */}
      <section
        id="contact"
        className="bg-charcoal text-marrow-white px-6 md:px-12 py-24 md:py-32"
      >
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <p className="text-marrow-white/40 text-sm font-medium tracking-widest uppercase mb-4">
              Let's talk
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2
              className="text-marrow-white font-semibold mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", lineHeight: 1.15 }}
            >
              Work with us.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p
              className="text-marrow-white/60 mb-12"
              style={{ fontSize: "1.125rem", lineHeight: 1.6 }}
            >
              We're selective about the work we take on. If you think there's a fit,
              tell us what you're trying to do.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <ContactForm />
            <p className="text-marrow-white/40 text-sm mt-6">
              Or email us directly:{" "}
              <a
                href="mailto:hello@getmarrow.co"
                className="text-marrow-white/70 hover:text-marrow-red transition-colors duration-200 underline underline-offset-4"
              >
                hello@getmarrow.co
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-charcoal border-t border-marrow-white/10 px-6 md:px-12 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
            {/* Wordmark */}
            <a
              href="#hero"
              className="text-marrow-white font-medium text-xl tracking-tight"
              style={{ fontWeight: 500 }}
            >
              marrow
            </a>

            {/* Scroll-to links */}
            <nav className="flex flex-wrap gap-6">
              {[
                { label: "Brand Strategy", href: "#services" },
                { label: "Campaign Creative", href: "#services" },
                { label: "Content Production", href: "#services" },
                { label: "Trend Intelligence", href: "#services" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-marrow-white/40 text-sm hover:text-marrow-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a
                href="https://x.com/withmarrow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marrow-white/40 text-sm hover:text-marrow-white transition-colors duration-200"
                aria-label="X / Twitter"
              >
                X
              </a>
              <a
                href="https://instagram.com/withmarrow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marrow-white/40 text-sm hover:text-marrow-white transition-colors duration-200"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://linkedin.com/company/marrow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marrow-white/40 text-sm hover:text-marrow-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                LI
              </a>
              <a
                href="https://tiktok.com/@withmarrow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-marrow-white/40 text-sm hover:text-marrow-white transition-colors duration-200"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>

          <div className="border-t border-marrow-white/10 pt-6">
            <p className="text-marrow-white/30 text-sm">
              © 2026 Marrow. We go to the marrow.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
