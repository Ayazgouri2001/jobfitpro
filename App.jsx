import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // NEW
  const [activeTab, setActiveTab] = useState("Resume Analysis");

  const upload = async () => {
    if (!file) return alert("Please select a file");
    const fd = new FormData();
    fd.append("file", file);

    try {
      setLoading(true);
      const res = await axios.post("http://127.0.0.1:8000/analyze", fd);
      setData(res.data);
    } catch (e) {
      console.error(e);
      alert("Backend error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <div className="logo"></div>
          <div>
            <h2 className="title">
              JobFitPro
              AI Hiring Assistant
            </h2>
          </div>
        </div>

        <div className="side-card success">
          <b>API Key configured</b>
          <span>Ready to analyze resumes!</span>
        </div>

        <div className="side-section">
          <h4>Quick Stats</h4>
          <ul>
            <li>Resumes Analyzed <b>12</b></li>
            <li>Questions Asked <b>8</b></li>
            <li>Interviews Generated <b>15</b></li>
            <li>Improvements Made <b>6</b></li>
          </ul>
        </div>

        <div className="side-card tip">
          <b>💡 Pro Tip</b>
          <span>Upload PDF for best results</span>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main">
        <header className="header">
          <h1 className="title">🚀 JobFitPro AI Hiring Assistant</h1>
          <p>Your AI-Powered Career Optimization Partner</p>
        </header>

        {/* TABS */}
        <div className="tabs">
          {[
            "Resume Analysis",
            "Resume Q&A",
            "Interview Questions",
            "Resume Improvement",
            "Improved Resume",
          ].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* RESUME ANALYSIS */}
        {activeTab === "Resume Analysis" && (
          <section className="panel">
            <div className="panel-left">
              <h3>Upload & Analyze Resume</h3>

              <label>Select Target Role</label>
              <select>
                <option>AI Development</option>
                <option>Web Development</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>Full Stack Development</option>
                <option>Mobile App Development</option>
                <option>Software Development</option>
                <option>Game Development</option>
                <option>Data Science Development</option>
                <option>Machine Learning Development</option>
                <option>Embedded Systems Development</option>
                <option>IoT Development</option>
                <option>Cloud Computing Development</option>
                <option>DevOps Development</option>
                <option>Cybersecurity Development</option>
                <option>Blockchain Development</option>
                <option>AR/VR Development</option>
                <option>UI/UX Development</option>
              </select>

              <label>Upload Resume (PDF)</label>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />

              <button
                className="primary"
                onClick={upload}
                disabled={loading}
              >
                {loading ? "Analyzing..." : "Analyze Resume"}
              </button>

              {data && (
                <div className="status success">
                  ✔ Analysis Complete! Your resume has been analyzed
                </div>
              )}
            </div>

            {/* OVERVIEW CARDS */}
            <div className="panel-right">
              <div className="cards">
                <div className="card">
                  <h4>Overall Match Score</h4>
                  <h2>{data ? `${data.score}%` : "--"}</h2>
                  <p className="muted">Excellent Match 🎉</p>
                </div>

                <div className="card">
                  <h4>Skills Found</h4>
                  <h2>{data ? data.matched : "--"}</h2>
                  <p className="muted">
                    Out of {data ? data.total : "--"} required
                  </p>
                </div>

                <div className="card">
                  <h4>Skills Missing</h4>
                  <h2>{data ? data.missing_skills.length : "--"}</h2>
                  <p className="muted">Important skills to learn</p>
                </div>
              </div>

              {/* DETAILED */}
              {data && (
                <div className="analysis">
                  <div className="donut">
                    <div className="donut-inner">
                      <b>{data.score}%</b>
                      <span>Match Score</span>
                    </div>
                  </div>

                  <div className="bars">
                    {Object.entries(data.breakdown).map(([k, v]) => (
                      <div key={k} className="bar-row">
                        <div className="bar-label">
                          {k} <span>{v}%</span>
                        </div>
                        <div className="bar-track">
                          <div
                            className="bar-fill"
                            style={{ width: `${v}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SKILLS */}
              {data && (
                <>
                  <div className="skills">
                    <h4>Top Skills Found</h4>
                    {data.skills_found.map((s, i) => (
                      <span key={i} className="chip green">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="skills">
                    <h4>Skills to Improve</h4>
                    {data.missing_skills.map((s, i) => (
                      <span key={i} className="chip red">
                        {s}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        {/* RESUME Q&A */}
        {activeTab === "Resume Q&A" && (
          <section className="panel">
            <div className="card" style={{ width: "100%" }}>
              <h3>Resume Q&A</h3>

              <div className="skills">

                <span className="chip green">
                  Tell me about yourself
                </span>

                <span className="chip green">
                  Introduce yourself in one minute
                </span>

                <span className="chip green">
                  Why do you want this job?
                </span>

                <span className="chip green">
                  Why should we hire you?
                </span>

                <span className="chip green">
                  What are your strengths?
                </span>

                <span className="chip green">
                  What are your weaknesses?
                </span>

                <span className="chip green">
                  What motivates you to work hard?
                </span>

                <span className="chip green">
                  What are your career goals?
                </span>

                <span className="chip green">
                  Where do you see yourself in 5 years?
                </span>

                <span className="chip green">
                  Describe yourself in three words
                </span>

                <span className="chip green">
                  How do you handle pressure and deadlines?
                </span>

                <span className="chip green">
                  Describe a challenge you faced
                </span>

                <span className="chip green">
                  Explain your final year project
                </span>

                <span className="chip green">
                  What technologies do you know?
                </span>

                <span className="chip green">
                  Which programming language are you most comfortable with?
                </span>

                <span className="chip green">
                  Explain a difficult bug you fixed
                </span>

                <span className="chip green">
                  Tell us about a project you are proud of
                </span>

                <span className="chip green">
                  What is your role in team projects?
                </span>

                <span className="chip green">
                  Have you ever worked in a team?
                </span>

                <span className="chip green">
                  How do you manage your time?
                </span>

                <span className="chip green">
                  What are your hobbies and interests?
                </span>

                <span className="chip green">
                  What do you know about our company?
                </span>

                <span className="chip green">
                  Why do you want to join our company?
                </span>

                <span className="chip green">
                  What makes you different from other candidates?
                </span>

                <span className="chip green">
                  What is your biggest achievement?
                </span>

                <span className="chip green">
                  Are you comfortable learning new technologies?
                </span>

                <span className="chip green">
                  How do you improve your technical skills?
                </span>

                <span className="chip green">
                  Have you done any internships or certifications?
                </span>

                <span className="chip green">
                  What is your favorite subject in computer science?
                </span>

                <span className="chip green">
                  Explain OOPs concepts
                </span>

                <span className="chip green">
                  What is the difference between frontend and backend?
                </span>

                <span className="chip green">
                  What is API and how does it work?
                </span>

                <span className="chip green">
                  What is database normalization?
                </span>

                <span className="chip green">
                  Explain the difference between SQL and NoSQL
                </span>

                <span className="chip green">
                  What is cloud computing?
                </span>

                <span className="chip green">
                  What is Git and why is it used?
                </span>

                <span className="chip green">
                  What is the difference between HTTP and HTTPS?
                </span>

                <span className="chip green">
                  How do you handle failure?
                </span>

                <span className="chip green">
                  What are your expectations from this company?
                </span>

                <span className="chip green">
                  Do you have any questions for us?
                </span>

              </div>
            </div>
          </section>
        )}

        {/* INTERVIEW QUESTIONS */}
        {activeTab === "Interview Questions" && (
          <section className="panel">
            <div className="card" style={{ width: "100%" }}>
              <h3>Interview Questions</h3>

              <ul>
                <ul>
                  <li>Tell me about yourself</li>
                  <li>Introduce yourself in one minute</li>
                  <li>Why do you want this job?</li>
                  <li>Why should we hire you?</li>
                  <li>What are your strengths?</li>
                  <li>What are your weaknesses?</li>
                  <li>What motivates you to work hard?</li>
                  <li>What are your career goals?</li>
                  <li>Where do you see yourself in 5 years?</li>
                  <li>Describe yourself in three words</li>
                  <li>How do you handle pressure and deadlines?</li>
                  <li>Describe a challenge you faced and how you solved it</li>
                  <li>Explain your final year project</li>
                  <li>What technologies do you know?</li>
                  <li>Which programming language are you most comfortable with?</li>
                  <li>Explain a difficult bug you fixed</li>
                  <li>Tell us about a project you are proud of</li>
                  <li>What is your role in team projects?</li>
                  <li>Have you ever worked in a team?</li>
                  <li>How do you manage your time?</li>
                  <li>What are your hobbies and interests?</li>
                  <li>What do you know about our company?</li>
                  <li>Why do you want to join our company?</li>
                  <li>What makes you different from other candidates?</li>
                  <li>What is your biggest achievement?</li>
                  <li>Are you comfortable learning new technologies?</li>
                  <li>How do you improve your technical skills?</li>
                  <li>Have you done any internships or certifications?</li>
                  <li>What is your favorite subject in computer science?</li>
                  <li>Explain OOPs concepts</li>
                  <li>What is the difference between frontend and backend?</li>
                  <li>What is API and how does it work?</li>
                  <li>What is database normalization?</li>
                  <li>Explain the difference between SQL and NoSQL</li>
                  <li>What is cloud computing?</li>
                  <li>What is Git and why is it used?</li>
                  <li>What is the difference between HTTP and HTTPS?</li>
                  <li>How do you handle failure?</li>
                  <li>What are your expectations from this company?</li>
                  <li>Do you have any questions for us?</li>
                </ul>
              </ul>
            </div>
          </section>
        )}

        {/* RESUME IMPROVEMENT */}
        {activeTab === "Resume Improvement" && (
          <section className="panel">
            <div className="card" style={{ width: "100%" }}>
              <h3>Resume Improvement</h3>

              <ul>
                <li>Add more technical skills</li>
                <li>Add internship experience</li>
                <li>Improve project descriptions</li>
                <li>Add certifications section</li>
                <li>Use professional summary</li>
                <li>Add achievements and awards</li>
                <li>Include GitHub and LinkedIn links</li>
                <li>Add problem-solving and coding profiles</li>
                <li>Use ATS-friendly resume format</li>
                <li>Add measurable project results</li>
                <li>Improve grammar and formatting</li>
                <li>Add relevant keywords for jobs</li>
                <li>Highlight leadership and teamwork skills</li>
                <li>Add career objective section</li>
                <li>Include workshops and training programs</li>
                <li>Add soft skills section</li>
                <li>Use action words in experience</li>
                <li>Keep resume clean and professional</li>
              </ul>
            </div>
          </section>
        )}

        {/* IMPROVED RESUME */}
        {activeTab === "Improved Resume" && (
          <section className="panel">
            <div className="card" style={{ width: "100%" }}>
              <h3>Improved Resume</h3>

              <h3>AI Optimized Resume</h3>
              <p>The enhanced version of your resume will appear here with professional improvements and ATS optimization.</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}