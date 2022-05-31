import { useState } from "react";
import "../../../Styles/phone.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import menuData from "../../../Data/menuData";
function Category(props) {

  return (
    <div className={`category ${props.isActive ? "active" : "inactive"}`}>
      <div
        className={`title container ${props.isActive ? "active" : "inactive"} flexX`}
      >
        <div className="arrow container centerX">
          <FontAwesomeIcon style={{ width: "11vw", height: "11vw" }} icon={props.isActive ? faAngleUp : faAngleDown} />
        </div>
        <div
          className={`centerText pointerHover text`}
        >{props.title}</div>
        <div className="arrow container centerX">
          <FontAwesomeIcon style={{ width: "11vw", height: "11vw" }} icon={props.isActive ? faAngleUp : faAngleDown} />
        </div>
      </div>
      {
        props.isActive && (
          <div className="cat-description">
            {props.description}
          </div>
        )
      }

      {props.isActive && props.items.map(
        (itemData, index) => (
          <div key={index} className={`item container`}>
            {/* 20 character upper limit on name - 8vw Font Size */}
            <div className="item name">{itemData.name}</div>
            {/* 140 character upper limit on desc - 7vw Font Size */}
            <div className="item description">{itemData.description}</div>
            <div className="item price">{itemData.price}</div>
          </div>
        )
      )}
    </div>
  );
}

function Phone() {
  const [categoriesToggle, setCategoriesToggle] = useState(menuData.categories.map(x => false));

  const toggleCategory = (e) => {
    const catIndex = e.currentTarget.id;
    const newToggles = [...categoriesToggle];
    newToggles[catIndex] = !categoriesToggle[catIndex]
    setCategoriesToggle(newToggles);
  }

  return (
    <div className="phone-display noTextSelect">
      <div className="banner" alt="..">
        <div className="centerX centerY" style={{ height: "inherit" }}>
          <div className="title">Cafe USA</div>
        </div>
      </div>
      <div className="header-description">
        We're proud to offer a 15% discount to Military and First Responders
      </div>

      <div>
        {
          menuData.categories.map(
            (catData, index) => (
              <div
                key={index}
                id={index}
                onClick={toggleCategory}
              >
                <Category
                  title={catData.name}
                  description={catData.description}
                  isActive={categoriesToggle[index]}
                  items={catData.items}
                />
              </div>
            )
          )
        }
      </div>
    </div>
  );
}

export default Phone;