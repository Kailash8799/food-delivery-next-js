import Carousel from "@/components/Carousel/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="">
        <Carousel infinite timer={5000} stopOnManual>
          <picture>
            <img
              className="object-fill h-full w-full max-h-[400px]"
              src="/img-2.jpg"
              alt="food image"
            />
          </picture>
          <picture>
            <img
              className="object-fill h-full w-full max-h-[400px]"
              src="/img-3.jpeg"
              alt="food image"
            />
          </picture>
          <picture>
            <img
              className="object-fill h-full w-full max-h-[400px]"
              src="/img-4.jpg"
              alt="food image"
            />
          </picture>
          <picture>
            <img
              className="object-fill h-full w-full max-h-[400px]"
              src="/img-5.webp"
              alt="food image"
            />
          </picture>
          <picture>
            <img
              className="object-fill h-full w-full max-h-[400px]"
              src="/img-6.webp"
              alt="food image"
            />
          </picture>
          <picture>
            <img
              className="object-fill h-full w-full max-h-[400px]"
              src="/img-7.jpg"
              alt="food image"
            />
          </picture>
          <picture>
            <img
              className="object-fill h-full w-full max-h-[400px]"
              src="/img-8.webp"
              alt="food image"
            />
          </picture>
          <picture>
            <img
              className="object-fill h-full w-full max-h-[400px]"
              src="/img-9.webp"
              alt="food image"
            />
          </picture>
        </Carousel>
      </div>
      <div className="grid grid-cols-1 gap-3 mx-5 my-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="cursor-pointer group">
          <div className="flex flex-col w-full gap-2">
            <div className="relative w-full overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/tea.avif"
                className="w-full h-full transition hover:scale-105"
                alt=""
                srcSet=""
              />
            </div>
            <div className="px-2">
              <h1 className="text-xl font-semibold text-black dark:text-white">
                Tea Post
              </h1>
              <h1 className="text-xl font-normal text-black dark:text-white">
                ₹30 for one
              </h1>
            </div>
          </div>
        </div>
        <div className="cursor-pointer group">
          <div className="flex flex-col w-full gap-2">
            <div className="relative w-full overflow-hidden aspect-square rounded-xl">
              <Image
                src="/sandwich.avif"
                fill
                className="w-full h-full transition hover:scale-105"
                alt=""
                srcSet=""
              />
            </div>
            <div className="px-2">
              <h1 className="text-xl font-semibold text-black dark:text-white">
                Collegian Sandwich & Snacks
              </h1>
              <h1 className="text-xl font-normal text-black dark:text-white">
                ₹100 for one
              </h1>
            </div>
          </div>
        </div>
        <div className="cursor-pointer group">
          <div className="flex flex-col w-full gap-2">
            <div className="relative w-full overflow-hidden aspect-square rounded-xl">
              <Image
                src="/roti.avif"
                fill
                className="w-full h-full transition hover:scale-105"
                alt=""
                srcSet=""
              />
            </div>
            <div className="px-2">
              <h1 className="text-xl font-semibold text-black dark:text-white">
                Virasat - E - Curry
              </h1>
              <h1 className="text-xl font-normal text-black dark:text-white">
                ₹300 for one
              </h1>
            </div>
          </div>
        </div>
        <div className="cursor-pointer group">
          <div className="flex flex-col w-full gap-2">
            <div className="relative w-full overflow-hidden aspect-square rounded-xl">
              <Image
                src="/dhosa.avif"
                fill
                className="w-full h-full transition hover:scale-105"
                alt=""
                srcSet=""
              />
            </div>
            <div className="px-2">
              <h1 className="text-xl font-semibold text-black dark:text-white">
                Masala Dosa
              </h1>
              <h1 className="text-xl font-normal text-black dark:text-white">
                ₹70 for one
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
              <h1 className="mb-2 text-2xl font-medium text-gray-900 dark:text-slate-400 sm:text-3xl title-font">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 xl:w-1/3 md:w-1/2">
                <div className="p-6 transition-transform border border-gray-200 rounded-lg hover:scale-105 dark:border-slate-900">
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 title-font">
                    Shooting Stars
                  </h2>
                  <p className="text-base leading-relaxed dark:text-slate-400">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
              <div className="p-4 xl:w-1/3 md:w-1/2">
                <div className="p-6 transition-transform border border-gray-200 rounded-lg hover:scale-105 dark:border-slate-900">
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 title-font">
                    The Catalyzer
                  </h2>
                  <p className="text-base leading-relaxed dark:text-slate-400">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
              <div className="p-4 xl:w-1/3 md:w-1/2">
                <div className="p-6 transition-transform border border-gray-200 rounded-lg hover:scale-105 dark:border-slate-900">
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 title-font">
                    Neptune
                  </h2>
                  <p className="text-base leading-relaxed dark:text-slate-400">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
              <div className="p-4 xl:w-1/3 md:w-1/2">
                <div className="p-6 transition-transform border border-gray-200 rounded-lg hover:scale-105 dark:border-slate-900">
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                    </svg>
                  </div>
                  <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 title-font">
                    Melanchole
                  </h2>
                  <p className="text-base leading-relaxed dark:text-slate-400">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
              <div className="p-4 xl:w-1/3 md:w-1/2">
                <div className="p-6 transition-transform border border-gray-200 rounded-lg hover:scale-105 dark:border-slate-900">
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                    </svg>
                  </div>
                  <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 title-font">
                    Bunker
                  </h2>
                  <p className="text-base leading-relaxed dark:text-slate-400">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
              <div className="p-4 xl:w-1/3 md:w-1/2">
                <div className="p-6 transition-transform border border-gray-200 rounded-lg hover:scale-105 dark:border-slate-900">
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h2 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 title-font">
                    Ramona Falls
                  </h2>
                  <p className="text-base leading-relaxed dark:text-slate-400">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
