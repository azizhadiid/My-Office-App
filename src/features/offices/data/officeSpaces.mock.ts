import { OfficeSpace } from "../types/officeSpace.types";

export const officeSpaces: OfficeSpace[] = [
    {
        id: 1,
        title: 'Angga Park Central Master Silicon Valley Star Class',
        slug: 'angga-park-central-master-silicon-valley-star-class',
        price: 18560000,
        duration: '20 days',
        location: 'Jakarta Pusat',
        rating: 4.5,
        address: 'Dekat gedung BWA HQ di Jakarta no 102939',
        image: '/assets/images/thumbnails/thumbnails-1.png',
        images: [
            '/assets/images/thumbnails/thumbnail-details-2.png',
            '/assets/images/thumbnails/thumbnail-details-3.png'
        ],
        tags: ['Popular'],
        about: 'Whether you need quiet private space away from distractions or collaborate in person...',
        features: ['Global Event', 'Privacy', 'Free Move', 'Sustainability', 'Extra Snacks', 'Compact'],
        isFullyBooked: false,
        salesContacts: [
            {
                name: "Masayoshi",
                role: "Sales Manager",
                photo: "/assets/images/photos/photo-1.png"
            },
            {
                name: "Fuji Ovina",
                role: "Sales Manager",
                photo: "/assets/images/photos/photo-2.png"
            }
        ],
    },
    {
        id: 2,
        title: 'Kantor Sazs',
        slug: 'kantor-sazs',
        price: 18560000,
        duration: '15 days',
        location: 'Bandung',
        rating: 4.5,
        address: 'Dekat gedung BWA HQ di Bandung no 102939',
        image: '/assets/images/thumbnails/thumbnails-2.png',
        images: [
            '/assets/images/thumbnails/thumbnail-details-2.png',
            '/assets/images/thumbnails/thumbnail-details-3.png'
        ],
        tags: ['Elegant'],
        about: 'Whether you need quiet private space away from distractions or collaborate in person...',
        features: ['Global Event', 'Privacy', 'Free Move', 'Sustainability'],
        isFullyBooked: false,
        salesContacts: [
            {
                name: "Masayoshi",
                role: "Sales Manager",
                photo: "/assets/images/photos/photo-1.png"
            },
            {
                name: "Fuji Ovina",
                role: "Sales Manager",
                photo: "/assets/images/photos/photo-2.png"
            }
        ],
    },
    {
        id: 3,
        title: 'Cendana Hills Executive Lounge',
        slug: 'cendana-hills-executive-lounge',
        price: 21250000,
        duration: '10 days',
        location: 'Surabaya',
        rating: 4.8,
        address: 'Jl. Cendana Raya no. 45, Surabaya',
        image: '/assets/images/thumbnails/thumbnails-3.png',
        images: [
            '/assets/images/thumbnails/thumbnail-details-1.png',
            '/assets/images/thumbnails/thumbnail-details-4.png'
        ],
        tags: ['Elegant', 'New'],
        about: 'A space designed for top-tier professionals seeking quiet, style, and collaboration without compromise...',
        features: ['Smart Lighting', 'Private Booths', 'Networking Events', 'Coffee Bar'],
        isFullyBooked: false,
        salesContacts: [
            {
                name: "Nadia Fairuz",
                role: "Sales Consultant",
                photo: "/assets/images/photos/photo-3.png"
            },
            {
                name: "Dimas Prakoso",
                role: "Lead Sales Executive",
                photo: "/assets/images/photos/photo-4.png"
            }
        ],
    },
    {
        id: 4,
        title: 'Zona Kreasi Hub Makassar',
        slug: 'zona-kreasi-hub-makassar',
        price: 17600000,
        duration: '12 days',
        location: 'Makassar',
        rating: 4.3,
        address: 'Kompleks Industri Kreatif Makassar, Blok C2',
        image: '/assets/images/thumbnails/thumbnails-4.png',
        images: [
            '/assets/images/thumbnails/thumbnail-details-2.png',
            '/assets/images/thumbnails/thumbnail-details-5.png'
        ],
        tags: ['Popular'],
        about: 'Vibrant space curated for creatives and startups needing energy, inspiration, and flexibility...',
        features: ['Colorful Design', '24/7 Access', 'Workshops', 'VR Zone', 'Mini Pantry'],
        isFullyBooked: false,
        salesContacts: [
            {
                name: "Eliza Muchtar",
                role: "Client Advisor",
                photo: "/assets/images/photos/photo-5.png"
            }
        ],
    },
    {
        id: 5,
        title: 'Menara Digital Smart Space',
        slug: 'menara-digital-smart-space',
        price: 19800000,
        duration: '18 days',
        location: 'Jakarta Selatan',
        rating: 4.6,
        address: 'Menara Digital Lt. 12, SCBD Lot 9, Jakarta Selatan',
        image: '/assets/images/thumbnails/thumbnails-5.png',
        images: [
            '/assets/images/thumbnails/thumbnail-details-3.png',
            '/assets/images/thumbnails/thumbnail-details-6.png'
        ],
        tags: ['High-Tech'],
        about: 'Where cutting-edge technology meets modern workspace design—ideal for tech-driven teams...',
        features: ['Automated Desks', 'Face Recognition Entry', 'Quiet Pods', 'Cloud Printing'],
        isFullyBooked: true,
        salesContacts: [
            {
                name: "Rio Santoso",
                role: "Senior Sales Manager",
                photo: "/assets/images/photos/photo-6.png"
            }
        ],
    }
];
