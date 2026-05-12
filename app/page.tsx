import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: '#F2EBE0',
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        minHeight: '560px',
        alignItems: 'stretch',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Dot grid texture */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: 0.045,
          backgroundImage: 'radial-gradient(circle, #2A2118 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
        }} />

        {/* Terracotta blob */}
        <div style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0,
          width: '380px',
          background: '#F5E8E1',
          zIndex: 0,
        }} />

        {/* Left content */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px 24px 64px 52px',
        }}>
          {/* Overline */}
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase' as const,
            color: '#B85C38',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
          }}>
            <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
            Eastern WA &amp; North Idaho
          </div>

          {/* H1 */}
          <h1 style={{
            fontSize: '58px',
            fontWeight: 800,
            color: '#2A2118',
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
          }}>
            The loan officer<br />
            who actually<br />
            <span style={{ color: '#B85C38' }}>knows homes.</span>
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: '16px',
            color: '#4A3728',
            lineHeight: 1.75,
            maxWidth: '100%',
            marginBottom: '32px',
          }}>
            I&rsquo;m not here to just get you a loan. I&rsquo;m here to find
            the right strategy that sets your family up for{' '}
            <strong style={{ color: '#2A2118', fontWeight: 700 }}>
              the life you actually want.
            </strong>
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '44px' }}>
            <Link href="/get-started/pre-approval" style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#B85C38',
              color: '#FFFCF8',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.01em',
              padding: '14px 30px',
              borderRadius: '6px',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(184,92,56,0.28)',
              transition: 'all 0.2s',
            }}>
              Get Pre-Approved
            </Link>
            <Link href="/get-started/schedule" style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'transparent',
              color: '#2A2118',
              fontSize: '14px',
              fontWeight: 700,
              padding: '13px 28px',
              borderRadius: '6px',
              border: '2px solid #2A2118',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}>
              Schedule a Call
            </Link>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: '28px',
            paddingTop: '28px',
            borderTop: '1px solid #D4C4B0',
            flexWrap: 'wrap',
          }}>
            {[
              { num: '20+', accent: '+', base: '20', label: 'Yrs Experience' },
              { num: '8+',  accent: '+', base: '8',  label: 'Loan Programs' },
              { num: '5',   accent: '★', base: '5',  label: 'Star Rated' },
              { num: 'WA & ID', accent: '', base: 'WA & ID', label: 'Licensed States' },
            ].map((stat, i, arr) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                <div>
                  <div style={{
                    fontSize: '30px',
                    fontWeight: 800,
                    color: '#2A2118',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}>
                    {stat.base}
                    <span style={{ color: '#B85C38' }}>{stat.accent}</span>
                  </div>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#8C7B6E',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase' as const,
                    marginTop: '3px',
                  }}>
                    {stat.label}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ width: '1px', background: '#D4C4B0', alignSelf: 'stretch' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right — headshot */}
        <div style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'stretch' }}>
          <Image
            src="/HeadshotEdit.jpg"
            alt="Jessie Boggs — Mortgage Loan Strategist"
            width={380}
            height={560}
            style={{
              width: '380px',
              height: '100%',
              minHeight: '560px',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              flexShrink: 0,
            }}
            priority
          />
          {/* Floating NMLS card */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '-185px',
            zIndex: 4,
            background: '#FFFCF8',
            borderRadius: '10px',
            padding: '14px 18px',
            boxShadow: '0 8px 32px rgba(42,33,24,0.18)',
            borderLeft: '4px solid #3D6B5C',
            minWidth: '175px',
          }}>
            <div style={{ fontSize: '10px', fontWeight: 700, color: '#3D6B5C', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '3px' }}>
              NMLS Licensed
            </div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: '#2A2118', letterSpacing: '-0.02em', lineHeight: 1 }}>
              #2803455
            </div>
            <div style={{ fontSize: '10px', color: '#8C7B6E', fontWeight: 500, marginTop: '2px' }}>
              Washington &amp; Idaho
            </div>
          </div>
        </div>

        {/* Mobile styles */}
        <style>{`
          @media (max-width: 768px) {
            .hero-section { grid-template-columns: 1fr !important; padding: 0 !important; }
          }
        `}</style>
      </section>

      {/* ── CREDENTIAL BAR ── */}
      <div style={{
        background: '#2A2118',
        padding: '12px 52px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
      }}>
        {[
          'NMLS #2803455',
          'Licensed in WA & ID',
          'Equal Housing Lender',
          'Powered by Edge Home Finance',
          'Spokane • CDA • Eastern WA',
        ].map((item, i, arr) => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#B85C38', flexShrink: 0 }} />
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#D4C4B0', letterSpacing: '0.07em', textTransform: 'uppercase' as const }}>
                {item}
              </span>
            </div>
            {i < arr.length - 1 && (
              <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.1)' }} />
            )}
          </div>
        ))}
      </div>

      {/* ── SOCIAL PROOF STRIP ── */}
      <div style={{
        background: '#F5E8E1',
        borderTop: '1px solid rgba(184,92,56,0.15)',
        borderBottom: '1px solid rgba(184,92,56,0.15)',
        padding: '20px 52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: '20px',
        flexWrap: 'wrap',
      }}>
{[
          { icon: '⚡', label: 'Same-Day Pre-Approvals' },
          { icon: '🏡', label: '$0 Down - VA & USDA' },
          { icon: '🔨', label: 'Construction & Renovation Loans' },
          { icon: '🤝', label: 'No Pressure Consultations' },
        ].map((item, i, arr) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '20px' }}>{item.icon}</span>
              <span style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#4A3728',
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
              }}>
                {item.label}
              </span>
            </div>
            {i < arr.length - 1 && (
              <div style={{ width: '1px', height: '36px', background: '#D4C4B0' }} />
            )}
          </div>
        ))}
      </div>
    {/* ── WAVE DIVIDER ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F5E8E1', fill: '#FAF6F0' }}>
        <path d="M0,0 C360,56 1080,56 1440,0 L1440,56 L0,56 Z" />
      </svg>

      {/* ── WHY JESSIE ── */}
      <section style={{ background: '#FAF6F0', padding: '80px 52px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '72px',
          alignItems: 'center',
        }}>
          {/* Photo left */}
          <div style={{ position: 'relative' }}>
            <Image
              src="/HeadshotEdit.jpg"
              alt="Jessie Boggs"
              width={560}
              height={500}
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                objectPosition: 'center top',
                borderRadius: '16px',
                boxShadow: '16px 16px 60px rgba(42,33,24,0.14)',
                display: 'block',
              }}
            />
            {/* Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              background: '#3D6B5C',
              color: '#FFFCF8',
              padding: '20px 24px',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(61,107,92,0.35)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '34px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
                20+
              </div>
              <div style={{
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.07em',
                textTransform: 'uppercase' as const,
                color: 'rgba(255,255,255,0.75)',
                marginTop: '4px',
                lineHeight: 1.4,
              }}>
                Years in Sales<br />&amp; Construction
              </div>
              <div style={{ width: '32px', height: '3px', background: 'rgba(255,255,255,0.35)', borderRadius: '2px', margin: '8px auto 0' }} />
            </div>
          </div>

          {/* Content right */}
          <div>
            {/* Overline */}
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase' as const,
              color: '#B85C38',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
              Why work with me
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: '44px',
              fontWeight: 800,
              color: '#2A2118',
              lineHeight: 1.06,
              letterSpacing: '-0.025em',
              marginBottom: '16px',
            }}>
              Built different.<br />
              <span style={{ color: '#B85C38' }}>By design.</span>
            </h2>

            <p style={{
              fontSize: '15px',
              color: '#4A3728',
              lineHeight: 1.78,
              marginBottom: '28px',
            }}>
              Most loan officers know mortgages. I know mortgages{' '}
              <em>and</em>{' '} I know homes. What a project actually costs,
              what&rsquo;s behind the walls, and which questions protect
              you at every step of the process.
            </p>

            {/* Value prop cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                {
                  icon: '📈',
                  bg: '#F5E8E1',
                  title: '20+ Years in Sales & Business',
                  text: 'From top-performing rep at two of the largest companies in the country to running a $15M construction company. I know how to work for you and how to get deals done.',
                },
                {
                  icon: '🏠',
                  bg: '#E4F0EC',
                  title: 'A Decade in Home Remodeling',
                  text: 'Nearly 10 years in residential remodeling means I understand homes at a level most loan officers never will. I look at a property the way a contractor does.',
                },
                {
                  icon: '📞',
                  bg: '#F5E8E1',
                  title: 'Personal Communication, Always',
                  text: 'When you call, you get me, not a call center. Real answers, fast responses, and a loan officer who actually picks up the phone when you call.',
                },
              ].map((prop) => (
                <div key={prop.title} style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '20px 22px',
                  background: '#FFFCF8',
                  borderRadius: '12px',
                  border: '1px solid #E8DDD0',
                  boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: prop.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}>
                    {prop.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#2A2118', marginBottom: '5px' }}>
                      {prop.title}
                    </div>
                    <div style={{ fontSize: '13px', color: '#4A3728', lineHeight: 1.65 }}>
                      {prop.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>{/* ── WAVE DIVIDER ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#FAF6F0', fill: '#2A2118' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── LOAN TYPES ── */}
      <section style={{ background: '#2A2118', padding: '80px 52px' }}>
        {/* Overline */}
        <div style={{
          fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase' as const, color: '#F5E8E1',
          display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
        }}>
          <span style={{ width: '28px', height: '2px', background: '#F5E8E1', display: 'block', flexShrink: 0 }} />
          Loan programs
        </div>

        {/* Heading */}
        <h2 style={{
          fontSize: '44px', fontWeight: 800, color: '#FFFCF8',
          lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '16px',
        }}>
          A solution for{' '}
          <span style={{ color: '#F5E8E1', fontStyle: 'italic' }}>every situation.</span>
        </h2>

        <p style={{
          fontSize: '15px', color: 'rgba(250,246,240,0.72)', lineHeight: 1.78,
          maxWidth: '545px', marginBottom: '44px',
        }}>
          From your first home to your forever home and every unique situation
          in between. I don&rsquo;t just hand you the most common product.
          I find the right one for your life.
        </p>

        {/* Loan cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }}>
          {[
            {
              tag: 'Most Popular', tagBg: '#F5E8E1', tagColor: '#8F4228',
              topColor: '#B85C38', name: 'Conventional',
              desc: 'Flexible terms and competitive rates for well-qualified buyers with solid credit and a down payment to work with.',
            },
            {
              tag: 'Zero Down', tagBg: '#E4F0EC', tagColor: '#2E5245',
              topColor: '#3D6B5C', name: 'VA Loans',
              desc: 'You served. Zero down, no PMI, and some of the best rates available. Let your benefit work for you.',
            },
            {
              tag: 'Rural Eligible', tagBg: '#E4F0EC', tagColor: '#2E5245',
              topColor: '#4E8572', name: 'USDA Rural',
              desc: 'Zero down financing for eligible Eastern WA and North Idaho areas. More places qualify than you\'d think.',
            },
            {
              tag: 'Low Down', tagBg: '#F5E8E1', tagColor: '#8F4228',
              topColor: '#CC6E49', name: 'FHA Loans',
              desc: 'A strong path to homeownership for buyers building credit or working toward a larger down payment.',
            },
            {
              tag: 'My Specialty', tagBg: '#E4F0EC', tagColor: '#2E5245',
              topColor: '#3D6B5C', name: 'Construction & Renovation',
              desc: 'Building from the ground up or renovating an existing home? Finance it all in one loan with someone who actually knows construction.',
            },
            {
              tag: 'High Value', tagBg: '#F5E8E1', tagColor: '#8F4228',
              topColor: '#A89278', name: 'Jumbo Loans',
              desc: 'Purchasing above conventional limits? Competitive rates and flexible options for higher-value properties.',
            },
            {
              tag: 'Flexible', tagBg: '#E4F0EC', tagColor: '#2E5245',
              topColor: '#3D6B5C', name: 'Self-Employed',
              desc: 'Bank statement and other programs built for how your income is actually structured. Your business is an asset.',
            },
            {
              tag: 'Get Help', tagBg: '#F5E8E1', tagColor: '#8F4228',
              topColor: '#B85C38', name: 'Down Payment Assistance',
              desc: 'Washington and Idaho both offer DPA programs that can cover part or all of your down payment. You may qualify and not even know it.',
            },
          ].map((loan) => (
            <a key={loan.name} className="loan-card-link" href={`/loan-types/${loan.name.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                background: '#FFFCF8',
                border: '1px solid #E8DDD0',
                borderRadius: '12px',
                padding: '24px 20px',
                borderTop: `3px solid ${loan.topColor}`,
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                boxShadow: '0 2px 12px rgba(42,33,24,0.08)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              <div style={{
                fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase' as const, padding: '3px 9px',
                borderRadius: '4px', display: 'inline-block', marginBottom: '12px',
                background: loan.tagBg, color: loan.tagColor,
              }}>
                {loan.tag}
              </div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#2A2118', marginBottom: '7px' }}>
                {loan.name}
              </div>
              <div style={{ fontSize: '12px', color: '#8C7B6E', lineHeight: 1.6, marginBottom: '14px' }}>
                {loan.desc}
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: loan.topColor }}>
                Learn more →
              </div>
            </a>
          ))}
        </div>
      <style>{`
          .loan-card-link { transition: transform 0.2s, box-shadow 0.2s; }
          .loan-card-link:hover { transform: translateY(-6px); box-shadow: 0 18px 48px rgba(42,33,24,0.16) !important; }
        `}</style></section>
        {/* ── WAVE DIVIDER ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#2A2118', fill: '#F2EBE0' }}>
        <path d="M0,0 C360,56 1080,56 1440,0 L1440,56 L0,56 Z" />
      </svg>

      {/* ── PROCESS ── */}
      <section style={{ background: '#F2EBE0', padding: '80px 52px' }}>
        {/* Header centered */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
          <div style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase' as const, color: '#3D6B5C',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '14px',
          }}>
            <span style={{ width: '28px', height: '2px', background: '#3D6B5C', display: 'block', flexShrink: 0 }} />
            The process
            <span style={{ width: '28px', height: '2px', background: '#3D6B5C', display: 'block', flexShrink: 0 }} />
          </div>
          <h2 style={{
            fontSize: '44px', fontWeight: 800, color: '#2A2118',
            lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '16px',
          }}>
            Simple. Straightforward.{' '}
            <span style={{ color: '#3D6B5C' }}>Yours.</span>
          </h2>
          <p style={{ fontSize: '15px', color: '#4A3728', lineHeight: 1.75 }}>
            From our first conversation to keys in hand. Here&rsquo;s how it works when you work with me.
          </p>
        </div>

        {/* Steps card */}
        <div style={{
          background: '#3D2E22',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(42,33,24,0.25)',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          position: 'relative',
        }}>
          {/* Top gradient bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
            background: 'linear-gradient(90deg, #B85C38, #3D6B5C, #B85C38)',
          }} />

          {[
            {
              step: '01',
              pillBg: 'rgba(184,92,56,0.2)', pillColor: '#F5E8E1',
              label: 'Step 01',
              title: 'Connect & Strategize',
              text: 'We talk through your goals, timeline, and situation. No jargon, no pressure, just a real conversation about what\'s possible for your family right now.',
            },
            {
              step: '02',
              pillBg: 'rgba(61,107,92,0.3)', pillColor: '#8FCBBF',
              label: 'Step 02',
              title: 'Get Pre-Approved',
              text: 'Fast pre-approvals that give you a genuine competitive edge. Know your buying power before you fall in love with a home.',
            },
            {
              step: '03',
              pillBg: 'rgba(184,92,56,0.2)', pillColor: '#F5E8E1',
              label: 'Step 03',
              title: 'Close with Confidence',
              text: 'I stay in your corner from application to keys in hand. You\'ll always know exactly where your loan stands, no surprises, ever.',
            },
          ].map((step, i, arr) => (
            <div key={step.step} style={{
              padding: '40px 36px',
              borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              position: 'relative',
            }}>
              {/* Big background number */}
              <div style={{
                fontSize: '80px', fontWeight: 800,
                color: 'rgba(250,246,240,0.25)',
                lineHeight: 1, letterSpacing: '-0.05em',
                marginBottom: '4px',
              }}>
                {step.step}
              </div>
              {/* Pill */}
              <div style={{
                display: 'inline-block', fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase' as const,
                padding: '5px 12px', borderRadius: '20px', marginBottom: '14px',
                background: step.pillBg, color: step.pillColor,
              }}>
                {step.label}
              </div>
              <div style={{ fontSize: '17px', fontWeight: 700, color: '#FFFCF8', marginBottom: '10px' }}>
                {step.title}
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(250,246,240,0.62)', lineHeight: 1.72 }}>
                {step.text}
              </div>
            </div>
          ))}
        </div>
      </section>
        </>
  );
}