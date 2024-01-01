import {
  generateClientPermission,
  isRegister,
} from "@/server-actions/permissions";
import PanelHeader from "../components/panel-header";
import MobileOnly from "../components/mobile-only";
import PanelMenu from "../components/panel-menu";
import { notFound } from "next/navigation";
import PcOnly from "../components/pc-only";
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
        <PanelHeader />
      </MobileOnly>
      <div className="panel-body">{children}</div>
    </main>
  );
}
