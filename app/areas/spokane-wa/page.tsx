import AreaPage from '../../components/AreaPage';
export const metadata = {
  title: 'Home Loans in Spokane WA | Jessie Boggs Mortgage NMLS #2803455',
  description: 'Mortgage loans in Spokane, Washington. VA, USDA, FHA, Conventional, and Construction loans. Same-day pre-approvals. Jessie Boggs NMLS #2803455.',
};
export default function SpokaneWA() {
  return (
    <AreaPage
      city="Spokane"
      state="Washington"
      stateAbbr="WA"
      county="Spokane County"
      description="Spokane is the largest city in Eastern Washington and the hub of the Inland Northwest. As a mortgage loan strategist based in the region I work with Spokane buyers every day across every price range and loan type. Whether you are buying your first home in the South Hill, upsizing in the North Side, or investing near downtown, I know this market and I can get you the right loan for your situation."
      marketNotes="Spokane has one of the more diverse real estate markets in the Pacific Northwest. You have established neighborhoods with mature trees and character homes, newer construction on the edges of the city, and everything in between. Prices are meaningfully lower than Seattle or Portland which continues to draw buyers from western Washington. The market has cooled from the 2021 and 2022 frenzy but well-priced homes in good condition still move. Buyers who come in with a solid pre-approval and realistic expectations are doing well right now."
      topPrograms={[
        { name: 'Conventional Loans', reason: 'The most common fit for Spokane buyers with solid credit and a down payment. Competitive rates and flexible terms.', href: '/loan-types/conventional' },
        { name: 'VA Loans', reason: 'Spokane has a strong veteran community with proximity to Fairchild Air Force Base. Zero down, no PMI, and the best rates available for those who qualify.', href: '/loan-types/va-loans' },
        { name: 'FHA Loans', reason: 'A strong option for first-time buyers or anyone building credit. Down payments as low as 3.5%.', href: '/loan-types/fha-loans' },
        { name: 'Construction Loans', reason: 'New construction is active in Spokane. My decade in residential construction means I understand these projects at a level most loan officers do not.', href: '/loan-types/construction-renovation' },
      ]}
      nearbyAreas={[
        { name: 'Spokane Valley, WA', href: '/areas/spokane-valley-wa' },
        { name: 'Deer Park, WA', href: '/areas/deer-park-wa' },
        { name: 'Liberty Lake, WA', href: '/areas/liberty-lake-wa' },
        { name: 'Airway Heights, WA', href: '/areas/airway-heights-wa' },
        { name: 'Coeur d\'Alene, ID', href: '/areas/coeur-dalene-id' },
        { name: 'Post Falls, ID', href: '/areas/post-falls-id' },
      ]}
      faqs={[
        { q: 'What is the average home price in Spokane right now?', a: 'Median home prices in Spokane have been in the $300,000 to $380,000 range depending on the neighborhood and property type. I can give you a current read on specific areas when we talk.' },
        { q: 'Is Spokane a good market to buy in right now?', a: 'Yes for buyers who are ready. Inventory is better than it has been in years, sellers are more willing to negotiate, and you are not competing against a dozen offers on every listing.' },
        { q: 'What loan programs are available near Fairchild Air Force Base?', a: 'VA loans are an excellent fit for active duty and veteran buyers in the Spokane area. I am very familiar with the VA program and can walk you through everything your benefit covers.' },
        { q: 'Can I buy in Spokane with no down payment?', a: 'Possibly. VA and USDA programs both allow zero down. VA eligibility depends on your service history. Some Spokane area addresses qualify for USDA. Let me check your specific situation.' },
        { q: 'How long does it take to get a pre-approval in Spokane?', a: 'I turn around pre-approvals same day in most cases. Once you submit your information I will have a pre-approval letter ready for you quickly so you can move when the right home comes along.' },
        { q: 'Do you work with first-time buyers in Spokane?', a: 'Absolutely. A significant portion of my clients are first-time buyers. I walk you through every step and make sure you understand what you are getting into before you ever sign anything.' },
      ]}
    />
  );
}