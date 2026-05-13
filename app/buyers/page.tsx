import Link from 'next/link';
export const metadata = {
  title: 'Home Buyer Guides Eastern WA & North Idaho | Jessie Boggs',
  description: 'Mortgage guidance for every type of buyer in Eastern Washington and North Idaho. First-time buyers, veterans, rural buyers, move-up buyers. Jessie Boggs NMLS #2803455.',
};
export default function Buyers() {
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
        <div className="buyer-hero-grid" style={{
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
              For Buyers
            </div>
            <h1 style={{
              fontSize: '52px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '20px',
            }}>
              Your home.<br />
              <span style={{ color: '#B85C38' }}>Your strategy.</span>
            </h1>
            <p style={{
              fontSize: '16px', color: '#4A3728', lineHeight: 1.75, marginBottom: '36px',
            }}>
              Every buyer situation is different. Whether you are buying your first home,
              using your VA benefit, buying in a rural area, or navigating a unique financial
              situation, there is a strategy built for you. Find yours below.
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

          {/* Right -- buyer type cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'First-Time Buyers', desc: 'You do not need to have it all figured out. That is what I am here for.', href: '/buyers/first-time', color: '#B85C38' },
              { label: 'Veterans', desc: 'You earned this benefit. Let me make sure you get every dollar of it.', href: '/buyers/veterans', color: '#3D6B5C' },
              { label: 'Rural Buyers', desc: 'Eastern WA and North Idaho were made for USDA. Zero down in more places than you think.', href: '/buyers/rural', color: '#4E8572' },
              { label: 'Move-Up Buyers', desc: 'Your next home should work harder for your family.', href: '/buyers/move-up', color: '#B85C38' },
              { label: 'Unique Situations', desc: 'Self-employed, recent credit events, non-traditional income. There is usually a path.', href: '/buyers/unique-situations', color: '#3D6B5C' },
            ].map((item) => (
              <Link key={item.label} href={item.href} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: '#FFFCF8', borderRadius: '12px', padding: '18px 22px',
                border: '1px solid #E8DDD0', borderLeft: `4px solid ${item.color}`,
                textDecoration: 'none', color: 'inherit',
                boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
              }}>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#2A2118', marginBottom: '3px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '12px', color: '#8C7B6E', lineHeight: 1.5 }}>
                    {item.desc}
                  </div>
                </div>
                <span style={{ fontSize: '18px', color: item.color, flexShrink: 0, marginLeft: '16px' }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}