import LoanPage from '../../components/LoanPage';
export const metadata = {
  title: 'USDA Rural Home Loans Eastern WA & North Idaho | Jessie Boggs',
  description: 'USDA zero down home loans in Eastern Washington and North Idaho. More areas qualify than you think. Jessie Boggs NMLS #2803455. Call (253) 417-8790.',
};
export default function USDARural() {
  return (
    <LoanPage
      tag="Rural Eligible"
      tagBg="#E4F0EC"
      tagColor="#2E5245"
      topColor="#4E8572"
      title="USDA Rural Loans"
      subtitle="Zero down in more places than you think."
      intro="If you are buying in Eastern Washington or North Idaho, there is a strong chance USDA Rural Development financing is available in your area. Zero down payment, competitive rates, and a path to homeownership that most buyers do not even know exists."
      whoFor="USDA loans are income-based and location-based. Your household income must fall within USDA limits for your county, which are higher than most people expect, and the property must be in an eligible rural or suburban area. Much of Eastern WA and North Idaho qualifies including areas around Spokane, Newport, Deer Park, and most of the Idaho Panhandle."
      benefits={[
        'Zero down payment required',
        'Below-market interest rates',
        'Lower mortgage insurance than FHA',
        'Available for purchase and refinance',
        'Eligible in most of Eastern WA and North Idaho',
        'Household income limits are higher than most expect',
      ]}
      faqs={[
        { q: 'Does rural mean I have to be in the middle of nowhere?', a: 'No. Many suburban communities qualify. The USDA map often surprises people and I can check your target area in minutes.' },
        { q: 'Is there an income limit?', a: 'Yes, but it adjusts for family size and is higher than most people expect. Many families who assume they do not qualify actually do.' },
        { q: 'What is the upfront cost?', a: 'There is a 1% upfront guarantee fee that can be financed into the loan, plus an annual fee of 0.35%. Both are lower than FHA.' },
      ]}
    />
  );
}