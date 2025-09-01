import { SidebarTrigger, useSidebar } from "../ui/sidebar";

const TriggerSidebar = () => {
    const {open} = useSidebar();
    return (
        <>
            {!open && <SidebarTrigger className="cursor-pointer m-3 absolute top-[2px]"/>}
        </>
    );
}
 
export default TriggerSidebar;