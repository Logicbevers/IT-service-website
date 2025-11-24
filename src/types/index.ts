export interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

export interface Slug {
    current: string;
    _type?: 'slug';
}

export interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface Service {
    _id: string;
    title: string;
    slug: Slug;
    shortDescription?: string;
    description?: string;
    icon: string;
    features?: string[];
    benefits?: string[];
    mainImage?: string; // URL string from query
}

export interface Solution {
    _id: string;
    title: string;
    slug: Slug;
    shortDescription?: string;
    description?: string;
    icon: string;
    features?: string[];
    benefits?: string[];
    mainImage?: string;
}

export interface CaseStudy {
    _id: string;
    title: string;
    slug: Slug;
    client: string;
    summary: string;
    mainImage: string; // URL string from query
    tags: string[];
    challenge?: string;
    solution?: string;
    results?: string[];
    gallery?: any;
}

export interface BlogPost {
    _id: string;
    title: string;
    slug: Slug;
    publishedAt: string;
    excerpt: string;
    mainImage: string; // URL string from query
    categories: string[];
    author?: {
        name: string;
        image: string; // URL string from query
        role?: string;
    };
    body?: any;
}

export interface Job {
    _id: string;
    title: string;
    slug: Slug;
    department: string;
    location: string;
    type: string;
    description?: string;
    requirements?: string[];
    responsibilities?: string[];
}

export interface TeamMember {
    _id: string;
    name: string;
    role: string;
    image: string; // URL string from query
    linkedin?: string;
    bio?: string;
}

export interface Testimonial {
    _id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    content?: string;
    image: string; // URL string from query
}
