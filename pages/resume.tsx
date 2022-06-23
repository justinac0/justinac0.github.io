import Link from "next/link";

const ResumeContent = () => {
  return (
    <>
      {/* <section>
        <h2>Experience</h2>
      </section>
      <br />
      <hr /> */}
      <section>
        <h2>Skills</h2>
        {/* <h3>Transferable</h3>
        <table className="shadow smancytable">
          <tr>
            <td></td>
            <td style={{ wordWrap: "normal", width: "100%" }}>
              <h4>Leadership</h4>
              <li></li>
              <hr />

              <h4>Communication</h4>
              <li></li>
              <hr />

              <h4>Problem Solving</h4>
              <li></li>
              <hr />

              <h4>Analytical</h4>
              <li></li>
              <hr />

              <h4>Adaptable</h4>
              <li></li>
              <hr />

              <h4>Team Worker</h4>
              <li></li>
            </td>
          </tr>
        </table>
        <br /> */}

        <h3>Technical</h3>
        <table className="shadow smancytable">
          <tr>
            <td></td>
            <td style={{ wordWrap: "normal", width: "100%" }}>
              <h4>Languages</h4> C/C++, C#, Bash, Java, JavaScript, Python, Web
              Fullstack.
              <hr />
              <h4>Application Software / System Software</h4>Linux, Linux CLI,
              Windows, Microsoft Suite, Postman, VirtualBox.
              <hr />
              <h4>Frameworks</h4>React, React-Native, Vue, Django, Flask,
              RestFUL APIs.
              <hr />
              <h4>Databases</h4>MySQL Workspace, MySQL, MongoDB, Microsoft SQL
              Server.
              <hr />
              <h4>Other</h4>
              CI/CD (github workflows), git, OpenGL, Vulkan, GLSL/HLSL.
            </td>
          </tr>
        </table>
      </section>
      <br />
      <hr />

      <section>
        <h2>Extra Curricular</h2>
        <nav>
          <li>Hackathons/CTFs (QUT Whitehats 2020 CTF 1st place).</li>
          <li>Game Development, Game Tools.</li>
          <li>Graphics Programming.</li>
          <li>Endurance Sports.</li>
          <li>Bass Player.</li>
        </nav>
      </section>

      <hr />

      <section>
        <h2>Contact Info</h2>
        <table className="shadow smancytable">
          <tr>
            <td></td>
            <td style={{ wordWrap: "normal", width: "100%" }}>
              <b style={{ textTransform: "uppercase" }}></b>
              <h4>Email</h4>
              <Link href="mailto:contact.justinac@gmail.com">
                contact.justinac@gmail.com
              </Link>
              <hr />
              <h4>LinkedIn</h4>
              <Link href="https://www.linkedin.com/in/justinac0/">
                justinac0
              </Link>
              <hr />
              <h4>Phone</h4>
              request through email
              <hr />
              <h4>Referees</h4>
              request through email
            </td>
          </tr>
        </table>
      </section>

      <br />
    </>
  );
};

const Resume = () => {
  return (
    <>
      <ResumeContent />
    </>
  );
};

export default Resume;
