import React from "react";
import SelectableGrid from "../../component/slectablegrid/SelectableGrid";

const SelectableGridPage = () => {
  return (
    <div>
      index
      <div>
        <div>
          <h3>Selectable grid</h3>
          <SelectableGrid rows={15} columns={15} />
        </div>
      </div>
    </div>
  );
};

export default SelectableGridPage;
