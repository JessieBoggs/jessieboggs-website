import Link from 'next/link';

export default function AgentResources() {
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
          gap: '64px', alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#B85C38',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
              Agent Resources
            </div>
            <h1 style={{
              fontSize: '48px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '20px',
            }}>
              Resources built for you<br />
              <span style={{ color: '#B85C38' }}>and your clients.</span>
            </h1>
            <p style={{
              fontSize: '16px', color: '#4A3728', lineHeight: 1.75, marginBottom: '32px',
            }}>
              Market updates, buyer guides, and educational content updated regularly.
              Designed to share directly with your clients and keep you positioned
              as the expert in your market.
            </p>
            <Link href="/for-agents/referral" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#B85C38', color: '#FFFCF8',
              fontSize: '14px', fontWeight: 700, padding: '14px 28px',
              borderRadius: '6px', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
            }}>Submit a Referral</Link>
          </div>

          {/* Right -- subscribe card */}
          <div style={{
            background: '#FFFCF8', borderRadius: '16px', padding: '36px',
            border: '1px solid #E8DDD0',
            boxShadow: '0 8px 40px rgba(42,33,24,0.08)',
            borderTop: '4px solid #3D6B5C',
          }}>
            <h2 style={{
              fontSize: '22px', fontWeight: 800, color: '#2A2118',
              letterSpacing: '-0.02em', marginBottom: '10px',
            }}>
              Get my weekly market update
            </h2>
            <p style={{
              fontSize: '14px', color: '#4A3728', lineHeight: 1.7, marginBottom: '24px',
            }}>
              Written specifically for Eastern WA and North Idaho.
              Designed to share directly with your clients.
              Delivered to your inbox every week.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="text"
                placeholder="Your name"
                style={{
                  width: '100%', padding: '11px 14px',
                  border: '1.5px solid #E8DDD0', borderRadius: '8px',
                  fontSize: '14px', color: '#2A2118',
                  background: '#FAF6F0', outline: 'none', fontFamily: 'inherit',
                }}
              />
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  width: '100%', padding: '11px 14px',
                  border: '1.5px solid #E8DDD0', borderRadius: '8px',
                  fontSize: '14px', color: '#2A2118',
                  background: '#FAF6F0', outline: 'none', fontFamily: 'inherit',
                }}
              />
              <button style={{
                background: '#3D6B5C', color: '#FFFCF8',
                fontSize: '14px', fontWeight: 700, padding: '13px',
                borderRadius: '8px', border: 'none', cursor: 'pointer',
                fontFamily: 'inherit',
              }}>
                Subscribe to Weekly Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#2A2118' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── RESOURCES LIST ── */}
      <section style={{ background: '#2A2118', padding: '80px 52px' }}>
        <div style={{ textAlign: 'center' as const, marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '36px', fontWeight: 800, color: '#FFFCF8',
            letterSpacing: '-0.025em', marginBottom: '12px',
          }}>
            Available resources
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(250,246,240,0.72)', lineHeight: 1.75 }}>
            Everything below is available to share with your clients.
          </p>
        </div>

        <div className="agents-resources-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px', maxWidth: '1000px', margin: '0 auto',
        }}>
          {[
            { icon: '📊', title: 'Monthly Market Updates', desc: 'Eastern WA and North Idaho market data, rate commentary, and buyer tips. Updated monthly and designed to share.', tag: 'Updated Monthly' },
            { icon: '🏠', title: 'First-Time Buyer Guide', desc: 'A complete guide to the homebuying process for first-time buyers. Plain language, no jargon. Co-brandable on request.', tag: 'Shareable' },
            { icon: '🎖️', title: 'VA Loan Guide', desc: 'Everything a veteran needs to know about using their VA benefit in Eastern WA and North Idaho.', tag: 'Shareable' },
            { icon: '🌾', title: 'USDA Rural Guide', desc: 'A complete guide to USDA financing for buyers in Eastern WA and North Idaho rural areas.', tag: 'Shareable' },
            { icon: '📱', title: 'Weekly Rate Commentary', desc: 'Short, shareable weekly commentary on what rates are doing and what it means for buyers right now.', tag: 'Weekly' },
            { icon: '🧮', title: 'Mortgage Calculators', desc: 'Link your clients directly to my free mortgage calculators. No email required, just real numbers.', tag: 'Free Tools' },
          ].map((item) => (
            <div key={item.title} style={{
              background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '24px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <span style={{ fontSize: '28px' }}>{item.icon}</span>
                <span style={{
                  fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const, padding: '3px 8px',
                  borderRadius: '4px', background: 'rgba(184,92,56,0.2)', color: '#F5E8E1',
                }}>{item.tag}</span>
              </div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFCF8', marginBottom: '8px' }}>
                {item.title}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(250,246,240,0.7)', lineHeight: 1.65 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' as const, marginTop: '48px' }}>
          <p style={{ fontSize: '14px', color: 'rgba(250,246,240,0.6)', marginBottom: '16px' }}>
            Want a specific resource or have a co-branding request?
          </p>
          <a href="tel:2534178790" style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#B85C38', color: '#FFFCF8',
            fontSize: '14px', fontWeight: 700, padding: '14px 28px',
            borderRadius: '6px', textDecoration: 'none',
          }}>Call (253) 417-8790</a>
        </div>
      </section>
    </>
  );
}