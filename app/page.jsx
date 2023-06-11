import Carousel from "@/components/Carousel/Carousel";

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
      <div className="">
        
      </div>
    </main>
  );
}
