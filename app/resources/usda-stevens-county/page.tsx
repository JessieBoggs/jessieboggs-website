import Link from 'next/link';

export default function USDAStevensCounty() {
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
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px' }}>
          <div style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase' as const, color: '#3D6B5C',
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
          }}>
            <span style={{ width: '28px', height: '2px', background: '#3D6B5C', display: 'block', flexShrink: 0 }} />
            First-Time Buyers
          </div>
          <h1 style={{
            fontSize: '48px', fontWeight: 800, color: '#2A2118',
            lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '20px',
          }}>
            USDA Loans in Stevens County: Zero Down in More Places Than You Think
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' as const }}>
            <span style={{ fontSize: '13px', color: '#8C7B6E' }}>April 2026</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#D4C4B0', display: 'block' }} />
            <span style={{ fontSize: '13px', color: '#8C7B6E' }}>3 min read</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#D4C4B0', display: 'block' }} />
            <span style={{ fontSize: '13px', color: '#8C7B6E' }}>By Jessie Boggs, NMLS #2803455</span>
          </div>
        </div>
      </section>

      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#FAF6F0' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      <section style={{ background: '#FAF6F0', padding: '40px 52px 80px' }}>
        <div className="article-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 320px',
          gap: '64px', alignItems: 'flex-start',
        }}>
          <article style={{ maxWidth: '100%' }}>
            {[
              { type: 'p', text: 'One of the most common conversations I have with buyers in Eastern Washington goes something like this. They have been saving for a down payment, they are not sure they have enough, and they have been putting off the home search because of it. Then I ask them where they are looking to buy. They say somewhere in Stevens County or the surrounding area. And I tell them they may not need a down payment at all.' },
              { type: 'p', text: 'The USDA Rural Development loan program is one of the best kept secrets in mortgage financing, especially for buyers in this part of Washington. Zero down payment, competitive rates, and income limits that are higher than most people expect. Here is what you need to know.' },
              { type: 'h2', text: 'What is a USDA loan' },
              { type: 'p', text: 'The USDA Rural Development guaranteed loan program was created to help moderate income families purchase homes in eligible rural and suburban areas. The key word people get hung up on is rural. Most buyers assume that means farmland or remote areas with no amenities. That is not what the USDA map actually reflects.' },
              { type: 'p', text: 'In Stevens County, essentially the entire county is eligible. That includes Chewelah, Deer Park, Colville, Newport, and the surrounding communities. It also includes most of the communities north and east of Spokane that people think of as suburban. I check eligibility for clients all the time and the results surprise people consistently.' },
              { type: 'h2', text: 'Income limits are not what you think' },
              { type: 'p', text: 'The other major misconception is about income limits. People hear income limit and assume the program is only for very low income buyers. The USDA limit for a family of four in Stevens County is over $110,000 per year in most cases. The limits also adjust upward for larger households. A family of five or six has an even higher ceiling.' },
              { type: 'p', text: 'The limit is based on household income, which means everyone in the home who has income counts toward the total. This trips some people up if they have adult children or other household members working. But for a typical family in the area, the income limit is rarely the barrier people expect it to be.' },
              { type: 'h2', text: 'The actual costs of a USDA loan' },
              { type: 'p', text: 'USDA loans have two fees worth knowing about. There is a one-time upfront guarantee fee of 1% of the loan amount. Unlike FHA, this fee can be rolled directly into the loan so you do not have to pay it at closing. There is also an annual fee of 0.35% of the outstanding loan balance, which works out to about $100 per month on a $350,000 loan.' },
              { type: 'p', text: 'Compare that to FHA, which charges an upfront mortgage insurance premium of 1.75% and an annual premium of around 0.55%. On the same loan amount USDA is meaningfully cheaper over time. And compared to conventional with PMI until you hit 20% equity, USDA often wins for buyers who do not have a large down payment ready.' },
              { type: 'h2', text: 'What the process looks like' },
              { type: 'p', text: 'USDA loans go through two approvals instead of one. The lender approves the loan and then it goes to the USDA office for their final sign-off. This adds a few days to the timeline but it is not a significant hurdle if you are working with a loan officer who factors it in from the start. I always build USDA timeline into the purchase contract strategy so there are no surprises for the agent or seller.' },
              { type: 'p', text: 'The property itself has to be in an eligible area and it needs to meet USDA condition standards, similar to what you see with VA loans. Nothing unreasonable. The home needs to be in decent condition and function as intended. Most well-maintained homes in the area qualify without any issues.' },
              { type: 'h2', text: 'Who should look at this program' },
              { type: 'p', text: 'If you are buying in Stevens County, Newport, Deer Park, or most of the rural communities in Eastern Washington and you have steady income but limited savings, this program is worth a serious look. It is also worth considering even if you do have some savings, because keeping that cash liquid after closing gives you a financial cushion that a lot of buyers do not have.' },
              { type: 'p', text: 'Give me a call and I will check your address in about two minutes. If it qualifies we can run the full numbers and you will know exactly what your payment would look like on a USDA loan versus the alternatives. Most people who do that comparison are glad they had the conversation.' },
            ].map((block, i) => (
              block.type === 'h2' ? (
                <h2 key={i} style={{ fontSize: '24px', fontWeight: 800, color: '#2A2118', letterSpacing: '-0.02em', marginBottom: '14px', marginTop: '40px' }}>{block.text}</h2>
              ) : (
                <p key={i} style={{ fontSize: '16px', color: '#4A3728', lineHeight: 1.85, marginBottom: '20px' }}>{block.text}</p>
              )
            ))}
            <div style={{ borderTop: '1px solid #E8DDD0', paddingTop: '24px', marginTop: '48px' }}>
              <p style={{ fontSize: '11px', color: '#8C7B6E', lineHeight: 1.7 }}>
                Jessie Boggs, NMLS #2803455. Licensed in Washington and Idaho. Powered by Edge Home Finance Corporation, NMLS #891464. This article is for informational purposes only and does not constitute financial advice or a commitment to lend.
              </p>
            </div>
          </article>

          <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: '#2A2118', borderRadius: '16px', padding: '28px', boxShadow: '0 8px 32px rgba(42,33,24,0.15)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFCF8', marginBottom: '10px' }}>Check your eligibility</h3>
              <p style={{ fontSize: '13px', color: 'rgba(250,246,240,0.7)', lineHeight: 1.65, marginBottom: '20px' }}>
                Tell me your target area and I will check USDA eligibility in about two minutes.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/get-started/pre-approval" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#B85C38', color: '#FFFCF8', fontSize: '13px', fontWeight: 700, padding: '12px', borderRadius: '6px', textDecoration: 'none' }}>Get Pre-Approved</Link>
                <Link href="/get-started/schedule" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#D4C4B0', fontSize: '13px', fontWeight: 700, padding: '11px', borderRadius: '6px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.2)' }}>Schedule a Call</Link>
              </div>
            </div>
            <div style={{ background: '#FFFCF8', borderRadius: '16px', padding: '24px', border: '1px solid #E8DDD0', boxShadow: '0 4px 20px rgba(42,33,24,0.07)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#2A2118', marginBottom: '8px' }}>Run the numbers</h3>
              <p style={{ fontSize: '12px', color: '#8C7B6E', lineHeight: 1.65, marginBottom: '16px' }}>See what a zero down USDA payment looks like on your target price.</p>
              <Link href="/tools/mortgage-calculator" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3D6B5C', color: '#FFFCF8', fontSize: '13px', fontWeight: 700, padding: '11px', borderRadius: '6px', textDecoration: 'none' }}>Open Calculator</Link>
            </div>
            <div style={{ background: '#FFFCF8', borderRadius: '16px', padding: '24px', border: '1px solid #E8DDD0', boxShadow: '0 4px 20px rgba(42,33,24,0.07)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#2A2118', marginBottom: '16px' }}>Related articles</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { title: 'The 20% Down Myth', href: '/resources/20-percent-down-myth' },
                  { title: 'What Rising Rates Mean for Buyers', href: '/resources/rising-rates-eastern-wa' },
                  { title: 'North Idaho Market 2026', href: '/resources/north-idaho-market-2026' },
                ].map((a) => (
                  <Link key={a.href} href={a.href} style={{ fontSize: '13px', fontWeight: 600, color: '#B85C38', textDecoration: 'none', lineHeight: 1.4 }}>{a.title} →</Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}