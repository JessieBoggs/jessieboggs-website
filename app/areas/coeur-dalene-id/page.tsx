import AreaPage from '../../components/AreaPage';

export default function CoeurDAleneID() {
  return (
    <AreaPage
      city="Coeur d'Alene"
      state="Idaho"
      stateAbbr="ID"
      county="Kootenai County"
      description="Coeur d'Alene is one of the most sought-after communities in the Pacific Northwest. The combination of Lake Coeur d'Alene, the surrounding mountains, and a vibrant downtown has made it a destination for buyers from across the region and beyond. I am licensed in Idaho and work with Coeur d'Alene buyers regularly. Whether you are relocating from western Washington, buying a second home on the lake, or putting down roots here for the first time, I know this market."
      marketNotes="Coeur d'Alene saw dramatic price appreciation between 2020 and 2022 as buyers poured in from higher cost markets. That appreciation has moderated and prices have come down from their peak, though they remain elevated compared to pre-pandemic levels. Inventory has improved significantly and buyers have more options and more negotiating room than they did two years ago. The lake and mountain lifestyle continues to attract strong demand so the market remains active, just less frenzied."
      topPrograms={[
        { name: 'Conventional Loans', reason: 'The most common fit for Coeur d\'Alene buyers given the price points in the market. Strong credit and a solid down payment get competitive rates.', href: '/loan-types/conventional' },
        { name: 'Jumbo Loans', reason: 'Many Coeur d\'Alene properties, especially lakefront and larger homes, exceed conforming loan limits. I have access to competitive jumbo products.', href: '/loan-types/jumbo-loans' },
        { name: 'VA Loans', reason: 'Idaho has a strong veteran community. Zero down, no PMI, and excellent rates for those who have served.', href: '/loan-types/va-loans' },
        { name: 'USDA Rural', reason: 'Some areas in the broader Kootenai County region qualify for USDA zero down financing. Worth checking if you are looking outside the city core.', href: '/loan-types/usda-rural' },
      ]}
      nearbyAreas={[
        { name: 'Post Falls, ID', href: '/areas/post-falls-id' },
        { name: 'Hayden, ID', href: '/areas/hayden-id' },
        { name: 'Rathdrum, ID', href: '/areas/rathdrum-id' },
        { name: 'Sandpoint, ID', href: '/areas/sandpoint-id' },
        { name: 'Spokane, WA', href: '/areas/spokane-wa' },
        { name: 'Liberty Lake, WA', href: '/areas/liberty-lake-wa' },
      ]}
      faqs={[
        { q: 'Has the Coeur d\'Alene market cooled down?', a: 'Yes, meaningfully from the peak. Prices are down from their highs, inventory is up, and buyers have more room to negotiate than they did in 2021 and 2022.' },
        { q: 'Can I get a VA loan in Coeur d\'Alene?', a: 'Absolutely. VA loans work the same way in Idaho as in Washington. I am licensed in Idaho and handle VA loans in Coeur d\'Alene regularly.' },
        { q: 'Are jumbo loans available in Coeur d\'Alene?', a: 'Yes. I have access to competitive jumbo products for properties above the conforming loan limit of $806,500.' },
        { q: 'What is the minimum down payment to buy in Coeur d\'Alene?', a: 'Depends on the loan type and price point. VA is zero down. Conventional can be as low as 3%. Jumbo loans typically require more.' },
        { q: 'Do you work with buyers relocating from out of state?', a: 'Yes, regularly. I can start your pre-approval remotely and walk you through the Idaho specific aspects of the purchase process.' },
        { q: 'What are the property taxes like in Kootenai County?', a: 'Idaho property taxes are generally lower than Washington. Kootenai County rates are competitive. I can walk you through estimated carrying costs when we run your numbers.' },
      ]}
    />
  );
}