const Partners = () => {
  const partners = [
    { name: "AWS", logo: "/partners/aws.png" },
    { name: "Snowflake", logo: "/partners/snowflake.png" },
    { name: "Salesforce", logo: "/partners/salesforce.png" },
    { name: "Databricks", logo: "/partners/databricks.png" },
    { name: "Azure", logo: "/partners/azure.png" },
    { name: "Google Cloud", logo: "/partners/gcloud.png" },
    { name: "NVIDIA", logo: "/partners/nvidia.png" },
    { name: "BigQuery", logo: "/partners/bigquery.png" },
    { name: "ServiceNow", logo: "/partners/servicenow.png" },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
