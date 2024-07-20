import { useContext } from "react";
import { TabUiMainContent } from "../../hooks/useContext/MainTabContext";
const GuideCreateBudget = () => {
 const  {handleShowContent} = useContext(TabUiMainContent)
  return (
    <>
      <div className="p-4 bg-gradient-to-b to-pink-100 min-h-screen rounded-[5px]">
        <h1 className="text-xl font-medium mb-4 text-[#fff]">Lập ngân sách chi tiêu</h1>
        <div className="bg-[#fff] shadow rounded-[5px] p-5 flex justify-center">
          <div className="my-5" >
            <div>
              <span className="text-[20px] block my-2 text-center">Kiểm soát chi tiêu với 3 bước</span>
            </div>
            <div className="my-5" >
              <div className="flex gap-3 my-4 items-center">
                <span className="bg-[#2479E7] p-5 rounded-full w-[20px] h-[20px] flex justify-center items-center text-[#fff]">1</span>
                <div>
                  <span className="block font-bold text-[20px]">Lập ngân sách</span>
                  <span className="block">Quyết định số tiền hợp lí nên chi tiêu</span>
                </div>
              </div>
              <div className="flex gap-3 my-4 items-center">
                <span className="bg-[#2479E7] p-5 rounded-full w-[20px] h-[20px] flex justify-center items-center text-[#fff]">2</span>
                <div>
                  <span className="block font-bold text-[20px]">Chi tiêu một cách chủ động</span>
                  <span className="block">Hãy nhắc để bạn không chi tiêu quá tay</span>
                </div>
              </div>
              <div className="flex gap-3 my-4 items-center">
                <span className="bg-[#2479E7] p-5 rounded-full w-[20px] h-[20px] flex justify-center items-center text-[#fff]">3</span>
                <div>
                  <span className="block font-bold text-[20px]">Cảm thấy tự tin</span>
                  <span className="block">Chi tiêu cho niềm vui , vẫn trong kiểm soát</span>
                </div>
              </div>
            </div>
          <button onClick={()=>handleShowContent(2)} className="bg-[#2479E7] text-[#fff] p-2 rounded-[8px] w-full my-2 hover:bg-[#448eee]">Bắt đầu ngay</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideCreateBudget;
