import classes from "./mainHeader.css";

const MainHeader = (props) => {
  return (
    <header className={"header"}>
      <div>
        <h3 className={"hover_underline_animation"}>Space X</h3>
      </div>

      <div className={"navigation"}>
        <ul>
          <li className={"nav_item"}>
            <a
              href="https://www.spacex.com/vehicles/falcon-9/"
              className={"hover_underline_animation"}
            >
              FALCON 9
            </a>
          </li>
          <li className={"nav_item"}>
            <a
              href="https://www.spacex.com/vehicles/falcon-heavy/"
              className={"hover_underline_animation"}
            >
              FALCON HEAVY
            </a>
          </li>
        </ul>
      </div>
      <div className={"nav_right"}>
        <li className={"nav_item"}>
          <a
            href="https://shop.spacex.com/"
            className={"hover_underline_animation"}
          >
            SHOP
          </a>
        </li>
      </div>
    </header>
  );
};

export default MainHeader;
