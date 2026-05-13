import Image from 'next/image';
import Link from 'next/link';
export const metadata = {
  title: 'About Jessie Boggs | Mortgage Loan Strategist NMLS #2803455',
  description: '20+ years in sales and a decade in residential construction. Jessie Boggs is a mortgage loan strategist serving Eastern WA and North Idaho. Licensed WA & ID.',
};
export default function About() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="about-hero" style={{
        background: '#F2EBE0',
        padding: '0',
        display: 'grid',
        gridTemplateColumns: '1fr 480px',
        minHeight: '560px',
        alignItems: 'stretch',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Dot texture */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, opacity: 0.045,
          backgroundImage: 'radial-gradient(circle, #2A2118 1px, transparent 1px)',
          backgroundSize: '24px 24px', pointerEvents: 'none',
        }} />

        {/* Left content */}
        <div className="about-hero-content" style={{
          position: 'relative', zIndex: 3,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '72px 52px',
        }}>
          <div style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase' as const, color: '#B85C38',
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
          }}>
            <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
            About Jessie
          </div>
          <h1 style={{
            fontSize: '52px', fontWeight: 800, color: '#2A2118',
            lineHeight: 1.04, letterSpacing: '-0.03em', marginBottom: '20px',
          }}>
            More than a mortgage.<br />
            <span style={{ color: '#B85C38' }}>A strategy for the</span><br />
            <span style={{ color: '#B85C38' }}>life you actually want.</span>
          </h1>
          <p style={{
            fontSize: '16px', color: '#4A3728', lineHeight: 1.75, maxWidth: '480px', marginBottom: '36px',
          }}>
            I&rsquo;m Jessie Boggs, mortgage loan strategist, Eastern Washington local,
            and someone who got into this business for the same reason most of my
            clients come to me: family.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/get-started/pre-approval" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#B85C38', color: '#FFFCF8',
              fontSize: '14px', fontWeight: 700, padding: '14px 28px',
              borderRadius: '6px', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
            }}>
              Get Pre-Approved
            </Link>
            <Link href="/get-started/schedule" style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'transparent', color: '#2A2118',
              fontSize: '14px', fontWeight: 700, padding: '13px 28px',
              borderRadius: '6px', textDecoration: 'none',
              border: '2px solid #2A2118',
            }}>
              Schedule a Call
            </Link>
          </div>
        </div>

        {/* Right -- hero photo */}
        <div className="about-hero-photo" style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'stretch' }}>
          <Image
            src="/MeStandingOutside.png"
            alt="Jessie Boggs — Mortgage Loan Strategist"
            width={480}
            height={560}
            style={{
              width: '480px', height: '100%', minHeight: '560px',
              objectFit: 'cover', objectPosition: 'center top',
              display: 'block', flexShrink: 0,
            }}
            priority
          />
        </div>
      </section>

      {/* ── WAVE DIVIDER ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#FAF6F0' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── MY STORY ── */}
      <section style={{ background: '#FAF6F0', padding: '80px 52px' }}>
        <div className="about-story-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '72px', alignItems: 'flex-start',
        }}>
          {/* Left -- working photo */}
          <div style={{ position: 'relative' }}>
            <Image
              src="/MeSittingOutside.png"
              alt="Jessie Boggs sitting outside"
              width={560}
              height={600}
              className="about-story-photo"
              style={{
                width: '100%', height: '540px',
                objectFit: 'cover', objectPosition: 'center 20%',
                borderRadius: '16px',
                boxShadow: '16px 16px 60px rgba(42,33,24,0.14)',
                display: 'block',
              }}
            />
            {/* Credential badge */}
            <div style={{
              position: 'absolute', bottom: '-20px', right: '-20px',
              background: '#3D6B5C', color: '#FFFCF8',
              padding: '18px 22px', borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(61,107,92,0.35)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                NMLS Licensed
              </div>
              <div style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>
                #2803455
              </div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.65)', marginTop: '3px' }}>
                Washington &amp; Idaho
              </div>
            </div>
          </div>

          {/* Right -- story text */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#B85C38',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
              My story
            </div>
            <h2 style={{
              fontSize: '40px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '24px',
            }}>
              Why I do this.
            </h2>

            {[
              `I've been in sales since I was 16 years old. Started at a shop selling fireplaces, patio furniture, grills, and hot tubs. I had no idea at the time that it was the beginning of a 20-year career built entirely around understanding what people need and helping them get it.`,
              `From there I went on to become a top-performing rep at two of the largest companies in the country. But the work that really shaped who I am professionally came when I found my way into the home remodeling industry. I started in sales, then moved into operations, helping grow a company to $15 million a year in revenue. Then I went out on my own and built my own remodeling company from scratch.`,
              `But construction is demanding. 12-hour days, weekends on job sites, constant pressure. I have three stepsons, one with special needs, and a wife who needed me present, not just financially. When we made the decision to move our family from western Washington to Eastern Washington, something became clear: this was the moment to make a change.`,
              `Mortgage was the answer. The same skills I built over two decades transferred directly. And my decade in remodeling turned out to be something most loan officers can never offer: I actually understand homes. I know what a renovation costs, what an appraisal gap means, what to look for in a property. That knowledge protects my clients in ways that go beyond the loan.`,
              `I got into mortgages to be home more. The reason I stay is because I found work I am genuinely proud of, helping families in Eastern Washington and North Idaho build the life they actually want, one smart financial decision at a time.`,
            ].map((para, i) => (
              <p key={i} style={{
                fontSize: '15px', color: '#4A3728', lineHeight: 1.8,
                marginBottom: i < 4 ? '18px' : '0',
              }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAVE DIVIDER ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#FAF6F0', fill: '#2A2118' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── THE STRATEGIST DIFFERENCE ── */}
      <section style={{ background: '#2A2118', padding: '80px 52px' }}>
        <div className="about-strategist-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '72px', alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#F5E8E1',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#F5E8E1', display: 'block', flexShrink: 0 }} />
              The strategist difference
            </div>
            <h2 style={{
              fontSize: '40px', fontWeight: 800, color: '#FFFCF8',
              lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '24px',
            }}>
              I&rsquo;m not just processing<br />
              your loan.{' '}
              <span style={{ color: '#F5E8E1', fontStyle: 'italic' }}>I&rsquo;m building<br />your strategy.</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(250,246,240,0.75)', lineHeight: 1.8, marginBottom: '18px' }}>
              A lot of loan officers will take your application, find a rate, and get you to closing.
              That&rsquo;s a transaction. That&rsquo;s not what I do.
            </p>
            <p style={{ fontSize: '15px', color: 'rgba(250,246,240,0.75)', lineHeight: 1.8, marginBottom: '18px' }}>
              I start every client relationship with a conversation about where you&rsquo;re trying to go,
              not just what house you want to buy. What does your financial picture look like in five years?
              Is this a starter home or a forever home? Are you planning to renovate?
            </p>
            <p style={{ fontSize: '15px', color: 'rgba(250,246,240,0.75)', lineHeight: 1.8 }}>
              Those answers change which product is right for you. Getting them right at the beginning
              is the difference between a loan that just works and a loan that actually works for you.
              That&rsquo;s what I mean when I say I&rsquo;m a mortgage strategist.
            </p>
          </div>

          {/* Credentials grid */}
          <div className="about-creds-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {[
              { num: '20+', label: 'Years in Sales & Business', icon: '📈' },
              { num: '10+', label: 'Years in Home Remodeling', icon: '🏠' },
              { num: '$15M', label: 'Revenue Managed', icon: '💼' },
              { num: 'WA & ID', label: 'Licensed States', icon: '📋' },
            ].map((cred) => (
              <div key={cred.label} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px', padding: '24px 20px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{cred.icon}</div>
                <div style={{
                  fontSize: '28px', fontWeight: 800, color: '#FFFCF8',
                  letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '6px',
                }}>
                  {cred.num}
                </div>
                <div style={{
                  fontSize: '11px', fontWeight: 600, color: 'rgba(250,246,240,0.6)',
                  letterSpacing: '0.06em', textTransform: 'uppercase' as const, lineHeight: 1.4,
                }}>
                  {cred.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAVE DIVIDER ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#2A2118', fill: '#1F3D32' }}>
        <path d="M0,0 C360,56 1080,56 1440,0 L1440,56 L0,56 Z" />
      </svg>

      {/* ── FAMILY SECTION ── */}
      <section style={{ background: '#1F3D32', padding: '80px 52px' }}>
        <div className="about-family-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '72px', alignItems: 'center',
        }}>
          {/* Photos grid */}
          <div className="about-photos-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {/* Rainier mountain shot -- large */}
            <div style={{ gridColumn: '1 / -1' }}>
              <Image
                src="/MeWifeMountain.jpg"
                alt="Jessie and Bri at Mt Rainier"
                width={600}
                height={300}
                style={{
                  width: '100%', height: '260px',
                  objectFit: 'cover', objectPosition: 'center 38%',
                  borderRadius: '12px', display: 'block',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                }}
              />
            </div>
            {/* Woods B&W */}
            <Image
              src="/MeWifeWoods.jpg"
              alt="Jessie and Bri"
              width={280}
              height={200}
              style={{
                width: '100%', height: '200px',
                objectFit: 'cover', objectPosition: 'center 60%',
                borderRadius: '12px', display: 'block',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
            />
            {/* Family wedding -- smaller so faces less prominent */}
            <Image
              src="/WeddingFamily.jpg"
              alt="Jessie and his family"
              width={280}
              height={200}
              style={{
                width: '100%', height: '200px',
                objectFit: 'cover', objectPosition: 'center 32%',
                borderRadius: '12px', display: 'block',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
            />
          </div>

          {/* Text */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#F5E8E1',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#F5E8E1', display: 'block', flexShrink: 0 }} />
              Outside the office
            </div>
            <h2 style={{
              fontSize: '40px', fontWeight: 800, color: '#FFFCF8',
              lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '24px',
            }}>
              Eastern WA is{' '}
              <span style={{ color: '#8FCBBF', fontStyle: 'italic' }}>home.</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(250,246,240,0.78)', lineHeight: 1.8, marginBottom: '18px' }}>
              When I&rsquo;m not working, I&rsquo;m exactly where I moved out here to be. Home.
              I have three stepsons who keep life interesting and a wife, Bri, who runs her own
              consulting practice focused on special education and advocacy.
            </p>
            <p style={{ fontSize: '15px', color: 'rgba(250,246,240,0.78)', lineHeight: 1.8, marginBottom: '18px' }}>
              We made the move from western Washington to the Elk area outside Spokane a couple
              of years ago and haven&rsquo;t looked back. Eastern Washington and North Idaho are
              genuinely special places. The pace of life, the landscape, the community.
            </p>
            <p style={{ fontSize: '15px', color: 'rgba(250,246,240,0.78)', lineHeight: 1.8 }}>
              It&rsquo;s the kind of place you move to on purpose. That&rsquo;s exactly what we did,
              and it&rsquo;s part of why I&rsquo;m so committed to helping families here
              find their footing.
            </p>
          </div>
        </div>
      </section>

      {/* ── WAVE DIVIDER ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#1F3D32', fill: '#F2EBE0' }}>
        <path d="M0,0 C360,56 1080,56 1440,0 L1440,56 L0,56 Z" />
      </svg>

      {/* ── HIKE PHOTO FULL WIDTH ── */}
      <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
        <Image
          src="/BridgeHikeSpokane.jpg"
          alt="Spokane River hiking trail"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
        />
        {/* Overlay */}
        <div className="about-cta-overlay" style={{
          position: 'absolute', inset: 0,
          background: 'rgba(42,33,24,0.55)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: '20px', padding: '40px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: '42px', fontWeight: 800, color: '#FFFCF8',
            lineHeight: 1.06, letterSpacing: '-0.025em', maxWidth: '600px',
          }}>
            Ready to build your strategy?
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.82)', maxWidth: '480px', lineHeight: 1.7 }}>
            Let&rsquo;s talk through your options. No pressure, no jargon,
            just real answers.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/get-started/pre-approval" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#B85C38', color: '#FFFCF8',
              fontSize: '14px', fontWeight: 700, padding: '14px 28px',
              borderRadius: '6px', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(184,92,56,0.4)',
            }}>
              Get Pre-Approved
            </Link>
            <Link href="/get-started/schedule" style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'transparent', color: '#FFFCF8',
              fontSize: '14px', fontWeight: 700, padding: '13px 28px',
              borderRadius: '6px', textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.5)',
            }}>
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>

      {/* ── FOOTER SPACER / COMPLIANCE ── */}
      <div style={{
        background: '#F2EBE0', padding: '48px 52px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <p style={{
          fontSize: '10px', color: '#8C7B6E', textAlign: 'center',
          lineHeight: 1.8, maxWidth: '600px',
        }}>
          Jessie Boggs NMLS #2803455 | Licensed in Washington and Idaho |
          Powered by Edge Home Finance Corporation NMLS #891464 |
          Equal Housing Lender
        </p>
      </div>
    </>
  );
}