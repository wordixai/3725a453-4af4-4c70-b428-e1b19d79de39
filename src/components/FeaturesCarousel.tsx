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
    detail: '个应用',
    activeDays: [6],
    color: 'purple' as const,
    icon: 'clock' as const,
  },
  {
    title: '专心工作',
    time: '9:00',
    detail: '个应用',
    activeDays: [0, 1, 2, 3],
    color: 'pink' as const,
    icon: 'lock' as const,
  },
  {
    title: '不要错过锻炼',
    time: '7:00',
    detail: '3个分类',
    activeDays: [3, 4],
    color: 'green' as const,
    icon: 'tag' as const,
  },
];

const FeaturesCarousel = () => {
  return (
    <section className="py-4 overflow-hidden">
      <div className="flex justify-center px-4">
        <div className="flex">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                marginLeft: index === 0 ? 0 : '-40px',
                zIndex: index,
              }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
