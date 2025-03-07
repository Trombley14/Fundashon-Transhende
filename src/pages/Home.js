import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <h1 className="main-header">Welcome to Fundashon Transhende</h1>
        <br />
        <div className="info">
          <section className="first-section">
            <h2>Together We Make a Difference</h2>
            <br />
            <p>
              Every day, our team at Fundashon Transhende plays a vital role in
              ensuring that those who need our help can{" "}
              <span>reach their destinations safely and with dignity</span>.
              Whether it's transporting elderly individuals, people with
              disabilities, or those in need of medical care,{" "}
              <span>
                our work goes beyond driving - it's about caring, supporting,
                and improving lives.
              </span>
            </p>
          </section>
          <br />
          <section className="second-section">
            <h3>Commited to Service Since 2002</h3>
            <br />
            <p>
              Founded in <span>2002, Fundashon Transhende</span> has always been
              dedicated to providing{" "}
              <span>
                safe and reliable transportation for people who need it most
              </span>
              . From assisting patients leaving the hospital to ensuring access
              to medical and social services, our work has always been about{" "}
              <span>empowering mobility and independence.</span>
            </p>
            <br />
            <p>
              Our journey has been shaped by{" "}
              <span>
                commitment, adaptation, and a deep sense of responsibility.
              </span>
            </p>
            <p>
              With a professional team and specialized vehicles, we continue to
              ensure{" "}
              <span>quality transport services that make a real impact.</span>
            </p>
          </section>
          <br />
          <section className="third-section">
            <h3>Our Vision: Mobility, Independence & Social Connection</h3>
            <br />
            <p>
              We strive to provide{" "}
              <span>
                elderly individuals, people with disabilities, and others who
                cannot move independently
              </span>{" "}
              with the opportunity to access{" "}
              <span>medical institutions and social activities</span>. By doing
              so, we promote their{" "}
              <span>mobility, independence, and social connectedness</span>.
            </p>
          </section>
          <br />
          <section className="fourth-section">
            <h3>Our Mission: More Than Just Transport</h3>
            <br />
            <p>
              We are not just a transportation service; we are a{" "}
              <span>lifeline</span> for those who rely on us. Our commitment is
              to provide <span>safe, professional, and compassionate</span>{" "}
              transport, helping our clients access medical facilities, therapy
              sessions, and social activities. Thanks to the dedication of our
              team, we give people the freedom to move and the opportunity to
              live a better life.
            </p>
          </section>
          <br />
          <section className="fifth-section">
            <h3>Your Role Matters</h3>
            <br />
            <p>
              Every driver, nurse, assistant, and staff member is part of
              something
              <span> greater than a job</span>—we are a family that{" "}
              <span>works together to serve others</span>. Each journey we
              complete is a step toward making a <span>real impact</span> in our
              community. Our professionalism, kindness, and teamwork ensure that
              every client feels valued and respected.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
