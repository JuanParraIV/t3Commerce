import Layout from "@/components/admin/Layout";
import ProfileImage from "@/components/shared/ProfileImage";
import { signIn, useSession } from "next-auth/react";


export default function Admin() {
  const { data: sessionData } = useSession();
  console.log(sessionData)

  if (!sessionData) {
    return (
      <div className="bg-blue-900 h-screen w-screen flex items-center">
        <div className="text-center w-full">
          {/* <button
            className="btn bg-white text-black"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
            {sessionData ? "Sign Out" : "Login with Google"}
          </button> */}
          <button
            className="btn bg-white text-black"
            onClick={() => void signIn()}
          >
            Login with Google
          </button>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{sessionData.user?.name}</b>
        </h2>
        <div className="flex">
          {sessionData && (
            <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
              <ProfileImage
                className={'w-6 h-6 rounded'}
                url={sessionData.user?.image}
              />
              <span className="px-2">{sessionData.user?.name}</span>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

