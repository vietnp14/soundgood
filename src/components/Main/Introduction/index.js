import { useVolumeContext } from "../../contexts/useVolumeContext";

const buttons = [
  {
    title: 'Relax',
    icon: '',
  },
  {
    title: 'Focus',
    icon: '',
  },
  {
    title: 'Creative',
    icon: '',
  },
  {
    title: 'Productivity',
    icon: '',
  },
];

function Introduction() {
  const {
    setRelaxListening,
    setFocusListening,
    setCreativeListening,
    setProductivityListening,
  } = useVolumeContext();

  const onClickMap = {
    Relax: setRelaxListening,
    Focus: setFocusListening,
    Creative: setCreativeListening,
    Productivity: setProductivityListening,
  };

  return (
    <div className="introduction">
      <div className="introduction__title">
        Improve Your Focus And Boost Your Productivity
      </div>

      <div className="introduction__buttons">
        {
          buttons.map(({ title, icon }) => (
            <button
              key={title}
              className="introduction__buttons-item"
              onClick={() => onClickMap[title]()}
            >
              {title}
              {icon}
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default Introduction;
