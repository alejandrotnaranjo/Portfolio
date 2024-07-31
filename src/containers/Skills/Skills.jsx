import "./Skills.css";

function Skills() {
  return (
    <div className="SkillsSectionContainer">
      <p id="skillsSectionTitle">skills and knowledge</p>
      <SkillItem
        text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
		minus blanditiis at accusamus velit esse porro dicta cumque, quis
		possimus, vero, architecto distinctio nulla sunt labore sapiente a
		dolores illum?"
      />
      <SkillItem
        text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
		minus blanditiis at accusamus velit esse porro dicta cumque, quis
		possimus, vero, architecto distinctio nulla sunt labore sapiente a
		dolores illum?"
      />
    </div>
  );
}

function SkillItem({ text }) {
  return (
    <div className="SkillsItemContainer">
      <p className="SkillsItemText">{text}</p>
    </div>
  );
}

export default Skills;
