import Link from 'next/link';
export const metadata = {
  title: 'Schedule a Call | Jessie Boggs Mortgage Loan Strategist',
  description: 'Schedule a call with Jessie Boggs, NMLS #2803455. Talk through your mortgage options with a loan strategist who knows Eastern WA and North Idaho.',
};
export default function Schedule() {
  return (
    <>
      <section className="get-started-section" style={{
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
            Schedule a call
          </div>
          <h1 style={{
            fontSize: '52px', fontWeight: 800, color: '#2A2118',
            lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '20px',
          }}>
            Let&rsquo;s find a time<br />
            <span style={{ color: '#B85C38' }}>to talk.</span>
          </h1>
          <p style={{
            fontSize: '16px', color: '#4A3728', lineHeight: 1.75, marginBottom: '36px',
          }}>
            Pick a time that works for you and I will call you at the scheduled time.
            No pressure, no commitment. Just a real conversation about your goals
            and what is possible.
          </p>

          {/* Calendar placeholder */}
          <div style={{
            background: '#FFFCF8', borderRadius: '16px', padding: '40px',
            border: '1px solid #E8DDD0',
            boxShadow: '0 8px 40px rgba(42,33,24,0.08)',
            marginBottom: '32px', textAlign: 'center' as const,
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📅</div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#2A2118', marginBottom: '8px' }}>
              Calendar Booking Coming Soon
            </div>
            <p style={{ fontSize: '14px', color: '#8C7B6E', lineHeight: 1.65, marginBottom: '24px' }}>
              Online scheduling through Surge.IO is being set up.
              In the meantime, call or text me directly to find a time that works.
            </p>
            <a href="tel:2534178790" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#B85C38', color: '#FFFCF8',
              fontSize: '14px', fontWeight: 700, padding: '14px 28px',
              borderRadius: '6px', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
            }}>
              Call (253) 417-8790
            </a>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/get-started/pre-approval" style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'transparent', color: '#2A2118',
              fontSize: '14px', fontWeight: 700, padding: '13px 28px',
              borderRadius: '6px', textDecoration: 'none',
              border: '2px solid #2A2118',
            }}>
              Get Pre-Approved Instead
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}