import Sidebar from "./components/sidebar";
import { Providers } from "./providers";
import "./globals.css";
import TopBar from "./components/TopBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <div className='flex flex-row'>
            <Sidebar />
            <div className="w-full">
              <TopBar />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
