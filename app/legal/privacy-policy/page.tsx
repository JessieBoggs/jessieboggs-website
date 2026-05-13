export const metadata = {
  title: 'Privacy Policy | Jessie Boggs Mortgage NMLS #2803455',
  description: 'Privacy policy for jessieboggs.com. Jessie Boggs NMLS #2803455. Powered by Edge Home Finance Corporation NMLS #891464.',
};
export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p style={{ fontSize: '13px', color: '#8C7B6E', marginBottom: '48px' }}>
          Last updated: May 2026
        </p>

        {[
          {
            title: 'Information We Collect',
            text: 'We collect information you provide directly to us when you fill out forms on this website, including your name, email address, phone number, and information about your mortgage needs. We also collect standard website analytics data such as pages visited and time spent on the site.',
          },
          {
            title: 'How We Use Your Information',
            text: 'We use the information you provide to contact you regarding your mortgage inquiry, provide you with information about loan programs and services, respond to your questions and requests, and send you market updates and educational content if you have opted in.',
          },
          {
            title: 'Information Sharing',
            text: 'We do not sell, trade, or rent your personal information to third parties. Your information may be shared with Edge Home Finance Corporation and its affiliates as necessary to process your loan application. We may also share information as required by law or to protect our rights.',
          },
          {
            title: 'Cookies and Tracking',
            text: 'This website uses cookies and similar tracking technologies to analyze website traffic and improve your experience. We use Google Analytics to understand how visitors interact with our site. You can opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.',
          },
          {
            title: 'Data Security',
            text: 'We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure and we cannot guarantee absolute security.',
          },
          {
            title: 'Your Rights',
            text: 'You have the right to access, correct, or delete the personal information we hold about you. To exercise these rights, please contact us at Jessie.Boggs@EdgeHomeFinance.com or call (253) 417-8790.',
          },
          {
            title: 'Contact Us',
            text: 'If you have questions about this privacy policy or our privacy practices, please contact us at: Jessie Boggs, NMLS #2803455, Jessie.Boggs@EdgeHomeFinance.com, (253) 417-8790.',
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