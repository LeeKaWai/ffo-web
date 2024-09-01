"use client"; 

import { useParams } from 'next/navigation'
 

export default function EquipmentId(){
    const params = useParams<{ id: string }>()
    return (
        <div className="app-main-container infomation-overview">
            <text>
                equipmentId page ID:{params.id}
            </text>
        </div>
    )
}