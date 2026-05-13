import BuyerPage from '../../components/BuyerPage';
export const metadata = {
  title: 'VA Home Loans for Veterans Eastern WA & North Idaho | Jessie Boggs',
  description: 'VA home loans for veterans in Eastern Washington and North Idaho. You earned this benefit. Let me make sure you get every dollar of it. Jessie Boggs NMLS #2803455.',
};
export default function Veterans() {
  return (
    <BuyerPage
      tag="Veterans"
      tagBg="#E4F0EC"
      tagColor="#2E5245"
      accentColor="#3D6B5C"
      title="You earned this benefit. Let's make sure you get every dollar of it."
      subtitle="VA loans are the most powerful home financing tool available. Most veterans do not fully understand what they are entitled to."
      intro="A lot of veterans leave money on the table simply because they worked with a loan officer who did not know the VA program well enough. I do. Zero down, no PMI, competitive rates, and a benefit that can be used more than once. Let me make sure you get everything you earned."
      steps={[
        { title: 'We pull your Certificate of Eligibility', text: 'I handle this for you. It confirms your entitlement and what you qualify for.' },
        { title: 'We review your full benefit', text: 'Entitlement amount, funding fee, any exemptions. You will know exactly what your benefit is worth before we go further.' },
        { title: 'We get your pre-approval in place', text: 'Fast VA pre-approvals that give you a competitive edge in any market.' },
        { title: 'I evaluate properties through a contractor\'s eyes', text: 'My construction background means I can anticipate VA appraisal issues before they become deal killers.' },
        { title: 'We close with confidence', text: 'I stay with you every step of the way. You will always know where your loan stands.' },
      ]}
      programs={[
        { name: 'VA Purchase Loans', desc: 'Zero down, no PMI, competitive rates. The gold standard of home financing for those who served.', href: '/loan-types/va-loans' },
        { name: 'VA Construction Loans', desc: 'Use your VA benefit to build from the ground up. My construction background makes me uniquely qualified for this.', href: '/loan-types/construction-renovation' },
      ]}
      faqs={[
        { q: 'Can I use my VA benefit more than once?', a: 'Yes. Your entitlement can be restored and reused after your previous VA loan is paid off or in some cases while it is still active.' },
        { q: 'Do I have to pay a funding fee?', a: 'Most veterans do but some are exempt including those with a service-connected disability. I will check your status as part of our first conversation.' },
        { q: 'Is there a VA loan limit?', a: 'For veterans with full entitlement there is no loan limit. For those with remaining entitlement limits may apply depending on your county.' },
        { q: 'Can I use a VA loan in Eastern WA and North Idaho?', a: 'Absolutely. VA loans have no geographic restrictions within the United States.' },
        { q: 'What are VA appraisal requirements?', a: 'VA appraisals include a Minimum Property Requirements check. My construction background means I can often spot potential issues before they become problems.' },
        { q: 'Can my spouse use my VA benefit?', a: 'Surviving spouses of veterans who died in service or from a service-connected disability may be eligible. Let me check your specific situation.' },
      ]}
    />
  );
}