import "./homepage.css"; // Import the HowItWorks component

export default function HomePage() {
  return (
    <>
      <div className="hero-section">
        <div className="title-section">
          <h1 className="title">Never miss a meeting to-do</h1>
          <p className="tagline">
            AI notetaking that saves hours automating post-meeting admin{" "}
          </p>
          <div className="buttonAndTrial">
            <button className="install-btn">Install on Chrome</button>
            <div className="trial">7 day pro trial</div>
          </div>
        </div>
        <video
          src="./public/demovideo.mp4"
          className="demo-video"
          controls
        ></video>
      </div>

      <div className="card-section">
        <div className="card">
          <div className="card-title">
            “It’s already saved me an hour and it’s only 1pm.”
          </div>
          <div className="footer-subtilte">Jenny, SaaS sales</div>
        </div>
        <div className="card">
          <div className="card-title">
            “It’s already saved me an hour and it’s only 1pm.”
          </div>
          <div className="footer-subtilte">Jenny, SaaS sales</div>
        </div>
        <div className="card">
          <div className="card-title">
            “It’s already saved me an hour and it’s only 1pm.”
          </div>
          <div className="footer-subtilte">Jenny, SaaS sales</div>
        </div>
        
      </div>
    </>
  );
}
