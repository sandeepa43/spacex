import { Fragment, useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import { Modal } from "semantic-ui-react";
import { Pagination } from "semantic-ui-react";
import "./style.css";
import moment from "moment";
const Content = (props) => {
  const [filterCoreData, setFilterCoreData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setFilterCoreData(props.coreData);
  }, [props.coreData]);

  const scrollTo = () => {
    ref.current?.scrollIntoView({ inline: "center", behavior: "smooth" });
  };
  const submitHandler = (value) => {
    value.preventDefault();
    scrollTo();
  };
  const statusHandler = (value) => {
    const arrData = props.coreData.filter((data) => data.status == value);
    setFilterCoreData(arrData);
  };
  const originalLaunchHandler = (value) => {
    const arrData = props.coreData.filter(
      (data) => moment(data.original_launch).format("MM/DD/YYYY") == value
    );
    setFilterCoreData(arrData);
  };
  return (
    <>
      <div className="heading">
        <div className="head-container">
          <h2 style={{ fontSize: "60px", color: "#c3073f" }}>STARSHIP</h2>
          <p className="description">
            Starship will be the world’s most powerful launch vehicle ever
            developed, with the ability to carry in excess of 100 metric tonnes
            to Earth orbit. Drawing on an extensive history of launch vehicle
            and engine development programs, SpaceX has been rapidly iterating
            on the design of Starship with orbital-flight targeted for 2020.
            <br />
            <br />
            NASA announced it has modified its contract with SpaceX to further
            develop the Starship human landing system. Initially selected to
            develop a lunar lander capable of carrying astronauts between lunar
            orbit and the surface of the Moon as part of NASA’s Artemis III
            mission
          </p>
        </div>
      </div>

      <div ref={ref}>
        <form>
          <div className="search-heading">Search Form</div>
          <div>
            <input
              className="search_box"
              type="text"
              placeholder="Status"
              onChange={(e) => {
                statusHandler(e.target.value);
              }}
            />
            <input
              className="search_box"
              type="text"
              placeholder="Original Launch (MM/DD/YYYY)"
              onChange={(e) => {
                originalLaunchHandler(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="search_box"
              type="text"
              placeholder="Original Launch (MM/DD/YYYY)"
              onChange={(e) => {
                originalLaunchHandler(e.target.value);
              }}
            />
            <button
              className="submit-button"
              type="submit"
              onClick={(e) => {
                submitHandler(e);
              }}
            >
              Submit
            </button>
          </div>
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {filterCoreData &&
            filterCoreData.slice(index, index + 12).map((data, count) => {
              return (
                <>
                  <Card
                    key={data.original_launch_unix}
                    id="card"
                    index={index * 12 + count}
                    setShowModal={setShowModal}
                    serialNumber={data.core_serial}
                    status={data.status}
                    details={data.details}
                    originalLaunch={moment(data.original_launch).format(
                      "MMM Do YYYY"
                    )}
                  />
                </>
              );
            })}
          <Pagination
            className="pagination"
            defaultActivePage={1}
            onPageChange={(event, data) => setIndex(data.activePage - 1)}
            totalPages={filterCoreData.length / 12}
            pointing
          />
        </div>
      </div>
    </>
  );
};
export default Content;
