import { useEffect, useRef, useState } from "react"

export function CarDetails({initialData}){
    const formRef = useRef(null)

    useEffect(()=>{
        if(initialData) {
            return formRef.current.initialData
        }
        
    },[initialData])

    return (
    <div>
        <form ref={formRef}>
          <label>
            Model:
            <input type="text" name="model" defaultValue={initialData?.model} />
          </label>
          <label>
            Year:
            <input type="number" name="year" defaultValue={initialData?.year} />
          </label>
          <label>
            Color:
            <input type="text" name="color" defaultValue={initialData?.color} />
          </label>
        </form>
    </div>
    )
}