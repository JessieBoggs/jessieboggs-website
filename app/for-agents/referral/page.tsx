import Link from 'next/link';
export const metadata = {
  title: 'Refer a Client | Jessie Boggs Mortgage Loan Strategist NMLS #2803455',
  description: 'Refer a buyer to Jessie Boggs. Same-day response, proactive updates, and a loan officer who treats your clients like his own. NMLS #2803455.',
};
export default function Referral() {
  return (
    <>
      <section style={{
        background: '#FAF6F0', padding: '72px 52px',
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
          gap: '64px', alignItems: 'flex-start',
        }}>
          {/* Left */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#B85C38',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
              Submit a Referral
            </div>
            <h1 style={{
              fontSize: '48px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '20px',
            }}>
              Send me your client.<br />
              <span style={{ color: '#B85C38' }}>I will take it from here.</span>
            </h1>
            <p style={{
              fontSize: '16px', color: '#4A3728', lineHeight: 1.75, marginBottom: '32px',
            }}>
              Fill out the form with your client's basic info and I will reach out
              to them within one business day. I will keep you in the loop at every
              milestone so you always know where the loan stands.
            </p>

            {/* What happens next */}
            <h2 style={{
              fontSize: '20px', fontWeight: 800, color: '#2A2118',
              letterSpacing: '-0.02em', marginBottom: '18px',
            }}>
              What happens after you submit
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { num: '01', color: '#B85C38', title: 'I reach out to your client within one business day', text: 'Usually same day. I introduce myself and get the conversation started.' },
                { num: '02', color: '#3D6B5C', title: 'I keep you updated throughout the process', text: 'You will hear from me at pre-approval, contract, and any major milestones.' },
                { num: '03', color: '#B85C38', title: 'We close on time', text: 'I run a tight process. Your client closes on schedule and comes back to thank you.' },
              ].map((step) => (
                <div key={step.num} style={{
                  display: 'flex', gap: '14px', alignItems: 'flex-start',
                  padding: '16px 18px', background: '#FFFCF8',
                  borderRadius: '10px', border: '1px solid #E8DDD0',
                }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: step.color, color: '#FFFCF8',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '11px', fontWeight: 800, flexShrink: 0,
                  }}>{step.num}</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#2A2118', marginBottom: '3px' }}>{step.title}</div>
                    <div style={{ fontSize: '12px', color: '#4A3728', lineHeight: 1.6 }}>{step.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right -- referral form */}
          <div style={{
            background: '#FFFCF8', borderRadius: '16px', padding: '36px',
            border: '1px solid #E8DDD0',
            boxShadow: '0 8px 40px rgba(42,33,24,0.08)',
            borderTop: '4px solid #B85C38',
            position: 'sticky', top: '72px',
          }}>
            <h3 style={{
              fontSize: '20px', fontWeight: 800, color: '#2A2118',
              letterSpacing: '-0.02em', marginBottom: '6px',
            }}>
              Client Referral Form
            </h3>
            <p style={{ fontSize: '13px', color: '#8C7B6E', marginBottom: '24px', lineHeight: 1.6 }}>
              Your information and your client's information stay between us.
            </p>

            <iframe
              src="https://api.leadconnectorhq.com/widget/form/YPxJVt9CQHHPSn8ABJef"
              style={{ width: '100%', height: '1134px', border: 'none', borderRadius: '8px' }}
              id="inline-YPxJVt9CQHHPSn8ABJef"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="JB-Website-AgentReferral"
              data-height="1134"
              data-layout-iframe-id="inline-YPxJVt9CQHHPSn8ABJef"
              data-form-id="YPxJVt9CQHHPSn8ABJef"
              title="JB-Website-AgentReferral"
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
  background: '#FAF6F0', outline: 'none', fontFamily: 'inherit',
};

const selectStyle: React.CSSProperties = {
  width: '100%', padding: '11px 13px',
  border: '1.5px solid #E8DDD0', borderRadius: '8px',
  fontSize: '14px', color: '#2A2118',
  background: '#FAF6F0', outline: 'none',
  fontFamily: 'inherit', appearance: 'none' as const,
};