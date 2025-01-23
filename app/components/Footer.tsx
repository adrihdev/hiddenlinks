import Image from 'next/image'
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      className="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"
    >
      <div
        className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"
      >
        <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">
          © {currentYear}{' '}
          <a href="https://adrih.vercel.app/" className="hover:underline">
            adrihdev
          </a>
          . Casi todos los derechos reservados
        </span>
        <ul className="flex items-center flex-wrap mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
          <li>
            <a href="https://adrih.vercel.app/#sobre-mi" className="hover:underline me-4 md:me-6">
              Sobre mí
            </a>
          </li>
          <li>
            <a id="contacto" href="mailto:adrihdev@proton.me" className="hover:underline me-4 md:me-6">
              Contacto
            </a>
          </li>
          <li>
            <a className="hover:underline me-4 md:me-6 flex items-center">
              <Image src="/logo.png" alt="Logo" width={32} height={32} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
