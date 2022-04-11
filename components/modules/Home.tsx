export const Header = () => (
  <div className="px-24 relative">
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
text-8xl text-brand font-semibold m-auto"
    >
      <h1>Ableton</h1>
    </div>
    <img src="./header.avif" alt="" className="object-fit" />
  </div>
);

export const TitleText = ({
  title,
  description,
}: {
  title: string;
  description: React.ReactNode;
}) => (
  <div className="container mx-auto">
    <div className="py-24 flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col gap-4 w-1/2">
        <span className="font-medium leading-10 text-2xl">{title}</span>
        <span className="text-md leading-8">{description}</span>
      </div>
    </div>
  </div>
);

export const BigTwoImage = () => (
  <div className="relative h-screen w-full">
    <div className="bg-lemonade absolute w-7/12 h-full right-0" />
    <div
      className="absolute left-40 top-1/2 transform -translate-y-1/2"
      style={{ height: 600, width: 650 }}
    >
      <img src="./photo-1.jpeg" className="object-cover h-full w-full" alt="" />
    </div>
    <div className="absolute w-1/3 right-20 top-1/2 transform -translate-y-1/2">
      <img src="./photo-2.jpeg" alt="" />
    </div>
  </div>
);
