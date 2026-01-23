import Image from "next/image";

type ImgBadgeProps = {
  src: string;
};

function ImgBadge({ src }: ImgBadgeProps) {
  return (
    <div className="relative h-33.75 w-fit min-w-21.25">
      <Image
        src={src}
        alt="badge"
        fill
        className="object-fill rounded-xl border-2 border-card-border"
      />
    </div>
  );
}

export default ImgBadge;
