import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";
import { Link } from "react-router-dom";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading)
    return (
      <>
        <h1>
          The API used in this demo is deactivated if unused after 15 minutes &
          will need a little time to reactivate. Please wait while the API is
          reactivated or click <Link to="/">here</Link> to refresh the page.
        </h1>
        <Spinner />
      </>
    );

  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map!"}
      />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
