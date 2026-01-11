import FeatureCard from './FeatureCard';

const features = [
  {
    title: '按时吃药',
    time: '19:00',
    detail: '5个应用',
    activeDays: [5, 6],
    color: 'blue' as const,
    icon: 'link' as const,
  },
  {
    title: '按时睡觉',
    time: '22:00',
    detail: '8个应用',
    activeDays: [1, 2, 3, 4, 5, 6],
    color: 'purple' as const,
    icon: 'clock' as const,
  },
  {
    title: '专心工作',
    time: '9:00',
    detail: '3个应用',
    activeDays: [1, 2, 3, 4],
    color: 'pink' as const,
    icon: 'lock' as const,
  },
  {
    title: '不要错过锻炼',
    time: '7:00',
    detail: '3个分类',
    activeDays: [1, 2, 3, 4, 5],
    color: 'green' as const,
    icon: 'tag' as const,
  },
];

const FeaturesCarousel = () => {
  return (
    <section className="py-8 overflow-hidden">
      <div className="flex gap-6 px-4 overflow-x-auto pb-4 scrollbar-hide justify-center">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesCarousel;
