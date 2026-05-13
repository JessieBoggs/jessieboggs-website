import Link from 'next/link';

interface AreaPageProps {
  city: string;
  state: string;
  stateAbbr: string;
  county: string;
  description: string;
  marketNotes: string;
  topPrograms: { name: string; reason: string; href: string }[];
  nearbyAreas: { name: string; href: string }[];
  faqs: { q: string; a: string }[];
}

export default function AreaPage({
  city, state, stateAbbr, county, description,
  marketNotes, topPrograms, nearbyAreas, faqs,
}: AreaPageProps) {
  const isIdaho = stateAbbr === 'ID';
  const accentColor = isIdaho ? '#3D6B5C' : '#B85C38';
  const accentPale = isIdaho ? '#E4F0EC' : '#F5E8E1';
  const accentText = isIdaho ? '#2E5245' : '#8F4228';

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: '#F2EBE0', padding: '72px 52px 0',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, opacity: 0.045,
          backgroundImage: 'radial-gradient(circle, #2A2118 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none',
        }} />
        <div className="area-hero-grid" style={{
          position: 'relative', zIndex: 2,
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '64px', alignItems: 'flex-start',
          paddingBottom: '52px',
        }}>
          {/* Left */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: accentColor,
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px',
            }}>
              <span style={{ width: '28px', height: '2px', background: accentColor, display: 'block', flexShrink: 0 }} />
              Mortgage Lender — {city}, {stateAbbr}
            </div>
            <h1 style={{
              fontSize: '48px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '16px',
            }}>
              Home Loans in<br />
              <span style={{ color: accentColor }}>{city}, {state}.</span>
            </h1>
            <p style={{
              fontSize: '16px', color: '#4A3728', lineHeight: 1.78, marginBottom: '32px',
            }}>
              {description}
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' as const }}>
              <Link href="/get-started/pre-approval" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#B85C38', color: '#FFFCF8',
                fontSize: '14px', fontWeight: 700, padding: '14px 28px',
                borderRadius: '6px', textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
              }}>Get Pre-Approved</Link>
              <a href="tel:2534178790" style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'transparent', color: '#2A2118',
                fontSize: '14px', fontWeight: 700, padding: '13px 28px',
                borderRadius: '6px', textDecoration: 'none',
                border: '2px solid #2A2118',
              }}>Call (253) 417-8790</a>
            </div>
          </div>

          {/* Right -- quick facts card */}
          <div style={{
            background: '#FFFCF8', borderRadius: '16px', padding: '32px',
            border: '1px solid #E8DDD0',
            boxShadow: '0 8px 40px rgba(42,33,24,0.08)',
            borderTop: `4px solid ${accentColor}`,
          }}>
            <h2 style={{
              fontSize: '18px', fontWeight: 800, color: '#2A2118',
              letterSpacing: '-0.02em', marginBottom: '20px',
            }}>
              Serving {city} and {county}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              {[
                { label: 'Licensed In', value: state },
                { label: 'NMLS', value: '#2803455' },
                { label: 'Loan Programs', value: '8+ Programs Available' },
                { label: 'Down Payment', value: 'As Low as $0' },
                { label: 'Response Time', value: 'Same Day' },
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', fontSize: '13px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid #F2EBE0',
                }}>
                  <span style={{ color: '#8C7B6E', fontWeight: 600 }}>{item.label}</span>
                  <span style={{ color: '#2A2118', fontWeight: 700 }}>{item.value}</span>
                </div>
              ))}
            </div>
            <div style={{
              background: accentPale, borderRadius: '10px', padding: '16px',
              fontSize: '13px', color: accentText, lineHeight: 1.65,
            }}>
              I live and work in this region. When you call me you are talking to someone
              who knows {city} and the surrounding communities firsthand.
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#2A2118' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── MARKET NOTES + PROGRAMS ── */}
      <section style={{ background: '#2A2118', padding: '80px 52px' }}>
        <div className="area-content-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '64px', alignItems: 'flex-start',
        }}>
          {/* Left -- market notes */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#F5E8E1',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#F5E8E1', display: 'block', flexShrink: 0 }} />
              The {city} Market
            </div>
            <h2 style={{
              fontSize: '36px', fontWeight: 800, color: '#FFFCF8',
              letterSpacing: '-0.025em', marginBottom: '20px',
            }}>
              What I know about buying here.
            </h2>
            <p style={{
              fontSize: '15px', color: 'rgba(250,246,240,0.78)',
              lineHeight: 1.85,
            }}>
              {marketNotes}
            </p>
          </div>

          {/* Right -- top programs */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#F5E8E1',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#F5E8E1', display: 'block', flexShrink: 0 }} />
              Top Programs for {city} Buyers
            </div>
            <h2 style={{
              fontSize: '36px', fontWeight: 800, color: '#FFFCF8',
              letterSpacing: '-0.025em', marginBottom: '24px',
            }}>
              Best loan fits for this area.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {topPrograms.map((prog) => (
                <Link key={prog.name} href={prog.href} style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '12px', padding: '20px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textDecoration: 'none', color: 'inherit',
                  display: 'block',
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#FFFCF8', marginBottom: '6px' }}>
                    {prog.name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(250,246,240,0.65)', lineHeight: 1.65 }}>
                    {prog.reason}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: accentColor === '#3D6B5C' ? '#8FCBBF' : '#F5E8E1', marginTop: '8px' }}>
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#2A2118', fill: '#FAF6F0' }}>
        <path d="M0,0 C360,56 1080,56 1440,0 L1440,56 L0,56 Z" />
      </svg>

      {/* ── FAQS ── */}
      <section style={{ background: '#FAF6F0', padding: '80px 52px' }}>
        <div style={{ textAlign: 'center' as const, marginBottom: '48px' }}>
          <div style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase' as const, color: '#B85C38',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '10px', marginBottom: '14px',
          }}>
            <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block' }} />
            Common Questions
            <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block' }} />
          </div>
          <h2 style={{
            fontSize: '36px', fontWeight: 800, color: '#2A2118',
            letterSpacing: '-0.025em',
          }}>
            Questions from {city} buyers
          </h2>
        </div>

        <div className="faq-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px', maxWidth: '1100px', margin: '0 auto 56px',
        }}>
          {faqs.map((faq) => (
            <div key={faq.q} style={{
              background: '#FFFCF8', borderRadius: '12px', padding: '24px',
              border: '1px solid #E8DDD0',
              borderTop: `3px solid ${accentColor}`,
              boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#2A2118', marginBottom: '10px' }}>
                {faq.q}
              </div>
              <div style={{ fontSize: '13px', color: '#4A3728', lineHeight: 1.7 }}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>

        {/* Nearby areas */}
        <div style={{
          background: '#FFFCF8', borderRadius: '16px', padding: '32px',
          border: '1px solid #E8DDD0',
          boxShadow: '0 4px 20px rgba(42,33,24,0.07)',
          maxWidth: '800px', margin: '0 auto 48px',
        }}>
          <h3 style={{
            fontSize: '18px', fontWeight: 800, color: '#2A2118',
            letterSpacing: '-0.02em', marginBottom: '16px', textAlign: 'center' as const,
          }}>
            Also serving nearby communities
          </h3>
          <div style={{
            display: 'flex', gap: '10px', flexWrap: 'wrap' as const,
            justifyContent: 'center',
          }}>
            {nearbyAreas.map((area) => (
              <Link key={area.name} href={area.href} style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#F2EBE0', color: '#2A2118',
                fontSize: '13px', fontWeight: 600, padding: '8px 16px',
                borderRadius: '20px', textDecoration: 'none',
                border: '1px solid #E8DDD0',
              }}>
                {area.name}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: '#2A2118', borderRadius: '16px', padding: '48px',
          textAlign: 'center' as const,
          maxWidth: '640px', margin: '0 auto',
        }}>
          <h2 style={{
            fontSize: '28px', fontWeight: 800, color: '#FFFCF8',
            letterSpacing: '-0.025em', marginBottom: '12px',
          }}>
            Ready to buy in {city}?
          </h2>
          <p style={{
            fontSize: '15px', color: 'rgba(250,246,240,0.72)',
            lineHeight: 1.75, marginBottom: '28px',
          }}>
            Let me show you exactly what you qualify for. No pressure, no commitment.
            Just real answers from someone who knows this market.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link href="/get-started/pre-approval" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#B85C38', color: '#FFFCF8',
              fontSize: '14px', fontWeight: 700, padding: '14px 28px',
              borderRadius: '6px', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
            }}>Get Pre-Approved</Link>
            <Link href="/get-started/schedule" style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'transparent', color: '#D4C4B0',
              fontSize: '14px', fontWeight: 700, padding: '13px 28px',
              borderRadius: '6px', textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.2)',
            }}>Schedule a Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}