import Link from 'next/link';
export const metadata = {
  title: 'Mortgage Resources & Market Updates Eastern WA | Jessie Boggs',
  description: 'Mortgage education, market updates, and buyer guides for Eastern Washington and North Idaho. Written by Jessie Boggs NMLS #2803455.',
};
export default function Resources() {
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
        <div className="resources-hero-grid" style={{
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
              Resources & Insights
            </div>
            <h1 style={{
              fontSize: '52px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '20px',
            }}>
              Stay informed.<br />
              <span style={{ color: '#B85C38' }}>Make better decisions.</span>
            </h1>
            <p style={{
              fontSize: '16px', color: '#4A3728', lineHeight: 1.75, marginBottom: '32px',
            }}>
              Market updates, buyer guides, and mortgage education written specifically
              for Eastern Washington and North Idaho. Plain language, no jargon, and
              always relevant to what is actually happening in this market.
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

          {/* Right -- category cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { icon: '📊', title: 'Market Updates', desc: 'What is happening in Eastern WA and North Idaho right now and what it means for buyers and sellers.', color: '#B85C38' },
              { icon: '🏠', title: 'Buyer Guides', desc: 'Step-by-step guidance for every type of buyer from first-timers to veterans to self-employed borrowers.', color: '#3D6B5C' },
              { icon: '💰', title: 'Loan Education', desc: 'Plain-language breakdowns of loan types, rates, fees, and the mortgage process from application to closing.', color: '#B85C38' },
              { icon: '🔨', title: 'Construction & Renovation', desc: 'Everything you need to know about financing a build or renovation from someone who has actually done the work.', color: '#3D6B5C' },
            ].map((cat) => (
              <div key={cat.title} style={{
                display: 'flex', gap: '14px', alignItems: 'flex-start',
                background: '#FFFCF8', borderRadius: '12px', padding: '18px 20px',
                border: '1px solid #E8DDD0', borderLeft: `4px solid ${cat.color}`,
                boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
              }}>
                <span style={{ fontSize: '22px', flexShrink: 0 }}>{cat.icon}</span>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#2A2118', marginBottom: '4px' }}>
                    {cat.title}
                  </div>
                  <div style={{ fontSize: '12px', color: '#8C7B6E', lineHeight: 1.6 }}>
                    {cat.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#FAF6F0' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── FEATURED ARTICLES ── */}
      <section style={{ background: '#FAF6F0', padding: '80px 52px' }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap' as const,
          gap: '20px', marginBottom: '48px',
        }}>
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#B85C38',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
              Latest Articles
            </div>
            <h2 style={{
              fontSize: '40px', fontWeight: 800, color: '#2A2118',
              letterSpacing: '-0.025em', marginBottom: '0',
            }}>
              Recent posts
            </h2>
          </div>
        </div>

        <div className="resources-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px', marginBottom: '48px',
        }}>
          {[
            {
              cat: 'Market Update', catBg: '#F5E8E1', catColor: '#8F4228', catBorder: '#B85C38',
              title: 'What Rising Rates Really Mean for Eastern WA Buyers Right Now',
              excerpt: 'Rates are up but the story is more nuanced than the headlines suggest. Here is what is actually happening in the Eastern Washington market and what it means if you are thinking about buying in the next 6 months.',
              date: 'May 2026', read: '4 min read',
              href: '/resources/rising-rates-eastern-wa',
            },
            {
              cat: 'VA Loans', catBg: '#E4F0EC', catColor: '#2E5245', catBorder: '#3D6B5C',
              title: 'The VA Loan Advantage: Why It Is Still the Best Deal in Mortgage',
              excerpt: 'Zero down, no PMI, competitive rates, and a benefit you earned. Here is a complete breakdown of the VA loan program and why so many veterans leave money on the table by not using it.',
              date: 'May 2026', read: '5 min read',
              href: '/resources/va-loan-advantage',
            },
            {
              cat: 'First-Time Buyers', catBg: '#F5E8E1', catColor: '#8F4228', catBorder: '#B85C38',
              title: 'USDA Loans in Stevens County: Zero Down in More Places Than You Think',
              excerpt: 'Most buyers in Eastern Washington have no idea USDA financing is available in their area. Here is a full breakdown of which areas qualify, what the income limits actually are, and how to get started.',
              date: 'April 2026', read: '3 min read',
              href: '/resources/usda-stevens-county',
            },
            {
              cat: 'Loan Education', catBg: '#E4F0EC', catColor: '#2E5245', catBorder: '#3D6B5C',
              title: 'The 20% Down Myth: Why Most Buyers Do Not Need It',
              excerpt: 'The idea that you need 20% down to buy a home stops more buyers than almost anything else. Here is the truth about down payment requirements across every major loan program.',
              date: 'April 2026', read: '4 min read',
              href: '/resources/20-percent-down-myth',
            },
            {
              cat: 'Construction', catBg: '#F5E8E1', catColor: '#8F4228', catBorder: '#B85C38',
              title: 'Construction Loans Explained: What to Know Before You Build',
              excerpt: 'Building a home is one of the most complex financing situations you can navigate. Here is everything you need to know before you break ground, from someone who has managed millions in construction projects.',
              date: 'March 2026', read: '6 min read',
              href: '/resources/construction-loans-explained',
            },
            {
              cat: 'Market Update', catBg: '#F5E8E1', catColor: '#8F4228', catBorder: '#B85C38',
              title: 'North Idaho Real Estate in 2026: What Buyers Need to Know',
              excerpt: 'The North Idaho market has shifted considerably over the past 18 months. Here is a current look at what is happening in Coeur d\'Alene, Post Falls, Sandpoint, and surrounding communities.',
              date: 'March 2026', read: '5 min read',
              href: '/resources/north-idaho-market-2026',
            },
          ].map((post) => (
            <Link key={post.title} href={post.href} style={{
              background: '#FFFCF8', border: '1px solid #E8DDD0',
              borderRadius: '12px', overflow: 'hidden',
              textDecoration: 'none', color: 'inherit', display: 'block',
              boxShadow: '0 4px 20px rgba(42,33,24,0.07)',
            }}>
              {/* Category banner */}
              <div style={{
                background: post.catBg,
                borderBottom: `3px solid ${post.catBorder}`,
                padding: '14px 20px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span style={{
                  fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase' as const, color: post.catColor,
                }}>
                  {post.cat}
                </span>
                <span style={{ fontSize: '11px', color: post.catColor, opacity: 0.7 }}>
                  {post.date} &bull; {post.read}
                </span>
              </div>
              {/* Body */}
              <div style={{ padding: '22px' }}>
                <h3 style={{
                  fontSize: '15px', fontWeight: 800, color: '#2A2118',
                  lineHeight: 1.4, marginBottom: '10px',
                }}>
                  {post.title}
                </h3>
                <p style={{
                  fontSize: '13px', color: '#8C7B6E', lineHeight: 1.7,
                  marginBottom: '16px',
                }}>
                  {post.excerpt}
                </p>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#B85C38' }}>
                  Read more →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming soon notice */}
        <div style={{
          background: '#F5E8E1', borderRadius: '12px', padding: '24px 28px',
          border: '1px solid rgba(184,92,56,0.2)',
          display: 'flex', alignItems: 'center', gap: '16px',
          flexWrap: 'wrap' as const,
        }}>
          <span style={{ fontSize: '24px' }}>📝</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#2A2118', marginBottom: '4px' }}>
              More articles coming regularly
            </div>
            <div style={{ fontSize: '13px', color: '#8F4228', lineHeight: 1.6 }}>
              New market updates, buyer guides, and mortgage education posted regularly.
              Have a topic you want covered? Reach out and let me know.
            </div>
          </div>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#B85C38', color: '#FFFCF8',
            fontSize: '13px', fontWeight: 700, padding: '10px 20px',
            borderRadius: '6px', textDecoration: 'none', flexShrink: 0,
          }}>Suggest a Topic</Link>
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#FAF6F0', fill: '#2A2118' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── FREE TOOLS CTA ── */}
      <section style={{ background: '#2A2118', padding: '80px 52px' }}>
        <div className="resources-cta-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '64px', alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#F5E8E1',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#F5E8E1', display: 'block', flexShrink: 0 }} />
              Free tools
            </div>
            <h2 style={{
              fontSize: '40px', fontWeight: 800, color: '#FFFCF8',
              letterSpacing: '-0.025em', marginBottom: '16px',
            }}>
              Run the numbers yourself.
            </h2>
            <p style={{
              fontSize: '15px', color: 'rgba(250,246,240,0.75)',
              lineHeight: 1.78, marginBottom: '32px',
            }}>
              Free mortgage calculators built for Eastern WA and North Idaho buyers.
              No email required. Just real numbers, right now.
            </p>
            <Link href="/tools" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#B85C38', color: '#FFFCF8',
              fontSize: '14px', fontWeight: 700, padding: '14px 28px',
              borderRadius: '6px', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
            }}>View All Tools</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { icon: '🧮', title: 'Mortgage Calculator', desc: 'Conventional, FHA, VA, USDA, and Jumbo all in one tool.', href: '/tools/mortgage-calculator' },
              { icon: '🎖️', title: 'VA Funding Fee Calculator', desc: 'Calculate your exact VA funding fee and monthly payment.', href: '/tools/va-calculator' },
              { icon: '🏡', title: 'Affordability Calculator', desc: 'Find out how much home you can actually afford.', href: '/tools/affordability-calculator' },
              { icon: '⚖️', title: 'Loan Comparison Tool', desc: 'Compare all loan types side by side on the same purchase price.', href: '/tools/loan-comparison' },
            ].map((tool) => (
              <Link key={tool.title} href={tool.href} style={{
                display: 'flex', gap: '14px', alignItems: 'center',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '10px', padding: '14px 18px',
                border: '1px solid rgba(255,255,255,0.08)',
                textDecoration: 'none', color: 'inherit',
              }}>
                <span style={{ fontSize: '20px', flexShrink: 0 }}>{tool.icon}</span>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#FFFCF8', marginBottom: '2px' }}>
                    {tool.title}
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(250,246,240,0.55)' }}>
                    {tool.desc}
                  </div>
                </div>
                <span style={{ color: '#B85C38', marginLeft: 'auto', flexShrink: 0 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}