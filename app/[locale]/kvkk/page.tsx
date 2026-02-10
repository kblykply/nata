"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function KVKKPage() {
  const t = useTranslations("kvkk");

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-sm leading-7 text-gray-800">
      <h1 className="text-2xl font-semibold mb-6">{t("title")}</h1>

      <p>
        <strong>İstmar Tem Gayrimenkul Yatırım İnşaat ve Ticaret Anonim Şirketi</strong> (&quot;İSTMAR&quot; / &quot;Company&quot;) {t("intro")}
      </p>

      <h2 className="text-lg font-semibold mt-8 mb-2">{t("section1Title")}</h2>
      <p>{t("section1Text")}</p>

      <ul className="list-disc ml-5 mt-2">
        <li><strong>{t("identityInfo")}</strong> {t("identityInfoDesc")}</li>
        <li><strong>{t("contactInfo")}</strong> {t("contactInfoDesc")}</li>
        <li><strong>{t("customerInfo")}</strong> {t("customerInfoDesc")}</li>
        <li><strong>{t("customerTransactionInfo")}</strong> {t("customerTransactionInfoDesc")}</li>
        <li><strong>{t("physicalSecurityInfo")}</strong> {t("physicalSecurityInfoDesc")}</li>
        <li><strong>{t("transactionSecurityInfo")}</strong> {t("transactionSecurityInfoDesc")}</li>
        <li><strong>{t("riskManagementInfo")}</strong> {t("riskManagementInfoDesc")}</li>
        <li><strong>{t("financialInfo")}</strong> {t("financialInfoDesc")}</li>
        <li><strong>{t("specialData")}</strong> {t("specialDataDesc")}</li>
      </ul>

      <h2 className="text-lg font-semibold mt-8 mb-2">{t("section2Title")}</h2>
      <p>{t("section2Text")}</p>

      <h2 className="text-lg font-semibold mt-8 mb-2">{t("section3Title")}</h2>
      <p>{t("section3Text")}</p>

      <h2 className="text-lg font-semibold mt-8 mb-2">{t("section4Title")}</h2>
      <p>{t("section4Text")}</p>

      <ul className="list-disc ml-5 mt-2">
        <li>{t("right1")}</li>
        <li>{t("right2")}</li>
        <li>{t("right3")}</li>
        <li>{t("right4")}</li>
        <li>{t("right5")}</li>
        <li>{t("right6")}</li>
        <li>{t("right7")}</li>
        <li>{t("right8")}</li>
      </ul>

      <h2 className="text-lg font-semibold mt-8 mb-2">{t("section5Title")}</h2>
      <p>{t("section5Text")}</p>

      <ul className="list-disc ml-5 mt-2">
        <li>{t("applicationMethod1")}</li>
        <li>{t("applicationMethod2")}</li>
        <li><a href="mailto:istmar@hs01.kep.tr" className="underline text-blue-600 hover:text-blue-800">istmar@hs01.kep.tr</a> {t("applicationMethod3Email")}</li>
      </ul>

      <p className="mt-4">{t("responseTime")}</p>

      <p className="mt-6">{t("moreInfo")}</p>
    </main>
  );
}
