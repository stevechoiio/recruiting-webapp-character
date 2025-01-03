import { getAttributeModifierValue } from "../lib/getAttributeModifierValue";

type Props = {
  attribute: string;
  currentAttributeValue: number;
  handleIncrement(): void;
  handleDecrement(): void;
};

const AttributeController = ({
  attribute,
  currentAttributeValue,
  handleDecrement,
  handleIncrement,
}: Props) => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <div>{attribute}</div>
      <div>{currentAttributeValue}</div>
      <div>{getAttributeModifierValue(currentAttributeValue)}</div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default AttributeController;
