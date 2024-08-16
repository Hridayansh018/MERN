import video from "../assets/hero.mp4"
import logo from "../assets/logo.png"
import hero from "../assets/hero.jpeg"

function HeroSection() {
  return(
    <>
      <section className="relative flex items-center justify-center h-screen">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
          <video
            src={video}
            className="h-full w-full object-cover"
            muted
            autoPlay
            loop
            playsInline
            poster={hero}
          />
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden backgound-gradient-to-b from-transparent from-70% to-black">
          <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
            <img src={logo} alt="logo" className="h-20 w-20 object-cover p-4" />
            <p className="p-4 text-lg tracking-tighter text-white">Paris</p>
          </div>

        </div>
      </section>
    </>
  )
}   

export default HeroSection