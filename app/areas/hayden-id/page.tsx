import AreaPage from '../../components/AreaPage';
export const metadata = {
  title: 'Home Loans in Hayden ID | Jessie Boggs Mortgage NMLS #2803455',
  description: 'Mortgage loans in Hayden, Idaho. USDA zero down available. VA, FHA, and Conventional programs. Licensed in Idaho. Jessie Boggs NMLS #2803455.',
};
export default function HaydenID() {
  return (
    <AreaPage
      city="Hayden"
      state="Idaho"
      stateAbbr="ID"
      county="Kootenai County"
      description="Hayden sits just north of Coeur d'Alene and has become one of the most popular communities in the Idaho Panhandle for buyers who want the North Idaho lifestyle at a more accessible price point than CDA proper. Good schools, strong community character, and easy access to the lake and mountains make it a consistent favorite for families relocating to the region."
      marketNotes="Hayden has absorbed significant demand from buyers who found Coeur d'Alene prices too high. New construction has been active and there is a good mix of established neighborhoods and newer development. Prices are generally more accessible than CDA while still offering the Kootenai County lifestyle. Many addresses in and around Hayden qualify for USDA financing which opens the door to zero down purchases for buyers who meet the income requirements."
      topPrograms={[
        { name: 'USDA Rural', reason: 'Many Hayden area addresses qualify for zero down USDA financing. Worth checking before you assume you need a down payment.', href: '/loan-types/usda-rural' },
        { name: 'Conventional Loans', reason: 'Strong fit for buyers with solid credit and a down payment. Competitive rates throughout Kootenai County.', href: '/loan-types/conventional' },
        { name: 'FHA Loans', reason: 'Low down payment option for first-time buyers or buyers with developing credit profiles.', href: '/loan-types/fha-loans' },
        { name: 'VA Loans', reason: 'Zero down for eligible veterans. Idaho has a strong veteran community and VA loans work well throughout Kootenai County.', href: '/loan-types/va-loans' },
      ]}
      nearbyAreas={[
        { name: 'Coeur d\'Alene, ID', href: '/areas/coeur-dalene-id' },
        { name: 'Post Falls, ID', href: '/areas/post-falls-id' },
        { name: 'Rathdrum, ID', href: '/areas/rathdrum-id' },
        { name: 'Athol, ID', href: '/areas/athol-id' },
        { name: 'Sandpoint, ID', href: '/areas/sandpoint-id' },
        { name: 'Liberty Lake, WA', href: '/areas/liberty-lake-wa' },
      ]}
      faqs={[
        { q: 'Does Hayden qualify for USDA financing?', a: 'Many addresses in and around Hayden do qualify. I can check a specific property address for you quickly.' },
        { q: 'How does Hayden compare to Coeur d\'Alene for home prices?', a: 'Generally more affordable for comparable properties. Many buyers choose Hayden specifically for that value difference.' },
        { q: 'What school district serves Hayden?', a: 'Hayden is served by the Coeur d\'Alene School District for most addresses. Some areas may be in other districts. Worth confirming for specific properties.' },
        { q: 'Is new construction available in Hayden?', a: 'Yes. There has been active new construction in Hayden and I can help you navigate construction loan financing if you are building.' },
        { q: 'Are you licensed to do loans in Hayden?', a: 'Yes. I am licensed in Idaho and work with Hayden buyers regularly.' },
        { q: 'What is the commute from Hayden to Coeur d\'Alene like?', a: 'Very short. Hayden is directly adjacent to CDA. Most residents are 10 to 15 minutes from downtown Coeur d\'Alene.' },
      ]}
    />
  );
}