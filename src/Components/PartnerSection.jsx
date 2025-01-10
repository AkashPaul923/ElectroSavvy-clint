

const partnersData = [
    {
      "id": 1,
      "name": "brac",
      "logo": "https://freelogopng.com/images/all_img/1679819925brac-logo-png.png"
    },
    {
      "id": 2,
      "name": "Nagad",
      "logo": "https://freelogopng.com/images/all_img/1683082228nagad-transparent-logo.png"
    },
    {
      "id": 3,
      "name": "ashian paints",
      "logo": "https://freelogopng.com/images/1685428208asian-paints-logo-png.png"
    },
    {
      "id": 4,
      "name": "Fedex",
      "logo": "https://freelogopng.com/images/1685532074fedex-logo-png.png"
    },
    {
      "id": 5,
      "name": "Bank of America",
      "logo": "https://freelogopng.com/images/1658984327bank-of-america-logo.png"
    },
    {
      "id": 6,
      "name": "airtel",
      "logo": "https://freelogopng.com/images/1680513192airtel-logo-png.png"
    }
  ]
  

const PartnerSection = () => {
  return (
    <div className="py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="card  shadow-xl p-4 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
