import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PricingSection = () => {
  const telegramBotUrl = "https://t.me/SSuperChatBot";

  const plans = [
    {
      name: "Free",
      price: "0,00 ₽",
      popular: false,
      participants: "до 3",
      chats: "1",
      taskCreation: true,
      smartSearch: true,
      taskGrouping: "❌",
      taskEditing: false,
      reminders: false,
      integrations: "❌",
      analytics: "❌",
      support: "FAQ"
    },
    {
      name: "Basic",
      price: "299,00 ₽",
      popular: true,
      participants: "до 7",
      chats: "до 3",
      taskCreation: true,
      smartSearch: true,
      taskGrouping: "ручная",
      taskEditing: false,
      reminders: false,
      integrations: "❌",
      analytics: "Базовая",
      support: "Email"
    },
    {
      name: "Pro",
      price: "499,00 ₽",
      popular: false,
      participants: "до 15",
      chats: "до 7",
      taskCreation: true,
      smartSearch: true,
      taskGrouping: "AI",
      taskEditing: true,
      reminders: true,
      integrations: "Trello и Битрикс24",
      analytics: "Полная",
      support: "Чат + email"
    },
    {
      name: "Team",
      price: "799,00 ₽",
      popular: false,
      participants: "до 30",
      chats: "до 15",
      taskCreation: true,
      smartSearch: true,
      taskGrouping: "AI",
      taskEditing: true,
      reminders: true,
      integrations: "Trello и Битрикс24",
      analytics: "Полная",
      support: "Чат + email"
    },
    {
      name: "Enterprise",
      price: "400 000,00 ₽",
      popular: false,
      participants: "∞",
      chats: "∞",
      taskCreation: true,
      smartSearch: true,
      taskGrouping: "AI + ручная",
      taskEditing: true,
      reminders: "расширенные",
      integrations: "Любые (API)",
      analytics: "Расширенная",
      support: "24/7 VIP"
    }
  ];

  const features = [
    { key: "participants", label: "Кол-во участников" },
    { key: "chats", label: "Кол-во чатов" },
    { key: "taskCreation", label: "Создание задач" },
    { key: "smartSearch", label: "Умный поиск по чатам" },
    { key: "taskGrouping", label: "Группировка задач" },
    { key: "taskEditing", label: "Редактирование задач" },
    { key: "reminders", label: "Напоминания о просроченных задачах" },
    { key: "integrations", label: "Интеграции" },
    { key: "analytics", label: "Аналитика" },
    { key: "support", label: "Поддержка" }
  ];

  const renderValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? <Check className="h-4 w-4 text-green-500 mx-auto" /> : <X className="h-4 w-4 text-red-500 mx-auto" />;
    }
    if (value === "✔") {
      return <Check className="h-4 w-4 text-green-500 mx-auto" />;
    }
    if (value === "❌") {
      return <X className="h-4 w-4 text-red-500 mx-auto" />;
    }
    return value;
  };

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-4">
            <span className="text-4xl font-bold text-blue-800 font-sans">НИТЬ</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 font-sans">
            Тарифные планы
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
            Выберите план, который подходит размеру вашей команды и потребностям проекта с НИТЬ
          </p>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 sm:mb-12">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-50">
                  <TableHead className="font-semibold text-gray-900 font-sans">Функция</TableHead>
                  {plans.map((plan, index) => (
                    <TableHead key={index} className="text-center min-w-[150px]">
                      <div className="space-y-1">
                        <div className={`font-bold text-lg font-sans ${plan.popular ? 'text-blue-600' : 'text-gray-900'}`}>
                          {plan.name}
                        </div>
                        <div className={`text-sm font-semibold font-sans ${plan.popular ? 'text-blue-600' : 'text-gray-600'}`}>
                          {plan.price}
                          <span className="text-xs font-normal">/мес</span>
                        </div>
                        {plan.popular && (
                          <Badge className="bg-blue-600 text-white text-xs font-sans">
                            Популярный
                          </Badge>
                        )}
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature, featureIndex) => (
                  <TableRow key={featureIndex} className="hover:bg-blue-50">
                    <TableCell className="font-medium text-gray-900 font-sans">
                      {feature.label}
                    </TableCell>
                    {plans.map((plan, planIndex) => (
                      <TableCell key={planIndex} className="text-center">
                        {renderValue(plan[feature.key as keyof typeof plan])}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                {/* Action Buttons Row */}
                <TableRow>
                  <TableCell></TableCell>
                  {plans.map((plan, index) => (
                    <TableCell key={index} className="text-center">
                      <Button 
                        className={`w-full text-xs sm:text-sm font-sans ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'border-blue-600 text-blue-600 hover:bg-blue-100'}`}
                        variant={plan.popular ? 'default' : 'outline'}
                        asChild
                      >
                        <a href={telegramBotUrl} target="_blank" rel="noopener noreferrer">
                          {plan.name === 'Free' ? 'Начать бесплатно' : 
                           plan.name === 'Enterprise' ? 'Связаться с нами' : 'Выбрать план'}
                        </a>
                      </Button>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base font-sans">
            Все планы включают 14-дневный бесплатный пробный период
          </p>
          <p className="text-xs sm:text-sm text-gray-500 font-sans">
            Нужна помощь с выбором плана? <a href={telegramBotUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Свяжитесь с нами</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;