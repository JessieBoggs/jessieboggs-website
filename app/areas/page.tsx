import Link from 'next/link';
export const metadata = {
  title: 'Mortgage Lender Eastern WA & North Idaho | Jessie Boggs NMLS #2803455',
  description: 'Serving communities across Eastern Washington and North Idaho. Local mortgage expertise, direct communication. Jessie Boggs NMLS #2803455. Licensed WA & ID.',
};
export default function Areas() {
  return (
    <>
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
          gap: '64px', alignItems: 'center',
          paddingBottom: '52px',
        }}>
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#B85C38',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
              Service Areas
            </div>
            <h1 style={{
              fontSize: '52px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '20px',
            }}>
              Eastern WA &amp;<br />
              <span style={{ color: '#B85C38' }}>North Idaho.</span>
            </h1>
            <p style={{
              fontSize: '16px', color: '#4A3728', lineHeight: 1.75, marginBottom: '32px',
            }}>
              I am licensed in Washington and Idaho and serve communities across
              the entire Eastern Washington and North Idaho region. Local knowledge,
              direct communication, and a loan officer who actually lives here.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' as const }}>
              <Link href="/get-started/pre-approval" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#B85C38', color: '#FFFCF8',
                fontSize: '14px', fontWeight: 700, padding: '14px 28px',
                borderRadius: '6px', textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
              }}>Get Pre-Approved</Link>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'transparent', color: '#2A2118',
                fontSize: '14px', fontWeight: 700, padding: '13px 28px',
                borderRadius: '6px', textDecoration: 'none',
                border: '2px solid #2A2118',
              }}>Contact Me</Link>
            </div>
          </div>

          {/* Right -- area grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#B85C38', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '4px' }}>
              Washington
            </div>
            {[
              { name: 'Spokane, WA', href: '/areas/spokane-wa' },
              { name: 'Spokane Valley, WA', href: '/areas/spokane-valley-wa' },
              { name: 'Deer Park, WA', href: '/areas/deer-park-wa' },
              { name: 'Newport, WA', href: '/areas/newport-wa' },
              { name: 'Liberty Lake, WA', href: '/areas/liberty-lake-wa' },
              { name: 'Airway Heights, WA', href: '/areas/airway-heights-wa' },
            ].map((area) => (
              <Link key={area.name} href={area.href} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: '#FFFCF8', borderRadius: '10px', padding: '14px 18px',
                border: '1px solid #E8DDD0', borderLeft: '4px solid #B85C38',
                textDecoration: 'none', color: '#2A2118',
                fontSize: '14px', fontWeight: 600,
                boxShadow: '0 2px 8px rgba(42,33,24,0.05)',
              }}>
                {area.name} <span style={{ color: '#B85C38' }}>→</span>
              </Link>
            ))}
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#3D6B5C', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginTop: '8px', marginBottom: '4px' }}>
              Idaho
            </div>
            {[
              { name: 'Coeur d\'Alene, ID', href: '/areas/coeur-dalene-id' },
              { name: 'Post Falls, ID', href: '/areas/post-falls-id' },
              { name: 'Sandpoint, ID', href: '/areas/sandpoint-id' },
              { name: 'Hayden, ID', href: '/areas/hayden-id' },
              { name: 'Rathdrum, ID', href: '/areas/rathdrum-id' },
              { name: 'Athol, ID', href: '/areas/athol-id' },
            ].map((area) => (
              <Link key={area.name} href={area.href} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: '#FFFCF8', borderRadius: '10px', padding: '14px 18px',
                border: '1px solid #E8DDD0', borderLeft: '4px solid #3D6B5C',
                textDecoration: 'none', color: '#2A2118',
                fontSize: '14px', fontWeight: 600,
                boxShadow: '0 2px 8px rgba(42,33,24,0.05)',
              }}>
                {area.name} <span style={{ color: '#3D6B5C' }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}