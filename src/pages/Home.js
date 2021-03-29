import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      className="bg-secondary d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container text-white">
        <h2>ADAMS RAHINATU</h2>
        <h1 className="mb-5 text-warning">Know YourCountries </h1>
        <h2>
          This site allows you to have access to <br></br>all the countries
          around the Globe
        </h2>
        <Link to="/countries" className="btn btn-info">
          SEE MORE
        </Link>
      </div>
    </section>
  );
}

export default Home;
