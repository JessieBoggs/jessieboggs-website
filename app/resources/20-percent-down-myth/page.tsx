import Link from 'next/link';
export const metadata = {
  title: 'The 20% Down Payment Myth | Jessie Boggs NMLS #2803455',
  description: 'Most buyers do not need 20% down. Here is what you actually need by loan type. Written for Eastern WA and North Idaho buyers by Jessie Boggs NMLS #2803455.',
};
export default function TwentyPercentDownMyth() {
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
            Loan Education
          </div>
          <h1 style={{
            fontSize: '48px', fontWeight: 800, color: '#2A2118',
            lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '20px',
          }}>
            The 20% Down Myth: Why Most Buyers Do Not Need It
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' as const }}>
            <span style={{ fontSize: '13px', color: '#8C7B6E' }}>April 2026</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#D4C4B0', display: 'block' }} />
            <span style={{ fontSize: '13px', color: '#8C7B6E' }}>4 min read</span>
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
          gap: '64px', alignItems: 'stretch',
        }}>
          <article style={{ maxWidth: '100%' }}>
            {[
              { type: 'p', text: 'The 20% down payment requirement is one of the most persistent myths in personal finance. I hear it from buyers constantly. They have been putting off their home search because they do not have 20% saved yet. They think that is the threshold they need to cross before they can even start the process. In most cases that belief is simply not accurate, and it is costing people years of homeownership they could have had.' },
              { type: 'p', text: 'Let me walk through where this idea comes from, what the actual requirements are across different loan programs, and how to think about the down payment decision strategically rather than just trying to hit an arbitrary number.' },
              { type: 'h2', text: 'Where the 20% number comes from' },
              { type: 'p', text: 'The 20% figure is not a requirement. It is the threshold at which you avoid private mortgage insurance on a conventional loan. PMI is an insurance policy that protects the lender in case you default. When you put less than 20% down on a conventional loan, the lender requires you to carry this insurance until your equity reaches 20%.' },
              { type: 'p', text: 'At some point the 20% number got detached from its actual meaning and turned into a blanket rule that people repeat without context. A generation or two of homeowners passed it down as gospel. Now it functions as a psychological barrier that keeps a lot of qualified buyers on the sidelines longer than they need to be.' },
              { type: 'h2', text: 'What you actually need by loan type' },
              { type: 'p', text: 'Conventional loans allow down payments as low as 3% for first-time buyers through programs like Fannie Mae HomeReady and Freddie Mac Home Possible. You will pay PMI, but PMI is not permanent. Once your equity hits 20% you can request cancellation and it goes away.' },
              { type: 'p', text: 'FHA loans require 3.5% down if your credit score is 580 or above. Below 580 you need 10%. FHA mortgage insurance is more persistent than conventional PMI, so if you have decent credit and can qualify for conventional it is usually worth comparing both options.' },
              { type: 'p', text: 'VA loans require zero down for eligible veterans and active service members. No PMI ever. This is genuinely the best financing available in the market for those who qualify.' },
              { type: 'p', text: 'USDA Rural Development loans also allow zero down for buyers in eligible areas, which includes large portions of Eastern Washington and North Idaho. Income limits apply but they are higher than most people expect.' },
              { type: 'h2', text: 'The real question to ask about down payment' },
              { type: 'p', text: 'The better question is not how much do I need but how much should I put down given my specific situation. Those are different questions with different answers depending on your financial picture.' },
              { type: 'p', text: 'Putting more down reduces your monthly payment, eliminates or reduces mortgage insurance, and gets you to equity faster. Those are real benefits. But putting every dollar you have into a down payment leaves you with no cash reserves after closing. And the first few months of homeownership almost always come with unexpected expenses.' },
              { type: 'p', text: 'There is also an opportunity cost argument. Money tied up in home equity is not liquid. If you have a strong emergency fund, stable income, and the ability to build equity through appreciation and regular payments, putting less down and keeping cash liquid can actually be the smarter financial move.' },
              { type: 'h2', text: 'What I usually tell buyers' },
              { type: 'p', text: 'Come in and let me run the numbers for your specific situation. What does 3% down look like versus 10% down versus 20% down on the home you are trying to buy? What does the monthly payment difference look like? What does the PMI cost and when does it go away? What loan type makes the most sense for your credit, income, and the area you are buying in?' },
              { type: 'p', text: 'That analysis takes about 15 minutes and it gives you an actual decision framework instead of a number you heard somewhere that may or may not apply to you. Most buyers who go through that conversation end up buying sooner than they would have if they had kept waiting to hit 20%.' },
              { type: 'p', text: 'If you have been delaying because you do not have 20% saved, it is worth having that conversation. You might be closer to buying than you think.' },
            ].map((block, i) => (
              block.type === 'h2' ? (
                <h2 key={i} style={{ fontSize: '24px', fontWeight: 800, color: '#2A2118', letterSpacing: '-0.02em', marginBottom: '14px', marginTop: '40px' }}>{block.text}</h2>
              ) : (
                <p key={i} style={{ fontSize: '16px', color: '#4A3728', lineHeight: 1.85, marginBottom: '20px' }}>{block.text}</p>
              )
            ))}
            <div style={{ borderTop: '1px solid #E8DDD0', paddingTop: '24px', marginTop: '48px' }}>
              <p style={{ fontSize: '11px', color: '#8C7B6E', lineHeight: 1.7 }}>
                Jessie Boggs, NMLS #2803455. Licensed in Washington and Idaho. Powered by Edge Home Finance, LLC, NMLS #891464. This article is for informational purposes only and does not constitute financial advice or a commitment to lend.
              </p>
            </div>
          </article>

          <aside style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: '#2A2118', borderRadius: '16px', padding: '28px', boxShadow: '0 8px 32px rgba(42,33,24,0.15)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFCF8', marginBottom: '10px' }}>Find out what you need</h3>
              <p style={{ fontSize: '13px', color: 'rgba(250,246,240,0.7)', lineHeight: 1.65, marginBottom: '20px' }}>
                Let me run the numbers on your specific situation and show you exactly what you qualify for today.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/get-started/pre-approval" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#B85C38', color: '#FFFCF8', fontSize: '13px', fontWeight: 700, padding: '12px', borderRadius: '6px', textDecoration: 'none' }}>Get Pre-Approved</Link>
                <Link href="/get-started/schedule" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#D4C4B0', fontSize: '13px', fontWeight: 700, padding: '11px', borderRadius: '6px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.2)' }}>Schedule a Call</Link>
              </div>
            </div>
            <div style={{ background: '#FFFCF8', borderRadius: '16px', padding: '24px', border: '1px solid #E8DDD0', boxShadow: '0 4px 20px rgba(42,33,24,0.07)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#2A2118', marginBottom: '8px' }}>Compare loan options</h3>
              <p style={{ fontSize: '12px', color: '#8C7B6E', lineHeight: 1.65, marginBottom: '16px' }}>See how different down payment amounts affect your monthly payment side by side.</p>
              <Link href="/tools/loan-comparison" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3D6B5C', color: '#FFFCF8', fontSize: '13px', fontWeight: 700, padding: '11px', borderRadius: '6px', textDecoration: 'none' }}>Open Comparison Tool</Link>
            </div>
            <div style={{ background: '#FFFCF8', borderRadius: '16px', padding: '24px', border: '1px solid #E8DDD0', boxShadow: '0 4px 20px rgba(42,33,24,0.07)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#2A2118', marginBottom: '16px' }}>Related articles</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { title: 'USDA Loans in Stevens County', href: '/resources/usda-stevens-county' },
                  { title: 'VA Loan Advantage', href: '/resources/va-loan-advantage' },
                  { title: 'What Rising Rates Mean for Buyers', href: '/resources/rising-rates-eastern-wa' },
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