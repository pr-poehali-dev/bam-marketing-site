import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            БАМ
          </h1>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            <a href="#clients" className="text-sm font-medium hover:text-primary transition-colors">Клиенты</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">Связаться</Button>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                <a 
                  href="#services" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Услуги
                </a>
                <a 
                  href="#about" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  О нас
                </a>
                <a 
                  href="#clients" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Клиенты
                </a>
                <a 
                  href="#reviews" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Отзывы
                </a>
                <a 
                  href="#contact" 
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </a>
                <Button className="mt-4" onClick={() => setMobileMenuOpen(false)}>Связаться</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-gradient bg-[length:400%_400%]"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Мощный <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">маркетинг</span> для вашего бизнеса
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Превращаем идеи в результаты. Комплексные маркетинговые решения, которые работают.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8">
                  Начать проект
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/6de7ee1a-a564-4a0a-9993-864232566ef4/files/8b96bebd-4e80-47e2-bea3-dbf5a9825d1e.jpg" 
                alt="Marketing team"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-sm font-semibold text-muted-foreground mb-12 uppercase tracking-wider">
            Нам доверяют
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            {['Яндекс', 'Сбер', 'ВТБ', 'Тинькофф', 'МТС'].map((client) => (
              <div key={client} className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр маркетинговых решений для роста вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'TrendingUp',
                title: 'Digital-маркетинг',
                description: 'Комплексное продвижение в digital-среде: SEO, контекстная реклама, SMM',
                gradient: 'from-primary to-primary/80'
              },
              {
                icon: 'Megaphone',
                title: 'Брендинг',
                description: 'Создание сильного бренда: нейминг, фирменный стиль, позиционирование',
                gradient: 'from-secondary to-secondary/80'
              },
              {
                icon: 'BarChart3',
                title: 'Аналитика',
                description: 'Глубокий анализ рынка, конкурентов и эффективности маркетинговых кампаний',
                gradient: 'from-accent to-accent/80'
              },
              {
                icon: 'Target',
                title: 'Performance',
                description: 'Настройка и управление эффективными рекламными кампаниями с ROMI от 300%',
                gradient: 'from-primary/80 to-secondary'
              },
              {
                icon: 'Users',
                title: 'SMM',
                description: 'Создание контента, ведение сообществ, работа с блогерами и инфлюенсерами',
                gradient: 'from-secondary/80 to-accent'
              },
              {
                icon: 'Sparkles',
                title: 'Креатив',
                description: 'Разработка креативных концепций и визуального контента для ваших кампаний',
                gradient: 'from-accent/80 to-primary'
              }
            ].map((service, idx) => (
              <Card 
                key={idx} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">О нас</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                БАМ — это команда профессионалов с более чем 10-летним опытом в маркетинге. 
                Мы помогли более 500 компаниям достичь своих бизнес-целей.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                    10
                  </div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-4xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">Специалистов</div>
                </div>
              </div>
              <Button size="lg">Узнать больше</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 border-0 bg-white/60 backdrop-blur">
                <Icon name="Award" size={32} className="text-primary mb-4" />
                <h4 className="font-bold mb-2">Награды</h4>
                <p className="text-sm text-muted-foreground">Победители Effie Awards 2023</p>
              </Card>
              <Card className="p-6 border-0 bg-white/60 backdrop-blur mt-8">
                <Icon name="Zap" size={32} className="text-secondary mb-4" />
                <h4 className="font-bold mb-2">Инновации</h4>
                <p className="text-sm text-muted-foreground">Используем AI и Big Data</p>
              </Card>
              <Card className="p-6 border-0 bg-white/60 backdrop-blur">
                <Icon name="Heart" size={32} className="text-accent mb-4" />
                <h4 className="font-bold mb-2">Лояльность</h4>
                <p className="text-sm text-muted-foreground">95% клиентов остаются с нами</p>
              </Card>
              <Card className="p-6 border-0 bg-white/60 backdrop-blur mt-8">
                <Icon name="Globe" size={32} className="text-primary mb-4" />
                <h4 className="font-bold mb-2">География</h4>
                <p className="text-sm text-muted-foreground">Работаем по всему миру</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши партнёры</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Анна Петрова',
                position: 'CEO, TechStart',
                avatar: '👩‍💼',
                rating: 5,
                text: 'БАМ помог нам увеличить продажи на 300% за 6 месяцев. Профессиональная команда, отличные результаты!'
              },
              {
                name: 'Михаил Соколов',
                position: 'Директор по маркетингу, RetailPro',
                avatar: '👨‍💼',
                rating: 5,
                text: 'Работаем с БАМ уже 3 года. Всегда свежие идеи, креативные решения и измеримые результаты.'
              },
              {
                name: 'Елена Иванова',
                position: 'Founder, BeautyBrand',
                avatar: '👩',
                rating: 5,
                text: 'Лучшее маркетинговое агентство, с которым мы работали. Рекомендуем всем нашим партнёрам!'
              }
            ].map((review, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-shadow border-0 bg-white/80">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{review.avatar}</div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.position}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-white/90">Готовы обсудить ваш проект? Напишите нам!</p>
          </div>
          <Card className="p-8 md:p-12 border-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Ваше имя" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="text-lg py-6"
                  required
                />
              </div>
              <div>
                <Input 
                  type="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="text-lg py-6"
                  required
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Расскажите о вашем проекте" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className="text-lg resize-none"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg py-6">
                Отправить заявку
              </Button>
            </form>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Mail" size={32} className="mx-auto mb-3 text-white/90" />
              <p className="font-semibold mb-1">Email</p>
              <p className="text-white/80">info@bam.agency</p>
            </div>
            <div>
              <Icon name="Phone" size={32} className="mx-auto mb-3 text-white/90" />
              <p className="font-semibold mb-1">Телефон</p>
              <p className="text-white/80">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="MapPin" size={32} className="mx-auto mb-3 text-white/90" />
              <p className="font-semibold mb-1">Офис</p>
              <p className="text-white/80">Москва, Тверская 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground text-white">
        <div className="container mx-auto text-center">
          <p className="text-white/60">© 2024 БАМ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}