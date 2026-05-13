export const metadata = {
  title: 'Schedule a Call | Jessie Boggs Mortgage Loan Strategist',
  description: 'Schedule a call with Jessie Boggs, NMLS #2803455. Talk through your mortgage options with a loan strategist who knows Eastern WA and North Idaho.',
};

export default function Schedule() {
  return (
    <>
      <section style={{
        background: '#F2EBE0',
        padding: '72px 52px',
        position: 'relative',
        overflow: 'hidden',
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
            fontSize: '16px', color: '#4A3728', lineHeight: 1.75,
          }}>
            Pick a time that works for you and I will call you at the scheduled time.
            No pressure, no commitment. Just a real conversation about your goals
            and what is possible.
          </p>
        </div>
      </section>

      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#FAF6F0' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      <section style={{ background: '#FAF6F0', padding: '52px 52px 80px' }}>
        <div style={{
          background: '#FFFCF8', borderRadius: '16px', padding: '40px',
          border: '1px solid #E8DDD0',
          boxShadow: '0 8px 40px rgba(42,33,24,0.08)',
          maxWidth: '900px', margin: '0 auto',
        }}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/MlE2IBvzsE7ezSXvpLKU"
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px', borderRadius: '8px' }}
            scrolling="no"
            id="MlE2IBvzsE7ezSXvpLKU_1778685969358"
          />
        </div>
      </section>
    </>
  );
}