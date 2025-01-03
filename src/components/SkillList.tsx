import { SKILL_LIST } from "../consts";
import { getAttributeModifierValue } from "../lib/getAttributeModifierValue";
import { Attributes } from "../types";
import SkillController from "./SkillController";

type Props = {
  skillState: Record<string, { attributeModifier: string; value: number }>;
  attributeState: Record<keyof Attributes, Number>;
  onIncrement(skillName: string): void;
  onDecrement(skillName: string): void;
  hasAvailableSkillPoint: boolean;
};

function SkillList(props: Props) {
  return (
    <div style={{ flex: "1" }}>
      {SKILL_LIST.map((skill) => {
        return (
          <SkillController
            hasAvailableSkillPoint={props.hasAvailableSkillPoint}
            key={skill.name}
            skillName={skill.name}
            currentSkillValue={props.skillState[skill.name].value}
            attributeModifierValue={getAttributeModifierValue(
              props.attributeState[skill.attributeModifier]
            )}
            handleIncrement={() => props.onIncrement(skill.name)}
            handleDecrement={() => props.onDecrement(skill.name)}
          />
        );
      })}
    </div>
  );
}

export default SkillList;
