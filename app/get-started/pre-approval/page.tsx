import Link from 'next/link';
export const metadata = {
  title: 'Get Pre-Approved | Jessie Boggs Mortgage Eastern WA & North Idaho',
  description: 'Start your mortgage pre-approval with Jessie Boggs, NMLS #2803455. Same-day pre-approvals. Serving Eastern Washington and North Idaho. No pressure, no commitment.',
};
export default function PreApproval() {
  return (
    <>
      {/* ── MAIN SECTION ── */}
      <section style={{
        background: '#FAF6F0',
        padding: '72px 52px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, opacity: 0.045,
          backgroundImage: 'radial-gradient(circle, #2A2118 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none',
        }} />

        <div className="preapproval-grid" style={{
          position: 'relative', zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'flex-start',
        }}>

          {/* Left -- hero text + what happens next */}
          <div>
            {/* Hero text */}
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#B85C38',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
              Get started
            </div>
            <h1 style={{
              fontSize: '48px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '16px',
            }}>
              Let&rsquo;s get you<br />
              <span style={{ color: '#B85C38' }}>pre-approved.</span>
            </h1>
            <p style={{
              fontSize: '15px', color: '#4A3728', lineHeight: 1.75, marginBottom: '44px',
            }}>
              Fill out the form and I will reach out within one business day
              to discuss your options and next steps. No commitment required.
            </p>

            {/* What happens next */}
            <h2 style={{
              fontSize: '22px', fontWeight: 800, color: '#2A2118',
              letterSpacing: '-0.02em', marginBottom: '20px',
            }}>
              What happens next?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {[
                {
                  num: '01', color: '#B85C38',
                  title: 'I reach out within one business day',
                  text: 'Usually same day. I will call or text to introduce myself and confirm a few details.',
                },
                {
                  num: '02', color: '#3D6B5C',
                  title: 'We talk through your situation',
                  text: 'A quick 15 to 20 minute conversation to understand your goals, timeline, and which program fits best.',
                },
                {
                  num: '03', color: '#B85C38',
                  title: 'You get your pre-approval letter',
                  text: 'Once we have what we need, I turn around pre-approvals fast so you can shop with confidence.',
                },
              ].map((step) => (
                <div key={step.num} style={{
                  display: 'flex', gap: '16px', alignItems: 'flex-start',
                  padding: '18px 20px', background: '#FFFCF8',
                  borderRadius: '12px', border: '1px solid #E8DDD0',
                  boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: step.color, color: '#FFFCF8',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px', fontWeight: 800, flexShrink: 0,
                  }}>
                    {step.num}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#2A2118', marginBottom: '4px' }}>
                      {step.title}
                    </div>
                    <div style={{ fontSize: '13px', color: '#4A3728', lineHeight: 1.65 }}>
                      {step.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Prefer to talk */}
            <div style={{
              background: '#2A2118', borderRadius: '12px', padding: '22px',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFCF8', marginBottom: '6px' }}>
                Prefer to talk first?
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(250,246,240,0.7)', lineHeight: 1.65, marginBottom: '14px' }}>
                No problem. Call or text me directly and we can talk through
                your situation before filling anything out.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a href="tel:2534178790" style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: '#B85C38', color: '#FFFCF8',
                  fontSize: '13px', fontWeight: 700, padding: '10px 18px',
                  borderRadius: '6px', textDecoration: 'none',
                }}>
                  Call (253) 417-8790
                </a>
                <Link href="/get-started/schedule" style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: 'transparent', color: '#D4C4B0',
                  fontSize: '13px', fontWeight: 700, padding: '9px 18px',
                  borderRadius: '6px', textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.2)',
                }}>
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>

          {/* Right -- form */}
          <div style={{
            background: '#FFFCF8', borderRadius: '16px', padding: '36px',
            border: '1px solid #E8DDD0',
            boxShadow: '0 8px 40px rgba(42,33,24,0.08)',
            position: 'sticky',
            top: '72px',
          }}>
            <h3 style={{
              fontSize: '20px', fontWeight: 800, color: '#2A2118',
              letterSpacing: '-0.02em', marginBottom: '6px',
            }}>
              Start your pre-approval
            </h3>
            <p style={{ fontSize: '13px', color: '#8C7B6E', marginBottom: '22px', lineHeight: 1.6 }}>
              No commitment required. I will follow up within one business day.
            </p>

            <iframe
              src="https://api.leadconnectorhq.com/widget/form/l8Nq4MuTLfRjedbe4GwT"
              style={{ width: '100%', height: '1412px', border: 'none', borderRadius: '8px' }}
              id="inline-l8Nq4MuTLfRjedbe4GwT"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="JB-Website-PreApprovalForm"
              data-height="1412"
              data-layout-iframe-id="inline-l8Nq4MuTLfRjedbe4GwT"
              data-form-id="l8Nq4MuTLfRjedbe4GwT"
              title="JB-Website-PreApprovalForm"
            />
          </div>
        </div>
      </section>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: '11px', fontWeight: 700, color: '#2A2118',
  letterSpacing: '0.07em', textTransform: 'uppercase',
  display: 'block', marginBottom: '5px',
};

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '11px 13px',
  border: '1.5px solid #E8DDD0', borderRadius: '8px',
  fontSize: '14px', color: '#2A2118',
  background: '#FAF6F0', outline: 'none',
  fontFamily: 'inherit',
};

const selectStyle: React.CSSProperties = {
  width: '100%', padding: '11px 13px',
  border: '1.5px solid #E8DDD0', borderRadius: '8px',
  fontSize: '14px', color: '#2A2118',
  background: '#FAF6F0', outline: 'none',
  fontFamily: 'inherit', appearance: 'none' as const,
};