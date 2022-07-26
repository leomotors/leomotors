export interface ICertificate {
  name: string;
  image: string;
  link: string;
}

export const certificates: ICertificate[] = [
  {
    name: "Jump Bootcamp | Technology and Innovative Entrepreneurship",
    image:
      "https://images.credly.com/size/340x340/images/577c7534-c18d-4bee-bbb7-8be23a229fc6/image.png",
    link: "https://www.credly.com/badges/179d5d39-7cae-4c46-9836-b1012bb0f9aa",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    image:
      "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
    link: "https://www.credly.com/badges/6000d87a-1061-4a6c-b3f3-73e5ebe19c5e",
  },
];
