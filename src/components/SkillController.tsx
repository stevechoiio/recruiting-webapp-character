type Props = {
  skillName: string;
  currentSkillValue: number;
  handleIncrement(): void;
  handleDecrement(): void;
  attributeModifierValue: number;
  hasAvailableSkillPoint: boolean;
};

const SkillController = (props: Props) => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <div>{props.skillName}</div>
      <div>{props.currentSkillValue}</div>
      <div>
        attribute value:{" "}
        {props.currentSkillValue + props.attributeModifierValue}
      </div>
      <button
        onClick={props.handleIncrement}
        disabled={!props.hasAvailableSkillPoint}
      >
        +
      </button>
      <button
        onClick={props.handleDecrement}
        disabled={Boolean(props.currentSkillValue <= 0)}
      >
        -
      </button>
    </div>
  );
};

export default SkillController;
