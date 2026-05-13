import Link from 'next/link';
export const metadata = {
  title: 'Construction Loans Explained Eastern WA | Jessie Boggs NMLS #2803455',
  description: 'Everything you need to know about construction loans before you build. Written by a loan officer with a decade in residential construction. Jessie Boggs NMLS #2803455.',
};
export default function ConstructionLoansExplained() {
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
            textTransform: 'uppercase' as const, color: '#B85C38',
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
          }}>
            <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
            Construction & Renovation
          </div>
          <h1 style={{
            fontSize: '48px', fontWeight: 800, color: '#2A2118',
            lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '20px',
          }}>
            Construction Loans Explained: What to Know Before You Build
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' as const }}>
            <span style={{ fontSize: '13px', color: '#8C7B6E' }}>March 2026</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#D4C4B0', display: 'block' }} />
            <span style={{ fontSize: '13px', color: '#8C7B6E' }}>6 min read</span>
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
              { type: 'p', text: 'I spent nearly a decade in residential construction and remodeling before I got into mortgage lending. I have managed projects from the ground up, worked with contractors and subs, dealt with permitting, and watched budgets go sideways in real time. That background is exactly why I want to write this article, because most of what gets written about construction loans is written by people who have never actually been on a job site.' },
              { type: 'p', text: 'Building a home is one of the most complex financial undertakings a family can take on. The financing piece is just one part of it. But understanding how the loan works before you break ground can save you from some very expensive surprises.' },
              { type: 'h2', text: 'How construction loans are different from regular mortgages' },
              { type: 'p', text: 'A standard mortgage funds a purchase all at once. You close, the seller gets paid, you get the keys. A construction loan does not work that way. The money is released in draws, meaning the lender pays out funds in stages as construction milestones are reached and inspected. Foundation complete, framing complete, rough plumbing and electrical, drywall, finish work, and final completion each typically trigger a draw.' },
              { type: 'p', text: 'During the construction phase you only pay interest on the amount that has been drawn, not the full loan amount. This keeps your payments lower while the home is being built. Once construction is complete the loan converts to a permanent mortgage and your regular principal and interest payments begin.' },
              { type: 'h2', text: 'One-time close versus two-time close' },
              { type: 'p', text: 'There are two main structures for construction financing. A one-time close, also called a construction-to-permanent loan, covers both the construction phase and the permanent mortgage in a single transaction. You close once, lock your rate once, and pay one set of closing costs. When construction is done the loan automatically converts.' },
              { type: 'p', text: 'A two-time close involves separate closings for the construction loan and the permanent mortgage. You close on the construction loan to fund the build, and then when the home is complete you close again on the permanent financing. This gives you flexibility to shop for the best permanent rate at the time of conversion, but you pay closing costs twice and take rate risk during the build.' },
              { type: 'p', text: 'For most buyers in Eastern Washington the one-time close is the cleaner option. You have cost certainty, rate certainty, and one less closing to navigate. The two-time close makes more sense in specific scenarios, usually when rates are expected to drop significantly during the build period or when the permanent loan has unusual requirements.' },
              { type: 'h2', text: 'What lenders are looking for' },
              { type: 'p', text: 'Construction loan underwriting is more detailed than a standard purchase loan. Lenders want to see a qualified builder with a solid track record, a detailed construction budget with line items that add up, a realistic timeline, and a contract between you and the builder that protects both parties.' },
              { type: 'p', text: 'The appraisal is also different. Instead of appraising an existing home, the appraiser is evaluating the plans and specifications to determine the expected value of the finished home. This is called an as-completed appraisal and it is critical. If the as-completed value does not support the loan amount you are trying to borrow, you have a problem before you even dig a foundation.' },
              { type: 'h2', text: 'Where projects go wrong and what to watch for' },
              { type: 'p', text: 'I have seen this play out in real projects. The two most common problems are budget overruns and timeline delays, and they are usually connected. Material costs go up, a subcontractor does not show, weather causes delays, something in the ground turns out to be different from what anyone expected. Construction budgets need contingency built in. The industry standard is 10% to 15%. I have seen clients try to run tight budgets with no contingency and regret it.' },
              { type: 'p', text: 'The other thing I always tell clients is to understand the draw process before you start. When a draw is requested the lender sends an inspector to verify the work is complete before releasing funds. Your contractor needs to understand this and plan cash flow accordingly. A contractor who expects payment before the work is inspected is a contractor who is going to cause you problems.' },
              { type: 'h2', text: 'Renovation loans as an alternative' },
              { type: 'p', text: 'Not everyone building wants to start from scratch. If you are buying a home that needs significant work or you want to renovate an existing property, renovation loans like the FHA 203(k) and conventional HomeStyle let you finance the purchase and the renovation in a single loan. The loan amount is based on the as-completed value of the home, similar to a construction loan.' },
              { type: 'p', text: 'These programs have their own requirements and quirks but they can be a powerful tool for buyers who want to buy in a great location and update a home to their standards rather than settling for something that is already finished.' },
              { type: 'h2', text: 'Why my background matters here' },
              { type: 'p', text: 'When I work with a construction loan client I am not just processing paperwork. I am helping them think through the builder selection, the budget structure, the draw schedule, and the timeline. I can look at a construction contract and flag things that a loan officer without construction experience would not catch. I know what realistic costs look like in this region. I know which contingencies matter and which ones are boilerplate.' },
              { type: 'p', text: 'If you are thinking about building in Eastern Washington or North Idaho, I would encourage you to call me before you get too far down the road with a builder. The earlier we have that conversation the better the outcome tends to be.' },
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
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFCF8', marginBottom: '10px' }}>Thinking about building?</h3>
              <p style={{ fontSize: '13px', color: 'rgba(250,246,240,0.7)', lineHeight: 1.65, marginBottom: '20px' }}>
                Let me walk you through the financing options before you commit to a builder or a plan.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/get-started/pre-approval" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#B85C38', color: '#FFFCF8', fontSize: '13px', fontWeight: 700, padding: '12px', borderRadius: '6px', textDecoration: 'none' }}>Get Pre-Approved</Link>
                <Link href="/get-started/schedule" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#D4C4B0', fontSize: '13px', fontWeight: 700, padding: '11px', borderRadius: '6px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.2)' }}>Schedule a Call</Link>
              </div>
            </div>
            <div style={{ background: '#FFFCF8', borderRadius: '16px', padding: '24px', border: '1px solid #E8DDD0', boxShadow: '0 4px 20px rgba(42,33,24,0.07)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#2A2118', marginBottom: '8px' }}>Construction loan page</h3>
              <p style={{ fontSize: '12px', color: '#8C7B6E', lineHeight: 1.65, marginBottom: '16px' }}>Learn more about construction and renovation loan programs available in Eastern WA and North Idaho.</p>
              <Link href="/loan-types/construction-renovation" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3D6B5C', color: '#FFFCF8', fontSize: '13px', fontWeight: 700, padding: '11px', borderRadius: '6px', textDecoration: 'none' }}>Learn More</Link>
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