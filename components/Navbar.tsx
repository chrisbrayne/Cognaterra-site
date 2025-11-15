import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  const logoSrc = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIbGNtcwIQAABtbnRyUkdCIFhZWiAH4gADABQACQAOAB1hY3NwTVNGUAAAAABIUHVIURYAAAAAAAAAAAEAAAAAAAAAAAAA9tYAAQAAAADTLWhQSyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkc2NtAAAAACYAAABlY3BydAAAAkQAAABjdGV4dAAAAAAAAGRlc2MAAAEgAAAAYHd0cHQAAAGYAAAAFGNoYWQAAAGsAAAALHJYWVoAAAHUAAAAFGdYWVoAAAHsAAAAFGJYWVoAAAIEAAAAFHJUUkMAAAIMAAAIDGFhcmcAAAzAAAAAIGNocm0AAAzQAAAAJGRtbmQAAAz8AAAAJGRtZGQAA NEAAAAAa3Z1ZWQAA NQAAAAJGZpbGwAANsAAAAoaW5mbwAAOAAAAAxyVFJDAAAIMAAAIDxnVFJDAAAIMAAAIDxiVFJDAAAIMAAAIDxwYXJhAAA5EAAAACl2Y2d0AAA5sAAAADR0ZXh0AAAAAABDAG8AcAB5AHIAaQBnAGgAdAAgACgAYwApACAAMgAwADAAMwAgAEgAZQB3AGwAZQB0AHQALQBQAGEAYwBrAGEAcgBkACAARABlAHYAZQBsAG8AcABtAGUAbgB0ACAAQwBvAG0AcABhAG4AeQAsACAATAAuAFAALgAAeABZWiAAAAAAAADzUQABAAAAARbMcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltYWVogAAAAAAAAAwoAAPbPAAD6XwBhY3NwQVBQTAAAAABub25lAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVjcHJ0AAAA9AAAADRkZXNjAAAA+AAAADhjcHViAAAAPAAAAA5zeW5nAAAAcAAAABJkYXRhAAAAcgAAAAAAAAAEc2lnIAAAAABTSUdYbmV0dAAAAABDAEgAUgBvAG0AZQAAeABZWiAAAAAAAABjlgAAY5kAAKVhYWVogAAAAAAAAA92AAAf9gAAMd5hZWFmAAAAAAAAtAAAAF0AAADpYWNzcAAAAAAAAAABAAAAAAAAAAAAAQAAAAAAAABjdXJ2AAAAAAAABAAAAAAFAAoADwAUABkAHgAjACgALQAyADcAOwBAAEUASgBPAFQAWQBeAGMAaABtAHUAdwB8AIAAgwCEAIsAjgCRAJgAnQCgAKQApgCoAKsAsgC3ALwAwQDGAMsA0ADVANsA4ADlAOsB8AD2APsBAQEHAQ0BEwEZAR8BJQErATIBOAE+AUUBTAFSAVkBYAFnAW4BdQF8AYMBiwGSAZoBoQGpAbEBuQHBAckB0QHZAeEB6QHyAfoCAwIMAhQCHQImAi8COAJBAksCVAJdAmcCcQJ6AoQCjgKYAqICrAK2AsECywLVAuAC6wL1AwADCwMWAyEDLwM4A0MDTwNaA2YDcgN+A4oDlgOiA64DugPHA9MD4APsA/kEBgQTBCAELQQ7BEgEVQRjBHEEfgSMBJoEqAS2BMQE0wThBPAE/gUNBRwFKwU6BUkFWAVnBXcFgQWGBZAFlgXiBdoF2wXgBfUGBgYWBicGNwZIBlkGagZ7BowGnQavBsAG0QbjBvUHBwcZBysHPQdPB2EHdAeGB5kHrAe/B9IH5Qf4CAsIHwgyCEYIWghuCIIIlgiqCL4I0gjnCPsJEAklCToJTwlkCXkJjwmkCboJzwnlCfsKEQonCj0KVApqCoEKmAquCsUK3ArzCwsLIgs5C1 ELoQuYC6gLtgv4DBIMKgxZDH0MrAzADCwM2QzkDQwNPA1oDZgNyA34DigOWA6IDrgO6A8cD0wPgA+wD+QQGBBMEIAQtBDsESARVBGMEcQR+BIwEmgSoBLYExATTBOEE8AT+BQ0FHAUrBToFSwVZBWcFdwWBBYYFkgWWBeIF2gXbBeAF9QYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggimCL4I0gjnCPsJEAklCToJTwlkCXkJjwmkCboJzwnlCfsKEQonCj0KVApqCoEKmAquCsUK3ArzCwsLIgs5C1 ELoQuYC6gLtgv4DBIMKgxZDH0MrAzADCwM2QzkDQwNPA1oDZgNyA34DigOWA6IDrgO6A8cD0wPgA+wD+QQGBBMEIAQtBDsESARVBGMEcQR+BIwEmgSoBLYExATTBOEE8AT+BQ0FHAUrBToFSwVZBWcFdwWBBYYFkgWWBeIF2gXbBeAF9QYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggimCL4I0gjnCPsJEAklCToJTwlkCXkJjwmkCboJzwnlCfsKEQonCj0KVApqCoEKmAquCsUK3ArzCwsLIgs5C1 ELoQuYC6gLtgv4DBIMKgxZDH0MrAzADCwM2QzkDQwNPA1oDZgNyB34DigOWA6IDrgO6A8cD0wPgA+wD+QQGBBMEIAQtBDsESARVBGMEcQR+BIwEmgSoBLYExATTBOEE8AT+BQ0FHAUrBToFSwVZBWcFdwWBBYYFkgWWBeIF2gXbBeAF9QYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggimCL4I0gjnCPsJEAklCToJTwlkCXkJjwmkCboJzwnlCfsKEQonCj0KVApqCoEKmAquCsUK3ArzCwsLIgs5C1 ELoQuYC6gLtgv4DBIMKgxZDH0MrAzADCwM2QzkDQwNPA1oDZgNyB34DigOWA6IDrgO6A8cD0wPgA+wD+QQGBBMEIAQtBDsESARVBGMEcQR+BIwEmgSoBLYExATTBOEE8AT+BQ0FHAUrBToFSwVZBWcFdwWBBYYFkgWWBeIF2gXbBeAF9QYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggimCL4I0gjnCPsJEAklCToJTwlkCXkJjwmkCboJzwnlCfsKEQonCj0KVApqCoEKmAquCsUK3ArzCwsLIgs5C1 ELoQuYC6gLtgv4DBIMKgxZDH0MrAzADCwM2QzkDQwNPA1oDZgNyB34DigOWA6IDrgO6A8cD0wPgA+wD+QQGBBMEIAQtBDsESARVBGMEcQR+BIwEmgSoBLYExATTBOEE8AT+BQ0FHAUrBToFSwVZBWcFdwWBBYYFkgWWBeIF2gXbBeAF9QYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggimCL4I0gjnCPsJEAklCToJTwlkCXkJjwmkCboJzwnlCfsKEQonCj0KVApqCoEKmAquCsUK3ArzCwsLIgs5C1 ELoQuYC6gLtgv4DBIMKgxZDH0MrAzADCwM2QzkDQwNPA1oDZgNyB34DigOWA6IDrgO6A8cD0wPgA+wD+QQGBBMEIAQtBDsESARVBGMEcQR+BIwEmgSoBLYExATTBOEE8AT+BQ0FHAUrBToFSwVZBWcFdwWBBYYFkgWWBeIF2gXbBeAF9QYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggimCL4I0gjnCPsJEAklCToJTwlkCXkJjwmkCboJzwnlCfsKEQonCj0KVApqCoEKmAquCsUK3ArzCwsLIgs5C1 ELoQuYC6gLtgv4DBIMKgxZDH0MrAzADCwM2QzkDQwNPA1oDZgNyB34DigOWA6IDrgO6A8cD0wPgA+wD+QQGBBMEIAQtBDsESARVBGMEcQR+BIwEmgSoBLYExATTBOEE8AT+BQ0FHAUrBToFSwVZBWcFdwWBBYYFkgWWBeIF2gXbBeAF9QYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggimCL4I0gjnCPsJEAklCToJTwlkCXkJjwmkCboJzwnlCfsKEQonCj0KVApqCoEKmAquCsUK3ArzCwsLIgs5C1EAAAAAdGV4dAAAAABDb3B5cmlnaHQgKGMpIDIwMDMgSGV3bGV0dC1QYWNrYXJkIERldmVsb3BtZW50IENvbXBhbnksIEwuUC4AAHhZWiAAAAAAAADzUQABAAAAARbMcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltjaGFkAAAAIgAAACxkbW5kAAAAJAAAADZkbWRkAAAAJAAAADp2Y2dwAAAAAAAABAAAAFpHU3R4IAAAADMAAAD0bWFudQAAAAxMYWJzIDUgU1BLABYAAL0AAGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJtYXR0AAAAAAYAAAAAAAH/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAE+AfQDASIAAREBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EACcQAQEBAQEAAgICAgICAwEAAAEAEQISAxMTMSFBUXFCYSIyQoGR/QAFgEBAQEAAAAAAAAAAAAAAAAAAQID/8QAFxEBAQEBAAAAAAAAAAAAAAAAAARAv/aAAwDAQACEQMRAD8A/rC9r8m3yT8J/07J+G/w+P3K/o+x7+2S/uW/wA7v+x+t9ifV5z7M//Z/4r+Jc6Hn8Xv5/X7M53o/s/4uD/AA/H/pW+T/UuP/E+aD18+74H+z+3y/L4vK/B4v788/n9eX+7fL+9+5f/wAtz5uPz+n/AKP+l+lH9/j/AGL7/wC/7X6v7P0/h/N4fz+T/r8f+y/qf9/6n9f8S38X+P+t//J/6L/z/N+P/R/h/V+b+x/jP/5v2X/H/q8/8f+7x/6//8QAMRAAAQQBAgQFAwQDAAMBAQAAAQACAxEEBRIhEBMgIjFCFDVBgSMwM0JRFSQ2Q0ZicP/aAABAQABPwD/AO4hC7x3K+09j0/2a13E7uV90vK7S71XmU1/f0U1+E5zV4bU2l4aH2vC2D1C8OwvD2H0XB4q4PD9VwcZ6LhcYvDRW/h68Op4dRXh9H1XB0fdeHHquC2lwaXBS4K+gH7q1+7v39vj+6/u7+5R9/Vf36L+5Q+x7pfp6Iff8A7X5+3x/d39/j/wA3e3p6L0Xr9f6D3X+5Kk919yv/AJH//xAAiEQEAAQIGAwEBAAAAAAAAAAARAAECEgMhMDFBQXGRoWD/2gAIAQIBAT8A/YJ76E/9S/xXzK/0GzT7z6u/gT/0C5T0y/8Ak3//xAAiEQEBAQACAgMBAQADAAAAAAABABECITEgMEBBQlFhcWD/2gAIAQMBAT8A/nL/ALg/n9u+5w3/ADj5f9z8/wD2P4//xAAuEAACAQMCBQMEAgMBAQEBAAABAgMABBEhBRIxQRMiYTBRFAYgIjNAQhQjcSOh/9oACAEBAAJPwD/AO4hC7x3K+09j0/2a13E7uV90vK7S71XmU1/f0U1+E5zV4bU2l4aH2vC2D1C8OwvD2H0XB4q4PD9VwcZ6LhcYvDRW/h68Op4dRXh9H1XB0fdeHHquC2lwaXBS4K+gH7q1+7v39vj/d/3d/cpe/qv79F/cofY90v09EPv/ANr8/b4/u7+/x/8AN3t6el6L1+v9B7r/AHJUvuvtV/8Akf//EACRBAAMAAQIHBAEBAAAAAAAAAAABIRAxUVFhcaGCkbHRMJHB0f/aAAgBAQABPyH/AORtU0q/tV/kC3qT+F/sL/2Nf6g/P+0L+Iq/mF+R/g/s/c/3r+8F/kH+g/wBP+lT+V6h+H9T9H6/R/wADg/+v/n2F+f8A09v0P9Bf4D/E/wCFf5X6n6X+0v8AEv8AE/8AhX+h/rUv+Jf0oT+p/tI/1f7I/k/2S/Y/2R/43//a";


  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img src={logoSrc} alt="Cognaterra Logo" className="h-10" />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 font-semibold nav-link-hover transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#212529] focus:outline-none"
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-[#20c997] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;