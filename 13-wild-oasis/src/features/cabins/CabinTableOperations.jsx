import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "./../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Price Low-High" },
          { value: "regularPrice-desc", label: "Price High-Low" },
          { value: "maxCapacity-asc", label: "Capacity Low-High" },
          { value: "maxCapacity-desc", label: "Capacity High-Low" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
