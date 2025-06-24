
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Zap, Eye, Bone } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [selectedPack, setSelectedPack] = useState("30-day");
  const [quantity, setQuantity] = useState(1);

  const packs = {
    "15-day": { price: 1080, savings: 0 },
    "30-day": { price: 2050, savings: 110 },
    "60-day": { price: 3900, savings: 500 }
  };

  const benefits = [
    { icon: <Heart className="w-8 h-8" />, label: "Gut Health" },
    { icon: <Zap className="w-8 h-8" />, label: "Energy & Focus" },
    { icon: <Eye className="w-8 h-8" />, label: "Immunity Boost" },
    { icon: <Bone className="w-8 h-8" />, label: "Bone & Eye Health" }
  ];

  const ingredients = [
    {
      category: "Greens & Superfoods",
      items: "Spirulina, Moringa, Wheatgrass",
      image: "/lovable-uploads/f22ca76f-b5fb-4958-aa42-a657662d1519.png"
    },
    {
      category: "Antioxidants & Fruits", 
      items: "Berries, Amla, Pomegranate",
      image: "/lovable-uploads/a82e52cd-34ac-41dd-99aa-a12bd2b65f77.png"
    },
    {
      category: "Root Vegetables",
      items: "Carrots, Sweet Potato, Beetroot", 
      image: "/lovable-uploads/e615aa42-04e9-4cd3-9799-ea508a9fed1a.png"
    }
  ];

  const reviews = [
    {
      name: "Shri",
      rating: 5,
      date: "05/31/2025",
      review: "Overall a complete nutrition solution. Been using for more than a year, it's a great way to ensure you are managing your macro and micro nutritions."
    },
    {
      name: "Nikita", 
      rating: 5,
      date: "05/14/2025",
      review: "Amazing supplement! Overall is a great buy! I love the quantity and the taste. When you mix it in water it turns green which I thought was going to taste bad but to my surprise it was pretty tasty."
    }
  ];

  const faqs = [
    {
      question: "Is MySup safe for daily use?",
      answer: "Yes, MySup 360 is formulated for daily consumption with natural ingredients and is completely safe for regular use."
    },
    {
      question: "Can I mix it with smoothies or milk?",
      answer: "Absolutely! You can mix MySup 360 with water, smoothies, milk, or any cold beverage of your choice."
    },
    {
      question: "Is it safe for diabetics?",
      answer: "MySup 360 contains no added sugar and is diabetic-friendly. However, we recommend consulting with your healthcare provider."
    },
    {
      question: "Does it replace a multivitamin?",
      answer: "MySup 360 provides comprehensive nutrition with 60+ ingredients including vitamins and minerals, making it an excellent all-in-one solution."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-emerald-100 text-emerald-800 mb-4">Clinically Tested</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                MySup 360 – Daily Superfood Blend
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                One sachet. 60+ powerful nutrients. All-in-one wellness.
              </p>
              
              {/* Pack Selection */}
              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-gray-900">Choose Your Pack:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {Object.entries(packs).map(([pack, details]) => (
                    <Card 
                      key={pack}
                      className={`cursor-pointer transition-all ${selectedPack === pack ? 'ring-2 ring-emerald-500 bg-emerald-50' : 'hover:shadow-md'}`}
                      onClick={() => setSelectedPack(pack)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="font-semibold capitalize">{pack} Pack</div>
                        <div className="text-2xl font-bold text-emerald-600">₹{details.price}</div>
                        {details.savings > 0 && (
                          <div className="text-sm text-emerald-600">Save ₹{details.savings}</div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quantity & CTA */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <div className="text-lg font-bold">
                  Total: ₹{(packs[selectedPack].price * quantity).toLocaleString()}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                  Buy Now
                </Button>
                <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Subscribe & Save 10%
                </Button>
              </div>
            </div>

            <div className="text-center">
              <img 
                src="/lovable-uploads/3d54c6c0-4097-41e4-8186-4188e36a66b8.png" 
                alt="MySup 360 Product" 
                className="max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">One Sachet, Numerous Benefits</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{benefit.label}</h3>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/be420a16-9f77-493d-9bbb-89ed7f1321ba.png"
              alt="Woman drinking MySup in car"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Clinical Results */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/0dc3f3b5-d7b7-4084-936f-2d7163611853.png"
                alt="Clinical Results"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Badge className="bg-emerald-100 text-emerald-800 mb-4">Clinically Proven Results</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Science-Backed Wellness</h2>
              <p className="text-gray-600 mb-6">
                Our clinical study with 25 participants showed remarkable improvements in just 60 days. 
                MySup 360 delivers measurable results you can feel.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">92%</div>
                  <div className="text-sm text-gray-600">Vitamin B12 Increase</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">67%</div>
                  <div className="text-sm text-gray-600">Vitamin D3 Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Inside</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              60+ carefully selected ingredients working in synergy to support your complete wellness journey. 
              From superfoods to probiotics, every nutrient has a purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {ingredients.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{category.category}</h3>
                  <p className="text-gray-600">{category.items}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <h4 className="font-semibold text-emerald-600 mb-2">Probiotics & Prebiotics</h4>
              <p className="text-gray-600">3 Billion CFU + Fiber for gut health</p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-emerald-600 mb-2">Vitamins & Minerals</h4>
              <p className="text-gray-600">B12, D3, Magnesium, Iron, Zinc</p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-emerald-600 mb-2">Adaptogens</h4>
              <p className="text-gray-600">Ashwagandha, Brahmi for stress support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Multiple Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/1eeeb078-c554-40ea-9819-2a5c32706c50.png"
                alt="Multiple Benefits"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1 Sachet, 63+ Ingredients, Multiple Benefits
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Improves Gut Health</h4>
                    <p className="text-gray-600">Probiotics and prebiotics support digestive wellness</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reduces Bad Cholesterol</h4>
                    <p className="text-gray-600">Natural ingredients help maintain healthy cholesterol levels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Boosts Energy</h4>
                    <p className="text-gray-600">B vitamins and adaptogens for sustained energy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Improves Immunity</h4>
                    <p className="text-gray-600">Antioxidants and vitamins strengthen immune system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Use</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-emerald-600 font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold mb-2">Mix</h3>
              <p className="text-gray-600">Add one sachet to 120ml of water or cold beverage</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-emerald-600 font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold mb-2">Stir</h3>
              <p className="text-gray-600">Stir well until completely dissolved</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-emerald-600 font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold mb-2">Enjoy</h3>
              <p className="text-gray-600">Drink in the morning or anytime during the day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/5b31e8e3-dc56-4ef2-8742-a85e8cb5578e.png"
                alt="Features"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Clean Label Promise</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <span className="font-semibold">100% Plant-Based & Vegan</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <span className="font-semibold">Non-GMO & Gluten-Free</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <span className="font-semibold">No Preservatives, Artificial Flavours & Colours</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <span className="font-semibold">WHO GMP Certified</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <span className="font-semibold">USFDA Approved Manufacturing Facility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[1,2,3,4,5].map((star) => (
                <Heart key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600">Based on 258 reviews</span>
            </div>
            <p className="text-gray-600">80% repeat customers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-600">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <Heart key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.review}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-emerald-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Start Your Wellness Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of customers who have transformed their health with MySup 360
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              Subscribe & Save
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
