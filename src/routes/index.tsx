import { createFileRoute } from "@tanstack/react-router";
import { ConvargExperience } from "@/components/convarg/workspace";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Convarg — Business, moving as one" },
      {
        name: "description",
        content:
          "A connected workspace for the people, processes and possibilities that move your business forward.",
      },
      { property: "og:title", content: "Convarg — Business, moving as one" },
      {
        property: "og:description",
        content:
          "One home for the people, processes and possibilities that keep your business growing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConvargExperience,
});
