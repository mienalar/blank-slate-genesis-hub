
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Clock, BarChart3 } from "lucide-react";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";

const LandingHero = () => {
  const telegramBotUrl = "https://t.me/chatsupercopilotbot";

  const features = [
    {
      icon: MessageSquare,
      title: "Ежедневные обсуждения",
      description: "Автоматические ежедневные опросы через Telegram-бота"
    },
    {
      icon: Users,
      title: "Управление командой",
      description: "Простая настройка команды и управление участниками"
    },
    {
      icon: Clock,
      title: "Умные напоминания",
      description: "ИИ-напоминания о дедлайнах и задачах"
    },
    {
      icon: BarChart3,
      title: "ИИ-сводки",
      description: "Интеллектуальные ежедневные сводки прогресса"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="px-4 sm:px-6 py-4 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">НИТЬ</h1>
          </div>
          <Button variant="outline" asChild>
            <a href={telegramBotUrl} target="_blank" rel="noopener noreferrer">
              Вход
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Автоматизируйте
            <span className="text-blue-600"> ежедневные обсуждения</span> команды
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Telegram-бот с ИИ, который экономит командам часы каждую неделю, 
            автоматизируя рутинные задачи проектного управления, обновления статусов и командную коммуникацию.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-6 sm:px-8 py-3 w-full sm:w-auto" asChild>
              <a href={telegramBotUrl} target="_blank" rel="noopener noreferrer">
                Начать бесплатно
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-6 sm:px-8 py-3 w-full sm:w-auto" asChild>
              <a href={telegramBotUrl} target="_blank" rel="noopener noreferrer">
                Смотреть демо
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Всё необходимое для синхронизации команды
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader className="pb-3">
                  <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
                  <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* How It Works */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Как это работает
          </h3>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-0">Добавьте бота в Telegram-группу</h4>
                <p className="text-gray-600 text-sm sm:text-base">Просто добавьте нашего бота в существующую групповую беседу команды</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-0">Настройте ежедневные обсуждения</h4>
                <p className="text-gray-600 text-sm sm:text-base">Установите предпочитаемое время для ежедневных опросов и уведомлений команды</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-0">Получайте ИИ-аналитику</h4>
                <p className="text-gray-600 text-sm sm:text-base">Получайте интеллектуальные сводки и практические напоминания</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Готовы трансформировать командную коммуникацию?
          </h3>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
            Присоединяйтесь к командам, экономящим 5+ часов в неделю с автоматизированными обсуждениями
          </p>
          <Button size="lg" variant="secondary" className="px-6 sm:px-8 py-3 w-full sm:w-auto" asChild>
            <a href={telegramBotUrl} target="_blank" rel="noopener noreferrer">
              Начать бесплатный пробный период
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingHero;
