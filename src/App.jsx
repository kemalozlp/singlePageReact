import './App.css'

function App() {
  
  return (
    <>
      <div className="container">
        < Header />
        < Hero />
        < ContentContainer />
        < AboutMe />
        < Booking />
        < Footer />
      </div>
    </>
  )
}

function Header () {
  return (
    <div className="header">
      <a href="/index.html"><img src="/image/mobilelogo.svg" alt="Logo" /></a>
      <a href="#" className="header-btn">Free Consultation</a>
    </div>
  )
}

function Hero () {
  return (
    <div className="hero">
      <h1>Design solutions made easy</h1>
      <p>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
    </div>
  )
}

function ContentContainer () {
  return (
    <div className="content-container">
      <div className="content"><img src="/image/graphicdeign-img.png"/>Graphic Design</div>
      <div className="content tek"><img src="/image/uiux-img.png"/>UI/UX</div>
      <div className="content tek"><img src="/image/apps-img.png"/>Apps</div>
      <div className="content"><img src="/image/Illustrations-img.png"/>Illustrations</div>
      <div className="content"><img src="/image/photography-img.png"/>Photography</div>
      <div className="content"><img src="/image/motiongraphic-img.png"/>Motion Graphics</div>
    </div>
  )
}

function AboutMe () {
  return (
    <div className="about-me">
      <img src="/image/aboutme-img.png" alt="Amy" />
      <div className="about-me-description">
        <h2>I’m Amy, and I’d love to work on your next project</h2>
        <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
        <a href="#" className="about-me-btn">Free Consultation</a>
      </div>
    </div>
  )
}

function Booking () {
  return (
    <div className="booking">
      <div className="booking-description">
        <h2>Book a call with me</h2>
        <p>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
      </div>
      <a href="#" className="booking-btn">Free Consultation</a>
    </div>
  )
}

function Footer () {
  return (
    <div className="footer">
      <a href="/index.html"><img src="/image/mobilelogo.svg" alt="Logo" /></a>
      <a href="#" className="header-btn">Free Consultation</a>
    </div>
  )
}

export default App
