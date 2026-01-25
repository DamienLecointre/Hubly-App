import Footer from "@/components/layouts/footer/Footer";
import SignupForm from "@/components/modules/forms/SignupForm";
import LinkBtn from "@/components/ui/buttons/LinkBtn";
import PillBtn from "@/components/ui/buttons/PillBtn";
import React from "react";

function page() {
  return (
    <div className="h-full flex flex-col">
      <div className="h-full flex flex-col justify-between suroudedSpace_X24_YT32">
        <div className="flex items-start pb-6">
          <LinkBtn icon="arrow" link="/login" label="Retour" variant="base" />
        </div>
        <form action="" className="h-full flex flex-col justify-between ">
          <h1 className="text-primary text-center">Créez votre compte</h1>
          <SignupForm />
          <div className="flex flex-col gap-4">
            <PillBtn type="submit" label="Créer mon compte" variant="bgfull" />
            <div className="centerChild gap-2 ">
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
      </div>
      <Footer />
    </div>
  );
}

export default page;
