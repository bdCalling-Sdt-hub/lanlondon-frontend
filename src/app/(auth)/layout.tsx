
import { Poppins } from 'next/font/google'; 
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] }); 

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={`flex items-center justify-center h-[100vh] bg-[#f9bdf5] ${poppins.className}`} > 
           {children}
        
    </div>
    );
};

export default layout;