import BuyerPage from '../../components/BuyerPage';

export default function RuralBuyers() {
  return (
    <BuyerPage
      tag="Rural Buyers"
      tagBg="#E4F0EC"
      tagColor="#2E5245"
      accentColor="#4E8572"
      title="Eastern WA and North Idaho were made for USDA."
      subtitle="Zero down in more places than you think."
      intro="If you are buying in this region there is a strong chance USDA Rural Development financing is available in your area. Zero down payment, competitive rates, and a path to homeownership that most buyers do not even know exists. I know this program and this market inside and out."
      steps={[
        { title: 'I check your area eligibility in minutes', text: 'Tell me the address or area you are targeting and I will tell you immediately whether USDA applies.' },
        { title: 'We confirm your income eligibility', text: 'USDA income limits are higher than most people expect and adjust for family size. Many who assume they do not qualify actually do.' },
        { title: 'We structure your loan for zero down', text: 'The 1% upfront guarantee fee can be financed into the loan so you truly come to closing with minimal out of pocket costs.' },
        { title: 'We get your pre-approval in place', text: 'Fast pre-approvals so you can make competitive offers in the Eastern WA and North Idaho market.' },
        { title: 'I stay with you to closing', text: 'USDA loans have a few extra steps. I handle all of it and keep you informed throughout.' },
      ]}
      programs={[
        { name: 'USDA Rural', desc: 'Zero down financing for eligible areas. The primary program for rural and suburban buyers in Eastern WA and North Idaho.', href: '/loan-types/usda-rural' },
        { name: 'FHA Loans', desc: 'If your area does not qualify for USDA, FHA is the next best option with low down payment requirements.', href: '/loan-types/fha-loans' },
        { name: 'Down Payment Assistance', desc: 'Can be combined with other programs to cover down payment and closing costs.', href: '/loan-types/down-payment-assistance' },
      ]}
      faqs={[
        { q: 'Does rural mean I have to be far from a city?', a: 'No. Many areas near Spokane, Coeur d\'Alene, and other cities qualify. The USDA eligibility map often surprises people.' },
        { q: 'What areas in Eastern WA qualify?', a: 'Much of Eastern WA qualifies including Newport, Deer Park, Airway Heights, and most rural communities. I can check any specific address in minutes.' },
        { q: 'What areas in North Idaho qualify?', a: 'Most of North Idaho qualifies for USDA including Post Falls, Sandpoint, Hayden, Rathdrum, Athol, and surrounding areas.' },
        { q: 'Is there really no down payment required?', a: 'Correct. USDA is one of only two programs that offers true zero down financing. The other is VA.' },
        { q: 'What are the income limits?', a: 'They vary by county and household size but are typically around $110,000 to $130,000 for a family of four in Eastern WA and North Idaho.' },
        { q: 'How long does USDA approval take?', a: 'USDA loans require an additional approval from the USDA office which adds a few days to the process. I factor this into your timeline from the start.' },
      ]}
    />
  );
}