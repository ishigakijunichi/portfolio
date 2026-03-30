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
    <main className="flex flex-col flex-1 min-h-screen">
      <div className="flex-1 w-full">
        {/* Project Title */}
        <div className="w-full py-20 md:py-28 px-8 md:px-12">
          <div className="max-w-[960px] mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-normal tracking-tight">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Project Info */}
        <div className="w-full pb-12 md:pb-16 px-8 md:px-12">
          <div className="max-w-[640px] mx-auto">
            <div className="text-sm leading-relaxed text-gray-600 whitespace-pre-line">
              {project.info}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full px-8 md:px-12 pb-16 md:pb-24">
          <div className="max-w-[960px] mx-auto">
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-50">
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
        <div className="w-full px-8 md:px-12 py-12 md:py-16">
          <div className="max-w-[640px] mx-auto">
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              {project.description}
            </p>
          </div>
        </div>

        {/* Gallery */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="w-full px-8 md:px-12 py-12 md:py-16">
            <div className="max-w-[960px] mx-auto">
              {project.layout === "grid-3" ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  {project.galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full aspect-square overflow-hidden bg-gray-50"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {project.galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full aspect-square overflow-hidden bg-gray-50"
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
                <div className="flex flex-col gap-3 md:gap-4">
                  {project.galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full aspect-video overflow-hidden bg-gray-50"
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

        {/* Catalogue Section */}
        {project.catalogueImage && (
          <div className="w-full px-8 md:px-12 py-12 md:py-16">
            <div className="max-w-[960px] mx-auto">
              <h2 className="text-lg font-normal tracking-tight mb-10">
                Catalogue
              </h2>
              <div className="relative w-full aspect-video overflow-hidden bg-gray-50">
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

        {/* You may also like */}
        <div className="w-full px-8 md:px-12 py-16 md:py-20 mt-8 border-t border-gray-200">
          <div className="max-w-[960px] mx-auto">
            <h2 className="text-lg font-normal tracking-tight">
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
