import { Link, Clock, Lock, Tag } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  time: string;
  detail: string;
  activeDays: number[];
  color: 'blue' | 'purple' | 'pink' | 'green';
  icon: 'link' | 'clock' | 'lock' | 'tag';
}

const colorClasses = {
  blue: 'bg-card-blue',
  purple: 'bg-card-purple',
  pink: 'bg-card-pink',
  green: 'bg-card-green',
};

const iconMap = {
  link: Link,
  clock: Clock,
  lock: Lock,
  tag: Tag,
};

const days = ['一', '二', '三', '四', '五', '六', '日'];

const FeatureCard = ({ title, time, detail, activeDays, color, icon }: FeatureCardProps) => {
  const IconComponent = iconMap[icon];

  return (
    <div className={`${colorClasses[color]} rounded-3xl p-5 min-w-[300px] w-[300px] h-[210px] flex-shrink-0 relative overflow-hidden`}>
      {/* Emoji avatar */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-card/80 rounded-xl flex items-center justify-center text-2xl">
        👩
      </div>

      {/* Icon and Title */}
      <div className="flex items-center gap-2 mb-6">
        <IconComponent className="w-5 h-5 text-foreground/60" />
        <h3 className="font-semibold text-lg text-foreground">{title}</h3>
      </div>

      {/* Time and Detail */}
      <div className="space-y-1 mb-6">
        <div className="flex items-center gap-2 text-foreground/60">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{time}</span>
        </div>
        <div className="flex items-center gap-2 text-foreground/60">
          <Lock className="w-4 h-4" />
          <span className="text-sm">{detail}</span>
        </div>
      </div>

      {/* Days selector */}
      <div className="absolute bottom-5 left-5 right-5">
        <div className="flex gap-1">
          {days.map((day, index) => (
            <button
              key={day}
              className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${
                activeDays.includes(index)
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-foreground/30'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
