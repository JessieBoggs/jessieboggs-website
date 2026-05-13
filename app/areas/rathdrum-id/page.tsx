import AreaPage from '../../components/AreaPage';
export const metadata = {
  title: 'Home Loans in Rathdrum ID | Jessie Boggs Mortgage NMLS #2803455',
  description: 'Mortgage loans in Rathdrum, Idaho. USDA zero down available. VA, FHA, and Conventional programs. Licensed in Idaho. Jessie Boggs NMLS #2803455.',
};
export default function RathdrumID() {
  return (
    <AreaPage
      city="Rathdrum"
      state="Idaho"
      stateAbbr="ID"
      county="Kootenai County"
      description="Rathdrum is a small city in northern Kootenai County that offers a quieter pace of life with reasonable proximity to Coeur d'Alene and Post Falls. It has become increasingly popular with buyers who want more space and a more rural feel without going too far from the amenities of the larger North Idaho communities. Many Rathdrum addresses qualify for USDA zero down financing."
      marketNotes="Rathdrum has seen growing interest from buyers who have been priced out of CDA and Post Falls or who simply prefer the character of a smaller community. Prices are generally lower than the larger Kootenai County cities and lot sizes tend to be larger. The USDA eligibility in this area is a significant advantage for buyers who qualify, as zero down financing makes homeownership much more accessible at Rathdrum price points."
      topPrograms={[
        { name: 'USDA Rural', reason: 'Rathdrum and the surrounding area are largely USDA eligible. Zero down financing is available for buyers who meet income requirements.', href: '/loan-types/usda-rural' },
        { name: 'Conventional Loans', reason: 'For buyers with a down payment ready. Competitive rates throughout Kootenai County.', href: '/loan-types/conventional' },
        { name: 'FHA Loans', reason: 'Low down payment option. A good fit for first-time buyers in Rathdrum.', href: '/loan-types/fha-loans' },
        { name: 'VA Loans', reason: 'Zero down for eligible veterans. Works throughout Idaho.', href: '/loan-types/va-loans' },
      ]}
      nearbyAreas={[
        { name: 'Coeur d\'Alene, ID', href: '/areas/coeur-dalene-id' },
        { name: 'Post Falls, ID', href: '/areas/post-falls-id' },
        { name: 'Hayden, ID', href: '/areas/hayden-id' },
        { name: 'Athol, ID', href: '/areas/athol-id' },
        { name: 'Sandpoint, ID', href: '/areas/sandpoint-id' },
        { name: 'Deer Park, WA', href: '/areas/deer-park-wa' },
      ]}
      faqs={[
        { q: 'Does Rathdrum qualify for USDA financing?', a: 'Most of Rathdrum qualifies. I can check a specific address for you quickly.' },
        { q: 'How far is Rathdrum from Coeur d\'Alene?', a: 'About 15 to 20 minutes north of CDA. Very manageable for commuters.' },
        { q: 'What are home prices in Rathdrum?', a: 'Generally more affordable than CDA and Post Falls. Good value for buyers who want more space.' },
        { q: 'Are you licensed to do loans in Rathdrum?', a: 'Yes. I am licensed in Idaho and work with Rathdrum buyers regularly.' },
        { q: 'Can I build on land in the Rathdrum area?', a: 'Yes. Rural construction is common in this area and I can help you navigate construction financing.' },
        { q: 'What are the USDA income limits for Kootenai County?', a: 'Generally around $110,000 to $130,000 for a family of four, adjusting upward for larger households. Many buyers who think they earn too much actually qualify.' },
      ]}
    />
  );
}