"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

import { motion } from "framer-motion";

export default function NavBar() {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo1.png"
              alt="PowerBlog logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Power <span className=" text-neutral-600 font-extrabold">Blog</span></p>
          </Link>
          <div>
           
              <motion.button
              onClick={() => setShowSignInModal(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ backgroundColor: 'black', color: 'white',border: 'none',borderRadius: '20px', padding: '10px 20px', cursor: 'pointer' }}
              >
              Sign In
              </motion.button>
              
            
          </div>
        </div>
      </div>
    </>
  );
}
