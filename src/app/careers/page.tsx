import { buildMetadata } from "@/lib/seo";
import CareersContent from "./CareersContent";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Explore career opportunities at BluKits Technologies. Join our software development team or work remotely.",
  keywords: ["careers", "software jobs", "developer jobs"],
  path: "/careers/",
});

export default function CareersPage() {
  return <CareersContent />;
}
