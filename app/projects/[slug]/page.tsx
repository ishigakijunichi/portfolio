import Image from "next/image";
import { getProjectBySlug, getAllProjectSlugs } from "@/src/data/projects";
import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage(props: { params: Params }) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-col flex-1 min-h-screen bg-white">
      <div className="flex-1 w-full">
        {/* Project Title */}
        <div className="w-full py-16 md:py-20 px-6 md:px-10 border-b border-gray-200">
          <div className="max-w-[1094px] mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-[#012B55]">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Project Info */}
        <div className="w-full py-10 md:py-12 px-6 md:px-10">
          <div className="max-w-[720px] mx-auto">
            <div className="text-sm md:text-base text-[#012B55]/80 whitespace-pre-line leading-relaxed">
              {project.info}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full px-6 md:px-10 pb-12 md:pb-16">
          <div className="max-w-[1094px] mx-auto">
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
              <Image
                src={project.hero}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="w-full px-6 md:px-10 py-10 md:py-12">
          <div className="max-w-[720px] mx-auto">
            <p className="text-sm md:text-base text-[#012B55]/80 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Gallery */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="w-full px-6 md:px-10 py-10 md:py-12">
            <div className="max-w-[1094px] mx-auto">
              {project.layout === "grid-3" ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                  {project.galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full aspect-square overflow-hidden bg-gray-100"
                    >
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : project.layout === "grid-2-2" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  {project.galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full aspect-square overflow-hidden bg-gray-100"
                    >
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : project.layout === "custom" ? (
                <div className="flex flex-col gap-4 md:gap-5">
                  {project.galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full aspect-video overflow-hidden bg-gray-100"
                    >
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        )}

        {/* Catalogue Section for Array Polar */}
        {project.catalogueImage && (
          <div className="w-full px-6 md:px-10 py-10 md:py-12">
            <div className="max-w-[1094px] mx-auto">
              <h2 className="text-xl md:text-2xl font-light tracking-tight text-[#012B55] mb-8">
                Catalogue
              </h2>
              <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                <Image
                  src={project.catalogueImage}
                  alt="Catalogue"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* You may also like section */}
        <div className="w-full px-6 md:px-10 py-12 md:py-16 border-t border-gray-200">
          <div className="max-w-[1094px] mx-auto">
            <h2 className="text-xl md:text-2xl font-light tracking-tight text-[#012B55]">
              You may also like
            </h2>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
