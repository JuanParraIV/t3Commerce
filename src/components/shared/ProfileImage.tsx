import Image from 'next/image'
import React from 'react'

type ProfileImageProps = {
  url?: string | null;
  className?: string;
}

const ProfileImage = ({ url, className = '', ...props }: ProfileImageProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`} >
      {url == null ?
        null
        :
        <Image
          src={url}
          alt="Profile Image"
          quality={100}
          fill
          {...props}
        />}
    </div >
  )
}

export default ProfileImage