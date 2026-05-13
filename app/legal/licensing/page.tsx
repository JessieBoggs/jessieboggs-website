export const metadata = {
  title: 'Licensing & Disclosures | Jessie Boggs NMLS #2803455',
  description: 'Licensing and disclosure information for Jessie Boggs NMLS #2803455. Licensed in Washington and Idaho. Powered by Edge Home Finance Corporation NMLS #891464.',
};
export default function Licensing() {
  return (
    <section style={{
      background: '#FAF6F0', padding: '72px 52px',
      minHeight: '60vh',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase' as const, color: '#B85C38',
          display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
        }}>
          <span style={{ width: '28px', height: '2px', background: '#B85C38', display: 'block', flexShrink: 0 }} />
          Legal
        </div>
        <h1 style={{
          fontSize: '44px', fontWeight: 800, color: '#2A2118',
          letterSpacing: '-0.025em', marginBottom: '8px',
        }}>
          Licensing & Disclosures
        </h1>
        <p style={{ fontSize: '13px', color: '#8C7B6E', marginBottom: '48px' }}>
          Last updated: May 2026
        </p>

        {/* License info cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
          <div style={{
            background: '#FFFCF8', borderRadius: '12px', padding: '28px',
            border: '1px solid #E8DDD0', borderLeft: '4px solid #B85C38',
            boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
          }}>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#2A2118', marginBottom: '16px' }}>
              Loan Originator
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Name', value: 'Jessie Boggs' },
                { label: 'NMLS ID', value: '#2803455' },
                { label: 'Licensed States', value: 'Washington, Idaho' },
                { label: 'Email', value: 'Jessie.Boggs@EdgeHomeFinance.com' },
                { label: 'Phone', value: '(253) 417-8790' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
                  <span style={{ fontWeight: 700, color: '#2A2118', minWidth: '140px' }}>{item.label}:</span>
                  <span style={{ color: '#4A3728' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: '#FFFCF8', borderRadius: '12px', padding: '28px',
            border: '1px solid #E8DDD0', borderLeft: '4px solid #3D6B5C',
            boxShadow: '0 2px 12px rgba(42,33,24,0.05)',
          }}>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#2A2118', marginBottom: '16px' }}>
              Powered By
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Company', value: 'Edge Home Finance Corporation' },
                { label: 'NMLS ID', value: '#891464' },
                { label: 'Website', value: 'edgehomefinance.com' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: '16px', fontSize: '14px' }}>
                  <span style={{ fontWeight: 700, color: '#2A2118', minWidth: '140px' }}>{item.label}:</span>
                  <span style={{ color: '#4A3728' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {[
          {
            title: 'State Licensing',
            text: 'Jessie Boggs NMLS #2803455 is licensed to originate mortgage loans in Washington and Idaho. Loans originated in other states are processed in partnership with Edge Home Finance\'s Client Care Team.',
          },
          {
            title: 'Equal Housing Lender',
            text: 'We are an Equal Housing Lender. We do not discriminate on the basis of race, color, national origin, religion, sex, familial status, or disability in accordance with the Fair Housing Act.',
          },
          {
            title: 'NMLS Consumer Access',
            text: 'You can verify licensing information for Jessie Boggs and Edge Home Finance Corporation through the Nationwide Mortgage Licensing System at nmlsconsumeraccess.org.',
          },
          {
            title: 'Not a Commitment to Lend',
            text: 'All information on this website is for informational purposes only. This is not a commitment to lend. All loan applications are subject to credit approval, income verification, and property appraisal. Terms and conditions apply.',
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontSize: '18px', fontWeight: 800, color: '#2A2118',
              letterSpacing: '-0.01em', marginBottom: '10px',
            }}>
              {section.title}
            </h2>
            <p style={{ fontSize: '15px', color: '#4A3728', lineHeight: 1.8 }}>
              {section.text}
            </p>
          </div>
        ))}

        {/* External links */}
        <div style={{
          background: '#2A2118', borderRadius: '12px', padding: '28px',
          display: 'flex', flexDirection: 'column', gap: '14px',
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#FFFCF8', marginBottom: '4px' }}>
            Important Links
          </h2>
          {[
            { label: 'Edge Home Finance Licensing Disclaimer', href: 'https://edgehomefinance.com/licensing-disclaimer/' },
            { label: 'NMLS Consumer Access', href: 'https://www.nmlsconsumeraccess.org' },
            { label: 'Edge Home Finance Client Care Team', href: 'https://edgehomefinance.com/team-member/client-care-team/' },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: '#8FCBBF', fontSize: '14px', fontWeight: 600,
              textDecoration: 'none',
            }}>
              {link.label} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}