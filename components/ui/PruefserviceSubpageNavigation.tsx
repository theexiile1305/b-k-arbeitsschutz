import SubpageNavigation from "./SubpageNavigation";

const pages = [
  { label: "Betriebsmittelprüfung DGUV V3", href: "/pruefservice/betriebsmittelpruefung-dguv-v3" },
  { label: "UVV", href: "/pruefservice/uvv" },
  { label: "Regale", href: "/pruefservice/regale" },
  { label: "Leitern & Tritte", href: "/pruefservice/leitern-tritte" },
  { label: "Kraftbetriebene Tore", href: "/pruefservice/kraftbetriebene-tore" },
];

export default function PruefserviceSubpageNavigation() {
  return <SubpageNavigation pages={pages} />;
}
