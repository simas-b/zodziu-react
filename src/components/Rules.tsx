import React from "react";
import Square from "./Square";

export default function Rules() {
  return (
    <div className="flex flex-col items-start px-8">
      <h2 className="py-4 text-2xl font-semibold tracking-widest">
        Kaip žaisti?
      </h2>
      <p className="text-justify">
        Atspėk žodį! Turi šešis bandymus. Įvesk savo variantą ir spausk Enter.
        Langelių spalvos parodys ar spėjimas buvo taiklus.
      </p>
      <h3 className="pt-8 mb-4 text-md uppercase font-semibold">PAVYZDŽIUI</h3>
      <div className="grid grid-cols-5 gap-1 mt-3">
        <Square color="white" letter="s" small />
        <Square color="green" letter="a" small />
        <Square color="white" letter="l" small />
        <Square color="white" letter="d" small />
        <Square color="white" letter="u" small />
      </div>
      <p className="my-4">Atspėjai raidę ir jos vietą žodyje.</p>
      <div className="grid grid-cols-5 gap-1 mt-3">
        <Square color="white" letter="t" small />
        <Square color="white" letter="o" small />
        <Square color="white" letter="l" small />
        <Square color="white" letter="y" small />
        <Square color="yellow" letter="n" small />
      </div>
      <p className="my-4">Raidė yra žodyje, tačiau kitoje vietoje.</p>
      <div className="grid grid-cols-5 gap-1 mt-3">
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
