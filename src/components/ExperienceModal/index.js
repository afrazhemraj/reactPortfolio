import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const ExperienceModal = (props) => {
  return (
    <div className="modal">
      <div className={`modal-content ` + props.animation}>
        <div className="button">
          <FontAwesomeIcon
            className="icon"
            icon={faCircleXmark}
            color="#000000"
            onClick={() => {
              props.setShowModal(false);
            }}
          />
        </div>
        <div className="modal-header">
          <h1 className="modal-title">{props.experience.title}</h1>
          <h1 className="modal-subtitle">{props.experience.company}</h1>
          <h1 className="modal-subtitle">{props.experience.year}</h1>
        </div>
        <div className="modal-body">
          {props.experience.info.map((info, index) => {
            return (
              <div className="info" key={index}>
                • {info}
              </div>
            );
          })}
        </div>
        <div className="modal-footer">
          <div
            dangerouslySetInnerHTML={{
              __html: props.experience.footer,
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default ExperienceModal;
