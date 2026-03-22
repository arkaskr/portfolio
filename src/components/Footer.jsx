import React, { useState } from 'react'
import { PiTwitterLogoBold, PiInstagramLogoBold } from 'react-icons/pi'

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = "Ujaan, a 13-year-old trusted Rubber Stamp Shop in Barasat, West Bengal, offers a wide range of services including Photo Lab, Printing, Offset Printing, Graphic Design, and Office Supplies.";
  const remainingText = " With a team of expert designers and printers, we deliver high-quality rubber stamps, prints, and designs that meet your unique needs. ️ From business logos to event invitations, our creative solutions will take your brand to the next level. Visit us today and experience the best in town!";

  return (
    <footer className="flex justify-center px-6 pb-12 md:px-4">
      <div className="w-full max-w-7xl rounded-[2.5rem] border border-slate-100 bg-white/90 p-8 text-sm text-slate-500 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-md md:p-12 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-400 dark:shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-md space-y-5 text-center md:text-left">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-white shadow-md shadow-emerald-500/40">
                U
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Ujaan - Rubber Stamp Store</span>
            </div>
            <p className="text-xs leading-relaxed md:max-w-sm">
              {isExpanded ? (
                <>
                  {shortText}
                  {remainingText}
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="ml-1 font-bold text-emerald-600 hover:text-emerald-500 transition-colors"
                  >
                    Read Less
                  </button>
                </>
              ) : (
                <>
                  {shortText}
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="ml-1 font-bold text-emerald-600 hover:text-emerald-500 transition-colors"
                  >
                    Read More...
                  </button>
                </>
              )}
            </p>
            <div className="flex items-center justify-center gap-4 md:justify-start">
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
                aria-label="Twitter"
              >
                <PiTwitterLogoBold className="h-5 w-5" />
              </button>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
                aria-label="Instagram"
              >
                <PiInstagramLogoBold className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:flex md:gap-16">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                Services
              </h3>
              <ul className="space-y-3 text-sm">
                <li>UI/UX Design</li>
                <li>Digital Strategy</li>
                <li>Marketing</li>
                <li>Development</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                Company
              </h3>
              <ul className="space-y-3 text-sm">
                <li>Our Story</li>
                <li>Success Cases</li>
                <li>Latest News</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-xs text-slate-400 md:flex-row dark:border-slate-800">
          <p className="text-center md:text-left">© 2026 Ujaan Rubber Stamp Store, All Rights Reserved.</p>
          <div className="flex gap-6">
            <button className="hover:text-slate-600 dark:hover:text-slate-300">Privacy Policy</button>
            <button className="hover:text-slate-600 dark:hover:text-slate-300">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

