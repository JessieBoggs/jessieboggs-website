import Link from 'next/link';

export default function WhyPartner() {
  return (
    <>
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
          gap: '64px', alignItems: 'flex-start',
        }}>
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#B85C38',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
              Why Partner With Me
            </div>
            <h1 style={{
              fontSize: '48px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '20px',
            }}>
              I make you look good.<br />
              <span style={{ color: '#B85C38' }}>Every single time.</span>
            </h1>
            <p style={{
              fontSize: '16px', color: '#4A3728', lineHeight: 1.75, marginBottom: '32px',
            }}>
              When you refer a client to a loan officer your reputation goes with them.
              I take that seriously. Here is exactly what you get when you partner with me.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' as const }}>
              <Link href="/for-agents/referral" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#B85C38', color: '#FFFCF8',
                fontSize: '14px', fontWeight: 700, padding: '14px 28px',
                borderRadius: '6px', textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
              }}>Submit a Referral</Link>
              <a href="tel:2534178790" style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'transparent', color: '#2A2118',
                fontSize: '14px', fontWeight: 700, padding: '13px 28px',
                borderRadius: '6px', textDecoration: 'none',
                border: '2px solid #2A2118',
              }}>Call (253) 417-8790</a>
            </div>
          </div>

          {/* Right -- commitment card */}
          <div style={{
            background: '#2A2118', borderRadius: '16px', padding: '36px',
            boxShadow: '0 8px 40px rgba(42,33,24,0.15)',
          }}>
            <h2 style={{
              fontSize: '22px', fontWeight: 800, color: '#FFFCF8',
              letterSpacing: '-0.02em', marginBottom: '8px',
            }}>
              My commitment to you
            </h2>
            <p style={{
              fontSize: '14px', color: 'rgba(250,246,240,0.7)',
              lineHeight: 1.7, marginBottom: '24px',
            }}>
              If I tell you something is going to happen, it happens.
              If there is a problem, you hear it from me first, not from your client.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Same-day pre-approvals for clients who come in ready',
                'Proactive milestone updates throughout the process',
                'You will never chase me for a status update',
                'I treat your clients like they are my only client',
                'Construction expertise that keeps difficult deals alive',
                'Shareable resources that make you look like the expert',
              ].map((item) => (
                <div key={item} style={{
                  display: 'flex', gap: '10px', alignItems: 'flex-start',
                }}>
                  <span style={{ color: '#8FCBBF', fontWeight: 800, flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <span style={{ fontSize: '13px', color: 'rgba(250,246,240,0.82)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#FAF6F0' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── DIFFERENTIATORS ── */}
      <section style={{ background: '#FAF6F0', padding: '80px 52px' }}>
        <div style={{ textAlign: 'center' as const, marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '36px', fontWeight: 800, color: '#2A2118',
            letterSpacing: '-0.025em', marginBottom: '12px',
          }}>
            What makes me different
          </h2>
          <p style={{ fontSize: '16px', color: '#4A3728', lineHeight: 1.75, maxWidth: '560px', margin: '0 auto' }}>
            There are a lot of loan officers in Eastern WA and North Idaho.
            Here is why agents keep coming back to me.
          </p>
        </div>

        <div className="agents-diff-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px', maxWidth: '900px', margin: '0 auto',
        }}>
          {[
            {
              icon: '🔨', title: 'Construction & Remodeling Background',
              text: 'Nearly a decade in residential construction means I can evaluate a property through a contractor\'s eyes. I anticipate appraisal issues, flag property condition concerns early, and help keep deals alive that might otherwise fall apart.',
              border: '#B85C38',
            },
            {
              icon: '⚡', title: 'Speed That Does Not Compromise Quality',
              text: 'Same-day pre-approvals for clients who come in ready. I do not let a slow approval process cost your buyers their deal. Fast and thorough are not mutually exclusive.',
              border: '#3D6B5C',
            },
            {
              icon: '📞', title: 'Communication You Can Count On',
              text: 'I proactively update you and your client at every milestone. You will never have to text me asking where things stand because I will already have told you.',
              border: '#B85C38',
            },
            {
              icon: '📋', title: 'Resources Your Clients Will Actually Value',
              text: 'Market updates, buyer guides, and educational content you can share under your name. I want your clients to see you as the agent who knew exactly who to connect them with.',
              border: '#3D6B5C',
            },
          ].map((item) => (
            <div key={item.title} style={{
              background: '#FFFCF8', borderRadius: '12px', padding: '28px',
              border: '1px solid #E8DDD0', borderLeft: `4px solid ${item.border}`,
              boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
            }}>
              <span style={{ fontSize: '28px', display: 'block', marginBottom: '14px' }}>{item.icon}</span>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#2A2118', marginBottom: '10px' }}>
                {item.title}
              </div>
              <div style={{ fontSize: '13px', color: '#4A3728', lineHeight: 1.7 }}>
                {item.text}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' as const, marginTop: '48px' }}>
          <Link href="/for-agents/referral" style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#B85C38', color: '#FFFCF8',
            fontSize: '14px', fontWeight: 700, padding: '15px 32px',
            borderRadius: '6px', textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
          }}>Partner With Me</Link>
        </div>
      </section>
    </>
  );
}