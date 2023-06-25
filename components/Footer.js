import { Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className="containerG text-center py-5 border-t">
      <p>All rights reserved by National Grammer School</p>
      <div className="flex items-center gap-2 justify-center">Developed by: <Link href="https://musiur.vercel.app">Musiur Alam Opu</Link></div>
    </div>
  );
};

export default Footer;
