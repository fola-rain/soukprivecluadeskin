import { Cursor } from "./Cursor";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { CartDrawer } from "./CartDrawer";
import { BodyTheme } from "./BodyTheme";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BodyTheme />
      <Cursor />
      <div className="grain-overlay" aria-hidden />
      <Nav />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
      <CartDrawer />
    </>
  );
}
