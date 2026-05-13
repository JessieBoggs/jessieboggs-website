import Link from 'next/link';

export default function VALoanAdvantage() {
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
            VA Loans
          </div>
          <h1 style={{
            fontSize: '48px', fontWeight: 800, color: '#2A2118',
            lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '20px',
          }}>
            The VA Loan Advantage: Why It Is Still the Best Deal in Mortgage
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' as const }}>
            <span style={{ fontSize: '13px', color: '#8C7B6E' }}>May 2026</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#D4C4B0', display: 'block' }} />
            <span style={{ fontSize: '13px', color: '#8C7B6E' }}>5 min read</span>
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
              { type: 'p', text: 'I work with a lot of veterans and the conversation I have more than almost any other is some version of this: they did not realize how good their VA benefit actually was. Some thought it was complicated. Some assumed they would not qualify. Some had heard stories about VA appraisals killing deals and decided it was not worth the hassle. Most of them left significant money on the table as a result.' },
              { type: 'p', text: 'So let me be straightforward about something. If you have served and you have not used your VA loan benefit, there is a real chance you are paying more for your mortgage than you need to be. This article is going to walk through exactly what the VA loan offers, what the common misconceptions are, and what you need to know before you use it.' },
              { type: 'h2', text: 'What makes the VA loan different' },
              { type: 'p', text: 'Most loan programs require a down payment, private mortgage insurance, or both. The VA loan requires neither. Zero down payment, no PMI, and rates that are typically lower than conventional loans for the same borrower profile. That combination does not exist anywhere else in the mortgage market.' },
              { type: 'p', text: 'On a $400,000 home, a conventional loan with 5% down means $20,000 out of pocket at closing plus PMI that can run $150 to $200 per month until you hit 20% equity. A VA loan on the same home costs you nothing down and zero PMI ever. The monthly savings alone can add up to tens of thousands of dollars over the life of the loan.' },
              { type: 'h2', text: 'The funding fee explained' },
              { type: 'p', text: 'The VA loan does have a funding fee. This is a one-time fee paid to the VA that helps fund the program for future veterans. For most first-time users with no down payment it is 2.3% of the loan amount. The important thing to know is that this fee can be rolled directly into the loan, so you do not have to pay it out of pocket at closing.' },
              { type: 'p', text: 'Some veterans are completely exempt from the funding fee. If you have a service-connected disability rating of 10% or higher, you pay nothing. Surviving spouses receiving dependency and indemnity compensation are also exempt. If you fall into one of these categories and your loan officer did not check your exemption status, you may have paid a fee you did not owe.' },
              { type: 'h2', text: 'What about VA appraisals' },
              { type: 'p', text: 'This is probably the most common objection I hear from real estate agents. VA appraisals are stricter and they sometimes kill deals. That is partially true but it is also overstated. VA appraisers are checking for Minimum Property Requirements, which are basically a checklist of health and safety items. A home needs to have functional utilities, no exposed wiring, no roof that is actively failing, no broken windows. These are not unreasonable standards.' },
              { type: 'p', text: 'Where my background helps is that I look at properties the way a contractor does. I can usually tell before we even order the appraisal whether a property is likely to have VA issues. That conversation early in the process prevents surprises later. Most homes in good condition pass without any problems.' },
              { type: 'h2', text: 'Using your benefit more than once' },
              { type: 'p', text: 'A lot of veterans do not realize this but the VA loan benefit can be used multiple times. Once you pay off a VA loan your entitlement is restored and you can use it again. You can also have two VA loans at the same time under certain circumstances using what is called bonus entitlement.' },
              { type: 'p', text: 'The rules around multiple uses of the benefit can get complicated depending on your specific situation. That is one of the reasons it is worth working with a loan officer who knows this program well. I have helped veterans in Eastern Washington and North Idaho navigate entitlement restoration, county loan limits, and second-time use scenarios. It is workable in most cases.' },
              { type: 'h2', text: 'Is the VA loan always the right choice' },
              { type: 'p', text: 'Usually yes, but not always. There are scenarios where a conventional loan might make more sense, particularly if you have a large down payment available and the conventional rate is unusually competitive for your credit profile. There are also situations involving specific property types or unique financial structures where we might look at other options.' },
              { type: 'p', text: 'What I always do with veteran clients is run both scenarios side by side. VA versus conventional on the same purchase price, same rate environment, same timeline. Most of the time the VA loan wins clearly. But you deserve to see both options before you decide.' },
              { type: 'p', text: 'If you are a veteran in Eastern Washington or North Idaho and you have not explored your VA benefit, give me a call. I will pull your Certificate of Eligibility, walk through what you qualify for, and give you a straight answer on whether the VA loan is the right move for your situation.' },
            ].map((block, i) => (
              block.type === 'h2' ? (
                <h2 key={i} style={{ fontSize: '24px', fontWeight: 800, color: '#2A2118', letterSpacing: '-0.02em', marginBottom: '14px', marginTop: '40px' }}>
                  {block.text}
                </h2>
              ) : (
                <p key={i} style={{ fontSize: '16px', color: '#4A3728', lineHeight: 1.85, marginBottom: '20px' }}>
                  {block.text}
                </p>
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
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFCF8', marginBottom: '10px' }}>Are you a veteran?</h3>
              <p style={{ fontSize: '13px', color: 'rgba(250,246,240,0.7)', lineHeight: 1.65, marginBottom: '20px' }}>
                Let me pull your Certificate of Eligibility and show you exactly what your VA benefit is worth.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/get-started/pre-approval" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#B85C38', color: '#FFFCF8', fontSize: '13px', fontWeight: 700, padding: '12px', borderRadius: '6px', textDecoration: 'none' }}>Get Pre-Approved</Link>
                <Link href="/get-started/schedule" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#D4C4B0', fontSize: '13px', fontWeight: 700, padding: '11px', borderRadius: '6px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.2)' }}>Schedule a Call</Link>
              </div>
            </div>
            <div style={{ background: '#FFFCF8', borderRadius: '16px', padding: '24px', border: '1px solid #E8DDD0', boxShadow: '0 4px 20px rgba(42,33,24,0.07)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#2A2118', marginBottom: '8px' }}>VA Funding Fee Calculator</h3>
              <p style={{ fontSize: '12px', color: '#8C7B6E', lineHeight: 1.65, marginBottom: '16px' }}>Calculate your exact funding fee and estimated monthly payment.</p>
              <Link href="/tools/va-calculator" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3D6B5C', color: '#FFFCF8', fontSize: '13px', fontWeight: 700, padding: '11px', borderRadius: '6px', textDecoration: 'none' }}>Open Calculator</Link>
            </div>
            <div style={{ background: '#FFFCF8', borderRadius: '16px', padding: '24px', border: '1px solid #E8DDD0', boxShadow: '0 4px 20px rgba(42,33,24,0.07)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#2A2118', marginBottom: '16px' }}>Related articles</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { title: 'What Rising Rates Mean for Buyers', href: '/resources/rising-rates-eastern-wa' },
                  { title: 'USDA Loans in Stevens County', href: '/resources/usda-stevens-county' },
                  { title: 'The 20% Down Myth', href: '/resources/20-percent-down-myth' },
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