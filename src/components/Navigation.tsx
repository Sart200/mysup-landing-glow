
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Menu, X } from "lucide-react";

interface NavigationProps {
  cartItems: number;
  onCartClick: () => void;
}

const Navigation = ({ cartItems, onCartClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-emerald-600">MySup</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-600 hover:text-emerald-600 transition-colors">Benefits</a>
            <a href="#ingredients" className="text-gray-600 hover:text-emerald-600 transition-colors">Ingredients</a>
            <a href="#reviews" className="text-gray-600 hover:text-emerald-600 transition-colors">Reviews</a>
            <a href="#faq" className="text-gray-600 hover:text-emerald-600 transition-colors">FAQ</a>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs px-1 min-w-[1.25rem] h-5">
                  {cartItems}
                </Badge>
              )}
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
            <a href="#benefits" className="block px-4 py-2 text-gray-600 hover:text-emerald-600 transition-colors">Benefits</a>
            <a href="#ingredients" className="block px-4 py-2 text-gray-600 hover:text-emerald-600 transition-colors">Ingredients</a>
            <a href="#reviews" className="block px-4 py-2 text-gray-600 hover:text-emerald-600 transition-colors">Reviews</a>
            <a href="#faq" className="block px-4 py-2 text-gray-600 hover:text-emerald-600 transition-colors">FAQ</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
