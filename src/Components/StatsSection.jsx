

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: "15,000+",
      label: "Service Providers",
    },
    {
      id: 2,
      value: "2,00,000+",
      label: "Order Served",
    },
    {
      id: 3,
      value: "1,00,000+",
      label: "5 Star Received",
    },
  ];

  return (
    <div className="bg-base-200 py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="px-6 bg-base-100 py-10 rounded-lg">
              <h3 className="text-3xl font-bold ">{stat.value}</h3>
              <p className=" mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
