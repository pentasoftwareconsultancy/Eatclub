import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold mb-4">EatClub</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Follow Us</h4>
          <div className="flex gap-4">
             {/* Social placeholders */}
             <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white">IG</div>
             <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white">FB</div>
             <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white">X</div>
          </div>
          <p className="mt-4 text-xs text-gray-500">© 2024 EatClub Technologies</p>
        </div>
      </div>
    </footer>
  );
};