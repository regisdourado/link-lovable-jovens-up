
import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ThumbsUp, MessageSquare, Share2, Send } from "lucide-react";

const examplePosts = [
  {
    id: "post1",
    author: "Ana Silva",
    avatar: "AS",
    role: "Jovem Aprendiz em Administração",
    date: "1 dia atrás",
    content: "Acabei de atualizar meu perfil do LinkedIn depois da aula de hoje! Estou super animada com os resultados. Vocês já atualizaram o de vocês?",
    likes: 12,
    comments: 3,
  },
  {
    id: "post2",
    author: "Pedro Costa",
    avatar: "PC",
    role: "Estudante de T.I.",
    date: "3 dias atrás",
    content: "Dica que aprendi hoje: quando adicionar alguém no LinkedIn, sempre envie uma mensagem personalizada! Aumenta muito as chances da pessoa aceitar sua solicitação. \n\nAlguém já testou isso?",
    likes: 8,
    comments: 5,
  },
  {
    id: "post3",
    author: "Carla Mendes",
    avatar: "CM",
    role: "Jovem Aprendiz em Marketing",
    date: "1 semana atrás",
    content: "CONSEGUI MINHA PRIMEIRA ENTREVISTA GRAÇAS AO LINKEDIN! 🎉 \n\nAprendi tanta coisa nesse curso que me ajudou a destacar meu perfil. Estou nervosa mas confiante para a entrevista amanhã. Alguma dica?",
    likes: 24,
    comments: 10,
  }
];

const Community = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [newComment, setNewComment] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container py-6 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Comunidade</h1>
          
          <Tabs defaultValue="feed" onChange={(value) => setActiveTab(value as string)}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="feed">Feed da Comunidade</TabsTrigger>
              <TabsTrigger value="group">Grupo do Discord</TabsTrigger>
            </TabsList>
            
            <TabsContent value="feed" className="space-y-6">
              {/* Create Post Card */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>EU</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Compartilhe sua experiência</CardTitle>
                      <CardDescription>Poste dúvidas, conquistas ou dicas para a comunidade</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <textarea 
                    className="w-full border rounded-md p-3 min-h-[100px] focus:outline-none focus:ring-1 focus:ring-brand-purple resize-none"
                    placeholder="O que você está pensando?"
                  />
                </CardContent>
                <CardFooter className="justify-between border-t pt-3">
                  <Button variant="ghost" size="sm">Adicionar foto</Button>
                  <Button size="sm">Publicar</Button>
                </CardFooter>
              </Card>
              
              {/* Posts Feed */}
              {examplePosts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{post.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{post.author}</CardTitle>
                        <CardDescription>{post.role} • {post.date}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-line">{post.content}</p>
                  </CardContent>
                  <CardFooter className="border-t pt-3 flex flex-col">
                    <div className="flex justify-between w-full">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <ThumbsUp size={16} />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <MessageSquare size={16} />
                        <span>{post.comments}</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 size={16} />
                        <span>Compartilhar</span>
                      </Button>
                    </div>
                    
                    <div className="w-full mt-3 flex gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>EU</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow flex items-center gap-2">
                        <Input 
                          placeholder="Escreva um comentário..." 
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="text-sm h-9"
                        />
                        <Button size="sm" variant="ghost" className="px-2">
                          <Send size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="group">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Grupo exclusivo no Discord</CardTitle>
                  <CardDescription>
                    Participe do nosso grupo no Discord para networking, dúvidas e oportunidades exclusivas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-[#5865F2]/10 p-6 rounded-md flex flex-col items-center">
                    <svg width="124" height="34" viewBox="0 0 124 34" className="mb-4">
                      <g fill="#5865F2">
                        <path d="M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8786 26.2959 30.5235 24.3585C31.1435 17.7559 29.4089 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"/>
                        <path d="M41.2697 9.86615H47.8585C49.4394 9.86615 50.7878 10.1141 51.8883 10.6101C52.9887 11.1061 53.8102 11.7881 54.3527 12.656C54.8951 13.524 55.1741 14.5127 55.1741 15.6222C55.1741 16.7316 54.8952 17.7169 54.3372 18.5781C53.7793 19.4392 52.9423 20.1107 51.8262 20.5926C50.7101 21.0744 49.3334 21.3154 47.6963 21.3154H41.2697V9.86615ZM47.6808 18.3226C48.6579 18.3226 49.4273 18.0883 49.9891 17.6197C50.5509 17.151 50.8318 16.4866 50.8318 15.6222C50.8318 14.7578 50.5474 14.0856 49.9787 13.6055C49.4099 13.1254 48.6451 12.8853 47.6808 12.8853H45.612V18.3226H47.6808Z"/>
                        <path d="M65.0103 21.4349C64.0489 21.4349 63.1611 21.2379 62.3467 20.8438C61.5323 20.4498 60.8768 19.9026 60.38 19.2022C59.8833 18.5019 59.6349 17.6881 59.6349 16.7608C59.6349 15.8335 59.8833 15.0163 60.38 14.3093C60.8768 13.6023 61.5323 13.0516 62.3467 12.6576C63.1611 12.2635 64.0489 12.0665 65.0103 12.0665C65.9716 12.0665 66.8561 12.2635 67.6636 12.6576C68.4712 13.0516 69.1267 13.6023 69.63 14.3093C70.1333 15.0163 70.385 15.8335 70.385 16.7608C70.385 17.6881 70.1333 18.5019 69.63 19.2022C69.1267 19.9026 68.4712 20.4498 67.6636 20.8438C66.8561 21.2379 65.9716 21.4349 65.0103 21.4349ZM65.0103 18.2238C65.4664 18.2238 65.8761 18.0747 66.2393 17.7763C66.6026 17.478 66.7842 17.0864 66.7842 16.6014C66.7842 16.1164 66.6026 15.7249 66.2393 15.4265C65.8761 15.1282 65.4664 14.979 65.0103 14.979C64.5541 14.979 64.1444 15.1282 63.7812 15.4265C63.4179 15.7249 63.2363 16.1164 63.2363 16.6014C63.2363 17.0864 63.4179 17.478 63.7812 17.7763C64.1444 18.0747 64.5541 18.2238 65.0103 18.2238Z"/>
                        <path d="M78.3212 21.4349C77.3598 21.4349 76.4719 21.2379 75.6576 20.8438C74.8432 20.4498 74.1876 19.9026 73.6909 19.2022C73.1941 18.5019 72.9458 17.6881 72.9458 16.7608C72.9458 15.8335 73.1941 15.0163 73.6909 14.3093C74.1876 13.6023 74.8432 13.0516 75.6576 12.6576C76.4719 12.2635 77.3598 12.0665 78.3212 12.0665C79.2825 12.0665 80.167 12.2635 80.9745 12.6576C81.7821 13.0516 82.4376 13.6023 82.9409 14.3093C83.4442 15.0163 83.6959 15.8335 83.6959 16.7608C83.6959 17.6881 83.4442 18.5019 82.9409 19.2022C82.4376 19.9026 81.7821 20.4498 80.9745 20.8438C80.167 21.2379 79.2825 21.4349 78.3212 21.4349ZM78.3212 18.2238C78.7773 18.2238 79.187 18.0747 79.5502 17.7763C79.9135 17.478 80.0951 17.0864 80.0951 16.6014C80.0951 16.1164 79.9135 15.7249 79.5502 15.4265C79.187 15.1282 78.7773 14.979 78.3212 14.979C77.865 14.979 77.4553 15.1282 77.0921 15.4265C76.7288 15.7249 76.5472 16.1164 76.5472 16.6014C76.5472 17.0864 76.7288 17.478 77.0921 17.7763C77.4553 18.0747 77.865 18.2238 78.3212 18.2238Z"/>
                        <path d="M89.3161 21.3154C88.5324 21.3154 87.8251 21.1779 87.1941 20.9027C86.5632 20.6276 86.0556 20.2335 85.6713 19.7206C85.2871 19.2076 85.095 18.6121 85.095 17.9342C85.095 17.0535 85.4229 16.3238 86.0787 15.7453C86.7346 15.1667 87.7055 14.8065 88.9913 14.6648L91.3072 14.4078V14.2729C91.3072 13.8855 91.1842 13.5938 90.9382 13.3978C90.6921 13.2017 90.3646 13.1037 89.9557 13.1037C89.5852 13.1037 89.2577 13.1922 88.9732 13.3692C88.6887 13.5461 88.5308 13.8091 88.499 14.1582L85.366 13.8225C85.4106 13.1856 85.6257 12.6233 86.0115 12.1355C86.3973 11.6478 86.9279 11.2678 87.6034 10.9955C88.2789 10.7233 89.0742 10.5872 89.9891 10.5872C90.9999 10.5872 91.8738 10.7414 92.6108 11.0499C93.3479 11.3584 93.9182 11.7881 94.3218 12.339C94.7255 12.8898 94.9273 13.5413 94.9273 14.2935V21.3154H91.5819L91.403 19.8863C91.1256 20.3676 90.7434 20.754 90.2563 21.0458C89.7692 21.3375 89.1948 21.4837 88.5328 21.4837C88.4663 21.4349 88.3999 21.3861 88.3335 21.3154H89.3161ZM90.1229 19.1103C90.6095 19.1103 91.0064 18.9583 91.3138 18.6543C91.6211 18.3503 91.7748 17.9621 91.7748 17.4895V16.7389L90.1749 16.9137C89.2577 17.0278 88.799 17.3706 88.799 17.942C88.799 18.2461 88.9141 18.4893 89.1441 18.6714C89.3742 18.8535 89.6994 18.9447 90.1229 19.1103Z"/>
                        <path d="M100.981 21.3154C100.294 21.3154 99.7146 21.107 99.2431 20.6903C98.7715 20.2736 98.5358 19.7423 98.5358 19.0965V14.1969H97.2739V12.1355H98.6086L98.9648 9.31138H102.156V12.1355H104.154V14.1969H102.156V18.0334C102.156 18.2712 102.223 18.4598 102.358 18.5992C102.494 18.7385 102.682 18.8082 102.923 18.8082C103.154 18.8082 103.414 18.7655 103.704 18.6802L104.185 20.838C103.786 20.9979 103.37 21.1228 102.938 21.2124C102.506 21.302 102.091 21.347 101.692 21.347C101.683 21.347 101.675 21.347 101.666 21.347C101.658 21.347 101.633 21.347 101.599 21.347C101.564 21.3357 101.539 21.3294 101.522 21.3275C101.506 21.3256 101.472 21.3223 101.42 21.3179C101.368 21.3134 101.316 21.3154 101.272 21.3154H100.981Z"/>
                        <path d="M111.764 21.4349C110.803 21.4349 109.915 21.2417 109.1 20.8553C108.286 20.4689 107.636 19.9255 107.149 19.225C106.661 18.5245 106.418 17.7175 106.418 16.8041C106.418 15.865 106.654 15.048 107.128 14.353C107.601 13.6581 108.234 13.1205 109.027 12.7404C109.819 12.3602 110.707 12.1701 111.691 12.1701C112.62 12.1701 113.447 12.3448 114.174 12.6942C114.901 13.0436 115.476 13.5438 115.9 14.1948C116.325 14.8457 116.537 15.6243 116.537 16.5305C116.537 16.7733 116.525 16.9838 116.501 17.162C116.478 17.3403 116.456 17.4738 116.434 17.5626H110.208C110.259 18.0103 110.434 18.3611 110.731 18.6149C111.029 18.8687 111.392 18.9956 111.82 18.9956C112.104 18.9956 112.35 18.9353 112.559 18.8147C112.767 18.6941 112.918 18.5133 113.01 18.2722L116.226 18.6321C116.025 19.3639 115.568 19.968 114.853 20.4444C114.139 20.9208 113.08 21.3154 111.764 21.4349ZM111.691 14.6091C111.308 14.6091 110.979 14.7219 110.705 14.9474C110.43 15.1729 110.251 15.5111 110.166 15.962H113.133C113.07 15.5432 112.911 15.2116 112.657 14.9674C112.403 14.7219 112.082 14.6091 111.691 14.6091Z"/>
                        <path d="M123.351 21.3154V16.6312C123.351 16.1884 123.242 15.8394 123.023 15.5841C122.803 15.3289 122.505 15.2013 122.128 15.2013C121.763 15.2013 121.456 15.3289 121.208 15.5841C120.96 15.8394 120.836 16.1884 120.836 16.6312V21.3154H117.266V12.1355H120.662V13.3686C120.939 12.9454 121.307 12.6158 121.764 12.3798C122.222 12.1439 122.753 12.0259 123.359 12.0259C124.385 12.0259 125.215 12.3662 125.849 13.0468C126.483 13.7274 126.8 14.6493 126.8 15.8124V21.3154H123.351Z"/>
                      </g>
                    </svg>
                    
                    <p className="text-center mb-4">Nosso servidor Discord é o lugar perfeito para tirar dúvidas em tempo real, conversar com outros jovens aprendizes e ficar por dentro de oportunidades exclusivas!</p>
                    
                    <Button className="bg-[#5865F2] hover:bg-[#4752C4]">
                      Entrar no Discord
                    </Button>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-2">O que você encontrará no Discord:</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Canal de vagas exclusivas para jovens aprendizes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Mentoria ao vivo com profissionais de RH</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Ajuda com dúvidas sobre o LinkedIn em tempo real</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Eventos exclusivos e workshops online</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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

export default Community;
