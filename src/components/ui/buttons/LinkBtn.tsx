import Link from "next/link";

type LinkBtnProps = {
  link: string;
  label: string;
};

function LinkBtn({ link, label }: LinkBtnProps) {
  return (
    <Link href={link} className="p-small text-accent-btn">
      {label}
    </Link>
  );
}

export default LinkBtn;
