import Image from "next/image";
import React from "react";

interface TeamMemberCardProps {
  id?: number;
  name: string;
  major?: string;
  position_category?: string;
  position: string;
  url_image: string;
  experience?: number;
  background?: string;
}

export const TeamMemberCard = ({
  name,
  position,
  url_image,
}: TeamMemberCardProps) => {
  return (
    <div className="inline-block w-[300px] p-4 md:w-[320px] lg:w-[340px]">
      <div className="">
        <div className="p-4">
          <div className="w-44 h-44 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400">
            <Image
              src={url_image}
              alt={name}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-xl font-semibold text-white text-center mb-2">
            {name}
          </h3>
          <p className="text-blue-600 text-center mb-3">{position}</p>
        </div>
      </div>
    </div>
  );
};
