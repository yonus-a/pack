import Confirm from "../confirm";
import Icon from "../icon";
import "./styles.scss";

interface Props {
  onOk: any;
}

export default function DeleteWithConform({ onOk }: Props) {
  return (
    <Confirm onOk={onOk}>
      <Icon name="delete" />
    </Confirm>
  );
}
