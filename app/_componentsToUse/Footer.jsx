import LogoBetter from "./Logo";

const Footer = () => {
  const linkSections = [
    {
      title: "Resources",
      links: [
        "Home affordability calculator",
        "Mortgage calculator",
        "Free mortgage calculator",
        "Mortgage calculator with taxes",
        "Mortgage calculator with PMI",
        "Rent vs buy calculator",
        "HELOC payment calculator",
        "HELOC vs cash-out refinance calculator",
        "Buy a home",
        "Sell a home",
        "Get home inspection",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Media",
        "Partner With Us",
        "Learning center",
        "FAQs",
        "Investor Relations",
      ],
    },
    {
      title: "Contact Us",
      links: [
        "hello@better.com",
        "415-523-8837",
        "FAQ",
        "Glossary",
        "Legal",
        "NMLS Consumer Access",
        "Privacy Policy",
        "Terms of Use",
        "Disclosures & Licensing",
        "Affiliated Business",
        "Browser Disclaimer",
      ],
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <p className="text-2xl text-black font-bold">Better</p>
          <p className="max-w-[410px] mt-6">
            Better is a family of companies serving all your homeownership
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-8">
          {linkSections.map((section, index) => (
            <div key={index} className="flex-1">
              <h3 className="font-semibold text-2xl text-gray-900 mb-6">
                {section.title}
              </h3>
              <ul className="text-base md:text-lg space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
         </div>
       </div>

       <div className="py-6">
         <div className="space-y-4 text-gray-600 leading-relaxed">
           <p>
             1 Better Mortgage's One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See One Day Mortgage™ Terms and Conditions.
           </p>
 
           <p>
             2Better Mortgage's One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See One Day Heloc™ Terms and Conditions.
           </p>
 
           <p>
             3Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower's home value.
           </p>
         </div>
       </div>
     </div>
   );
 };

export default Footer;
