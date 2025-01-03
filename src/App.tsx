import "./App.css";
import AttributeList from "./components/AttributeList";
import CharacterClassList from "./components/CharacterClassList";
import SkillList from "./components/SkillList";
import useAttribute from "./lib/useAttribute";
import useSkills from "./lib/useSkills";

function App() {
  const { attributeState, onAttributeIncrement, onAttributeDecrement } =
    useAttribute();
  const { skillState, onSkillDecrement, onSkillIncrement } = useSkills();

  const getAvailbleSkillPoint = () => {
    const usedPoints = Object.values(skillState).reduce((acc, cur) => {
      acc += cur.value;
      return acc;
    }, 0);

    const maxSkillPoint = 10 + 4 * attributeState.Intelligence;

    return maxSkillPoint - usedPoints;
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="App-section">
        <CharacterClassList attributeState={attributeState} />
        <p>available point: {getAvailbleSkillPoint()}</p>
        <div style={{ display: "flex" }}>
          <AttributeList
            attributeState={attributeState}
            onIncrement={onAttributeIncrement}
            onDecrement={onAttributeDecrement}
          />
          <SkillList
            hasAvailableSkillPoint={Boolean(getAvailbleSkillPoint())}
            skillState={skillState}
            attributeState={attributeState}
            onIncrement={onSkillIncrement}
            onDecrement={onSkillDecrement}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
