import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";
import { Toaster } from "@/components/ui/sonner";
import logoAsset from "@/assets/magbagbe-logo.png.asset.json";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-bold text-[#C5A059]">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-[#F5F2ED]">Page not found</h2>
        <p className="mt-2 text-sm text-[#F5F2ED]/50">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center px-6 py-3 bg-[#C5A059] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#D4B06A] transition-colors">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-xl text-[#F5F2ED]">This page didn't load</h1>
        <p className="mt-2 text-sm text-[#F5F2ED]/50">Something went wrong on our end.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }}
            className="px-5 py-2 bg-[#C5A059] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#D4B06A] transition-colors">
            Try again
          </button>
          <a href="/" className="px-5 py-2 border border-[#C5A059]/40 text-[#F5F2ED]/80 text-xs tracking-[0.2em] uppercase hover:border-[#C5A059] hover:text-[#C5A059] transition-colors">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mágbagbé-ilẹ̀ — African Cultural Heritage & Storytelling Platform" },
      { name: "description", content: "Mágbagbé-ilẹ̀ preserves African heritage through storytelling, cultural documentation, and ancestral voices passed down through generations. Do not forget your land." },
      { name: "author", content: "Mágbagbé-ilẹ̀" },
      { property: "og:title", content: "Mágbagbé-ilẹ̀ — African Cultural Heritage & Storytelling Platform" },
      { property: "og:description", content: "Mágbagbé-ilẹ̀ preserves African heritage through storytelling, cultural documentation, and ancestral voices passed down through generations. Do not forget your land." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mágbagbé-ilẹ̀" },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logoAsset.url },
      { name: "twitter:title", content: "Mágbagbé-ilẹ̀ — African Cultural Heritage & Storytelling Platform" },
      { name: "twitter:description", content: "Mágbagbé-ilẹ̀ preserves African heritage through storytelling, cultural documentation, and ancestral voices passed down through generations. Do not forget your land." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/hDAvYmPDRXaDBPi8Sg6FtjQ6mPn1/social-images/social-1782823801080-WhatsApp_Image_2026-06-25_at_17.15.29.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/hDAvYmPDRXaDBPi8Sg6FtjQ6mPn1/social-images/social-1782823801080-WhatsApp_Image_2026-06-25_at_17.15.29.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logoAsset.url },
      { rel: "apple-touch-icon", href: logoAsset.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#0A0A0A] text-[#F5F2ED] antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteEffects />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" richColors />
    </QueryClientProvider>
  );
}
