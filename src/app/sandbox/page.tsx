// COMPONENTS
import ArrowIcon from "@/components/ui/icons/ArrowIcon";
import BinIcon from "@/components/ui/icons/BinIcon";
import BoardGameIcon from "@/components/ui/icons/BoardGameIcon";
import BookIcon from "@/components/ui/icons/BookIcon";
import BubbleIcon from "@/components/ui/icons/BubbleIcon";
import CameraIcon from "@/components/ui/icons/CameraIcon";
import ChevronIcon from "@/components/ui/icons/ChevronIcon";
import CrossLineIcon from "@/components/ui/icons/CrossLineIcon";
import DiskIcon from "@/components/ui/icons/DiskIcon";
import EyeIcon from "@/components/ui/icons/EyeIcon";
import FilterIcon from "@/components/ui/icons/FilterIcon";
import GroupIcon from "@/components/ui/icons/GroupIcon";
import HeartIcon from "@/components/ui/icons/HeartIcon";
import HomeIcon from "@/components/ui/icons/HomeIcon";
import LockIcon from "@/components/ui/icons/LockIcon";
import MailIcon from "@/components/ui/icons/MailIcon";
import MoonIcon from "@/components/ui/icons/MoonIcon";
import PencilIcon from "@/components/ui/icons/PencilIcon";
import PlusIcon from "@/components/ui/icons/PlusIcon";
import SearchIcon from "@/components/ui/icons/SearchIcon";
import SunIcon from "@/components/ui/icons/SunIcon";
import UserIcon from "@/components/ui/icons/UserIcon";
import VideoGameIcon from "@/components/ui/icons/VideoGameIcon";

function page() {
  return (
    <div className=" px-12 py-6">
      <h1 className="text-center">Sandbox</h1>
      <div className="flex flex-col gap-6">
        <div className="border-b-2 border-b-gray-400">
          <h2>Icons</h2>
        </div>
        <div className="flex gap-2">
          <FilterIcon />
          <MailIcon />
          <LockIcon />
          <EyeIcon />
          <UserIcon />
          <ArrowIcon />
          <HomeIcon />
          <BookIcon />
          <HeartIcon />
          <SearchIcon />
          <PlusIcon />
          <MoonIcon />
          <SunIcon />
          <DiskIcon />
          <BubbleIcon />
          <BoardGameIcon />
          <VideoGameIcon />
          <GroupIcon />
          <CrossLineIcon />
          <BinIcon />
          <PencilIcon />
          <CameraIcon />
          <ChevronIcon />
        </div>
      </div>
    </div>
  );
}

export default page;
