import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Remedis Docs",
    },
    links: [
      {
        text: "Docs Rawat Inap",
        url: "/docsri",
        active: "nested-url",
      },
      {
        text: "Docs Rawat Jalan",
        url: "/docsrj",
        active: "nested-url",
      },
      {
        text: "Docs Rawat Darurat",
        url: "/docsigd",
        active: "nested-url",
      },
    ],
  };
}
