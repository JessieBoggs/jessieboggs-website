import Link from 'next/link';
export const metadata = {
  title: 'Client Reviews | Jessie Boggs Mortgage Loan Strategist NMLS #2803455',
  description: '5-star rated mortgage loan strategist in Eastern Washington and North Idaho. Read client reviews and see what working with Jessie Boggs looks like.',
};
export default function Reviews() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: '#F2EBE0', padding: '72px 52px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, opacity: 0.045,
          backgroundImage: 'radial-gradient(circle, #2A2118 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none',
        }} />
        <div className="reviews-hero-grid" style={{
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
              Client Reviews
            </div>
            <h1 style={{
              fontSize: '52px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '20px',
            }}>
              What clients say<br />
              <span style={{ color: '#B85C38' }}>about working with me.</span>
            </h1>
            <p style={{
              fontSize: '16px', color: '#4A3728', lineHeight: 1.75, marginBottom: '32px',
            }}>
              I believe your biggest decisions deserve the best people.
              Here is what clients have said about their experience working with me.
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

          {/* Right -- rating summary */}
          <div style={{
            background: '#FFFCF8', borderRadius: '16px', padding: '40px',
            border: '1px solid #E8DDD0',
            boxShadow: '0 8px 40px rgba(42,33,24,0.08)',
            textAlign: 'center' as const,
            borderTop: '4px solid #B85C38',
          }}>
            <div style={{
              fontSize: '72px', fontWeight: 800, color: '#2A2118',
              letterSpacing: '-0.04em', lineHeight: 1,
            }}>
              5.0
            </div>
            <div style={{ color: '#B85C38', fontSize: '28px', letterSpacing: '4px', margin: '8px 0' }}>
              ★★★★★
            </div>
            <div style={{
              fontSize: '14px', color: '#8C7B6E', marginBottom: '28px',
            }}>
              Based on client reviews
            </div>
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '10px',
              textAlign: 'left' as const,
            }}>
              {[
                { label: 'Communication', pct: 100 },
                { label: 'Responsiveness', pct: 100 },
                { label: 'Knowledge', pct: 100 },
                { label: 'Overall Experience', pct: 100 },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    fontSize: '12px', fontWeight: 600, color: '#2A2118',
                    marginBottom: '4px',
                  }}>
                    <span>{item.label}</span>
                    <span style={{ color: '#B85C38' }}>5.0</span>
                  </div>
                  <div style={{
                    height: '6px', background: '#E8DDD0', borderRadius: '3px', overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%', width: `${item.pct}%`,
                      background: '#B85C38', borderRadius: '3px',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#FAF6F0' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── REVIEWS GRID ── */}
      <section style={{ background: '#FAF6F0', padding: '80px 52px' }}>
        <div style={{ textAlign: 'center' as const, marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '36px', fontWeight: 800, color: '#2A2118',
            letterSpacing: '-0.025em', marginBottom: '12px',
          }}>
            Real people. Real results.
          </h2>
          <p style={{ fontSize: '15px', color: '#4A3728', lineHeight: 1.75 }}>
            Reviews from clients across Eastern Washington and North Idaho.
          </p>
        </div>

        <div className="reviews-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px', marginBottom: '48px',
        }}>
          {[
            {
              border: '#B85C38',
              quote: 'Jessie made the whole process feel effortless. He was upfront about everything, answered every question, and we closed ahead of schedule. His knowledge of homes, not just loans, made us feel like we had exactly the right person in our corner.',
              name: 'Sarah M.', location: 'Spokane Valley, WA', type: 'Purchase',
            },
            {
              border: '#3D6B5C',
              quote: 'As a veteran I wanted someone who knew the VA loan process cold. Jessie walked us through every step, saved us thousands, and the communication was outstanding the whole way through. I have already referred three friends to him.',
              name: 'Marcus & Danielle T.', location: 'Coeur d\'Alene, ID', type: 'VA Loan',
            },
            {
              border: '#3D6B5C',
              quote: 'First-time buyers with a million questions. Jessie never made us feel rushed or overwhelmed. The USDA loan he found us meant we could actually afford the home we wanted in the area we wanted. We never knew that was an option.',
              name: 'Tyler & Megan R.', location: 'Deer Park, WA', type: 'USDA Loan',
            },
            {
              border: '#B85C38',
              quote: 'I have referred several clients to Jessie and every single one has come back to thank me. He communicates proactively, keeps deals on track, and treats every client like a priority. That is rare in this business.',
              name: 'Jennifer K.', location: 'Realtor — Spokane, WA', type: 'Agent Partner',
            },
          ].map((review) => (
            <div key={review.name} style={{
              background: '#FFFCF8', border: '1px solid #E8DDD0',
              borderRadius: '12px', padding: '28px',
              borderLeft: `4px solid ${review.border}`,
              boxShadow: '0 4px 20px rgba(42,33,24,0.07)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div style={{ color: '#B85C38', fontSize: '16px', letterSpacing: '2px' }}>★★★★★</div>
                <span style={{
                  fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const, padding: '3px 8px',
                  borderRadius: '4px', background: '#F5E8E1', color: '#8F4228',
                }}>{review.type}</span>
              </div>
              <p style={{
                fontSize: '14px', color: '#4A3728', lineHeight: 1.78,
                fontStyle: 'italic', marginBottom: '18px',
              }}>
                &ldquo;{review.quote}&rdquo;
              </p>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#2A2118' }}>
                {review.name}
              </div>
              <div style={{ fontSize: '11px', color: '#8C7B6E', marginTop: '2px' }}>
                {review.location}
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder notice */}
        <div style={{
          background: '#F5E8E1', borderRadius: '12px', padding: '20px 24px',
          border: '1px solid rgba(184,92,56,0.2)',
          textAlign: 'center' as const,
          marginBottom: '48px',
        }}>
          <p style={{ fontSize: '13px', color: '#8F4228', lineHeight: 1.65 }}>
            More reviews coming soon. If you are a past client and would like to leave a review,
            please reach out directly.
          </p>
        </div>

        {/* CTA */}
        <div style={{
          background: '#2A2118', borderRadius: '16px', padding: '48px',
          textAlign: 'center' as const,
          boxShadow: '0 8px 40px rgba(42,33,24,0.15)',
        }}>
          <h2 style={{
            fontSize: '32px', fontWeight: 800, color: '#FFFCF8',
            letterSpacing: '-0.025em', marginBottom: '12px',
          }}>
            Ready to have your own story to tell?
          </h2>
          <p style={{
            fontSize: '15px', color: 'rgba(250,246,240,0.72)',
            lineHeight: 1.75, marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px',
          }}>
            Let&rsquo;s get started. No pressure, no jargon, just real answers
            from someone who knows this market.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link href="/get-started/pre-approval" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#B85C38', color: '#FFFCF8',
              fontSize: '14px', fontWeight: 700, padding: '14px 28px',
              borderRadius: '6px', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
            }}>Get Pre-Approved</Link>
            <Link href="/get-started/schedule" style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'transparent', color: '#D4C4B0',
              fontSize: '14px', fontWeight: 700, padding: '13px 28px',
              borderRadius: '6px', textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.2)',
            }}>Schedule a Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}