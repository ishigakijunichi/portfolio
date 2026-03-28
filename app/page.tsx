import Image from "next/image";
import Link from "next/link";
import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";
import { projects } from "@/src/data/projects";

export default function Home() {
  return (
    <>
      <main className="flex-1 w-full">
        <div className="py-8 px-4 md:py-12">
          <div className="max-w-[1094px] mx-auto flex flex-col gap-8 md:gap-10">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block group"
              >
                <div className="relative w-full h-[520px] md:h-[650px] overflow-hidden bg-gray-100 transition-opacity duration-300 group-hover:opacity-75">
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
