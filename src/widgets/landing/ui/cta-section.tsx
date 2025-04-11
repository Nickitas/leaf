import { Button } from '@heroui/button';
import { NewsletterForm } from '../ui/newsletter-form';

export const CTASection = () => {
  return (
    <section className="relative py-20 bg-green-600 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full mix-blend-overlay -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы сделать мир чище?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Присоединяйтесь к нашему сообществу или поддержите один из экологических проектов прямо сейчас
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="bordered">
              Поддержать проект
            </Button>
            <Button size="lg" variant="bordered" className="bg-transparent border-white text-white hover:bg-white hover:text-green-600">
              Стать волонтером
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-white font-medium mb-4">
              Подпишитесь на экологические новости
            </h3>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
};