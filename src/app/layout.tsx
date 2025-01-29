import type { Metadata } from "next"; 
import { AntdRegistry } from "@ant-design/nextjs-registry"; 
import "./globals.css";
import ReduxProvider from "@/redux/lib/ReduxProvider";
import { UserProvider } from "@/provider/User";



export const metadata: Metadata = {
  title: "Creator Briefs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <AntdRegistry> 
        <ReduxProvider >  
        <UserProvider > 
          {children}  
          </UserProvider>
        </ReduxProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
