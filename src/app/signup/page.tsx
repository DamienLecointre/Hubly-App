import Footer from "@/components/layouts/footer/Footer";
import SignupForm from "@/components/modules/forms/SignupForm";
import LinkBtn from "@/components/ui/buttons/LinkBtn";
import PillBtn from "@/components/ui/buttons/PillBtn";

function Page() {
  return (
    <div className="flexFullHeigh w-full ">
      <main className="flexFullHeigh suroudedSpace_X24_YT32">
        <div className="flex items-start pb-6">
          <LinkBtn icon="arrow" link="/login" label="Retour" variant="base" />
        </div>
        <form className="flexFullHeigh justify-between gap-8">
          <h1 className="text-primary text-center">Créez votre compte</h1>
          <SignupForm />
          <div className="flexColumn gap-4">
            <PillBtn type="submit" label="Créer mon compte" variant="bgfull" />
            <div className="centerChild gap-2">
              <p className="caption text-primary">Déjà un compte ?</p>
              <LinkBtn
                icon="empty"
                link="/login"
                label="Connectez vous"
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
