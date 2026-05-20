"use client";
import { useState, useEffect } from "react";

interface Page { name: string; desc: string; }
interface Feature { label: string; on: boolean; }
interface Specs { pages: string; products: string; revisions: string; delivery: string; }
interface Package {
  tier: string; name: string; price: string; delivery: string;
  popular?: boolean; pages: Page[]; features: Feature[];
  specs: Specs; waPages: string; waFeatures: string; waSpecs: string;
}

const pkgs: Package[] = [
  {
    tier: "Tier 01", name: "Starter", price: "23,393", delivery: "2 days",
    pages: [
      { name: "Home", desc: "Hero, intro, CTA" },
      { name: "Products", desc: "10 items listed" },
      { name: "Contact", desc: "Form + your info" },
    ],
    features: [
      { label: "Functional website", on: true },
      { label: "Responsive design", on: true },
      { label: "Content upload", on: true },
      { label: "Speed optimization", on: false },
      { label: "E-commerce", on: false },
    ],
    specs: { pages: "3", products: "10", revisions: "∞", delivery: "2d" },
    waPages: "3 Pages: Home (Hero, intro, CTA), Products (10 items), Contact (Form + info)",
    waFeatures: "Functional website, Responsive design, Content upload",
    waSpecs: "3 pages · 10 products · Unlimited revisions · 2-day delivery",
  },
  {
    tier: "Tier 02", name: "Professional", price: "29,241", delivery: "5 days", popular: true,
    pages: [
      { name: "Home", desc: "Hero, features, testimonials" },
      { name: "About", desc: "Brand story, team" },
      { name: "Services", desc: "Offerings, pricing" },
      { name: "Products", desc: "15 items, filters" },
      { name: "Contact", desc: "Form, map, social links" },
    ],
    features: [
      { label: "Functional website", on: true },
      { label: "Responsive design", on: true },
      { label: "Content upload", on: true },
      { label: "Speed optimization", on: true },
      { label: "E-commerce", on: false },
    ],
    specs: { pages: "5", products: "15", revisions: "∞", delivery: "5d" },
    waPages: "5 Pages: Home, About, Services, Products (15 items + filters), Contact",
    waFeatures: "Functional website, Responsive design, Content upload, Speed optimization",
    waSpecs: "5 pages · 15 products · Unlimited revisions · 5-day delivery",
  },
  {
    tier: "Tier 03", name: "Elite", price: "39,475", delivery: "6 days",
    pages: [
      { name: "Home", desc: "Hero, features, reviews, CTA" },
      { name: "About", desc: "Story, team, mission" },
      { name: "Services", desc: "Full offerings" },
      { name: "Products", desc: "25 items, cart, filters" },
      { name: "Blog / Gallery", desc: "Content or portfolio" },
      { name: "FAQ", desc: "Reduce support queries" },
      { name: "Contact", desc: "Form, map, WhatsApp" },
    ],
    features: [
      { label: "Functional website", on: true },
      { label: "Responsive design", on: true },
      { label: "Content upload", on: true },
      { label: "Speed optimization", on: true },
      { label: "E-commerce + cart", on: true },
    ],
    specs: { pages: "8", products: "25", revisions: "∞", delivery: "6d" },
    waPages: "8 Pages: Home, About, Services, Products (25 + cart), Product Detail, Blog/Gallery, FAQ, Contact",
    waFeatures: "Functional website, Responsive design, Content upload, Speed optimization, Full E-commerce + Cart",
    waSpecs: "8 pages · 25 products · Unlimited revisions · 6-day delivery",
  },
];

const WA_SVG = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function PackagesSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const t = {
    sectionBg:  isDark ? "#0e1118"  : "#f0f4f8",
    cardBg:     isDark ? "#111111"  : "#ffffff",
    cardBgSel:  isDark ? "#0d1a1a"  : "#f0fafa",
    specBg:     isDark ? "#080b10"  : "#f8f9fa",
    actionBg:   isDark ? "#111111"  : "#ffffff",
    border:     isDark ? "#1e1e1e"  : "#e2e8f0",
    borderSel:  isDark ? "#22d3ee"  : "#22d3ee",
    borderPop:  isDark ? "#0e2a2d"  : "#bfecf4",
    borderSpec: isDark ? "#1a1a1a"  : "#e2e8f0",
    heading:    isDark ? "#ffffff"  : "#0a0a0a",
    subtext:    isDark ? "#9ca3af"  : "#64748b",
    tierLabel:  isDark ? "#4b5563"  : "#94a3b8",
    tierSel:    "#22d3ee",
    cardName:   isDark ? "#ffffff"  : "#0f172a",
    priceCurr:  isDark ? "#6b7280"  : "#94a3b8",
    priceMain:  isDark ? "#ffffff"  : "#0f172a",
    priceSel:   "#22d3ee",
    delivery:   isDark ? "#6b7280"  : "#94a3b8",
    pageName:   isDark ? "#d1d5db"  : "#334155",
    pageDesc:   isDark ? "#4b5563"  : "#94a3b8",
    featOn:     isDark ? "#d1d5db"  : "#334155",
    featOff:    isDark ? "#2d3748"  : "#cbd5e1",
    specVal:    isDark ? "#ffffff"  : "#0f172a",
    specKey:    isDark ? "#4b5563"  : "#94a3b8",
    hintText:   isDark ? "#374151"  : "#94a3b8",
    divider:    isDark ? "#1e1e1e"  : "#e2e8f0",
    accent:     "#22d3ee",
    accentDim:  isDark ? "#0e3a40"  : "#cff8ff",
  };

  function openWhatsApp() {
    if (selected === null) return;
    const p = pkgs[selected];
    const msg = `Hello Sajawal! 👋\n\nI visited your website and I'm interested in your *${p.name} Package*.\n\n*📦 Package:* ${p.name} (${p.tier})\n*💰 Price:* PKR ${p.price}\n*⏱ Delivery:* ${p.delivery}\n*📄 Pages:* ${p.waPages}\n*✅ Includes:* ${p.waFeatures}\n*📊 Summary:* ${p.waSpecs}\n\nCould you please explain the next steps? Looking forward to hearing from you!`;
    window.open(`https://wa.me/923111101898?text=${encodeURIComponent(msg)}`, "_blank");
  }

  const sel = selected !== null ? pkgs[selected] : null;

  // Helper: render spec value — ∞ gets special treatment
  const SpecValue = ({ v, size, color }: { v: string; size: string; color: string }) => {
    if (v === "∞") {
      return (
        <span style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: size,
          fontWeight: 700,
          lineHeight: 1,
          color,
          display: "block",
        }}>∞</span>
      );
    }
    return (
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: size,
        fontWeight: 700,
        lineHeight: 1,
        color,
        display: "block",
      }}>{v}</span>
    );
  };

  return (
    <section id="packages" style={{ background: t.sectionBg, padding: "120px 0", position: "relative" }}>

      {/* Top separator */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: `linear-gradient(90deg, transparent, ${t.accent}40, transparent)`
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <span style={{ width: "28px", height: "1px", background: t.accent, display: "inline-block" }} />
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase", color: t.accent }}>
            Pricing Plans
          </span>
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(36px, 4.5vw, 56px)",
          fontWeight: 800, lineHeight: 1.05,
          color: t.heading, margin: "0 0 16px",
        }}>
          Choose Your{" "}
          <span style={{ color: t.accent }}>Growth Plan</span>
        </h2>

        <p style={{ fontSize: "16px", color: t.subtext, margin: "0 0 60px", maxWidth: "500px", lineHeight: 1.6 }}>
          Pick a plan that fits your goals.
        </p>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "20px" }}
          className="pkg-cards-grid">
          {pkgs.map((pkg, i) => {
            const isSel = selected === i;
            return (
              <div key={i} onClick={() => setSelected(i)}
                style={{
                  background: isSel ? t.cardBgSel : t.cardBg,
                  border: `1px solid ${isSel ? t.borderSel : pkg.popular ? t.borderPop : t.border}`,
                  borderRadius: "16px", padding: "28px 24px",
                  position: "relative", cursor: "pointer",
                  transition: "all 0.2s ease",
                  transform: isSel ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: isSel ? `0 12px 40px ${t.accent}15` : "none",
                }}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div style={{
                    position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)",
                    background: t.accent, color: "#0a0a0a",
                    fontSize: "9px", fontWeight: 700, letterSpacing: "2px",
                    textTransform: "uppercase", padding: "4px 14px",
                    borderRadius: "20px", whiteSpace: "nowrap",
                  }}>★ Most Popular</div>
                )}

                {/* Check circle */}
                <div style={{
                  position: "absolute", top: "16px", right: "16px",
                  width: "22px", height: "22px", borderRadius: "50%",
                  border: `1px solid ${isSel ? t.accent : t.divider}`,
                  background: isSel ? t.accent : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "11px", color: isSel ? "#0a0a0a" : "transparent",
                  transition: "all 0.2s",
                }}>✓</div>

                {/* Tier */}
                <p style={{ fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: isSel ? t.tierSel : t.tierLabel, marginBottom: "6px", transition: "color 0.2s" }}>
                  {pkg.tier}
                </p>

                {/* Name */}
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: 800, color: t.cardName, marginBottom: "14px" }}>
                  {pkg.name}
                </p>

                {/* Price */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px", paddingBottom: "16px", borderBottom: `1px solid ${t.divider}`, marginBottom: "16px" }}>
                  <span style={{ fontSize: "11px", color: t.priceCurr }}>PKR</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "28px", fontWeight: 700, lineHeight: 1, color: isSel ? t.priceSel : t.priceMain, transition: "color 0.2s" }}>
                    {pkg.price}
                  </span>
                  <span style={{ fontSize: "11px", color: t.delivery, marginLeft: "auto", alignSelf: "flex-end" }}>{pkg.delivery}</span>
                </div>

                {/* Pages label */}
                <p style={{ fontSize: "9px", letterSpacing: "2.5px", textTransform: "uppercase", color: t.tierLabel, marginBottom: "10px" }}>
                  {pkg.pages.length} Pages
                </p>

                {/* Pages */}
                <div style={{ marginBottom: "14px" }}>
                  {pkg.pages.map((pg, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "7px" }}>
                      <span style={{ color: t.accent, fontSize: "8px", flexShrink: 0, marginTop: "3px" }}>✦</span>
                      <div>
                        <p style={{ fontSize: "12px", color: t.pageName, fontWeight: 600, lineHeight: 1.2 }}>{pg.name}</p>
                        <p style={{ fontSize: "10px", color: t.pageDesc, lineHeight: 1.4 }}>{pg.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ borderTop: `1px solid ${t.divider}`, margin: "12px 0" }} />

                {/* Features */}
                <div style={{ marginBottom: "16px" }}>
                  {pkg.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <span style={{ color: f.on ? t.accent : t.featOff, fontSize: "9px" }}>✦</span>
                      <span style={{ fontSize: "12px", color: f.on ? t.featOn : t.featOff }}>{f.label}</span>
                    </div>
                  ))}
                </div>

                {/* Specs grid — FIX 1: bigger numbers, FIX 2: ∞ uses serif font for proper rendering */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {[
                    { v: pkg.specs.pages, k: "Pages" },
                    { v: pkg.specs.products, k: "Products" },
                    { v: pkg.specs.revisions, k: "Revisions" },
                    { v: pkg.specs.delivery, k: "Delivery" },
                  ].map((s, j) => (
                    <div key={j} style={{ background: t.specBg, border: `1px solid ${t.borderSpec}`, borderRadius: "8px", padding: "12px 14px" }}>
                      <SpecValue v={s.v} size="26px" color={t.specVal} />
                      <p style={{ fontSize: "10px", color: t.specKey, letterSpacing: "1px", textTransform: "uppercase", marginTop: "4px" }}>{s.k}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Bar */}
        <div style={{ background: t.actionBg, border: `1px solid ${t.border}`, borderRadius: "16px", padding: "24px 28px" }}>
          {sel ? (
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "18px", flexWrap: "wrap" }}>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: 800, color: t.heading }}>{sel.name} Package</p>
                <p style={{ fontSize: "13px", color: t.accent, marginTop: "3px" }}>PKR {sel.price} · {sel.delivery}</p>
              </div>
              {/* FIX 3: Action bar specs — bigger numbers + labels */}
              <div style={{ display: "flex", gap: "28px", marginLeft: "auto" }}>
                {[
                  { v: sel.specs.pages, k: "Pages" },
                  { v: sel.specs.products, k: "Products" },
                  { v: sel.specs.revisions, k: "Revisions" },
                  { v: sel.specs.delivery, k: "Delivery" },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <SpecValue v={s.v} size="26px" color={t.heading} />
                    <p style={{ fontSize: "11px", color: t.specKey, letterSpacing: "1px", textTransform: "uppercase", marginTop: "4px" }}>{s.k}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p style={{ fontSize: "14px", color: t.subtext, marginBottom: "18px" }}>Select a package above to proceed</p>
          )}

          <button onClick={openWhatsApp} disabled={selected === null}
            style={{
              width: "100%", padding: "18px",
              borderRadius: "12px", border: "none",
              background: selected !== null ? "#25D366" : isDark ? "#0f1f0f" : "#e8f5e9",
              color: selected !== null ? "#ffffff" : isDark ? "#1e3d1e" : "#a5c8a5",
              fontSize: "17px", fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif",
              cursor: selected !== null ? "pointer" : "not-allowed",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
              transition: "background 0.2s",
            }}>
            {WA_SVG}
            {sel ? `Order ${sel.name} on WhatsApp ↗` : "Select a Package First"}
          </button>

          <p style={{ textAlign: "center", fontSize: "12px", color: t.hintText, marginTop: "12px" }}>
            {sel ? "WhatsApp pe poori package detail ke saath message jayega" : "Package select karne ke baad WhatsApp button active ho jayega"}
          </p>
        </div>
      </div>

      {/* Bottom separator */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
        background: `linear-gradient(90deg, transparent, ${t.accent}40, transparent)`
      }} />

      <style>{`
        @media (max-width: 900px) {
          .pkg-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}