import Image from "next/image"
import Link from "next/link"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import FadeIn from "@/components/fade-in"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ProjectGallery } from "@/components/project-gallery"
import { Footer } from "@/components/footer"
import { AccentHeading } from "@/components/accent-heading"
import { FeatureCard } from "@/components/feature-card"
import { AccentDivider } from "@/components/accent-divider"

export const metadata = {
  title: "Hello Space – Innovative Interior Design & Quality Furniture",
  description:
    "Discover Hello Space – your destination for expert interior design consultations, stylish furniture, and inspiring portfolios. Book your consultation today!",
}

export default function Home() {
  return (
    <div className="bg-[#f8f5f2]">
      <header className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Modern interior design by Hello Space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50">
          <div className="container flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
            <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
              Where Design Meets Functionality
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
              Welcome to Hello Space, where design meets functionality. Founded by passionate professionals (Emma &
              Brenda), we transform spaces with innovative interior design solutions and quality, handcrafted furniture.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" variant="accent" className="shadow-lg">
                <Link href="/consultation">Book a Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white bg-black/30 hover:bg-white/10"
              >
                <Link href="/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <FadeIn>
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <AccentHeading
                  as="h2"
                  accentPosition="bottom"
                  className="text-3xl font-medium tracking-tight sm:text-4xl mx-auto flex justify-center"
                >
                  Innovative Interior Design Solutions
                </AccentHeading>
                <p className="mt-4 text-lg text-[#6b6963]">
                  At Hello Space, we believe that every home deserves to tell its own story. Our expert interior design
                  consultations are tailored to meet your lifestyle and aesthetic needs. From modern minimalist looks to
                  vibrant, eclectic styles, our designs and furniture bring your vision to life. Explore our portfolio
                  to see how we&apos;ve turned everyday spaces into extraordinary experiences.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-[#e9e5e0] py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <div className="space-y-4">
                  <AccentHeading as="h2" className="text-3xl font-medium tracking-tight sm:text-4xl">
                    Meet the Team Behind Hello Space
                  </AccentHeading>
                  <p className="text-[#6b6963]">
                    Hello Space was created out of a shared passion for design and a commitment to excellence. As equal
                    partners, Emma and Brenda combine their expertise to deliver personalized interior design services
                    and unique furniture collections. With a focus on sustainability and modern aesthetics, we help you
                    create a space that reflects your personality and lifestyle.
                  </p>
                  <div className="pt-4">
                    <Button asChild variant="accent">
                      <Link href="/about">Learn More About Us</Link>
                    </Button>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-lg group">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src="/placeholder.svg?height=600&width=450"
                        alt="Emma, Co-founder of Hello Space"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="bg-white p-4">
                      <h3 className="font-serif text-lg font-medium text-[#3c3a36]">Emma</h3>
                      <p className="text-sm text-[#6b6963]">Co-founder & Design Director</p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg group">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src="/placeholder.svg?height=600&width=450"
                        alt="Brenda, Co-founder of Hello Space"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="bg-white p-4">
                      <h3 className="font-serif text-lg font-medium text-[#3c3a36]">Brenda</h3>
                      <p className="text-sm text-[#6b6963]">Co-founder & Furniture Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <AccentHeading
                  as="h2"
                  accentPosition="bottom"
                  className="text-3xl font-medium tracking-tight sm:text-4xl mx-auto flex justify-center"
                >
                  Our Services
                </AccentHeading>
                <p className="mt-4 text-[#6b6963]">
                  From initial consultation to final installation, we provide comprehensive interior design services
                  tailored to your unique needs.
                </p>
              </div>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-accent"
                    >
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                      <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                      <path d="M12 12h.01" />
                    </svg>
                  }
                  title="Interior Design Consultation"
                  description="Our professional interior design consultations provide creative solutions tailored to your space and style preferences."
                  link={{ href: "/services", label: "Learn More" }}
                />
                <FeatureCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-accent"
                    >
                      <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
                      <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
                      <path d="M4 12h16" />
                      <path d="M9 12v4" />
                      <path d="M15 12v4" />
                    </svg>
                  }
                  title="Quality Furniture"
                  description="Shop our curated collection of designer furniture that blends style, functionality, and sustainability."
                  link={{ href: "/shop", label: "Shop Now" }}
                />
                <FeatureCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-accent"
                    >
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                      <path d="M18 14h-8" />
                      <path d="M15 18h-5" />
                      <path d="M10 6h8v4h-8V6Z" />
                    </svg>
                  }
                  title="Project Management"
                  description="We handle every aspect of your design project, from concept to completion, ensuring a seamless experience."
                  link={{ href: "/services", label: "Learn More" }}
                />
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-[#3c3a36] py-16 text-white md:py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent opacity-10 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent opacity-10 rounded-tr-full" />
            <div className="container px-4 md:px-6 relative z-10">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                  Transform Your Home with Expert Interior Design
                </h2>
                <AccentDivider className="mx-auto my-6" />
                <p className="mt-4 text-white/80">
                  Our interior design consultation services are crafted to offer creative solutions for every space.
                  Whether you&apos;re renovating your home or seeking a fresh style update, our experienced team listens
                  to your needs and provides innovative design concepts that bring functionality and beauty together.
                  Book a consultation with us today and experience a transformation tailored just for you.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg" variant="accent" className="shadow-lg">
                    <Link href="/consultation">Book Your Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <AccentHeading
                  as="h2"
                  accentPosition="bottom"
                  className="text-3xl font-medium tracking-tight sm:text-4xl mx-auto flex justify-center"
                >
                  Explore Our Design Portfolio
                </AccentHeading>
                <p className="mt-4 text-[#6b6963]">
                  Our portfolio showcases a range of projects that exemplify our commitment to transforming spaces. From
                  cozy living rooms to expansive commercial areas, each project reflects a unique blend of creativity,
                  craftsmanship, and attention to detail. Let our past work inspire your next home transformation.
                </p>
              </div>
              <div className="mt-12">
                <ProjectGallery />
              </div>
              <div className="mt-8 text-center">
                <Button asChild variant="accent">
                  <Link href="/portfolio">View All Projects</Link>
                </Button>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-[#e9e5e0] py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <AccentHeading
                  as="h2"
                  accentPosition="bottom"
                  className="text-3xl font-medium tracking-tight sm:text-4xl mx-auto flex justify-center"
                >
                  Curated Furniture Collections That Define Style
                </AccentHeading>
                <p className="mt-4 text-[#6b6963]">
                  At Hello Space, we offer a diverse range of quality furniture that blends style with functionality.
                  Each piece is designed to complement modern interiors and create a harmonious balance in your home.
                  Shop our collection and find the perfect statement pieces that not only enhance your decor but also
                  stand the test of time.
                </p>
              </div>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Modern Lounge Chair",
                    price: "$895",
                    image: "/placeholder.svg?height=600&width=600",
                  },
                  {
                    name: "Sustainable Coffee Table",
                    price: "$645",
                    image: "/placeholder.svg?height=600&width=600",
                  },
                  {
                    name: "Designer Pendant Light",
                    price: "$325",
                    image: "/placeholder.svg?height=600&width=600",
                  },
                ].map((item, index) => (
                  <Link key={index} href="/shop" className="group">
                    <div className="overflow-hidden rounded-lg bg-white">
                      <div className="relative aspect-square">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-0 right-0">
                          <Badge variant="accent" className="m-3">
                            Featured
                          </Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif text-lg font-medium text-[#3c3a36]">{item.name}</h3>
                        <p className="mt-1 text-brand-accent font-medium">{item.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button asChild variant="accent">
                  <Link href="/shop">Shop All Furniture</Link>
                </Button>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24 relative">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#e9e5e0] to-transparent" />
            <div className="container px-4 md:px-6 relative">
              <div className="mx-auto max-w-3xl text-center">
                <AccentHeading
                  as="h2"
                  accentPosition="bottom"
                  className="text-3xl font-medium tracking-tight sm:text-4xl mx-auto flex justify-center"
                >
                  What Our Clients Say
                </AccentHeading>
                <p className="mt-4 text-[#6b6963]">
                  Hear from our satisfied clients about their experience working with Hello Space.
                </p>
              </div>
              <div className="mt-12">
                <TestimonialCarousel />
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-[#3c3a36] py-16 text-white md:py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent opacity-10 rounded-bl-full" />
            <div className="container px-4 md:px-6 relative z-10">
              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-4">
                  <AccentHeading as="h2" className="text-3xl font-medium tracking-tight sm:text-4xl text-white">
                    Let&apos;s Create Something Beautiful Together
                  </AccentHeading>
                  <p className="text-white/80">
                    Whether you have questions about our services, need advice on design trends, or are ready to book a
                    consultation, we&apos;re here to help. Reach out to us today and let our team of experts guide you
                    on your journey to a stunning home. At Hello Space, every space is a canvas waiting for your unique
                    touch.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-brand-accent" />
                      <span>123 Design Street, Creative City, 10001</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-brand-accent" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-brand-accent" />
                      <span>hello@hellospace.design</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-6 text-[#3c3a36] relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent" />
                  <h3 className="font-serif text-xl font-medium">Book Your Free Design Consultation Today!</h3>
                  <p className="mt-2 text-[#6b6963]">
                    Ready to start your home transformation? Fill out the form below and take the first step toward
                    creating a space that truly reflects you.
                  </p>
                  <form className="mt-4 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          className="w-full rounded-md border border-[#e2ded9] bg-white px-3 py-2 text-sm placeholder:text-[#a8a49e] focus:outline-none focus:ring-1 focus:ring-brand-accent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md border border-[#e2ded9] bg-white px-3 py-2 text-sm placeholder:text-[#a8a49e] focus:outline-none focus:ring-1 focus:ring-brand-accent"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full rounded-md border border-[#e2ded9] bg-white px-3 py-2 text-sm placeholder:text-[#a8a49e] focus:outline-none focus:ring-1 focus:ring-brand-accent"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-1 block text-sm font-medium">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        className="w-full rounded-md border border-[#e2ded9] bg-white px-3 py-2 text-sm placeholder:text-[#a8a49e] focus:outline-none focus:ring-1 focus:ring-brand-accent"
                      >
                        <option value="">Select a service</option>
                        <option value="consultation">Interior Design Consultation</option>
                        <option value="furniture">Furniture Shopping</option>
                        <option value="project">Full Project Management</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1 block text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="h-24 w-full rounded-md border border-[#e2ded9] bg-white px-3 py-2 text-sm placeholder:text-[#a8a49e] focus:outline-none focus:ring-1 focus:ring-brand-accent"
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-brand-accent" />
                      <span className="text-sm">Our team will contact you to schedule your consultation</span>
                    </div>
                    <Button variant="accent" className="w-full">
                      Schedule Consultation
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>

      <Footer />
    </div>
  )
}
