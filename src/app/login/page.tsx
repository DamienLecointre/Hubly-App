import BrandHeader from "@/components/layouts/header/BrandHeader";
import LoginForm from "@/components/modules/forms/LoginForm";
import Footer from "@/components/layouts/footer/Footer";
import PillBtn from "@/components/ui/buttons/PillBtn";
import LinkBtn from "@/components/ui/buttons/LinkBtn";

function page() {
  return (
    <div className="h-full flex flex-col">
      <div className="h-full flex flex-col justify-between suroudedSpace_X24_YT32">
        <form action="" className="h-full flex flex-col justify-between ">
          <BrandHeader location="other" />
          <LoginForm />
          <div className="flex flex-col gap-4">
            <PillBtn type="submit" label="Se connecter" variant="bgfull" />
            <div className="centerChild gap-2 ">
              <p className="caption text-primary">Pas encore de compte ?</p>
              <LinkBtn
                icon="empty"
                link="/signup"
                label="Inscrivez-vous"
                variant="accent"
              />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default page;
