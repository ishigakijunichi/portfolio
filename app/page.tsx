import Image from "next/image";
import Link from "next/link";
import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";
import { projects } from "@/src/data/projects";

export default function Home() {
  return (
    <>
      <main className="flex-1 w-full">
        <div className="py-16 px-8 md:px-12 md:py-24">
          <div className="max-w-[960px] mx-auto flex flex-col gap-20 md:gap-28">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block group"
              >
                <div className="relative w-full aspect-[3/4] md:aspect-[16/10] overflow-hidden bg-gray-50 transition-opacity duration-500 group-hover:opacity-80">
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
