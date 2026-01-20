// COMPONENTS
// LAYOUTS
import HublyLogo from "@/components/ui/icons/HublyLogo";
import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
// BADGES
import Header from "@/components/layouts/header/Header";
import IconBadge from "@/components/ui/badges/IconBadge";
import InfoBadge from "@/components/ui/badges/InfoBadge";
// BUTTONS
import GoToBtn from "@/components/ui/buttons/GoToBtn";
import LinkBtn from "@/components/ui/buttons/LinkBtn";
import NavBtn from "@/components/ui/buttons/NavBtn";
import PillBtn from "@/components/ui/buttons/PillBtn";
import RoundBtn from "@/components/ui/buttons/RoundBtn";
// ICONS
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
import Copyright from "@/components/ui/icons/Copyright";
// INPUTS
import CheckboxInput from "@/components/ui/inputs/CheckboxInput";
import FormInput from "@/components/ui/inputs/FormInput";
import SearchInput from "@/components/ui/inputs/SearchInput";

function page() {
  return (
    <div className="bg-[#3a5b82] px-12 py-6 flex flex-col gap-6">
      <h1 className="text-center">Sandbox</h1>
      <div className="flex flex-col gap-6">
        <div className="border-b-2 border-b-gray-400">
          <h2>Icons</h2>
        </div>
        <div className="flex gap-2">
          <HublyLogo height="h-6" width="w-6" />
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
          <Copyright />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="border-b-2 border-b-gray-400">
          <h2>Buttons</h2>
        </div>
        <div className="flex items-center gap-6">
          <PillBtn type="button" label="Ajouter un élément" />
          <RoundBtn type="button" icon="moon" variant="base" />
          <NavBtn href="/" label="Home" icon="home" variant="base" />
          <GoToBtn type="button" label="Retour" />
          <LinkBtn link="/" label="Inscrivez-vous" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="border-b-2 border-b-gray-400">
          <h2>Badges</h2>
        </div>
        <div className="flex items-center gap-6">
          <IconBadge icon="camera" />
          <InfoBadge icon="book" label="Livres" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="border-b-2 border-b-gray-400">
          <h2>Inputs</h2>
        </div>
        <div className="flex items-center gap-6">
          <FormInput
            iconLeft="mail"
            type="email"
            placeholder="Mot de passe"
            iconRight="eye"
          />
          <SearchInput />
          <CheckboxInput label="Par statut" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="border-b-2 border-b-gray-400">
          <h2>Layouts</h2>
        </div>
        <div className="flex items-center gap-6">
          <Header />
          <Footer />
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default page;
