import { useState } from "react";
import { CLASS_LIST } from "../consts";
import { Attributes } from "../types";

type Props = {
  attributeState: Record<keyof Attributes, Number>;
};
function CharacterClassList(props: Props) {
  const [openedClass, setOpenedClass] = useState(undefined);
  const getIsAvailable = (characterClass: string): Boolean => {
    return Object.entries(CLASS_LIST[characterClass]).every(
      (attributeRequirement) => {
        return (
          attributeRequirement[1] <=
          props.attributeState[attributeRequirement[0]]
        );
      }
    );
  };

  return (
    <div>
      {Object.entries(CLASS_LIST).map((characterClass) => {
        return (
          <div key={characterClass[0]}>
            <button onClick={() => setOpenedClass(characterClass[0])}>
              {characterClass[0]}
            </button>
            {getIsAvailable(characterClass[0]) && " is available"}
          </div>
        );
      })}
      <div>{openedClass && JSON.stringify(CLASS_LIST[openedClass])}</div>
      <div>
        {openedClass && (
          <button onClick={() => setOpenedClass(undefined)}>close</button>
        )}
      </div>
    </div>
  );
}

export default CharacterClassList;
