import {
  generateClientPermission,
  isRegister,
} from "@/server-actions/permissions";
import PanelHeader from "../components/panel/panel-header";
import MobileOnly from "../components/general/mobile-only";
import PanelMenu from "../components/panel/panel-menu";
import PcOnly from "../components/general/pc-only";
import { notFound } from "next/navigation";
import "@/styles/panel.scss";

interface Props {
  children: React.ReactNode;
}

export default async function PanelLayout({ children }: Props) {
  const register = isRegister();

  if (!register) {
    notFound();
  }

  const clientPermission = await generateClientPermission();

  return (
    <main className="panel">
      {/* menu */}
      <PcOnly>
        <PanelMenu clientPermission={clientPermission} />
      </PcOnly>
      <MobileOnly>
        <PanelHeader clientPermission={clientPermission} />
      </MobileOnly>
      <div className="panel-body">{children}</div>
    </main>
  );
}
