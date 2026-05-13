import LoanPage from '../../components/LoanPage';
export const metadata = {
  title: 'Self-Employed Mortgage Loans Eastern WA | Jessie Boggs NMLS #2803455',
  description: 'Bank statement and self-employed mortgage loans in Eastern Washington and North Idaho. Your income is more than your tax return. Jessie Boggs NMLS #2803455.',
};
export default function SelfEmployed() {
  return (
    <LoanPage
      tag="Flexible"
      tagBg="#E4F0EC"
      tagColor="#2E5245"
      topColor="#3D6B5C"
      title="Self-Employed Loans"
      subtitle="Your income is more than your tax return."
      intro="If you own your own business, the way your income shows up on paper rarely tells the full story. I have been self-employed. I understand how business ownership structures income and I know the loan products built to work with your real financial picture, not just your 1040."
      whoFor="Self-employed borrowers, business owners, freelancers, contractors, and anyone whose income does not fit neatly into a W-2. If your tax returns show lower income due to business deductions, there are programs designed specifically for your situation."
      benefits={[
        'Bank statement loans using 12 to 24 months of statements',
        'Profit and loss statement loans available',
        'Asset depletion options for high-asset borrowers',
        'No tax returns required for many programs',
        'Your business ownership is treated as an asset, not a liability',
      ]}
      faqs={[
        { q: 'What is a bank statement loan?', a: '12 to 24 months of business or personal bank statements are used to calculate qualifying income instead of tax returns.' },
        { q: 'My tax returns show very little income due to deductions. Can I still qualify?', a: 'Yes. Bank statement programs look at actual deposits rather than taxable income, which often paints a much more accurate picture.' },
        { q: 'Do I need to have been self-employed for a certain amount of time?', a: 'Most programs require at least two years of self-employment history, though some exceptions exist.' },
      ]}
    />
  );
}