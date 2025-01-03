import { useState } from "react";
import { Attributes } from "../types";
const DEFAULT_ATTRIBUTE_VALUE = 0;

const useAttribute = () => {
  const [attributeState, setAttributeState] = useState<
    Record<keyof Attributes, number>
  >({
    Strength: DEFAULT_ATTRIBUTE_VALUE,
    Dexterity: DEFAULT_ATTRIBUTE_VALUE,
    Constitution: DEFAULT_ATTRIBUTE_VALUE,
    Intelligence: DEFAULT_ATTRIBUTE_VALUE,
    Wisdom: DEFAULT_ATTRIBUTE_VALUE,
    Charisma: DEFAULT_ATTRIBUTE_VALUE,
  });

  const onAttributeIncrement = (attributeKey: keyof Attributes) => {
    setAttributeState({
      ...attributeState,
      [attributeKey]: attributeState[attributeKey] + 1,
    });
  };

  const onAttributeDecrement = (attributeKey: keyof Attributes) => {
    setAttributeState({
      ...attributeState,
      [attributeKey]: attributeState[attributeKey] - 1,
    });
  };
  return {
    attributeState,
    onAttributeIncrement,
    onAttributeDecrement,
  };
};

export default useAttribute;
