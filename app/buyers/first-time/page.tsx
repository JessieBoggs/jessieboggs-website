import BuyerPage from '../../components/BuyerPage';
export const metadata = {
  title: 'First-Time Home Buyer Loans Eastern WA & North Idaho | Jessie Boggs',
  description: 'First-time home buyer loans in Eastern Washington and North Idaho. FHA, USDA, and down payment assistance programs. Jessie Boggs NMLS #2803455. No pressure.',
};
export default function FirstTimeBuyers() {
  return (
    <BuyerPage
      tag="First-Time Buyers"
      tagBg="#F5E8E1"
      tagColor="#8F4228"
      accentColor="#B85C38"
      title="Buying your first home does not have to be overwhelming."
      subtitle="You do not need to have it all figured out. That is what I am here for."
      intro="I work with a lot of first-time buyers and the most common thing I hear at the beginning is some version of I do not even know where to start. That is exactly why you call me first. We start with a conversation, no application, no commitment, just a clear picture of where you stand and what is actually possible for you."
      steps={[
        { title: 'We talk first', text: 'A free 20 minute call to understand your situation, goals, and timeline. No pressure, no forms.' },
        { title: 'I show you what you qualify for', text: 'Based on your income, credit, and savings I will lay out exactly which programs fit and what your numbers look like.' },
        { title: 'We get your pre-approval in place', text: 'Fast pre-approvals that give you a real competitive edge before you start shopping.' },
        { title: 'You shop with confidence', text: 'You will know your exact budget, your monthly payment, and what to expect at closing before you make an offer.' },
        { title: 'I stay with you to closing', text: 'From application to keys in hand I keep you informed at every step. No surprises.' },
      ]}
      programs={[
        { name: 'FHA Loans', desc: 'Down payments as low as 3.5% and flexible credit requirements. A strong starting point for many first-time buyers.', href: '/loan-types/fha-loans' },
        { name: 'USDA Rural', desc: 'Zero down financing for eligible Eastern WA and North Idaho areas. More places qualify than you think.', href: '/loan-types/usda-rural' },
        { name: 'Conventional', desc: 'Down payments as low as 3% for first-time buyers with solid credit.', href: '/loan-types/conventional' },
        { name: 'Down Payment Assistance', desc: 'WA and ID programs that may cover part or all of your down payment. You may qualify and not know it.', href: '/loan-types/down-payment-assistance' },
      ]}
      faqs={[
        { q: 'Do I need 20% down?', a: 'No. Many programs start at 0% to 3.5% down. The 20% figure is a myth that stops a lot of buyers from even trying.' },
        { q: 'What credit score do I need?', a: 'It depends on the program. FHA goes down to 580. Some programs go lower. We will find what works for your situation.' },
        { q: 'How long does the process take?', a: 'From pre-approval to closing is typically 30 to 45 days once you have a home under contract.' },
        { q: 'What is a pre-approval and do I need one?', a: 'A pre-approval is a lender review of your income, credit, and assets. Most sellers require one before accepting an offer. It also shows you exactly what you can afford.' },
        { q: 'What are closing costs?', a: 'Typically 2% to 5% of the purchase price. Some programs allow sellers to contribute or these costs can be rolled into the loan.' },
        { q: 'Can I get help with my down payment?', a: 'Yes. Washington and Idaho both have down payment assistance programs. I will check your eligibility as part of our first conversation.' },
      ]}
    />
  );
}