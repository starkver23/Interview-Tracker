import { Disclosure } from "@headlessui/react";
import logo from "../images/logo.png";
export default function Example() {
  return (
    <Disclosure as="nav" className="bg-blue-950">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center">
          <div className="flex flex-shrink-0 items-center">
            <img alt="Logo" src={logo} className="h-8 w-auto" />
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
