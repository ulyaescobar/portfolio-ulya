import hero from '../assets/images/hero.png'
import Skills from '../data/Skills'
import socialMedia from '../data/SocialMedia'


const Hero = () => {
  return (
    <>
      <section className="px-4 pt-10 ">
        <div className="flex flex-col gap-8 border-b-2 pb-20 lg:flex-row lg:gap-0">
          <div className="flex flex-col gap-4 lg:flex-1 lg:gap-5 lg:justify-center">
            <h2 className='uppercase text-lg'>welcome to my world</h2>
            <h1 className='capitalize text-4xl font-bold lg:text-6xl'>hi, i'm <span className='text-red-600'>ulya pebriyana</span></h1>
            <span className='text-2xl font-bold lg:text-3xl'>a Backend Developer</span>
            <p className='leading-6 tracking-wide pb-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in officia neque dolore ipsum explicabo dicta vero consequuntur, optio asperiores.
            </p>
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-0 justify-between">
              <div className="flex flex-col gap-4">
                <h2 className='uppercase'>find me in</h2>
                <div className="flex gap-4 flex-wrap">
                  {
                    socialMedia.map((media) => (
                      <a key={media.id} href={media.link} target='_blank'>
                        <span className='bg-slate-300 text-bgDark h-16 w-16 text-2xl flex items-center justify-center hover:text-red-600 shadow-xl hover:-translate-y-1 hover:bg-opacity-90 transition-all duration-300 rounded-lg'>
                          {media.icon}
                        </span>
                      </a>
                    ))
                  }
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className='uppercase'>best skills on </h2>
                <div className="flex gap-4 flex-wrap">
                  {
                    Skills.map((skill) => (
                      <button key={skill.id} className='group relative'>
                        <span className='bg-slate-300 text-bgDark h-16 w-16 text-2xl flex items-center justify-center hover:text-red-600 shadow-xl hover:-translate-y-1 hover:bg-opacity-90 transition-all duration-300 rounded-lg'>
                          {skill.icon}
                        </span>
                        <span className="absolute hidden group-hover:flex justify-center -left-2 -top-3 -translate-y-full w-20 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                          {skill.name}
                        </span>
                      </button>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center relative items-center lg:flex-1">
            <img src={hero} alt="hero" className='z-10 h-[450px] lg:h-[680px]' />
            <div className="h-[300px] w-[350px] lg:h-[500px] lg:w-[500px] bottom-0 absolute bg-gradient-to-r rounded-sm shadow-xl from-slate-300 to-slate-200 dark:from-gray-700 dark:to-gray-600 "></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero