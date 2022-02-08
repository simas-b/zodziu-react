import React from "react";
import Square from "./Square";
import crossIcon from "../assets/cross.svg";

type Props = {
  onClose: () => void;
};

export default function Rules({ onClose }: Props) {
  return (
    <div className="flex flex-col items-start px-8">
      <div className="flex w-full justify-between items-center mb-4">
        <h2 className="py-4 text-2xl font-semibold tracking-widest">
          Kaip žaisti?
        </h2>
        <div className="cursor-pointer select-none" onClick={onClose}>
          <img
            src={crossIcon}
            alt="close"
            style={{ width: "2rem", height: "2rem" }}
          />
        </div>
      </div>
      <p className="text-justify">
        Atspėk žodį! Turi šešis bandymus. Įvesk savo variantą ir spausk Enter.
        Langelių spalvos parodys ar spėjimas buvo taiklus.
      </p>
      <h3 className="pt-8 mb-4 text-md uppercase font-semibold">PAVYZDŽIUI</h3>
      <div className="flex mt-3">
        <Square color="white" letter="s" small />
        <Square color="green" letter="a" small />
        <Square color="white" letter="l" small />
        <Square color="white" letter="d" small />
        <Square color="white" letter="u" small />
      </div>
      <p className="my-4">Atspėjai raidę ir jos vietą žodyje.</p>
      <div className="flex mt-3">
        <Square color="white" letter="t" small />
        <Square color="white" letter="o" small />
        <Square color="white" letter="l" small />
        <Square color="white" letter="y" small />
        <Square color="yellow" letter="n" small />
      </div>
      <p className="my-4">Raidė yra žodyje, tačiau kitoje vietoje.</p>
      <div className="flex mt-3">
        <Square color="white" letter="k" small />
        <Square color="white" letter="i" small />
        <Square color="gray" letter="r" small />
        <Square color="white" letter="a" small />
        <Square color="white" letter="s" small />
      </div>
      <p className="my-4">Šios raidės žodyje nėra.</p>
    </div>
  );
}
