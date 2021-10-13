import React from "react";
import Skeleton from "react-loading-skeleton";
import WalletIcon from "@bitcoin-design/bitcoin-icons/svg/outline/wallet.svg";

type Props = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  right?: React.ReactNode;
};

export default function Navbar({ title, subtitle, children, right }: Props) {
  return (
    <div className="px-4 py-2 bg-white flex justify-between items-center border-b border-gray-200">
      <div className="flex w-8/12 md:w-4/12 lg:w-3/12">
        <div className="px-2 py-1 flex items-center bg-gray-100 rounded-md">
          <img
            className="-ml-1 mr-2 w-8 h-8 opacity-50"
            src={WalletIcon}
            alt=""
            aria-hidden="true"
          />
          <div className={`flex-auto ${!title && !subtitle ? "w-28" : ""}`}>
            <div className="text-xs text-gray-500">{title || <Skeleton />}</div>
            <div className="text-xs">{subtitle || <Skeleton />}</div>
          </div>
        </div>
      </div>
      {children && (
        <div>
          <nav className="flex space-x-8">{children}</nav>
        </div>
      )}
      <div className="md:w-4/12 lg:w-3/12 flex justify-end items-center">
        {right}
      </div>
    </div>
  );
}
