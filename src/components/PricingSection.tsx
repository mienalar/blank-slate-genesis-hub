import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const PricingSection = () => {
  const telegramBotUrl = "https://t.me/chatsupercopilotbot";

  const mainPlans = [
    {
      name: "Free",
      price: "0,00 ₽",
      popular: false,
      features: [
        { name: "Размер команды", value: "До 4", included: true },
        { name: "Чаты", value: "1", included: true },
        { name: "Быстрое создание задач вручную", included: true },
        { name: "История задач", value: "7 дней", included: true },
        { name: "Экспорт в Google Sheets", included: true },
        { name: "Умные напоминания о задачах", value: "1 в день", included: true },
        { name: "Сводки задач в чат", value: "Ежедневно", included: true },
        { name: "Поддержка", value: "Telegram", included: true },
        { name: "Общий обзор задач по всей команде", included: true },
        { name: "Автоматическое распознавание задач в чате", included: true },
        { name: "Группировка задач по темам и меткам", included: false },
        { name: "Метки и тред-задачи", included: false }
      ]
    },
    {
      name: "Start",
      price: "299,00 ₽",
      popular: true,
      features: [
        { name: "Размер команды", value: "До 7", included: true },
        { name: "Чаты", value: "До 3", included: true },
        { name: "Быстрое создание задач вручную", included: true },
        { name: "История задач", value: "30 дней", included: true },
        { name: "Экспорт в Google Sheets", included: true },
        { name: "Умные напоминания о задачах", value: "Много", included: true },
        { name: "Сводки задач в чат", value: "ежедневно / еженедельно", included: true },
        { name: "Поддержка", value: "Telegram", included: true },
        { name: "Общий обзор задач по всей команде", included: true },
        { name: "Автоматическое распознавание задач в чате", included: true },
        { name: "Группировка задач по темам и меткам", included: true },
        { name: "Метки и тред-задачи", included: true }
      ],
      additionalFeatures: [
        { name: "Интеграции (Trello, Битрикс24)", included: true },
        { name: "Сводки об активности команды", included: true },
        { name: "Экспорт задач в Notion, CSV и PDF", included: true },
        { name: "Прикрепление файлов к задачам", included: true }
      ]
    },
    {
      name: "Pro",
      price: "499,00 ₽",
      popular: false,
      features: [
        { name: "Размер команды", value: "До 15", included: true },
        { name: "Чаты", value: "До 7", included: true },
        { name: "Быстрое создание задач вручную", included: true },
        { name: "История задач", value: "60 дней", included: true },
        { name: "Экспорт в Google Sheets", included: true },
        { name: "Умные напоминания о задачах", value: "Много", included: true },
        { name: "Сводки задач в чат", value: "ежедневно / еженедельно", included: true },
        { name: "Поддержка", value: "Telegram", included: true },
        { name: "Общий обзор задач по всей команде", included: true },
        { name: "Автоматическое распознавание задач в чате", included: true },
        { name: "Группировка задач по темам и меткам", included: true },
        { name: "Метки и тред-задачи", included: true }
      ],
      additionalFeatures: [
        { name: "Интеграции (Trello, Битрикс24)", included: true },
        { name: "Сводки об активности команды", included: true },
        { name: "Экспорт задач в Notion, CSV и PDF", included: true },
        { name: "Прикрепление файлов к задачам", included: true },
        { name: "Аналитика и фильтры по статусу, срокам, участникам", included: true },
        { name: "Автоархив задач", included: true }
      ]
    },
    {
      name: "Team",
      price: "799,00 ₽",
      popular: false,
      features: [
        { name: "Размер команды", value: "До 30", included: true },
        { name: "Чаты", value: "До 15", included: true },
        { name: "Быстрое создание задач вручную", included: true },
        { name: "История задач", value: "Без ограничений", included: true },
        { name: "Экспорт в Google Sheets", included: true },
        { name: "Умные напоминания о задачах", value: "Много", included: true },
        { name: "Сводки задач в чат", value: "ежедневно / еженедельно / кастомизированно", included: true },
        { name: "Поддержка", value: "Telegram", included: true },
        { name: "Общий обзор задач по всей команде", included: true },
        { name: "Автоматическое распознавание задач в чате", included: true },
        { name: "Группировка задач по темам и меткам", included: true },
        { name: "Метки и тред-задачи", included: true }
      ],
      additionalFeatures: [
        { name: "Интеграции (Trello, Битрикс24)", included: true },
        { name: "Сводки об активности команды", included: true },
        { name: "Экспорт задач в Notion, CSV и PDF", included: true },
        { name: "Прикрепление файлов к задачам", included: true },
        { name: "Аналитика и фильтры по статусу, срокам, участникам", included: true },
        { name: "Автоархив задач", included: true },
        { name: "Ролевые политики", included: true },
        { name: "Внешние участники", included: true },
        { name: "SLA-поддержка", included: true }
      ]
    }
  ];

  const enterprisePlan = {
    name: "Enterprise",
    price: "от 400 000,00 ₽",
    popular: false,
    features: [
      { name: "Размер команды", value: "Без ограничений", included: true },
      { name: "Чаты", value: "Без ограничений", included: true },
      { name: "Быстрое создание задач вручную", included: true },
      { name: "История задач", value: "Без ограничений", included: true },
      { name: "Экспорт в Google Sheets", included: true },
      { name: "Умные напоминания о задачах", value: "Много", included: true },
      { name: "Сводки задач в чат", value: "ежедневно / еженедельно / кастомизированно", included: true },
      { name: "Поддержка", value: "Аккаунт менеджер", included: true },
      { name: "Общий обзор задач по всей команде", included: true },
      { name: "Автоматическое распознавание задач в чате", included: true },
      { name: "Группировка задач по темам и меткам", included: true },
      { name: "Метки и тред-задачи", included: true }
    ],
    additionalFeatures: [
      { name: "Интеграции (Trello, Битрикс24)", included: true },
      { name: "Сводки об активности команды", included: true },
      { name: "Экспорт задач в Notion, CSV и PDF", included: true },
      { name: "Прикрепление файлов к задачам", included: true },
      { name: "Аналитика и фильтры по статусу, срокам, участникам", included: true },
      { name: "Автоархив задач", included: true },
      { name: "Ролевые политики", included: true },
      { name: "Внешние участники", included: true },
      { name: "SLA-поддержка", included: true },
      { name: "White-label", included: true },
      { name: "Гибкая настройка интерфейса и логики под себя", included: true },
      { name: "Выделенный менеджер", included: true },
      { name: "Событийное логирование", included: true },
      { name: "Индивидуальные интеграции под ваши системы", included: true },
      { name: "API для подключения к своим инструментам", included: true }
    ]
  };

  const renderPlanCard = (plan: any) => (
    <Card className={`relative h-full ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : ''}`}>
      {plan.popular && (
        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600">
          Популярный
        </Badge>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
        <CardDescription className="text-2xl sm:text-3xl font-bold text-blue-600">
          {plan.price}
          <span className="text-xs sm:text-sm font-normal text-gray-500">/мес</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-1 gap-2">
          {plan.features.map((feature: any, featureIndex: number) => (
            <div key={featureIndex} className="flex items-start space-x-2 text-xs sm:text-sm">
              {feature.included ? (
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mt-0.5 flex-shrink-0" />
              ) : (
                <X className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 mt-0.5 flex-shrink-0" />
              )}
              <div className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                <div className="font-medium">{feature.name}</div>
                {feature.value && (
                  <div className="text-xs text-gray-500">{feature.value}</div>
                )}
              </div>
            </div>
          ))}
          {plan.additionalFeatures && plan.additionalFeatures.map((feature: any, featureIndex: number) => (
            <div key={`additional-${featureIndex}`} className="flex items-start space-x-2 text-xs sm:text-sm">
              {feature.included ? (
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mt-0.5 flex-shrink-0" />
              ) : (
                <X className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 mt-0.5 flex-shrink-0" />
              )}
              <div className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                <div className="font-medium">{feature.name}</div>
                {feature.value && (
                  <div className="text-xs text-gray-500">{feature.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>
        <Button 
          className={`w-full mt-6 text-sm sm:text-base ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
          variant={plan.popular ? 'default' : 'outline'}
          asChild
        >
          <a href={telegramBotUrl} target="_blank" rel="noopener noreferrer">
            {plan.name === 'Free' ? 'Начать бесплатно' : 
             plan.name === 'Enterprise' ? 'Связаться с нами' : 'Выбрать план'}
          </a>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Тарифные планы
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Выберите план, который подходит размеру вашей команды и потребностям проекта
          </p>
        </div>

        {/* Main Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {mainPlans.map((plan, index) => (
            <div key={index}>
              {renderPlanCard(plan)}
            </div>
          ))}
        </div>

        {/* Enterprise Plan - Separate Section */}
        <div className="border-t pt-8 sm:pt-12">
          <div className="text-center mb-6 sm:mb-8">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Корпоративные решения</h4>
            <p className="text-gray-600 text-sm sm:text-base">Для крупных организаций с особыми требованиями</p>
          </div>
          <div className="max-w-2xl mx-auto">
            {renderPlanCard(enterprisePlan)}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
            Все планы включают 14-дневный бесплатный пробный период
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Нужна помощь с выбором плана? <a href={telegramBotUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Свяжитесь с нами</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
