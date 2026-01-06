export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  thumbnail: string;
  images: string[];
  featured?: boolean;
  // Property details
  beds?: number;
  baths?: number;
  sqm?: number;
  price?: number;
  projectId?: string;
}

export const categories = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Exterior",
  "Conceptual"
];

export const projects: Project[] = [
  {
    id: "modern-villa",
    title: "Modern Villa",
    category: "Residential",
    year: "2024",
    description: "A contemporary residential masterpiece featuring clean lines, expansive glass walls, and seamless indoor-outdoor living spaces. This project showcases sustainable design principles with solar integration and natural ventilation systems.",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80"
    ],
    featured: true,
    beds: 5,
    baths: 4,
    sqm: 450,
    price: 589,
    projectId: "FK-101"
  },
  {
    id: "urban-office-tower",
    title: "Urban Office Tower",
    category: "Commercial",
    year: "2023",
    description: "A striking 40-story commercial tower in the heart of the financial district. The design incorporates vertical gardens, sky lobbies, and energy-efficient facade systems that respond to solar orientation.",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=1200&q=80",
      "https://images.unsplash.com/photo-1577985043696-8bd54d9c4f8d?w=1200&q=80"
    ],
    featured: true,
    sqm: 12500,
    price: 2499,
    projectId: "FK-102"
  },
  {
    id: "minimalist-apartment",
    title: "Minimalist Apartment",
    category: "Interior",
    year: "2024",
    description: "A sophisticated urban apartment redesign focusing on minimalist aesthetics and functional luxury. Custom millwork, hidden storage solutions, and a neutral palette create a serene living environment.",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80"
    ],
    beds: 2,
    baths: 2,
    sqm: 120,
    price: 249,
    projectId: "FK-103"
  },
  {
    id: "coastal-retreat",
    title: "Coastal Retreat",
    category: "Residential",
    year: "2023",
    description: "A beachfront residence designed to capture panoramic ocean views while providing shelter from coastal elements. The cantilevered structure appears to float above the landscape.",
    thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80"
    ],
    beds: 4,
    baths: 3,
    sqm: 380,
    price: 459,
    projectId: "FK-104"
  },
  {
    id: "cultural-center",
    title: "Cultural Center",
    category: "Commercial",
    year: "2022",
    description: "A dynamic cultural hub featuring exhibition spaces, performance halls, and community gathering areas. The sculptural roof form creates dramatic interior volumes flooded with natural light.",
    thumbnail: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
    ],
    sqm: 8500,
    price: 1899,
    projectId: "FK-105"
  },
  {
    id: "garden-pavilion",
    title: "Garden Pavilion",
    category: "Exterior",
    year: "2024",
    description: "An elegant outdoor structure that serves as both sculpture and functional space. The interplay of solid and void creates ever-changing shadow patterns throughout the day.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80"
    ],
    beds: 3,
    baths: 2,
    sqm: 280,
    price: 349,
    projectId: "FK-106"
  },
  {
    id: "floating-concept",
    title: "Floating Concept",
    category: "Conceptual",
    year: "2024",
    description: "An experimental design exploring the possibilities of suspended architecture. This conceptual project challenges conventional notions of foundation and structure.",
    thumbnail: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80"
    ],
    beds: 6,
    baths: 5,
    sqm: 520,
    price: 699,
    projectId: "FK-107"
  },
  {
    id: "luxury-penthouse",
    title: "Luxury Penthouse",
    category: "Interior",
    year: "2023",
    description: "A duplex penthouse renovation featuring bespoke interiors, double-height living spaces, and a private rooftop terrace with infinity pool overlooking the city skyline.",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80"
    ],
    featured: true,
    beds: 4,
    baths: 4,
    sqm: 350,
    price: 549,
    projectId: "FK-108"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "All") return projects;
  return projects.filter(project => project.category === category);
};
