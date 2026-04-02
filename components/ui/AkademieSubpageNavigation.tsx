import SubpageNavigation from "./SubpageNavigation";

const pages = [
  { label: "Fahrausbildung", href: "/akademie/fahrausbildung" },
  { label: "Sicherheitsbeauftragter", href: "/akademie/sicherheitsbeauftragter" },
  { label: "Brandschutzhelfer", href: "/akademie/brandschutzhelfer" },
  { label: "Elektrotechnik", href: "/akademie/elektrotechnik" },
];

export default function AkademieSubpageNavigation() {
  return <SubpageNavigation pages={pages} />;
}
