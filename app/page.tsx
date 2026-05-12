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
      </section></>
  );
}