import Link from 'next/link';

export default function Apply() {
  return (
    <>
      <section style={{
        background: '#F2EBE0',
        padding: '72px 52px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, opacity: 0.045,
          backgroundImage: 'radial-gradient(circle, #2A2118 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '640px' }}>
          <div style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase' as const, color: '#B85C38',
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
          }}>
            <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
            Full Application
          </div>
          <h1 style={{
            fontSize: '52px', fontWeight: 800, color: '#2A2118',
            lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '20px',
          }}>
            Ready to apply?
          </h1>
          <p style={{
            fontSize: '16px', color: '#4A3728', lineHeight: 1.75, marginBottom: '16px',
          }}>
            Your full application is handled securely through the Edge Home Finance portal.
            Click below to get started. If you have any questions before or during the
            process, call or text me directly.
          </p>
          <p style={{
            fontSize: '15px', color: '#4A3728', lineHeight: 1.75, marginBottom: '36px',
          }}>
            Not ready for the full application yet? Start with a{' '}
            <Link href="/get-started/pre-approval" style={{ color: '#B85C38', fontWeight: 700, textDecoration: 'none' }}>
              pre-approval request
            </Link>
            {' '}instead and I will walk you through everything.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            
              href="https://apply.edgehomefinance.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#B85C38', color: '#FFFCF8',
                fontSize: '14px', fontWeight: 700, padding: '15px 32px',
                borderRadius: '6px', textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
              }}>
              Start Full Application
            </a>
            <a href="tel:2534178790" style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'transparent', color: '#2A2118',
              fontSize: '14px', fontWeight: 700, padding: '13px 28px',
              borderRadius: '6px', textDecoration: 'none',
              border: '2px solid #2A2118',
            }}>
              Call (253) 417-8790
            </a>
          </div>
        </div>
      </section>
    </>
  );
}