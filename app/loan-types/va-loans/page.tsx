import LoanPage from '../../components/LoanPage';
export const metadata = {
  title: 'VA Home Loans Eastern WA & North Idaho | Jessie Boggs NMLS #2803455',
  description: 'VA loans in Eastern Washington and North Idaho. Zero down, no PMI, competitive rates. Jessie Boggs is a VA loan specialist. NMLS #2803455. Call (253) 417-8790.',
};
export default function VALoans() {
  return (
    <LoanPage
      tag="Zero Down"
      tagBg="#E4F0EC"
      tagColor="#2E5245"
      topColor="#3D6B5C"
      title="VA Home Loans"
      subtitle="You served. Now let your earned benefit work for you."
      intro="VA loans are one of the most powerful home financing tools available and one of the most misunderstood. Zero down payment, no PMI, and some of the best rates available anywhere. If you have served, this benefit is yours to use."
      whoFor="Active duty service members, veterans, National Guard and Reserve members with qualifying service, and surviving spouses may be eligible. Eligibility depends on length and type of service. I will help you pull your Certificate of Eligibility and walk through exactly what you qualify for."
      benefits={[
        'Zero down payment required',
        'No private mortgage insurance ever',
        'Competitive interest rates',
        'Limits on closing costs',
        'No prepayment penalty',
        'Available for purchase, refinance, and construction',
        'Benefit can be used more than once',
      ]}
      faqs={[
        { q: 'Can I use my VA benefit more than once?', a: 'Yes. Your entitlement can be restored and reused after your previous VA loan is paid off.' },
        { q: 'What is the funding fee?', a: 'It varies based on your service, down payment, and whether it is your first use. Some veterans are exempt entirely.' },
        { q: 'Can I use a VA loan in Eastern WA and North Idaho?', a: 'Absolutely. VA loans have no geographic restrictions within the United States.' },
      ]}
    />
  );
}