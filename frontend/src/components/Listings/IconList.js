import Radio from "./Radio";

export default function IconList({ icons, iconValue, setIconValue, idx }) {
  return (
    <div className="icon-section">
      {icons.map((icon, i) => (
        <Radio
          key={`${icon}`}
          i={`icon-${idx}-${i}`}
          iconValue={iconValue}
          icon={icon}
          setIconValue={setIconValue}
        />
      ))}
    </div>
  );
}
