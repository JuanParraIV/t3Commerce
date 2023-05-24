import React from "react";
import NavBar from "@/components/admin/NavBar";
import SideNav from "@/components/admin/SideNav";
import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";


interface ILayout {
  children: React.ReactNode
}

const Layout: NextPage<ILayout> = ({ children }) => {
  const { data: sessionData } = useSession();
  console.log(sessionData)

  return (
    <>
      <NavBar />
      <div className="bg-blue-900 min-h-screen flex">
        <SideNav />
        {sessionData && (
          <div className="bg-white flex-grow my-2 mr-2 rounded-lg p-4">
            {children}
          </div>
        )}
      </div>
    </>
  )
}

export default Layout
