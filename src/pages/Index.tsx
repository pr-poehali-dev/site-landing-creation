import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const dishes = [
  {
    id: 1,
    name: 'Лосось на гриле',
    description: 'Свежий лосось с овощами гриль и авторским соусом',
    price: '890 ₽',
    image: 'https://cdn.poehali.dev/projects/22a018cb-6802-4b23-ba02-6cea54e8872d/files/a19a8c99-d4ae-4141-b9f3-e962b1f85f33.jpg',
    category: 'Основные блюда'
  },
  {
    id: 2,
    name: 'Паста Карбонара',
    description: 'Классическая итальянская паста с беконом и пармезаном',
    price: '650 ₽',
    image: 'https://cdn.poehali.dev/projects/22a018cb-6802-4b23-ba02-6cea54e8872d/files/bb24c193-baae-4856-966c-7daa37619364.jpg',
    category: 'Паста'
  },
  {
    id: 3,
    name: 'Стейк Рибай',
    description: 'Премиальный стейк с картофелем и грибным соусом',
    price: '1290 ₽',
    image: 'https://cdn.poehali.dev/projects/22a018cb-6802-4b23-ba02-6cea54e8872d/files/a19a8c99-d4ae-4141-b9f3-e962b1f85f33.jpg',
    category: 'Основные блюда'
  },
  {
    id: 4,
    name: 'Том Ям',
    description: 'Острый тайский суп с морепродуктами',
    price: '590 ₽',
    image: 'https://cdn.poehali.dev/projects/22a018cb-6802-4b23-ba02-6cea54e8872d/files/bb24c193-baae-4856-966c-7daa37619364.jpg',
    category: 'Супы'
  }
];

const reviews = [
  {
    id: 1,
    name: 'Анна Петрова',
    rating: 5,
    text: 'Потрясающая кухня! Каждое блюдо - произведение искусства. Обязательно вернёмся.',
    date: '15 октября 2024'
  },
  {
    id: 2,
    name: 'Дмитрий Смирнов',
    rating: 5,
    text: 'Отличное обслуживание и вкуснейшие блюда. Рекомендую лосось на гриле!',
    date: '22 октября 2024'
  },
  {
    id: 3,
    name: 'Елена Волкова',
    rating: 5,
    text: 'Уютная атмосфера, внимательный персонал. Стейк просто тает во рту!',
    date: '28 октября 2024'
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    'https://cdn.poehali.dev/projects/22a018cb-6802-4b23-ba02-6cea54e8872d/files/a19a8c99-d4ae-4141-b9f3-e962b1f85f33.jpg',
    'https://cdn.poehali.dev/projects/22a018cb-6802-4b23-ba02-6cea54e8872d/files/bb24c193-baae-4856-966c-7daa37619364.jpg',
    'https://cdn.poehali.dev/projects/22a018cb-6802-4b23-ba02-6cea54e8872d/files/6313ecae-ef62-45f0-9430-fed3d89e9e49.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="UtensilsCrossed" size={28} className="text-accent" />
              <span className="text-2xl font-bold">Гастрономия</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} className="hover:text-accent transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">О нас</button>
              <button onClick={() => scrollToSection('menu')} className="hover:text-accent transition-colors">Меню</button>
              <button onClick={() => scrollToSection('delivery')} className="hover:text-accent transition-colors">Доставка</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-accent transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-accent transition-colors">Контакты</button>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Phone" size={20} />
              </Button>
              <Button className="bg-accent hover:bg-accent/90">
                Забронировать
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <section id="hero" className="relative h-screen mt-16">
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Искусство вкуса
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Авторская кухня и незабываемые впечатления
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg"
              onClick={() => scrollToSection('menu')}
            >
              Посмотреть меню
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">О ресторане</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Добро пожаловать в «Гастрономия» — место, где традиции встречаются с инновациями.
              Наша команда профессиональных поваров создаёт блюда из свежайших продуктов,
              тщательно отобранных у проверенных поставщиков.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы верим, что еда — это не просто питание, а настоящее искусство,
              способное подарить незабываемые эмоции и объединить людей за одним столом.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <Icon name="ChefHat" size={48} className="text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Шеф-повара</h3>
                <p className="text-muted-foreground">
                  Команда профессионалов с международным опытом
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <Icon name="Leaf" size={48} className="text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Свежие продукты</h3>
                <p className="text-muted-foreground">
                  Только натуральные ингредиенты высшего качества
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <Icon name="Heart" size={48} className="text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">С любовью</h3>
                <p className="text-muted-foreground">
                  Каждое блюдо готовится с душой и вниманием
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наше меню</h2>
            <p className="text-lg text-muted-foreground">
              Избранные блюда от наших шеф-поваров
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {dishes.map((dish, index) => (
              <Card
                key={dish.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {dish.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-xs text-accent font-semibold mb-2">
                    {dish.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {dish.description}
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Доставка и оплата</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <Icon name="Truck" size={40} className="text-accent mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Доставка</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <span>Бесплатная доставка от 1500 ₽</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <span>Доставка в течение 60 минут</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <span>Отслеживание заказа онлайн</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <span>Зона доставки: в пределах МКАД</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Icon name="CreditCard" size={40} className="text-accent mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Оплата</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <span>Наличными курьеру</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <span>Картой курьеру</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <span>Онлайн-оплата на сайте</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5" />
                      <span>Безналичный расчёт для компаний</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-accent text-white">
              <CardContent className="p-8 text-center">
                <Icon name="Gift" size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Акция!</h3>
                <p className="text-lg mb-4">
                  Скидка 20% на первый заказ при регистрации на сайте
                </p>
                <p className="text-sm opacity-90">
                  Промокод: FIRST20
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Отзывы гостей</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={review.id}
                className="hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <Icon name="Quote" size={24} className="text-accent/20" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-primary-foreground/80">
                      г. Москва, ул. Примерная, д. 15
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-primary-foreground/80">
                      +7 (495) 123-45-67
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-primary-foreground/80">
                      info@gastronomy.ru
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                    <p className="text-primary-foreground/80">
                      Ежедневно: 11:00 - 23:00
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Мы в социальных сетях</h3>
                <div className="flex gap-4 mb-8">
                  <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-white/20">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-white/20">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-white/20">
                    <Icon name="Phone" size={20} />
                  </Button>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                >
                  Забронировать столик
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="UtensilsCrossed" size={24} className="text-accent" />
              <span className="text-xl font-bold">Гастрономия</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">Публичная оферта</a>
              <a href="#" className="hover:text-accent transition-colors">Пользовательское соглашение</a>
            </div>

            <p className="text-sm text-primary-foreground/60">
              © Гастрономия, 2025
            </p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => scrollToSection('hero')}
        className="fixed bottom-8 right-8 bg-accent text-white p-3 rounded-full shadow-lg hover:bg-accent/90 transition-all hover:scale-110"
        aria-label="Наверх"
      >
        <Icon name="ChevronUp" size={24} />
      </button>
    </div>
  );
};

export default Index;
