import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section" style={{
        background: '#F2EBE0',
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        minHeight: '560px',
        alignItems: 'stretch',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Dot grid texture */}
        <div className="hero-content" style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: 0.045,
          backgroundImage: 'radial-gradient(circle, #2A2118 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
        }} />

        {/* Terracotta blob */}
        <div className="hero-blob" style={{
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
          <h1 className="hero-h1" style={{
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
          <div className="hero-btns" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '44px' }}>
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
          <div className="hero-stats" style={{
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
        <div className="hero-photo-col" style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'stretch' }}>
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
          <div className="hero-nmls-card" style={{
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
        <div className="why-grid" style={{
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
                objectPosition: 'center 40%',
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
        <div className="loans-grid" style={{
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
        <div className="process-steps" style={{
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
            <div key={step.step} className="process-step" style={{
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
        {/* ── WAVE DIVIDER ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#1F3D32' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: '#1F3D32', padding: '80px 52px' }}>
        {/* Overline */}
        <div style={{
          fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase' as const, color: '#F5E8E1',
          display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
        }}>
          <span style={{ width: '28px', height: '2px', background: '#F5E8E1', display: 'block', flexShrink: 0 }} />
          Client stories
        </div>

        <h2 style={{
          fontSize: '44px', fontWeight: 800, color: '#FFFCF8',
          lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '16px',
        }}>
          Real people.{' '}
          <span style={{ color: '#F5E8E1', fontStyle: 'italic' }}>Real results.</span>
        </h2>

        <p style={{
          fontSize: '15px', color: 'rgba(250,246,240,0.7)', lineHeight: 1.78,
          maxWidth: '560px', marginBottom: '48px',
        }}>
          Don&rsquo;t take my word for it. Here&rsquo;s what clients have said about working with me.
        </p>

        {/* Testimonial grid */}
        <div className="testi-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}>
          {[
            {
              border: '#B85C38',
              quote: 'Jessie made the whole process feel effortless. He was upfront about everything, answered every question, and we closed ahead of schedule. His knowledge of homes, not just loans, made us feel like we had exactly the right person in our corner.',
              name: 'Sarah M.',
              location: 'Spokane Valley, WA',
            },
            {
              border: '#3D6B5C',
              quote: 'As a veteran I wanted someone who knew the VA loan process cold. Jessie walked us through every step, saved us thousands, and the communication was outstanding the whole way through.',
              name: 'Marcus & Danielle T.',
              location: 'Coeur d\'Alene, ID',
            },
            {
              border: '#3D6B5C',
              quote: 'First-time buyers with a million questions. Jessie never made us feel rushed or overwhelmed. The USDA loan he found us meant we could actually afford the home we wanted in Stevens County.',
              name: 'Tyler & Megan R.',
              location: 'Chewelah, WA',
            },
            {
              border: '#B85C38',
              quote: 'I have referred several clients to Jessie and every single one has come back to thank me. He communicates proactively, keeps deals on track, and treats every client like a priority. That is rare in this business.',
              name: 'Jennifer K.',
              location: 'Realtor — Spokane, WA',
            },
          ].map((t) => (
            <div key={t.name} style={{
              background: '#FFFCF8',
              border: '1px solid #E8DDD0',
              borderRadius: '12px',
              padding: '28px',
              borderLeft: `4px solid ${t.border}`,
              boxShadow: '0 4px 20px rgba(42,33,24,0.1)',
            }}>
              {/* Stars */}
              <div style={{ color: '#B85C38', fontSize: '15px', letterSpacing: '2px', marginBottom: '14px' }}>
                ★★★★★
              </div>
              <p style={{
                fontSize: '14px', color: '#4A3728', lineHeight: 1.78,
                fontStyle: 'italic', marginBottom: '18px',
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#2A2118' }}>
                {t.name}
              </div>
              <div style={{ fontSize: '11px', color: '#8C7B6E', marginTop: '2px' }}>
                {t.location}
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder notice */}
        <p style={{
          fontSize: '12px', color: 'rgba(250,246,240,0.4)',
          textAlign: 'center', marginTop: '32px', fontStyle: 'italic',
        }}>
          * Placeholder reviews — replace with real client testimonials before launch
        </p>
      </section>
      {/* ── WAVE DIVIDER ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#1F3D32', fill: '#FAF6F0' }}>
        <path d="M0,0 C360,56 1080,56 1440,0 L1440,56 L0,56 Z" />
      </svg>

      {/* ── TOOLS CALLOUT ── */}
      <section style={{ background: '#FAF6F0', padding: '80px 52px' }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '20px', marginBottom: '44px',
        }}>
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#3D6B5C',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#3D6B5C', display: 'block', flexShrink: 0 }} />
              Free mortgage tools
            </div>
            <h2 style={{
              fontSize: '44px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '0',
            }}>
              Run the numbers{' '}
              <span style={{ color: '#3D6B5C' }}>before you commit.</span>
            </h2>
          </div>
          <Link href="/tools" style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#3D6B5C', color: '#FFFCF8',
            fontSize: '14px', fontWeight: 700, padding: '14px 28px',
            borderRadius: '6px', textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(61,107,92,0.28)',
            whiteSpace: 'nowrap' as const,
          }}>
            View All Tools
          </Link>
        </div>

        <p style={{
          fontSize: '15px', color: '#4A3728', lineHeight: 1.78,
          maxWidth: '620px', marginBottom: '44px',
        }}>
          Interactive calculators built for Eastern WA and North Idaho buyers.
          No email required. Just real numbers, right now.
        </p>

        <div className="tools-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}>
          {[
            {
              bg: '#E4F0EC', iconBg: 'rgba(61,107,92,0.15)', iconColor: '#3D6B5C',
              icon: '🧮', nameColor: '#2E5245',
              name: 'Mortgage Calculator',
              desc: 'Conventional, FHA, VA, USDA, and Jumbo all in one tool. Adjust rate, term, and down payment in real time.',
              href: '/tools/mortgage-calculator',
            },
            {
              bg: '#F5E8E1', iconBg: 'rgba(184,92,56,0.15)', iconColor: '#8F4228',
              icon: '🎖️', nameColor: '#8F4228',
              name: 'VA LGY Guaranty Calculator',
              desc: 'Calculate your exact VA guaranty, remaining entitlement, and funding fee based on your service record.',
              href: '/tools/va-calculator',
            },
            {
              bg: '#F5EFE8', iconBg: 'rgba(168,146,120,0.15)', iconColor: '#A89278',
              icon: '🏡', nameColor: '#3D2E22',
              name: 'Affordability Calculator',
              desc: 'Enter your income, debts, and down payment to get a real estimate of your purchase price range.',
              href: '/tools/affordability-calculator',
            },
            {
              bg: '#E4F0EC', iconBg: 'rgba(61,107,92,0.15)', iconColor: '#3D6B5C',
              icon: '⚖️', nameColor: '#2E5245',
              name: 'Loan Comparison Tool',
              desc: 'Side-by-side comparison of loan types on the same purchase price. See exactly what changes and why.',
              href: '/tools/loan-comparison',
            },
          ].map((tool) => (
            <Link key={tool.name} href={tool.href} style={{
              background: tool.bg,
              borderRadius: '12px',
              padding: '26px',
              display: 'flex',
              gap: '18px',
              alignItems: 'flex-start',
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid transparent',
              transition: 'border-color 0.2s, transform 0.2s',
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '10px',
                background: tool.iconBg, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                fontSize: '22px', flexShrink: 0,
              }}>
                {tool.icon}
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: tool.nameColor, marginBottom: '6px' }}>
                  {tool.name}
                </div>
                <div style={{ fontSize: '13px', color: '#4A3728', lineHeight: 1.65 }}>
                  {tool.desc}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WAVE DIVIDER ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#FAF6F0', fill: '#2E5245' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── FOR AGENTS ── */}
      <section style={{ background: '#2E5245', padding: '80px 52px' }}>
        <div className="agent-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#F5E8E1',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#F5E8E1', display: 'block', flexShrink: 0 }} />
              For real estate agents
            </div>
            <h2 style={{
              fontSize: '44px', fontWeight: 800, color: '#FFFCF8',
              lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '16px',
            }}>
              A partner who makes{' '}
              <span style={{ color: '#F5E8E1', fontStyle: 'italic' }}>you look good.</span>
            </h2>
            <p style={{
              fontSize: '15px', color: 'rgba(250,246,240,0.75)', lineHeight: 1.78, marginBottom: '32px',
            }}>
              I keep deals alive, communicate proactively, and treat your clients like my own.
              My remodeling background means I can navigate appraisal gaps that stop other loan officers cold.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '36px' }}>
              <Link href="/for-agents/referral" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#B85C38', color: '#FFFCF8',
                fontSize: '14px', fontWeight: 700, padding: '14px 28px',
                borderRadius: '6px', textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(184,92,56,0.3)',
              }}>
                Partner With Me
              </Link>
              <Link href="/for-agents/resources" style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'transparent', color: '#D4C4B0',
                fontSize: '14px', fontWeight: 700, padding: '13px 28px',
                borderRadius: '6px', textDecoration: 'none',
                border: '2px solid #D4C4B0',
              }}>
                Agent Resources
              </Link>
            </div>
            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { title: 'Same-Day Pre-Approvals', text: 'Your clients get the edge they need the moment they need it.' },
                { title: 'Proactive Communication', text: 'You will never chase me for a status update. I keep you in the loop at every milestone.' },
                { title: 'Shareable Client Resources', text: 'Market updates, buyer guides, and content your clients will actually read.' },
                { title: 'Construction Expertise', text: 'I evaluate properties through a contractor\'s eyes. That knowledge keeps deals alive.' },
              ].map((feat) => (
                <div key={feat.title} style={{
                  display: 'flex', gap: '12px', alignItems: 'flex-start',
                  padding: '16px 18px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(228,240,236,0.1)',
                  borderRadius: '10px',
                }}>
                  <span style={{ color: '#8FCBBF', fontSize: '16px', flexShrink: 0 }}>✓</span>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFCF8', marginBottom: '2px' }}>
                      {feat.title}
                    </div>
                    <div style={{ fontSize: '13px', color: 'rgba(228,240,236,0.68)', lineHeight: 1.6 }}>
                      {feat.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right -- CTA cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              background: '#FFFCF8', borderRadius: '12px', padding: '28px',
              border: '1px solid #E8DDD0',
              boxShadow: '0 6px 28px rgba(42,33,24,0.1)',
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#2A2118', marginBottom: '8px' }}>
                Refer a Client
              </h3>
              <p style={{ fontSize: '13px', color: '#4A3728', lineHeight: 1.7, marginBottom: '20px' }}>
                Have a buyer who is ready to go? Send them my way and I will take it from there,
                keeping you in the loop every step of the way.
              </p>
              <Link href="/for-agents/referral" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#B85C38', color: '#FFFCF8',
                fontSize: '14px', fontWeight: 700, padding: '12px 24px',
                borderRadius: '6px', textDecoration: 'none',
              }}>
                Submit a Referral
              </Link>
            </div>
            <div style={{
              background: '#FFFCF8', borderRadius: '12px', padding: '28px',
              border: '1px solid #E8DDD0', borderLeft: '4px solid #3D6B5C',
              boxShadow: '0 6px 28px rgba(42,33,24,0.1)',
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#2A2118', marginBottom: '8px' }}>
                Agent Resource Library
              </h3>
              <p style={{ fontSize: '13px', color: '#4A3728', lineHeight: 1.7, marginBottom: '20px' }}>
                Market updates, co-brandable buyer guides, and content you can share directly
                with your clients. Updated regularly so it is always current.
              </p>
              <Link href="/for-agents/resources" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#3D6B5C', color: '#FFFCF8',
                fontSize: '14px', fontWeight: 700, padding: '12px 24px',
                borderRadius: '6px', textDecoration: 'none',
              }}>
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE DIVIDER ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#2E5245', fill: '#2A2118' }}>
        <path d="M0,0 C360,56 1080,56 1440,0 L1440,56 L0,56 Z" />
      </svg>

      {/* ── SERVICE AREAS ── */}
      <section style={{ background: '#2A2118', padding: '80px 52px' }}>
        <div style={{
          fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase' as const, color: '#F5E8E1',
          display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
        }}>
          <span style={{ width: '28px', height: '2px', background: '#F5E8E1', display: 'block', flexShrink: 0 }} />
          Service area
        </div>
        <h2 style={{
          fontSize: '44px', fontWeight: 800, color: '#FFFCF8',
          lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '16px',
        }}>
          Eastern WA &amp;{' '}
          <span style={{ color: '#8FCBBF' }}>North Idaho.</span>
        </h2>
        <p style={{
          fontSize: '15px', color: 'rgba(250,246,240,0.7)', lineHeight: 1.78,
          maxWidth: '560px', marginBottom: '44px',
        }}>
          Local knowledge across the entire region. From Spokane to the Idaho Panhandle
          and everywhere in between. I know these communities because I live here.
        </p>
        <div className="areas-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
        }}>
          {[
            { name: 'Spokane',        state: 'WA', stateBg: '#8F4228' },
            { name: 'Spokane Valley', state: 'WA', stateBg: '#8F4228' },
            { name: 'Coeur d\'Alene', state: 'ID', stateBg: '#2E5245' },
            { name: 'Post Falls',     state: 'ID', stateBg: '#2E5245' },
            { name: 'Deer Park',       state: 'WA', stateBg: '#8F4228' },
            { name: 'Newport', state: 'WA', stateBg: '#8F4228' },
            { name: 'Sandpoint',      state: 'ID', stateBg: '#2E5245' },
            { name: 'Hayden',         state: 'ID', stateBg: '#2E5245' },
            { name: 'Liberty Lake',   state: 'WA', stateBg: '#8F4228' },
            { name: 'Airway Heights',       state: 'WA', stateBg: '#8F4228' },
            { name: 'Rathdrum',       state: 'ID', stateBg: '#2E5245' },
            { name: 'Athol',    state: 'ID', stateBg: '#2E5245' },
          ].map((area) => (
            <div key={area.name} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(212,196,176,0.2)',
              borderRadius: '10px',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#D4C4B0' }}>
                {area.name}
              </span>
              <span style={{
                fontSize: '10px', fontWeight: 700, color: '#FFFCF8',
                background: area.stateBg, padding: '2px 8px',
                borderRadius: '4px', letterSpacing: '0.06em',
              }}>
                {area.state}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WAVE DIVIDER ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#2A2118', fill: '#F2EBE0' }}>
        <path d="M0,0 C360,56 1080,56 1440,0 L1440,56 L0,56 Z" />
      </svg>

      {/* ── BLOG PREVIEW ── */}
      <section style={{ background: '#F2EBE0', padding: '80px 52px' }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between', flexWrap: 'wrap',
          gap: '20px', marginBottom: '48px',
        }}>
          <div>
            <div style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase' as const, color: '#B85C38',
              display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
            }}>
              <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
              Resources &amp; insights
            </div>
            <h2 style={{
              fontSize: '44px', fontWeight: 800, color: '#2A2118',
              lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: '0',
            }}>
              Stay <span style={{ color: '#B85C38', fontStyle: 'italic' }}>informed.</span>
            </h2>
          </div>
          <Link href="/resources" style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'transparent', color: '#2A2118',
            fontSize: '14px', fontWeight: 700, padding: '13px 28px',
            borderRadius: '6px', textDecoration: 'none',
            border: '2px solid #2A2118',
            whiteSpace: 'nowrap' as const,
          }}>
            View All Articles
          </Link>
        </div>

        <div className="blog-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {[
            {
              thumbBg: '#F5E8E1', thumbBorder: '#B85C38', thumbColor: '#8F4228',
              cat: 'Market Update',
              title: 'What Rising Rates Really Mean for Eastern WA Buyers Right Now',
              date: 'May 2026', read: '4 min read',
              href: '/resources/blog/rates-eastern-wa',
            },
            {
              thumbBg: '#E4F0EC', thumbBorder: '#3D6B5C', thumbColor: '#2E5245',
              cat: 'VA Loans',
              title: 'The VA Loan Advantage: Why It\'s Still the Best Deal in Mortgage',
              date: 'May 2026', read: '5 min read',
              href: '/resources/blog/va-loan-advantage',
            },
            {
              thumbBg: '#F5EFE8', thumbBorder: '#A89278', thumbColor: '#A89278',
              cat: 'First-Time Buyers',
              title: 'USDA Loans in Stevens County: Zero Down in More Places Than You Think',
              date: 'April 2026', read: '3 min read',
              href: '/resources/blog/usda-stevens-county',
            },
          ].map((post) => (
            <Link key={post.title} href={post.href} style={{
              background: '#FFFCF8',
              border: '1px solid #E8DDD0',
              borderRadius: '12px',
              overflow: 'hidden',
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              boxShadow: '0 4px 20px rgba(42,33,24,0.07)',
            }}>
              <div style={{
                height: '120px',
                background: post.thumbBg,
                borderBottom: `3px solid ${post.thumbBorder}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', fontWeight: 700, letterSpacing: '0.06em',
                textTransform: 'uppercase' as const, color: post.thumbColor,
              }}>
                {post.cat}
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#2A2118', lineHeight: 1.45, marginBottom: '8px' }}>
                  {post.title}
                </div>
                <div style={{ fontSize: '11px', color: '#8C7B6E' }}>
                  {post.date} &bull; {post.read}
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#B85C38', marginTop: '12px' }}>
                  Read more &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WAVE DIVIDER ── */}
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none"
        style={{ width: '100%', height: '56px', display: 'block', marginBottom: '-2px', background: '#F2EBE0', fill: '#B85C38' }}>
        <path d="M0,56 C480,0 960,0 1440,56 L1440,56 L0,56 Z" />
      </svg>

      {/* ── CTA BAND ── */}
      <section style={{
        background: '#B85C38', padding: '80px 52px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Dot texture */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.07, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(250,246,240,1) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{
            fontSize: '44px', fontWeight: 800, color: '#FFFCF8',
            lineHeight: 1.06, letterSpacing: '-0.025em',
          }}>
            Ready to make{' '}
            <span style={{ color: '#2A2118' }}>your move?</span>
          </h2>
          <p style={{
            fontSize: '16px', color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.7, marginTop: '10px', maxWidth: '480px',
          }}>
            No pressure, no jargon. Just real answers from someone who knows
            this market inside and out.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
          <Link href="/get-started/pre-approval" style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#2A2118', color: '#FFFCF8',
            fontSize: '14px', fontWeight: 700, padding: '15px 30px',
            borderRadius: '6px', textDecoration: 'none',
            whiteSpace: 'nowrap' as const,
          }}>
            Get Pre-Approved
          </Link>
          <Link href="/get-started/schedule" style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'transparent', color: '#FFFCF8',
            fontSize: '14px', fontWeight: 700, padding: '13px 28px',
            borderRadius: '6px', textDecoration: 'none',
            border: '2px solid rgba(255,255,255,0.4)',
            whiteSpace: 'nowrap' as const,
          }}>
            Schedule a Call
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#3D2E22', padding: '64px 52px 28px', position: 'relative' }}>
        {/* Subtle grid texture */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, opacity: 0.025, pointerEvents: 'none',
          backgroundImage: 'repeating-linear-gradient(0deg, #FAF6F0 0px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, #FAF6F0 0px, transparent 1px, transparent 4px)',
          backgroundSize: '5px 5px',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Footer top grid */}
          <div className="footer-grid" style={{
            display: 'grid',
            gridTemplateColumns: '2.2fr 1fr 1fr 1fr',
            gap: '48px',
            paddingBottom: '44px',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            marginBottom: '24px',
          }}>
            {/* Brand col */}
            <div>
              <div style={{ fontSize: '21px', fontWeight: 800, color: '#FFFCF8', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                Jessie Boggs
              </div>
              <div style={{ fontSize: '10px', color: '#F5E8E1', letterSpacing: '0.13em', textTransform: 'uppercase' as const, fontWeight: 600, marginBottom: '14px' }}>
                Mortgage Loan Strategist
              </div>
              <p style={{ fontSize: '13px', color: '#D4C4B0', lineHeight: 1.72, maxWidth: '270px', marginBottom: '20px' }}>
                Serving Eastern Washington and North Idaho.
                20+ years in sales and residential construction.
                Built different, by design.
              </p>
              {/* Social icons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { label: 'Facebook', href: 'https://facebook.com', letter: 'f' },
                  { label: 'Instagram', href: 'https://instagram.com', letter: 'ig' },
                  { label: 'LinkedIn', href: 'https://linkedin.com', letter: 'in' },
                  { label: 'YouTube', href: 'https://youtube.com', letter: 'yt' },
                ].map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} style={{
                    width: '34px', height: '34px', borderRadius: '7px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px', fontWeight: 700, color: '#D4C4B0',
                    textDecoration: 'none',
                  }}>
                    {s.letter}
                  </a>
                ))}
              </div>
            </div>

            {/* Loan Types col */}
            <div>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: '#D4C4B0', marginBottom: '14px' }}>
                Loan Types
              </div>
              {['Conventional', 'VA Loans', 'USDA Rural', 'FHA Loans', 'Construction', 'Renovation', 'Self-Employed'].map((l) => (
                <Link key={l} href={`/loan-types/${l.toLowerCase().replace(/\s+/g, '-')}`} style={{
                  display: 'block', fontSize: '12px',
                  color: 'rgba(212,196,176,0.65)', textDecoration: 'none',
                  marginBottom: '9px',
                }}>
                  {l}
                </Link>
              ))}
            </div>

            {/* For You col */}
            <div>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: '#D4C4B0', marginBottom: '14px' }}>
                For You
              </div>
              {[
                { label: 'First-Time Buyers', href: '/buyers/first-time' },
                { label: 'Veterans', href: '/buyers/veterans' },
                { label: 'Rural Buyers', href: '/buyers/rural' },
                { label: 'Move-Up Buyers', href: '/buyers/move-up' },
                { label: 'For Agents', href: '/for-agents' },
                { label: 'Calculators', href: '/tools' },
                { label: 'Resources', href: '/resources' },
              ].map((l) => (
                <Link key={l.label} href={l.href} style={{
                  display: 'block', fontSize: '12px',
                  color: 'rgba(212,196,176,0.65)', textDecoration: 'none',
                  marginBottom: '9px',
                }}>
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Get Started col */}
            <div>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: '#D4C4B0', marginBottom: '14px' }}>
                Get Started
              </div>
              {[
                { label: 'Get Pre-Approved', href: '/get-started/pre-approval' },
                { label: 'Schedule a Call', href: '/get-started/schedule' },
                { label: 'Apply Now', href: '/get-started/apply' },
                { label: 'About Jessie', href: '/about' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <Link key={l.label} href={l.href} style={{
                  display: 'block', fontSize: '12px',
                  color: 'rgba(212,196,176,0.65)', textDecoration: 'none',
                  marginBottom: '9px',
                }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer bottom */}
          <div style={{
            display: 'flex', alignItems: 'flex-start',
            justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap',
          }}>
            <p style={{
              fontSize: '10px', color: 'rgba(212,196,176,0.38)',
              lineHeight: 1.9, maxWidth: '620px',
            }}>
              Jessie Boggs NMLS #2803455 | Licensed in Washington and Idaho |
              Powered by Edge Home Finance Corporation NMLS #891464 |
              Loans in other states originated in partnership with Edge Home Finance&rsquo;s Client Care Team.&nbsp;
              <a href="https://edgehomefinance.com/licensing-disclaimer/" target="_blank" style={{ color: 'rgba(212,196,176,0.38)', textDecoration: 'underline' }}>
                Licensing Disclaimer
              </a>&nbsp;|&nbsp;
              <a href="https://www.nmlsconsumeraccess.org" target="_blank" style={{ color: 'rgba(212,196,176,0.38)', textDecoration: 'underline' }}>
                NMLS Consumer Access
              </a>&nbsp;|&nbsp;
              <a href="/legal/privacy-policy" style={{ color: 'rgba(212,196,176,0.38)', textDecoration: 'underline' }}>
                Privacy Policy
              </a>&nbsp;|&nbsp;
              <a href="/legal/terms" style={{ color: 'rgba(212,196,176,0.38)', textDecoration: 'underline' }}>
                Terms of Use
              </a>
              <br />
              &copy; 2026 Jessie Boggs. All rights reserved.
              This is not a commitment to lend. All loans subject to approval.
            </p>
            <Image
              src="/2_-_Equal_Housing_Opportunity_Logo__1_.png"
              alt="Equal Housing Opportunity"
              width={60}
              height={60}
              style={{ opacity: 0.22, filter: 'grayscale(1) brightness(2)', flexShrink: 0 }}
            />
          </div>
        </div>
      </footer>  
        </>
  );
}