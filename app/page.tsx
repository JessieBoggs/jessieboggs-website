import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: '#F2EBE0',
        padding: '0 52px',
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        minHeight: '580px',
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
        }} />

        {/* Terracotta blob right side */}
        <div style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0,
          width: '420px',
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
          padding: '72px 40px 72px 0',
          maxWidth: '560px',
        }}>
          {/* Overline */}
          <div style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#B85C38',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '22px',
          }}>
            <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block' }} />
            Eastern WA &amp; North Idaho
          </div>

          {/* H1 */}
          <h1 style={{
            fontSize: '60px',
            fontWeight: 800,
            color: '#2A2118',
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            marginBottom: '22px',
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
            maxWidth: '460px',
            marginBottom: '36px',
          }}>
            I&rsquo;m not here to just get you a loan. I&rsquo;m here to find the right
            strategy that sets your family up for{' '}
            <strong style={{ color: '#2A2118', fontWeight: 700 }}>
              the life you actually want.
            </strong>
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <Link href="/get-started/pre-approval" className="btn-terra">
              Get Pre-Approved
            </Link>
            <Link href="/get-started/schedule" className="btn-ghost">
              Schedule a Call
            </Link>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: '32px',
            paddingTop: '28px',
            borderTop: '1px solid #D4C4B0',
          }}>
            {[
              { num: '20+', label: 'Yrs Experience' },
              { num: '8+',  label: 'Loan Programs' },
              { num: '47+', label: 'States Available' },
              { num: '5★',  label: 'Rated Service' },
            ].map((stat, i, arr) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                <div>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    color: '#2A2118',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}>
                    <span>{stat.num.replace(/[+★]/, '')}</span>
                    <span style={{ color: '#B85C38' }}>{stat.num.match(/[+★]/)?.[0]}</span>
                  </div>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: '#8C7B6E',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
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
            width={420}
            height={580}
            style={{
              width: '420px',
              height: '100%',
              minHeight: '580px',
              objectFit: 'cover',
              objectPosition: 'center 15%',
              display: 'block',
              flexShrink: 0,
            }}
            priority
          />
          {/* Floating NMLS card */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '-200px',
            zIndex: 4,
            background: '#FFFCF8',
            borderRadius: '10px',
            padding: '16px 20px',
            boxShadow: '0 8px 32px rgba(42,33,24,0.18)',
            borderLeft: '4px solid #3D6B5C',
            minWidth: '185px',
          }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#3D6B5C', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
              NMLS Licensed
            </div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#2A2118', letterSpacing: '-0.02em', lineHeight: 1 }}>
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
            section { grid-template-columns: 1fr !important; padding: 0 !important; min-height: unset !important; }
            section > div:last-child { order: -1; }
            section > div:last-child img { width: 100% !important; height: 320px !important; min-height: unset !important; object-position: center 20% !important; }
            section > div:nth-child(4) { padding: 40px 24px 52px !important; max-width: 100% !important; }
            section > div:nth-child(4) h1 { font-size: 36px !important; }
            section > div:nth-child(4) > div:last-child { gap: 16px !important; flex-wrap: wrap !important; }
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
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#D4C4B0', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
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
          { num: '5.0', label: 'Star Rating' },
          { num: '20+', label: 'Yrs Experience' },
          { num: '47+', label: 'States Available' },
          { num: '8+',  label: 'Loan Programs' },
          { num: '$0',  label: 'Down — VA & USDA' },
        ].map((item, i, arr) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#B85C38', letterSpacing: '-0.02em', lineHeight: 1 }}>
                {item.num}
              </div>
              <div style={{ fontSize: '10px', fontWeight: 600, color: '#4A3728', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                {item.label}
              </div>
            </div>
            {i < arr.length - 1 && (
              <div style={{ width: '1px', height: '36px', background: '#D4C4B0' }} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}