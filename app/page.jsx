import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="">
        <Carousel infinite timer={10000} stopOnManual>
          <picture>
            <img
              className="object-fill h-full w-full max-h-[400px]"
              src="/img-1.jpg"
              alt="food image"
            />
          </picture>
          <picture>
            <img
              className="object-fill h-full w-full max-h-[400px]"
              src="/img-1.jpg"
              alt="food image"
            />
          </picture>
          <picture>
            <img
              className="object-fill h-full w-full max-h-[400px]"
              src="/img-1.jpg"
              alt="food image"
            />
          </picture>
        </Carousel>
      </div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
    </main>
  );
}
