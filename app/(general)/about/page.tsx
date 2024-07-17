import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Description",
  keywords: ["About Page", "Enrique"],
};

export default function AboutPage() {

  console.log('desde el server')

  return (
    <div className="text-8xl">
      page
      {2 * 5}
    </div>
  );
}
