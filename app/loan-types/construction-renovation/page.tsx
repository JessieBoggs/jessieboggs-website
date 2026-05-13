import LoanPage from '../../components/LoanPage';
export const metadata = {
  title: 'Construction & Renovation Loans Eastern WA | Jessie Boggs',
  description: 'Construction and renovation loans in Eastern Washington and North Idaho. Built by someone with a decade in residential construction. Jessie Boggs NMLS #2803455.',
};
export default function ConstructionRenovation() {
  return (
    <LoanPage
      tag="My Specialty"
      tagBg="#E4F0EC"
      tagColor="#2E5245"
      topColor="#3D6B5C"
      title="Construction & Renovation Loans"
      subtitle="Build or renovate with someone who actually knows construction."
      intro="Building a home or taking on a major renovation is one of the most complex financial undertakings a family can do. Most loan officers have processed a handful of these loans. I have spent nearly a decade in the residential construction and remodeling industry. This is one area where my background gives you a genuine edge."
      whoFor="Construction and renovation loans are ideal for buyers building from the ground up, homeowners looking to renovate an existing property, buyers who want to purchase and renovate in a single loan, and anyone who wants a loan officer who truly understands the build process."
      benefits={[
        'One-time close construction-to-permanent loans available',
        'Finance the build and permanent mortgage in one closing',
        'Renovation loans available for significant remodels',
        'My construction background means I understand real project costs',
        'I can anticipate appraisal and inspection issues before they arise',
        'Available for primary residences and investment properties',
      ]}
      faqs={[
        { q: 'What is a construction-to-permanent loan?', a: 'It covers the build phase and then converts to a permanent mortgage at completion. One closing, one set of closing costs.' },
        { q: 'Why does your construction background matter here?', a: 'I have managed projects, worked with contractors, and know what jobs actually cost. That means I can help you structure financing that accounts for real-world contingencies.' },
        { q: 'Can I renovate a home I am purchasing?', a: 'Yes. Renovation loans like the FHA 203(k) and conventional HomeStyle let you finance the purchase and renovation in a single loan.' },
      ]}
    />
  );
}