import { Button } from "@/components/ui/button";
import { ChevronDown, GraduationCap, LayoutGrid } from "lucide-react";
import Logo from "./Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const navItems = [
    { label: "Agentic Workbench", hasDropdown: true },
    { label: "Use Cases", hasDropdown: false },
    { label: "Who we are", hasDropdown: true, active: true },
    { label: "Careers", hasDropdown: false },
    { label: "Blogs", hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Logo />

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.label === "Who we are" ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary text-accent outline-none">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56 mt-2 p-2">
                      <DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer rounded-lg hover:bg-accent/10">
                        <div className="w-8 h-8 rounded bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                          <LayoutGrid className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-foreground">About SNS Square</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer rounded-lg hover:bg-accent/10">
                        <div className="w-8 h-8 rounded bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-foreground">GCC</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    href="#"
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${item.active ? "text-accent" : "text-foreground"
                      }`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Button variant="nav" size="sm" className="rounded-lg px-6 font-bold">
              Sign Up
            </Button>
            <Button variant="outline" size="sm" className="rounded-lg px-6 font-bold">
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
