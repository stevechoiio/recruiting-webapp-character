import { useState } from "react";
import { attributeModifierBySkillName } from "../consts";

const useSkills = () => {
  const [skillState, setSkillState] = useState<
    Record<string, { attributeModifier: string; value: number }>
  >(attributeModifierBySkillName);

  const onSkillIncrement = (skillToIncrement: string) => {
    setSkillState((prevState) => {
      return {
        ...prevState,
        [skillToIncrement]: {
          ...prevState[skillToIncrement],
          value: prevState[skillToIncrement].value + 1,
        },
      };
    });
  };

  const onSkillDecrement = (skillToDecrement: string) => {
    setSkillState((prevState) => {
      return {
        ...prevState,
        [skillToDecrement]: {
          ...prevState[skillToDecrement],
          value: prevState[skillToDecrement].value - 1,
        },
      };
    });
  };

  return {
    skillState,
    onSkillIncrement,
    onSkillDecrement,
  };
};

export default useSkills;
