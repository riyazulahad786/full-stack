import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { IoLogoPinterest } from "react-icons/io5";
function Footer() {
  return (
    <div className="bg-gray-900 py-5 text-white">
      <div className="container mx-auto py-8 px-4 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <p className="text-sm leading-6">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div>
                 <ul className="flex gap-3 items-center py-3 ">
                            <li className="hover:text-blue-500 cursor-pointer">
                              <FaInstagram />
                            </li>
                            <li className="hover:text-blue-500 cursor-pointer">
                              <CiFacebook />
                            </li>
                            <li className="hover:text-blue-500 cursor-pointer">
                              <CiTwitter />
                            </li>
                            <li className="hover:text-blue-500 cursor-pointer">
                              <IoLogoPinterest />
                            </li>
                          </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-[#FFA229]">Start a Business</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Company Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  LLP Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Proprietorship Firm
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Partnership Firm
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-3 whitespace-nowrap text-[#FFA229]">
              Government Registration
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  GST Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  MSME Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Trade License
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#FFA229]">Compliance & Tax</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Income Tax Filing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  TDS Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Auditing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#FFA229]">BIS & CDSCO</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  BIS Certification
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  CDSCO Approval
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  ISI Mark Certification
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" mt-8 pt-4 text-sm text-center">
          <p>&copy; 2025 RegisterKaro. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
