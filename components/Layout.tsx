import { Sora } from "next/font/google" 
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";
import Header from "./Header";

//font settings
const sora = Sora({
  subsets: ["latin"],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const Layout = ({children}:any) => {
  return (
  <div className={`page bg-black text-white bg-cover bg-no-repeat ${sora.variable}`}>
      <TopLeftImg/>
      <Nav/>
      <Header/>
      {children}
  </div>
  )
};

export default Layout;
