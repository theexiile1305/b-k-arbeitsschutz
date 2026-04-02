import SubpageNavigation from "./SubpageNavigation";

const pages = [
  { label: "Betreuung DGUV V2", href: "/arbeitsschutz/betreuung-dguv-v2" },
  { label: "Unterweisungen", href: "/arbeitsschutz/unterweisungen" },
  { label: "GBU / BA / AA", href: "/arbeitsschutz/gbu-ba-aa" },
  { label: "Begehungen", href: "/arbeitsschutz/begehungen" },
  { label: "Analysen", href: "/arbeitsschutz/analysen" },
];

export default function ArbeitsschutzSubpageNavigation() {
  return <SubpageNavigation pages={pages} />;
}
