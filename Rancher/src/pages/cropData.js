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
    cropName: "groundnut",
    cropImg:
      "https://cdn.wikifarmer.com/wp-content/uploads/2023/07/Groundnut-Plant-Information-History-Uses-and-Nutrition-Value-1024x599.jpg",
    imageReferences: {
      cropImages: ["rice_field.jpg", "rice_plant.jpg", "rice_grain.jpg"],
      varietyImages: {
        IR36: "ir36.jpg",
        IR64: "ir64.jpg",
        "MTU 7029 (Swarna)": "mtu_7029_swarna.jpg",
        "BPT 5204 (Samba Mahsuri)": "bpt_5204_samba_mahsuri.jpg",
      },
    },
    bestVarieties: [
      {
        name: "IR36",
        duration: "110-115 days",
        features: "High yielding, disease resistant",
        recommendedRegions: ["Punjab", "Haryana"],
      },
      {
        name: "IR64",
        duration: "115-120 days",
        features: "Good grain quality, suitable for lowlands",
        recommendedRegions: ["West Bengal", "Uttar Pradesh"],
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
        recommendedRegions: ["Tamil Nadu", "Karnataka"],
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
        ureaFertilizer: "urea_fertilizer.jpg",
        fym: "fym.jpg",
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
        blast: "blast.jpg",
        bacterialLeafBlight: "bacterial_leaf_blight.jpg",
        sheathBlight: "sheath_blight.jpg",
        brownSpot: "brown_spot.jpg",
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
];

export default cropData;
