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
        slug: 'kantor&sazs',
        price: 18560000,
        duration: '20 days',
        location: 'Bandung',
        rating: 4.5,
        address: 'Dekat gedung BWA HQ di Bandung no 102939',
        image: '/assets/images/thumbnails/thumbnails-1.png',
        images: [
            '/assets/images/thumbnails/thumbnail-details-2.png',
            '/assets/images/thumbnails/thumbnail-details-3.png'
        ],
        tags: ['Popular'],
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
    }
];
