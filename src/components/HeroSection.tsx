import { Apple, Shuffle } from 'lucide-react';
import ProductBadge from './ProductBadge';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-4 text-center">
      {/* Product Badges */}
      <div className="flex justify-center items-center gap-8 mb-10">
        <ProductBadge title="Product of the day" rank="1st" />
        <ProductBadge title="Product of the week" rank="1st" />
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
        妈妈说，时间到了
      </h1>

      {/* Subheading */}
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
        妈妈闹钟让你按计划行事——屏蔽干扰，并督促你完成你承诺过的事。
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-center items-center gap-3">
        <button className="flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all shadow-button">
          <Apple className="w-5 h-5" />
          下载 App
        </button>
        <button className="flex items-center gap-2 px-6 py-3.5 bg-card text-foreground border border-border rounded-xl font-medium hover:bg-accent transition-colors shadow-card">
          <Shuffle className="w-5 h-5" />
          换一换
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
