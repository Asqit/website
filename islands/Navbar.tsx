import { useEffect, useState } from 'preact/hooks';
import { Brand, Hamburger } from '../components/index.ts';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleIsVisible = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    self.addEventListener('scroll', (e) => {
      if (self.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <header
      className={`fixed w-screen top-0 left-0 z-50 ${
        isScrolled
          ? 'bg-black/50 backdrop-blur-xl'
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <nav
        className={`container mx-auto flex items-center justify-between flex-wrap p-4 py-8`}
      >
        <Brand />
        <div className='md:hidden relative z-50'>
          <Hamburger onClick={toggleIsVisible} />
        </div>
        <ul
          className={`hidden basis-full md:basis-auto md:flex items-center gap-x-2 uppercase`}
        >
          <li className='link'>
            <a href='#about'>About</a>
          </li>

          <li className='link'>
            <a href='#projects'>Projects</a>
          </li>

          <li className='link'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <div
          className={`${
            isMenuOpen ? 'top-0 h-screen' : '-top-[1000%] max-h-0'
          } fixed left-0 w-full z-40 bg-black p-4 transition-all md:hidden`}
        >
          <div className='flex justify-between p-4'>
            <Brand />
          </div>
          <ul
            className={
              'text-xl uppercase mt-4 flex flex-col gap-4 items-center justify-center'
            }
          >
            <li className='link'>
              <a href='#about'>About</a>
            </li>

            <li className='link'>
              <a href='#projects'>Projects</a>
            </li>

            <li className='link'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
