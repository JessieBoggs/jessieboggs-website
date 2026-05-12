import Link from 'next/link';

export default function Tools() {
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
        <div className="tools-hero-grid" style={{
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
              Free Mortgage Tools
            </div>
            <h1 style={{
              fontSize: '52px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '20px',
            }}>
              Run the numbers<br />
              <span style={{ color: '#B85C38' }}>before you commit.</span>
            </h1>
            <p style={{
              fontSize: '16px', color: '#4A3728', lineHeight: 1.75, marginBottom: '36px',
            }}>
              Interactive calculators built for Eastern WA and North Idaho buyers.
              No email required. Just real numbers, right now.
            </p>
            <Link href="/get-started/pre-approval" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#B85C38', color: '#FFFCF8',
              fontSize: '14px', fontWeight: 700, padding: '14px 28px',
              borderRadius: '6px', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
            }}>Get Pre-Approved</Link>
          </div>

          {/* Right -- tool cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { icon: '🧮', title: 'Mortgage Calculator', desc: 'Conventional, FHA, VA, USDA, and Jumbo all in one tool.', href: '/tools/mortgage-calculator', color: '#3D6B5C' },
              { icon: '🎖️', title: 'VA LGY Guaranty Calculator', desc: 'Calculate your exact VA guaranty and funding fee.', href: '/tools/va-calculator', color: '#B85C38' },
              { icon: '🏡', title: 'Affordability Calculator', desc: 'Find out how much home you can actually afford.', href: '/tools/affordability-calculator', color: '#3D6B5C' },
              { icon: '⚖️', title: 'Loan Comparison Tool', desc: 'Compare loan types side by side on the same purchase price.', href: '/tools/loan-comparison', color: '#B85C38' },
            ].map((tool) => (
              <Link key={tool.title} href={tool.href} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: '#FFFCF8', borderRadius: '12px', padding: '18px 22px',
                border: '1px solid #E8DDD0', borderLeft: `4px solid ${tool.color}`,
                textDecoration: 'none', color: 'inherit',
                boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
              }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <span style={{ fontSize: '24px' }}>{tool.icon}</span>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#2A2118', marginBottom: '2px' }}>
                      {tool.title}
                    </div>
                    <div style={{ fontSize: '12px', color: '#8C7B6E' }}>{tool.desc}</div>
                  </div>
                </div>
                <span style={{ fontSize: '18px', color: tool.color, flexShrink: 0, marginLeft: '16px' }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}