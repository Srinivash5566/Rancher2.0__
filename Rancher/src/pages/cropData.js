const cropData = [
  {
    cropName: "Rice (Paddy)",
    cropImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Mature_Rice_%28India%29_by_Augustus_Binu.jpg/1024px-Mature_Rice_%28India%29_by_Augustus_Binu.jpg",
    imageReferences: {
      varietyImages: {
        IR36: "http://www.agritech.tnau.ac.in/expert_system/paddy/Images/Images/IR_36.jpg",
        IR64: "https://gumlet.assettype.com/down-to-earth%2Fimport%2Flibrary%2Flarge%2F2019-04-18%2F0.22357300_1555585687_gettyimages-641770860.jpg?w=480&auto=format%2Ccompress&fit=max",
        "MTU 7029 (Swarna)":
          "https://img1.exportersindia.com/product_images/bc-full/2024/6/11267121/mtu-7029-paddy-seed-1718294951-6899201.jpg",
        "BPT 5204 (Samba Mahsuri)":
          "https://5.imimg.com/data5/LS/LP/GLADMIN-2938747/paddy-bpt-5204-1000x1000.png",
      },
    },
    bestVarieties: [
      {
        name: "IR36",
        duration: "110-115 days",
        features: "High yielding, disease resistant",
        recommendedRegions: ["North India", "Central India"],
      },
      {
        name: "IR64",
        duration: "115-120 days",
        features: "Good grain quality, suitable for lowlands",
        recommendedRegions: ["South India", "Coastal Areas"],
      },
      {
        name: "MTU 7029 (Swarna)",
        duration: "140-145 days",
        features: "High yielding, preferred by farmers",
        recommendedRegions: ["Andhra Pradesh", "Telangana"],
      },
      {
        name: "BPT 5204 (Samba Mahsuri)",
        duration: "145-150 days",
        features: "Premium quality, high market value",
        recommendedRegions: ["Tamil Nadu", "Kerala"],
      },
    ],
    timePeriod: {
      sowingTime: "Kharif: June-July, Rabi: November-December",
      harvestingTime: "Kharif: October-November, Rabi: March-April",
      totalDuration: "115-150 days depending on variety",
    },
    cropManagement: {
      soilPreparation: {
        step1: "Primary tillage - Plough field to 20-25 cm depth",
        step2: "Puddling - Till wet field to destroy weeds and level the field",
        step3: "Soil type: Clay loam to heavy clay soils preferred",
        step4: "pH requirements: 5.5-6.5",
        soilTreatment: "Apply organic matter 2-3 weeks before transplanting",
        bedPreparation:
          "Level the field perfectly for uniform water distribution",
      },
      plantingMethod: {
        directSeeding: {
          process: "Sow pre-germinated seeds directly in puddled soil",
          advantages: [
            "Less labor requirement",
            "Earlier crop maturity",
            "Lower water consumption",
          ],
          disadvantages: [
            "Higher weed problem",
            "Poor crop stand in irregular land",
            "Bird damage risk",
          ],
        },
        transplanting: {
          process:
            "Transfer 20-25 days old seedlings from nursery to main field",
          advantages: [
            "Better weed control",
            "Uniform crop stand",
            "Higher yield potential",
          ],
          disadvantages: [
            "More labor intensive",
            "Higher cost",
            "Longer crop duration",
          ],
        },
      },
      seedTreatment: {
        fungicideTreatment: "Carbendazim @ 2g/kg of seed",
        preSoaking: "Soak seeds in water for 24 hours, incubate for 24 hours",
        otherTreatments:
          "Hot water treatment at 52°C for 10 minutes for seed-borne diseases",
      },
      spacing: {
        rowToRow: "20 cm",
        plantToPlant: "15 cm",
        plantingDepth: "2-3 cm for direct seeding, 3-4 cm for transplanting",
      },
      seedingDetails: {
        seedRate: "Direct seeding: 20-25 kg/ha, Transplanting: 12-15 kg/ha",
        seedQuality: "Certified seeds with 80% germination",
        germinationPercent: "Minimum 80% required",
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after transplanting",
          frequency: "Maintain 2-5 cm water level throughout growing period",
          waterRequirement: "1200-1400 mm total water requirement",
        },
        mulching: {
          type: "Not typically required in puddle transplanted rice",
          timing: "NA",
          benefits: ["NA"],
        },
        thinning: {
          timing: "10-15 days after sowing in direct seeded rice",
          process: "Remove excess seedlings maintaining proper spacing",
          finalSpacing: "15-20 cm between plants",
        },
        weeding: {
          firstWeeding: "20-25 days after transplanting",
          frequency: "2-3 times during crop growth",
          method: "Manual or chemical using pre-emergence herbicides",
        },
      },
      interculturalOperations: {
        earthingUp: "Not required in transplanted rice",
        staking: "Not required",
        pruning: "Not required",
        otherOperations: [
          "Beushening in direct seeded rice",
          "Gap filling within 7 days of transplanting",
          "Maintaining water level",
        ],
      },
    },
    fertilizerManagement: {
      fertilizerImages: {
        npkFertilizer: "npk_fertilizer.jpg",
        ureaFertilizer: "urea_fertilizer.jpg",
        zincSulfate: "zinc_sulfate.jpg",
      },
      basalDose: {
        nitrogen: "40 kg/ha",
        phosphorus: "40 kg/ha",
        potassium: "40 kg/ha",
      },
      topDressing: [
        {
          timing: "30 days after transplanting",
          fertilizer: "Urea 40 kg N/ha",
        },
        {
          timing: "55-60 days after transplanting",
          fertilizer: "Urea 40 kg N/ha",
        },
      ],
      micronutrients: "Zinc sulfate 25 kg/ha before transplanting",
      organicFertilizers: "FYM @ 10-12 tons/ha during land preparation",
    },
    diseases: {
      diseaseImages: {
        Blast:
          "https://www.khethari.com/cdn/shop/articles/rice_blast_1.png?v=1720524371",
        "Bacterial Leaf Blight":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1EnJjc0KcrZ49d5vQ0nV2jEfcDzu7JOf06Q&s",
        "Sheath Blight":
          "https://upload.wikimedia.org/wikipedia/commons/1/15/RiceSheathArk.jpg",
        "Brown Spot":
          "https://izumibiosciences.in/wp-content/uploads/2023/06/Brown-Spot-of-Rice-Symptoms-Impact-and-Management-Strategies.jpg",
      },
      pesticideImages: {
        tricyclazole:
          "https://www.khethari.com/cdn/shop/articles/rice_blast_1.png?v=1720524371",
        copperFungicide:
          "https://www.khethari.com/cdn/shop/articles/rice_blast_1.png?v=1720524371",
        hexaconazole:
          "https://www.khethari.com/cdn/shop/articles/rice_blast_1.png?v=1720524371",
        mancozeb:
          "https://www.khethari.com/cdn/shop/articles/rice_blast_1.png?v=1720524371",
      },
      list: [
        {
          name: "Blast",
          symptoms: "Diamond-shaped lesions on leaves with gray center",
          solution: "Spray Tricyclazole 75WP @ 0.6g/l water",
        },
        {
          name: "Bacterial Leaf Blight",
          symptoms: "Yellow to white lesions along leaf margins",
          solution: "Use resistant varieties, copper-based fungicides",
        },
        {
          name: "Sheath Blight",
          symptoms: "Oval lesions on leaf sheaths near water level",
          solution: "Spray Hexaconazole 5EC @ 2ml/l water",
        },
        {
          name: "Brown Spot",
          symptoms: "Brown circular spots on leaves and grains",
          solution: "Spray Mancozeb @ 2.5g/l water",
        },
      ],
    },
  },

  // *****************************************************************************************************************//
  // ----------------------------------------------corn---------------------------------------------------------------//
  // *****************************************************************************************************************//

  {
    cropName: "Maize (Corn)",
    cropImg:
      "https://i0.wp.com/theaffordableorganicstore.com/wp-content/uploads/2021/06/images-2021-01-19T220700.127.jpeg?w=512&ssl=1",
    imageReferences: {
      varietyImages: {
        "DHM-117":
          "https://agritimes.co.in/assets/images/high-yielding-maize-for-indian-farmers-english.jpeg",
        "DMH-849": "https://m.media-amazon.com/images/I/616jG8KPZ6L.jpg",
        "Ganga Safed-2":
          "https://2.imimg.com/data2/CX/YP/IMFCP-4572164/small-images-white-maize-02-941296-1000x1000.jpg",
        "HQPM-1":
          "https://aicrpmaize.icar.gov.in/wp-content/uploads/2020/05/x7.jpg",
      },
    },
    bestVarieties: [
      {
        name: "DHM-117",
        duration: "95-100 days",
        features: "High yielding hybrid, disease resistant",
        recommendedRegions: ["North India", "Central India"],
      },
      {
        name: "DMH-849",
        duration: "85-90 days",
        features: "Early maturing, drought tolerant",
        recommendedRegions: ["South India", "Semi-Arid Regions"],
      },
      {
        name: "Ganga Safed-2",
        duration: "80-85 days",
        features: "White corn, suitable for green cobs",
        recommendedRegions: ["Eastern India", "Hilly Areas"],
      },
      {
        name: "HQPM-1",
        duration: "95-100 days",
        features: "Quality protein maize, higher nutritional value",
        recommendedRegions: ["All Maize-Growing Regions"],
      },
    ],
    timePeriod: {
      sowingTime:
        "Kharif: June-July, Rabi: October-November, Spring: January-February",
      harvestingTime: "After 90-100 days of sowing when cobs turn yellowish",
      totalDuration: "85-100 days depending on variety",
    },
    cropManagement: {
      soilPreparation: {
        step1: "Deep ploughing - 2-3 times to achieve fine tilth",
        step2: "Secondary tillage - Cross harrowing and leveling",
        step3: "Soil type: Well-drained loamy to sandy loam soils preferred",
        step4: "pH requirements: 6.5-7.5",
        soilTreatment: "Apply FYM/compost 3 weeks before sowing",
        bedPreparation: "Make ridges and furrows at 60-75 cm spacing",
      },
      plantingMethod: {
        directSeeding: {
          process: "Sow seeds directly on ridges/flat land at proper spacing",
          advantages: [
            "Less labor intensive",
            "Better root development",
            "No transplanting shock",
          ],
          disadvantages: [
            "More seed requirement",
            "Proper moisture needed for germination",
            "Bird damage risk",
          ],
        },
        transplanting: {
          process: "Not commonly practiced in maize",
          advantages: ["NA"],
          disadvantages: ["NA"],
        },
      },
      seedTreatment: {
        fungicideTreatment: "Thiram or Captan @ 3g/kg of seed",
        preSoaking: "Not recommended",
        otherTreatments:
          "Imidacloprid 600FS @ 8-10ml/kg seed for stem borer protection",
      },
      spacing: {
        rowToRow: "60-75 cm",
        plantToPlant: "20-25 cm",
        plantingDepth: "5-6 cm",
      },
      seedingDetails: {
        seedRate: "20-25 kg/ha for hybrids, 25-30 kg/ha for composites",
        seedQuality: "Certified hybrid seeds with 90% germination",
        germinationPercent: "Minimum 90% required",
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after sowing if soil is dry",
          frequency: "8-10 days interval depending on soil and climate",
          waterRequirement: "500-600 mm total water requirement",
        },
        mulching: {
          type: "Straw mulch or black plastic mulch",
          timing: "After first irrigation",
          benefits: [
            "Moisture conservation",
            "Weed suppression",
            "Temperature regulation",
          ],
        },
        thinning: {
          timing: "15-20 days after sowing",
          process: "Maintain one plant per hill",
          finalSpacing: "20-25 cm between plants",
        },
        weeding: {
          firstWeeding: "20-25 days after sowing",
          frequency: "2-3 times during crop growth",
          method:
            "Manual hoeing or herbicide application (Atrazine pre-emergence)",
        },
      },
      interculturalOperations: {
        earthingUp: "30-35 days after sowing",
        staking: "Not required generally",
        pruning: "Remove lower leaves after maturity",
        otherOperations: [
          "De-tasseling in seed production",
          "Gap filling within 10 days",
          "Removal of suckers",
        ],
      },
    },
    fertilizerManagement: {
      fertilizerImages: {
        npkFertilizer: "npk_fertilizer.jpg",
        ureaFertilizer: "urea_fertilizer.jpg",
        zincSulfate: "zinc_sulfate.jpg",
      },
      basalDose: {
        nitrogen: "60 kg/ha",
        phosphorus: "60 kg/ha",
        potassium: "40 kg/ha",
      },
      topDressing: [
        {
          timing: "25-30 days after sowing",
          fertilizer: "Urea 60 kg N/ha",
        },
        {
          timing: "45-50 days after sowing",
          fertilizer: "Urea 60 kg N/ha",
        },
      ],
      micronutrients: "Zinc sulfate 25 kg/ha and Boron 10 kg/ha if deficient",
      organicFertilizers: "FYM @ 10-12 tons/ha during land preparation",
    },
    diseases: {
      diseaseImages: {
        "Turcicum Leaf Blight":
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSfwp6rxm2p5O9Mp1cPSFiu89rztS1GIQylX5vtdpg2irtjmc0TXEkU9HCCraJY",
        "Maydis Leaf Blight":
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRKa7IX-s7Y_rirKQ3VZpxWv9RIj54xSWSbGHlT0gekyBIo7Pm7b6m6heVkGr6f",
        "Common Rust":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsGwf5v_vt2g7MvzV6oCNIPYyYZ2m1O6Yu4SzoeKptRUZLRMa7o0GZE21RvBy",
        "Downy Mildew":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4SmhkrTRhyCra-c_zzkdJ4cLsEfBCiALYXzhxmJN24gNcNNna5rA7VvDaVtz",
        "Stalk Rot":
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSlYH1KWicl4jGnI5m41x3rRaWtjHEIApj2SIzaxn_jxDKVTFveI8OVSHnvuh9k",
      },
      pesticideImages: {
        mancozeb: "mancozeb_spray.jpg",
        carbendazim: "carbendazim_spray.jpg",
        propiconazole: "propiconazole_spray.jpg",
        metalaxyl: "metalaxyl_spray.jpg",
        trichoderma: "trichoderma_spray.jpg",
      },
      list: [
        {
          name: "Turcicum Leaf Blight",
          symptoms:
            "Long, elliptical, grayish-green to brown lesions on leaves",
          solution: "Spray Mancozeb @ 2.5g/l water at 8-10 days interval",
        },
        {
          name: "Maydis Leaf Blight",
          symptoms: "Small, diamond-shaped lesions on leaves",
          solution: "Spray Carbendazim @ 1g/l water",
        },
        {
          name: "Common Rust",
          symptoms: "Small, circular to elongate brown pustules on leaves",
          solution: "Spray Propiconazole @ 1ml/l water",
        },
        {
          name: "Downy Mildew",
          symptoms:
            "Chlorotic streaks on leaves, white growth on lower surface",
          solution:
            "Seed treatment with Metalaxyl and spray Ridomil @ 2g/l water",
        },
        {
          name: "Stalk Rot",
          symptoms: "Rotting of stalk near ground level, lodging",
          solution:
            "Soil treatment with Trichoderma viride and proper drainage",
        },
      ],
    },
  },

  // *****************************************************************************************************************//
  // ----------------------------------------------Pearl Millet-------------------------------------------------------//
  // *****************************************************************************************************************//

  {
    cropName: "Pearl Millet (Bajra)",
    cropImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBiI2k-9DlOQbbpThw1-2IBael3JUQvnXHCoCJlB3a9RqmOPmyepQhf9K0jff",
    imageReferences: {
      cropImages: [
        "pearl_millet_field.jpg",
        "pearl_millet_plant.jpg",
        "pearl_millet_grain.jpg",
      ],
      varietyImages: {
        "HHB 67 Improved":
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTz6ZDbOu5iRJljPQ6v4OTRO_hMnuIC4bUgRkcsp3kEjXxb6TIErb4UAPvqTngI",
        "GHB 558":
          "https://wdra.gov.in/documents/32110/117919966/bajra.jpg/04e62481-184f-0313-bb56-14c838b4bbdd?t=1588064364854",
        "ICMH 356":
          "https://3.imimg.com/data3/HV/FN/MY-4652797/bajra-seeds-1000x1000.jpg",
        "Pusa Composite 443":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBiI2k-9DlOQbbpThw1-2IBael3JUQvnXHCoCJlB3a9RqmOPmyepQhf9K0jff",
      },
    },
    bestVarieties: [
      {
        name: "HHB 67 Improved",
        duration: "65-70 days",
        features: "Early maturing, drought tolerant, downy mildew resistant",
        recommendedRegions: ["Rajasthan", "Haryana", "Gujarat"],
      },
      {
        name: "GHB 558",
        duration: "75-80 days",
        features: "High yielding, good for dry areas",
        recommendedRegions: ["Maharashtra", "Karnataka", "Madhya Pradesh"],
      },
      {
        name: "ICMH 356",
        duration: "80-85 days",
        features: "Bold grains, suitable for summer cultivation",
        recommendedRegions: ["Andhra Pradesh", "Telangana"],
      },
      {
        name: "Pusa Composite 443",
        duration: "85-90 days",
        features: "Dual purpose variety (grain and fodder)",
        recommendedRegions: ["Uttar Pradesh", "Bihar"],
      },
    ],
    timePeriod: {
      sowingTime: "Kharif: June-July, Summer: February-March",
      harvestingTime: "65-90 days after sowing when ears turn brown",
      totalDuration: "65-90 days depending on variety",
    },
    cropManagement: {
      soilPreparation: {
        step1: "One deep ploughing followed by 2-3 harrowings",
        step2: "Planking for fine seed bed preparation",
        step3: "Soil type: Sandy loam to loamy soils preferred",
        step4: "pH requirements: 6.5-7.8",
        soilTreatment: "Apply FYM 2 weeks before sowing",
        bedPreparation: "Level field or make ridges at 45-50 cm spacing",
      },
      plantingMethod: {
        directSeeding: {
          process: "Direct sowing in lines or broadcasting",
          advantages: [
            "Quick establishment",
            "Deep root development",
            "Drought tolerance",
          ],
          disadvantages: [
            "Requires optimum soil moisture",
            "Bird damage in early stages",
            "Thinning required",
          ],
        },
        transplanting: {
          process: "Not commonly practiced",
          advantages: ["NA"],
          disadvantages: ["NA"],
        },
      },
      seedTreatment: {
        fungicideTreatment: "Thiram or Carbendazim @ 2g/kg seed",
        preSoaking: "Not recommended",
        otherTreatments: "Metalaxyl @ 6g/kg seed for downy mildew control",
      },
      spacing: {
        rowToRow: "45-50 cm",
        plantToPlant: "15-20 cm",
        plantingDepth: "2.5-3 cm",
      },
      seedingDetails: {
        seedRate: "3.5-4 kg/ha for hybrids, 4-5 kg/ha for varieties",
        seedQuality: "Certified seeds with minimum 85% germination",
        germinationPercent: "Minimum 85% required",
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "If required immediately after sowing",
          frequency: "Critical stages - tillering, flowering, grain filling",
          waterRequirement: "350-400 mm total water requirement",
        },
        mulching: {
          type: "Straw mulch in summer season",
          timing: "After crop establishment",
          benefits: [
            "Moisture conservation",
            "Temperature regulation",
            "Weed suppression",
          ],
        },
        thinning: {
          timing: "15-20 days after sowing",
          process: "Maintain optimal plant population",
          finalSpacing: "15-20 cm between plants",
        },
        weeding: {
          firstWeeding: "20-25 days after sowing",
          frequency: "2 weedings required",
          method: "Manual hoeing or herbicide (Atrazine pre-emergence)",
        },
      },
      interculturalOperations: {
        earthingUp: "30 days after sowing",
        staking: "Not required",
        pruning: "Not required",
        otherOperations: [
          "Gap filling within 10 days",
          "Removal of weak seedlings",
          "Bird scaring during grain filling",
        ],
      },
    },
    fertilizerManagement: {
      fertilizerImages: {
        npkFertilizer: "npk_fertilizer.jpg",
        ureaFertilizer: "urea_fertilizer.jpg",
        zincSulfate: "zinc_sulfate.jpg",
      },
      basalDose: {
        nitrogen: "40 kg/ha",
        phosphorus: "40 kg/ha",
        potassium: "40 kg/ha",
      },
      topDressing: [
        {
          timing: "25-30 days after sowing",
          fertilizer: "Urea 40 kg N/ha",
        },
      ],
      micronutrients: "Zinc sulfate 25 kg/ha if deficient",
      organicFertilizers: "FYM @ 8-10 tons/ha during land preparation",
    },
    diseases: {
      diseaseImages: {
        "Downy Mildew":
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5Gfric6D5XR9qrFBqDGzU0twZZ3QeL7mMgww2aHyHb-yxfoSQQf8PHA9tFaPd",
        Ergot:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3MNeEYSAMOm5vU2SCSacW1_jEzpz0mgwweCXjuiW4EgCFqgv8TXBJKQePTgt8",
        Smut: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMBbM4GWaA_z1yYPp2DkQQhoBcfzmQTx-2KUS9nJJi9_k7ttauUTkVz76auQCj",
        Rust: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3MNeEYSAMOm5vU2SCSacW1_jEzpz0mgwweCXjuiW4EgCFqgv8TXBJKQePTgt8",
      },
      list: [
        {
          name: "Downy Mildew",
          symptoms: "Systemic infection, chlorotic streaks, white downy growth",
          solution: "Seed treatment with Metalaxyl, spray Ridomil @ 2g/l water",
        },
        {
          name: "Ergot",
          symptoms: "Honey dew secretion from earheads, black sclerotia",
          solution: "Spray Carbendazim @ 1g/l at flowering stage",
        },
        {
          name: "Smut",
          symptoms: "Black powder in place of grains",
          solution: "Seed treatment with Carboxin @ 2g/kg seed",
        },
        {
          name: "Rust",
          symptoms: "Brown to dark brown pustules on leaves",
          solution: "Spray Mancozeb @ 2.5g/l water",
        },
      ],
    },
    majorPests: {
      pestImages: {
        shootFly: "shoot_fly.jpg",
        stemBorer: "stem_borer.jpg",
        earheadWorms: "earhead_worms.jpg",
      },
      list: [
        {
          name: "Shoot Fly",
          symptoms: "Dead heart in central shoot",
          management: "Early sowing, seed treatment with Imidacloprid",
        },
        {
          name: "Stem Borer",
          symptoms: "Shot holes, dead heart in later stages",
          management: "Whorl application of Carbofuran granules",
        },
        {
          name: "Earhead Worms",
          symptoms: "Caterpillars feeding on developing grains",
          management: "Spray Quinalphos @ 2ml/l at grain filling",
        },
      ],
    },
  },
  // *****************************************************************************************************************//
  // ----------------------------------------------Pearl Millet-------------------------------------------------------//
  // *****************************************************************************************************************//
  {
    cropName: "Finger Millet (Ragi)",
    cropImg:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKS3o2c5e0K106ku8f0zSJX7FdSdwwWEqoCjjhPk1xwk132PxxGtxuJrujRiwm",
    imageReferences: {
      cropImages: [
        "finger_millet_field.jpg",
        "finger_millet_plant.jpg",
        "finger_millet_grain.jpg",
      ],
      varietyImages: {
        "GPU-28":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAumFbm2kkq5rxJsW17ixXzjzWljJ663gMSQQou_f3iEMeDJ1_4OBl1bxi1DOL",
        "GPU-67":
          "https://www.agrifarming.in/wp-content/uploads/Guide-to-Finger-Millet-Cultivation-2-1068x712.jpg",
        "MR-1":
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apnikheti.com%2Fen%2Fpn%2Fagriculture%2Fcrops%2Ffodder%2Ffinger-millet&psig=AOvVaw04ya7Jzmke-PWJG2t1SMtH&ust=1732558501606000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDTi9XJ9YkDFQAAAAAdAAAAABAE",
        "ML-365":
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQFpoh3R5AL7GDzgD8lGYNpeYwWhBdEc2Wf_mw00BBec0rpmftPkqswGyPTOPvh",
      },
    },
    bestVarieties: [
      {
        name: "GPU-28",
        duration: "110-115 days",
        features: "High yielding, resistant to blast disease",
        recommendedRegions: ["Tamil Nadu", "Karnataka"],
      },
      {
        name: "GPU-67",
        duration: "105-110 days",
        features: "Early maturing, suitable for late sowing",
        recommendedRegions: ["Uttar Pradesh", "Madhya Pradesh"],
      },
      {
        name: "MR-1",
        duration: "120-125 days",
        features: "Long fingers, drought tolerant",
        recommendedRegions: ["Andhra Pradesh", "Telangana"],
      },
      {
        name: "ML-365",
        duration: "115-120 days",
        features: "Good grain quality, suitable for different seasons",
        recommendedRegions: ["Bihar", "Chhattisgarh"],
      },
    ],
    timePeriod: {
      sowingTime: "Kharif: June-July, Rabi: September-October",
      harvestingTime: "105-125 days after sowing when ears turn brown",
      totalDuration: "105-125 days depending on variety",
    },
    cropManagement: {
      soilPreparation: {
        step1: "2-3 ploughings to achieve fine tilth",
        step2: "Field leveling and making plots of convenient size",
        step3: "Soil type: Red, lateritic, sandy loam to clay loam soils",
        step4: "pH requirements: 6.0-7.5",
        soilTreatment: "Apply FYM 3 weeks before transplanting",
        bedPreparation: "Prepare raised nursery beds for transplanting method",
      },
      plantingMethod: {
        directSeeding: {
          process: "Line sowing or broadcasting in prepared field",
          advantages: [
            "Less labor requirement",
            "No nursery preparation needed",
            "Early crop establishment",
          ],
          disadvantages: [
            "More seed requirement",
            "Difficult weed management",
            "Uneven plant population",
          ],
        },
        transplanting: {
          process: "Transplant 20-25 days old seedlings",
          advantages: [
            "Better crop stand",
            "Efficient water use",
            "Better weed control",
          ],
          disadvantages: [
            "Labor intensive",
            "Higher cost",
            "Requires nursery management",
          ],
        },
      },
      seedTreatment: {
        fungicideTreatment: "Carbendazim @ 2g/kg seed",
        preSoaking: "Not required",
        otherTreatments: "Thiram @ 2.5g/kg seed for blast disease",
      },
      spacing: {
        rowToRow: "22.5-30 cm",
        plantToPlant: "10 cm (transplanting)",
        plantingDepth: "2-3 cm for direct seeding",
      },
      seedingDetails: {
        seedRate: "Direct sowing: 10 kg/ha, Transplanting: 5 kg/ha",
        seedQuality: "Certified seeds with minimum 85% germination",
        germinationPercent: "Minimum 85% required",
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after transplanting",
          frequency: "7-10 days interval based on soil type",
          waterRequirement: "400-450 mm total water requirement",
        },
        mulching: {
          type: "Straw mulch in direct seeded crop",
          timing: "After crop establishment",
          benefits: [
            "Moisture conservation",
            "Weed suppression",
            "Soil temperature regulation",
          ],
        },
        thinning: {
          timing: "15-20 days after sowing in direct seeded crop",
          process: "Remove excess plants",
          finalSpacing: "10 cm between plants",
        },
        weeding: {
          firstWeeding: "15-20 days after sowing/transplanting",
          frequency: "2-3 weedings required",
          method: "Hand weeding or use of mechanical weeder",
        },
      },
      interculturalOperations: {
        earthingUp: "30-35 days after planting",
        staking: "Not required",
        pruning: "Not required",
        otherOperations: [
          "Gap filling within 7 days of transplanting",
          "Regular field inspection",
          "Removing off-types",
        ],
      },
    },
    fertilizerManagement: {
      fertilizerImages: {
        npkFertilizer: "npk_fertilizer.jpg",
        ureaFertilizer: "urea_fertilizer.jpg",
        zincSulfate: "zinc_sulfate.jpg",
      },
      basalDose: {
        nitrogen: "25 kg/ha",
        phosphorus: "40 kg/ha",
        potassium: "25 kg/ha",
      },
      topDressing: [
        {
          timing: "25-30 days after transplanting",
          fertilizer: "Urea 25 kg N/ha",
        },
        {
          timing: "45-50 days after transplanting",
          fertilizer: "Urea 25 kg N/ha",
        },
      ],
      micronutrients: "Zinc sulfate 12.5 kg/ha if deficient",
      organicFertilizers: "FYM @ 10 tons/ha during land preparation",
    },
    diseases: {
      diseaseImages: {
        Blast:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT8uTJTxR2_T3iIVTiShUd42lfHOP5eZYAL9Kf4k0wrR1LKcktJytEzUPBcIDgE",
        "Brown Spot":
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTfCs0fekNgvf9kCpnXMvYHsiZ-uLYtD6q9e37Mu9YiKwZOuiVCDQpSzp-beUwW",
        "Cercospora Leaf Spot":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYtr7zA_1rwcpbKStfScszqduQPbvHBKPgOSClPLQ_LsiJsCYRYK5TV0QK1Eb",
        "Foot Rot":
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzhMWDz3EbmNfDi3p-Ss_CbrXieA1sG1ETHJXyqVxDp5C_CM1gtIcCg5tJ2BTX",
      },
      list: [
        {
          name: "Blast",
          symptoms: "Diamond shaped lesions on leaves, neck and fingers",
          solution: "Spray Carbendazim @ 1g/l or Tricyclazole @ 0.6g/l water",
        },
        {
          name: "Brown Spot",
          symptoms: "Oval to circular brown spots on leaves",
          solution: "Spray Mancozeb @ 2.5g/l water",
        },
        {
          name: "Cercospora Leaf Spot",
          symptoms: "Small circular spots with gray center",
          solution: "Spray Carbendazim + Mancozeb @ 2g/l water",
        },
        {
          name: "Foot Rot",
          symptoms: "Rotting at base of tillers, yellowing",
          solution: "Soil drenching with Carbendazim @ 1g/l water",
        },
      ],
    },
    majorPests: {
      pestImages: {
        pinkStemBorer: "pink_stem_borer.jpg",
        armyWorm: "army_worm.jpg",
        aphids: "aphids.jpg",
      },
      list: [
        {
          name: "Pink Stem Borer",
          symptoms: "Dead heart in central shoot",
          management: "Spray Chlorpyriphos @ 2ml/l water",
        },
        {
          name: "Army Worm",
          symptoms: "Leaves eaten from margins",
          management: "Spray Quinalphos @ 2ml/l water",
        },
        {
          name: "Aphids",
          symptoms: "Yellowing and curling of leaves",
          management: "Spray Dimethoate @ 1.7ml/l water",
        },
      ],
    },
    specialFeatures: {
      droughtTolerance: "High",
      nutritionalValue: {
        calcium: "344mg/100g",
        protein: "7.3g/100g",
        fiber: "3.6g/100g",
        minerals: "2.7g/100g",
      },
      storageQuality: "Excellent, can be stored for long periods",
      valueAddition: [
        "Ragi flour",
        "Ragi malt",
        "Ragi cookies",
        "Health drinks",
      ],
    },
  },
  // ================================================================================================
  // ================================================================================================
  // ================================================================================================
  {
    cropName: "Sorghum",
    cropImg:
      "https://www.sorghumcheckoff.com/wp-content/uploads/2021/09/sorghum-01.png",
    imageReferences: {
      cropImages: [
        "sorghum_field.jpg",
        "sorghum_plant.jpg",
        "sorghum_grain.jpg",
      ],
      varietyImages: {
        "M 35-1":
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRcUjYT4LoT4M355jeyYRkOSfA1FPOSOMNWdkpW9-rTE5WT8JqxDkTaihwGMDxL",
        "SPV 462":
          "https://www.asiafarming.com/wp-content/uploads/2017/05/Sorghum-Plant-Green-Spike.-300x251.jpg",
        "CSH 16":
          "https://cdn.shortpixel.ai/spai/q_lossy+w_297+h_135+to_webp+ret_img/smil.k-state.edu/wp-content/uploads/2022/11/EjetaSorghum_crop.jpg",
        "CSV 29":
          "https://media.assettype.com/TNIE%2Fimport%2F2018%2F10%2F2%2Foriginal%2FJowar.jpg?w=480&auto=format%2Ccompress&fit=max",
        Ravi: "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/m/c/f/1-cofs31-012345-ravi-and-satheesh-original-imaghreymfqwxyw3.jpeg?q=90&crop=false",
      },
    },
    bestVarieties: [
      {
        name: "M 35-1",
        features: "Widely grown variety, resistant to drought",
        recommendedRegions: ["Maharashtra", "Gujarat"],
      },
      {
        name: "SPV 462",
        features: "High yield and disease resistance",
        recommendedRegions: ["Rajasthan", "Haryana"],
      },
      {
        name: "CSH 16",
        features: "Popular hybrid with strong drought tolerance",
        recommendedRegions: ["Andhra Pradesh", "Karnataka"],
      },
      {
        name: "CSV 29",
        features: "Resistant to water stress and pests",
        recommendedRegions: ["Madhya Pradesh", "Uttar Pradesh"],
      },
      {
        name: "Ravi",
        features: "Good yield and disease resistance",
        recommendedRegions: ["Tamil Nadu", "Bihar"],
      },
    ],
    timePeriod: {
      sowingTime: "March to April",
      harvestingTime: "October to November",
      totalDuration: "120-150 days",
    },
    cropManagement: {
      soilPreparation: {
        step1: "Primary tillage - deep plowing",
        step2: "Secondary tillage - field leveling",
        step3: "Soil type requirements: Well-drained loamy soils preferred",
        step4: "pH requirements: 5.5-7.5",
        soilTreatment:
          "Add organic compost or manure to improve soil fertility",
        bedPreparation:
          "Prepare raised beds or ridges for proper drainage and aeration",
      },
      plantingMethod: {
        directSeeding: {
          process: "Direct seeding using a planter or broadcasting seeds",
          advantages: [
            "Less labor-intensive",
            "Faster establishment",
            "Lower cost of planting",
          ],
          disadvantages: ["Uneven germination", "Seed wastage"],
        },
        transplanting: {
          process: "Transplant seedlings at 3-4 weeks of age",
          advantages: [
            "Better plant establishment",
            "Uniform growth",
            "Higher survival rate",
          ],
          disadvantages: ["Labor-intensive", "Higher cost", "Time-consuming"],
        },
      },
      seedTreatment: {
        fungicideTreatment: "Carbendazim to prevent fungal diseases",
        preSoaking: "Soak seeds for 12-24 hours to improve germination",
        otherTreatments: "Inoculate seeds with Rhizobium bacteria",
      },
      spacing: {
        rowToRow: "45 cm",
        plantToPlant: "15 cm",
        plantingDepth: "2-3 cm",
      },
      seedingDetails: {
        seedRate: "8-10 kg/ha",
        seedQuality: "Certified seeds with 98% purity",
        germinationPercent: "90%",
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after sowing",
          frequency: "Once every 7-10 days",
          waterRequirement: "400-500 mm",
        },
        mulching: {
          type: "Straw, dry leaves, or plastic mulch",
          timing: "Apply after sowing",
          benefits: [
            "Reduces weeds",
            "Conserves moisture",
            "Maintains temperature",
          ],
        },
        thinning: {
          timing: "2-3 weeks after sowing",
          process: "Remove weak seedlings to avoid overcrowding",
          finalSpacing: "30 cm",
        },
        weeding: {
          firstWeeding: "3 weeks after planting",
          frequency: "Every 3-4 weeks",
          method: "Manual or mechanical",
        },
      },
      interculturalOperations: {
        earthingUp: "Support plants during early growth stages",
        staking: "Not required",
        pruning: "Remove excess tillers for better yield",
        otherOperations: ["Fertilizer application", "Pest control"],
      },
    },
    fertilizerManagement: {
      fertilizerImages: {
        npkFertilizer: "npk_fertilizer.jpg",
        ureaFertilizer: "urea_fertilizer.jpg",
        compost: "compost.jpg",
      },
      basalDose: "30 kg NPK (20:20:0) per hectare",
      topDressing: [
        {
          timing: "30-45 days after sowing",
          fertilizer: "20 kg urea/ha",
        },
        {
          timing: "60 days after sowing",
          fertilizer: "20 kg urea/ha",
        },
      ],
      micronutrients: "Zinc and boron as required based on soil test",
      organicFertilizers: "5-6 tons of compost per hectare",
    },
    diseases: {
      diseaseImages: {
        "Leaf Spot":
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMSoMAjZ4u27G8ehtP8VGyE9BL9Qh3XDJL6YgvVUYU04DvJY9sVjNiho6-oLN2",
        "Downy Mildew":
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSjrlznLCBuQ08OExu87g3t08wsTuC06a9fVD7UHQIehjmG0FoGLwXI1vXpht2j",
        "Sorghum Shoot Fly":
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZpVtKJMMxvaTpkQNjcQ8ZG4jzc2WsAeluMa_cj5f-YEpjggBn2JrEvp-C1XJB",
        "Sorghum Ergot":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZY8Jdyo-CCKiPY06QyGjD-apbVGhQtxFwIMgu64XCdS6oe-Gg0ikuinYHTkN",
      },
      list: [
        {
          name: "Leaf Spot",
          symptoms: "Small, round lesions with yellow halos on leaves",
          solution: "Spray Mancozeb or Copper-based fungicides",
        },
        {
          name: "Downy Mildew",
          symptoms: "Yellowing leaves with powdery coating",
          solution: "Spray systemic fungicides like Metalaxyl",
        },
        {
          name: "Sorghum Shoot Fly",
          symptoms: "Dead heart and wilting of the plant",
          solution: "Apply Dimethoate or insecticidal seed coating",
        },
        {
          name: "Sorghum Ergot",
          symptoms: "Swollen, irregular structures at flowering heads",
          solution: "Remove infected heads and apply fungicides",
        },
      ],
    },
  },

  // ================================================================================================
  // ================================================================================================
  // ================================================================================================
  {
    cropName: "Groundnut",
    cropImg:
      "https://cdn.wikifarmer.com/wp-content/uploads/2023/07/Groundnut-Plant-Information-History-Uses-and-Nutrition-Value-1024x599.jpg",
    imageReferences: {
      cropImages: [
        "groundnut_field.jpg",
        "groundnut_plant.jpg",
        "groundnut_harvest.jpg",
      ],
      varietyImages: {
        "JL 24": "https://example.com/jl24_variety.jpg",
        "TAG 24": "https://example.com/tag24_variety.jpg",
        "Girnar 4": "https://example.com/girnar4_variety.jpg",
        "ICGV 91114": "https://example.com/icgv91114_variety.jpg",
        "TG 37A": "https://example.com/tg37a_variety.jpg",
      },
    },
    bestVarieties: [
      {
        name: "JL 24",
        features: "High yield and disease resistant",
        recommendedRegions: ["Gujarat", "Rajasthan"],
      },
      {
        name: "TAG 24",
        features: "Bold seeded variety with good oil content",
        recommendedRegions: ["Maharashtra", "Karnataka"],
      },
      {
        name: "Girnar 4",
        features: "Drought tolerant with high pod yield",
        recommendedRegions: ["Saurashtra", "Rajasthan"],
      },
      {
        name: "ICGV 91114",
        features: "Early maturing with high pod yield",
        recommendedRegions: ["Andhra Pradesh", "Tamil Nadu"],
      },
      {
        name: "TG 37A",
        features: "Rust resistant with good pod quality",
        recommendedRegions: ["Gujarat", "Madhya Pradesh"],
      },
    ],
    timePeriod: {
      sowingTime: "June to July (Kharif)",
      harvestingTime: "September to October",
      totalDuration: "90-120 days",
    },
    cropManagement: {
      soilPreparation: {
        step1: "Primary tillage - deep plowing",
        step2: "Secondary tillage - fine seedbed preparation",
        step3: "Soil type requirements: Sandy loam or light loamy soils",
        step4: "pH requirements: 6.0-7.0",
        soilTreatment: "Add well-decomposed organic manure",
        bedPreparation: "Prepare flat or raised beds with good drainage",
      },
      plantingMethod: {
        directSeeding: {
          process: "Seed sowing in rows using seed drill",
          advantages: [
            "Uniform planting",
            "Precise seed placement",
            "Reduced seed rate",
          ],
          disadvantages: [
            "Requires precise equipment",
            "Sensitive to soil moisture",
          ],
        },
        transplanting: {
          process: "Not commonly used in groundnut cultivation",
          advantages: [],
          disadvantages: [],
        },
      },
      seedTreatment: {
        fungicideTreatment:
          "Thiram or Carbendazim to prevent seed-borne diseases",
        preSoaking: "Soak seeds in water for 6-8 hours before sowing",
        otherTreatments: "Treat with Rhizobium culture for nitrogen fixation",
      },
      spacing: {
        rowToRow: "45-60 cm",
        plantToPlant: "10-15 cm",
        plantingDepth: "5-7 cm",
      },
      seedingDetails: {
        seedRate: "80-100 kg/ha",
        seedQuality: "Certified seeds with 95% germination",
        germinationPercent: "85-90%",
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after sowing",
          frequency: "Every 7-10 days",
          waterRequirement: "350-400 mm",
        },
        mulching: {
          type: "Organic mulch like crop residues",
          timing: "After seedling emergence",
          benefits: [
            "Moisture conservation",
            "Weed suppression",
            "Temperature regulation",
          ],
        },
        thinning: {
          timing: "2 weeks after germination",
          process: "Remove weak and overcrowded seedlings",
          finalSpacing: "20-25 cm",
        },
        weeding: {
          firstWeeding: "20-25 days after sowing",
          frequency: "2-3 times during crop cycle",
          method: "Manual or mechanical inter-cultivation",
        },
      },
      interculturalOperations: {
        earthingUp: "Mound soil around plant base during pod development",
        staking: "Not required",
        pruning: "Remove diseased or dead branches",
        otherOperations: ["Crop rotation", "Regular monitoring"],
      },
    },
    fertilizerManagement: {
      fertilizerImages: {
        npkFertilizer: "npk_fertilizer.jpg",
        micronutrients: "micronutrients_fertilizer.jpg",
        organicManure: "organic_manure.jpg",
      },
      basalDose: "20 kg NPK (10:20:10) per hectare",
      topDressing: [
        {
          timing: "30 days after sowing",
          fertilizer: "25 kg urea/ha",
        },
        {
          timing: "45 days after sowing",
          fertilizer: "20 kg DAP/ha",
        },
      ],
      micronutrients: "Zinc and boron as soil test recommendations",
      organicFertilizers: "8-10 tons of compost per hectare",
    },
    diseases: {
      diseaseImages: {
        "Leaf Spot": "https://example.com/leaf_spot.jpg",
        Rust: "https://example.com/rust_disease.jpg",
        "Cercospora Leaf Spot": "https://example.com/cercospora.jpg",
        "Tikka Disease": "https://example.com/tikka_disease.jpg",
      },
      list: [
        {
          name: "Leaf Spot",
          symptoms: "Brown circular spots on leaves with yellow margins",
          solution: "Spray Mancozeb or Copper-based fungicides",
        },
        {
          name: "Rust",
          symptoms: "Orange-brown pustules on leaf surface",
          solution: "Apply systemic fungicides like Propiconazole",
        },
        {
          name: "Cercospora Leaf Spot",
          symptoms: "Circular brown spots with gray center",
          solution: "Use Carbendazim or Hexaconazole",
        },
        {
          name: "Tikka Disease",
          symptoms: "Small dark spots with yellow halos",
          solution: "Crop rotation and fungicide treatment",
        },
      ],
    },
  },
  // ================================================================================================
  // ================================================================================================
  // ================================================================================================

  {
    cropName: "Banana",
    cropImg: "https://www.greensofkerala.com/wp-content/uploads/2024/01/grand-nain-banana-plant.png",
    imageReferences: {
      cropImages: [
        "banana_plantation.jpg",
        "banana_tree.jpg",
        "banana_fruit.jpg",
      ],
      varietyImages: {
        Robusta: "https://m.media-amazon.com/images/I/81WIcL-ZWBL._AC_UF1000,1000_QL80_.jpg",
        "Dwarf Cavendish": "https://www.trees.com/wp-content/uploads/products/medium/1000/Dwarf-Cavendish-Banana-2.webp",
        "Grand Naine": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfsAki0hWrc3TCH4SU38jeSePXaDy8dEcsQ&s",
        "Red Banana": "https://m.media-amazon.com/images/I/61g4r0vLYdL._AC_UF1000,1000_QL80_.jpg",
        Rasthali: "https://m.media-amazon.com/images/I/51atk4uWg-L._AC_UF1000,1000_QL80_.jpg",
      },
    },
    bestVarieties: [
      {
        name: "Robusta",
        features: "High yield and disease resistance",
        recommendedRegions: ["Tamil Nadu", "Karnataka"],
      },
      {
        name: "Dwarf Cavendish",
        features: "Compact growth, suitable for small spaces",
        recommendedRegions: ["Andhra Pradesh", "Maharashtra"],
      },
      {
        name: "Grand Naine",
        features: "Excellent quality and export potential",
        recommendedRegions: ["Kerala", "Gujarat"],
      },
      {
        name: "Red Banana",
        features: "Rich flavor and high nutritional value",
        recommendedRegions: ["West Bengal", "Assam"],
      },
      {
        name: "Rasthali",
        features: "Popular for its taste and market demand",
        recommendedRegions: ["Bihar", "Uttar Pradesh"],
      },
    ],
    timePeriod: {
      sowingTime: "June to September",
      harvestingTime: "12-15 months after planting",
      totalDuration: "12-15 months",
    },
    cropManagement: {
      soilPreparation: {
        step1: "Primary tillage - deep plowing and removing weeds",
        step2: "Secondary tillage - adding organic matter and leveling",
        step3: "Soil type requirements: Well-drained loamy soil",
        step4: "pH requirements: 6.0-7.5",
        soilTreatment: "Add well-decomposed organic compost or farmyard manure",
        bedPreparation:
          "Prepare pits (60x60x60 cm) and fill with topsoil and manure mix",
      },
      plantingMethod: {
        directSeeding: {
          process:
            "Not applicable for bananas; suckers or tissue culture plants are used",
          advantages: [],
          disadvantages: [],
        },
        transplanting: {
          process: "Plant tissue culture plants or suckers in prepared pits",
          advantages: [
            "Disease-free planting material",
            "Uniform growth",
            "Higher survival rate",
          ],
          disadvantages: ["Higher cost", "Labor-intensive"],
        },
      },
      seedTreatment: {
        fungicideTreatment: "Dip suckers in Carbendazim solution",
        preSoaking: "Not applicable for banana",
        otherTreatments:
          "Use tissue culture plants for disease-free propagation",
      },
      spacing: {
        rowToRow: "2.5-3 meters",
        plantToPlant: "2-2.5 meters",
        plantingDepth: "Plant at the same depth as the nursery",
      },
      seedingDetails: {
        seedRate: "Not applicable (use suckers or tissue culture plants)",
        seedQuality: "Certified suckers or disease-free tissue culture plants",
        germinationPercent: "Not applicable",
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after planting",
          frequency: "Once every 3-7 days depending on weather",
          waterRequirement: "1200-1500 mm per annum",
        },
        mulching: {
          type: "Organic mulch like straw or dry leaves",
          timing: "Immediately after planting",
          benefits: [
            "Conserves moisture",
            "Controls weeds",
            "Improves soil organic matter",
          ],
        },
        thinning: {
          timing: "Remove excess suckers every 3-4 months",
          process: "Leave only 1-2 healthy suckers per plant",
          finalSpacing: "Maintain plant density",
        },
        weeding: {
          firstWeeding: "1 month after planting",
          frequency: "Every 2-3 months",
          method: "Manual or mechanical",
        },
      },
      interculturalOperations: {
        earthingUp: "Around the base during early stages for stability",
        staking: "Provide support to prevent lodging during storms",
        pruning: "Remove damaged or diseased leaves",
        otherOperations: [
          "Fertilizer application",
          "Pest and disease management",
        ],
      },
    },
    fertilizerManagement: {
      fertilizerImages: {
        npkFertilizer: "npk_banana_fertilizer.jpg",
        ureaFertilizer: "banana_urea_fertilizer.jpg",
        compost: "banana_compost.jpg",
      },
      basalDose: "100g NPK (10:10:20) per plant at planting",
      topDressing: [
        {
          timing: "3 months after planting",
          fertilizer: "100g NPK (20:10:10) per plant",
        },
        {
          timing: "6 months after planting",
          fertilizer: "150g NPK (20:10:10) per plant",
        },
      ],
      micronutrients: "Zinc, magnesium, and boron as needed",
      organicFertilizers: "20-25 kg of compost per plant annually",
    },
    diseases: {
      diseaseImages: {
        "Panama Wilt": "https://www.frontiersin.org/files/Articles/469624/fpls-10-01395-HTML/image_m/fpls-10-01395-g004.jpg",
        "Sigatoka Leaf Spot": "https://i.ytimg.com/vi/gwaXSFx8nAk/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEYgZSg8MA8=&rs=AOn4CLDc24C6nxKoIJjcxtBX-SnuKsgweg",
        "Banana Bunchy Top Virus":"https://infonet-biovision.org/sites/default/files/1113.400x400_5.jpeg",
        "Banana Weevil": "https://content.peat-cloud.com/w400/pseudostem-weevil-2.jpg",
      },
      list: [
        {
          name: "Panama Wilt",
          symptoms: "Yellowing leaves and wilting",
          solution: "Use resistant varieties and improve drainage",
        },
        {
          name: "Sigatoka Leaf Spot",
          symptoms: "Dark streaks and necrotic lesions on leaves",
          solution: "Apply fungicides like Mancozeb",
        },
        {
          name: "Banana Bunchy Top Virus",
          symptoms: "Bunched and erect leaves with dark streaks",
          solution:
            "Use virus-free planting material and remove infected plants",
        },
        {
          name: "Banana Weevil",
          symptoms: "Tunnels in pseudostem and reduced vigor",
          solution: "Apply insecticides and remove plant debris",
        },
      ],
    },
  },
  // ================================================================================================
  // ================================================================================================
  // ================================================================================================
  {
    cropName: "Tomato",
    cropImg: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
    imageReferences: {
      cropImages: ["tomato_field.jpg", "tomato_plant.jpg", "tomato_fruits.jpg"],
      varietyImages: {
        Roma: "https://upload.wikimedia.org/wikipedia/commons/5/52/TomateTrossRomanaTyp.jpg",
        Cherry:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiArHVSJmLSBaGB6k1AqOjfnpN1hfRfH-R3Q&s",
        Beefsteak:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRompp57Sx4c1XVHW-X1n64puXvPbraCXYI3w&s",
        "San Marzano":
          "https://5.imimg.com/data5/SELLER/Default/2021/2/TZ/JL/IN/3640922/san-marzano-tomatoes.jpeg",
        Heirloom:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrOcZVFkP_OC3ohqVBFutO8UieE7f9lTomA&s",
      },
    },
    bestVarieties: [
      {
        name: "Roma",
        features: "Oval shape, thick flesh, ideal for sauces",
        recommendedRegions: ["Maharashtra", "Karnataka"],
      },
      {
        name: "Cherry",
        features: "Small, sweet, and great for salads",
        recommendedRegions: ["Tamil Nadu", "Andhra Pradesh"],
      },
      {
        name: "Beefsteak",
        features: "Large size, juicy texture, excellent for slicing",
        recommendedRegions: ["Punjab", "Haryana"],
      },
      {
        name: "San Marzano",
        features: "Elongated fruit, rich flavor, preferred for canning",
        recommendedRegions: ["Kerala", "Madhya Pradesh"],
      },
      {
        name: "Heirloom",
        features: "Unique shapes and colors, flavorful",
        recommendedRegions: ["Uttar Pradesh", "Gujarat"],
      },
    ],
    timePeriod: {
      sowingTime: "October to November",
      harvestingTime: "February to April",
      totalDuration: "90-120 days",
    },
    cropManagement: {
      soilPreparation: {
        step1: "Primary tillage - deep plowing to loosen the soil",
        step2: "Secondary tillage - fine tilth and addition of organic manure",
        step3: "Soil type requirements: Well-drained sandy loam soil",
        step4: "pH requirements: 6.0-7.5",
        soilTreatment: "Use well-decomposed farmyard manure or compost",
        bedPreparation: "Raised beds with proper spacing for drainage",
      },
      plantingMethod: {
        directSeeding: {
          process: "Not typically used; seedlings are preferred",
          advantages: [],
          disadvantages: [],
        },
        transplanting: {
          process: "Transplant seedlings 4-6 weeks old to the field",
          advantages: [
            "Uniform plant growth",
            "Better survival rate",
            "Efficient use of seeds",
          ],
          disadvantages: ["Labor-intensive", "Requires nursery setup"],
        },
      },
      seedTreatment: {
        fungicideTreatment: "Treat with Thiram or Carbendazim",
        preSoaking: "Soak seeds for 12-24 hours to improve germination",
        otherTreatments:
          "Inoculate seeds with Trichoderma for disease resistance",
      },
      spacing: {
        rowToRow: "60-75 cm",
        plantToPlant: "45-60 cm",
        plantingDepth: "2-3 cm",
      },
      seedingDetails: {
        seedRate: "200-400 g/ha",
        seedQuality: "Certified seeds with 98% purity",
        germinationPercent: "80-90%",
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after transplanting",
          frequency: "Once every 5-7 days depending on weather",
          waterRequirement: "500-700 mm",
        },
        mulching: {
          type: "Plastic or organic mulch",
          timing: "After transplanting",
          benefits: [
            "Reduces weeds",
            "Conserves soil moisture",
            "Prevents soil erosion",
          ],
        },
        thinning: {
          timing: "Not required for transplanted crops",
          process: "",
          finalSpacing: "",
        },
        weeding: {
          firstWeeding: "3 weeks after transplanting",
          frequency: "Every 2-3 weeks",
          method: "Manual or mechanical",
        },
      },
      interculturalOperations: {
        earthingUp: "Support plants by adding soil around the base",
        staking: "Provide stakes for support during flowering",
        pruning: "Remove side shoots to improve yield",
        otherOperations: ["Pest and disease control", "Nutrient management"],
      },
    },
    fertilizerManagement: {
      fertilizerImages: {
        npkFertilizer: "npk_fertilizer_tomato.jpg",
        ureaFertilizer: "urea_tomato_fertilizer.jpg",
        compost: "compost_tomato.jpg",
      },
      basalDose: "50 kg NPK (12:32:16) per hectare",
      topDressing: [
        {
          timing: "30 days after transplanting",
          fertilizer: "50 kg urea/ha",
        },
        {
          timing: "60 days after transplanting",
          fertilizer: "50 kg urea/ha",
        },
      ],
      micronutrients: "Boron and calcium to prevent blossom end rot",
      organicFertilizers: "10-15 tons of compost per hectare",
    },
    diseases: {
      diseaseImages: {
        "Late Blight":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinsCh_IKs65QdgQnGDLO0bLxSG2M8ATaQ2Q&s",
        "Tomato Mosaic Virus":
          "https://extension.umn.edu/sites/extension.umn.edu/files/tomato-spotted-wilt-virus-fruit.jpg",
        "Early Blight":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIHsfBUtCVB_7M8sxfe6d7juHAUwy_ffrzA&s",
        "Root Knot Nematode":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqNjRh76oc2vZtjHG56MZt1e10d6PO2OKyEQ&s",
      },
      list: [
        {
          name: "Late Blight",
          symptoms: "Water-soaked lesions on leaves and stems",
          solution: "Apply Mancozeb or Chlorothalonil fungicides",
        },
        {
          name: "Tomato Mosaic Virus",
          symptoms: "Mottled leaves and stunted growth",
          solution: "Use resistant varieties and remove infected plants",
        },
        {
          name: "Early Blight",
          symptoms: "Concentric rings on leaves and fruit rot",
          solution: "Spray Copper-based fungicides",
        },
        {
          name: "Root Knot Nematode",
          symptoms: "Galls on roots and yellowing of plants",
          solution: "Use nematode-resistant varieties and apply nematicides",
        },
      ],
    },
  },
  // ================================================================================================
  // ================================================================================================
  // ================================================================================================
  {
    cropName: "Mango",
    cropImg:
      "https://rukminim2.flixcart.com/image/850/1000/l0jwbrk0/plant-sapling/e/g/i/no-annual-yes-mango-plant-5024-1-natikrd-original-imagcbdjhnnx8jq4.jpeg?q=20&crop=false",
    imageReferences: {
      cropImages: ["mango_tree.jpg", "mango_fruit.jpg", "mango_farm.jpg"],
      varietyImages: {
        Alphonso:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROt0Ue5-xFNcOzaCRyTxop2y8tFsRTqe68XA&s",
        Dasheri:
          "https://m.media-amazon.com/images/I/41ZY5AGbb9L._AC_UF1000,1000_QL80_.jpg",
        Kesar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU4dat7PS8CAAhTMFKU-u4LUHdPtr3fexug&s",
        Himsagar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlXonCB2J6PT_e_9UqNaUNKOjkttopd5DCg&s",
        Totapuri:
          "https://m.media-amazon.com/images/I/81X6NFosNCL._AC_UF1000,1000_QL80_.jpg",
      },
    },
    bestVarieties: [
      {
        name: "Alphonso",
        features: "Rich aroma and sweetness, premium export quality",
        recommendedRegions: ["Maharashtra", "Goa"],
      },
      {
        name: "Dasheri",
        features: "Sweet and juicy, good for fresh consumption",
        recommendedRegions: ["Uttar Pradesh", "Punjab"],
      },
      {
        name: "Kesar",
        features: "Known as the 'Queen of Mangoes', deep saffron color",
        recommendedRegions: ["Gujarat", "Madhya Pradesh"],
      },
      {
        name: "Himsagar",
        features: "Fiberless, creamy pulp, aromatic",
        recommendedRegions: ["West Bengal", "Odisha"],
      },
      {
        name: "Totapuri",
        features: "Tangy flavor, ideal for pickles and processing",
        recommendedRegions: ["Karnataka", "Tamil Nadu"],
      },
    ],
    timePeriod: {
      sowingTime: "June to July",
      harvestingTime: "March to June",
      totalDuration: "100-150 days for flowering and fruiting",
    },
    cropManagement: {
      soilPreparation: {
        step1: "Primary tillage - deep plowing to break hardpan",
        step2: "Secondary tillage - fine leveling for planting pits",
        step3: "Soil type requirements: Well-drained sandy loam soil",
        step4: "pH requirements: 5.5-7.5",
        soilTreatment:
          "Incorporate organic manure and neem cake in planting pits",
        bedPreparation:
          "Prepare pits of size 1m x 1m x 1m for planting saplings",
      },
      plantingMethod: {
        directSeeding: {
          process: "Not applicable for mango; saplings are transplanted",
          advantages: [],
          disadvantages: [],
        },
        transplanting: {
          process: "Plant grafted saplings or seedlings in prepared pits",
          advantages: [
            "Ensures true-to-type plants",
            "Higher survival rate",
            "Faster fruiting in grafted varieties",
          ],
          disadvantages: ["Labor-intensive", "Initial care required"],
        },
      },
      seedTreatment: {
        fungicideTreatment: "Treat sapling roots with Copper Oxychloride",
        preSoaking: "Not applicable for mango",
        otherTreatments: "Drench pits with bio-fertilizers before planting",
      },
      spacing: {
        rowToRow: "10-12 m",
        plantToPlant: "10-12 m",
        plantingDepth: "Plant at the same depth as in the nursery",
      },
      seedingDetails: {
        seedRate: "Not applicable; 100-150 saplings per hectare",
        seedQuality: "Grafted saplings of certified varieties",
        germinationPercent: "Not applicable",
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after planting",
          frequency:
            "Weekly for young plants; every 2-3 weeks for mature trees",
          waterRequirement: "Varies; ensure proper moisture levels",
        },
        mulching: {
          type: "Organic mulch such as dry leaves or straw",
          timing: "After planting",
          benefits: [
            "Reduces weed growth",
            "Conserves soil moisture",
            "Improves soil organic matter",
          ],
        },
        thinning: {
          timing: "Not applicable for mango",
          process: "",
          finalSpacing: "",
        },
        weeding: {
          firstWeeding: "1 month after planting",
          frequency: "Twice a year or as required",
          method: "Manual or chemical",
        },
      },
      interculturalOperations: {
        earthingUp: "Not required",
        staking: "Provide support to young saplings",
        pruning: "Remove dead or diseased branches regularly",
        otherOperations: ["Fertilizer application", "Pest control"],
      },
    },
    fertilizerManagement: {
      fertilizerImages: {
        npkFertilizer: "npk_fertilizer_mango.jpg",
        ureaFertilizer: "urea_mango_fertilizer.jpg",
        compost: "compost_mango.jpg",
      },
      basalDose: "Apply 10 kg organic manure per pit before planting",
      topDressing: [
        {
          timing: "1st year after planting",
          fertilizer: "100 g N, 50 g P, 100 g K per tree",
        },
        {
          timing: "Annually increase by 50 g NPK until 5th year",
          fertilizer: "After 5th year, 1 kg N, 500 g P, 1 kg K per tree",
        },
      ],
      micronutrients: "Apply Zinc Sulfate and Boron if deficiencies observed",
      organicFertilizers: "Apply 15-20 kg compost annually per tree",
    },
    diseases: {
      diseaseImages: {
        "Powdery Mildew":
          "https://us-central1-plantix-8e0ce.cloudfunctions.net/v1/image/w400/93f83069-792c-41ac-b550-89910cba6c3a",
        Anthracnose:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mCVWuqs05VVq-52x2CS3g75TYJn08u83qw&s",
        "Mango Hopper":
          "https://blog.agriapp.com/wp-content/uploads/2024/04/sootyfruitimg_3380-1.webp",
        "Stem Borer":
          "https://us-central1-plantix-8e0ce.cloudfunctions.net/v1/image/w400/64245bb4-2a22-4d11-aa30-1616e2a72743",
      },
      list: [
        {
          name: "Powdery Mildew",
          symptoms: "White powdery growth on leaves and flowers",
          solution: "Spray Sulfur or systemic fungicides",
        },
        {
          name: "Anthracnose",
          symptoms: "Dark spots on leaves, stems, and fruits",
          solution: "Apply Copper-based fungicides",
        },
        {
          name: "Mango Hopper",
          symptoms: "Wilting of flowers and young shoots",
          solution: "Spray Imidacloprid or Neem oil",
        },
        {
          name: "Stem Borer",
          symptoms: "Holes and tunnels in branches and stems",
          solution: "Apply Chlorpyrifos or remove infested branches",
        },
      ],
    },
  },
  // ================================================================================================
  // ================================================================================================
  // ================================================================================================
  {
    cropName: "Brinjal",
    cropImg:
      "https://organicmandya.com/cdn/shop/files/Brinjal.jpg?v=1721370805&width=1024",
    imageReferences: {
      cropImages: [
        "brinjal_field.jpg",
        "brinjal_plant.jpg",
        "brinjal_fruits.jpg",
      ],
      varietyImages: {
        "Pusa Purple Long":
          "https://urjaseeds.com/cdn/shop/products/brinjal_ppl_300x.jpg?v=1654512410",
        "Arka Navneet":
          "https://blog.agribegri.com/public/blog_images/brinjal-farming-guide-for-farmers-agribegri-600x400.jpg",
        "Pusa Purple Cluster":
          "https://m.media-amazon.com/images/I/817iJMQ4oOL.jpg",
        "Arka Kesav":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToAm6EPxHX6PPqReQVfl_FJs0pjTvPxyd-uQ&s",
        "Black Beauty":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToiGiWYY0XA_L_ZsL7Q-x2smMeQWBcKzgXnQ&s",
      },
    },
    bestVarieties: [
      {
        name: "Pusa Purple Long",
        features: "Long fruits, good for cooking and pickling",
        recommendedRegions: ["Punjab", "Uttar Pradesh"],
      },
      {
        name: "Arka Navneet",
        features: "High-yielding hybrid with glossy fruits",
        recommendedRegions: ["Karnataka", "Tamil Nadu"],
      },
      {
        name: "Pusa Purple Cluster",
        features: "Clustered fruit formation, good for fresh market",
        recommendedRegions: ["Maharashtra", "Rajasthan"],
      },
      {
        name: "Arka Kesav",
        features: "Oval fruits, high tolerance to pests",
        recommendedRegions: ["West Bengal", "Andhra Pradesh"],
      },
      {
        name: "Black Beauty",
        features: "Globular fruits, highly flavorful",
        recommendedRegions: ["Madhya Pradesh", "Gujarat"],
      },
    ],
    timePeriod: {
      sowingTime: "June to July or January to February",
      harvestingTime: "75-90 days after transplanting",
      totalDuration: "120-150 days",
    },
    cropManagement: {
      soilPreparation: {
        step1: "Primary tillage - deep plowing to loosen soil",
        step2: "Secondary tillage - harrowing and leveling",
        step3:
          "Soil type requirements: Well-drained sandy loam to clay loam soil",
        step4: "pH requirements: 6.0-7.5",
        soilTreatment: "Add farmyard manure or compost during land preparation",
        bedPreparation: "Prepare raised beds for better drainage and aeration",
      },
      plantingMethod: {
        directSeeding: {
          process: "Not recommended for brinjal; transplanting preferred",
          advantages: [],
          disadvantages: [],
        },
        transplanting: {
          process: "Transplant seedlings at 4-5 weeks of age",
          advantages: [
            "Uniform growth",
            "High survival rate",
            "Better crop management",
          ],
          disadvantages: ["Labor-intensive", "Higher initial cost"],
        },
      },
      seedTreatment: {
        fungicideTreatment: "Treat seeds with Thiram or Carbendazim",
        preSoaking: "Soak seeds in water for 12 hours before sowing",
        otherTreatments:
          "Inoculate seeds with bio-fungicides for better germination",
      },
      spacing: {
        rowToRow: "60 cm",
        plantToPlant: "45 cm",
        plantingDepth: "2-3 cm",
      },
      seedingDetails: {
        seedRate: "300-400 g/ha",
        seedQuality: "Certified seeds with 95% purity",
        germinationPercent: "85-90%",
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after transplanting",
          frequency: "Every 7-10 days depending on soil moisture",
          waterRequirement: "500-600 mm during the crop cycle",
        },
        mulching: {
          type: "Plastic or organic mulch",
          timing: "After transplanting",
          benefits: [
            "Controls weeds",
            "Conserves moisture",
            "Maintains soil temperature",
          ],
        },
        thinning: {
          timing: "Not applicable for transplanted crops",
          process: "",
          finalSpacing: "",
        },
        weeding: {
          firstWeeding: "15 days after transplanting",
          frequency: "Every 3-4 weeks",
          method: "Manual or mechanical",
        },
      },
      interculturalOperations: {
        earthingUp: "Promote root growth and support plants",
        staking: "Provide support for tall varieties",
        pruning: "Remove weak shoots to encourage better fruiting",
        otherOperations: ["Fertilizer application", "Pest control"],
      },
    },
    fertilizerManagement: {
      fertilizerImages: {
        npkFertilizer: "npk_fertilizer_brinjal.jpg",
        ureaFertilizer: "urea_fertilizer_brinjal.jpg",
        compost: "compost_brinjal.jpg",
      },
      basalDose: "20 tons FYM and 60:60:40 NPK kg/ha before planting",
      topDressing: [
        {
          timing: "30 days after transplanting",
          fertilizer: "30 kg Urea/ha",
        },
        {
          timing: "60 days after transplanting",
          fertilizer: "30 kg Urea/ha",
        },
      ],
      micronutrients: "Apply Zinc Sulfate and Boron based on soil test",
      organicFertilizers: "5-6 tons of compost per hectare",
    },
    diseases: {
      diseaseImages: {
        "Bacterial Wilt":
          "https://cdn.shopify.com/s/files/1/0762/3639/0696/files/Bacterial-Wilt-Management-in-Eggplant1_480x480.webp?v=1714725477",
        "Phomopsis Blight":
          "https://agritech.tnau.ac.in/crop_protection/images/brinjal_ph_diseases/2.phomopsis3.jpg",
        "Fruit and Shoot Borer":
          "https://cdn.shopify.com/s/files/1/0762/3639/0696/files/20a32132-6c94-4eeb-bffa-87d6e9b8c49a_480x480_11zon_1_480x480.webp?v=1722334486",
        "Damping Off":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHobXwoNDJNvwm16d7AK2R12cUb-uJvuciww&s",
      },
      list: [
        {
          name: "Bacterial Wilt",
          symptoms: "Wilting of plants and brown discoloration in stems",
          solution: "Use resistant varieties and crop rotation",
        },
        {
          name: "Phomopsis Blight",
          symptoms: "Dark sunken spots on fruits and stems",
          solution: "Spray Copper-based fungicides",
        },
        {
          name: "Fruit and Shoot Borer",
          symptoms: "Boring into shoots and fruits causing damage",
          solution: "Apply Neem oil or insecticides like Carbaryl",
        },
        {
          name: "Damping Off",
          symptoms: "Seedling collapse with water-soaked lesions",
          solution: "Use treated seeds and avoid overwatering",
        },
      ],
    },
  },
  // ================================================================================================
  // ================================================================================================
  // ================================================================================================
  {
    cropName: "Bitter Gourd",
    cropImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf_uXfC4GPcy8fMWZbWnaxe1bhL3ow46RDAA&s",
    imageReferences: {
      cropImages: [
        "bitter_gourd_field.jpg",
        "bitter_gourd_plant.jpg",
        "bitter_gourd_fruit.jpg",
      ],
      varietyImages: {
        "Pusa Do Mausami":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWeIFA5RL0_UkxonNjZVezSK3UcHLd9SsosA&s",
        "Arka Harit": "",
        "Coimbatore Long":
          "https://www.ampimex.in/wp-content/uploads/2021/02/bitter-gourd.jpg",
        Preethi:
          "https://creativefarmer.in/cdn/shop/products/81zR9TokcTL._SL1500.jpg?v=1616235651",
      },
    },
    bestVarieties: [
      {
        name: "Pusa Do Mausami",
        features: "Good yield, medium-sized fruits, dark green color",
        recommendedRegions: ["Delhi", "Punjab", "Haryana"],
      },
      {
        name: "Arka Harit",
        features: "Resistant to pests, prolific bearer",
        recommendedRegions: ["Karnataka", "Tamil Nadu", "Andhra Pradesh"],
      },
      {
        name: "Coimbatore Long",
        features: "Long fruits, highly productive variety",
        recommendedRegions: ["Tamil Nadu", "Kerala"],
      },
      {
        name: "Priya",
        features: "Short, dark green fruits, high yield",
        recommendedRegions: ["Maharashtra", "Gujarat"],
      },
      {
        name: "Preethi",
        features: "Resistant to diseases, uniform fruiting",
        recommendedRegions: ["West Bengal", "Bihar"],
      },
    ],
    timePeriod: {
      sowingTime: "January to March and June to July",
      harvestingTime: "May to June and October to November",
      totalDuration: "90-110 days",
    },
    cropManagement: {
      soilPreparation: {
        step1: "Primary tillage - plowing to a depth of 20-25 cm",
        step2: "Secondary tillage - leveling the soil",
        step3: "Soil type requirements: Well-drained sandy loam preferred",
        step4: "pH requirements: 6.0-7.5",
        soilTreatment: "Apply 10-15 tons of farmyard manure per hectare",
        bedPreparation: "Raised beds with furrows for proper drainage",
      },
      plantingMethod: {
        directSeeding: {
          process: "Direct sowing of seeds in prepared beds",
          advantages: ["Easy to establish", "Suitable for large-scale farming"],
          disadvantages: [
            "Susceptible to pests",
            "Requires careful monitoring",
          ],
        },
        transplanting: {
          process: "Transplanting seedlings raised in a nursery",
          advantages: [
            "Ensures better plant establishment",
            "Minimizes seed wastage",
          ],
          disadvantages: ["Labor-intensive", "Higher costs"],
        },
      },
      seedTreatment: {
        fungicideTreatment: "Thiram to protect seeds from fungal infections",
        preSoaking: "Soak seeds in warm water for 24 hours",
        otherTreatments: "Treat with Trichoderma for enhanced growth",
      },
      spacing: {
        rowToRow: "2-3 m",
        plantToPlant: "30-50 cm",
        plantingDepth: "2-3 cm",
      },
      seedingDetails: {
        seedRate: "4-5 kg/ha",
        seedQuality: "Viable seeds with 90% germination",
        germinationPercent: "80-90%",
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after sowing",
          frequency: "Weekly or as required depending on soil moisture",
          waterRequirement: "400-600 mm",
        },
        mulching: {
          type: "Dry grass or plastic mulch",
          timing: "After seedling establishment",
          benefits: [
            "Reduces weed growth",
            "Maintains soil temperature",
            "Conserves moisture",
          ],
        },
        thinning: {
          timing: "2 weeks after sowing",
          process: "Remove weaker plants",
          finalSpacing: "Ensure adequate spacing for growth",
        },
        weeding: {
          firstWeeding: "2-3 weeks after planting",
          frequency: "Every 3-4 weeks",
          method: "Manual or mechanical",
        },
      },
      interculturalOperations: {
        earthingUp: "Not typically required",
        staking: "Use stakes or trellis for vine support",
        pruning: "Prune lateral shoots for better growth",
        otherOperations: ["Fertilizer application", "Pest control"],
      },
    },
    fertilizerManagement: {
      fertilizerImages: {
        npkFertilizer: "npk_fertilizer_bitter_gourd.jpg",
        ureaFertilizer: "urea_fertilizer_bitter_gourd.jpg",
        compost: "compost_bitter_gourd.jpg",
      },
      basalDose: "20 tons of farmyard manure per hectare",
      topDressing: [
        {
          timing: "30 days after planting",
          fertilizer: "30 kg nitrogen/ha",
        },
        {
          timing: "60 days after planting",
          fertilizer: "30 kg nitrogen/ha",
        },
      ],
      micronutrients: "Apply boron and zinc based on soil test results",
      organicFertilizers: "10 tons of compost per hectare",
    },
    diseases: {
      diseaseImages: {
        "Powdery Mildew":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpqTUSYQVWWU0DqKU_h7nAhup9SRXqpOqwg&s",
        "Downy Mildew":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAIKtSZ71ZSfRwKmO4S_gn5U5vM7nljadVw&s",
        "Fruit Fly":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfWgoXErzF4SlrKGJkNODCfGcdh5idfoi_lQ&s",
        Anthracnose:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1L3s3EQC6D9PgoYm9UMhUFpXwP5cDQGNPw&s",
      },
      list: [
        {
          name: "Powdery Mildew",
          symptoms: "White powdery spots on leaves",
          solution: "Spray sulfur-based fungicides",
        },
        {
          name: "Downy Mildew",
          symptoms: "Yellow spots with a cottony growth on leaves",
          solution: "Use Metalaxyl-based fungicides",
        },
        {
          name: "Fruit Fly",
          symptoms: "Distorted fruits with holes",
          solution: "Use pheromone traps or apply Malathion spray",
        },
        {
          name: "Anthracnose",
          symptoms: "Sunken spots on leaves and fruits",
          solution: "Apply Carbendazim or Mancozeb",
        },
      ],
    },
  },
  // ================================================================================================
  // ================================================================================================
  // ================================================================================================

  {
    cropName: "Pumpkin",
    cropImg:
      "https://www.thespruce.com/thmb/fcOA9H8kBWzGWcmICmB1i2czDtY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-147003040-86f76dfc543d4a719eed6ccd3395c2b7.jpg",
    imageReferences: {
      cropImages: [
        "pumpkin_field.jpg",
        "pumpkin_plant.jpg",
        "pumpkin_fruits.jpg",
      ],
      varietyImages: {
        "Arka Suryamukhi":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7timA3egIjw5wFqdxpgjTAhrYQOpiKstnw&s",
        "Pusa Vishwas":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbQYjEjpSvMBm16qnIG7wiPTnB5eoSfsI3w&s",
        Cinderella:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEnGMfGTvgemWzpxhntFmJbeNr5hg5aBOFrA&s",
        "Atlantic Giant":
          "https://m.media-amazon.com/images/I/61yYoUfscoL._AC_UF1000,1000_QL80_.jpg",
        "Green Delight":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtWHRFbxd5rT2l47mSqaBCP5z6yUgRe_RmA&s",
      },
    },
    bestVarieties: [
      {
        name: "Arka Suryamukhi",
        features: "High-yielding variety with sweet flesh",
        recommendedRegions: ["Karnataka", "Maharashtra"],
      },
      {
        name: "Pusa Vishwas",
        features: "Disease-resistant variety with uniform fruits",
        recommendedRegions: ["Punjab", "Uttar Pradesh"],
      },
      {
        name: "Cinderella",
        features: "Decorative variety with flavorful flesh",
        recommendedRegions: ["Himachal Pradesh", "Uttarakhand"],
      },
      {
        name: "Atlantic Giant",
        features: "Large-sized fruits, ideal for exhibitions",
        recommendedRegions: ["West Bengal", "Odisha"],
      },
      {
        name: "Green Delight",
        features: "Compact variety suitable for small farms",
        recommendedRegions: ["Tamil Nadu", "Kerala"],
      },
    ],
    timePeriod: {
      sowingTime: "June to July or January to February",
      harvestingTime: "90-120 days after sowing",
      totalDuration: "100-150 days",
    },
    cropManagement: {
      soilPreparation: {
        step1: "Primary tillage - deep plowing to improve soil aeration",
        step2: "Secondary tillage - harrowing and leveling",
        step3:
          "Soil type requirements: Well-drained sandy loam to clay loam soil",
        step4: "pH requirements: 6.0-7.5",
        soilTreatment:
          "Add well-rotted manure or compost during land preparation",
        bedPreparation:
          "Prepare raised beds or mounds for planting seeds or seedlings",
      },
      plantingMethod: {
        directSeeding: {
          process: "Sow seeds directly in prepared pits or mounds",
          advantages: [
            "Simpler method",
            "Requires less labor",
            "Suitable for large areas",
          ],
          disadvantages: ["Vulnerable to uneven germination"],
        },
        transplanting: {
          process: "Transplant seedlings at 3-4 weeks of age",
          advantages: [
            "Ensures uniform growth",
            "Higher survival rate",
            "Allows better crop scheduling",
          ],
          disadvantages: ["Labor-intensive", "Time-consuming"],
        },
      },
      seedTreatment: {
        fungicideTreatment:
          "Treat seeds with Thiram or Captan to prevent diseases",
        preSoaking: "Soak seeds in water for 12 hours to improve germination",
        otherTreatments: "Use bio-stimulants for better seed vigor",
      },
      spacing: {
        rowToRow: "2-3 meters",
        plantToPlant: "1.5-2 meters",
        plantingDepth: "2-3 cm",
      },
      seedingDetails: {
        seedRate: "2-3 kg/ha",
        seedQuality: "Certified seeds with 98% purity",
        germinationPercent: "85-90%",
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after sowing or transplanting",
          frequency: "Every 5-7 days in dry conditions",
          waterRequirement: "400-600 mm during the crop cycle",
        },
        mulching: {
          type: "Organic or plastic mulch",
          timing: "Apply immediately after planting",
          benefits: [
            "Retains soil moisture",
            "Prevents weed growth",
            "Maintains soil temperature",
          ],
        },
        thinning: {
          timing: "2-3 weeks after germination",
          process: "Remove weak seedlings to ensure proper spacing",
          finalSpacing: "1.5-2 meters",
        },
        weeding: {
          firstWeeding: "2 weeks after sowing",
          frequency: "Every 3-4 weeks",
          method: "Manual or mechanical",
        },
      },
      interculturalOperations: {
        earthingUp: "Provide support for roots during growth",
        staking: "Not required for creeping varieties",
        pruning: "Remove side shoots to focus growth on main vine",
        otherOperations: ["Fertilizer application", "Pest control"],
      },
    },
    fertilizerManagement: {
      fertilizerImages: {
        npkFertilizer: "npk_fertilizer_pumpkin.jpg",
        ureaFertilizer: "urea_fertilizer_pumpkin.jpg",
        compost: "compost_pumpkin.jpg",
      },
      basalDose: "20 tons FYM and 60:40:30 NPK kg/ha before planting",
      topDressing: [
        {
          timing: "30 days after sowing",
          fertilizer: "20 kg Urea/ha",
        },
        {
          timing: "60 days after sowing",
          fertilizer: "20 kg Urea/ha",
        },
      ],
      micronutrients: "Apply Zinc and Boron based on soil test results",
      organicFertilizers: "5-7 tons of compost per hectare",
    },
    diseases: {
      diseaseImages: {
        "Powdery Mildew":
          "https://cdn.mos.cms.futurecdn.net/S6TndtkEW3u6v6eYDrxBxT.jpg",
        "Downy Mildew":
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRcFaZPyc0LLnjLQVYhhn-iqqWWQ8DOWKgmTDWbh9wrS9Y_csFg3B0oattDC32x",
        "Fruit Rot":
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUe5qE1G9JYR-5CkpVnwVtfvTpUEj4IvOf_XhjeW5rngQMHctsfbtGZCVBwiK",
        "Pumpkin Beetle":
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9GBiVfkn5WzsKIeQgoZ_OhKzdniTAxpC6_oB7tpKESMh6YJVU0qBSsqUvSMU6",
      },
      list: [
        {
          name: "Powdery Mildew",
          symptoms: "White powdery spots on leaves and stems",
          solution: "Spray Sulfur-based fungicides",
        },
        {
          name: "Downy Mildew",
          symptoms: "Yellow spots on leaves with downy growth underneath",
          solution: "Use systemic fungicides like Metalaxyl",
        },
        {
          name: "Fruit Rot",
          symptoms: "Soft, water-soaked patches on fruits",
          solution: "Ensure proper drainage and apply Copper fungicides",
        },
        {
          name: "Pumpkin Beetle",
          symptoms: "Chewing damage on leaves and flowers",
          solution: "Apply Neem oil or insecticides like Carbaryl",
        },
      ],
    },
  },
  // ================================================================================================
  // ================================================================================================
  // ================================================================================================

  {
    cropName: "Beans",
    cropImg:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1u3WpQlDkZXaEiqonJVb21q73_DqjiwsIejJZ5UfFa0p0vEmx5yjNOJS-qfMK",
    imageReferences: {
      cropImages: ["beans_field.jpg", "beans_plant.jpg", "beans_pods.jpg"],
      varietyImages: {
        "Arka Anoop":
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQvlM4gDe2znK9kvKVcII5DR8Jf-2Nad8GREavd412iuXetybzMdQesYiMSFgII",
        "Pusa Parvati":
          "http://eagri.org/eagri50/HORT281/lec18_clip_image005.jpg",
        Contender:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3lc8GWSzvId-zRIKkLTgH2KZd0sWBaL__nPdbaNJObaBFcwu55z4J2GftOhZs",
        "Top Crop":
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmYlRhaMLbQgebpFX9GJm3DU1LmGEtn8GPf_Gy73tlVlv1W4g4nriFaxXr_WUu",
        "Kentucky Wonder":
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3q2lAG53xFqk-YSVKhXb75Y_ydyhiAuqj_PYkEP3BUg6sLAh1mN9DkYJawmM4",
      },
    },
    bestVarieties: [
      {
        name: "Arka Anoop",
        features: "Resistant to anthracnose and rust, high yield",
        recommendedRegions: ["Karnataka", "Tamil Nadu"],
      },
      {
        name: "Pusa Parvati",
        features: "Suitable for cooler climates, excellent quality pods",
        recommendedRegions: ["Himachal Pradesh", "Uttarakhand"],
      },
      {
        name: "Contender",
        features: "Early maturing variety, drought tolerant",
        recommendedRegions: ["Madhya Pradesh", "Maharashtra"],
      },
      {
        name: "Top Crop",
        features: "High-yielding variety with uniform pods",
        recommendedRegions: ["Punjab", "Haryana"],
      },
      {
        name: "Kentucky Wonder",
        features: "Popular pole bean variety, flavorful pods",
        recommendedRegions: ["Kerala", "West Bengal"],
      },
    ],
    timePeriod: {
      sowingTime: "February to March and July to September",
      harvestingTime: "May to June and October to November",
      totalDuration: "50-70 days",
    },
    cropManagement: {
      soilPreparation: {
        step1: "Primary tillage - plow to loosen soil up to 15-20 cm",
        step2: "Secondary tillage - fine tilth and leveling",
        step3: "Soil type requirements: Sandy loam to clay loam",
        step4: "pH requirements: 5.5-6.5",
        soilTreatment: "Incorporate compost or well-rotted manure",
        bedPreparation: "Raised beds with furrows for irrigation",
      },
      plantingMethod: {
        directSeeding: {
          process: "Plant seeds directly in the field in furrows",
          advantages: ["Simpler and faster", "Reduces transplanting shock"],
          disadvantages: [
            "Requires proper spacing",
            "Careful irrigation needed",
          ],
        },
        transplanting: {
          process: "Seedlings are raised in trays and transplanted",
          advantages: ["Uniform spacing and growth", "Better survival rate"],
          disadvantages: ["Labor-intensive", "Not common for beans"],
        },
      },
      seedTreatment: {
        fungicideTreatment:
          "Thiram or Carbendazim to control seed-borne diseases",
        preSoaking: "Soak seeds for 4-6 hours for better germination",
        otherTreatments:
          "Treat seeds with Rhizobium culture for nitrogen fixation",
      },
      spacing: {
        rowToRow: "45-60 cm",
        plantToPlant: "10-15 cm",
        plantingDepth: "2-3 cm",
      },
      seedingDetails: {
        seedRate: "25-30 kg/ha",
        seedQuality: "Certified seeds with high germination rate",
        germinationPercent: "85-90%",
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after sowing",
          frequency: "Weekly or based on soil moisture",
          waterRequirement: "300-400 mm",
        },
        mulching: {
          type: "Organic or plastic mulch",
          timing: "After planting",
          benefits: [
            "Conserves moisture",
            "Controls weeds",
            "Maintains soil temperature",
          ],
        },
        thinning: {
          timing: "2-3 weeks after sowing",
          process: "Remove weak seedlings to maintain spacing",
          finalSpacing: "10-15 cm",
        },
        weeding: {
          firstWeeding: "3 weeks after planting",
          frequency: "Every 2-3 weeks",
          method: "Manual or mechanical",
        },
      },
      interculturalOperations: {
        earthingUp: "Not required",
        staking: "Use stakes for pole bean varieties",
        pruning: "Not required for most bush varieties",
        otherOperations: ["Fertilizer application", "Pest management"],
      },
    },
    fertilizerManagement: {
      fertilizerImages: {
        npkFertilizer: "npk_fertilizer_beans.jpg",
        ureaFertilizer: "urea_fertilizer_beans.jpg",
        compost: "compost_beans.jpg",
      },
      basalDose:
        "20-25 kg nitrogen, 50 kg phosphorus, and 30 kg potassium per hectare",
      topDressing: [
        {
          timing: "30 days after sowing",
          fertilizer: "10-15 kg nitrogen/ha",
        },
      ],
      micronutrients: "Apply zinc and boron based on soil tests",
      organicFertilizers: "5-10 tons of farmyard manure per hectare",
    },
    diseases: {
      diseaseImages: {
        Anthracnose:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nAaAmyZfncAzwwFAutJfINmd0aBxcdLyEH7ydaZ3P1Of32Ri0WIB6oUUW-qF",
        Rust: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdjTws9HH8o_4Hp3--8EPUsV7ebqW0p9hwjKmkvwp4aftAC80XMD62qg7NDO4J",
        "Powdery Mildew":
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrJ1g-Opb85EWa6hfhSzBUUT1f258B0qB2z4tRcFKBH2L1r4LAuF-3dLaAv5WX",
        "Bean Mosaic Virus":
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTqSO0Ghpybv-8wn87hr3ZkqUxvyWdWXae5RKJ3O-7fVaTnEV2Z8WJDawA2qb6a",
      },
      list: [
        {
          name: "Anthracnose",
          symptoms: "Dark, sunken spots on pods and leaves",
          solution: "Spray Mancozeb or Chlorothalonil",
        },
        {
          name: "Rust",
          symptoms: "Reddish-brown pustules on leaves",
          solution: "Use systemic fungicides like Propiconazole",
        },
        {
          name: "Powdery Mildew",
          symptoms: "White powdery growth on leaves",
          solution: "Spray sulfur-based fungicides",
        },
        {
          name: "Bean Mosaic Virus",
          symptoms: "Mosaic pattern on leaves and stunted growth",
          solution: "Remove infected plants and use virus-free seeds",
        },
      ],
    },
  },

  {
    cropName: "Chili",
    cropImg: "https://cdn.britannica.com/62/118162-050-56CC9480/cultivar-Thai-chili-peppers-fruits.jpg",
    imageReferences: {
      cropImages: ["chili_field.jpg", "chili_plant.jpg", "chili_pods.jpg"],
      varietyImages: {
        Guntur: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmoiEoRI0tk3PfvSZ8SUH_GZxb_YN4TvuTug&s",
        Byadagi: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7MCXdEV5omYISCfLgBmdLmf3AenSMl36Xw&s",
        Kanthari: "https://cdn-hplcf.nitrocdn.com/LOlGVLgIEBtVUTuwYxsjjbJTZirHUQmS/assets/images/optimized/rev-30fb0fb/gardenhunt.com/wp-content/uploads/2022/10/Chilli-small-1.jpg",
        "Pusa Jwala": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmfN7LyHhndhP4qpiup-BQVGDWRoTBBKeELQ&s",
        "Pant C-1": "https://parajulianish.wordpress.com/wp-content/uploads/2015/02/chillie-1.jpg",
      },
    },
    bestVarieties: [
      {
        name: "Guntur",
        features: "High pungency and deep red color",
        recommendedRegions: ["Andhra Pradesh", "Telangana"],
      },
      {
        name: "Byadagi",
        features: "Bright red color, medium pungency",
        recommendedRegions: ["Karnataka", "Tamil Nadu"],
      },
      {
        name: "Kanthari",
        features: "Small, white fruits, highly pungent",
        recommendedRegions: ["Kerala", "Tamil Nadu"],
      },
      {
        name: "Pusa Jwala",
        features: "Widely grown, medium pungency, green turning red",
        recommendedRegions: ["Rajasthan", "Uttar Pradesh"],
      },
      {
        name: "Pant C-1",
        features: "Early maturing, medium pungency",
        recommendedRegions: ["Uttarakhand", "Himachal Pradesh"],
      },
    ],
    timePeriod: {
      sowingTime: "June to July and December to January",
      harvestingTime: "September to October and March to April",
      totalDuration: "150-180 days",
    },
    cropManagement: {
      soilPreparation: {
        step1: "Deep plowing to loosen soil up to 20-25 cm",
        step2: "Leveling and fine tilth preparation",
        step3: "Soil type requirements: Sandy loam to clay loam",
        step4: "pH requirements: 6.0-7.5",
        soilTreatment: "Incorporate organic matter or compost",
        bedPreparation: "Raised beds with proper drainage",
      },
      plantingMethod: {
        directSeeding: {
          process: "Sow seeds directly in the field",
          advantages: ["Simpler process", "Lower labor cost"],
          disadvantages: ["Uneven germination", "Lower survival rate"],
        },
        transplanting: {
          process:
            "Raise seedlings in nursery beds and transplant at 4-6 weeks",
          advantages: ["Uniform plant population", "Higher survival and yield"],
          disadvantages: ["Labor-intensive", "Costly process"],
        },
      },
      seedTreatment: {
        fungicideTreatment:
          "Treat seeds with Carbendazim to prevent fungal infections",
        preSoaking: "Soak seeds in water for 12 hours for faster germination",
        otherTreatments: "Treat seeds with Trichoderma for disease resistance",
      },
      spacing: {
        rowToRow: "60-75 cm",
        plantToPlant: "45-60 cm",
        plantingDepth: "2-3 cm",
      },
      seedingDetails: {
        seedRate: "1.5-2.0 kg/ha",
        seedQuality: "Certified seeds with high germination rate",
        germinationPercent: "85-90%",
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after sowing or transplanting",
          frequency: "Weekly or based on soil moisture",
          waterRequirement: "500-700 mm",
        },
        mulching: {
          type: "Organic mulch like straw or plastic mulch",
          timing: "Apply after planting",
          benefits: [
            "Reduces weeds",
            "Retains soil moisture",
            "Controls temperature",
          ],
        },
        thinning: {
          timing: "3 weeks after germination",
          process: "Remove weaker seedlings",
          finalSpacing: "45-60 cm",
        },
        weeding: {
          firstWeeding: "3-4 weeks after planting",
          frequency: "Every 3-4 weeks",
          method: "Manual or chemical",
        },
      },
      interculturalOperations: {
        earthingUp: "Support plants during growth",
        staking: "Use stakes for better support in taller varieties",
        pruning: "Remove lower branches to prevent diseases",
        otherOperations: ["Fertilizer application", "Pest control"],
      },
    },
    fertilizerManagement: {
      fertilizerImages: {
        npkFertilizer: "https://",
        ureaFertilizer: "https://",
        compost: "https://",
      },
      basalDose:
        "50 kg nitrogen, 25 kg phosphorus, and 25 kg potassium per hectare",
      topDressing: [
        {
          timing: "30 days after transplanting",
          fertilizer: "20 kg nitrogen/ha",
        },
        {
          timing: "60 days after transplanting",
          fertilizer: "20 kg nitrogen/ha",
        },
      ],
      micronutrients: "Apply magnesium and zinc as needed",
      organicFertilizers: "10-15 tons of farmyard manure per hectare",
    },
    diseases: {
      diseaseImages: {
        Anthracnose: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-me4c2GTEKGDDDa8WGftzMUurIM9bKZmEKA&s",
        "Powdery Mildew": "https://www.ignitionseeds.co.nz/cdn/shop/files/mildew.webp?v=1681859991&width=1500",
        "Chili Mosaic Virus": "https://kisanvedika.bighaat.com/wp-content/uploads/2023/04/MicrosoftTeams-image-14-302x420.jpg",
        "Fusarium Wilt": "https://www.planetnatural.com/wp-content/uploads/2012/12/fusarium-wilt-tomato.jpg",
      },
      list: [
        {
          name: "Anthracnose",
          symptoms: "Sunken spots on fruits and stems",
          solution: "Spray Mancozeb or Copper Oxychloride",
        },
        {
          name: "Powdery Mildew",
          symptoms: "White powdery coating on leaves",
          solution: "Apply sulfur-based fungicides",
        },
        {
          name: "Chili Mosaic Virus",
          symptoms: "Mottling and leaf distortion",
          solution: "Use virus-free seeds and remove infected plants",
        },
        {
          name: "Fusarium Wilt",
          symptoms: "Yellowing and wilting of plants",
          solution: "Drench soil with Carbendazim solution",
        },
      ],
    },
  },
];

export default cropData;
