import React from "react";

export const Filter =({value, onChange})=>{
return (
    <label>
    filter <input type="text" value={value} onChange={onChange} />
</label>
)
}