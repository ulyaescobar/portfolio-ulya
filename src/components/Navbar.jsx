import { FiMenu } from 'react-icons/fi';
import Switcher from '../utils/Switcher';
import { useState } from 'react';
import socialMedia from '../data/SocialMedia';
import profile from '../assets/images/profile.jpg';
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const options = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "about",
    },
    {
      id: 3,
      name: "skills",
    },
    {
      id: 4,
      name: "projects",
    },
    {
      id: 5,
      name: "contact",
    },
  ]

  return (
    <>
      <nav className="h-24 top-0 dark:bg-bgDark dark:text-white sticky z-50 bg-white">
        <div className="flex justify-between items-center border-b-2 h-full mx-4">
          <div className="uppercase tracking-widest text-lg font-medium cursor-none">
            <span className='bg-black text-white p-1 mx-1 dark:bg-white dark:text-black'>
              ul
            </span>
            ya
          </div>
          <Switcher />
          <ul className="hidden lg:flex gap-8 capitalize">
            {
              options.map((option) => (
                <li key={option.id} className='hover:text-red-600 cursor-pointer'>{option.name}</li>
              ))
            }
          </ul>
          <div className='bg-slate-400 h-10 w-10 rounded-full flex items-center justify-center dark:hover:bg-slate-500 hover:text-red-600 hover:bg-slate-300 cursor-pointer transition-all duration-300 ease-in-out text-xl lg:hidden' onClick={() => setOpen(!open)}>
            <FiMenu />
          </div>

          {/* mobile view */}
          <div
            className={`bg-slate-200 w-4/5 h-screen  absolute top-0 left-0 transition-transform duration-500 transform ${open ? 'translate-x-0' : '-translate-x-full'} dark:bg-slate-800 `}
          >
            <div className="relative flex flex-col gap-8 p-4 pr-10">
              <div className="inline-flex gap-4 items-center">
                <img src={profile} alt="profile" className='h-16 w-16 rounded-full ' />
                <span className='uppercase'>ulya pebriyana a.s.</span>
              </div>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consectetur vel tenetur vero laborum reprehenderit vitae autem repudiandae harum provident.
              </p>
              <ul className='flex flex-col gap-4'>
                {
                  options.map((option) => (
                    <li key={option.id} className='text-gray-600 tracking-wide cursor-pointer hover:text-red-600 duration-300 ease-in-out capitalize'>
                      {option.name}
                    </li>
                  ))
                }
              </ul>
              <div className='flex flex-col gap-4'>
                <div className="uppercase">find me in</div>
                <div className="flex gap-4 flex-wrap">
                  {
                    socialMedia.map((media) => (
                      <a key={media.id} href={media.link} target='_blank'>
                        <span className='bg-slate-300 text-gray-700 opacity-70 h-16 w-16 text-xl flex items-center justify-center hover:text-red-600 shadow-xl hover:-translate-y-1 hover:bg-opacity-90 transition-all duration-300 rounded-lg'>
                          {media.icon}
                        </span>
                      </a>
                    ))
                  }
                </div>
              </div>
              <span className='absolute top-9 right-3 text-2xl cursor-pointer hover:text-red-600' onClick={() => setOpen(false)}>
                <IoMdClose />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar