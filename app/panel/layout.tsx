import { handleRegistration } from "@/server-actions/permissions";
import PanelMenu from "../components/panel-menu";
import "@/styles/panel.scss";
import PcOnly from "../components/pc-only";
import MobileOnly from "../components/mobile-only";
import PanelHeader from "../components/panel-header";

interface Props {
  children: React.ReactNode;
}

export default async function PanelLayout({ children }: Props) {
  // check is register
  await handleRegistration();

  return (
    <main className="panel">
      {/* menu */}
      <PcOnly>
        <PanelMenu />
      </PcOnly>
      <MobileOnly>
        <PanelHeader />
      </MobileOnly>
      <div>{children}</div>
    </main>
  );
}
