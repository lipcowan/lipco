// to contain my info with some photos
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import "../Main.css";

const Bio = ({ content, img, imgAltText, animatedDirection, flexDirection }) => {
  return (
    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <Spring
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateX(0)"
                : `translateX(${
                    animatedDirection === "right" ? "10px" : "-10px"
                  })`,
            }}
          >
            {(props) => (
              <div
                className={`Bio ${flexDirection}`}
                style={{ ...props }}
              >
                {img && (
                  <div className="row_image_container">
                    <img className="row_image" src={img} alt={imgAltText} />
                  </div>
                )}
                <div className="row_content">
                  {content.map((line, i) => (
                    <p key={i} className="row_text">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </Spring>
        )}
    </VisibilitySensor>
  );
}
export default Bio