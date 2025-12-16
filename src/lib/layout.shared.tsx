import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Remedis Docs",
    },
    links: [
      {
        text: "Documentation",
        url: "/docs",
      },
    ],
  };
}
