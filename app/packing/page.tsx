import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X } from "lucide-react"

export default function PackingPage() {
  const packingCategories = [
    {
      id: "essentials",
      title: "Essentials",
      items: [
        { name: "ID/Driver's License", description: "Required for activities and check-in" },
        { name: "Credit/Debit Cards", description: "For purchases during the trip" },
        { name: "Cash", description: "Some places may only accept cash" },
        { name: "Health Insurance Card", description: "In case of emergency" },
        { name: "Medications", description: "Any prescription or regular medications" },
        { name: "Phone & Charger", description: "Keep in touch and take photos" },
        { name: "Portable Battery Pack", description: "For charging on the go" },
      ],
    },
    {
      id: "clothing",
      title: "Clothing",
      items: [
        { name: "Hiking Boots/Shoes", description: "Sturdy footwear with good traction" },
        { name: "Comfortable Walking Shoes", description: "For around town" },
        { name: "Hiking Socks (3-4 pairs)", description: "Wool or synthetic blend recommended" },
        { name: "T-shirts/Tank Tops", description: "Lightweight, moisture-wicking" },
        { name: "Long-sleeve Shirts", description: "For layering and sun protection" },
        { name: "Hiking Pants/Shorts", description: "Quick-dry, comfortable" },
        { name: "Swimsuit", description: "For hot tubs or water activities" },
        { name: "Light Jacket/Fleece", description: "Evenings can be cool" },
        { name: "Rain Jacket", description: "Afternoon showers are common" },
        { name: "Hat with Brim", description: "Sun protection" },
        { name: "Sunglasses", description: "UV protection" },
        { name: "Sleepwear", description: "Comfortable for shared accommodations" },
        { name: "Underwear & Socks", description: "Pack extra" },
      ],
    },
    {
      id: "gear",
      title: "Gear",
      items: [
        { name: "Daypack/Backpack", description: "For hiking and day trips" },
        { name: "Water Bottle/Hydration System", description: "Stay hydrated at altitude" },
        { name: "Sunscreen (SPF 30+)", description: "Sun is stronger at altitude" },
        { name: "Lip Balm with SPF", description: "Prevent chapped lips" },
        { name: "Insect Repellent", description: "For hiking trails" },
        { name: "First Aid Kit", description: "Basic supplies for minor injuries" },
        { name: "Headlamp/Flashlight", description: "For evening activities" },
        { name: "Camera", description: "Capture memories" },
        { name: "Binoculars", description: "For wildlife viewing" },
        { name: "Reusable Shopping Bag", description: "For groceries and souvenirs" },
      ],
    },
    {
      id: "toiletries",
      title: "Toiletries",
      items: [
        { name: "Toothbrush & Toothpaste", description: "" },
        { name: "Shampoo & Conditioner", description: "Travel size" },
        { name: "Body Wash/Soap", description: "Travel size" },
        { name: "Deodorant", description: "" },
        { name: "Hairbrush/Comb", description: "" },
        { name: "Hair Ties/Clips", description: "If needed" },
        { name: "Personal Hygiene Items", description: "" },
        { name: "Hand Sanitizer", description: "For on-the-go" },
        { name: "Wet Wipes", description: "Useful for hiking" },
        { name: "Travel Towel", description: "Quick-dry microfiber" },
      ],
    },
    {
      id: "donotbring",
      title: "Do Not Bring",
      items: [
        { name: "Expensive Jewelry", description: "May get lost during activities" },
        { name: "Formal Clothing", description: "Not needed for this trip" },
        { name: "Heavy Books", description: "Use e-readers or audiobooks instead" },
        { name: "Hairdryers", description: "Provided at accommodations" },
        { name: "Excessive Cash", description: "Most places accept cards" },
        { name: "Illegal Substances", description: "Even if legal in Colorado, not allowed on our trip" },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-forest">Packing List</h1>

      <div className="mb-8">
        <Card className="border-forest/20 shadow-md">
          <CardHeader className="bg-forest/10 rounded-t-lg">
            <CardTitle className="text-forest">Important Notes</CardTitle>
            <CardDescription>Read before packing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <p>
              Colorado's mountain weather can change quickly. Be prepared with layers that you can add or remove as
              needed. At higher elevations, the sun is more intense, so sun protection is essential.
            </p>
            <p>
              The average temperature in July ranges from 45°F (7°C) at night to 75°F (24°C) during the day. Afternoon
              thunderstorms are common, so pack rain gear even if the forecast looks clear.
            </p>
            <p>
              Pack light but smart - you'll need to carry your own luggage, and storage space in the Airbnbs may be
              limited.
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="essentials" className="w-full">
        <div className="relative">
          <div className="overflow-x-auto pb-2">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-forest/10 p-1 text-forest min-w-full md:min-w-0 md:grid md:grid-cols-3 lg:grid-cols-5">
              {packingCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-husker data-[state=active]:text-white whitespace-nowrap"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        {packingCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <Card className="border-forest/20 shadow-md">
              <CardHeader className="bg-forest/10 rounded-t-lg">
                <CardTitle className="text-forest">{category.title}</CardTitle>
                <CardDescription>
                  {category.id === "donotbring" ? "Items to leave at home" : "Recommended items to pack"}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 border-b border-forest/10 pb-4 last:border-0 last:pb-0"
                    >
                      {category.id === "donotbring" ? (
                        <X className="h-5 w-5 text-husker mt-0.5 flex-shrink-0" />
                      ) : (
                        <Check className="h-5 w-5 text-forest mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <div className="font-medium">{item.name}</div>
                        {item.description && <div className="text-sm text-muted-foreground">{item.description}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
