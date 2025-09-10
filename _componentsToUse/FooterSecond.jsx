import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Better</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Better Mortgage Corporation is a direct lender dedicated to providing a fast, transparent digital mortgage experience backed by superior customer support.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Contact Us</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>Schedule a conversation</div>
              <div>hello@better.com</div>
              <div>415-523-8837</div>
              <div>FAQ</div>
              <div>Resources</div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Legal</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>NMLS Consumer Access</div>
              <div>Privacy Policy</div>
              <div>Terms of Use</div>
              <div>Disclosures & Licensing</div>
              <div>Affiliated Business</div>
            </div>
            
            {/* License Icons */}
            <div className="flex items-center space-x-2 mt-4">
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">EH</span>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">HL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <Separator className="my-8" />
        <div>
          <div className="text-xs text-gray-500 leading-relaxed space-y-2">
            <p>
              © 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services. Better Connect, LLC dba Better Attorney Match provides real estate attorney connection services; and Better Inspect, LLC provides home inspection services. All rights reserved.
            </p>
            <p>
              Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;