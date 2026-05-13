import AreaPage from '../../components/AreaPage';

export default function SandpointID() {
  return (
    <AreaPage
      city="Sandpoint"
      state="Idaho"
      stateAbbr="ID"
      county="Bonner County"
      description="Sandpoint is one of the most scenic communities in the Pacific Northwest, situated on Lake Pend Oreille with Schweitzer Mountain Resort just up the hill. It draws buyers from across the country who want a mountain and lake lifestyle, whether as a primary residence or a second home. I am licensed in Idaho and work with Sandpoint area buyers on everything from primary home purchases to vacation properties."
      marketNotes="Sandpoint functions somewhat like a resort market with pricing and demand patterns that differ from the rest of North Idaho. Prices are among the highest in the Idaho Panhandle and inventory is limited, particularly for lakefront and ski-access properties. The broader Bonner County area including Hope, Clark Fork, and Priest River offers more affordable options for buyers who want the general area without the Sandpoint price premium. If you are flexible on location within the county there is good value to be found."
      topPrograms={[
        { name: 'Conventional Loans', reason: 'The primary fit for most Sandpoint buyers given the price points. Strong credit and a meaningful down payment are typically required.', href: '/loan-types/conventional' },
        { name: 'Jumbo Loans', reason: 'Many Sandpoint properties, especially on the lake or in premium locations, exceed conforming loan limits. I have access to competitive jumbo financing.', href: '/loan-types/jumbo-loans' },
        { name: 'VA Loans', reason: 'Zero down for eligible veterans. Works throughout Idaho including the Sandpoint area.', href: '/loan-types/va-loans' },
        { name: 'USDA Rural', reason: 'Some areas in Bonner County outside of Sandpoint proper qualify for USDA zero down financing.', href: '/loan-types/usda-rural' },
      ]}
      nearbyAreas={[
        { name: 'Coeur d\'Alene, ID', href: '/areas/coeur-dalene-id' },
        { name: 'Hayden, ID', href: '/areas/hayden-id' },
        { name: 'Rathdrum, ID', href: '/areas/rathdrum-id' },
        { name: 'Athol, ID', href: '/areas/athol-id' },
        { name: 'Newport, WA', href: '/areas/newport-wa' },
        { name: 'Post Falls, ID', href: '/areas/post-falls-id' },
      ]}
      faqs={[
        { q: 'Are jumbo loans available in Sandpoint?', a: 'Yes. Many Sandpoint properties exceed conforming loan limits and I have access to competitive jumbo financing for qualified buyers.' },
        { q: 'Can I buy a vacation home in Sandpoint?', a: 'Yes. Second home financing is available though the requirements differ slightly from primary residence loans. I can walk you through the specifics.' },
        { q: 'What are home prices like in Sandpoint?', a: 'Among the highest in North Idaho. Lakefront and ski-access properties command significant premiums. The broader Bonner County area offers more value for buyers with flexibility.' },
        { q: 'Is USDA financing available in Sandpoint?', a: 'The city of Sandpoint itself may not qualify but parts of Bonner County outside the city do. I can check specific addresses.' },
        { q: 'Are you licensed for Idaho loans?', a: 'Yes. I am licensed in Idaho and work with Sandpoint area buyers regularly.' },
        { q: 'What is the market like in Sandpoint right now?', a: 'More inventory than 2021 and 2022 and sellers have more realistic expectations. Still an active market with strong underlying demand.' },
      ]}
    />
  );
}