import BuyerPage from '../../components/BuyerPage';

export default function MoveUpBuyers() {
  return (
    <BuyerPage
      tag="Move-Up Buyers"
      tagBg="#F5E8E1"
      tagColor="#8F4228"
      accentColor="#B85C38"
      title="Your next home should work harder for your family."
      subtitle="Moving up is not just about more space. It is about making a smart financial decision for the next chapter."
      intro="Whether you are buying before you sell, selling before you buy, or navigating a bridge loan situation, having the right strategy from the start makes all the difference. I will help you structure the move in a way that minimizes cost, stress, and risk."
      steps={[
        { title: 'We review your current equity position', text: 'Understanding what you have built in your current home shapes every decision that follows.' },
        { title: 'We map out your timing strategy', text: 'Buy first or sell first? Bridge loan or contingency offer? We will find the approach that fits your market and your situation.' },
        { title: 'We structure your financing for the move', text: 'Using your existing equity effectively for your down payment while managing two transactions at once.' },
        { title: 'We get your pre-approval in place', text: 'A strong pre-approval gives you the ability to move quickly when the right home comes along.' },
        { title: 'I coordinate both sides of the transaction', text: 'I stay in constant communication so you always know where both the sale and the purchase stand.' },
      ]}
      programs={[
        { name: 'Conventional', desc: 'Often the best fit for move-up buyers with strong equity and established credit.', href: '/loan-types/conventional' },
        { name: 'Jumbo Loans', desc: 'If you are moving up to a higher-value property above the conforming limit.', href: '/loan-types/jumbo-loans' },
        { name: 'Construction Loans', desc: 'Building your forever home instead of buying one. My specialty.', href: '/loan-types/construction-renovation' },
      ]}
      faqs={[
        { q: 'Should I buy first or sell first?', a: 'It depends on your market and financial position. In a competitive market buying first gives you more leverage. I will help you think through the risk on both sides.' },
        { q: 'Can I use my current home\'s equity for the down payment?', a: 'Yes. There are several ways to access equity including a bridge loan, HELOC, or timing the sale and purchase to align at closing.' },
        { q: 'What is a bridge loan?', a: 'A short-term loan that uses your current home\'s equity to fund the down payment on your new home before your old home sells.' },
        { q: 'Can I make an offer contingent on selling my current home?', a: 'Yes though contingent offers are less competitive. We will discuss whether the market conditions support this approach.' },
        { q: 'What if my current home does not sell before I need to close?', a: 'We plan for this scenario from the start. Understanding your financial exposure and having backup options in place is part of the strategy.' },
        { q: 'Should I consider keeping my current home as a rental?', a: 'Possibly. If the numbers work it can be a smart long-term move. We will run the analysis together.' },
      ]}
    />
  );
}