"use client";
import Sidebar, { SidebarItem } from "@/components/SideBar";
import { ListTodo, TestTubeDiagonal, Users } from "lucide-react";
import { useState } from "react";
import SpellsComponent from "@/components/SpellsComponent";
import WizardsComponent from "@/components/WizardsComponent";
import RolesComponent from "@/components/RolesComponent";

export default function Home() {
    const [sideBarOption, setSideBarOption] = useState<string>("");
    return (
        <div className="w-full flex flex-row h-full">
            <div className="f-full">
                <Sidebar>
                    <SidebarItem icon={<Users size={20}/>} text="Wizards" active={sideBarOption === "Wizards"} setSideBarOption={setSideBarOption} />
                    <SidebarItem icon={<ListTodo size={20}/>} text="Roles" active={sideBarOption === "Roles"} setSideBarOption={setSideBarOption} />
                    <SidebarItem icon={<TestTubeDiagonal size={20}/>} text="Spells" active={sideBarOption === "Spells"} setSideBarOption={setSideBarOption} />
                </Sidebar>
            </div>
            <div className="w-full">
                {sideBarOption === "Wizards" && <WizardsComponent />}
                {sideBarOption === "Roles" && <RolesComponent />}
                {sideBarOption === "Spells" && <SpellsComponent />}
            </div>
        </div>
    );
}
