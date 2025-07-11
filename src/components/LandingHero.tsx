
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Clock, BarChart3 } from "lucide-react";
import PricingSection from "./PricingSection";

const LandingHero = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Ежедневные планёрки",
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
      <header className="px-6 py-4 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">ChatCopilot</h1>
          </div>
          <Button variant="outline">Вход</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Автоматизируйте
            <span className="text-blue-600"> ежедневные планёрки</span> команды
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Telegram-бот с ИИ, который экономит командам МСБ часы каждую неделю, 
            автоматизируя рутинные задачи проектного управления, обновления статусов и командную коммуникацию.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="px-8 py-3">
              Начать бесплатно
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Всё необходимое для синхронизации команды
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* How It Works */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Как это работает
          </h3>
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Добавьте бота в Telegram-группу</h4>
                <p className="text-gray-600">Просто добавьте нашего бота в существующую групповую беседу команды</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Настройте ежедневные планёрки</h4>
                <p className="text-gray-600">Установите предпочитаемое время для ежедневных опросов и уведомлений команды</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">Получайте ИИ-аналитику</h4>
                <p className="text-gray-600">Получайте интеллектуальные сводки и практические напоминания</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Готовы трансформировать командную коммуникацию?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Присоединяйтесь к командам МСБ, экономящим 5+ часов в неделю с автоматизированными планёрками
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Начать бесплатный пробный период
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingHero;
