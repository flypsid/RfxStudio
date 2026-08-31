import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    // Redirect to default locale
    throw redirect({ to: "/$locale", params: { locale: "fr" } });
  },
  component: () => null,
});
