
import DashboardHeader from '@/components/shared/DashboardHeader';
import Sidebar from '@/components/shared/Sidebar';
import { Urbanist } from 'next/font/google'; 
const urbanist = Urbanist({ weight: ['400', '500', '600', '700'], subsets: ['latin'] }); 

const layout = ({children}: {children: React.ReactNode}) => {
    return ( 
      
            <div className={` grid grid-cols-12 ${urbanist.className}`}>
    
                {/* side bar */}
                <div className='col-span-2 h-screen bg-white'>
                    <Sidebar/>
                </div>
    
                {/* main container with header */}
                <div className='col-span-10'>
                    <div className='h-[83px] flex items-center justify-end pr-5'>
                        <DashboardHeader/>
                    </div>
    
                    <div className='bg-[#F6F6F6] p-6 h-[calc(100vh-83px)]'>
                        <div className='h-full overflow-y-auto rounded-md  p-6'>
                        {children}
                        </div>
                    </div>
                </div>
            </div> 
    );
};

export default layout; 