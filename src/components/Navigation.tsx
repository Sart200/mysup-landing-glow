
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Menu, X } from "lucide-react";

interface NavigationProps {
  cartItems: number;
  onCartClick: () => void;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

const Navigation = ({ cartItems, onCartClick, onAddToCart, onBuyNow }: NavigationProps) => {
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

          {/* Action Buttons and Cart */}
          <div className="flex items-center space-x-3">
            {/* Action Buttons - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-2">
              <Button 
                size="sm" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={onAddToCart}
              >
                Add to Cart
              </Button>
              <Button 
                size="sm" 
                className="bg-orange-600 hover:bg-orange-700 text-white"
                onClick={onBuyNow}
              >
                Buy Now
              </Button>
            </div>

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
            
            {/* Mobile Action Buttons */}
            <div className="flex flex-col space-y-2 px-4 pt-2">
              <Button 
                size="sm" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
                onClick={onAddToCart}
              >
                Add to Cart
              </Button>
              <Button 
                size="sm" 
                className="bg-orange-600 hover:bg-orange-700 text-white w-full"
                onClick={onBuyNow}
              >
                Buy Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
