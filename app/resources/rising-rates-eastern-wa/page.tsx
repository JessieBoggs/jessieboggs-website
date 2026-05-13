import Link from 'next/link';
export const metadata = {
  title: 'What Rising Rates Mean for Eastern WA Buyers | Jessie Boggs',
  description: 'Honest take on what rising mortgage rates mean for buyers in Eastern Washington right now. Written by Jessie Boggs NMLS #2803455.',
};
export default function RisingRatesEasternWA() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: '#F2EBE0', padding: '72px 52px 0',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, opacity: 0.045,
          backgroundImage: 'radial-gradient(circle, #2A2118 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px' }}>
          <div style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase' as const, color: '#B85C38',
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
          }}>
            <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
            Market Update
          </div>
          <h1 style={{
            fontSize: '48px', fontWeight: 800, color: '#2A2118',
            lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '20px',
          }}>
            What Rising Rates Really Mean for Eastern WA Buyers Right Now
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' as const }}>
            <span style={{ fontSize: '13px', color: '#8C7B6E' }}>May 2026</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#D4C4B0', display: 'block' }} />
            <span style={{ fontSize: '13px', color: '#8C7B6E' }}>4 min read</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#D4C4B0', display: 'block' }} />
            <span style={{ fontSize: '13px', color: '#8C7B6E' }}>By Jessie Boggs, NMLS #2803455</span>
          </div>
        </div>
      </section>

      {/* ── WAVE ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#FAF6F0' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── CONTENT ── */}
      <section style={{ background: '#FAF6F0', padding: '40px 52px 80px' }}>
        <div className="article-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 320px',
          gap: '64px', alignItems: 'flex-start',
        }}>
          {/* Article body */}
          <article style={{ maxWidth: '100%' }}>
            {[
              {
                type: 'p',
                text: 'If you have been paying any attention to mortgage rates lately you have probably seen some headlines that made you want to close the browser and wait a few years before buying a home. I get it. The coverage has been dramatic. But the reality on the ground here in Eastern Washington is a lot more nuanced than what you are reading, and I want to give you an honest look at what is actually going on.',
              },
              {
                type: 'h2',
                text: 'Yes, rates are higher than they were a few years ago',
              },
              {
                type: 'p',
                text: 'There is no point pretending otherwise. The historically low rates we saw in 2020 and 2021 were an anomaly, not a baseline. When you compare today\'s rates to those years it looks painful. But when you compare them to the historical average over the past 30 years, we are not in shocking territory. Rates in the 6% to 7% range have been the norm for most of modern mortgage history.',
              },
              {
                type: 'p',
                text: 'The problem is that a lot of buyers formed their expectations during a period that was genuinely unusual. If your mental benchmark is 3%, anything above 5% feels like a crisis. That mindset is worth examining.',
              },
              {
                type: 'h2',
                text: 'What this actually means for your monthly payment',
              },
              {
                type: 'p',
                text: 'Let me give you a concrete example. On a $350,000 home with 10% down, the difference between a 3% rate and a 6.5% rate is roughly $550 per month on principal and interest. That is real money and I am not going to tell you it is not. But a few things are worth considering alongside that number.',
              },
              {
                type: 'p',
                text: 'First, that $350,000 home would have cost you $380,000 or $400,000 two years ago when rates were lower because competition was fierce and prices were elevated. Eastern Washington saw significant appreciation during the low-rate frenzy. Today\'s prices are more realistic. So the payment difference is not as dramatic as the raw rate comparison makes it look.',
              },
              {
                type: 'p',
                text: 'Second, you can refinance. The home you buy today at 6.5% is not the home you will have a 6.5% mortgage on forever. When rates come down, and historically they do cycle, you refinance. You lock in the purchase price you can get today and take advantage of the rate environment later. The phrase "marry the home, date the rate" is a cliche because it is true.',
              },
              {
                type: 'h2',
                text: 'The Eastern Washington market specifically',
              },
              {
                type: 'p',
                text: 'Here is what I am seeing on the ground right now. Inventory is better than it has been in several years. Sellers are more willing to negotiate. You are not competing against 14 offers on every decent home. That dynamic shift has real value that does not show up in the rate conversation.',
              },
              {
                type: 'p',
                text: 'In Spokane and Spokane Valley, well-priced homes are still moving but the panic buying is gone. In more rural areas like Newport, Deer Park, and the communities around Stevens County, the USDA eligible zones give buyers real options that do not exist in most markets. Zero down, reasonable rates, and sellers who are ready to work with you.',
              },
              {
                type: 'p',
                text: 'North Idaho is a slightly different story. Coeur d\'Alene and Post Falls have stayed competitive because of the ongoing migration into the region from western states. But even there, the bidding wars have cooled and buyers are finding more breathing room than they had 18 months ago.',
              },
              {
                type: 'h2',
                text: 'What should you actually do right now',
              },
              {
                type: 'p',
                text: 'If you are waiting for rates to drop before you start looking, here is the honest reality: you are probably not the only one waiting. When rates drop meaningfully, a wave of buyers who have been on the sidelines will hit the market at the same time. Prices go back up, competition returns, and you are right back to fighting over homes.',
              },
              {
                type: 'p',
                text: 'The buyers who do well in this market are the ones who understand what they can actually afford today, get their pre-approval in place, and move with intention. They are not trying to time the market perfectly. They are finding a home they want to own for the long term and making a sound financial decision based on what they know now.',
              },
              {
                type: 'p',
                text: 'If you want to talk through your specific situation, I am happy to run the numbers with you. No pressure, no pitch. Just a real conversation about what makes sense for where you are right now.',
              },
            ].map((block, i) => (
              block.type === 'h2' ? (
                <h2 key={i} style={{
                  fontSize: '24px', fontWeight: 800, color: '#2A2118',
                  letterSpacing: '-0.02em', marginBottom: '14px', marginTop: '40px',
                }}>
                  {block.text}
                </h2>
              ) : (
                <p key={i} style={{
                  fontSize: '16px', color: '#4A3728', lineHeight: 1.85,
                  marginBottom: '20px',
                }}>
                  {block.text}
                </p>
              )
            ))}

            {/* Compliance */}
            <div style={{
              borderTop: '1px solid #E8DDD0', paddingTop: '24px', marginTop: '48px',
            }}>
              <p style={{ fontSize: '11px', color: '#8C7B6E', lineHeight: 1.7 }}>
                Jessie Boggs, NMLS #2803455. Licensed in Washington and Idaho.
                Powered by Edge Home Finance Corporation, NMLS #891464.
                This article is for informational purposes only and does not constitute
                financial advice or a commitment to lend.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* CTA card */}
            <div style={{
              background: '#2A2118', borderRadius: '16px', padding: '28px',
              boxShadow: '0 8px 32px rgba(42,33,24,0.15)',
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFCF8', marginBottom: '10px' }}>
                Ready to run your numbers?
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(250,246,240,0.7)', lineHeight: 1.65, marginBottom: '20px' }}>
                Let me show you exactly what you qualify for in today&rsquo;s market.
                No pressure, no commitment.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/get-started/pre-approval" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#B85C38', color: '#FFFCF8',
                  fontSize: '13px', fontWeight: 700, padding: '12px',
                  borderRadius: '6px', textDecoration: 'none',
                }}>Get Pre-Approved</Link>
                <Link href="/get-started/schedule" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'transparent', color: '#D4C4B0',
                  fontSize: '13px', fontWeight: 700, padding: '11px',
                  borderRadius: '6px', textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.2)',
                }}>Schedule a Call</Link>
              </div>
            </div>

            {/* Related tool */}
            <div style={{
              background: '#FFFCF8', borderRadius: '16px', padding: '24px',
              border: '1px solid #E8DDD0',
              boxShadow: '0 4px 20px rgba(42,33,24,0.07)',
            }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#2A2118', marginBottom: '8px' }}>
                Calculate your payment
              </h3>
              <p style={{ fontSize: '12px', color: '#8C7B6E', lineHeight: 1.65, marginBottom: '16px' }}>
                See exactly what today&rsquo;s rates mean for your monthly payment on any home price.
              </p>
              <Link href="/tools/mortgage-calculator" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#3D6B5C', color: '#FFFCF8',
                fontSize: '13px', fontWeight: 700, padding: '11px',
                borderRadius: '6px', textDecoration: 'none',
              }}>Open Calculator</Link>
            </div>

            {/* Related articles */}
            <div style={{
              background: '#FFFCF8', borderRadius: '16px', padding: '24px',
              border: '1px solid #E8DDD0',
              boxShadow: '0 4px 20px rgba(42,33,24,0.07)',
            }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#2A2118', marginBottom: '16px' }}>
                Related articles
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { title: 'The 20% Down Myth', href: '/resources/20-percent-down-myth' },
                  { title: 'USDA Loans in Stevens County', href: '/resources/usda-stevens-county' },
                  { title: 'North Idaho Market 2026', href: '/resources/north-idaho-market-2026' },
                ].map((article) => (
                  <Link key={article.href} href={article.href} style={{
                    fontSize: '13px', fontWeight: 600, color: '#B85C38',
                    textDecoration: 'none', lineHeight: 1.4,
                  }}>
                    {article.title} →
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}