import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Car, Check, ChevronDown, HeartHandshake, Menu, ShieldCheck, Stethoscope, X } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import advocateImage from "@/assets/legal-advocate-client.jpg";
import transparentLogo from "@/assets/smara-law-firm-logo-transparent.png";
import watermarkEmblem from "@/assets/smara-law-firm-emblem-watermark.png";
import footerLogo from "@/assets/smara-law-firm-logo-footer.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Personal Injury Lawyers | Samara Law Firm LLC" },
      { name: "description", content: "Samara Law Firm LLC provides focused personal injury representation, clear guidance, and determined advocacy for injured people." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "keywords", content: "personal injury lawyer, accident lawyer, injury law firm, motor vehicle accident, premises liability, wrongful death" },
      { property: "og:title", content: "Personal Injury Lawyers | Samara Law Firm LLC" },
      { property: "og:description", content: "Focused personal injury representation when your recovery and future matter most." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Samara Law Firm LLC" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Personal Injury Lawyers | Samara Law Firm LLC" },
      { name: "twitter:description", content: "Focused personal injury representation when your recovery and future matter most." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }),
    }],
  }),
  component: Index,
});

const practices = [
  { icon: Car, title: "Motor Vehicle Accidents", copy: "Guidance for people injured in car, truck, motorcycle, bicycle, and pedestrian collisions." },
  { icon: ShieldCheck, title: "Premises Liability", copy: "Claims involving unsafe property conditions, negligent maintenance, and preventable falls." },
  { icon: Stethoscope, title: "Serious Injuries", copy: "Focused advocacy when an injury changes your health, mobility, livelihood, or long-term care needs." },
  { icon: HeartHandshake, title: "Wrongful Death", copy: "Compassionate legal support for families seeking accountability after a preventable loss." },
];

const faqs = [
  ["When should I contact a personal injury lawyer?", "As soon as you can. Evidence can disappear and legal deadlines may apply. An early consultation can help you understand your options before speaking further with an insurer."],
  ["What should I bring to a consultation?", "Bring any incident reports, photographs, medical information, insurance correspondence, witness details, and a timeline you have available. Do not delay contacting us if you do not have everything yet."],
  ["How are legal fees handled?", "Fee arrangements depend on the matter and are explained clearly before representation begins. If your case is accepted on a contingency basis, the written agreement will explain when fees and expenses apply."],
];

function Logo({ footer = false }: { footer?: boolean }) {
  return <img src={footer ? footerLogo : transparentLogo} alt="Samara Law Firm LLC" className={footer ? "h-32 w-auto sm:h-36" : "h-14 w-auto sm:h-16"} />;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-paper text-foreground">
      <div className="border-b border-gold-dark/20 bg-primary px-5 py-2.5 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 text-[10px] font-semibold uppercase tracking-widest sm:text-[11px]">
          <span className="min-w-0 text-gold-soft">Personal injury representation</span>
          <a href="#consultation" className="shrink-0 text-gold-soft hover:text-primary-foreground"><span className="sm:hidden">Free consultation</span><span className="hidden sm:inline">Start a confidential consultation</span></a>
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-b border-border bg-paper/95 px-5 backdrop-blur-md" aria-label="Primary navigation">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:h-24 md:flex md:justify-between">
          <a href="#top" className="min-w-0" aria-label="Samara Law Firm home"><Logo /></a>
          <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#practice-areas" className="hover:text-gold-dark">Practice Areas</a>
            <a href="#approach" className="hover:text-gold-dark">Our Approach</a>
            <a href="#process" className="hover:text-gold-dark">How It Works</a>
            <a href="#answers" className="hover:text-gold-dark">Answers</a>
            <Button asChild variant="gold" size="sm"><a href="#consultation">Free Case Review</a></Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && <div className="border-t border-border py-4 md:hidden">
          {[["Practice Areas", "#practice-areas"], ["Our Approach", "#approach"], ["How It Works", "#process"], ["Answers", "#answers"], ["Free Case Review", "#consultation"]].map(([label, href]) =>
            <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block py-3 text-sm font-semibold">{label}</a>
          )}
        </div>}
      </nav>

      <header id="top" className="scroll-mt-28 overflow-hidden px-4 py-10 sm:px-5 sm:py-14 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-12">
          <div className="reveal-up relative isolate lg:col-span-7">
            <img src={watermarkEmblem} alt="" aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[clamp(24rem,66vw,44rem)] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.045] sm:opacity-[0.05]" />
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">For the injured. For what comes next.</p>
            <h1 className="mb-6 max-w-4xl text-4xl leading-[1.12] sm:mb-8 sm:text-5xl md:text-7xl">Advocacy for the <em className="font-normal text-gold">injured</em>, clarity for the complex.</h1>
            <p className="mb-8 max-w-2xl text-base leading-7 text-navy-soft sm:mb-10 sm:text-lg sm:leading-8 md:text-xl">After an injury, every decision can feel urgent. Samara Law Firm LLC provides focused representation, plain-language guidance, and determined advocacy while you focus on recovery.</p>
            <div className="grid gap-7 border-t border-border pt-8 sm:grid-cols-2">
              <div><span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gold-dark">Personal attention</span><p className="text-sm font-medium leading-6">Clear communication and thoughtful guidance at every stage.</p></div>
              <div><span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gold-dark">Prepared advocacy</span><p className="text-sm font-medium leading-6">Careful investigation and a strategy shaped around your case.</p></div>
            </div>
          </div>

          <div id="consultation" className="reveal-up scroll-mt-28 overflow-hidden rounded-sm border border-gold/25 bg-card shadow-form [animation-delay:150ms] lg:col-span-5">
            <div className="bg-primary px-5 py-5 text-primary-foreground sm:px-7 sm:py-6"><h2 className="text-xl">Free Case Evaluation</h2><p className="mt-1 text-xs uppercase tracking-wider text-gold-soft">Confidential and no obligation</p></div>
            {sent ? <div className="flex min-h-80 flex-col items-center justify-center p-8 text-center"><span className="mb-5 grid size-12 place-items-center rounded-full bg-gold-soft"><Check className="text-gold-dark" /></span><h3 className="mb-3 text-2xl">Thank you for reaching out.</h3><p className="max-w-sm text-sm leading-6 text-muted-foreground">Your message has been recorded in this preview. Connect your preferred inbox before publishing to receive submissions.</p></div> :
            <form onSubmit={submitForm} className="space-y-5 p-5 sm:p-7">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full name<input required name="name" className="mt-2 w-full border-0 border-b border-input bg-transparent py-2 text-base font-normal normal-case outline-none focus:border-gold" /></label>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email or phone<input required name="contact" className="mt-2 w-full border-0 border-b border-input bg-transparent py-2 text-base font-normal normal-case outline-none focus:border-gold" /></label>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">How were you injured?<textarea required name="message" rows={3} className="mt-2 w-full resize-none border-0 border-b border-input bg-transparent py-2 text-base font-normal normal-case outline-none focus:border-gold" /></label>
              <Button type="submit" variant="gold" className="w-full">Request Evaluation <ArrowRight className="size-4" /></Button>
               <div className="space-y-2 text-center text-[10px] leading-4 text-muted-foreground">
                 <p>No attorney’s fee unless we recover compensation for you. Court costs and case expenses may be the client’s responsibility unless otherwise agreed in writing.</p>
                 <p>Sending this form does not create an attorney-client relationship.</p>
               </div>
            </form>}
          </div>
        </div>
      </header>

      <section id="approach" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
           <div className="relative min-h-80 overflow-hidden sm:min-h-[420px] md:min-h-[480px]"><img src={advocateImage} alt="An attorney listening carefully to an injured client" loading="lazy" width={800} height={1008} className="absolute inset-0 size-full object-cover" /><div className="absolute inset-0 bg-primary/15" /></div>
           <div className="flex flex-col justify-center px-5 py-14 sm:px-8 sm:py-16 md:px-16 lg:px-20">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-soft">People before case files</p>
            <h2 className="mb-6 text-3xl leading-tight md:text-4xl">A human-centered approach to legal advocacy.</h2>
            <p className="mb-8 leading-7 text-primary-foreground/70">An injury can affect your health, income, family, and sense of security. We listen first, explain your options clearly, and build a strategy around the impact on your life.</p>
            <ul className="space-y-4 text-sm">{["Direct communication with your legal team", "A transparent path from investigation to resolution", "A case strategy grounded in evidence and your goals"].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-gold" />{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section id="practice-areas" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-16 sm:py-20 lg:py-28">
        <div className="mb-14 max-w-3xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">Areas of focus</p><h2 className="text-4xl leading-tight md:text-5xl">Representation for injuries that change lives.</h2></div>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{practices.map(({ icon: Icon, title, copy }) => <article key={title} className="group bg-paper p-6 transition-colors hover:bg-muted sm:p-8"><span className="mb-6 grid size-12 place-items-center rounded-sm border border-gold/30 text-gold-dark sm:mb-7"><Icon className="size-5" /></span><h3 className="mb-4 text-xl leading-7">{title}</h3><p className="text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div>
      </section>

      <section id="process" className="scroll-mt-28 border-y border-border bg-muted px-5 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="mb-14 text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">A clear path forward</p><h2 className="text-3xl md:text-4xl">Three steps to begin.</h2></div>
          <div className="grid gap-12 md:grid-cols-3">{[["01", "Tell us what happened", "Share the facts in a private, no-cost conversation."], ["02", "Understand your options", "We review the circumstances and explain possible next steps."], ["03", "Move forward with a plan", "If we work together, we build and pursue a strategy for your claim."]].map(([number, title, copy]) => <div key={number} className="text-center"><span className="mb-3 block font-serif text-5xl text-gold/25">{number}</span><h3 className="mb-3 text-lg">{title}</h3><p className="mx-auto max-w-xs text-sm leading-6 text-muted-foreground">{copy}</p></div>)}</div>
        </div>
      </section>

      <section id="answers" className="mx-auto grid max-w-7xl scroll-mt-28 gap-10 px-5 py-16 sm:gap-12 sm:py-20 lg:grid-cols-[.75fr_1.25fr] lg:py-28"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">Common questions</p><h2 className="mb-5 text-3xl leading-tight sm:text-4xl">Good decisions start with clear answers.</h2><p className="text-muted-foreground">Every situation is different. These general answers are a starting point, not legal advice.</p></div><div className="divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-4 font-semibold"><span className="min-w-0">{question}</span><ChevronDown className="size-5 shrink-0 text-gold-dark transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pt-4 text-sm leading-7 text-muted-foreground">{answer}</p></details>)}</div></section>

      <section className="bg-gold-soft px-5 py-14 sm:py-16"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">Your next step can be simple</p><h2 className="max-w-3xl text-3xl leading-tight md:text-4xl">Tell us what happened. We’ll help you understand what may come next.</h2></div><Button asChild size="lg" className="w-full sm:w-auto"><a href="#consultation">Request a Free Review <ArrowRight className="size-4" /></a></Button></div></section>

      <footer className="bg-primary px-5 py-14 text-primary-foreground"><div className="mx-auto max-w-7xl"><div className="grid gap-10 border-b border-primary-foreground/10 pb-12 md:grid-cols-3"><div><Logo footer /><p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/60">Focused personal injury representation with clear guidance and determined advocacy.</p></div><div><h3 className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-gold-soft">Explore</h3><div className="space-y-3 text-sm text-primary-foreground/70"><a href="#practice-areas" className="block hover:text-gold-soft">Practice Areas</a><a href="#approach" className="block hover:text-gold-soft">Our Approach</a><a href="#answers" className="block hover:text-gold-soft">Common Questions</a></div></div><div><h3 className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-gold-soft">Start here</h3><a href="#consultation" className="text-sm text-primary-foreground/70 hover:text-gold-soft">Request a confidential case evaluation</a></div></div><div className="flex flex-col gap-4 pt-8 text-[10px] leading-5 text-primary-foreground/50 md:flex-row md:justify-between"><p>© 2026 Samara Law Firm LLC. All rights reserved.</p><p className="max-w-xl">Attorney advertising. This website provides general information only and does not constitute legal advice. Prior outcomes do not guarantee a similar result.</p></div></div></footer>
    </main>
  );
}