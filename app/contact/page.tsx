import Link from 'next/link';

export default function Contact() {
  return (
    <>
      {/* ── HERO -- Let's Talk + Form side by side ── */}
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

        <div className="contact-hero-grid" style={{
          position: 'relative', zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'flex-start',
        }}>
          {/* Left -- Let's Talk */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#B85C38',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
              Get in touch
            </div>
            <h1 style={{
              fontSize: '52px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '20px',
            }}>
              Let&rsquo;s talk.
            </h1>
            <p style={{
              fontSize: '16px', color: '#4A3728', lineHeight: 1.75,
              marginBottom: '36px', maxWidth: '100%',
            }}>
              Whether you have a question, want to explore your options, or are ready
              to get started, reach out. No pressure and no commitment. Just a real
              conversation with someone who actually picks up the phone.
            </p>

            {/* Fast response promise */}
            <div style={{
              background: '#2A2118', borderRadius: '12px', padding: '20px 22px',
              display: 'flex', gap: '14px', alignItems: 'flex-start',
            }}>
              <span style={{ fontSize: '22px', flexShrink: 0 }}>⚡</span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFCF8', marginBottom: '3px' }}>
                  Fast Response Guaranteed
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(250,246,240,0.7)', lineHeight: 1.6 }}>
                  I respond to every message within one business day, usually same day.
                  If you need something urgent, call or text me directly.
                </div>
              </div>
            </div>
          </div>

          {/* Right -- Form */}
          <div style={{
            background: '#FFFCF8', borderRadius: '16px', padding: '36px',
            border: '1px solid #E8DDD0',
            boxShadow: '0 8px 40px rgba(42,33,24,0.08)',
          }}>
            <h3 style={{
              fontSize: '20px', fontWeight: 800, color: '#2A2118',
              letterSpacing: '-0.02em', marginBottom: '6px',
            }}>
              Send me a message
            </h3>
            <p style={{ fontSize: '13px', color: '#8C7B6E', marginBottom: '24px', lineHeight: 1.6 }}>
              Fill out the form and I will get back to you within one business day.
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: 700, color: '#2A2118', letterSpacing: '0.07em', textTransform: 'uppercase' as const, display: 'block', marginBottom: '5px' }}>
                    First Name
                  </label>
                  <input type="text" placeholder="First name" style={{ width: '100%', padding: '11px 13px', border: '1.5px solid #E8DDD0', borderRadius: '8px', fontSize: '14px', color: '#2A2118', background: '#FAF6F0', outline: 'none', fontFamily: 'inherit' }} />
                </div>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: 700, color: '#2A2118', letterSpacing: '0.07em', textTransform: 'uppercase' as const, display: 'block', marginBottom: '5px' }}>
                    Last Name
                  </label>
                  <input type="text" placeholder="Last name" style={{ width: '100%', padding: '11px 13px', border: '1.5px solid #E8DDD0', borderRadius: '8px', fontSize: '14px', color: '#2A2118', background: '#FAF6F0', outline: 'none', fontFamily: 'inherit' }} />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '11px', fontWeight: 700, color: '#2A2118', letterSpacing: '0.07em', textTransform: 'uppercase' as const, display: 'block', marginBottom: '5px' }}>
                  Phone Number
                </label>
                <input type="tel" placeholder="(253) 555-0100" style={{ width: '100%', padding: '11px 13px', border: '1.5px solid #E8DDD0', borderRadius: '8px', fontSize: '14px', color: '#2A2118', background: '#FAF6F0', outline: 'none', fontFamily: 'inherit' }} />
              </div>

              <div>
                <label style={{ fontSize: '11px', fontWeight: 700, color: '#2A2118', letterSpacing: '0.07em', textTransform: 'uppercase' as const, display: 'block', marginBottom: '5px' }}>
                  Email Address
                </label>
                <input type="email" placeholder="you@email.com" style={{ width: '100%', padding: '11px 13px', border: '1.5px solid #E8DDD0', borderRadius: '8px', fontSize: '14px', color: '#2A2118', background: '#FAF6F0', outline: 'none', fontFamily: 'inherit' }} />
              </div>

              <div>
                <label style={{ fontSize: '11px', fontWeight: 700, color: '#2A2118', letterSpacing: '0.07em', textTransform: 'uppercase' as const, display: 'block', marginBottom: '5px' }}>
                  How can I help?
                </label>
                <select style={{ width: '100%', padding: '11px 13px', border: '1.5px solid #E8DDD0', borderRadius: '8px', fontSize: '14px', color: '#2A2118', background: '#FAF6F0', outline: 'none', fontFamily: 'inherit', appearance: 'none' as const }}>
                  <option value="">Select an option</option>
                  <option value="purchase">I want to purchase a home</option>
                  <option value="refinance">I want to refinance</option>
                  <option value="preapproval">I need a pre-approval</option>
                  <option value="construction">Construction or renovation loan</option>
                  <option value="agent">I am a real estate agent</option>
                  <option value="question">I have a general question</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '11px', fontWeight: 700, color: '#2A2118', letterSpacing: '0.07em', textTransform: 'uppercase' as const, display: 'block', marginBottom: '5px' }}>
                  Message
                </label>
                <textarea placeholder="Tell me a little about your situation..." rows={4} style={{ width: '100%', padding: '11px 13px', border: '1.5px solid #E8DDD0', borderRadius: '8px', fontSize: '14px', color: '#2A2118', background: '#FAF6F0', outline: 'none', fontFamily: 'inherit', resize: 'vertical' as const }} />
              </div>

              <button type="submit" style={{
                background: '#B85C38', color: '#FFFCF8',
                fontSize: '14px', fontWeight: 700, padding: '14px',
                borderRadius: '8px', border: 'none', cursor: 'pointer',
                letterSpacing: '0.02em', width: '100%',
                boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
              }}>
                Send Message
              </button>

              <p style={{ fontSize: '11px', color: '#8C7B6E', textAlign: 'center' as const, lineHeight: 1.6 }}>
                By submitting this form you agree to be contacted regarding your mortgage inquiry.
                Your information will never be sold or shared.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#FAF6F0' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── CONTACT CARDS -- three horizontal ── */}
      <section style={{ background: '#FAF6F0', padding: '72px 52px' }}>
        <div className="contact-cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginBottom: '0',
        }}>
          <a href="tel:2534178790" style={{
            display: 'flex', alignItems: 'center', gap: '18px',
            background: '#FFFCF8', border: '1px solid #E8DDD0',
            borderRadius: '12px', padding: '24px',
            textDecoration: 'none', color: 'inherit',
            boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
            borderLeft: '4px solid #B85C38',
          }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '10px', background: '#F5E8E1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
              📞
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#B85C38', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '4px' }}>
                Call or Text
              </div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#2A2118', letterSpacing: '-0.01em' }}>
                (253) 417-8790
              </div>
            </div>
          </a>

          <a href="mailto:Jessie.Boggs@EdgeHomeFinance.com" style={{
            display: 'flex', alignItems: 'center', gap: '18px',
            background: '#FFFCF8', border: '1px solid #E8DDD0',
            borderRadius: '12px', padding: '24px',
            textDecoration: 'none', color: 'inherit',
            boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
            borderLeft: '4px solid #3D6B5C',
          }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '10px', background: '#E4F0EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
              ✉️
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#3D6B5C', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '4px' }}>
                Email
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#2A2118', wordBreak: 'break-word' as const }}>
                Jessie.Boggs@EdgeHomeFinance.com
              </div>
            </div>
          </a>

          <div style={{
            display: 'flex', alignItems: 'center', gap: '18px',
            background: '#FFFCF8', border: '1px solid #E8DDD0',
            borderRadius: '12px', padding: '24px',
            boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
            borderLeft: '4px solid #A89278',
          }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '10px', background: '#F5EFE8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
              📍
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#A89278', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '4px' }}>
                Service Area
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#2A2118' }}>
                Eastern Washington &amp; North Idaho
              </div>
              <div style={{ fontSize: '11px', color: '#8C7B6E', marginTop: '2px' }}>
                Licensed in WA &amp; ID | NMLS #2803455
              </div>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div style={{ borderTop: '1px solid #E8DDD0', paddingTop: '48px', marginTop: '48px' }}>
          <h3 style={{
            fontSize: '20px', fontWeight: 800, color: '#2A2118',
            letterSpacing: '-0.02em', marginBottom: '24px', textAlign: 'center' as const,
          }}>
            Or jump straight to what you need
          </h3>
          <div className="contact-links-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}>
            {[
              {
                icon: '🚀', bg: '#F5E8E1', border: '#B85C38',
                title: 'Get Pre-Approved',
                desc: 'Start your pre-approval online. Takes about 10 minutes.',
                href: '/get-started/pre-approval',
                btnBg: '#B85C38', btnLabel: 'Start Now',
              },
              {
                icon: '📅', bg: '#E4F0EC', border: '#3D6B5C',
                title: 'Schedule a Call',
                desc: 'Pick a time that works for you and let\'s talk through your options.',
                href: '/get-started/schedule',
                btnBg: '#3D6B5C', btnLabel: 'Book a Time',
              },
              {
                icon: '📋', bg: '#F5EFE8', border: '#A89278',
                title: 'Apply Now',
                desc: 'Ready to submit your full application? Head to the Edge portal.',
                href: '/get-started/apply',
                btnBg: '#2A2118', btnLabel: 'Apply Now',
              },
            ].map((item) => (
              <div key={item.title} style={{
                background: item.bg, borderRadius: '12px', padding: '28px 24px',
                border: `1px solid ${item.border}22`,
                display: 'flex', flexDirection: 'column', gap: '12px',
              }}>
                <div style={{ fontSize: '28px' }}>{item.icon}</div>
                <div style={{ fontSize: '16px', fontWeight: 800, color: '#2A2118' }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: '#4A3728', lineHeight: 1.65, flex: 1 }}>{item.desc}</div>
                <a href={item.href} style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  background: item.btnBg, color: '#FFFCF8',
                  fontSize: '13px', fontWeight: 700, padding: '11px 20px',
                  borderRadius: '6px', textDecoration: 'none', marginTop: '4px',
                }}>
                  {item.btnLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}