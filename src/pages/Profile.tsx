
import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { getTotalProgress, badges } from "@/data/courseData";
import { Award, CheckCircle, ExternalLink } from "lucide-react";
import BadgeCard from "@/components/BadgeCard";

const Profile = () => {
  const { completedLessons, totalLessons, earnedBadges, totalBadges } = getTotalProgress();
  const progress = Math.round((completedLessons / totalLessons) * 100);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container py-6 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Profile Card */}
            <Card className="md:col-span-1">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarFallback className="text-2xl">EU</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-2">Seu Nome</CardTitle>
                <CardDescription>Estudante | Jovem Aprendiz</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progresso do curso</span>
                    <span className="font-medium">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="border rounded-md p-3">
                    <div className="text-2xl font-bold text-brand-purple">{completedLessons}</div>
                    <div className="text-xs text-muted-foreground">Lições completas</div>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="text-2xl font-bold text-brand-purple">{earnedBadges}</div>
                    <div className="text-xs text-muted-foreground">Conquistas</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2" variant="outline">
                  <ExternalLink size={16} />
                  Ver meu perfil LinkedIn
                </Button>
              </CardFooter>
            </Card>
            
            {/* Main Content */}
            <div className="md:col-span-2">
              <Tabs defaultValue="certificado">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="certificado">Certificado</TabsTrigger>
                  <TabsTrigger value="conquistas">Conquistas</TabsTrigger>
                  <TabsTrigger value="conta">Conta</TabsTrigger>
                </TabsList>
                
                <TabsContent value="certificado" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Seu certificado</CardTitle>
                      <CardDescription>
                        Complete todas as lições para desbloquear seu certificado digital
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-muted rounded-md p-8 text-center">
                        {progress < 100 ? (
                          <div className="space-y-4">
                            <div className="text-5xl text-muted-foreground/50 mx-auto">🔒</div>
                            <div className="space-y-2">
                              <h3 className="font-semibold">Certificado bloqueado</h3>
                              <p className="text-sm text-muted-foreground">
                                Complete {totalLessons - completedLessons} lições restantes para desbloquear seu certificado
                              </p>
                              <Progress value={progress} className="h-2 mt-2" />
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <div className="text-5xl mx-auto">🎓</div>
                            <div className="space-y-2">
                              <h3 className="font-semibold">Certificado disponível!</h3>
                              <p className="text-sm text-muted-foreground">
                                Parabéns! Você completou todo o curso.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" disabled={progress < 100}>
                        {progress < 100 ? 'Certificado bloqueado' : 'Baixar certificado'}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="conquistas" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Suas conquistas</CardTitle>
                      <CardDescription>
                        Complete lições e desafios para desbloquear badges exclusivos
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {badges.slice(0, 4).map(badge => (
                          <BadgeCard
                            key={badge.id}
                            title={badge.title}
                            description={badge.description}
                            icon={badge.icon}
                            unlocked={badge.unlocked}
                            progress={badge.progress}
                          />
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className="w-full gap-2"
                        onClick={() => window.location.href = '/conquistas'}
                      >
                        <Award size={16} />
                        Ver todas as conquistas
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="conta" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Configurações da conta</CardTitle>
                      <CardDescription>
                        Gerencie suas informações e preferências
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nome completo</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-md"
                          placeholder="Seu nome"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <input 
                          type="email" 
                          className="w-full p-2 border rounded-md"
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">URL do seu perfil LinkedIn</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-md"
                          placeholder="https://linkedin.com/in/seu-perfil"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between border-t pt-4">
                        <span className="font-medium">Notificações por email</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-purple"></div>
                        </label>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Cancelar</Button>
                      <Button>Salvar alterações</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Checklist */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Checklist para sucesso no LinkedIn</CardTitle>
              <CardDescription>Complete estas tarefas para maximizar suas chances</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-md bg-green-50 border border-green-100">
                  <CheckCircle size={20} className="text-green-500" />
                  <span>Criar uma conta no LinkedIn</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 border">
                  <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  </div>
                  <span>Adicionar foto profissional</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 border">
                  <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  </div>
                  <span>Criar um título atrativo</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 border">
                  <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  </div>
                  <span>Escrever resumo profissional</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 border">
                  <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  </div>
                  <span>Adicionar experiências ou projetos</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-muted/50 border">
                  <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  </div>
                  <span>Fazer 10 conexões estratégicas</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <footer className="bg-white border-t py-6 mt-10">
        <div className="container text-center text-sm text-gray-500">
          <p>© 2025 LinkedIn para Jovens Aprendizes</p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
