import { Leaf, Flame, Droplets } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Ideal for a",
      subtitle: "healthy diet"
    },
    {
      icon: <Flame className="w-8 h-8 text-primary" />,
      title: "Low calorie",
      subtitle: "and nutritious"
    },
    {
      icon: <Droplets className="w-8 h-8 text-primary" />,
      title: "No dairy fat",
      subtitle: "plant-based options"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-12 justify-center items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-4 px-8 pt-8 md:pt-0 first:pt-0 w-full md:w-auto justify-center">
            <div className="flex-shrink-0 bg-light-pink p-3 rounded-2xl">
              {feature.icon}
            </div>
            <div className="text-sm font-medium text-text-main">
              <p>{feature.title}</p>
              <p className="text-text-muted">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
