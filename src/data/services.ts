import stockimg from "../media/stockimg.jpeg"

export interface Service {
  id: number
  image: string
  title: string
  description: string
  tags: string[]
}
// array of 3 services using the service interface
export const services: Service[] = [
  {
    id: 0,
    image: stockimg,
    title: "Personal & Business Websites",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    tags: ["HTML", "CSS", "JavaScript", "Svelte"],
  },
  {
    id: 1,
    image: stockimg,
    title: "Portfolios & Blogs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    tags: ["HTML", "CSS", "JavaScript", "Svelte"],
  },
  {
    id: 2,
    image: stockimg,
    title: "E-Commerce Websites",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    tags: ["HTML", "CSS", "JavaScript", "Svelte"],
  },
]
