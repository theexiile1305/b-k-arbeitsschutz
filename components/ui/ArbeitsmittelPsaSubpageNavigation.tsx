import SubpageNavigation from "./SubpageNavigation";

const pages = [
  { label: "Exoskelett", href: "/arbeitsmittel-psa/exoskelett" },
  { label: "Angepasster Gehörschutz", href: "/arbeitsmittel-psa/angepasster-gehoerschutz" },
];

export default function ArbeitsmittelPsaSubpageNavigation() {
  return <SubpageNavigation pages={pages} />;
}
