import BrandHeader from "@/components/layouts/header/BrandHeader";
import LoginForm from "@/components/modules/forms/LoginForm";
import Footer from "@/components/layouts/footer/Footer";
import PillBtn from "@/components/ui/buttons/PillBtn";
import LinkBtn from "@/components/ui/buttons/LinkBtn";

function Page() {
  return (
    <div className="flexFullHeigh w-full ">
      <main className="flexFullHeigh suroudedSpace_X24_YT32">
        <form className="flexFullHeigh justify-between gap-6">
          <BrandHeader location="other" />
          <LoginForm />
          <div className="flex flex-col gap-4">
            <PillBtn type="submit" label="Se connecter" variant="bgfull" />
            <div className="centerChild gap-2">
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
      </main>
      <Footer />
    </div>
  );
}

export default Page;
