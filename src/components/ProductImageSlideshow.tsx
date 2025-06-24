
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductImageSlideshow = () => {
  const [mainImage, setMainImage] = useState(0);
  
  const productImages = [
    "/lovable-uploads/4f512515-868a-407d-80c4-422567876ca5.png",
    "/lovable-uploads/28cefd04-aef6-47dc-9a75-383aba815839.png",
    "/lovable-uploads/a39f59e5-c5dc-4f7a-b585-89881675a27f.png",
    "/lovable-uploads/50c61fa7-58c7-4d26-a28a-0f3fb5db2d0f.png"
  ];

  const nextImage = () => {
    setMainImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setMainImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="space-y-4 w-full max-w-lg mx-auto">
      {/* Main Image */}
      <div className="relative bg-gray-50 rounded-lg overflow-hidden aspect-square w-full">
        <img 
          src={productImages[mainImage]}
          alt="MySup 360 Product" 
          className="w-full h-full object-contain p-4"
        />
        
        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-md"
          onClick={prevImage}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-md"
          onClick={nextImage}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {productImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(index)}
            className={`relative bg-gray-50 rounded-lg overflow-hidden aspect-square border-2 transition-all hover:opacity-80 ${
              mainImage === index ? 'border-emerald-500' : 'border-transparent'
            }`}
          >
            <img 
              src={image}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-contain p-1 sm:p-2"
            />
          </button>
        ))}
      </div>

      {/* Image Indicators */}
      <div className="flex justify-center space-x-2">
        {productImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setMainImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              mainImage === index ? 'bg-emerald-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlideshow;
