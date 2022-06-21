import Link from "next/link";

const ResumeContent = () => {
  return (
    <>
      <section>
        <h2>Skills</h2>
      </section>

      <hr />

      <section>
        <h2>Experience</h2>
      </section>

      <hr />

      <section>
        <h2>Extra Curricular</h2>
        <nav>
          <li>
            <Link href="">
              {/* "https://www.instagram.com/shotonnokia800tough/"> */}
              Photography.
            </Link>
          </li>
          <li>Outdoors.</li>
          <li>Hackathons/CTFs (QUT Whitehats 2020 CTF 1st place).</li>
          <li>Physics Simulations.</li>
          <li>Game Development, Game Tools.</li>
          <li>Graphics Programming.</li>
        </nav>
      </section>

      <hr />

      <section>
        <h2>Contact Info</h2>
        <table className="shadow">
          <tr>
            <th>Method</th>
            <th></th>
          </tr>

          <tr>
            <td>email</td>
            <td>
              <Link href="">
                {/* "mailto:contact.justinac@gmail.com"> */}
                contact.justinac@gmail.com
              </Link>
            </td>
          </tr>

          <tr>
            <td>linkedin</td>
            <td>
              <Link href="">
                {/* "https://www.linkedin.com/in/justinac0/"> */}
                justinac0
              </Link>
            </td>
          </tr>

          <tr>
            <td>mobile phone</td>
            <td>request through email</td>
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
      <Link href="/">
        <p className="link">{"< "}back</p>
      </Link>
      <h1>Under Construction...</h1>
      <s>
        <h1>Resume</h1>
        <ResumeContent />
      </s>
    </>
  );
};

export default Resume;
