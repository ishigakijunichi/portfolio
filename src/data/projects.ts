const BASE_URL = "https://workers.paper.design/file-assets/01KMRPHDM6BGQCMF1R8T689J29/";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  thumbnail: string;
  hero: string;
  info: string;
  description: string;
  galleryImages?: string[];
  catalogueImage?: string;
  layout?: "grid-3" | "single" | "grid-2-2" | "custom";
}

export const projects: Project[] = [
  {
    slug: "array-polar",
    title: "Array Polar",
    thumbnail: BASE_URL + "7HQ2KKWZ8MMCDBJ81F8R2XSAY2.jpg",
    hero: BASE_URL + "1REPZDP72S09ZJ0Z96ME2A2AJ7.jpg",
    info: `Array Polar | The Storage Table made of Recycled Hard Felt.
bud brand Award Winner. On sale here.
Instagram
Exhibition: Milan Design Week 2022, Via Tortona 5 / June 7-12, 2022
Design: Junichi Ishigaki
Production: Nagae-Siki Co., Ltd.
Photo: Sota Kumagai
Styling, Photo Direction, Catalogue Design: Iori Doi Design`,
    description: `ArrayPolar is a storage table made of recycled PET felt. Inspired by the freedom of the designer's children who move chairs and desks from place to place and turning them into playgrounds everywhere. ArrayPolar's light weight and soft surface can easily be arranged to suit any mood or occasion. It is also used as storage for roughly storing items scattered around the room before guests arrive. The flexiblility of its use captures the imagination of the user. The structure, with its distinctive vertical lines, changes its look from different angles. It has an openness like Japanese furniture that divides the inside and outside ambiguously, but also has a solid presence like a stone in Japanese gardens. The appearance, which can be perceived as both Japanese and European, accentuates the space. Only felt mixed with recycled plastic bottles is used. No adhesive is required. Delivered flat-packed makes lowers transportation costs and reduces environmental impact.`,
    galleryImages: [
      BASE_URL + "2910QYW1D45EX3343QYV6RSMY2.jpg",
      BASE_URL + "1YRF8EAGK7RHWND6X8FQD9YQ3H.jpg",
      BASE_URL + "5XRJ5TN0C81ZQ3BQ734BCJ11T6.jpg",
      BASE_URL + "2KE8AM8KYEE7GEPJKDBJ3WCADR.jpg",
      BASE_URL + "7CQNH97811TT3M9XCTXFC7JBGZ.jpg",
      BASE_URL + "70WNXEZ761AT5TH3C2JXJ0KQGK.jpg",
      BASE_URL + "77FBMY9PREDNW7YWM13G9PD1EG.jpg",
      BASE_URL + "4KMSYT15TAW7J4PFHNK1QY5YBW.jpg",
      BASE_URL + "4993QKDK8W0C5A20675S2N86Y2.jpg",
    ],
    catalogueImage: BASE_URL + "062YT8T0J343MHXBRCCPX3PY51.jpg",
    layout: "grid-3",
  },
  {
    slug: "corncob-stool",
    title: "Corncob Stool",
    thumbnail: BASE_URL + "7F2AEZ02YE14P9FPM570SKDMAM.jpg",
    hero: BASE_URL + "5MCMQ9YM61KBNYSZ962ZMFJMK3.png",
    info: `Corncob Stool | Cardboard Stool.
Instagram
Design: Junichi Ishigaki
Production: Nagae-Siki Co., Ltd.
Project: Aichi Design Vision`,
    description: `A light and strong assembled stool with a distinctive pattern created by the cross section of cardboard. In the activities of "AICHI DESIGN VISION" project which connects designers with manufacturing companies mainly in Aichi Prefecture, the company developed its first consumer product in cooperation with Nagae-Siki Co., Ltd.. Corrugated cardboard is a material with a low environmental impact with a 96% recycling rate. Cut parts are assembled without glue, and a strong assembly structure was invented (patent pending) that achieves a load capacity of over 800 kg. The products are delivered in flat-packs and are recycled again as resources after use.`,
    galleryImages: [
      BASE_URL + "0YED47VPHFYJCGCEYG4NHFEQ41.jpg",
      BASE_URL + "1Y7CC1VGKZFHGXCCWGYMD3E50S.png",
      BASE_URL + "74B61CZR6N9TDZSCFTWXWAVHJK.png",
      BASE_URL + "0M57ZDQM3NQ9BGSGFP2D48VCMF.png",
      BASE_URL + "0Z89EXGPXYZ4T5FENNA09VDCCC.png",
      BASE_URL + "58RMKAP94189KS1VCEYFPCKAGF.png",
    ],
    layout: "custom",
  },
  {
    slug: "waves",
    title: "WAVES",
    thumbnail: BASE_URL + "2KSSYYHNRJW4E9PDJ5T0ZZMAF4.jpg",
    hero: BASE_URL + "2KSSYYHNRJW4E9PDJ5T0ZZMAF4.jpg",
    info: `WAVES | Kinetic Installation
Exhibition: Spiral Independent Creators Festival 2017
Shortlist: Lexus Design Award
Design: Junichi Ishigaki, Ryo Suzuki, Koji Yamaura
Engineering and Coding: Junichi Ishigaki, Koji Yamaura`,
    description: `Look at waves around the country. An analogue seismograph draws the lines based on actual shaking data from all over the country. The drawn lines and sound of drawing make people feel a sense of shaking. By displaying several lines on a piece of paper, you may realize the things happen in somewhere far away from here.`,
    layout: "single",
  },
  {
    slug: "danna-dash",
    title: "Danna Dash Button",
    thumbnail: BASE_URL + "3PZNY56WH993ZHXS94KDD72C77.jpg",
    hero: BASE_URL + "3PZNY56WH993ZHXS94KDD72C77.jpg",
    info: `Danna Dash Button| Device for Busy Couples
Exhibition: Tokyo Maker Fair 2018
Grand prix: ROHM OPEN HACK CHALLENGE 2017
Design: Junichi Ishigaki
Engineering: Tsukuru Lab`,
    description: `The "Device for Busy Couples" won the Grand Prix at the ROHM OPEN HACK CHALLENGE 2017, a contest utilizing ROHM's sensors and microcomputers. When the wife presses a button on a motif of necessary groceries or daily necessities, the husband is notified via a husband-shaped relay device to a keychain device he carries with him. Notification is made when the keychain approaches the house, so there is no chance of forgetting to buy something. The housing containing the sensor and base is based on optical 3D printing, and the 8-color buttons are made with a Stratasys color 3D printer. The prototype was also made in a way that compresses the painting process.`,
    layout: "single",
  },
  {
    slug: "id-card-holder",
    title: "ID Card Holder",
    thumbnail: BASE_URL + "59FGZN53BGWCKE2N1QHBJMHYRY.png",
    hero: BASE_URL + "59FGZN53BGWCKE2N1QHBJMHYRY.png",
    info: `Client: Power Support Co.,Ltd.`,
    description: `Business cards and bills are used less and less these days, but are still needed on rare occasions. There is a space on the back of the ID card for a business card, and the outside is protected by a plastic case to prevent the corners of the card from being broken off. The inner and outer cases are each available in two colors, so you can enjoy them in one tone or two colors according to your preference.`,
    layout: "single",
  },
  {
    slug: "orbel",
    title: "orbel",
    thumbnail: BASE_URL + "3Q5KWSCPSG9QX1ZN51BSHQH5A2.jpg",
    hero: BASE_URL + "72TXY8J5PV20EWM7Z464F07605.jpg",
    info: `orbel | A gift specially for who is expecting a baby.
Instagram
Creative Direction, Design, Photo: Junichi Ishigaki
Illustrations: Iori Doi Design`,
    description: `A thoughtfully designed gift collection for expectant parents, combining beautiful design with practical functionality.`,
    galleryImages: [
      BASE_URL + "5TNZY5KHQBZ3JP55Y4G7QD707D.jpg",
    ],
    layout: "custom",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
