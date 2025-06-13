"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
  MarkerClusterer,
} from "@react-google-maps/api";
const places = [
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
    category: "markets",
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

const categories = [
  { id: "all", name: "Tümü", pin: "/pin.png" },
  { id: "malls", name: "AVM'ler", pin: "/mall.png" },
  { id: "schools", name: "Okullar", pin: "/scool.png" },
  { id: "hospitals", name: "Hastaneler", pin: "/hospital.png" },
  { id: "markets", name: "Marketler", pin: "/shop.png" },
  { id: "hotels", name: "Oteller", pin: "/ikonlar-lokasyon/otel.png" },
  { id: "mosques", name: "Camii", pin: "/ikonlar-lokasyon/cami.png" },
  { id: "ministries", name: "Bakanlıklar / Kurumlar", pin: "/ikonlar-lokasyon/kurumlar.png" },
  { id: "business", name: "İş Merkezleri", pin: "/ikonlar-lokasyon/ismerkezi.png" },
  { id: "parks", name: "Parklar", pin: "/ikonlar-lokasyon/park.png" },
].map((cat) => ({
  ...cat,
  count: cat.id === "all" ? places.length : places.filter(p => p.category === cat.id).length,
}));






const projectLocation = {
  coords: [39.913899, 32.767134],
  name: "VEGA CENTER",
  description: "İş dünyasının yeni merkezi VEGA Center",
  image: "/vega-center-03.jpg",
};

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: projectLocation.coords[0],
  lng: projectLocation.coords[1],
};

export default function NearbyMap() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSwitch, setSelectedSwitch] = useState("altyapi");


const [activeMarker, setActiveMarker] = useState<string | number | null>(null as string | number | null);


 if (typeof window !== 'undefined') {
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    throw new Error("Google Maps API key is missing in environment variables");
  }
}

const { isLoaded } = useJsApiLoader({
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
});



  const filteredPlaces =
    selectedCategory === "all"
      ? places
      : places.filter((p) => p.category === selectedCategory);

const getCategoryPinUrl = (categoryId: string): string =>
  categories.find((cat) => cat.id === categoryId)?.pin ?? "/icons/default.png";

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
            Altyapı
          </button>
          <button
            onClick={() => setSelectedSwitch("konum")}
            className={`px-6 py-2 text-sm rounded-full transition ${
              selectedSwitch === "konum" ? "bg-[#4B3B4E] text-white" : "text-gray-700"
            }`}
          >
            Konum
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
                Yakındaki popüler yerler
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
                      {filteredPlaces.map((place) => (
                        <Marker
                          key={place.id}
                          position={{ lat: place.coords[0], lng: place.coords[1] }}
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

                {filteredPlaces.map(
                  (place) =>
                    activeMarker === place.id && (
                      <InfoWindow
                        key={`info-${place.id}`}
                        position={{ lat: place.coords[0], lng: place.coords[1] }}
                        onCloseClick={() => setActiveMarker(null)}
                      >
                        <div className="text-sm">
                          <h4 className="font-semibold">{place.name}</h4>
                          <p>{place.description}</p>
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
                src="/altyapilar/vegacenter.jpg"
                alt="Altyapı Görseli"
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
