import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteShell } from "@/components/site/SiteShell";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center" style={{ background: "var(--ink)", padding: "0 24px" }}>
      <div style={{ textAlign: "center", maxWidth: 460 }}>
        <div className="utility-mono" style={{ marginBottom: 16 }}>404 · Off the path</div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(3rem, 8vw, 5.5rem)", fontWeight: 300, lineHeight: 1, marginBottom: 16, color: "var(--ivory)" }}>
          Lost in the <em style={{ color: "var(--muted)" }}>souk</em>.
        </h1>
        <p style={{ color: "rgba(245,240,232,0.55)", marginBottom: 28 }}>
          The page you were looking for has wandered off. Let us walk you back.
        </p>
        <Link to="/" className="btn-outline">Return home →</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "var(--ink)", color: "var(--ivory)" }}>
      <div style={{ textAlign: "center", maxWidth: 460 }}>
        <div className="utility-mono" style={{ marginBottom: 12 }}>An error occurred</div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 300 }}>Something didn't load.</h1>
        <p style={{ color: "rgba(245,240,232,0.55)", margin: "12px 0 24px" }}>{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="btn-outline">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Souk Privé — Where Quality Lives" },
      { name: "description", content: "A quiet luxury house for fragrances and Arabian oils — sourced globally, kept selectively, delivered with care." },
      { property: "og:title", content: "Souk Privé — Where Quality Lives" },
      { property: "og:description", content: "Quiet luxury fragrances and Arabian oils." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@200;300;400;500&family=DM+Mono:wght@300;400&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteShell>
        <Outlet />
      </SiteShell>
    </QueryClientProvider>
  );
}
