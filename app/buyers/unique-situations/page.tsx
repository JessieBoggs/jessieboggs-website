import BuyerPage from '../../components/BuyerPage';

export default function UniqueSituations() {
  return (
    <BuyerPage
      tag="Unique Situations"
      tagBg="#E4F0EC"
      tagColor="#2E5245"
      accentColor="#3D6B5C"
      title="Your situation is not a problem. It is just a different strategy."
      subtitle="I have helped buyers that other loan officers walked away from. There is usually a path."
      intro="Not everyone's financial picture fits a standard loan application and that is fine. I work with self-employed borrowers, buyers with recent credit events, non-traditional income, unique property types, and situations that most loan officers do not know how to navigate. If you have been told no somewhere else, let me take a look."
      steps={[
        { title: 'Tell me your situation honestly', text: 'The more I know upfront the better I can help. Nothing surprises me and nothing is automatically disqualifying.' },
        { title: 'I identify the right program for your picture', text: 'Whether it is a bank statement loan, asset depletion, or a non-QM product, I will find the program that fits how your finances actually work.' },
        { title: 'We document your file strategically', text: 'How you present your financial picture matters as much as what is in it. I will guide you through exactly what we need.' },
        { title: 'We get your approval in place', text: 'It may take a different path than a standard loan but we will get there.' },
        { title: 'I stay with you every step', text: 'Complex files require more communication, not less. You will always know where things stand.' },
      ]}
      programs={[
        { name: 'Self-Employed Loans', desc: 'Bank statement and alternative income documentation programs for business owners and freelancers.', href: '/loan-types/self-employed' },
        { name: 'FHA Loans', desc: 'More flexible credit and income guidelines than conventional. A good starting point for many unique situations.', href: '/loan-types/fha-loans' },
        { name: 'VA Loans', desc: 'If you have served, your VA benefit often has more flexibility than other programs.', href: '/loan-types/va-loans' },
        { name: 'Construction Loans', desc: 'Unique property types and builds often require a loan officer with construction knowledge. That is me.', href: '/loan-types/construction-renovation' },
      ]}
      faqs={[
        { q: 'I was denied by another lender. Can you still help?', a: 'Possibly. Different lenders have different overlays and programs. Tell me what happened and I will give you an honest assessment.' },
        { q: 'I am self-employed and my tax returns show very little income. Do I qualify?', a: 'Often yes. Bank statement programs use your actual deposits rather than taxable income which tells a much more accurate story.' },
        { q: 'I had a bankruptcy or foreclosure. How long do I have to wait?', a: 'It depends on the type and the program. FHA requires as little as 2 years after bankruptcy. Some non-QM programs have shorter waiting periods.' },
        { q: 'My income comes from multiple sources. Is that a problem?', a: 'Not at all. Multiple income streams just require thorough documentation. I will walk you through exactly what we need.' },
        { q: 'I want to buy a non-traditional property. Can you help?', a: 'Depends on the property type. Unique properties sometimes require portfolio or non-QM lending. Tell me what you are looking at and I will assess options.' },
        { q: 'What is a non-QM loan?', a: 'Non-qualified mortgage loans do not meet standard agency guidelines but are legitimate products designed for borrowers with complex financial pictures.' },
      ]}
    />
  );
}