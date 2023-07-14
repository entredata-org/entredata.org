import { Link } from "@remix-run/react"




export default function HeaderNav (){

  return <nav>
    <div className="container flex items-center justify-center p-6 mx-auto text-dark-600 capitalize dark:text-dark-300">
      <Link to="/" className="text-2xl font-bold">
        <img className="w-40 mr-3 absolute" src="/images/logo.svg" alt="entredata.org" />
      </Link>
      <div className="flex flex-grow"></div>
        <a href="//docs.entredata.org" className="text-dark-800 transition-colors duration-300 transform dark:text-dark-200 border-b-2 border-primary-500 mx-1.5 sm:mx-6">Documentos</a>
      </div>
  </nav>
}