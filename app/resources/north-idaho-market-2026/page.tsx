import Link from 'next/link';

export default function NorthIdahoMarket2026() {
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
            Market Update
          </div>
          <h1 style={{
            fontSize: '48px', fontWeight: 800, color: '#2A2118',
            lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '20px',
          }}>
            North Idaho Real Estate in 2026: What Buyers Need to Know
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' as const }}>
            <span style={{ fontSize: '13px', color: '#8C7B6E' }}>March 2026</span>
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
              { type: 'p', text: 'North Idaho has been one of the more closely watched real estate markets in the Pacific Northwest over the past several years. The combination of natural beauty, lower cost of living compared to western Washington and Oregon, and remote work flexibility drove a significant wave of in-migration that reshaped the market between 2020 and 2023. That wave has settled, and the market today looks quite different from the frenzy buyers encountered two years ago.' },
              { type: 'p', text: 'Here is an honest look at what is happening in the key communities of the Idaho Panhandle right now and what it means if you are considering buying.' },
              { type: 'h2', text: 'Coeur d\'Alene and Post Falls' },
              { type: 'p', text: 'These two markets saw the most dramatic appreciation during the migration surge and they have also seen the most significant correction. Prices that felt astronomical in 2022 have come down meaningfully, though they remain elevated compared to pre-pandemic levels. Inventory has improved and buyers are no longer competing against a dozen offers on every listing.' },
              { type: 'p', text: 'That said, Coeur d\'Alene in particular continues to attract buyers from higher cost markets who see Idaho pricing as a relative bargain. The lake town appeal, the proximity to outdoor recreation, and the established amenity base make it a destination that holds value well. Buyers who can be selective in this market are in a better position than they were 18 months ago.' },
              { type: 'p', text: 'Post Falls has become increasingly popular as a more affordable alternative to CDA. Prices are lower, the commute into Coeur d\'Alene is short, and the community has its own growing commercial and retail base. For families prioritizing value per square foot, Post Falls is worth a close look.' },
              { type: 'h2', text: 'Sandpoint and Bonner County' },
              { type: 'p', text: 'Sandpoint is a different animal from the rest of North Idaho. It functions almost as a resort community with Lake Pend Oreille and the Schweitzer Mountain Resort drawing buyers from across the country who want a second home or a lifestyle-driven primary residence. Prices in Sandpoint proper are among the highest in the Idaho Panhandle and inventory is limited.' },
              { type: 'p', text: 'The surrounding communities in Bonner County, including Hope, Clark Fork, and Priest River, offer a very different value proposition. More land, lower prices, and the same general proximity to the lake and mountains. For buyers who are drawn to the area but not to Sandpoint price points, it is worth exploring the county more broadly.' },
              { type: 'h2', text: 'Hayden, Rathdrum, and Athol' },
              { type: 'p', text: 'These communities north of Coeur d\'Alene have absorbed a significant amount of buyer demand from people who wanted North Idaho but were priced out of or crowded out of CDA and Post Falls. New construction has been active in this corridor and buyers have had more options and more negotiating power than in the established markets to the south.' },
              { type: 'p', text: 'One thing worth knowing is that many of these communities fall within USDA eligible zones. If you are looking in this area and have not explored zero down financing, it is worth checking your specific address. The eligibility boundaries can be surprising and what looks like a suburban community is often still on the USDA map.' },
              { type: 'h2', text: 'Financing in Idaho as a Washington licensed loan officer' },
              { type: 'p', text: 'I am licensed in both Washington and Idaho, which means I can originate loans for properties in the Idaho Panhandle directly. You do not need to find a separate Idaho loan officer. The process works the same way and I am familiar with the specific programs and requirements that apply to Idaho properties.' },
              { type: 'p', text: 'One thing that varies from Washington is the property tax structure and some of the USDA income limit calculations. Those differences are not significant but they are worth knowing about before you start comparing payment estimates across state lines.' },
              { type: 'h2', text: 'What I am telling buyers right now' },
              { type: 'p', text: 'If you have been watching North Idaho and waiting for things to cool off, a lot of the cooling has already happened. This is not the frenzied market of 2021 and 2022. There is inventory, there is room to negotiate, and sellers have more realistic expectations than they did when multiple offer situations were the norm.' },
              { type: 'p', text: 'The buyers I am working with in North Idaho right now are taking their time, being selective, and making offers that make financial sense for them. That is the right approach. If you want to talk through a specific community or price range, I am happy to have that conversation and give you my honest read on what the market looks like for your situation.' },
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
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFCF8', marginBottom: '10px' }}>Buying in North Idaho?</h3>
              <p style={{ fontSize: '13px', color: 'rgba(250,246,240,0.7)', lineHeight: 1.65, marginBottom: '20px' }}>
                I am licensed in Idaho and know this market. Let me show you what you qualify for.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/get-started/pre-approval" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#B85C38', color: '#FFFCF8', fontSize: '13px', fontWeight: 700, padding: '12px', borderRadius: '6px', textDecoration: 'none' }}>Get Pre-Approved</Link>
                <Link href="/get-started/schedule" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: '#D4C4B0', fontSize: '13px', fontWeight: 700, padding: '11px', borderRadius: '6px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.2)' }}>Schedule a Call</Link>
              </div>
            </div>
            <div style={{ background: '#FFFCF8', borderRadius: '16px', padding: '24px', border: '1px solid #E8DDD0', boxShadow: '0 4px 20px rgba(42,33,24,0.07)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#2A2118', marginBottom: '8px' }}>Check USDA eligibility</h3>
              <p style={{ fontSize: '12px', color: '#8C7B6E', lineHeight: 1.65, marginBottom: '16px' }}>Many North Idaho communities qualify for zero down USDA financing. Let me check your address.</p>
              <Link href="/loan-types/usda-rural" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3D6B5C', color: '#FFFCF8', fontSize: '13px', fontWeight: 700, padding: '11px', borderRadius: '6px', textDecoration: 'none' }}>Learn About USDA</Link>
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