export const MONASTERIES = [
  {
    id: "rumtek",
    name: "Rumtek Monastery",
    slug: "rumtek-monastery",
    district: "Gangtok",
    coordinates: { x: 422, y: 550 },
    heroImage: "/assets/images/rumtek_ai.png",
    thumbnail: "/assets/images/rumtek_ai.png",
    shortDescription: "The seat of the Karmapa Lama, Rumtek is Sikkim's largest monastery and a primary center of the Karma Kagyu lineage.",
    history: "Originally built in the mid-1700s by the 12th Karmapa, the monastery fell into ruins. In 1959, the 16th Karmapa fled Tibet and selected Rumtek as his main seat in exile. With assistance from the royal family of Sikkim and the Government of India, the new monastery complex was constructed and inaugurated in 1966.",
    culturalSignificance: "Rumtek is the focal point for the Karma Kagyu sect in exile. It houses rare religious relics, ancient manuscripts, and the Golden Stupa, which contains the ashes of the 16th Karmapa. It serves as an international center for Buddhist studies.",
    architecture: "Built as a replica of the original Tsurphu Monastery in Tibet, the main building is three stories high. It features traditional Tibetan monastic design with carved wooden eaves, gold-plated pagodas on the roof, hand-painted murals, and a large central courtyard.",
    visitorEtiquette: [
      "Dress conservatively with shoulders and knees covered.",
      "Remove shoes before entering the main prayer hall.",
      "Do not take photographs inside the prayer halls.",
      "Walk clockwise around the monastery and chortens.",
      "Maintain absolute silence inside the sacred zones."
    ],
    quickFacts: {
      established: "1966 (New temple)",
      founder: "16th Gyalwang Karmapa",
      sect: "Karma Kagyu",
      elevation: "1,500 m (4,900 ft)",
      keyFestival: "Kagyat Dance (December)"
    },
    nearbyLocations: [
      {
        id: "botanical-garden",
        name: "Jawaharlal Nehru Botanical Garden",
        category: "Nature",
        distance: "4.0 km",
        description: "Home to a vast collection of rare orchids, oak trees, and Himalayan flora.",
        image: "/assets/rumtek_nearby1.png"
      },
      {
        id: "rumtek-view",
        name: "Rumtek Valley Viewpoint",
        category: "Viewpoint",
        distance: "1.5 km",
        description: "A scenic overlook showing panoramic vistas of the rolling Gangtok hills.",
        image: "/assets/rumtek_nearby2.png"
      }
    ],
    gallery: [
      "/assets/gallery_arch1.png"
    ],
    virtualTour: {
      initialNode: "entrance",
      nodes: [
        {
          id: "entrance",
          title: "01. Main Gate & Approach",
          category: "Exterior Gateway",
          image: "/assets/images/rumtek_node_entrance.png",
          description: "The monumental stone archway flanked by prayer flags and carved wooden pillars.",
          portalArrows: [
            { targetNode: "courtyard", label: "Walk into Monastery Courtyard ➔", x: 75, y: 55 }
          ],
          hotspots: [
            { id: "archway", name: "Carved Gateway Arch", x: 45, y: 35, description: "Traditional timber-carved gateway painted with eight auspicious symbols of Buddhism." }
          ]
        },
        {
          id: "courtyard",
          title: "02. Prayer Wheel Courtyard",
          category: "Courtyard",
          image: "/assets/images/rumtek_node_courtyard.png",
          description: "The central open courtyard where monks gather for morning chants and sacred Cham mask dances.",
          portalArrows: [
            { targetNode: "shrine", label: "Enter Main Assembly Hall ➔", x: 50, y: 50 },
            { targetNode: "entrance", label: "🡨 Back to Main Entrance", x: 15, y: 60 }
          ],
          hotspots: [
            { id: "prayer-wheels", name: "Courtyard Mani Wheels", x: 70, y: 60, description: "Long rows of brass prayer wheels containing printed Buddhist mantras turned by visiting pilgrims." }
          ]
        },
        {
          id: "shrine",
          title: "03. Central Assembly Shrine Hall",
          category: "Interior Shrine",
          image: "/assets/images/rumtek_node_shrine.png",
          description: "The main prayer hall housing monumental golden Buddha statues, sacred silk thangkas, and hand-carved pillars.",
          portalArrows: [
            { targetNode: "stupa", label: "Step inside Golden Relic Chamber ➔", x: 80, y: 50 },
            { targetNode: "courtyard", label: "🡨 Exit to Courtyard", x: 20, y: 55 }
          ],
          hotspots: [
            { id: "buddha-altar", name: "Gilded Buddha Altar", x: 48, y: 40, description: "Central shrine containing the main Buddha statue flanked by silk thangkas and copper butter lamps." }
          ]
        },
        {
          id: "stupa",
          title: "04. Golden Relic Stupa Chamber",
          category: "Inner Sacred Shrine",
          image: "/assets/images/rumtek_node_stupa.png",
          description: "The most sacred inner sanctuary housing the thirteen-foot golden stupa encrusted with turquoise and coral relics.",
          portalArrows: [
            { targetNode: "viewpoint", label: "Walk to Surrounding Hilltop Viewpoint ➔", x: 85, y: 50 },
            { targetNode: "shrine", label: "🡨 Return to Main Shrine Hall", x: 15, y: 55 }
          ],
          hotspots: [
            { id: "golden-stupa", name: "The Golden Relic Stupa", x: 52, y: 45, description: "A 13-foot golden stupa containing the sacred relics and ash of the 16th Gyalwang Karmapa." }
          ]
        },
        {
          id: "viewpoint",
          title: "05. Nearby Hilltop Overlook",
          category: "Nearby Environment",
          image: "/assets/images/rumtek_node_viewpoint.png",
          description: "The panoramic hilltop ridge offering sweeping views across the Gangtok valley, pine forests, and distant snow peaks.",
          portalArrows: [
            { targetNode: "entrance", label: "🡨 Return to Monastery Entrance", x: 20, y: 55 }
          ],
          hotspots: [
            { id: "valley-view", name: "Gangtok Valley Overlook", x: 50, y: 50, description: "Breathtaking 360-degree vista of the eastern Sikkim mountain ridges and pine-forested slopes." }
          ]
        }
      ]
    },
    featured: true
  },
  {
    id: "enchey",
    name: "Enchey Monastery",
    slug: "enchey-monastery",
    district: "Gangtok",
    coordinates: { x: 442, y: 520 },
    heroImage: "/assets/images/enchey_ai.png",
    thumbnail: "/assets/images/enchey_ai.png",
    shortDescription: "Perched above Gangtok, this sanctuary was established on a site blessed by the flying hermit Lama Drupthob Karpo.",
    history: "Lama Drupthob Karpo, a legendary tantric master known for his levitation powers, built a small hermitage here in the mid-1800s. The current monastery building was constructed in 1909 under the reign of Sidkeong Tulku, Chogyal of Sikkim.",
    culturalSignificance: "Enchey literally translates to 'Solitary Temple'. It is believed that the protective deities of Gangtok reside here, making it a vital spiritual anchor for the local population.",
    architecture: "The architecture is distinctive for its Chinese pagoda style top, showing East Asian architectural influences. The interior walls are covered in detailed murals depicting the Nyingma pantheon of deities and protective protectors.",
    visitorEtiquette: [
      "Keep quiet and do not disturb monks during chants.",
      "Remove footwear outside the threshold of the shrine.",
      "Do not touch statues, scriptures, or ritual instruments.",
      "Circle the prayer flags in a clockwise direction."
    ],
    quickFacts: {
      established: "1909",
      founder: "Lama Drupthob Karpo / Sidkeong Tulku",
      sect: "Nyingma",
      elevation: "1,800 m (5,900 ft)",
      keyFestival: "Cham Dance (January)"
    },
    nearbyLocations: [
      {
        id: "tashi-viewpoint",
        name: "Tashi Viewpoint",
        category: "Viewpoint",
        distance: "6.5 km",
        description: "Built by the King of Sikkim, this spot offers viewing of mountain sunrise peaks.",
        image: "/assets/enchey_nearby1.png"
      },
      {
        id: "ganesh-tok",
        name: "Ganesh Tok Temple",
        category: "Heritage",
        distance: "3.0 km",
        description: "A hilltop temple offering sweeping birds-eye views over Gangtok town.",
        image: "/assets/enchey_nearby2.png"
      }
    ],
    gallery: [
      "/assets/gallery_cult1.png"
    ],
    virtualTour: {
      initialNode: "entrance",
      nodes: [
        {
          id: "entrance",
          title: "01. Hilltop Entrance Path",
          category: "Exterior Approach",
          image: "/assets/images/enchey_ai.png",
          description: "The serene pine-forested ridge entrance overlooking the capital city of Gangtok.",
          portalArrows: [
            { targetNode: "shrine", label: "Walk into Pagoda Shrine Hall ➔", x: 75, y: 55 }
          ],
          hotspots: [
            { id: "pine-ridge", name: "Gangtok Hilltop Ridge", x: 40, y: 40, description: "Solitary ridge blessed by Lama Drupthob Karpo." }
          ]
        },
        {
          id: "shrine",
          title: "02. Pagoda Assembly Shrine Hall",
          category: "Interior Shrine",
          image: "/assets/images/enchey_panorama_360.png",
          description: "The double-tiered pagoda interior decorated with Nyingma deity frescoes and traditional prayer wheels.",
          portalArrows: [
            { targetNode: "viewpoint", label: "Step out to Kanchenjunga Overlook ➔", x: 80, y: 50 },
            { targetNode: "entrance", label: "🡨 Back to Entrance Path", x: 15, y: 55 }
          ],
          hotspots: [
            { id: "pagoda-roof", name: "Pagoda Roof Fresco", x: 48, y: 20, description: "Intricate Chinese-influenced ceiling mandalas." }
          ]
        },
        {
          id: "viewpoint",
          title: "03. Nearby Ridge Viewpoint",
          category: "Nearby Environment",
          image: "/assets/images/gangtok_region_real.png",
          description: "Sweeping panoramic viewpoint overlooking Gangtok city and Kanchenjunga peaks.",
          portalArrows: [
            { targetNode: "entrance", label: "🡨 Return to Monastery Entrance", x: 20, y: 55 }
          ],
          hotspots: [
            { id: "city-view", name: "Gangtok Panorama", x: 50, y: 50, description: "Breathtaking view across the East Sikkim mountains." }
          ]
        }
      ]
    },
    featured: false
  },
  {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    slug: "pemayangtse-monastery",
    district: "Gyalshing",
    coordinates: { x: 105, y: 550 },
    heroImage: "/assets/images/pemayangtse_ai.png",
    thumbnail: "/assets/images/pemayangtse_ai.png",
    shortDescription: "One of Sikkim's premier historic monasteries, designing ceremonies for the Chogyal monarchs.",
    history: "Founded in 1705 by Lhatsun Chempo, one of the three patron saints who consecrated the first King of Sikkim. It was built specifically for the 'Ta-sang' or pure monks of the kingdom, who were selected to crown the Chogyals.",
    culturalSignificance: "As one of the oldest monasteries, Pemayangtse holds the highest status. Its head lama was traditionally the royal consecrator. It remains the principal center of the Nyingma order in Sikkim.",
    architecture: "A classic three-story structure built of stone walls with large timber columns. The third floor houses the Sangtok Palri, a masterfully detailed seven-tiered wooden model of Padmasambhava's heavenly palace, hand-carved by Dungzin Rinpoche over five years.",
    visitorEtiquette: [
      "Refrain from touching the wooden model of Sangtok Palri.",
      "Dress respectfully. Shorts and sleeveless tops are not allowed.",
      "Turn prayer wheels only in a clockwise direction."
    ],
    quickFacts: {
      established: "1705",
      founder: "Lhatsun Chempo",
      sect: "Nyingma",
      elevation: "2,085 m (6,840 ft)",
      keyFestival: "Cham Dance (February)"
    },
    nearbyLocations: [
      {
        id: "rabdentse-ruins-near",
        name: "Rabdentse Ruins",
        category: "Heritage",
        distance: "1.5 km",
        description: "The historic stone ruins of Sikkim's second capital, accessible via a forest walk.",
        image: "/assets/pemayangtse_nearby1.png"
      },
      {
        id: "gyalshing-bazaar",
        name: "Gyalshing Local Market",
        category: "Heritage",
        distance: "3.2 km",
        description: "A bustling village bazaar featuring organic produce and Sikkimese handicrafts.",
        image: "/assets/pemayangtse_nearby2.png"
      }
    ],
    gallery: [
      "/assets/gallery_arch2.png"
    ],
    virtualTour: {
      initialNode: "entrance",
      nodes: [
        {
          id: "entrance",
          title: "01. Forest Approach & Gateway",
          category: "Exterior Approach",
          image: "/assets/images/pemayangtse_ai.png",
          description: "The ancient pine-forested pathway leading to Pemayangtse Monastery near Pelling.",
          portalArrows: [
            { targetNode: "shrine", label: "Enter Sangtok Palri Palace ➔", x: 75, y: 55 }
          ],
          hotspots: [
            { id: "gateway", name: "Forest Gate", x: 45, y: 40, description: "Historical path trodden by Chogyal monarchs." }
          ]
        },
        {
          id: "shrine",
          title: "02. Sangtok Palri Masterpiece Hall",
          category: "Interior Shrine",
          image: "/assets/images/pemayangtse_panorama_360.png",
          description: "The three-story sanctuary housing the famous 7-tiered hand-carved wooden Sangtok Palri celestial palace.",
          portalArrows: [
            { targetNode: "viewpoint", label: "Walk to Rabdentse Ruins Overlook ➔", x: 80, y: 50 },
            { targetNode: "entrance", label: "🡨 Back to Forest Gateway", x: 15, y: 55 }
          ],
          hotspots: [
            { id: "sangtok-palri", name: "Sangtok Palri Model", x: 50, y: 40, description: "Three-dimensional carved wooden celestial structure." }
          ]
        },
        {
          id: "viewpoint",
          title: "03. Nearby Pelling Valley Viewpoint",
          category: "Nearby Environment",
          image: "/assets/images/gyalshing_region_real.png",
          description: "Stunning mountain panorama looking out towards Kanchenjunga and Rabdentse royal ruins.",
          portalArrows: [
            { targetNode: "entrance", label: "🡨 Return to Monastery Entrance", x: 20, y: 55 }
          ],
          hotspots: [
            { id: "pelling-view", name: "Kanchenjunga Vista", x: 50, y: 50, description: "Unobstructed view of snow-capped Himalayan summits." }
          ]
        }
      ]
    },
    featured: true
  },
  {
    id: "tashiding",
    name: "Tashiding Monastery",
    slug: "tashiding-monastery",
    district: "Gyalshing",
    coordinates: { x: 130, y: 490 },
    heroImage: "/assets/images/tashiding_ai.png",
    thumbnail: "/assets/images/tashiding_ai.png",
    shortDescription: "Built on a hill that rises between the Rathong and Rangit rivers, Tashiding is the most sacred site in Sikkim.",
    history: "Blessed by Guru Padmasambhava in the 8th century, who shot an arrow to select the site. The monastery itself was established in 1641 by Ngadak Sempa Chempo, and rebuilt in 1717 during the reign of Chogyal Gyurmed Namgyal.",
    culturalSignificance: "It is believed that even a mere glimpse of Tashiding purifies a person of all sins. It hosts the annual Bhumchu ceremony, where a barrel of sacred water is opened to predict the future fortune of Sikkim.",
    architecture: "A classic stone-walled monastery surrounded by an extensive collection of ancient chortens (stupas), prayer walls, and 'Mani' stones inscribed with sacred mantras.",
    visitorEtiquette: [
      "Respect the sacred chorten area outside the main shrine.",
      "Avoid talking in loud voices around the prayer wheels.",
      "Photography of the sacred Bhumchu vessel is strictly prohibited."
    ],
    quickFacts: {
      established: "1641",
      founder: "Ngadak Sempa Chempo",
      sect: "Nyingma",
      elevation: "1,460 m (4,790 ft)",
      keyFestival: "Bhumchu Ceremony (March)"
    },
    nearbyLocations: [
      {
        id: "rathong-bridge",
        name: "Rathong River Bridge",
        category: "Nature",
        distance: "5.0 km",
        description: "A scenic hanging bridge over the rushing Rathong River, surrounded by deep gorges.",
        image: "/assets/tashiding_nearby1.png"
      },
      {
        id: "yuksom-lake",
        name: "Khecheopalri Sacred Lake",
        category: "Nature",
        distance: "19.0 km",
        description: "A sacred wish-fulfilling lake surrounded by dense forests, revered by Buddhists and Hindus.",
        image: "/assets/tashiding_nearby2.png"
      }
    ],
    gallery: [
      "/assets/gallery_land1.png"
    ],
    virtualTour: {
      initialNode: "ridge",
      nodes: [
        {
          id: "ridge",
          title: "01. Sacred Stupa Ridge Trail",
          category: "Exterior Ridge",
          image: "/assets/images/tashiding_panorama_360.png",
          description: "The hilltop ridge trail flanked by white chortens and prayer flags overlooking Rathong River.",
          portalArrows: [
            { targetNode: "shrine", label: "Step inside Bhumchu Shrine Hall ➔", x: 75, y: 55 }
          ],
          hotspots: [
            { id: "chorten-field", name: "Thongwa Rangdol Chorten", x: 45, y: 50, description: "Sacred stupa that purifies sins upon sight." }
          ]
        },
        {
          id: "shrine",
          title: "02. Bhumchu Sacred Altar Hall",
          category: "Interior Shrine",
          image: "/assets/images/tashiding_ai.png",
          description: "The inner sanctum where the holy water vase is unsealed during the Bhumchu festival.",
          portalArrows: [
            { targetNode: "viewpoint", label: "Walk to River Confluence Viewpoint ➔", x: 80, y: 50 },
            { targetNode: "ridge", label: "🡨 Back to Stupa Ridge Trail", x: 15, y: 55 }
          ],
          hotspots: [
            { id: "bhumchu-vase", name: "Bhumchu Holy Vase Chamber", x: 50, y: 40, description: "Sealed vessel containing sacred holy water." }
          ]
        },
        {
          id: "viewpoint",
          title: "03. Nearby River Confluence Viewpoint",
          category: "Nearby Environment",
          image: "/assets/images/tasiding_ai.png",
          description: "Dramatic mountain overlook of Rangeet and Rathong river confluence.",
          portalArrows: [
            { targetNode: "ridge", label: "🡨 Return to Sacred Stupa Ridge", x: 20, y: 55 }
          ],
          hotspots: [
            { id: "river-view", name: "Rathong River Valley", x: 50, y: 50, description: "Confluence of sacred Himalayan rivers." }
          ]
        }
      ]
    },
    featured: true
  },
  {
    id: "ralang",
    name: "Ralang Monastery",
    slug: "ralang-monastery",
    district: "Namchi",
    coordinates: { x: 260, y: 640 },
    heroImage: "/assets/images/ralang_ai.png",
    thumbnail: "/assets/images/ralang_ai.png",
    shortDescription: "Famous for its spectacular Cham dances, Ralang is a major center of the Karma Kagyu lineage in South Sikkim.",
    history: "Built to commemorate the successful pilgrimage of the 4th Chogyal of Sikkim to Tibet. The original structure dates to 1768, while a massive new monastery complex (Palchen Choeling Monastic Institute) was constructed nearby in 1995.",
    culturalSignificance: "Ralang is celebrated for its deep preservation of traditional Tibetan monastic rituals and holds one of the most vibrant Pang Lhabsol festivals in the region.",
    architecture: "The new complex features a massive golden-roofed main temple, high ceilings, large-scale statues of Buddha, Guru Rinpoche, and Karmapas, and a large paved assembly courtyard.",
    visitorEtiquette: [
      "Ask permission before photographing any monks.",
      "Remove sunglasses and hats inside the main temple.",
      "Avoid pointing feet towards the Buddha statues when seated."
    ],
    quickFacts: {
      established: "1768 (Old) / 1995 (New)",
      founder: "4th Chogyal of Sikkim",
      sect: "Karma Kagyu",
      elevation: "1,850 m (6,070 ft)",
      keyFestival: "Pang Lhabsol (August/September)"
    },
    nearbyLocations: [
      {
        id: "ravangla-buddha-park",
        name: "Buddha Park (Tathagata Tsal)",
        category: "Heritage",
        distance: "6.0 km",
        description: "A park featuring a 130-foot tall bronze statue of Shakyamuni Buddha.",
        image: "/assets/ralang_nearby1.png"
      },
      {
        id: "ralang-hotspring",
        name: "Ralang Hot Springs",
        category: "Nature",
        distance: "4.5 km",
        description: "Natural sulfurous hot water springs known for therapeutic skin healing properties.",
        image: "/assets/ralang_nearby2.png"
      }
    ],
    gallery: [
      "/assets/gallery_fest2.png"
    ],
    virtualTour: {
      initialNode: "entrance",
      nodes: [
        {
          id: "entrance",
          title: "01. Palchen Choeling Gate",
          category: "Exterior Gateway",
          image: "/assets/images/ralang_ai.png",
          description: "The grand entrance court of Palchen Choeling Monastery in South Sikkim.",
          portalArrows: [
            { targetNode: "shrine", label: "Enter Golden Buddha Hall ➔", x: 75, y: 55 }
          ],
          hotspots: [
            { id: "gate", name: "Grand Monastery Portal", x: 45, y: 40, description: "One of the largest Karma Kagyu seats in India." }
          ]
        },
        {
          id: "shrine",
          title: "02. Monumental Buddha Shrine Hall",
          category: "Interior Shrine",
          image: "/assets/images/ralang_panorama_360.png",
          description: "High-ceilinged prayer hall housing a monumental gilded statue of Shakyamuni Buddha.",
          portalArrows: [
            { targetNode: "viewpoint", label: "Walk to Ravangla Mountain Viewpoint ➔", x: 80, y: 50 },
            { targetNode: "entrance", label: "🡨 Back to Main Gate", x: 15, y: 55 }
          ],
          hotspots: [
            { id: "central-altar", name: "Main Buddha Statue", x: 50, y: 45, description: "Gilded statue of Buddha sitting at the heart of hall." }
          ]
        },
        {
          id: "viewpoint",
          title: "03. Nearby Ravangla Mountain Viewpoint",
          category: "Nearby Environment",
          image: "/assets/images/namchi_region_real.png",
          description: "Panoramic southern Sikkim mountain vista looking out toward Ravangla and Tendong hill.",
          portalArrows: [
            { targetNode: "entrance", label: "🡨 Return to Monastery Entrance", x: 20, y: 55 }
          ],
          hotspots: [
            { id: "ravangla-view", name: "Tendong Hill Vista", x: 50, y: 50, description: "Verdant tea gardens and mountain slopes." }
          ]
        }
      ]
    },
    featured: false
  },
  {
    id: "phodong",
    name: "Phodong Monastery",
    slug: "phodong-monastery",
    district: "Mangan",
    coordinates: { x: 380, y: 350 },
    heroImage: "/assets/images/phodong_ai.png",
    thumbnail: "/assets/images/phodong_ai.png",
    shortDescription: "Renowned for its wall paintings, Phodong is one of the three major Kagyu monasteries in Sikkim.",
    history: "Founded in 1740 during the reign of Chogyal Gyurmed Namgyal, it was built to replace a smaller Kagyu hermitage. The structure was reconstructed in the early 20th century to repair seismic damage.",
    culturalSignificance: "Phodong was once the capital monastery of North Sikkim and continues to house a treasure trove of historical artifacts, royal letters, and religious paintings.",
    architecture: "A rectangular building with a grand stone staircase. The interior has murals representing Kagyu teachers, mandalas, and depictions of the protector deities.",
    visitorEtiquette: [
      "Do not touch or flash light on the delicate ancient wall murals.",
      "Remove shoes before stepping onto the wooden floorboards.",
      "Do not touch the altar decorations."
    ],
    quickFacts: {
      established: "1740",
      founder: "Chogyal Gyurmed Namgyal",
      sect: "Karma Kagyu",
      elevation: "1,350 m (4,430 ft)",
      keyFestival: "Annual Cham Dance (December)"
    },
    nearbyLocations: [
      {
        id: "labrang-monastery",
        name: "Labrang Monastery",
        category: "Heritage",
        distance: "2.0 km",
        description: "An older, octagonal stone monastery of the Nyingma sect located just uphill.",
        image: "/assets/phodong_nearby1.png"
      },
      {
        id: "phodong-falls",
        name: "Seven Sisters Waterfalls",
        category: "Nature",
        distance: "12.0 km",
        description: "A tall cascade of water falling in seven tiers down lush green cliffs.",
        image: "/assets/phodong_nearby2.png"
      }
    ],
    gallery: [
      "/assets/gallery_land2.png"
    ],
    virtualTour: {
      initialNode: "entrance",
      nodes: [
        {
          id: "entrance",
          title: "01. Grand Stone Stairway",
          category: "Exterior Approach",
          image: "/assets/images/phodong_ai.png",
          description: "The grand stone staircase leading up to Phodong Monastery in North Sikkim.",
          portalArrows: [
            { targetNode: "shrine", label: "Walk into Mural Shrine Hall ➔", x: 75, y: 55 }
          ],
          hotspots: [
            { id: "stairway", name: "Stone Stairway", x: 45, y: 40, description: "Historical stone approach built in 1740." }
          ]
        },
        {
          id: "shrine",
          title: "02. Mahakala Mural Assembly Hall",
          category: "Interior Shrine",
          image: "/assets/images/phodong_panorama_360.png",
          description: "Interior hall featuring ancient Karma Kagyu wall frescoes depicting Mahakala protective deity.",
          portalArrows: [
            { targetNode: "viewpoint", label: "Walk to North Sikkim Valley Overlook ➔", x: 80, y: 50 },
            { targetNode: "entrance", label: "🡨 Back to Stone Stairway", x: 15, y: 55 }
          ],
          hotspots: [
            { id: "mahakala-fresco", name: "Mahakala Mural", x: 48, y: 48, description: "Ancient mural depicting Mahakala, primary protective deity." }
          ]
        },
        {
          id: "viewpoint",
          title: "03. Nearby Mangan Valley Viewpoint",
          category: "Nearby Environment",
          image: "/assets/images/mangan_region_real.png",
          description: "Spectacular North Sikkim valley overlook toward Teesta River gorge.",
          portalArrows: [
            { targetNode: "entrance", label: "🡨 Return to Monastery Entrance", x: 20, y: 55 }
          ],
          hotspots: [
            { id: "mangan-view", name: "Teesta Gorge Overlook", x: 50, y: 50, description: "Deep valley canyon and alpine forests." }
          ]
        }
      ]
    },
    featured: false
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    image: "/assets/gallery/g_monks.png"
  },
  {
    id: "g2",
    image: "/assets/gallery/g_flags.png"
  },
  {
    id: "g3",
    image: "/assets/gallery/g_stupa.png"
  },
  {
    id: "g4",
    image: "/assets/gallery/g_cham.png"
  },
  {
    id: "g5",
    image: "/assets/rumtek_ai.png"
  },
  {
    id: "g6",
    image: "/assets/pemayangtse_ai.png"
  },
  {
    id: "g7",
    image: "/assets/tashiding_ai.png"
  },
  {
    id: "g8",
    image: "/assets/enchey_ai.png"
  },
  {
    id: "g9",
    image: "/assets/phodong_ai.png"
  },
  {
    id: "g10",
    image: "/assets/ralang_ai.png"
  }
];

export const ARCHIVE_ITEMS = [
  {
    id: "a1",
    title: "1959 Tsurphu Relocation Decree & Rumtek Charter",
    category: "Architectural Decrees",
    location: "Rumtek, Gangtok",
    date: "1959 Charter",
    description: "Decree issued by the 16th Gyalwang Karmapa establishing Rumtek as the seat in exile and outlining the three-story Tibetan monastic floorplan.",
    source: "Karmapa State Archives",
    image: "/assets/archives/a_rumtek.png",
    currentImage: "/assets/rumtek_ai.png"
  },
  {
    id: "a2",
    title: "1909 Royal Charter of Enchey Monastery",
    category: "Royal Decrees",
    location: "Enchey, Gangtok",
    date: "1909 Royal Seal",
    description: "Official sanction scroll from Chogyal Sidkeong Tulku expanding Lama Drupthob Karpo's levitation hermitage into the Chinese pagoda-style shrine.",
    source: "Gangtok Royal Secretariat",
    image: "/assets/archives/a_enchey.png",
    currentImage: "/assets/enchey_ai.png"
  },
  {
    id: "a3",
    title: "1854 Hooker Expedition Sketch of Pemayangtse",
    category: "Historical Drawings",
    location: "Pemayangtse, Gyalshing",
    date: "May 1854",
    description: "Original sepia architectural elevation from Sir Joseph Dalton Hooker's Himalayan Journals documenting Pemayangtse's wooden shingle roof.",
    source: "Himalayan Journal Records",
    image: "/assets/archives/a_pemayangtse.png",
    currentImage: "/assets/pemayangtse_ai.png"
  },
  {
    id: "a4",
    title: "1641 Consecration Charter & Bhumchu Record",
    category: "Sacred Manuscripts",
    location: "Tashiding, Gyalshing",
    date: "1641 Consecration",
    description: "Inscribed vellum charter detailing the consecration of the Thongwa Rangdol chorten and the annual Bhumchu sacred water prediction ritual.",
    source: "Tashiding Monastery Library",
    image: "/assets/archives/a_tashiding.png",
    currentImage: "/assets/tashiding_ai.png"
  },
  {
    id: "a5",
    title: "1740 Royal Forest Land Grant of Phodong",
    category: "Royal Decrees",
    location: "Phodong, Mangan",
    date: "1740 Land Grant",
    description: "Royal parchment bearing the seal of Chogyal Gyurmed Namgyal donating mountain pine forests for the Karma Kagyu order at Phodong.",
    source: "North Sikkim Archives",
    image: "/assets/archives/a_phodong.png",
    currentImage: "/assets/phodong_ai.png"
  },
  {
    id: "a6",
    title: "1768 Pilgrimage Commemoration Charter of Ralang",
    category: "Monastic Charters",
    location: "Ralang, Namchi",
    date: "1768 Charter",
    description: "Historical manuscript documenting the 4th Chogyal's return from Tibet and the original consecration of the Ralang assembly hall.",
    source: "Ralang Heritage Vault",
    image: "/assets/archives/a_ralang.png",
    currentImage: "/assets/ralang_ai.png"
  }
];

export const HISTORICAL_DOCUMENTS = [
  {
    id: "doc1",
    title: "The Rumtek Charter & Karmapa Decree (1959)",
    date: "1959 (Earth-Pig Year)",
    significance: "Established Rumtek as the Karma Kagyu seat in exile.",
    transcript: "Let it be decreed that the Dharma Chakra Centre of Rumtek shall serve as the sacred treasury of the Karma Kagyu lineage outside of Tibet. Here, we shall house the sacred relics of the lineage, the golden statues of the past Gurus, and the hand-carved woodblocks of the Kangyur. May this sanctuary stand as a beacon of Vajrayana wisdom, keeping the light of the lineage burning bright until the cycle of exile is completed."
  },
  {
    id: "doc2",
    title: "The Enchey Hermitage Consecration Scroll (1909)",
    date: "1909 (Iron-Dog Year)",
    significance: "Detailed the levitation hermitage lineage of Lama Drupthob Karpo.",
    transcript: "Upon this ridge, blessed by the physical levitation and meditation of the flying master Lama Drupthob Karpo, we raise the Solitary Temple of Enchey. Let no negative energies cross the threshold of this sacred grove. The monks shall practice the Nyingma rituals under the protection of the guardian deity Kangchendzonga. May the mountain winds carry the chants of peace across the entire valley of Gangtok."
  },
  {
    id: "doc3",
    title: "The Pemayangtse Sublime Lotus Scroll (1705)",
    date: "1705 (Wood-Rooster Year)",
    significance: "Designated Pemayangtse as the seat of royal Nyingma lamas.",
    transcript: "At the site of the Sublime Lotus (Pemayangtse), only the most devout lamas of pure lineage shall enter the assembly. The lamas shall preserve the sacred Zangdokpalri—the seven-tiered wooden model of Guru Rinpoche's celestial palace. Let this monastery guide the Chogyal kings in righteousness, serving as the crown jewel of the Nyingma order in Sikkim. All rites must follow the pure vision of Lhatsun Namkha Jigme."
  },
  {
    id: "doc4",
    title: "The Tashiding Sin-Cleansing Record (1716)",
    date: "1716 (Fire-Monkey Year)",
    significance: "Established Tashiding's chortens and the water prophecy ritual.",
    transcript: "Tashiding is the heart of the Beyul Demazong. Upon this sacred hill, looking upon which cleanses all sins, we establish the Thongwa Rangdol chorten. The annual Bumchu ceremony shall determine the fate of the valley: if the holy water is clear and rising, peace and prosperity shall bless the land; if it is cloudy, prayers must be doubled to avert hardship. Let the seal of Tashiding guard this prophecy forever."
  },
  {
    id: "doc5",
    title: "The Ralong Kagyu Commemoration Scroll (1730)",
    date: "1730 (Iron-Dog Year)",
    significance: "Memorialized Chogyal Gyurmed Namgyal's pilgrimage to Tibet.",
    transcript: "Following the Chogyal's successful pilgrimage to Tibet, where he received the blessings of the 12th Karmapa, Ralong Monastery is raised to commemorate this holy journey. The monks of the Karma Kagyu order shall reside here in meditation. Let the Mahakala Cham dances be performed annually with the sacred masks, driving away the clouds of ignorance and bringing the protection of the Dharma protectors to Namchi."
  },
  {
    id: "doc6",
    title: "The Phodong Frontier Forest Grant (1740)",
    date: "1740 (Iron-Monkey Year)",
    significance: "Royal land grant allocating forest tracts to the Phodong lamas.",
    transcript: "By order of the Royal Palace, the mountain pine forests surrounding Phodong are granted to the lamas of the Karma Kagyu lineage. Let this sanctuary guard the northern hills of Sikkim. The monks shall preserve the ancient murals of the lineage, offer prayers for the protection of the frontier, and maintain the tradition of scripture reading during the harvest season. This boundary is sealed by the royal signet."
  }
];

