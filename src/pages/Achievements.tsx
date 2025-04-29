
import Header from "@/components/Header";
import BadgeCard from "@/components/BadgeCard";
import { badges } from "@/data/courseData";

const Achievements = () => {
  const unlockedBadges = badges.filter(badge => badge.unlocked);
  const lockedBadges = badges.filter(badge => !badge.unlocked);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container py-6 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Suas conquistas</h1>
          
          {unlockedBadges.length > 0 ? (
            <>
              <h2 className="text-lg font-semibold mb-4">Conquistas desbloqueadas</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
                {unlockedBadges.map(badge => (
                  <BadgeCard
                    key={badge.id}
                    title={badge.title}
                    description={badge.description}
                    icon={badge.icon}
                    unlocked={true}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="bg-muted rounded-lg p-6 mb-10 text-center">
              <h2 className="font-medium mb-2">Você ainda não tem conquistas</h2>
              <p className="text-muted-foreground text-sm">
                Complete as lições e desafios para ganhar seus primeiros selos!
              </p>
            </div>
          )}
          
          <h2 className="text-lg font-semibold mb-4">Próximas conquistas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {lockedBadges.map(badge => (
              <BadgeCard
                key={badge.id}
                title={badge.title}
                description={badge.description}
                icon={badge.icon}
                unlocked={false}
                progress={badge.progress}
              />
            ))}
          </div>
          
          <div className="mt-10 bg-muted/50 border rounded-lg p-6">
            <h2 className="font-semibold mb-3">Como ganhar conquistas?</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-brand-purple">•</span>
                <span>Complete as lições dos módulos</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-purple">•</span>
                <span>Faça os desafios propostos ao final das aulas</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-purple">•</span>
                <span>Aplique os conhecimentos no seu perfil do LinkedIn</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-purple">•</span>
                <span>Compartilhe seu progresso na comunidade</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t py-6">
        <div className="container text-center text-sm text-gray-500">
          <p>© 2025 LinkedIn para Jovens Aprendizes</p>
        </div>
      </footer>
    </div>
  );
};

export default Achievements;
