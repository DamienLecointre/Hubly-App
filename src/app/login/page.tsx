"use client";

import { useContext } from "react";
import { useLoginSubmit } from "@/hooks/forms/useLoginSubmit";
import { SignupContext } from "@/context/AuthContext";
import AuthenticationPopup from "@/components/modules/popup/AuthenticationPopup";
import BlurLayer from "@/components/modules/popup/BlurLayer";

import BrandHeader from "@/components/layouts/header/BrandHeader";
import LoginForm from "@/components/modules/forms/LoginForm";
import Footer from "@/components/layouts/footer/Footer";
import PillBtn from "@/components/ui/buttons/PillBtn";
import LinkBtn from "@/components/ui/buttons/LinkBtn";

function Page() {
  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("SignupPage must be used within a SignupProvider");
  }

  const { errorMessage, submitValid } = signupContext;

  const { handleLoginSubmit } = useLoginSubmit();
  return (
    <div className="flexFullHeight w-full ">
      <main className="flexFullHeight suroudedSpace_X24_YT32">
        {submitValid && (
          <>
            <AuthenticationPopup
              title="Bienvenue !"
              subtitle="Connexion établie avec succès."
            />
            && <BlurLayer />
          </>
        )}
        <form
          onSubmit={handleLoginSubmit}
          className="flexFullHeight justify-between gap-6"
        >
          <BrandHeader location="other" />
          <LoginForm />
          {errorMessage === "required" && (
            <p className="text-warning text-center">
              Tous les champs du formulaire doivent être remplis
            </p>
          )}
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
