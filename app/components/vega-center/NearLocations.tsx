"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
  MarkerClusterer,
} from "@react-google-maps/api";

const vegaAvms = [
  {
    id: "aquavega",
    name: "AquaVega Aquarium",
    coords: [39.88782, 32.93512], // Located inside Nata Vega Outlet, near IKEA
    icon: "/icons/aquavega.png",
    url: "https://www.aquavega.com.tr/", // fallback to social
    size: [70, 70],
  },
  {
    id: "eskisehir",
    name: "Vega Outlet Eskişehir",
    coords: [39.781511220709724, 30.479342593309756],
    icon: "/icons/Eskis╠ºehir.png",
    url: "https://www.vegaoutlet.com.tr/", // instagram page
    size: [70, 70],
  },
  {
    id: "istanbul",
    name: "Vega İstanbul",
    coords: [41.092422986394176, 28.903546427307614],
    icon: "/icons/istanbul.png",
    url: "https://www.vegaavmistanbul.com/", // instagram
    size: [70, 70],
  },
  {
    id: "natavegaoutlet",
    name: "Nata Vega Outlet",
    coords: [39.88748717217052, 32.93447179046967],
    icon: "/icons/natavegaoutlet.png",
    url: "https://www.natavega.com.tr/",
    size: [70, 70],
  },
  {
    id: "silivri",
    name: "Vega Silivri",
    coords: [41.077699686463525, 28.251653183796208],
    icon: "/icons/silivri.png",
    url: "https://vegaavmsilivri.com/", // fallback IG
    size: [70, 70],
  },
  {
    id: "subayevleri",
    name: "Vega Subayevleri",
    coords: [39.97569121868903, 32.88370383957994],
    icon: "/icons/subayevleri.png",
    url: "https://vegaavmsubayevleri.com/", // fallback IG
    size: [70, 70],
  },
  {
    id: "vegacadde",
    name: "Vega Cadde",
    coords: [39.9461513892066, 32.71575214629393], // based on Instagram location listing :contentReference[oaicite:1]{index=1}
    icon: "/icons/vegacadde.png",
    url: "https://vegacadde.com/", 
    size: [70, 70],
  },
  {
    id: "vegacenter",
    name: "Vega Center",
    coords: [39.913899, 32.767134], // align with project marker location
    icon: "/icons/vegacenter.png",
    url: "https://vegacenter.com.tr/", // fallback IG
    size: [70, 70],
  },
  {
    id: "vegamaxi",
    name: "Vega Maxi",
    coords: [41.08268667628786, 28.20442451024029],
    icon: "/icons/vegamaxi.png",
    url: "https://vegamaxiavm.com/", // fallback IG
    size: [70, 70],
  },
  {
    id: "yalova",
    name: "Vega Yalova",
    coords: [40.65320226567596, 29.255007708375175],
    icon: "/icons/yalova.png",
    url: "https://www.vegaavmyalova.com/", // fallback IG
    size: [70, 70],
  },
];

const places  = [
  {
    id: 1,
    category: "malls",
    coords: [39.9095568, 32.7619682],
    name: "Maidan",
    description: "2 dk, 700 metre"
  },
  {
    id: 2,
    category: "schools",
    coords: [39.9107176, 32.7619986],
    name: "Ankara Özel Tevfik Fikret Okulları",
    description: "3 dk, 800 metre"
  },
  {
    id: 3,
    category: "schools",
    coords: [39.9117683, 32.7632051],
    name: "Sembol Özel Öğretim Kursu",
    description: "1 dk, 350 metre"
  },
  {
    id: 4,
    category: "markets",
    coords: [39.9117884, 32.7554803],
    name: "ULAK Haberleşme",
    description: "1 dk, 450 metre"
  },
  {
    id: 5,
    category: "markets",
    coords: [39.9156105, 31.5478882],
    name: "Aspilsan Enerji",
    description: "1 dk, 180 metre"
  },
  {
    id: 6,
    category: "ministries",
    coords: [39.9157398, 32.7647352],
    name: "Anahtar Parti Ankara İl Başkanlığı",
    description: "1 dk, 180 metre"
  },
  {
    id: 7,
    category: "markets",
    coords: [39.9161107, 32.7650722],
    name: "Büyük Birlik Partisi Genel Merkez",
    description: "1 dk, 260 metre"
  },
  {
    id: 8,
    category: "markets",
    coords: [39.999775, 32.7214826],
    name: "Aselsan Net",
    description: "1 dk, 220 metre"
  },
  {
    id: 9,
    category: "schools",
    coords: [39.9106708, 32.7661057],
    name: "Mustafa Kemal Final Akademi Anadolu Lisesi",
    description: "2 dk, 700 metre"
  },
  {
    id: 10,
    category: "schools",
    coords: [39.9114439, 32.7682096],
    name: "Yasemin Karakaya Orta Okulu",
    description: "2 dk, 650 metre"
  },
  {
    id: 11,
    category: "malls",
    coords: [39.9087184, 32.7738704],
    name: "Kentpark AVM",
    description: "4 dk, 1.8 km"
  },
  {
    id: 12,
    category: "malls",
    coords: [39.9095329, 32.7756851],
    name: "Cepa AVM",
    description: "5 dk, 3.5 km"
  },
  {
    id: 13,
    category: "markets",
    coords: [39.8935549, 32.7535625],
    name: "Havelsan",
    description: "5 dk, 1.7 km"
  },
  {
    id: 14,
    category: "markets",
    coords: [39.9579714, 32.7956168],
    name: "Gençlik ve Spor Bakanlığı",
    description: "13 dk, 11.5 km"
  },
  {
    id: 15,
    category: "markets",
    coords: [39.9147609, 32.7787748],
    name: "Ankara Bölge Adliye Mahkemesi",
    description: "5 dk, 2 km"
  },
  {
    id: 16,
    category: "markets",
    coords: [39.9115598, 32.7785842],
    name: "STM Savunma Teknolojileri",
    description: "4 dk, 1.8 km"
  },
  {
    id: 17,
    category: "markets",
    coords: [39.9094391, 32.777854],
    name: "Sanayi ve Teknoloji Bakanlığı Rehberlik ve Teftiş Başkanlığı",
    description: "4 dk, 3.2 km"
  },
  {
    id: 18,
    category: "markets",
    coords: [39.9091096, 32.778033],
    name: "T.C. Sanayi ve Teknoloji Bakanlığı",
    description: "4 dk, 3.1 km"
  },
  {
    id: 19,
    category: "markets",
    coords: [39.9110751, 32.783008],
    name: "Devlet Su İşleri Genel Müdürlüğü",
    description: "4 dk, 2.4 km"
  },
  {
    id: 20,
    category: "markets",
    coords: [39.9111377, 32.7443834],
    name: "Cumhuriyet Halk Partisi",
    description: "5 dk, 2.7 km"
  },
  {
    id: 21,
    category: "schools",
    coords: [39.9136752, 32.7859479],
    name: "Lokman Hekim Üniversitesi",
    description: "5 dk, 2.7 km"
  },
  {
    id: 22,
    category: "markets",
    coords: [39.9112895, 32.7843971],
    name: "Ankara Ticaret İl Müdürlüğü",
    description: "4 dk, 3.9 km"
  },
  {
    id: 23,
    category: "markets",
    coords: [39.9116789, 32.7742904],
    name: "Albaraka Türk Başkent Kurumsal Şubesi",
    description: "3 dk, 1.3 km"
  },
  {
    id: 24,
    category: "schools",
    coords: [39.9112828, 32.7637622],
    name: "Türk Akreditasyon Kurumu TÜRKAK",
    description: "1 dk, 400 metre"
  },
  {
    id: 25,
    category: "schools",
    coords: [39.9111489, 32.7634186],
    name: "Özel Sembol Anadolu Lisesi",
    description: "2 dk, 500 metre"
  },
  {
    id: 26,
    category: "markets",
    coords: [39.9099979, 32.7594837],
    name: "Avrupa Birliği Genel Sekreterliği",
    description: "3 dk, 1 km"
  },
  {
    id: 27,
    category: "markets",
    coords: [39.9097097, 32.7592972],
    name: "Dışişleri Bakanlığı Avrupa Birliği Başkanlığı",
    description: "3 dk, 1 km"
  },
  {
    id: 28,
    category: "markets",
    coords: [39.9086491, 32.7589331],
    name: "TOBB Türkiye Odalar ve Borsalar Birliği",
    description: "3 dk, 1.1 km"
  },
  {
    id: 29,
    category: "malls",
    coords: [39.9090682, 32.7526068],
    name: "Tepe Prime",
    description: "5 dk, 2 km"
  },
  {
    id: 30,
    category: "malls",
    coords: [39.9084099, 32.7505028],
    name: "Mahall Ankara",
    description: "4 dk, 2 km"
  },
  {
    id: 31,
    category: "schools",
    coords: [39.9080443, 32.7476196],
    name: "ODTÜ Teknokent Bilişim ve İnovasyon Merkezi",
    description: "5 dk, 2.3 km"
  },
  {
    id: 32,
    category: "markets",
    coords: [39.9069621, 32.7475851],
    name: "Tarım Bakanlığı Danıştay",
    description: "5 dk, 2.3 km"
  },
  {
    id: 33,
    category: "markets",
    coords: [39.9069822, 32.7398603],
    name: "AFAD",
    description: "6 dk, 3.4 km"
  },
  {
    id: 34,
    category: "markets",
    coords: [39.9069822, 32.7398603],
    name: "Tarım ve Orman Bakanlığı",
    description: "6 dk, 3.4 km"
  },
  {
    id: 35,
    category: "markets",
    coords: [39.9104666, 32.7912125],
    name: "Ticaret Bakanlığı",
    description: "6 dk, 3.2 km"
  },
  {
    id: 36,
    category: "hospitals",
    coords: [39.9000471, 32.7547861],
    name: "Bilkent Şehir Hastanesi",
    description: "7 dk, 3 km"
  },
  {
    id: 37,
    category: "markets",
    coords: [39.9065984, 32.7605169],
    name: "Ahmet Hamdi Akseki Camii",
    description: "8 dk, 3.7 km"
  },
  {
    id: 38,
    category: "markets",
    coords: [0, 0],
    name: "Diyanet İşleri Başkanlığı",
    description: "8 dk, 3.7 km"
  },
  {
    id: 39,
    category: "malls",
    coords: [39.9067365, 32.7621741],
    name: "Bilkent Metro",
    description: "5 dk, 2.8 km"
  },
  {
    id: 40,
    category: "malls",
    coords: [39.9069621, 32.7475851],
    name: "Tarım ve Orman Bakanlığı Metro",
    description: "5 dk, 2.2 km"
  },
  {
    id: 41,
    category: "schools",
    coords: [39.9069973, 32.7295605],
    name: "Ortadoğu Teknik Üniversitesi",
    description: "10 dk, 6.1 km"
  },
  {
  id: 140,
  category: "business",
  coords: [39.91561, 32.75948], 
  name: "Aspilsan Enerji A.Ş.",
  description: "1 km, 3 dk" // ~1 km southwest of VEGA CENTER; ~3 min drive
},
{
  id: 141,
  category: "business",
  coords: [39.89355, 32.75356],
  name: "HAVELSAN",
  description: "2.7 km, 6 dk" // GG
},
{
  id: 142,
  category: "business",
  coords: [39.90956, 32.76197],
  name: "Maidan",
  description: "450 m, 1 dk" // Already in your data; ~450 m south
},
{
  id: 143,
  category: "business",
  coords: [39.90907, 32.75261],
  name: "Tepe Prime",
  description: "1.5 km, 4 dk" // GG
},
{
  id: 144,
  category: "business",
  coords: [39.91179, 32.75548],
  name: "ULAK Haberleşme A.Ş.",
  description: "1.3 km, 4 dk" // GG
},
{
  id: 145,
  category: "business",
  coords: [39.90841, 32.75050],
  name: "Mahall Ankara",
  description: "1.7 km, 5 dk" // GG
},
{
  id: 146,
  category: "business",
  coords: [39.90804, 32.74762],
  name: "ODTÜ Teknokent Bilişim ve İnovasyon Merkezi",
  description: "2.2 km, 6 dk" // GG
},
{
  id: 147,
  category: "business",
  coords: [39.91156, 32.77858],
  name: "STM Savunma Teknolojileri",
  description: "1.8 km, 5 dk" // GG
},
{
  id: 148,
  category: "business",
  coords: [39.999775, 32.721483],
  name: "Aselsan Net",
  description: "6.0 km, 10 dk" // GG
},
{
  id: 149,
  category: "business",
  coords: [39.90696, 32.74759],
  name: "ODTÜ Teknokent",
  description: "2.2 km, 6 dk" // GG
},
{
  id: 150,
  category: "business",
  coords: [39.91520, 32.80800],
  name: "Hacettepe Teknokent",
  description: "4.2 km, 9 dk" // address from STM PDF
},  {
    id: 200,
    category: "ministries",
    coords: [39.923150, 32.815270],
    name: "T.C. Cumhurbaşkanlığı Külliyesi",
    description: "5.9 km, 12 dk"
  },
  {
    id: 201,
    category: "ministries",
    coords: [39.911850, 32.768500],
    name: "Atatürk Kültür, Dil ve Tarih Yüksek Kurumu",
    description: "500 m, 2 dk"
  },
  {
    id: 202,
    category: "ministries",
    coords: [39.903700, 32.775100],
    name: "Diyanet İşleri Başkanlığı",
    description: "1.0 km, 3 dk"
  },
  {
    id: 203,
    category: "ministries",
    coords: [39.907000, 32.766600],
    name: "AKP Genel Merkezi",
    description: "800 m, 2 dk"
  },
  {
    id: 204,
    category: "ministries",
    coords: [39.906000, 32.739900],
    name: "AFAD",
    description: "2.8 km, 7 dk"
  },
  {
    id: 205,
    category: "ministries",
    coords: [39.911075, 32.783008],
    name: "Devlet Su İşleri Genel Müdürlüğü",
    description: "1.8 km, 5 dk"
  },
  {
    id: 206,
    category: "ministries",
    coords: [39.908650, 32.758933],
    name: "Türkiye Odalar ve Borsalar Birliği",
    description: "1.0 km, 3 dk"
  },
  {
    id: 207,
    category: "ministries",
    coords: [39.913000, 32.771000],
    name: "Milli Güvenlik Kurulu",
    description: "400 m, 2 dk"
  },
  {
    id: 208,
    category: "ministries",
    coords: [39.909000, 32.759500],
    name: "Avrupa Birliği Genel Sekreterliği",
    description: "1.1 km, 3 dk"
  },
  {
    id: 209,
    category: "ministries",
    coords: [39.906962, 32.747585],
    name: "T.C. Tarım ve Orman Bakanlığı",
    description: "2.2 km, 6 dk"
  },
  {
    id: 210,
    category: "ministries",
    coords: [39.909109, 32.778033],
    name: "T.C. Sanayi ve Teknoloji Bakanlığı",
    description: "1.6 km, 4 dk"
  },
  {
    id: 211,
    category: "ministries",
    coords: [39.910467, 32.791213],
    name: "T.C. Ticaret Bakanlığı",
    description: "2.5 km, 6 dk"
  },
  {
    id: 212,
    category: "ministries",
    coords: [39.909439, 32.777854],
    name: "CHP Genel Merkezi",
    description: "1.4 km, 4 dk"
  },
  {
    id: 213,
    category: "ministries",
    coords: [39.911289, 32.784397],
    name: "Ankara Ticaret İl Müdürlüğü",
    description: "2.0 km, 5 dk"
  },
  {
    id: 214,
    category: "ministries",
    coords: [39.911283, 32.763762],
    name: "Türk Akreditasyon Kurumu",
    description: "200 m, 1 dk"
  },
  {
    id: 215,
    category: "ministries",
    coords: [39.916110, 32.765072],
    name: "BBP Genel Merkezi",
    description: "1.6 km, 4 dk"
  },
  {
    id: 216,
    category: "ministries",
    coords: [39.914760, 32.778775],
    name: "Ankara Bölge Adliye Mahkemesi",
    description: "1.8 km, 5 dk"
  },
  {
    id: 217,
    category: "ministries",
    coords: [39.907000, 32.759300],
    name: "Sayıştay Başkanlığı",
    description: "1.1 km, 3 dk"
  },
  {
    id: 218,
    category: "ministries",
    coords: [39.906962, 32.747585],
    name: "Danıştay",
    description: "2.2 km, 6 dk"
  },
  {
    id: 219,
    category: "ministries",
    coords: [39.906982, 32.739860],
    name: "Yargıtay",
    description: "3.0 km, 7 dk"
  },
  {
    id: 220,
    category: "ministries",
    coords: [39.906598, 32.760517],
    name: "Bilgi Teknolojileri ve İletişim Kurumu",
    description: "2.7 km, 7 dk"
  },
  {
    id: 221,
    category: "ministries",
    coords: [39.905000, 32.770000],
    name: "T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı",
    description: "1.2 km, 4 dk"
  },
  {
    id: 222,
    category: "ministries",
    coords: [39.906000, 32.760000],
    name: "T.C. Sağlık Bakanlığı",
    description: "2.5 km, 6 dk"
  },
  {
    id: 223,
    category: "ministries",
    coords: [39.907000, 32.761000],
    name: "Hazine ve Maliye Bakanlığı",
    description: "800 m, 2 dk"
  },
  {
    id: 224,
    category: "ministries",
    coords: [39.906500, 32.768000],
    name: "Çalışma ve Sosyal Güvenlik Bakanlığı",
    description: "850 m, 2 dk"
  },
  {
    id: 225,
    category: "ministries",
    coords: [39.906900, 32.766000],
    name: "T.C. Kültür ve Turizm Bakanlığı",
    description: "900 m, 2 dk"
  },
  {
    id: 226,
    category: "ministries",
    coords: [39.906800, 32.764000],
    name: "T.C. Sosyal Güvenlik Kurumu Başkanlığı",
    description: "950 m, 3 dk"
  },
  {
    id: 227,
    category: "ministries",
    coords: [39.913000, 32.770000],
    name: "Yeniden Refah Partisi Genel Merkezi",
    description: "300 m, 1 dk"
  },
  {
    id: 228,
    category: "ministries",
    coords: [39.913000, 32.775000],
    name: "Zafer Partisi Genel Merkezi",
    description: "400 m, 1 dk"
  },
  {
    id: 229,
    category: "ministries",
    coords: [39.907000, 32.769000],
    name: "Demokrat Parti Genel Merkezi",
    description: "700 m, 2 dk"
  },
  {
    id: 230,
    category: "ministries",
    coords: [39.909000, 32.780000],
    name: "Enerji ve Tabii Kaynaklar Bakanlığı",
    description: "1.5 km, 4 dk"
  },
  {
    id: 231,
    category: "ministries",
    coords: [39.911000, 32.765000],
    name: "İYİ Parti Genel Merkezi",
    description: "200 m, 1 dk"
  },
  {
    id: 232,
    category: "ministries",
    coords: [39.906000, 32.800000],
    name: "Orman Genel Müdürlüğü",
    description: "1.9 km, 5 dk"
  }, {
    id: 260,
    category: "schools",
    coords: [39.891388, 32.784721], // ODTÜ
    name: "ODTÜ",
    description: "2.1 km, 6 dk"
  },
  {
    id: 261,
    category: "schools",
    coords: [39.833664, 32.741775], // Hacettepe Üniversitesi Beytepe
    name: "Hacettepe Üniversitesi",
    description: "7.7 km, 14 dk"
  },
  {
    id: 262,
    category: "schools",
    coords: [39.872073, 32.746468], // Bilkent Üniversitesi
    name: "Bilkent Üniversitesi",
    description: "5.2 km, 10 dk"
  },
  {
    id: 263,
    category: "schools",
    coords: [39.939440, 32.822220], // Gazi Üniversitesi
    name: "Gazi Üniversitesi",
    description: "6.8 km, 13 dk"
  },
  {
    id: 264,
    category: "schools",
    coords: [39.911444, 32.768210],
    name: "Yasemin Karakaya Ortaokulu",
    description: "200 m, 1 dk"
  },
  {
    id: 265,
    category: "schools",
    coords: [39.910718, 32.761999],
    name: "Ankara Özel Tevfik Fikret Okulları",
    description: "600 m, 2 dk"
  },
  {
    id: 266,
    category: "schools",
    coords: [39.911768, 32.763205],
    name: "Sembol Özel Öğretim Kursu",
    description: "400 m, 1 dk"
  },
  {
    id: 267,
    category: "schools",
    coords: [39.911149, 32.763419],
    name: "Özel Sembol Anadolu Lisesi",
    description: "400 m, 1 dk"
  },
  {
    id: 268,
    category: "schools",
    coords: [39.910671, 32.766106],
    name: "Mustafa Kemal Final Akademi Anadolu Lisesi",
    description: "500 m, 1 dk"
  },
  {
    id: 269,
    category: "schools",
    coords: [39.921900, 32.834200], // TOBB ETÜ
    name: "TOBB Ekonomi ve Teknoloji Üniversitesi",
    description: "7.1 km, 13 dk"
  },{
    id: 300,
    category: "malls",
    coords: [39.950702, 32.825664],
    name: "ANKAmall AVM",
    description: "6.2 km, 12 dk" // from VEGA CENTER :contentReference[oaicite:1]{index=1}
  },
  {
    id: 301,
    category: "malls",
    coords: [39.912338, 32.810646],
    name: "Armada AVM",
    description: "4.9 km, 10 dk" // VEGA to Armada :contentReference[oaicite:2]{index=2}
  },
  {
    id: 302,
    category: "malls",
    coords: [39.912000, 32.811000], // approximated
    name: "Next Level AVM",
    description: "4.8 km, 10 dk" // same area as Armada :contentReference[oaicite:3]{index=3}
  },
  {
    id: 303,
    category: "malls",
    coords: [39.908718, 32.773870],
    name: "Kentpark AVM",
    description: "1.9 km, 5 dk"
  },
  {
    id: 304,
    category: "malls",
    coords: [39.909533, 32.775685],
    name: "Cepa AVM",
    description: "2.0 km, 5 dk"
  },
  {
    id: 305,
    category: "malls",
    coords: [39.906737, 32.762174],
    name: "Bilkent Center AVM",
    description: "2.1 km, 6 dk"
  },
  {
    id: 306,
    category: "malls",
    coords: [39.946170, 32.715570],
    name: "Nata Vega Outlet AVM",
    description: "6.1 km, 13 dk" // Vega Cadde area :contentReference[oaicite:4]{index=4}
  },
  {
    id: 307,
    category: "malls",
    coords: [39.943060, 32.783610],
    name: "Vega Cadde AVM",
    description: "2.0 km, 6 dk"
  },
  {
    id: 308,
    category: "malls",
    coords: [39.943060, 32.783610],
    name: "Vega AVM Subayevleri",
    description: "2.0 km, 6 dk"
  },
  {
    id: 309,
    category: "malls",
    coords: [39.875000, 32.848000], // estimated Taurus AVM
    name: "Taurus AVM",
    description: "6.4 km, 14 dk"
  },
  {
    id: 310,
    category: "malls",
    coords: [39.933364, 32.859742],
    name: "Gordion AVM",
    description: "5.8 km, 12 dk"
  }, {
    id: 400,
    category: "hospitals",
    coords: [39.9000471, 32.7547861],
    name: "Bilkent Şehir Hastanesi",
    description: "2.0 km, 5 dk" // VEGA → Bilkent City Hospital :contentReference[oaicite:1]{index=1}
  },
  {
    id: 401,
    category: "hospitals",
    coords: [39.929540, 32.815390],
    name: "Beştepe Devlet Hastanesi",
    description: "4.8 km, 10 dk" // from VEGA :contentReference[oaicite:2]{index=2}
  },
  {
    id: 402,
    category: "hospitals",
    coords: [39.925008, 32.831729],
    name: "Gazi Hastanesi",
    description: "6.6 km, 13 dk" // VEGA → Gazi Hospital
  },
  {
    id: 403,
    category: "hospitals",
    coords: [39.915843, 32.796549],
    name: "Medicana International Ankara",
    description: "4.3 km, 9 dk" // from VEGA :contentReference[oaicite:3]{index=3}
  },
  {
    id: 404,
    category: "hospitals",
    coords: [39.965160, 32.587440],
    name: "Özel Koru Hastanesi",
    description: "22.5 km, 30 dk" // VEGA to Sincan area :contentReference[oaicite:4]{index=4}
  },
  {
    id: 405,
    category: "hospitals",
    coords: [39.933215, 32.785948],
    name: "Lokman Hekim Hastanesi",
    description: "2.4 km, 6 dk"
  },
  {
    id: 406,
    category: "hospitals",
    coords: [39.913333, 32.805833],
    name: "TOBB ETÜ Hastanesi",
    description: "4.0 km, 9 dk" // coords & estimate :contentReference[oaicite:5]{index=5}
  },
  {
    id: 407,
    category: "hospitals",
    coords: [39.904500, 32.806000],
    name: "Çayyolu Özel Güven Hastanesi",
    description: "4.6 km, 11 dk" // public transit info :contentReference[oaicite:6]{index=6}
  },
  {
    id: 500,
    category: "mosques",
    coords: [39.923150, 32.807778], // Beştepe Millet Camii
    name: "Beştepe Millet Camii",
    description: "1.4 km, 4 dk" // ~1.4 km north-east of VEGA; ~4 min drive
  },
  {
    id: 501,
    category: "mosques",
    coords: [39.900740, 32.757050], // Ahmet Hamdi Akseki Camii
    name: "Ahmet Hamdi Akseki Camii",
    description: "2.0 km, 5 dk" // ~2 km south-west; ~5 min drive :contentReference[oaicite:1]{index=1}
  },
  {
    id: 502,
    category: "mosques",
    coords: [39.900830, 32.756940], // Şehir Hastanesi Camii (same complex as Bilkent Şehir Hastanesi)
    name: "Şehir Hastanesi Camii",
    description: "2.0 km, 5 dk"
  },
  {
    id: 503,
    category: "mosques",
    coords: [39.936670, 32.865280], // Mustafa Kemal Bereketli Camii
    name: "Mustafa Kemal Bereketli Camii",
    description: "5.8 km, 12 dk" // north-east of VEGA :contentReference[oaicite:2]{index=2}
  }, {
    id: 600,
    category: "hotels",
    coords: [39.909463, 32.806148],
    name: "JW Marriott Hotel Ankara",
    description: "4.0 km, 9 dk" // From VEGA to JW Marriott :contentReference[oaicite:1]{index=1}
  },
  {
    id: 601,
    category: "hotels",
    coords: [39.915843, 32.796549],
    name: "Grand Mercure Ankara",
    description: "3.5 km, 8 dk" // VEGA to Grand Mercure (~2.8 mi = 4.5 km) :contentReference[oaicite:2]{index=2}
  },
  {
    id: 602,
    category: "hotels",
    coords: [39.915843, 32.796549],
    name: "Mövenpick Hotel Ankara",
    description: "3.5 km, 8 dk" // Same location area :contentReference[oaicite:3]{index=3}
  },
  {
    id: 603,
    category: "hotels",
    coords: [39.915644, 32.795567],
    name: "The Green Park Hotel Ankara",
    description: "3.4 km, 8 dk" // Balgat area, ~3.5 km from VEGA :contentReference[oaicite:4]{index=4}
  },  {
    id: 700,
    category: "parks",
    coords: [39.92139, 32.80667],
    name: "30 Ağustos Zafer Parkı",
    description: "3.9 km, 9 dk" // VEGA → Zafer Park :contentReference[oaicite:1]{index=1}
  },
  {
    id: 701,
    category: "parks",
    coords: [39.90428, 32.79268],
    name: "Çansera Kent Bahçesi",
    description: "1.7 km, 5 dk" // :contentReference[oaicite:2]{index=2}
  },
  {
    id: 702,
    category: "parks",
    coords: [39.94642, 32.80479],
    name: "Mustafa Kemal Millet Bahçesi",
    description: "4.1 km, 9 dk" // :contentReference[oaicite:3]{index=3}
  },
  {
    id: 703,
    category: "parks",
    coords: [39.94306, 32.78361],
    name: "AnkaPark",
    description: "2.1 km, 6 dk" // former Wonderland Anadolu Park :contentReference[oaicite:4]{index=4}
  },
  {
    id: 704,
    category: "parks",
    coords: [39.93300, 32.80000],
    name: "Atatürk Orman Çiftliği",
    description: "2.4 km, 6 dk" // AOÇ coordinates from wikimapia :contentReference[oaicite:5]{index=5}
  }

  
];

const categoryDefs = [
  { id: "all", nameKey: "categoryAll", pin: "/pin.png" },
  { id: "malls", nameKey: "categoryMalls", pin: "/mall.png" },
  { id: "schools", nameKey: "categorySchools", pin: "/scool.png" },
  { id: "hospitals", nameKey: "categoryHospitals", pin: "/hospital.png" },
  { id: "markets", nameKey: "categoryMarkets", pin: "/shop.png" },
  { id: "hotels", nameKey: "categoryHotels", pin: "/ikonlar-lokasyon/otel.png" },
  { id: "mosques", nameKey: "categoryMosques", pin: "/ikonlar-lokasyon/cami.png" },
  { id: "ministries", nameKey: "categoryMinistries", pin: "/ikonlar-lokasyon/kurumlar.png" },
  { id: "business", nameKey: "categoryBusiness", pin: "/ikonlar-lokasyon/ismerkezi.png" },
  { id: "parks", nameKey: "categoryParks", pin: "/ikonlar-lokasyon/park.png" },
];






const projectCoords = [39.913899, 32.767134];
const projectImage = "/vega-center-03.jpg";
const projectName = "VEGA CENTER";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: projectCoords[0],
  lng: projectCoords[1],
};

type Place = (typeof places)[number];
type PlaceWithDisplayCoords = Place & { displayCoords: [number, number] };

const OVERLAP_BUCKET_DECIMALS = 5;
const OVERLAP_OFFSET_METERS = 16;
const NO_CLUSTER_AROUND_AVM_METERS = 220;
const DEDUPE_DISTANCE_METERS = 120;
const DEDUPE_STRICT_DISTANCE_METERS = 40;
const EARTH_RADIUS_METERS = 6378137;
const MAX_MARKERS_PER_RING = 8;

const CATEGORY_PRIORITY: Record<string, number> = {
  ministries: 100,
  business: 90,
  schools: 85,
  hospitals: 80,
  malls: 75,
  hotels: 70,
  mosques: 65,
  parks: 60,
  markets: 10,
};

const NAME_STOP_WORDS = new Set([
  "tc",
  "genel",
  "merkez",
  "merkezi",
  "mudurlugu",
  "mudurluk",
  "baskanligi",
  "bakanligi",
  "bakanlik",
  "kurumu",
  "kurum",
  "subesi",
  "sube",
  "avm",
  "otel",
  "hotel",
  "hastanesi",
  "hastane",
  "universitesi",
  "universite",
  "okullari",
  "okulu",
  "ortaokulu",
  "anadolu",
  "lisesi",
  "lise",
  "ozel",
  "ogretim",
  "kursu",
  "a",
  "s",
  "as",
  "ve",
  "ile",
  "partisi",
  "turkiye",
  "turk",
]);

const normalizeTurkish = (value: string): string =>
  value
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u");

const normalizePlaceName = (name: string): string =>
  normalizeTurkish(name.toLocaleLowerCase("tr"))
    .replace(/\bt\.?\s*c\.?\b/g, " ")
    .replace(/\bbbp\b/g, "buyuk birlik partisi")
    .replace(/\bchp\b/g, "cumhuriyet halk partisi")
    .replace(/\ba\.?\s*s\.?\b/g, " ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const getNameTokens = (name: string): string[] => {
  const tokens = normalizePlaceName(name)
    .split(" ")
    .filter((token) => token.length > 1 && !NAME_STOP_WORDS.has(token));
  return [...new Set(tokens)];
};

const getTokenSimilarity = (leftTokens: string[], rightTokens: string[]): number => {
  if (!leftTokens.length || !rightTokens.length) {
    return 0;
  }

  const leftSet = new Set(leftTokens);
  const rightSet = new Set(rightTokens);
  let intersectionCount = 0;

  leftSet.forEach((token) => {
    if (rightSet.has(token)) {
      intersectionCount += 1;
    }
  });

  return intersectionCount / Math.min(leftSet.size, rightSet.size);
};

const getDistanceMeters = (firstCoords: number[], secondCoords: number[]): number => {
  const lat1 = (firstCoords[0] * Math.PI) / 180;
  const lng1 = (firstCoords[1] * Math.PI) / 180;
  const lat2 = (secondCoords[0] * Math.PI) / 180;
  const lng2 = (secondCoords[1] * Math.PI) / 180;
  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;

  return 2 * EARTH_RADIUS_METERS * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const isDuplicatePlace = (existingPlace: Place, candidatePlace: Place): boolean => {
  const distanceMeters = getDistanceMeters(existingPlace.coords, candidatePlace.coords);

  if (distanceMeters > DEDUPE_DISTANCE_METERS) {
    return false;
  }

  const existingTokens = getNameTokens(existingPlace.name);
  const candidateTokens = getNameTokens(candidatePlace.name);
  const similarity = getTokenSimilarity(existingTokens, candidateTokens);

  if (existingTokens.length && candidateTokens.length && similarity >= 0.9) {
    return true;
  }

  if (distanceMeters <= DEDUPE_STRICT_DISTANCE_METERS && similarity >= 0.6) {
    return true;
  }

  return normalizePlaceName(existingPlace.name) === normalizePlaceName(candidatePlace.name);
};

const getPlaceScore = (place: Place): number => {
  const categoryScore = CATEGORY_PRIORITY[place.category] ?? 50;
  const nameScore = getNameTokens(place.name).length;
  return categoryScore * 100 + nameScore;
};

const deduplicatePlaces = (items: Place[]): Place[] => {
  const uniquePlaces: Place[] = [];

  items.forEach((place) => {
    const [lat, lng] = place.coords;
    const hasValidCoords =
      Number.isFinite(lat) && Number.isFinite(lng) && !(lat === 0 && lng === 0);

    if (!hasValidCoords) {
      return;
    }

    const duplicateIndex = uniquePlaces.findIndex((existingPlace) =>
      isDuplicatePlace(existingPlace, place)
    );

    if (duplicateIndex === -1) {
      uniquePlaces.push(place);
      return;
    }

    if (getPlaceScore(place) > getPlaceScore(uniquePlaces[duplicateIndex])) {
      uniquePlaces[duplicateIndex] = place;
    }
  });

  return uniquePlaces;
};

const getCoordinateBucketKey = (coords: number[]): string =>
  `${coords[0].toFixed(OVERLAP_BUCKET_DECIMALS)}:${coords[1].toFixed(OVERLAP_BUCKET_DECIMALS)}`;

const getOffsetCoordinates = (
  coords: number[],
  distanceMeters: number,
  angleRadians: number
): [number, number] => {
  const lat = coords[0];
  const lng = coords[1];
  const latOffsetDegrees = (distanceMeters / EARTH_RADIUS_METERS) * (180 / Math.PI);
  const lngOffsetDegrees =
    latOffsetDegrees / Math.max(Math.cos((lat * Math.PI) / 180), 0.01);

  return [
    lat + latOffsetDegrees * Math.sin(angleRadians),
    lng + lngOffsetDegrees * Math.cos(angleRadians),
  ];
};

const distributeOverlappingPlaces = (items: Place[]): PlaceWithDisplayCoords[] => {
  const groups = new Map<string, Place[]>();

  items.forEach((place) => {
    const key = getCoordinateBucketKey(place.coords);
    const group = groups.get(key);

    if (group) {
      group.push(place);
      return;
    }

    groups.set(key, [place]);
  });

  return items.map((place) => {
    const key = getCoordinateBucketKey(place.coords);
    const group = groups.get(key);

    if (!group || group.length === 1) {
      return {
        ...place,
        displayCoords: [place.coords[0], place.coords[1]],
      };
    }

    const index = group.findIndex((candidate) => candidate.id === place.id);
    const ring = Math.floor(index / MAX_MARKERS_PER_RING);
    const indexInRing = index % MAX_MARKERS_PER_RING;
    const markersInRing = Math.min(
      group.length - ring * MAX_MARKERS_PER_RING,
      MAX_MARKERS_PER_RING
    );
    const angle = (indexInRing / markersInRing) * Math.PI * 2;
    const distanceMeters = OVERLAP_OFFSET_METERS * (ring + 1);

    return {
      ...place,
      displayCoords: getOffsetCoordinates(place.coords, distanceMeters, angle),
    };
  });
};

export default function NearbyMap() {
  const tCommon = useTranslations("common");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSwitch, setSelectedSwitch] = useState("altyapi");
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [avmMarkerIcons, setAvmMarkerIcons] = useState<Record<string, string>>({});
  const uniquePlaces = useMemo(() => deduplicatePlaces(places), []);

  const categories = categoryDefs.map((cat) => ({
    ...cat,
    name: tCommon(cat.nameKey as any),
    count:
      cat.id === "all"
        ? uniquePlaces.length
        : uniquePlaces.filter((p) => p.category === cat.id).length,
  }));

  const projectLocation = {
    coords: projectCoords,
    name: projectName,
    description: tCommon("vegaCenterProjectDesc"),
    image: projectImage,
  };

  const localizeDescription = (desc: string) => {
    return desc
      .replace(/ dk/g, ` ${tCommon("minuteAbbr")}`)
      .replace(/ metre/g, ` ${tCommon("meterUnit")}`);
  };

const [activeMarker, setActiveMarker] = useState<string | number | null>(null as string | number | null);


 if (typeof window !== 'undefined') {
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    throw new Error("Google Maps API key is missing in environment variables");
  }
}

const { isLoaded } = useJsApiLoader({
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
});

useEffect(() => {
  let cancelled = false;

  const createCircularMarkerIcon = async (
    iconUrl: string,
    size: number
  ): Promise<string> =>
    new Promise((resolve) => {
      const pixelRatio =
        typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      const renderScale = Math.max(2, Math.ceil(pixelRatio));
      const renderSize = Math.round(size * renderScale);
      const canvas = document.createElement("canvas");
      canvas.width = renderSize;
      canvas.height = renderSize;

      const context = canvas.getContext("2d");
      if (!context) {
        resolve(iconUrl);
        return;
      }

      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      const center = renderSize / 2;
      const radius = center - renderScale;
      context.fillStyle = "#ffffff";
      context.strokeStyle = "#e5e7eb";
      context.lineWidth = renderScale;
      context.beginPath();
      context.arc(center, center, radius, 0, Math.PI * 2);
      context.fill();
      context.stroke();

      const logoImage = new Image();
      logoImage.decoding = "async";
      logoImage.onload = () => {
        const padding = Math.round(renderSize * 0.14);
        const maxWidth = renderSize - padding * 2;
        const maxHeight = renderSize - padding * 2;
        const scale = Math.min(maxWidth / logoImage.width, maxHeight / logoImage.height);
        const drawWidth = logoImage.width * scale;
        const drawHeight = logoImage.height * scale;
        const drawX = (renderSize - drawWidth) / 2;
        const drawY = (renderSize - drawHeight) / 2;
        context.drawImage(logoImage, drawX, drawY, drawWidth, drawHeight);
        resolve(canvas.toDataURL("image/png"));
      };
      logoImage.onerror = () => resolve(iconUrl);
      logoImage.src = iconUrl;
    });

  Promise.all(
    vegaAvms.map(async (avm) => [
      avm.id,
      await createCircularMarkerIcon(avm.icon, avm.size[0]),
    ])
  ).then((entries) => {
    if (cancelled) {
      return;
    }

    setAvmMarkerIcons(Object.fromEntries(entries));
  });

  return () => {
    cancelled = true;
  };
}, []);

useEffect(() => {
  if (!mapInstance || typeof window === "undefined" || !window.google?.maps) {
    return;
  }

  class PaneOrderOverlay extends window.google.maps.OverlayView {
    private applyPaneOrder() {
      const panes = this.getPanes();

      if (!panes) {
        return;
      }

      const overlayMouseTarget = panes.overlayMouseTarget as HTMLElement | undefined;
      const markerLayer = panes.markerLayer as HTMLElement | undefined;

      if (overlayMouseTarget) {
        overlayMouseTarget.style.setProperty("z-index", "150", "important");
      }

      if (markerLayer) {
        markerLayer.style.setProperty("z-index", "200", "important");
      }
    }

    onAdd() {
      this.applyPaneOrder();
    }

    draw() {
      this.applyPaneOrder();
    }

    onRemove() {}
  }

  const paneOrderOverlay = new PaneOrderOverlay();
  paneOrderOverlay.setMap(mapInstance);

  return () => {
    paneOrderOverlay.setMap(null);
  };
}, [mapInstance]);



  const filteredPlaces =
    selectedCategory === "all"
      ? uniquePlaces
      : uniquePlaces.filter((p) => p.category === selectedCategory);
  const displayedPlaces = useMemo(
    () => distributeOverlappingPlaces(filteredPlaces),
    [filteredPlaces]
  );
  const [clusterablePlaces, noClusterPlaces] = useMemo(() => {
    const clustered: PlaceWithDisplayCoords[] = [];
    const nonClustered: PlaceWithDisplayCoords[] = [];

    displayedPlaces.forEach((place) => {
      const isNearAvm = vegaAvms.some(
        (avm) =>
          getDistanceMeters(place.coords, avm.coords) <= NO_CLUSTER_AROUND_AVM_METERS
      );

      if (isNearAvm) {
        nonClustered.push(place);
        return;
      }

      clustered.push(place);
    });

    return [clustered, nonClustered] as const;
  }, [displayedPlaces]);

const getCategoryPinUrl = (categoryId: string): string =>
  categoryDefs.find((cat) => cat.id === categoryId)?.pin ?? "/icons/default.png";

  return (
    <div className="w-full h-screen flex bg-white flex-col relative">
      <div className="w-full flex justify-center py-6 bg-white z-30">
        <div className="bg-gray-100 p-1 rounded-full flex shadow-md">
          <button
            onClick={() => setSelectedSwitch("altyapi")}
            className={`px-6 py-2 text-sm rounded-full transition ${
              selectedSwitch === "altyapi" ? "bg-[#4B3B4E] text-white" : "text-gray-700"
            }`}
          >
            {tCommon("nearbyInfrastructure")}
          </button>
          <button
            onClick={() => setSelectedSwitch("konum")}
            className={`px-6 py-2 text-sm rounded-full transition ${
              selectedSwitch === "konum" ? "bg-[#4B3B4E] text-white" : "text-gray-700"
            }`}
          >
            {tCommon("nearbyLocation")}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedSwitch === "konum" && (
          <motion.section
            key="konum"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row flex-1 relative"
          >
            <aside className="fixed md:static w-[250px] bg-white shadow-md p-4 h-full overflow-y-auto z-10">
              <h3 className="font-semibold text-gray-800 mb-4 text-sm">
                {tCommon("nearbyPopularPlaces")}
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex justify-between items-center p-2 cursor-pointer rounded-lg hover:bg-gray-100 ${
                      selectedCategory === cat.id ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-white rounded-full p-1 shadow">
                        <img src={cat.pin} alt={cat.name} className="w-5 h-5" />
                      </div>
                      <span className="text-sm text-gray-800">{cat.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="flex-1">
              <GoogleMap
  mapContainerStyle={containerStyle}
  center={center}
  zoom={14}
  onLoad={(map) => setMapInstance(map)}
  onUnmount={() => setMapInstance(null)}
  options={{
    styles: [
      {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [
          { color: "#faf5ed" },
          { lightness: 0 },
          { gamma: 1 },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          { color: "#bae5a6" },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          { weight: 1.0 },
          { gamma: 1.8 },
          { saturation: 0 },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          { hue: "#ffb200" },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
          { lightness: 0 },
          { gamma: 1 },
        ],
      },
      {
        featureType: "transit.station.airport",
        elementType: "all",
        stylers: [
          { hue: "#b000ff" },
          { saturation: 23 },
          { lightness: -4 },
          { gamma: 0.8 },
        ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          { color: "#a0daf2" },
        ],
      },
      {
  featureType: "poi",
  elementType: "labels.icon",
  stylers: [{ visibility: "off" }],
},
{
  featureType: "poi.business",
  elementType: "labels",
  stylers: [{ visibility: "off" }],
},
{
  featureType: "poi.park",
  elementType: "labels",
  stylers: [{ visibility: "off" }],
}
    ],
  }}
>
                <Marker
                  position={{ lat: projectLocation.coords[0], lng: projectLocation.coords[1] }}
                  icon={{ url: "/pin-red.png", scaledSize: new window.google.maps.Size(32, 32) }}
                  onClick={() => setActiveMarker("project")}
                />
                {activeMarker === "project" && (
                  <InfoWindow
                    position={{ lat: projectLocation.coords[0], lng: projectLocation.coords[1] }}
                    onCloseClick={() => setActiveMarker(null)}
                    options={{ pixelOffset: new window.google.maps.Size(0, -10) }}
                  >
                    <div className="bg-white rounded-xl shadow-xl p-3 w-72 flex items-center gap-4">
                      <img
                        src={projectLocation.image}
                        alt={projectLocation.name}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                      <div className="flex flex-col">
                        <h4 className="text-base font-bold text-gray-900">
                          {projectLocation.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {projectLocation.description}
                        </p>
                      </div>
                    </div>
                  </InfoWindow>
                )}

                <MarkerClusterer
 options={{
  imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  maxZoom: 18,
  minimumClusterSize: 3,
  styles: [
    {
      url: "/clusters/red.png",
      height: 40,
      width: 40,
      textColor: "white",
      textSize: 14,
    },
    {
      url: "/clusters/red.png",
      height: 50,
      width: 50,
      textColor: "white",
      textSize: 14,
    },
    {
      url: "/clusters/red.png",
      height: 60,
      width: 60,
      textColor: "white",
      textSize: 14,
    },
  ]
}}

>
                  {(clusterer) => (
                    <>
                      {clusterablePlaces.map((place) => (
                        <Marker
                          key={place.id}
                          position={{ lat: place.displayCoords[0], lng: place.displayCoords[1] }}
                          icon={{
                            url: getCategoryPinUrl(place.category),
                            scaledSize: new window.google.maps.Size(42, 42),
                          }}
                          clusterer={clusterer}
                          onClick={() => setActiveMarker(place.id)}
                        />
                      ))}
                    </>
                  )}
                </MarkerClusterer>
{noClusterPlaces.map((place) => (
  <Marker
    key={`no-cluster-${place.id}`}
    position={{ lat: place.displayCoords[0], lng: place.displayCoords[1] }}
    icon={{
      url: getCategoryPinUrl(place.category),
      scaledSize: new window.google.maps.Size(42, 42),
    }}
    zIndex={500}
    onClick={() => setActiveMarker(place.id)}
  />
))}
{vegaAvms.map((avm) => (
  <Marker
    key={`avm-${avm.id}`}
    position={{ lat: avm.coords[0], lng: avm.coords[1] }}
    icon={{
      url: avmMarkerIcons[avm.id] ?? avm.icon,
      scaledSize: new window.google.maps.Size(avm.size[0], avm.size[1]),
      anchor: new window.google.maps.Point(avm.size[0] / 2, avm.size[1]),
    }}
    options={{ optimized: false, zIndex: 100000 }}
    zIndex={100000}
    onClick={() => window.open(avm.url, "_blank", "noopener,noreferrer")}
  />
))}
                {displayedPlaces.map(
                  (place) =>
                    activeMarker === place.id && (
                      <InfoWindow
                        key={`info-${place.id}`}
                        position={{ lat: place.displayCoords[0], lng: place.displayCoords[1] }}
                        onCloseClick={() => setActiveMarker(null)}
                      >
                        <div className="text-sm">
                          <h4 className="font-semibold">{place.name}</h4>
                          <p>{localizeDescription(place.description)}</p>
                        </div>
                      </InfoWindow>
                    )
                )}
              </GoogleMap>
            </div>
          </motion.section>
        )}

        {selectedSwitch === "altyapi" && (



<motion.section
          key="altyapi"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center flex-1 bg-white text-center p-0"
        >
          <div className="overflow-x-auto md:overflow-visible">
            <div className="w-[200%] md:w-auto"> {/* Zoomed width for mobile */}
              <img
                src="/vegacenterrevizealtyapi.jpg"
                alt={tCommon("infrastructureImageAlt")}
                className="mx-auto rounded w-full"
              />
            </div>
          </div>
        </motion.section>



         
        )}
      </AnimatePresence>
    </div>
  );
}
