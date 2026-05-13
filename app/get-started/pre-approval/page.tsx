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

            <form style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input type="text" placeholder="First name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <input type="text" placeholder="Last name" style={inputStyle} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" placeholder="(253) 555-0100" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" placeholder="you@email.com" style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Loan Type Interest</label>
                <select style={selectStyle}>
                  <option value="">Select a loan type</option>
                  <option value="conventional">Conventional</option>
                  <option value="va">VA Loan</option>
                  <option value="usda">USDA Rural</option>
                  <option value="fha">FHA</option>
                  <option value="construction">Construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="jumbo">Jumbo</option>
                  <option value="selfemployed">Self-Employed</option>
                  <option value="notsure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Estimated Purchase Price</label>
                <select style={selectStyle}>
                  <option value="">Select a range</option>
                  <option value="under200">Under $200,000</option>
                  <option value="200to300">$200,000 to $300,000</option>
                  <option value="300to400">$300,000 to $400,000</option>
                  <option value="400to500">$400,000 to $500,000</option>
                  <option value="500to600">$500,000 to $600,000</option>
                  <option value="over600">Over $600,000</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Estimated Down Payment</label>
                <select style={selectStyle}>
                  <option value="">Select a range</option>
                  <option value="zero">$0 (VA or USDA)</option>
                  <option value="under5">Less than 5%</option>
                  <option value="5to10">5% to 10%</option>
                  <option value="10to20">10% to 20%</option>
                  <option value="over20">20% or more</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Estimated Credit Score</label>
                <select style={selectStyle}>
                  <option value="">Select a range</option>
                  <option value="under580">Below 580</option>
                  <option value="580to620">580 to 620</option>
                  <option value="620to680">620 to 680</option>
                  <option value="680to740">680 to 740</option>
                  <option value="over740">740 and above</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Purchase Timeline</label>
                <select style={selectStyle}>
                  <option value="">Select a timeline</option>
                  <option value="asap">As soon as possible</option>
                  <option value="1to3">1 to 3 months</option>
                  <option value="3to6">3 to 6 months</option>
                  <option value="6to12">6 to 12 months</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>First-time homebuyer?</label>
                <select style={selectStyle}>
                  <option value="">Select one</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Anything else I should know?</label>
                <textarea
                  placeholder="Tell me about your situation or any questions you have..."
                  rows={3}
                  style={{ ...inputStyle, resize: 'vertical' as const }}
                />
              </div>

              <button type="submit" style={{
                background: '#B85C38', color: '#FFFCF8',
                fontSize: '14px', fontWeight: 700, padding: '15px',
                borderRadius: '8px', border: 'none', cursor: 'pointer',
                letterSpacing: '0.02em', width: '100%',
                boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
              }}>
                Submit Pre-Approval Request
              </button>

              <p style={{ fontSize: '11px', color: '#8C7B6E', textAlign: 'center' as const, lineHeight: 1.6 }}>
                By submitting this form you agree to be contacted regarding your
                mortgage inquiry. Your information will never be sold or shared.
              </p>
            </form>
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