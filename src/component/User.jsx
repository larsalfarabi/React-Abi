import React from "react";
import { FiUser } from "react-icons/fi";
const User = () => {
  return (
    <div>
      <FiUser
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-8 h-8 rounded-full cursor-pointer"
        alt="User dropdown"
      />
      {/* Dropdown menu */}
      <div
        id="userDropdown"
        className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>

        <div className="py-1">
          <button className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
