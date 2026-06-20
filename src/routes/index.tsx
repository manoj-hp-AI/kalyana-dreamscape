import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Camera,
  IndianRupee,
  Utensils,
  Flower2,
  Play,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
// Real photos sourced from AGN Kalyana Mantapa's public listing on WedMeGood
const heroImg = "https://image.wedmegood.com/resized/1000X/uploads/member/749355/1569837406_Screenshot_1.jpg";
const galMantapa = "https://image.wedmegood.com/resized/800X/uploads/member/749355/1569837406_Screenshot_2.jpg";
const galHall = "https://image.wedmegood.com/resized/800X/uploads/member/749355/1569837406_Screenshot_1.jpg";
const galDining = "https://image.wedmegood.com/resized/800X/uploads/member/749355/1569837406_Screenshot_3.jpg";
const galRooms = "https://image.wedmegood.com/resized/800X/uploads/member/749355/1569837406_Screenshot_4.jpg";
const galParking = "https://image.wedmegood.com/resized/800X/uploads/member/749355/1569837406_Screenshot_5.jpg";
const catererImg = "https://image.wedmegood.com/resized/800X/uploads/member/140316/1741870257_image4544.jpg";
const floristImg = "https://image.wedmegood.com/resized/800X/uploads/member/2224755/1739268490_image3682.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AGN Kalyana Mantapa — Traditional South Indian Wedding Hall" },
      { name: "description", content: "Sacred mantapa, grand banquet hall, dining, rooms, parking, catering & floral decor for your traditional South Indian wedding." },
      { property: "og:title", content: "AGN Kalyana Mantapa" },
      { property: "og:description", content: "Auspicious South Indian wedding venue — book your sacred ceremony with us." },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "919876543210";
const PHONE_DISPLAY = "+91 98765 43210";

const galleryCategories = [
  { id: "mantapa", label: "Mantapa", img: galMantapa, desc: "The sacred golden stage where vows are exchanged." },
  { id: "hall", label: "Main Hall", img: galHall, desc: "Grand banquet hall accommodating 1000+ guests." },
  { id: "dining", label: "Dining Hall", img: galDining, desc: "Traditional banana-leaf dining for 500 guests at a time." },
  { id: "rooms", label: "Guest Rooms", img: galRooms, desc: "20 elegant suites for the wedding party." },
  { id: "parking", label: "Parking", img: galParking, desc: "Secure parking for 200+ vehicles with valet service." },
] as const;

function Index() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeCat, setActiveCat] = useState<string>("mantapa");
  const [mobileNav, setMobileNav] = useState(false);

  const active = galleryCategories.find((c) => c.id === activeCat) ?? galleryCategories[0];

  const wa = (msg: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-accent/40 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-royal text-primary-foreground shadow-gold">
              <span className="font-display text-xl">ॐ</span>
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg text-primary">AGN</span>
              <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">Kalyana Mantapa</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#home" className="text-sm font-medium text-foreground/80 hover:text-primary">Home</a>
            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGalleryOpen(true)}
              onMouseLeave={() => setGalleryOpen(false)}
            >
              <button
                onClick={() => setGalleryOpen((o) => !o)}
                className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary"
              >
                Gallery <ChevronDown className={`h-4 w-4 transition ${galleryOpen ? "rotate-180" : ""}`} />
              </button>
              {galleryOpen && (
                <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-2xl border border-accent/60 bg-card shadow-royal">
                    {galleryCategories.map((cat) => (
                      <a
                        key={cat.id}
                        href="#gallery"
                        onClick={() => { setActiveCat(cat.id); setGalleryOpen(false); }}
                        className="flex items-center gap-3 border-b border-accent/30 px-4 py-3 last:border-0 transition hover:bg-secondary/20"
                      >
                        <img src={cat.img} alt="" className="h-10 w-10 rounded-md object-cover" loading="lazy" />
                        <div>
                          <div className="font-display text-sm text-primary">{cat.label}</div>
                          <div className="text-xs text-muted-foreground">View photos</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary">Services</a>
            <a href="#vendors" className="text-sm font-medium text-foreground/80 hover:text-primary">Caterers & Decor</a>
            <a href="#video" className="text-sm font-medium text-foreground/80 hover:text-primary">Video Tour</a>
            <a href="#location" className="text-sm font-medium text-foreground/80 hover:text-primary">Location</a>
            <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary">Contact</a>
          </nav>

          <a
            href={wa("Namaste, I would like to enquire about booking the Kalyana Mantapa.")}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-gradient-royal px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:opacity-95 lg:inline-flex"
          >
            Book Visit
          </a>

          <button onClick={() => setMobileNav((o) => !o)} className="rounded-md border border-accent/60 p-2 lg:hidden" aria-label="Menu">
            {mobileNav ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileNav && (
          <div className="border-t border-accent/40 bg-background lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
              {[
                ["#home", "Home"], ["#gallery", "Gallery"], ["#services", "Services"],
                ["#vendors", "Caterers & Decor"], ["#video", "Video Tour"],
                ["#location", "Location"], ["#contact", "Contact"],
              ].map(([h, l]) => (
                <a key={h} href={h} onClick={() => setMobileNav(false)} className="rounded-md px-3 py-2.5 text-sm hover:bg-secondary/20">{l}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Traditional South Indian Kalyana Mantapa decorated with marigolds and brass lamps"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/70 via-primary/55 to-background" />
        <div className="mx-auto max-w-5xl px-5 py-28 text-center md:py-40">
          <p className="ornate-divider mb-6 font-display text-sm uppercase tracking-[0.3em] text-accent">
            <span>॥ Shubha Vivaha ॥</span>
          </p>
          <h1 className="font-display text-4xl leading-tight text-primary-foreground sm:text-6xl md:text-7xl">
            AGN <br />
            <span className="text-accent">Kalyana Mantapa</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            A sacred space woven with marigold, jasmine and golden lamps — where two souls
            begin their eternal journey in true South Indian tradition.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#gallery"
              className="rounded-full bg-gradient-saffron px-7 py-3 font-semibold text-primary shadow-gold transition hover:scale-105"
            >
              Explore the Mantapa
            </a>
            <a
              href={wa("Namaste, I would like to check available dates.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-accent bg-background/10 px-7 py-3 font-semibold text-primary-foreground backdrop-blur transition hover:bg-accent/20"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="text-center">
          <p className="ornate-divider font-display text-xs uppercase tracking-[0.3em]">
            <span>Our Spaces</span>
          </p>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">A Tour of the Mantapa</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Step into every corner of our venue — from the sacred mantapa to the dining hall.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2 md:gap-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`rounded-full border-2 px-5 py-2 text-sm font-medium transition ${
                activeCat === cat.id
                  ? "border-primary bg-gradient-royal text-primary-foreground shadow-gold"
                  : "border-accent/60 text-foreground hover:border-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="overflow-hidden rounded-3xl border-2 border-accent/60 shadow-royal">
              <img
                key={active.id}
                src={active.img}
                alt={active.label}
                className="h-[420px] w-full animate-in fade-in object-cover md:h-[520px]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="rounded-3xl border border-accent/40 bg-card p-8 shadow-gold md:col-span-2">
            <h3 className="text-3xl text-primary">{active.label}</h3>
            <div className="mt-2 h-1 w-16 bg-gradient-saffron" />
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{active.desc}</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3"><span className="text-secondary">✦</span> Hand-crafted traditional design</li>
              <li className="flex items-start gap-3"><span className="text-secondary">✦</span> Air-conditioned with backup power</li>
              <li className="flex items-start gap-3"><span className="text-secondary">✦</span> Customisable décor packages</li>
              <li className="flex items-start gap-3"><span className="text-secondary">✦</span> 24×7 housekeeping</li>
            </ul>
            <a href="#contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gradient-to-b from-background to-secondary/10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center">
            <p className="ornate-divider font-display text-xs uppercase tracking-[0.3em]"><span>Our Promise</span></p>
            <h2 className="mt-4 text-4xl text-primary md:text-5xl">Services & Pricing</h2>
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            For three generations, AGN Kalyana Mantapa has hosted sacred unions
            in the spirit of true South Indian tradition. Every detail — from the carved
            golden pillars to the jasmine-scented evenings — is offered with devotion. Our
            in-house teams handle décor, dining, lodging and logistics so your family
            can simply celebrate.
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <IndianRupee className="h-6 w-6" />,
                title: "Transparent Pricing",
                price: "₹2.25L – ₹3.25L",
                desc: "Per day packages covering mantapa, hall, dining and rooms. Customise to suit your guest count and rituals.",
              },
              {
                icon: <Camera className="h-6 w-6" />,
                title: "24×7 CCTV Surveillance",
                price: "32 HD Cameras",
                desc: "Every entrance, parking lane, hall and corridor is monitored round-the-clock by our security team.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: "Safety & Hospitality",
                price: "Trained Staff",
                desc: "Fire-safety certified, on-site medical kit, valet parking and dedicated wedding co-ordinator.",
              },
            ].map((s) => (
              <div key={s.title} className="group rounded-3xl border border-accent/50 bg-card p-8 shadow-gold transition hover:-translate-y-1 hover:shadow-royal">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-royal text-primary-foreground">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-2xl text-primary">{s.title}</h3>
                <p className="mt-1 font-display text-lg text-secondary">{s.price}</p>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-accent/50 bg-gradient-royal p-8 text-center text-primary-foreground shadow-royal">
            <p className="font-display text-lg md:text-xl">
              ✦ Mantapa-only · Half-day · Full-day · 2-day · Reception-only packages available ✦
            </p>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Speak to our co-ordinator for a tailored quote based on your muhurtham and rituals.
            </p>
          </div>
        </div>
      </section>

      {/* VENDORS */}
      <section id="vendors" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="text-center">
          <p className="ornate-divider font-display text-xs uppercase tracking-[0.3em]"><span>Our Trusted Partners</span></p>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">Caterers & Flower Decorators</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Connect directly with our hand-picked partners — they know our venue inside out.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[
            {
              img: catererImg,
              icon: <Utensils className="h-5 w-5" />,
              tag: "Catering",
              name: "Sri Annapoorna Caterers",
              desc: "Authentic South Indian banana-leaf meals — over 60 traditional dishes from Karnataka, Tamil Nadu & Andhra. Pure satvik kitchen.",
              phone: "+91 98450 12345",
              waMsg: "Namaste, I would like to enquire about wedding catering at AGN Kalyana Mantapa.",
            },
            {
              img: floristImg,
              icon: <Flower2 className="h-5 w-5" />,
              tag: "Floral Decor",
              name: "Mallige Pushpa Decor",
              desc: "Fresh marigold, jasmine, rose and orchid mantapa décor. Specialists in traditional pheras, kalyana and reception staging.",
              phone: "+91 98860 56789",
              waMsg: "Namaste, I would like to enquire about flower decoration for my wedding at AGN Kalyana Mantapa.",
            },
          ].map((v) => (
            <div key={v.name} className="overflow-hidden rounded-3xl border border-accent/50 bg-card shadow-gold">
              <div className="relative h-64 overflow-hidden">
                <img src={v.img} alt={v.name} className="h-full w-full object-cover transition duration-700 hover:scale-105" loading="lazy" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-gradient-royal px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  {v.icon} {v.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="text-2xl text-primary">{v.name}</h3>
                <p className="mt-3 text-muted-foreground">{v.desc}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`tel:${v.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-5 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
                    <Phone className="h-4 w-4" /> {v.phone}
                  </a>
                  <a href={wa(v.waMsg)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-saffron px-5 py-2 text-sm font-semibold text-primary shadow-gold">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="bg-gradient-royal py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 text-center text-primary-foreground">
          <p className="ornate-divider font-display text-xs uppercase tracking-[0.3em] text-accent"><span>Virtual Tour</span></p>
          <h2 className="mt-4 text-4xl md:text-5xl">Walk Through Our Mantapa</h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/85">
            A short film capturing the soul, scale and sanctity of our wedding hall.
          </p>

          <div className="mt-12 overflow-hidden rounded-3xl border-4 border-accent/70 shadow-royal">
            <div className="relative grid aspect-video place-items-center bg-black/60 text-center">
              <div className="px-6">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent/20 text-accent">
                  <Play className="h-7 w-7 fill-current" />
                </div>
                <p className="mt-5 font-display text-2xl text-accent">Virtual Tour Coming Soon</p>
                <p className="mt-2 text-sm text-primary-foreground/75">
                  Our official walkthrough video will be added here shortly.
                </p>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-saffron px-7 py-3 font-semibold text-primary shadow-gold transition hover:scale-105"
          >
            <Play className="h-4 w-4 fill-current" /> Schedule a Live Site Visit
          </a>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <div className="text-center">
          <p className="ornate-divider font-display text-xs uppercase tracking-[0.3em]"><span>Find Us</span></p>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">Our Location</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 overflow-hidden rounded-3xl border-2 border-accent/60 shadow-gold">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.69!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AGN Kalyana Mantapa Location"
            />
          </div>
          <div className="rounded-3xl border border-accent/40 bg-card p-7 shadow-gold">
            <h3 className="text-2xl text-primary">Visit Our Mantapa</h3>
            <div className="mt-5 space-y-5 text-sm">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                <p>
                  Bannerghatta Main Rd, Omkar Nagar, Arekere, <br />
                  Bengaluru, Karnataka — 560076
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                <p>{PHONE_DISPLAY}<br /><span className="text-muted-foreground">+91 80 2667 8901 (Office)</span></p>
              </div>
              <div className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                <p>bookings@agnkalyanamantapa.in</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=AGN+Kalyana+Mantapa+Arekere+Bengaluru"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-royal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* TERMS + CONTACT FOOTER */}
      <footer id="contact" className="bg-gradient-royal text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-primary"><span className="font-display text-2xl">ॐ</span></span>
              <div>
                <div className="font-display text-xl">AGN</div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent">Kalyana Mantapa</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/80">
              Three generations of tradition, hospitality and devotion — woven into every wedding we host.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-accent">Contact</h4>
            <div className="mt-1 h-1 w-12 bg-accent" />
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/85">
              <li className="flex gap-2"><Phone className="h-4 w-4 text-accent" /> {PHONE_DISPLAY}</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-accent" /> bookings@agnkalyanamantapa.in</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-accent" /> Arekere, Bengaluru 560076</li>
              <li className="text-primary-foreground/70">Office Hours: 9 AM – 8 PM (All Days)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-accent">Terms & Conditions</h4>
            <div className="mt-1 h-1 w-12 bg-accent" />
            <ul className="mt-5 space-y-2 text-xs leading-relaxed text-primary-foreground/80">
              <li>• Booking is confirmed only on receipt of 30% advance payment.</li>
              <li>• Cancellation 30+ days prior — 80% refund. Within 30 days — non-refundable.</li>
              <li>• Outside catering allowed only with prior written approval.</li>
              <li>• Loud music / DJ permitted up to 10:00 PM as per local norms.</li>
              <li>• Damage to property will be charged at actuals.</li>
              <li>• Use of crackers / open fire strictly prohibited inside premises.</li>
              <li>• Management is not liable for personal valuables; lockers available on request.</li>
              <li>• All disputes subject to Bengaluru jurisdiction.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/30">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-primary-foreground/70 md:flex-row">
            <p>© {new Date().getFullYear()} AGN Kalyana Mantapa. All rights reserved.</p>
            <p>Built with devotion · ॐ श्री गणेशाय नमः</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING TOGGLE */}
      <WhatsAppToggle wa={wa} />
    </div>
  );
}

function WhatsAppToggle({ wa }: { wa: (msg: string) => string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[320px] overflow-hidden rounded-2xl border border-accent/60 bg-card shadow-royal animate-in fade-in slide-in-from-bottom-3">
          <div className="bg-[#075E54] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366]">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">AGN Mantapa</div>
                <div className="text-xs text-white/80">Typically replies in minutes</div>
              </div>
            </div>
          </div>
          <div className="space-y-3 p-5 text-sm">
            <p className="rounded-xl rounded-tl-none bg-secondary/20 p-3 text-foreground">
              🙏 Namaste! How can we help you today?
            </p>
            <a href={wa("Namaste, I would like to check date availability.")} target="_blank" rel="noreferrer" className="block rounded-lg border border-accent/60 px-3 py-2 text-foreground hover:bg-secondary/20">📅 Check date availability</a>
            <a href={wa("Namaste, please share your wedding packages and pricing.")} target="_blank" rel="noreferrer" className="block rounded-lg border border-accent/60 px-3 py-2 text-foreground hover:bg-secondary/20">💰 Get pricing details</a>
            <a href={wa("Namaste, I would like to schedule a site visit.")} target="_blank" rel="noreferrer" className="block rounded-lg border border-accent/60 px-3 py-2 text-foreground hover:bg-secondary/20">🏛️ Schedule a site visit</a>
            <a href={wa("Namaste, I would like to speak to the wedding co-ordinator.")} target="_blank" rel="noreferrer" className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-3 py-2.5 font-semibold text-white">
              <MessageCircle className="h-4 w-4" /> Start Chat
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        className="relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-5px_rgba(37,211,102,0.6)] transition hover:scale-110"
      >
        {open ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
        {!open && <span className="absolute -right-1 -top-1 flex h-4 w-4"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" /><span className="relative inline-flex h-4 w-4 rounded-full bg-secondary" /></span>}
      </button>
    </div>
  );
}
