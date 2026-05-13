import LoanPage from '../../components/LoanPage';
export const metadata = {
  title: 'Conventional Home Loans Eastern WA & North Idaho | Jessie Boggs',
  description: 'Conventional mortgage loans in Eastern Washington and North Idaho. Down payments as low as 3%. Competitive rates. Jessie Boggs NMLS #2803455. Call (253) 417-8790.',
};
export default function Conventional() {
  return (
    <LoanPage
      tag="Most Popular"
      tagBg="#F5E8E1"
      tagColor="#8F4228"
      topColor="#B85C38"
      title="Conventional Loans"
      subtitle="Flexible terms and competitive rates for well-qualified buyers."
      intro="The most common loan type and for good reason. Conventional loans offer flexibility, competitive rates, and strong options for buyers who have built solid credit and have a down payment to work with."
      whoFor="Conventional loans are a great fit if you have a credit score of 620 or higher, a down payment of 3% to 20%+, stable income history, and a debt-to-income ratio that demonstrates manageable monthly obligations."
      benefits={[
        'Down payments as low as 3%',
        'No upfront mortgage insurance premium',
        'PMI cancels when you reach 20% equity',
        'Available for primary homes, second homes, and investment properties',
        'Flexible terms of 10, 15, 20, or 30 years',
      ]}
      faqs={[
        { q: 'What credit score do I need?', a: '620 minimum, though better rates are available at 740 and above.' },
        { q: 'Do I need 20% down?', a: 'No. 3% is available for first-time buyers. 20% down eliminates PMI.' },
        { q: 'What is the loan limit?', a: 'Conforming loan limits for 2026 are $806,500 in most of Eastern WA and North Idaho.' },
      ]}
    />
  );
}