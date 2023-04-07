import React, { useMemo } from "react";

function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter(item => item.age > 18);
  }, [list]);

  return (
    <div>
      {filteredList.map(item => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
        </div>
      ))}
      
    </div>
  );
}

export default FilteredList;