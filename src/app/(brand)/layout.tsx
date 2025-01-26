
import DashboardHeader from '@/components/shared/DashboardHeader';
import Sidebar from '@/components/shared/Sidebar';
import { Urbanist } from 'next/font/google'; 
const urbanist = Urbanist({ weight: ['400', '500', '600', '700'], subsets: ['latin'] }); 

const layout = ({children}: {children: React.ReactNode}) => {
    return ( 
      
            <div className={` grid grid-cols-12 ${urbanist.className}`}>
    
                {/* side bar */}
                <div className='col-span-2 h-screen '  style={{
            backgroundImage: `url('/faqbg.svg')`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            width: "100%", 
            height: "100%",   
            objectFit: 'cover', 
            backgroundColor: "#ffe6f7"
        }}>
                    <Sidebar/>
                </div>
    
                {/* main container with header */}
                <div className='col-span-10'>
                    <div className='h-[83px] flex items-center justify-end pr-5'  style={{
            backgroundImage: `url('/faqbg.svg')`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 

            objectFit: 'cover', 
            backgroundColor: "#ffe6f7"
        }}>
                        <DashboardHeader/>
                    </div>
    
                    <div className='bg-[#F6F6F6] p-4 h-[calc(100vh-83px)]  '  
                     style={{
            backgroundImage: `url('/joinbg.svg')`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',   
            objectFit: 'cover', 
            backgroundColor: "#ffe6f7"
        }}>
                        <div className='h-full overflow-y-auto rounded-md  '>
                        {children}
                        </div>
                    </div>
                </div>
            </div> 
    );
};

export default layout; 