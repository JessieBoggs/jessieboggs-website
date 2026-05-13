import Link from 'next/link';
export const metadata = {
  title: 'Mortgage Loan Programs | Eastern WA & North Idaho | Jessie Boggs',
  description: 'VA, USDA, FHA, Conventional, Jumbo, Construction, and Down Payment Assistance loans in Eastern Washington and North Idaho. Jessie Boggs NMLS #2803455.',
};
export default function LoanTypes() {
  return (
    <>
      {/* ── HERO ── */}
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
        <div className="loan-types-hero-grid" style={{
          position: 'relative', zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
          width: '100%',
        }}>
          {/* Left -- heading */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#B85C38',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
              Loan Programs
            </div>
            <h1 style={{
              fontSize: '52px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '20px',
            }}>
              Find the right loan<br />
              <span style={{ color: '#B85C38' }}>for your life.</span>
            </h1>
            <p style={{
              fontSize: '16px', color: '#4A3728', lineHeight: 1.75,
            }}>
              There is no such thing as a one-size-fits-all mortgage. The right loan depends
              on your situation, your goals, and where you are headed. Here is every program
              I work with and what makes each one the right fit for the right buyer.
            </p>
          </div>

          {/* Right -- trust cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { icon: '🏠', title: '8+ Loan Programs', text: 'From zero down VA and USDA to construction loans, there is a program built for your situation.' },
              { icon: '⚡', title: 'Same-Day Pre-Approvals', text: 'Know your buying power fast so you can move when the right home comes along.' },
              { icon: '🔨', title: 'Construction Expert', text: 'Nearly a decade in residential remodeling means I understand your project at a level most LOs never will.' },
              { icon: '📞', title: 'Direct Communication', text: 'You get me, not a call center. Real answers from someone who actually picks up the phone.' },
            ].map((item) => (
              <div key={item.title} style={{
                display: 'flex', gap: '14px', alignItems: 'flex-start',
                background: '#FFFCF8', borderRadius: '12px', padding: '18px 20px',
                border: '1px solid #E8DDD0',
                boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
              }}>
                <span style={{ fontSize: '22px', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#2A2118', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '12px', color: '#4A3728', lineHeight: 1.6 }}>
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

      {/* ── LOAN CARDS ── */}
      <section style={{ background: '#2A2118', padding: '80px 52px' }}>
        <div className="loans-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}>
          {[
            {
              tag: 'Most Popular', tagBg: '#F5E8E1', tagColor: '#8F4228',
              topColor: '#B85C38', name: 'Conventional',
              desc: 'Flexible terms and competitive rates for well-qualified buyers.',
              href: '/loan-types/conventional',
            },
            {
              tag: 'Zero Down', tagBg: '#E4F0EC', tagColor: '#2E5245',
              topColor: '#3D6B5C', name: 'VA Loans',
              desc: 'You served. Zero down, no PMI, and the best rates available.',
              href: '/loan-types/va-loans',
            },
            {
              tag: 'Rural Eligible', tagBg: '#E4F0EC', tagColor: '#2E5245',
              topColor: '#4E8572', name: 'USDA Rural',
              desc: 'Zero down financing for eligible Eastern WA and North Idaho areas.',
              href: '/loan-types/usda-rural',
            },
            {
              tag: 'Low Down', tagBg: '#F5E8E1', tagColor: '#8F4228',
              topColor: '#CC6E49', name: 'FHA Loans',
              desc: 'A strong path to homeownership for buyers building credit.',
              href: '/loan-types/fha-loans',
            },
            {
              tag: 'My Specialty', tagBg: '#E4F0EC', tagColor: '#2E5245',
              topColor: '#3D6B5C', name: 'Construction & Renovation',
              desc: 'Build or renovate with someone who actually knows construction.',
              href: '/loan-types/construction-renovation',
            },
            {
              tag: 'High Value', tagBg: '#F5E8E1', tagColor: '#8F4228',
              topColor: '#A89278', name: 'Jumbo Loans',
              desc: 'Purchasing above conventional limits? We have options.',
              href: '/loan-types/jumbo-loans',
            },
            {
              tag: 'Flexible', tagBg: '#E4F0EC', tagColor: '#2E5245',
              topColor: '#3D6B5C', name: 'Self-Employed',
              desc: 'Bank statement loans built for how your income is structured.',
              href: '/loan-types/self-employed',
            },
            {
              tag: 'Get Help', tagBg: '#F5E8E1', tagColor: '#8F4228',
              topColor: '#B85C38', name: 'Down Payment Assistance',
              desc: 'WA and ID programs that may cover part or all of your down payment.',
              href: '/loan-types/down-payment-assistance',
            },
          ].map((loan) => (
            <Link key={loan.name} href={loan.href} style={{
              background: '#FFFCF8',
              border: '1px solid #E8DDD0',
              borderRadius: '12px',
              padding: '24px 20px',
              borderTop: `3px solid ${loan.topColor}`,
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              boxShadow: '0 2px 12px rgba(42,33,24,0.08)',
            }}>
              <div style={{
                fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase' as const, padding: '3px 9px',
                borderRadius: '4px', display: 'inline-block', marginBottom: '12px',
                background: loan.tagBg, color: loan.tagColor,
              }}>
                {loan.tag}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#2A2118', marginBottom: '7px' }}>
                {loan.name}
              </div>
              <div style={{ fontSize: '12px', color: '#8C7B6E', lineHeight: 1.6, marginBottom: '14px' }}>
                {loan.desc}
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: loan.topColor }}>
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#2A2118', fill: '#F2EBE0' }}>
        <path d="M0,0 C360,56 1080,56 1440,0 L1440,56 L0,56 Z" />
      </svg>

      {/* ── NOT SURE SECTION ── */}
      <section style={{ background: '#F2EBE0', padding: '80px 52px', textAlign: 'center' as const }}>
        <h2 style={{
          fontSize: '40px', fontWeight: 800, color: '#2A2118',
          letterSpacing: '-0.025em', marginBottom: '16px',
        }}>
          Not sure which loan is right for you?
        </h2>
        <p style={{
          fontSize: '16px', color: '#4A3728', lineHeight: 1.75,
          maxWidth: '560px', margin: '0 auto 36px',
        }}>
          That is exactly what I am here for. Tell me about your situation and
          I will point you in the right direction with zero pressure.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' as const }}>
          <Link href="/get-started/pre-approval" style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#B85C38', color: '#FFFCF8',
            fontSize: '14px', fontWeight: 700, padding: '14px 28px',
            borderRadius: '6px', textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
          }}>
            Get Pre-Approved
          </Link>
          <Link href="/get-started/schedule" style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'transparent', color: '#2A2118',
            fontSize: '14px', fontWeight: 700, padding: '13px 28px',
            borderRadius: '6px', textDecoration: 'none',
            border: '2px solid #2A2118',
          }}>
            Schedule a Call
          </Link>
        </div>
      </section>
    </>
  );
}