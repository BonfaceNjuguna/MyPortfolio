const projects = [
  {
    id: 'nawirides',
    title: 'Nawiri Rides',
    status: 'Completed',
    projectUrl: 'https://nawirides.co.ke/',
    description: 'Engineered a full-stack ride-hailing and car rental platform for the Turkana, Kenya market. The project included a responsive marketing website and a native Android app for riders. The platform features real-time driver tracking, fleet management, and a scalable backend to manage bookings for both on-demand taxis and a specialized car hire service.',
    screenshots: [
      'img/portfolio/nawirides/nawirides.png',
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
    designTools: ['Figma']
  },
  {
    id: 'apuuzawadi',
    title: 'Apuu Zawadi',
    status: 'Completed',
    projectUrl: '#', // Replace with actual URL
    description: 'An e-commerce platform specializing in gift items. Users can browse products, add to cart, and checkout securely.',
    screenshots: [
      'img/portfolio/apuuzawadi/apuuzawadi.png',
    ],
    techStack: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
    designTools: []
  },
  {
    id: 'monster-slice-game',
    title: 'Monster Slice Game',
    status: 'Completed',
    description: 'A fun and interactive 2D mobile game where players slice monsters to score points. Developed as a personal project to explore game development.',
    screenshots: [
        'img/portfolio/monsterslice/monster-slice-game.png',
    ],
    techStack: ['Unity', 'C#'],
    designTools: []
  },
  {
    id: 'helena-dunkel',
    title: 'Helena Dunkel Website',
    status: 'Completed',
    projectUrl: 'https://helena-dunkel.de/',
    description: 'Developed a professional, responsive website for German running coach Helena Dunkel. The platform serves as her digital storefront, showcasing her training services and philosophy. Key features include a detailed service showcase, client testimonials to build credibility, and e-commerce functionality for purchasing gift vouchers, all wrapped in a clean, user-focused design that drives client acquisition.',
    screenshots: [
        'img/portfolio/helenadunkel/helena-dunkel.png',
    ],
    techStack: ['WordPress', 'PHP', 'MySQL', 'CSS3', 'JavaScript'],
    designTools: []
  },
  {
    id: 'susanne-dunkel',
    title: 'Susanne Dunkel Portfolio',
    status: 'Completed',
    projectUrl: 'https://susannedunkel.com/',
    description: 'This project involved creating a minimalist and visually-driven portfolio website for Susanne Dunkel, a creative director with over 15 years of experience in design and brand strategy. The website serves as a digital gallery, showcasing a curated selection of high-profile projects for clients like Occhio, Axor, and BMW. The focus was on a clean, image-forward design with intuitive navigation to effectively communicate a puristic and aesthetic-driven professional identity.',
    screenshots: [
        'img/portfolio/sussanedunkel/sussanedunkel.png',
    ],
    techStack: ['WordPress', 'PHP', 'CSS3', 'JavaScript'],
    designTools: []
  },
  {
    id: 'lodwar-fish-hub',
    title: 'Lodwar Fish Hub',
    status: 'In Progress',
    description: 'A comprehensive e-commerce mobile application for Lodwar Fish Hub, currently in development. Built with Flutter, the app will allow customers to browse and purchase a wide variety of fish, available raw, fried, or smoked, streamlining the ordering process for local customers.',
    screenshots: [
        'img/portfolio/lodwarfishhub/lodwar_fish_hub.jpeg',
    ],
    techStack: ['Flutter', 'Dart'],
    designTools: ['Figma']
  },
  {
    id: 'sarah-fitness-app',
    title: 'Sarah Fitness App',
    status: 'In Progress',
    description: 'An all-in-one fitness application, currently in development using Flutter. This app will provide users with a comprehensive suite of tools to achieve their fitness goals, including guided workout routines, custom meal and workout plan creation, and a direct chat feature to communicate with their coach. The goal is to create a seamless and motivating experience for users on their fitness journey.',
    screenshots: [
        'img/portfolio/sarahfitness/sarah_fitness_app.jpg',
    ],
    techStack: ['Flutter', 'Dart'],
    designTools: ['Figma']
  },
  {
    id: 'tourism-turkana',
    title: 'Tourism Turkana Website',
    status: 'Completed',
    projectUrl: 'https://tourism.turkana.go.ke/',
    description: 'This project is a comprehensive tourism and cultural portal for Turkana County, designed to promote the region as a premier travel destination. The platform serves as a central hub for tourists, featuring detailed guides to destinations, accommodations, and a showcase of the area\'s rich cultural heritage. Key functionalities include an e-commerce section for local products, a directory for hoteliers, and a news module for upcoming events.',
    screenshots: [
        'img/portfolio/tourismturkanacounty/tourism1.png',
        'img/portfolio/tourismturkanacounty/tourism2.png',
    ],
    techStack: ['WordPress', 'PHP', 'CSS3', 'JavaScript'],
    designTools: []
  },
  {
    id: 'cis-turkana',
    title: 'Climate Information System (CIS)',
    status: 'In Progress',
    projectUrl: 'https://cis.turkana.go.ke/',
    description: 'Currently in development, the Turkana County Climate Information System is a comprehensive platform designed to provide timely and accurate weather data to support decision-making in the region. Inspired by national meteorological systems, the final product will deliver a range of forecasting products, early warnings for extreme weather events, and specialized agrometeorological bulletins to support pastoralists, farmers, and water resource managers.',
    screenshots: [
        'img/portfolio/cisturkanacounty/cis1.png',
    ],
    techStack: ['React (TypeScript)', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    designTools: []
  },
  {
    id: 'turkhealth',
    title: 'TurkHealth',
    status: 'In Progress',
    projectUrl: '#',
    description: 'A mobile-first public health web application, currently in development, designed to serve the Turkana community. Built with a React (TypeScript) frontend and a Python backend, TurkHealth will offer critical, multilingual support in English, Swahili, and Turkana. Key features include an emergency reporting system that alerts nearby clinics, complete with image uploads for incidents like snakebites. The app will also feature an innovative AI-powered system for identifying venomous creatures from photos and a chatbot that provides first-aid and symptom-based recommendations using verified health information.',
    screenshots: [
        'img/portfolio/turkhealth/turkhealth1.png',
        'img/portfolio/turkhealth/turkhealth2.png',
        'img/portfolio/turkhealth/turkhealth3.png',
        'img/portfolio/turkhealth/turkhealth4.png',
        'img/portfolio/turkhealth/turkhealth5.png',
        'img/portfolio/turkhealth/turkhealth6.png',
    ],
    techStack: ['React (TypeScript)', 'Python', 'AI/ML'],
    designTools: ['Figma']
  },
  {
    id: 'loropio-kitchen',
    title: 'Loropio Kitchen',
    status: 'In Progress',
    projectUrl: '#',
    description: 'A comprehensive meal booking web application for Loropio Kitchen, currently in development. The platform is being built with a robust C# backend and a modern React (TypeScript) frontend. It will enable customers to easily book their meals and pay through various methods, including M-Pesa, cash, or loyalty points. The system also features a dedicated dashboard for kitchen staff to manage daily meal offerings—including breakfast, lunch, dinner, and specials—and to track all incoming orders.',
    screenshots: [
        'img/portfolio/loropiokitchen/loropiokitchen1.png',
        'img/portfolio/loropiokitchen/loropiokitchen2.png',
        'img/portfolio/loropiokitchen/loropiokitchen3.png',
        'img/portfolio/loropiokitchen/loropiokitchen4.png',
        'img/portfolio/loropiokitchen/loropiokitchen5.png',
        'img/portfolio/loropiokitchen/loropiokitchen6.png',
        'img/portfolio/loropiokitchen/loropiokitchen7.png',
        'img/portfolio/loropiokitchen/loropiokitchen8.png',
        'img/portfolio/loropiokitchen/loropiokitchen9.png',
        'img/portfolio/loropiokitchen/loropiokitchen10.png',
    ],
    techStack: ['React (TypeScript)', 'C#', '.NET', 'PostgreSQL', 'Docker'],
    designTools: ['Figma']
  }
];