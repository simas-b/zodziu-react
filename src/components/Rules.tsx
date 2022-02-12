import React from "react";
import Square from "./Square";

type Props = {
  onClose: () => void;
};

export default function Rules({ onClose }: Props) {
  return (
    <div className="flex flex-col items-start" onClick={onClose}>
      <h2 className="py-2 text-2xl font-semibold tracking-widest">
        Kaip žaisti?
      </h2>
      <p className="text-justify mb-4">
        Atspėk žodį! Turi šešis bandymus. Įvesk savo variantą ir spausk Enter.
        Langelių spalvos parodys, ar spėjimas buvo taiklus.
      </p>
      <div className="grid grid-cols-5 gap-1 mt-2">
        <Square color="white" letter="k" size={32} />
        <Square color="white" letter="i" size={32} />
        <Square color="gray" letter="r" size={32} />
        <Square color="white" letter="a" size={32} />
        <Square color="white" letter="s" size={32} />
      </div>
      <p className="my-2">Šios raidės žodyje nėra.</p>
      <div className="grid grid-cols-5 gap-1 mt-2">
        <Square color="white" letter="t" size={32} />
        <Square color="white" letter="o" size={32} />
        <Square color="white" letter="l" size={32} />
        <Square color="white" letter="y" size={32} />
        <Square color="yellow" letter="n" size={32} />
      </div>
      <p className="my-2">Raidė yra žodyje, tačiau kitoje vietoje.</p>
      <div className="grid grid-cols-5 gap-1 mt-2">
        <Square color="white" letter="s" size={32} />
        <Square color="green" letter="a" size={32} />
        <Square color="white" letter="l" size={32} />
        <Square color="white" letter="d" size={32} />
        <Square color="white" letter="u" size={32} />
      </div>
      <p className="my-2">Atspėjai raidę ir jos vietą žodyje.</p>

    </div>
  );
}
