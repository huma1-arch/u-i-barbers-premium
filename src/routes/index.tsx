import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import logoAsset from "@/assets/logo.asset.json";
import heroVideo from "@/assets/hero-video.asset.json";
import showcaseVideo from "@/assets/showcase-video.asset.json";
import shopInterior from "@/assets/shop-interior.jpg";
import cutFade from "@/assets/cut-fade.jpg";
import beardTrim from "@/assets/beard-trim.jpg";
import facial from "@/assets/facial.jpg";
import styling from "@/assets/styling.jpg";
import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "U & I Barbers — Premium Barbershop Subang Jaya" },
      { name: "description", content: "Premium barbershop in Subang Jaya. Fades, beard work, hair colouring, facials & more. Any Style, Anytime. Book via WhatsApp." },
      { property: "og:title", content: "U & I Barbers — Premium Barbershop" },
      { property: "og:description", content: "Any Style, Anytime. Subang Jaya, Malaysia." },
    ],
  }),
  component: Home,
});

const WHATSAPP_NUMBER = "60116946 5593".replace(/\s/g, "");
const PHONE_PRIMARY = "+60 11-6946 5593";
const PHONE_SECONDARY = "+60 10-231 6270";
const ADDRESS = "Mydin Mall, G-44, Persiaran Subang Permai, Taman Perindustrian USJ 1, 47500 Subang Jaya, Selangor, Malaysia";
const MAPS_URL = "https://maps.google.com/?q=" + encodeURIComponent("U & I Barbers Mydin Mall Subang Jaya");

const SERVICES = [
  { name: "Fade Cut", price: 35, duration: "45 min", img: cutFade },
  { name: "Custom Cut", price: 40, duration: "45 min", img: styling },
  { name: "Beard Trim", price: 20, duration: "20 min", img: beardTrim },
  { name: "Beard Dyeing", price: 50, duration: "40 min", img: beardTrim },
  { name: "Hair Colouring", price: 120, duration: "90 min", img: styling },
  { name: "Hair Straightening", price: 250, duration: "120 min", img: styling },
  { name: "Rebonding", price: 350, duration: "180 min", img: styling },
  { name: "Hair Treatment", price: 80, duration: "60 min", img: facial },
  { name: "Facial For Men", price: 60, duration: "45 min", img: facial },
  { name: "Ayurvedic Head Massage", price: 45, duration: "30 min", img: facial },
  { name: "Buzz Cut", price: 25, duration: "20 min", img: cutFade },
  { name: "Head Shave", price: 25, duration: "25 min", img: beardTrim },
  { name: "Children's Cut", price: 25, duration: "30 min", img: cutFade },
  { name: "Long Haircut", price: 45, duration: "60 min", img: styling },
  { name: "Waxing", price: 20, duration: "15 min", img: facial },
  { name: "Threading", price: 10, duration: "10 min", img: facial },
] as const;

const BARBERS = [
  { name: "Arjun", role: "Master Barber", years: 12, specialty: "Fades & Classic Cuts", rating: 4.9, img: barber1 },
  { name: "Ravi", role: "Senior Stylist", years: 9, specialty: "Hair Colour & Rebonding", rating: 4.8, img: barber2 },
  { name: "Daniel", role: "Beard Specialist", years: 7, specialty: "Beard Sculpting & Shaves", rating: 4.9, img: barber3 },
] as const;

const REVIEWS = [
  { name: "Ahmad Faiz", text: "Best barbershop in Subang. Arjun's fade is unmatched — clean, sharp, and they take their time.", rating: 5 },
  { name: "Kumar S.", text: "Been going for 2 years. Every cut is perfect. The hot towel shave is a must-try.", rating: 5 },
  { name: "Wei Jian", text: "Premium service at a fair price. The interior is gorgeous and staff are super friendly.", rating: 5 },
  { name: "Ismail R.", text: "Got my hair coloured here, came out exactly how I wanted. Highly recommend.", rating: 4 },
] as const;

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Barbers />
      <Reviews />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Gallery", "#gallery"],
    ["Barbers", "#barbers"],
    ["Reviews", "#reviews"],
    ["Book", "#book"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="U & I Barbers" className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40" />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-xl text-gradient-gold">U &amp; I Barbers</div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Premium Barbershop</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#book" className="hidden lg:inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-105 transition-transform">
          Book Now
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-gold p-2" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"}/></svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-gold/10 px-6 py-4 flex flex-col gap-4">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="text-sm uppercase tracking-wider text-muted-foreground hover:text-gold">{l}</a>
          ))}
          <a href="#book" onClick={() => setOpen(false)} className="rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-semibold text-primary-foreground text-center">Book Now</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <video
        src={heroVideo.url}
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Subang Jaya · Malaysia</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95]">
            <span className="block text-foreground">Any Style,</span>
            <span className="block text-gradient-gold italic">Anytime.</span>
          </h1>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            A premium grooming experience for the modern gentleman. Master barbers, classic craft, immaculate finish.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#book" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold hover:scale-105 transition-transform">
              Book Appointment
            </a>
            <a href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground hover:bg-white/10 transition-colors">
              <Phone /> Call Now
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-gold hover:bg-gold/10 transition-colors">
              <WhatsApp /> WhatsApp
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <div className="flex items-center gap-2"><Star /> 4.8 / 5</div>
            <div className="hidden sm:block w-px h-4 bg-gold/30" />
            <div>399 Reviews</div>
            <div className="hidden sm:block w-px h-4 bg-gold/30" />
            <div>Open 10:30AM–10PM</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-gold/60 animate-bounce">
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none"><rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="1.5"/><circle cx="10" cy="9" r="2" fill="currentColor"/></svg>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={shopInterior} alt="U & I Barbers interior" loading="lazy" width={1024} height={1024} className="rounded-2xl shadow-deep" />
          <div className="absolute -bottom-8 -right-8 glass rounded-2xl p-6 hidden md:block">
            <div className="font-display text-5xl text-gradient-gold">15+</div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Years of Craft</div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">About Us</div>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Where <span className="italic text-gradient-gold">tradition</span> meets the modern man.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            U &amp; I Barbers is Subang Jaya's premier grooming destination. From precision fades to full beard sculpting, hair colouring to relaxing facials — every chair, every cut, every detail is designed to make you walk out feeling unmistakably sharp.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            "Customer Satisfaction Is Our Priority" isn't a tagline — it's the standard we hold every barber to.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[["4.8★","Rating"],["399+","Reviews"],["16","Services"]].map(([v,l]) => (
              <div key={l} className="glass rounded-xl p-4 text-center">
                <div className="font-display text-3xl text-gradient-gold">{v}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Services</div>
          <h2 className="font-display text-5xl md:text-6xl font-light">Crafted to <span className="italic text-gradient-gold">perfection</span></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">From classic cuts to full grooming rituals. Prices in MYR.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((s) => (
            <div key={s.name} className="group relative overflow-hidden rounded-2xl glass hover:shadow-gold transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.name} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-xl">{s.name}</h3>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.duration}</div>
                  </div>
                  <div className="font-display text-2xl text-gradient-gold">RM{s.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Gallery</div>
          <h2 className="font-display text-5xl md:text-6xl font-light">The <span className="italic text-gradient-gold">work</span> speaks.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:row-span-2 rounded-2xl overflow-hidden relative aspect-[3/4] md:aspect-auto">
            <video src={showcaseVideo.url} autoPlay muted loop playsInline className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em]">Live</div>
          </div>
          {[cutFade, beardTrim, styling, facial].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden aspect-square group">
              <img src={img} alt="Gallery" loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Barbers() {
  return (
    <section id="barbers" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Barbers</div>
          <h2 className="font-display text-5xl md:text-6xl font-light">Masters of the <span className="italic text-gradient-gold">craft</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {BARBERS.map((b) => (
            <div key={b.name} className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5">
                <img src={b.img} alt={b.name} loading="lazy" width={800} height={1067} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs flex items-center gap-1">
                  <Star /> {b.rating}
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-display text-2xl">{b.name}</h3>
                  <div className="text-xs uppercase tracking-[0.2em] text-gold mt-1">{b.role}</div>
                  <div className="text-sm text-muted-foreground mt-2">{b.specialty}</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-3xl text-gradient-gold">{b.years}y</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Experience</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Reviews</div>
          <h2 className="font-display text-5xl md:text-6xl font-light">Loved by <span className="italic text-gradient-gold">hundreds</span></h2>
          <div className="mt-8 inline-flex items-center gap-6 glass rounded-full px-8 py-4">
            <div className="font-display text-5xl text-gradient-gold">4.8</div>
            <div className="text-left">
              <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} />)}</div>
              <div className="text-xs text-muted-foreground mt-1">Based on 399 Google reviews</div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name} className="glass rounded-2xl p-6">
              <div className="flex gap-0.5 mb-3">{Array.from({length: r.rating}).map((_,i) => <Star key={i} />)}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
              <div className="mt-5 pt-4 border-t border-gold/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-semibold text-sm">{r.name[0]}</div>
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Verified · Google</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<string>("");
  const [barber, setBarber] = useState<string>("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const times = useMemo(() => {
    const slots: string[] = [];
    for (let h = 10; h <= 21; h++) {
      slots.push(`${h.toString().padStart(2,"0")}:30`);
      if (h < 21) slots.push(`${(h+1).toString().padStart(2,"0")}:00`);
    }
    return slots;
  }, []);

  const canNext = () => {
    if (step === 1) return !!service;
    if (step === 2) return !!barber;
    if (step === 3) return !!date;
    if (step === 4) return !!time;
    if (step === 5) return name.trim().length > 1 && phone.trim().length > 6;
    return true;
  };

  const submit = () => {
    const msg = `Hello U & I BARBERS,\n\nI would like to book an appointment.\n\nCustomer Name: ${name}\nPhone: ${phone}\nSelected Service: ${service}\nSelected Barber: ${barber}\nDate: ${date}\nTime: ${time}\nNotes: ${notes || "-"}\n\nPlease confirm my appointment.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="book" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Book Appointment</div>
          <h2 className="font-display text-5xl md:text-6xl font-light">Reserve your <span className="italic text-gradient-gold">chair</span></h2>
        </div>

        <div className="glass rounded-3xl p-6 md:p-10">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-10">
            {[1,2,3,4,5,6].map((s, i) => (
              <div key={s} className="flex-1 flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${s <= step ? "bg-gradient-gold text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>{s}</div>
                {i < 5 && <div className={`h-px flex-1 mx-1 ${s < step ? "bg-gold" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <div className="min-h-[280px]">
            {step === 1 && (
              <div>
                <h3 className="font-display text-2xl mb-6">Choose a service</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-2">
                  {SERVICES.map(s => (
                    <button key={s.name} onClick={() => setService(s.name)} className={`text-left p-4 rounded-xl border transition-all ${service === s.name ? "border-gold bg-gold/10" : "border-border hover:border-gold/50"}`}>
                      <div className="font-medium">{s.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.duration} · <span className="text-gold">RM{s.price}</span></div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                <h3 className="font-display text-2xl mb-6">Choose your barber</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {BARBERS.map(b => (
                    <button key={b.name} onClick={() => setBarber(b.name)} className={`p-4 rounded-xl border text-center transition-all ${barber === b.name ? "border-gold bg-gold/10" : "border-border hover:border-gold/50"}`}>
                      <img src={b.img} alt={b.name} loading="lazy" width={200} height={200} className="w-20 h-20 rounded-full object-cover mx-auto mb-3" />
                      <div className="font-medium">{b.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{b.specialty}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {step === 3 && (
              <div>
                <h3 className="font-display text-2xl mb-6">Pick a date</h3>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} min={new Date().toISOString().split("T")[0]} className="w-full md:w-auto bg-input border border-border rounded-xl px-5 py-4 text-lg focus:border-gold outline-none" />
              </div>
            )}
            {step === 4 && (
              <div>
                <h3 className="font-display text-2xl mb-6">Pick a time</h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {times.map(t => (
                    <button key={t} onClick={() => setTime(t)} className={`py-3 rounded-lg border text-sm transition-all ${time === t ? "border-gold bg-gold/10 text-gold" : "border-border hover:border-gold/50"}`}>{t}</button>
                  ))}
                </div>
              </div>
            )}
            {step === 5 && (
              <div className="space-y-4">
                <h3 className="font-display text-2xl mb-2">Your details</h3>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" maxLength={80} className="w-full bg-input border border-border rounded-xl px-5 py-4 focus:border-gold outline-none" />
                <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number" maxLength={20} className="w-full bg-input border border-border rounded-xl px-5 py-4 focus:border-gold outline-none" />
                <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Notes (optional)" maxLength={300} rows={3} className="w-full bg-input border border-border rounded-xl px-5 py-4 focus:border-gold outline-none" />
              </div>
            )}
            {step === 6 && (
              <div>
                <h3 className="font-display text-2xl mb-6">Confirm</h3>
                <div className="space-y-2 text-sm">
                  {[["Service",service],["Barber",barber],["Date",date],["Time",time],["Name",name],["Phone",phone],["Notes",notes||"-"]].map(([k,v]) => (
                    <div key={k} className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground uppercase tracking-wider text-xs">{k}</span>
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-6">Clicking below will open WhatsApp with your booking message pre-filled to send to U &amp; I Barbers.</p>
              </div>
            )}
          </div>

          <div className="flex justify-between mt-10 pt-6 border-t border-border">
            <button onClick={() => setStep(Math.max(1, step-1))} disabled={step === 1} className="px-6 py-3 text-sm uppercase tracking-wider text-muted-foreground disabled:opacity-30 hover:text-gold transition-colors">
              ← Back
            </button>
            {step < 6 ? (
              <button onClick={() => canNext() && setStep(step+1)} disabled={!canNext()} className="px-8 py-3 rounded-full bg-gradient-gold text-sm font-semibold uppercase tracking-wider text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed shadow-gold">
                Continue →
              </button>
            ) : (
              <button onClick={submit} className="px-8 py-3 rounded-full bg-gradient-gold text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold inline-flex items-center gap-2">
                <WhatsApp /> Book Appointment
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Visit Us</div>
          <h2 className="font-display text-5xl md:text-6xl font-light">Find your <span className="italic text-gradient-gold">chair</span></h2>
          <div className="mt-10 space-y-6">
            <ContactRow icon={<Pin />} title="Address" lines={[ADDRESS]} href={MAPS_URL} />
            <ContactRow icon={<Phone />} title="Phone" lines={[PHONE_PRIMARY, PHONE_SECONDARY]} href={`tel:${PHONE_PRIMARY.replace(/\s/g,"")}`} />
            <ContactRow icon={<Clock />} title="Hours" lines={["Every Day · 10:30 AM – 10:00 PM"]} />
            <ContactRow icon={<WhatsApp />} title="WhatsApp" lines={[PHONE_PRIMARY]} href={`https://wa.me/${WHATSAPP_NUMBER}`} />
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden aspect-square glass">
          <iframe
            title="Map"
            src={`https://www.google.com/maps?q=${encodeURIComponent("U & I Barbers Mydin Mall Subang Jaya")}&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, title, lines, href }: { icon: React.ReactNode; title: string; lines: string[]; href?: string }) {
  const Inner = (
    <>
      <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold shrink-0">{icon}</div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{title}</div>
        {lines.map((l, i) => <div key={i} className="text-sm mt-1">{l}</div>)}
      </div>
    </>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-start gap-4 hover:text-gold transition-colors">{Inner}</a>
  ) : (
    <div className="flex items-start gap-4">{Inner}</div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold/10 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="U & I Barbers" className="h-12 w-12 rounded-full" />
            <div>
              <div className="font-display text-xl text-gradient-gold">U &amp; I Barbers</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Premium Barbershop</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4 max-w-sm">Any Style, Anytime. Customer satisfaction is our priority.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Visit</div>
          <p className="text-sm text-muted-foreground">{ADDRESS}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Contact</div>
          <p className="text-sm text-muted-foreground">{PHONE_PRIMARY}<br/>{PHONE_SECONDARY}</p>
          <div className="flex gap-3 mt-4">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold hover:bg-gold/10"><WhatsApp /></a>
            <a href={`tel:${PHONE_PRIMARY.replace(/\s/g,"")}`} className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold hover:bg-gold/10"><Phone /></a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold hover:bg-gold/10"><Pin /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gold/10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} U &amp; I Barbers. All rights reserved.
      </div>
    </footer>
  );
}

/* Icons */
function Star() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>; }
function Phone() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>; }
function WhatsApp() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.3 2.2 3.3 5.3 4.7 2 .8 2.8.9 3.7.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>; }
function Pin() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>; }
function Clock() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>; }
