import Image from "next/image";
import Link from "next/link";
import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";
import { projects } from "@/src/data/projects";

export default function Home() {
  return (
    <>
      <main className="flex-1 w-full">
        <div className="py-12 px-6 md:px-10 md:py-16">
          <div className="max-w-[1094px] mx-auto flex flex-col gap-12 md:gap-16">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block group"
              >
                <div className="relative w-full aspect-[3/4] md:aspect-[16/10] overflow-hidden bg-gray-100 transition-opacity duration-300 group-hover:opacity-75">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
