"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useItemValidation } from "@/hooks/inputs/useItemValidation";

import { CameraIcon, PlusIcon } from "../icons";
import BinIcon from "../icons/BinIcon";
import RoundBtn from "../buttons/RoundBtn";

type FileInputProps = {
  inputBoderStyle?: string;
  onchange: (files: File[]) => void;
};

export default function FileInput({
  inputBoderStyle,
  onchange,
}: FileInputProps) {
  const [files, setFiles] = useState<File[]>([]);
  const cameraRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);

  const itemValidationMessage = useItemValidation();

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const arr = Array.from(newFiles);
    const allFiles = [...files, ...arr];
    setFiles(allFiles);
    onchange(allFiles);
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onchange(newFiles);
  };

  return (
    <>
      <div className="flexColumn gap-2">
        <p className="text-secondary">Choisir une ou des image(s) (5 max.) :</p>
        {/* Bouton prendre une photo */}
        <button
          type="button"
          className={`centerBetween font-secondary font-normal text-[16px] bg-bg-input text-primary-input p-4 border ${inputBoderStyle} rounded-2xl placeholder:text-primary-input focus-within:ring-1 focus-within:ring-border-focus`}
          onClick={() => cameraRef.current?.click()}
        >
          <input
            ref={cameraRef}
            type="file"
            accept="image/*"
            capture="environment"
            multiple
            style={{ display: "none" }}
            onChange={(e) => handleFiles(e.target.files)}
          />
          Prendre une photo
          <CameraIcon />
        </button>

        <div className="centerChild">
          <p className="text-secondary">ou</p>
        </div>

        {/* Bouton choisir depuis la galerie */}
        <button
          type="button"
          className={`centerBetween font-secondary font-normal text-[16px] bg-bg-input text-primary-input p-4 border ${inputBoderStyle} rounded-2xl placeholder:text-primary-input focus-within:ring-1 focus-within:ring-border-focus`}
          onClick={() => galleryRef.current?.click()}
        >
          Choisir fichier(s)
          <PlusIcon />
        </button>
        <input
          ref={galleryRef}
          type="file"
          accept="image/*"
          multiple
          style={{ display: "none" }}
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {/* Preview des images */}
      {files.length > 0 && (
        <div className="flex gap-4 mt-4 flex-wrap">
          {files.map((file, index) => (
            <div
              key={file.name}
              className="relative h-33.75 w-fit min-w-21.25 rounded-xl border-2 border-card-border overflow-hidden"
            >
              <Image
                src={URL.createObjectURL(file)}
                alt={file.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-1 right-1 bg-bg-secondary-btn text-secondary rounded-full flex items-center justify-center text-sm">
                <RoundBtn btnId="BIN" onClick={() => removeFile(index)} />
              </div>
            </div>
          ))}
        </div>
      )}

      {itemValidationMessage && (
        <p className="text-warning">{itemValidationMessage}</p>
      )}

      <div className="w-full py-[16px]">
        <span className="block h-px w-full bg-border-input"></span>
      </div>
    </>
  );
}
