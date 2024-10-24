import ButtonSection from './hero-section/ButtonSection';
import { Feature } from './hero-section/Feature';

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">Automate as fast as you can type </h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Whether you need to automate a simple task or build an entire automated system, you can do it all on Zapier. It helps you turn ideas into workflows and bots that work for you.</p>
            
            <ButtonSection/>

          </div>
          <div className="flex justify-center pt-4">
            <Feature title={"Free Forever"} subtitle={"for core features"} />
            <Feature title={"More apps"} subtitle={"than any other platforms"} />
            <Feature title={"Innovative Tools"} subtitle={"for enhanced productivity"} />
          </div>

        </div>
      </div>
    </section>
  )
}
