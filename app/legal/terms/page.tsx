export const metadata = {
  title: 'Terms of Use | Jessie Boggs Mortgage NMLS #2803455',
  description: 'Terms of use for jessieboggs.com. Jessie Boggs NMLS #2803455. Powered by Edge Home Finance Corporation NMLS #891464.',
};
export default function Terms() {
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
          Terms of Use
        </h1>
        <p style={{ fontSize: '13px', color: '#8C7B6E', marginBottom: '48px' }}>
          Last updated: May 2026
        </p>

        {[
          {
            title: 'Acceptance of Terms',
            text: 'By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.',
          },
          {
            title: 'Not a Commitment to Lend',
            text: 'The information on this website is for informational purposes only and does not constitute a commitment to lend. All loan applications are subject to underwriting approval. Interest rates, loan programs, and terms are subject to change without notice.',
          },
          {
            title: 'Website Content',
            text: 'The content on this website is provided for general informational purposes only. While we strive to keep information accurate and current, we make no warranties about the completeness, accuracy, or reliability of any information on this site.',
          },
          {
            title: 'Calculator Tools',
            text: 'The mortgage calculators on this website are provided for estimation purposes only. Results are approximate and should not be relied upon as financial advice. Actual loan terms, rates, and payments will vary based on your individual financial profile and current market conditions.',
          },
          {
            title: 'Third Party Links',
            text: 'This website may contain links to third-party websites including the Edge Home Finance application portal. We are not responsible for the content or privacy practices of those sites.',
          },
          {
            title: 'Limitation of Liability',
            text: 'To the fullest extent permitted by law, Jessie Boggs and Edge Home Finance Corporation shall not be liable for any damages arising from your use of this website or reliance on any information contained herein.',
          },
          {
            title: 'Contact',
            text: 'Questions about these terms? Contact us at: Jessie Boggs, NMLS #2803455, Jessie.Boggs@EdgeHomeFinance.com, (253) 417-8790.',
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: '36px' }}>
            <h2 style={{
              fontSize: '20px', fontWeight: 800, color: '#2A2118',
              letterSpacing: '-0.02em', marginBottom: '10px',
            }}>
              {section.title}
            </h2>
            <p style={{ fontSize: '15px', color: '#4A3728', lineHeight: 1.8 }}>
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}