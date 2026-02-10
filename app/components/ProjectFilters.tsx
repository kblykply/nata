 "use client";
 import { useState } from "react";
 import { AnimatePresence, motion } from "framer-motion";
 import { useTranslations } from "next-intl";
 import Projects from "./projects";
 import Ikıncı from "./ikinciel";

 export default function NewProjectsFilterSection() {
   const t = useTranslations("home");
   const [activeTab, setActiveTab] = useState<"yeni" | "ikinci">("yeni");

   return (
     <div className="relative max-w-screen-xl mx-auto px-0 py-6 bg-white rounded-2xl space-y-5 font-sans">
       {/* Heading */}
       <h2 className="text-3xl px-6 font-semibold text-gray-800">
         {t("ongoingHeadingMain")}{" "}
         <span className="text-[#ab1e3b]">{t("ongoingHeadingHighlight")}</span>
       </h2>

       {/* Tab Switcher */}
       <div className="px-6 flex items-center space-x-2">
         <button
           onClick={() => setActiveTab("yeni")}
           className={`px-6 py-2.5 rounded-full text-sm font-semibold transition ${
             activeTab === "yeni"
               ? "bg-black text-white"
               : "bg-gray-100 text-gray-700"
           }`}
         >
           {t("tabNewProjects")}
         </button>
         <button
           onClick={() => setActiveTab("ikinci")}
           className={`px-6 py-2.5 rounded-full text-sm font-semibold transition ${
             activeTab === "ikinci"
               ? "bg-black text-white"
               : "bg-gray-100 text-gray-700"
           }`}
         >
           {t("tabOtherProjects")}
         </button>
       </div>

       {/* Animated Tab Content */}
       <div className="mt-4 px-6">
         <AnimatePresence mode="wait">
           {activeTab === "yeni" ? (
             <motion.div
               key="yeni"
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 30 }}
               transition={{ duration: 0.3 }}
             >
               <Projects />
             </motion.div>
           ) : (
             <motion.div
               key="ikinci"
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -30 }}
               transition={{ duration: 0.3 }}
             >
               <Ikıncı />
             </motion.div>
           )}
         </AnimatePresence>
       </div>
     </div>
   );
 }
