import {
  generateClientPermission,
  isRegister,
} from "@/server-actions/permissions";
import CustomSessionProvider from "../components/general/custom-session-provider";
import PanelHeader from "../components/panel/panel-header";
import MobileOnly from "../components/general/mobile-only";
import PanelMenu from "../components/panel/panel-menu";
import PcOnly from "../components/general/pc-only";
import { getSession } from "next-auth/react";
import { notFound } from "next/navigation";
import "@/styles/panel.scss";

interface Props {
  children: React.ReactNode;
}

export default async function PanelLayout({ children }: Props) {
  const register = await isRegister();

  if (!register) {
    notFound();
  }

  const clientPermission = await generateClientPermission();
  const session = await getSession();

  return (
    <main className="panel">
      <CustomSessionProvider session={session}>
        {/* menu */}
        <PcOnly>
          <PanelMenu clientPermission={clientPermission} />
        </PcOnly>
        <MobileOnly>
          <PanelHeader clientPermission={clientPermission} />
        </MobileOnly>
        <div className="panel-body">{children}</div>
      </CustomSessionProvider>
    </main>
  );
}
