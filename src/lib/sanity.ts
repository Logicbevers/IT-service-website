import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for fresh data
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// GROQ Queries
export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  slug,
  shortDescription,
  icon,
  "mainImage": mainImage.asset->url
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  features,
  benefits,
  "mainImage": mainImage.asset->url
}`;

export const caseStudiesQuery = `*[_type == "caseStudy"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  client,
  summary,
  "mainImage": mainImage.asset->url,
  tags
}`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  client,
  challenge,
  solution,
  results,
  "mainImage": mainImage.asset->url,
  gallery
}`;

export const jobsQuery = `*[_type == "job"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  department,
  location,
  type
}`;

export const jobBySlugQuery = `*[_type == "job" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  department,
  location,
  type,
  description,
  requirements,
  responsibilities
}`;

export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  author->{name, "image": image.asset->url},
  publishedAt,
  "mainImage": mainImage.asset->url,
  categories
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  body,
  author->{name, role, "image": image.asset->url},
  publishedAt,
  "mainImage": mainImage.asset->url,
  categories
}`;

export const teamQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  bio,
  "image": image.asset->url,
  linkedin
}`;

export const testimonialsQuery = `*[_type == "testimonial"] {
  _id,
  quote,
  author,
  role,
  company,
  "image": image.asset->url
}`;

export const globalSettingsQuery = `*[_type == "globalSettings"][0] {
  siteName,
  siteDescription,
  socialLinks,
  contactEmail,
  contactPhone,
  address
}`;

export const solutionsQuery = `*[_type == "solution"] | order(order asc) {
  _id,
  title,
  slug,
  shortDescription,
  icon,
  "mainImage": mainImage.asset->url
}`;

export const solutionBySlugQuery = `*[_type == "solution" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  shortDescription,
  description,
  icon,
  "mainImage": mainImage.asset->url,
  features,
  benefits
}`;
