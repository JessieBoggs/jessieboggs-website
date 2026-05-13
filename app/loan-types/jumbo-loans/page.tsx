import LoanPage from '../../components/LoanPage';
export const metadata = {
  title: 'Jumbo Home Loans Eastern WA & North Idaho | Jessie Boggs',
  description: 'Jumbo mortgage loans above conforming limits in Eastern Washington and North Idaho. Competitive rates for well-qualified buyers. Jessie Boggs NMLS #2803455.',
};
export default function JumboLoans() {
  return (
    <LoanPage
      tag="High Value"
      tagBg="#F5E8E1"
      tagColor="#8F4228"
      topColor="#A89278"
      title="Jumbo Loans"
      subtitle="Above the limit, without the compromise."
      intro="If you are purchasing above the conforming loan limit of $806,500 in most of Eastern WA and North Idaho in 2026, you will need a jumbo loan. These products require a stronger financial profile but offer competitive rates and real flexibility for higher-value purchases."
      whoFor="Jumbo loans are for buyers purchasing above the conforming loan limit who have strong credit, typically 700 or above, a larger down payment of 10 to 20% or more, and a well-documented income history. They are available for primary homes, second homes, and investment properties."
      benefits={[
        'Loan amounts above the $806,500 conforming limit',
        'Competitive rates from a network of private lenders',
        'Available for primary homes, second homes, and investments',
        'Flexible qualification options for high-asset borrowers',
        'Fixed and adjustable rate options available',
      ]}
      faqs={[
        { q: 'What credit score do I need for a jumbo loan?', a: 'Typically 700 or above, though requirements vary by lender and loan size.' },
        { q: 'How much do I need to put down?', a: 'Usually 10 to 20% or more depending on the loan amount and your financial profile.' },
        { q: 'Are jumbo rates higher than conventional rates?', a: 'Not always. In many cases jumbo rates are very competitive, especially for well-qualified borrowers.' },
      ]}
    />
  );
}