import LoanPage from '../../components/LoanPage';
export const metadata = {
  title: 'FHA Home Loans Eastern WA & North Idaho | Jessie Boggs NMLS #2803455',
  description: 'FHA mortgage loans in Eastern Washington and North Idaho. Down payments as low as 3.5%. Flexible credit requirements. Jessie Boggs NMLS #2803455.',
};
export default function FHALoans() {
  return (
    <LoanPage
      tag="Low Down"
      tagBg="#F5E8E1"
      tagColor="#8F4228"
      topColor="#CC6E49"
      title="FHA Loans"
      subtitle="A real path to homeownership for buyers building their foundation."
      intro="FHA loans exist to open the door to homeownership for buyers who are still building their credit or saving toward a larger down payment. If you have been told you do not qualify yet, an FHA loan might be exactly the bridge you need."
      whoFor="FHA is often the right fit for first-time homebuyers, buyers with credit scores in the 580 to 680 range, buyers with higher debt-to-income ratios, and anyone who has been through a financial hardship and is rebuilding."
      benefits={[
        'Down payments as low as 3.5% with a 580+ credit score',
        'More flexible debt-to-income ratio guidelines',
        'Gift funds allowed for down payment',
        'Available for single-family homes and approved condos',
        'Can be combined with down payment assistance programs',
      ]}
      faqs={[
        { q: 'Does FHA mortgage insurance ever go away?', a: 'In most cases FHA loans carry mortgage insurance for the life of the loan. Depending on your situation it may make sense to refinance into conventional once your equity improves.' },
        { q: 'What is the minimum credit score?', a: '580 for 3.5% down. Scores between 500 and 579 may qualify with 10% down.' },
        { q: 'Can I use FHA for a fixer-upper?', a: 'Yes. The FHA 203(k) renovation loan lets you finance the purchase and renovation in one loan.' },
      ]}
    />
  );
}