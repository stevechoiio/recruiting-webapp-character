import { ATTRIBUTE_LIST } from "../consts";
import { Attributes } from "../types";
import AttributeController from "./AttributeController";

type Props = {
  attributeState: Record<keyof Attributes, Number>;
  onIncrement(attribute: string): void;
  onDecrement(attribute: string): void;
};
function AttributeList(props: Props) {
  return (
    <div style={{ flex: "1" }}>
      {ATTRIBUTE_LIST.map((attribute) => {
        return (
          <AttributeController
            key={attribute}
            attribute={attribute}
            currentAttributeValue={props.attributeState[attribute]}
            handleIncrement={() => props.onIncrement(attribute)}
            handleDecrement={() => props.onDecrement(attribute)}
          />
        );
      })}
    </div>
  );
}

export default AttributeList;
