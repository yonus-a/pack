import DialogContainer from "../../general/dialog-container";
import DialogLayer from "../../general/dialog-layer";
import DialogCta from "../../general/dialog-cta";
import Container from "../../general/container";
import Dialog from "../../general/dialog";
import PanelMenu from "../panel-menu";
import Icon from "../../general/icon";
import "./styles.scss";

interface Props {
  clientPermission: any;
}

export default function PanelHeader({ clientPermission }: Props) {
  return (
    <header className="panel-header">
      <Container>
        <Dialog ariaLabel="mobile navigation">
          <DialogCta className="icon-wrapper">
            <Icon name="menu" />
          </DialogCta>
          <DialogLayer>
            <DialogContainer>
              <PanelMenu clientPermission={clientPermission} />
            </DialogContainer>
          </DialogLayer>
        </Dialog>
      </Container>
    </header>
  );
}
