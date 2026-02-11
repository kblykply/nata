 "use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const CampaignsSection = () => {
  const tCampaigns = useTranslations("campaigns");

  return (
    <div className="px-6 md:px-20 py-12 bg-[radial-gradient(circle,_#e5e7eb_1px,_transparent_1px)] [background-size:20px_20px]">
      {/* Section Title */}
      <h2 className="text-center text-sm font-bold mb-10">
        {tCampaigns("sectionTitle")}
      </h2>

      {/* Campaign Images */}
      <div className="flex flex-col gap-8 items-center">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/kampanya1.png"
            alt={tCampaigns("imageAltVegaOtonomi")}
            width={900}
            height={300}
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/kampanya2.png"
            alt={tCampaigns("imageAltVegaCenter")}
            width={900}
            height={300}
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/kampanya3.png"
            alt={tCampaigns("imageAltMega1453")}
            width={900}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignsSection;
