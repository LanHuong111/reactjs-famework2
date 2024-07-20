import ItemsTabList from "../components/ListItems/ListNavigation";
import { MdLogout } from "react-icons/md";
import { TabUiContext } from "../hooks/useContext/TabContext";
import { useContext } from "react";
import { AuthUserContext } from "../hooks/useContext/AuthContext";
const Sidebar = () => {
    const { handleShowContent, contentShow } = useContext(TabUiContext)
    const {token} = useContext(AuthUserContext) 
    const handleLogout = ()=>{
         localStorage.removeItem('token')
         window.location.reload()
    }
    return (
        <>
            <div className=" h-dvh bg-[#F1F5F9] p-4 border-r-2 relative">
                <div className=" border-b-2 flex justify-between items-center pb-3">
                    <div className="flex items-center gap-2">
                
                        <div>
                            <span className="text-[20px] block font-bold">Quản Lí Chi Tiêu</span>
                           
                        </div>
                    </div>
                   
                </div>
                <div>
                    {ItemsTabList.map((tabList) => (
                        <>
                            <div className={`flex items-center gap-3 my-2 cursor-pointer rounded-[5px]  p-2 duration-300 hover:shadow ${contentShow === tabList.indexTab ? 'bg-[#2479e7] text-[#fff]' : null}`} key={tabList.id} onClick={() => handleShowContent(tabList.indexTab)}>
                                <span>{tabList.icon}</span>
                                <span>{tabList.item}</span>
                            </div>
                        </>
                    ))}
                </div>
                {token && token !== undefined && <div className="absolute bottom-0 w-full left-0 p-2">
                    <div className="flex  items-center gap-2 my-2 cursor-pointer hover:bg-slate-200 p-2 w-full duration-300 rounded-[5px]">
                        <MdLogout />
                        <span onClick={()=>handleLogout()}>Đăng Xuất</span>
                    </div>
                </div>}
            </div>
        </>
    );
};

export default Sidebar;
