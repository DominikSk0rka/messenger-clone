import getConvesations from "../actions/getConvesations";
import Sidebar from "../components/sidebar/Sidebar";
import ConvesationList from "./components/ConvesationList";

export default async function ConvesationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const convesations = await getConvesations();
  return (
    <Sidebar>
      <div className="h-full">
        <ConvesationList initialItems={convesations} />
        {children}
      </div>
    </Sidebar>
  );
}
