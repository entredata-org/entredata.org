


export default function HeaderHero () {
  return <div>
      <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                  <h1 className="text-3xl font-semibold text-dark-800 dark:text-white lg:text-4xl">entredata.<span className="text-primary-500">org</span></h1>

                  <p className="mt-3 text-dark-600 dark:text-dark-400">
                    Un lugar para compartir conocimiento y experiencias sobre siencia de datos, machine learning, inteligencia artificial y más.
                  </p>

                  <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                      <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-primary-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-primary-500 focus:outline-none focus:bg-primary-500">
                         Ir a documentación 
                      </button>
                  </div>
              </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img className="w-full h-full max-w-md" src="/images/hero.png" alt="entredata.org" />
          </div>
      </div>
    </div>
  </div>
}