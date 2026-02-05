import { filterMenuData } from "@/data/FilterMenuData";
import InfoBadge from "@/components/ui/badges/InfoBadge";
import useToggleId from "@/hooks/utils/useToggleId";

function FilterMenu() {
  const { toggle, activeId } = useToggleId();

  return (
    <div className="flex items-center overflow-x-auto gap-2 pt-6 pl-6 ">
      {filterMenuData.map((data) => (
        <InfoBadge
          key={data.id}
          icon={data.icon}
          label={data.label}
          // btnSate={data.btnSate}
          btnSate={activeId === data.id ? "active" : "bgempty"}
          onclick={() => toggle(data.id)}
        />
      ))}
    </div>
  );
}

export default FilterMenu;
