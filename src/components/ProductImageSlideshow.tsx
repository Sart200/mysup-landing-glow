
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductImageSlideshow = () => {
  const [mainImage, setMainImage] = useState(0);
  
  const productImages = [
    "/lovable-uploads/3d54c6c0-4097-41e4-8186-4188e36a66b8.png",
    "/lovable-uploads/f22ca76f-b5fb-4958-aa42-a657662d1519.png",
    "/lovable-uploads/a82e52cd-34ac-41dd-99aa-a12bd2b65f77.png",
    "/lovable-uploads/e615aa42-04e9-4cd3-9799-ea508a9fed1a.png",
    "/lovable-uploads/0dc3f3b5-d7b7-4084-936f-2d7163611853.png"
  ];

  const nextImage = () => {
    setMainImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setMainImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-gray-50 rounded-lg overflow-hidden aspect-square">
        <img 
          src={productImages[mainImage]}
          alt="MySup 360 Product" 
          className="w-full h-full object-cover"
        />
        
        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={prevImage}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={nextImage}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-3">
        {productImages.slice(1, 5).map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(index + 1)}
            className={`relative bg-gray-50 rounded-lg overflow-hidden aspect-square border-2 transition-all hover:opacity-80 ${
              mainImage === index + 1 ? 'border-emerald-500' : 'border-transparent'
            }`}
          >
            <img 
              src={image}
              alt={`Product view ${index + 2}`}
              className="w-full h-full object-cover"
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
