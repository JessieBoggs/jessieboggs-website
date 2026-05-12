import LoanPage from '../../components/LoanPage';

export default function DownPaymentAssistance() {
  return (
    <LoanPage
      tag="Get Help"
      tagBg="#F5E8E1"
      tagColor="#8F4228"
      topColor="#B85C38"
      title="Down Payment Assistance"
      subtitle="You may qualify for help and not even know it."
      intro="Washington and Idaho both offer down payment assistance programs that can cover part or all of your down payment. Many buyers assume they do not qualify or do not even know these programs exist. Let me check your eligibility and see what is available in your area."
      whoFor="Down payment assistance programs are typically available for first-time homebuyers, buyers at or below certain income thresholds, buyers purchasing in specific geographic areas, and buyers using eligible loan types like FHA, USDA, VA, or conventional. Requirements vary by program."
      benefits={[
        'Can cover part or all of your down payment',
        'Some programs offer forgivable grants that never need to be repaid',
        'Available in both Washington and Idaho',
        'Can be combined with FHA, USDA, VA, and conventional loans',
        'May also cover closing costs depending on the program',
        'Income limits are often higher than buyers expect',
      ]}
      faqs={[
        { q: 'Do I have to be a first-time buyer?', a: 'Many programs require it but the definition of first-time buyer is broader than most people think. Not owning a home in the past three years often qualifies you.' },
        { q: 'Does DPA mean a higher interest rate?', a: 'Some programs do carry a slightly higher rate in exchange for the assistance. We will run both scenarios so you can make an informed decision.' },
        { q: 'How do I find out if I qualify?', a: 'Call or text me and I will check your eligibility against current programs in Washington and Idaho. It takes about five minutes.' },
      ]}
    />
  );
}