import Link from 'next/link';

interface BuyerPageProps {
  tag: string;
  tagBg: string;
  tagColor: string;
  accentColor: string;
  title: string;
  subtitle: string;
  intro: string;
  steps: { title: string; text: string }[];
  programs: { name: string; desc: string; href: string }[];
  faqs: { q: string; a: string }[];
}

export default function BuyerPage({
  tag, tagBg, tagColor, accentColor,
  title, subtitle, intro, steps, programs, faqs,
}: BuyerPageProps) {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: '#F2EBE0', padding: '72px 52px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, opacity: 0.045,
          backgroundImage: 'radial-gradient(circle, #2A2118 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none',
        }} />
        <div className="buyer-hero-grid" style={{
          position: 'relative', zIndex: 2,
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '64px', alignItems: 'flex-start',
        }}>
          {/* Left */}
          <div>
            <div style={{
              display: 'inline-block', fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase' as const,
              padding: '4px 12px', borderRadius: '4px', marginBottom: '20px',
              background: tagBg, color: tagColor,
            }}>
              {tag}
            </div>
            <h1 style={{
              fontSize: '48px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '14px',
            }}>
              {title}
            </h1>
            <p style={{
              fontSize: '18px', fontWeight: 600, color: accentColor,
              marginBottom: '18px', lineHeight: 1.4,
            }}>
              {subtitle}
            </p>
            <p style={{
              fontSize: '15px', color: '#4A3728', lineHeight: 1.78, marginBottom: '32px',
            }}>
              {intro}
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' as const }}>
              <Link href="/get-started/pre-approval" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#B85C38', color: '#FFFCF8',
                fontSize: '14px', fontWeight: 700, padding: '14px 28px',
                borderRadius: '6px', textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
              }}>Get Pre-Approved</Link>
              <Link href="/get-started/schedule" style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'transparent', color: '#2A2118',
                fontSize: '14px', fontWeight: 700, padding: '13px 28px',
                borderRadius: '6px', textDecoration: 'none',
                border: '2px solid #2A2118',
              }}>Schedule a Call</Link>
            </div>
          </div>

          {/* Right -- steps */}
          <div style={{
            background: '#FFFCF8', borderRadius: '16px', padding: '32px',
            border: '1px solid #E8DDD0',
            boxShadow: '0 8px 40px rgba(42,33,24,0.08)',
            borderTop: `4px solid ${accentColor}`,
          }}>
            <h2 style={{
              fontSize: '20px', fontWeight: 800, color: '#2A2118',
              letterSpacing: '-0.02em', marginBottom: '20px',
            }}>
              Your path to homeownership
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {steps.map((step, i) => (
                <div key={step.title} style={{
                  display: 'flex', gap: '14px', alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: accentColor, color: '#FFFCF8',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px', fontWeight: 800, flexShrink: 0,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#2A2118', marginBottom: '4px' }}>
                      {step.title}
                    </div>
                    <div style={{ fontSize: '13px', color: '#4A3728', lineHeight: 1.65 }}>
                      {step.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#2A2118' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── RECOMMENDED PROGRAMS ── */}
      <section style={{ background: '#2A2118', padding: '80px 52px' }}>
        <div style={{ textAlign: 'center' as const, marginBottom: '48px' }}>
          <div style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase' as const, color: '#F5E8E1',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '10px', marginBottom: '14px',
          }}>
            <span style={{ width: '28px', height: '2px', background: '#F5E8E1', display: 'block' }} />
            Recommended programs
            <span style={{ width: '28px', height: '2px', background: '#F5E8E1', display: 'block' }} />
          </div>
          <h2 style={{
            fontSize: '36px', fontWeight: 800, color: '#FFFCF8',
            letterSpacing: '-0.025em',
          }}>
            Loan programs that fit your situation
          </h2>
        </div>

        <div className="buyer-programs-grid" style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${programs.length}, 1fr)`,
          gap: '16px',
          maxWidth: '1000px',
          margin: '0 auto 56px',
        }}>
          {programs.map((prog) => (
            <Link key={prog.name} href={prog.href} style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px', padding: '24px',
              border: '1px solid rgba(255,255,255,0.08)',
              borderTop: `3px solid ${accentColor}`,
              textDecoration: 'none', color: 'inherit', display: 'block',
            }}>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#FFFCF8', marginBottom: '8px' }}>
                {prog.name}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(250,246,240,0.7)', lineHeight: 1.65, marginBottom: '14px' }}>
                {prog.desc}
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: accentColor }}>
                Learn more →
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '40px',
          border: '1px solid rgba(255,255,255,0.08)',
          maxWidth: '640px', margin: '0 auto',
          textAlign: 'center' as const,
        }}>
          <h3 style={{
            fontSize: '24px', fontWeight: 800, color: '#FFFCF8',
            letterSpacing: '-0.02em', marginBottom: '10px',
          }}>
            Not sure where to start?
          </h3>
          <p style={{
            fontSize: '14px', color: 'rgba(250,246,240,0.72)',
            lineHeight: 1.7, marginBottom: '24px',
          }}>
            Tell me about your situation and I will point you in the right direction.
            No pressure, no commitment. Just real answers.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
            <Link href="/get-started/pre-approval" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#B85C38', color: '#FFFCF8',
              fontSize: '13px', fontWeight: 700, padding: '12px 24px',
              borderRadius: '6px', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
            }}>Get Pre-Approved</Link>
            <a href="tel:2534178790" style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'transparent', color: '#D4C4B0',
              fontSize: '13px', fontWeight: 700, padding: '11px 24px',
              borderRadius: '6px', textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.2)',
            }}>Call (253) 417-8790</a>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#2A2118', fill: '#F2EBE0' }}>
        <path d="M0,0 C360,56 1080,56 1440,0 L1440,56 L0,56 Z" />
      </svg>

      {/* ── FAQS ── */}
      <section style={{ background: '#F2EBE0', padding: '80px 52px' }}>
        <div style={{ textAlign: 'center' as const, marginBottom: '48px' }}>
          <div style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase' as const, color: '#B85C38',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '10px', marginBottom: '14px',
          }}>
            <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block' }} />
            Common questions
            <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block' }} />
          </div>
          <h2 style={{
            fontSize: '36px', fontWeight: 800, color: '#2A2118',
            letterSpacing: '-0.025em',
          }}>
            What buyers like you ask
          </h2>
        </div>

        <div className="faq-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          maxWidth: '1100px',
          margin: '0 auto',
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
      </section>
    </>
  );
}