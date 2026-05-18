// MachineryData.js
export const machineryCategories = [
  {
    id: "noodle-pasta-processing",
    name: "Noodle & Pasta Processing Lines",
    tagline: "High-yield extrusion and precision shaping technology.",
    items: [
      {
        slug: "automatic-noodle-extruder-machine",
        name: "Automatic Noodle Extruder Machine",
        img: "/assets/AutomaticNoodleExtruderMachine.jpg",
        desc: "Fully automated, PLC-controlled heavy extrusion line designed for continuous long-strand production with uniform dough hydration.",
        specs: ["Capacity: 250-300 kg/hr", "Power: 7.5 kW Heavy Duty Motor", "Material: Food-Grade SS 304", "Control System: Delta PLC Touchscreen"],
        isFeatured: true
      },
      {
        slug: "semi-automatic-noodle-extruder-machine",
        name: "Semi Automatic Noodle Extruder Machine",
        img: "/assets/AutomaticNoodleExtruderMachine.jpg",
        desc: "Cost-effective, high-torque extruder providing precise manual batch controls with highly consistent structural noodle outputs.",
        specs: ["Capacity: 100-150 kg/hr", "Power: 5 HP Motor", "Material: Partial SS 304 & MS Frame", "Die Customization: Available"],
        isFeatured: false
      },
      {
        slug: "semi-automatic-pasta-making-machine",
        name: "Semi Automatic Pasta Making Machine",
        img: "/assets/PastaMakingMachineManufacturers.jpg",
        desc: "Versatile industrial pasta extruder ideal for mid-scale businesses to produce fusilli, penne, and macaroni effortlessly.",
        specs: ["Capacity: 80-120 kg/hr", "Power: 4.5 kW System", "Dies Included: 4 Brass Dies", "Cooling System: Integrated Water Jackets"],
        isFeatured: false
      },
      {
        slug: "50-hz-automatic-pasta-making-machine",
        name: "50 Hz Automatic Pasta Making Machine",
        img: "/assets/50HzAutomaticPastaMakingMachine.jpg",
        desc: "Continuous, heavy-line processing unit dynamically tuned to standard 50 Hz grids for flawless automated commercial pasta shaping.",
        specs: ["Frequency: 50 Hz Standard", "Capacity: 200 kg/hr", "Automation: 100% Fully Automatic", "Cutting Unit: Pneumatic Variable Speed Control"],
        isFeatured: true
      },
      {
        slug: "stainless-steel-noodle-dough-mixer",
        name: "Stainless Steel Noodle Dough Mixer",
        img: "/assets/StainlessSteelNoodleDoughMixer.jpg",
        desc: "Industrial heavy-torque structural mixer engineered specifically to ensure perfect gluten development and hydration without heat generation.",
        specs: ["Batch Capacity: 50 kg / Batch", "Mixing Time: 8-12 Mins", "Drive: Heavy Oil-Bath Gearbox", "Safety: Limit-switch Interlocked Lid"],
        isFeatured: false
      },
      {
        slug: "stainless-steel-macaroni-die",
        name: "Stainless Steel Macaroni Die",
        img: "/assets/StainlessSteelMacaroniDie.jpg",
        desc: "CNC-machined precision-grade replacement dies engineered with premium internal flow paths to avoid micro-fractures in pasta structural walls.",
        specs: ["Material: Hardened SS 316 / Teflon Coated", "Precision: ±0.02mm CNC Cut", "Fitment: Universal Extruder Mounts", "Durability: Extended Wear-Life Rating"],
        isFeatured: false
      },
      {
        slug: "noodles-steamer-making-machine",
        name: "Noodles Steamer Making Machine",
        img: "/assets/noodledough.jpg",
        desc: "Tunnel-type commercial conveyor steaming system designed to parboil fresh starch strands uniformly prior to the drying cycle.",
        specs: ["Conveyor Width: 600 mm", "Heating Source: Direct Factory Steam Inlet", "Insulation: 50mm Glass Wool Packing", "Speed: Variable VFD Control"],
        isFeatured: false
      },
      {
        slug: "noodles-dryer",
        name: "Industrial Noodles Dryer",
        img: "/assets/IndustrialNoodlesDryer.jpg",
        desc: "Multi-layered dynamic batch cabinet dryer utilizing hot-air cross circulation to bring product moisture down safely under 12%.",
        specs: ["Tray Count: 48 / 96 Trays Option", "Temperature Range: 40°C - 120°C", "Circulation: Dual Axial Blowers", "Heat Source: Electric / Steam Radiator"],
        isFeatured: false
      },
      {
        slug: "noodles-steamer-100-kg",
        name: "Noodles Steamer (100 kg Bulk)",
        img: "/assets/noodledough.jpg",
        desc: "Institutional stationary heavy pressure steaming vault crafted entirely out of thick SS 304 panels for bulk preparation loads up to 100 kg.",
        specs: ["Capacity: 100 kg per Cycle", "Gasket Type: High-Temperature Food Grade Silicone", "Working Pressure: 0.5 - 1.5 Bar", "Shelves: 10 Reinforced Grid Trays"],
        isFeatured: true
      }
    ]
  },
  {
    id: "fruit-tomato-processing",
    name: "Fruit & Tomato Processing Plants",
    tagline: "Industrial washing, pulping, and thermal stabilization units.",
    items: [
      {
        slug: "tomato-processing-plants",
        name: "Tomato Processing Turnkey Plant",
        img: "/assets/TomatoProcessingTurnkeyPlant.jpg",
        desc: "Complete end-to-end industrial integrated setup configuring automatic sortation, crushing, enzymatic cold-break extraction, and packing.",
        specs: ["Output Scalability: 1 Ton to 5 Tons / Day", "Processes: Washing -> Crushing -> Pulping -> Pasteurized Filling", "CIP System: Integrated Auto Clean-In-Place", "Power Grid Required: 440V 3-Phase"],
        isFeatured: true
      },
      {
        slug: "steam-jacketed-kettle",
        name: "Industrial Steam Jacketed Kettle",
        img: "/assets/IndustrialSteamJacketedKettle.jpg",
        desc: "Hemispherical double-walled boiling pan offering seamless uniform indirect steam jacket insulation to eliminate product burning or scorching.",
        specs: ["Volume: 200L / 500L Variants", "Tilting System: Worm-Gear Manual Handwheel", "Pressure Limit: Up to 4 Bar Structural Rating", "Stirrer: Scraper Assembly with PTFE Blades"],
        isFeatured: true
      },
      {
        slug: "fruit-crusher",
        name: "Heavy Duty Fruit Crusher",
        img: "/assets/HeavyDutyFruitCrusher.jpg",
        desc: "High-velocity industrial hammer-mill design optimized to crush whole fruits, apples, and tomatoes into a pumpable structural slurry.",
        specs: ["Motor Power: 7.5 HP Heavy Induction", "Milling Screen: Easily Changeable Perforated Slits", "Feed Style: Direct Overhead Safety Hopper", "Throughput: 1500 kg/hr Processing"],
        isFeatured: false
      },
      {
        slug: "stainless-steel-jacketed-pressure-vessel",
        name: "Stainless Steel Jacketed Pressure Vessel",
        img: "/assets/StainlessSteelNoodleDoughMixer.jpg",
        desc: "Precision engineered structural containment chamber fabricated to manage complex sanitary thermal reactions under highly pressurized states.",
        specs: ["Design Code: ASME Section VIII Standards", "Shell Thickness: 6 mm Base SS 316L", "Fitting Connections: Tri-Clamp Sanitary Ports", "Testing: X-Ray Welded & Hydro-tested"],
        isFeatured: false
      },
      {
        slug: "fruit-pulper",
        name: "Commercial Fruit Pulper & Separator",
        img: "/assets/CommercialFruitPulper&Separator.jpg",
        desc: "Dual-stage operational refinement system providing clean visual extraction of dense pulps away from raw skins, seeds, and hard waste fiber.",
        specs: ["Rotor Speed: 960 RPM Optimized", "Sieve Aperture: 0.5mm to 2mm Screens Available", "Yield Efficiency: >94% Extract Retention", "Maintenance: Tool-less Chamber Disassembly"],
        isFeatured: false
      }
    ]
  },
  {
    id: "boilers-kitchen-equipment",
    name: "Steam Generation & Commercial Kitchens",
    tagline: "High-efficiency thermal units and robust industrial kitchen setups.",
    items: [
      {
        slug: "non-ibr-wood-fired-steam-boiler",
        name: "Non IBR Wood Fired Steam Boiler",
        img: "/assets/TomatoProcessingTurnkeyPlant.jpg",
        desc: "Cost-efficient, low-pressure solid biomass boiler engineered to generate high-quality dry steam without falling under complex IBR certifications.",
        specs: ["Evaporation Rate: 100 kg to 200 kg Steam/hr", "Fuel Source: Firewood Blocks, Briquettes, Coal", "Safety Devices: Dual Spring Loaded Safety Valves", "Registration: Zero Government Approval Required"],
        isFeatured: true
      },
      {
        slug: "kitchen-equipment",
        name: "Industrial Prep Kitchen Equipment",
        img: "assets/PastaMakingMachineManufacturers.jpg",
        desc: "Heavy-duty processing sorting utility benches, worktables, and preparation sinks developed out of 16-gauge rigid steel sheets.",
        specs: ["Build: 16-Gauge SS 304 Panels", "Leg Supports: Bullet-adjustable Floor Pads", "Load Capacity: Structurally Rated for 400 kg", "Under-shelf: Louvered or Solid Storage Configuration"],
        isFeatured: false
      },
      {
        slug: "hotel-kitchen-equipment",
        name: "Hotel Kitchen Heavy Modular Range",
        img: "/assets/CommercialFruitPulper&Separator.jpg",
        desc: "Premium array of modular high-pressure range burners, deep fryers, griddles, and holding warmers tailored for intense five-star kitchen lines.",
        specs: ["Burners: High-efficiency Brass Jet Burners", "Gas System: Certified LPG / Natural Gas Compatible", "Finishing: Dull Satin Fingerprint-proof Polish", "Safety: Thermocouple Flame Failure Devices Built-in"],
        isFeatured: false
      }
    ]
  }
];