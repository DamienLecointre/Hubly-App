// COMPONENTS
// LAYOUTS
import Header from "@/components/layouts/header/Header";
import BrandHeader from "@/components/layouts/header/BrandHeader";
import SectionHeader from "@/components/layouts/header/SectionHeader";
import CollectionHeader from "@/components/layouts/header/CollectionHeader";
import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
// LAYOUTS
import FilterMenu from "@/components/modules/submenus/FilterMenu";
// BADGES
import IconBadge from "@/components/ui/badges/IconBadge";
import InfoBadge from "@/components/ui/badges/InfoBadge";
// BUTTONS
import GoToBtn from "@/components/ui/buttons/GoToBtn";
import LinkBtn from "@/components/ui/buttons/LinkBtn";
import NavBtn from "@/components/ui/buttons/NavBtn";
import PillBtn from "@/components/ui/buttons/PillBtn";
import RoundBtn from "@/components/ui/buttons/RoundBtn";
// ICONS
import HublyLogo from "@/components/ui/icons/HublyLogo";
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
import SortMenu from "@/components/modules/submenus/SortMenu";
import LoginForm from "@/components/modules/forms/LoginForm";
import SignupForm from "@/components/modules/forms/SignupForm";

function page() {
  return (
    <div className="bg-[#3a5b82] px-12 pt-6 pb-45 flex flex-col gap-6">
      <h1 className="text-center">Sandbox</h1>
      <div className="flex flex-col gap-6">
        <div className="border-b-2 border-b-gray-400">
          <h2>Texts</h2>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h1>To get started, edit the page.tsx file.</h1>
          <h2>To get started, edit the page.tsx file.</h2>
          <h3>To get started, edit the page.tsx file.</h3>
          <h4>To get started, edit the page.tsx file.</h4>
          <p>Looking for a starting point or more instructions? Head over to</p>
          <p className="p-small">
            Looking for a starting point or more instructions? Head over to
          </p>
          <p className="caption">
            Looking for a starting point or more instructions? Head over to
          </p>
        </div>
      </div>
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
          <PillBtn type="button" label="Ajouter un élément" variant="bgfull" />
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
          <InfoBadge icon="book" label="Livres" variant="base" />
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
        <div className="flex-1 items-center gap-6">
          <BrandHeader />
          <Header />
          <SectionHeader />
          <CollectionHeader />
          <Footer />
          <Navbar />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="border-b-2 border-b-gray-400">
          <h2>Modules</h2>
        </div>
        <div className="flex-1 items-center gap-6">
          <LoginForm />
          <SignupForm />
          <FilterMenu />
          <SortMenu />
        </div>
      </div>
    </div>
  );
}

export default page;
