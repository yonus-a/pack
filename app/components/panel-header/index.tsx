import DialogContainer from "../dialog-container";
import DialogLayer from "../dialog-layer";
import DialogCta from "../dialog-cta";
import PanelMenu from "../panel-menu";
import Dialog from "../dialog";
import Icon from "../icon";
import "./styles.scss";
import Container from "../container";

export default function PanelHeader() {
  return (
    <header className="panel-header">
      <Container>
        <Dialog ariaLabel="mobile navigation">
          <DialogCta className="icon-wrapper">
            <Icon name="menu" />
          </DialogCta>
          <DialogLayer>
            <DialogContainer>
              <PanelMenu />
            </DialogContainer>
          </DialogLayer>
        </Dialog>
      </Container>
    </header>
  );
}
