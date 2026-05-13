import Link from 'next/link'
export const metadata = {
  title: 'Apply Now | Jessie Boggs — Edge Home Finance NMLS #2803455',
  description: 'Start your full mortgage application with Jessie Boggs, NMLS #2803455. Powered by Edge Home Finance. Licensed in Washington and Idaho.',
};
export default function Apply() {
  const sectionStyle = {
    background: '#F2EBE0',
    padding: '72px 52px',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    minHeight: '60vh',
    display: 'flex' as const,
    alignItems: 'center' as const,
  }

  const dotStyle = {
    position: 'absolute' as const,
    inset: 0,
    zIndex: 1,
    opacity: 0.045,
    backgroundImage: 'radial-gradient(circle, #2A2118 1px, transparent 1px)',
    backgroundSize: '24px 24px',
    pointerEvents: 'none' as const,
  }

  const overlineStyle = {
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
    color: '#B85C38',
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '10px',
    marginBottom: '20px',
  }

  const h1Style = {
    fontSize: '52px',
    fontWeight: 800,
    color: '#2A2118',
    lineHeight: 1.04,
    letterSpacing: '-0.03em',
    marginBottom: '20px',
  }

  const btnPrimaryStyle = {
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
    background: '#B85C38',
    color: '#FFFCF8',
    fontSize: '14px',
    fontWeight: 700,
    padding: '15px 32px',
    borderRadius: '6px',
    textDecoration: 'none' as const,
    boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
  }

  const btnSecondaryStyle = {
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
    background: 'transparent',
    color: '#2A2118',
    fontSize: '14px',
    fontWeight: 700,
    padding: '13px 28px',
    borderRadius: '6px',
    textDecoration: 'none' as const,
    border: '2px solid #2A2118',
  }

  return (
    <section style={sectionStyle} className="get-started-section">
      <div style={dotStyle} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px', margin: '0 auto', textAlign: 'center' as const }}>
        <div style={{ ...overlineStyle, justifyContent: 'center' }}>
          <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
          Full Application
        </div>

        <h1 style={h1Style}>
          Ready to apply?
        </h1>

        <p style={{ fontSize: '16px', color: '#4A3728', lineHeight: 1.75, marginBottom: '16px' }}>
          Your full application is handled securely through the Edge Home Finance portal.
          Click below to get started. If you have any questions before or during the
          process, call or text me directly.
        </p>

        <p style={{ fontSize: '15px', color: '#4A3728', lineHeight: 1.75, marginBottom: '36px' }}>
          Not ready for the full application yet? Start with a{' '}
          <Link href="/get-started/pre-approval" style={{ color: '#B85C38', fontWeight: 700, textDecoration: 'none' }}>
            pre-approval request
          </Link>
          {' '}instead and I will walk you through everything.
        </p>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          
            <a href="https://edge.my1003app.com/2803455/register?time=1770867042998" target="_blank" rel="noopener noreferrer" style={btnPrimaryStyle}>Start Full Application</a>
          <a href="tel:2534178790" style={btnSecondaryStyle}>Call (253) 417-8790</a>
        </div>
      </div>
    </section>
  )
}