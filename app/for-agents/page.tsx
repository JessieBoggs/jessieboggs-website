import Link from 'next/link';
export const metadata = {
  title: 'For Real Estate Agents | Partner With Jessie Boggs NMLS #2803455',
  description: 'A mortgage partner who makes you look good. Same-day pre-approvals, proactive communication, and construction expertise. Jessie Boggs NMLS #2803455 Eastern WA & ID.',
};
export default function ForAgents() {
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
        <div className="agents-hero-grid" style={{
          position: 'relative', zIndex: 2,
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '64px', alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#B85C38',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
              For Real Estate Agents
            </div>
            <h1 style={{
              fontSize: '52px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '20px',
            }}>
              A partner who makes<br />
              <span style={{ color: '#B85C38' }}>you look good.</span>
            </h1>
            <p style={{
              fontSize: '16px', color: '#4A3728', lineHeight: 1.75, marginBottom: '36px',
            }}>
              When you refer a client to a loan officer your reputation goes with them.
              I take that seriously. My job is not just to get your client a loan.
              It is to make the entire experience reflect well on you.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' as const }}>
              <Link href="/for-agents/referral" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#B85C38', color: '#FFFCF8',
                fontSize: '14px', fontWeight: 700, padding: '14px 28px',
                borderRadius: '6px', textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
              }}>Submit a Referral</Link>
              <Link href="/for-agents/why-partner" style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'transparent', color: '#2A2118',
                fontSize: '14px', fontWeight: 700, padding: '13px 28px',
                borderRadius: '6px', textDecoration: 'none',
                border: '2px solid #2A2118',
              }}>Why Partner With Me</Link>
            </div>
          </div>

          {/* Right -- value props */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { icon: '⚡', title: 'Same-Day Pre-Approvals', text: 'Your clients get the competitive edge they need the moment they need it.', color: '#B85C38' },
              { icon: '📞', title: 'Proactive Communication', text: 'You will never chase me for a status update. I keep you in the loop at every milestone.', color: '#3D6B5C' },
              { icon: '🔨', title: 'Construction Expertise', text: 'I evaluate properties through a contractor\'s eyes. That knowledge keeps deals alive.', color: '#B85C38' },
              { icon: '📋', title: 'Shareable Client Resources', text: 'Market updates, buyer guides, and content your clients will actually read.', color: '#3D6B5C' },
            ].map((item) => (
              <div key={item.title} style={{
                display: 'flex', gap: '14px', alignItems: 'flex-start',
                background: '#FFFCF8', borderRadius: '12px', padding: '18px 20px',
                border: '1px solid #E8DDD0', borderLeft: `4px solid ${item.color}`,
                boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
              }}>
                <span style={{ fontSize: '22px', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#2A2118', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '13px', color: '#4A3728', lineHeight: 1.6 }}>
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#2A2118' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── THREE PATHS ── */}
      <section style={{ background: '#2A2118', padding: '80px 52px' }}>
        <div style={{ textAlign: 'center' as const, marginBottom: '48px' }}>
          <div style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase' as const, color: '#F5E8E1',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '10px', marginBottom: '14px',
          }}>
            <span style={{ width: '28px', height: '2px', background: '#F5E8E1', display: 'block' }} />
            How we work together
            <span style={{ width: '28px', height: '2px', background: '#F5E8E1', display: 'block' }} />
          </div>
          <h2 style={{
            fontSize: '36px', fontWeight: 800, color: '#FFFCF8',
            letterSpacing: '-0.025em',
          }}>
            Three ways to partner with me
          </h2>
        </div>

        <div className="agents-paths-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px', maxWidth: '1000px', margin: '0 auto',
        }}>
          {[
            {
              icon: '🤝', title: 'Refer a Client',
              desc: 'Have a buyer who is ready to go? Send them my way. I will take it from there and keep you in the loop every step of the process.',
              href: '/for-agents/referral', btnLabel: 'Submit a Referral', btnBg: '#B85C38',
            },
            {
              icon: '❓', title: 'Why Partner With Me',
              desc: 'Learn what makes working with me different from other loan officers in the Eastern WA and North Idaho market.',
              href: '/for-agents/why-partner', btnLabel: 'Learn More', btnBg: '#3D6B5C',
            },
            {
              icon: '📚', title: 'Agent Resources',
              desc: 'Market updates, co-brandable buyer guides, and content you can share directly with your clients. Updated regularly.',
              href: '/for-agents/resources', btnLabel: 'Browse Resources', btnBg: '#2E5245',
            },
          ].map((item) => (
            <div key={item.title} style={{
              background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '32px',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', flexDirection: 'column', gap: '16px',
            }}>
              <span style={{ fontSize: '36px' }}>{item.icon}</span>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#FFFCF8' }}>{item.title}</div>
              <div style={{ fontSize: '14px', color: 'rgba(250,246,240,0.72)', lineHeight: 1.7, flex: 1 }}>{item.desc}</div>
              <Link href={item.href} style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                background: item.btnBg, color: '#FFFCF8',
                fontSize: '13px', fontWeight: 700, padding: '12px 20px',
                borderRadius: '6px', textDecoration: 'none',
              }}>{item.btnLabel}</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}