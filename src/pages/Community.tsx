
import React, { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, ThumbsUp, Send, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Community = () => {
  const { toast } = useToast();
  const [comment, setComment] = useState("");

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    toast({
      title: "Comentário publicado!",
      description: "Sua mensagem foi compartilhada com a comunidade."
    });
    
    setComment("");
  };

  const communityPosts = [
    {
      id: 1,
      author: "Maria Silva",
      role: "Jovem Aprendiz em Marketing",
      content: "Acabei de concluir o módulo sobre otimização de perfil e consegui minha primeira conexão com um recrutador! As dicas são muito práticas.",
      likes: 12,
      comments: 3,
      time: "2h atrás"
    },
    {
      id: 2,
      author: "João Pedro",
      role: "Estudante de TI",
      content: "Alguém pode me ajudar com ideias para o primeiro post no LinkedIn? Terminei o módulo sobre criação de conteúdo mas ainda estou inseguro.",
      likes: 5,
      comments: 8,
      time: "5h atrás"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container py-6 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Comunidade</h1>
          <p className="text-gray-600 mb-6">
            Compartilhe suas experiências, tire dúvidas e conecte-se com outros jovens aprendizes.
          </p>
          
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 rounded-full p-1">
                  <User size={20} className="text-gray-500" />
                </div>
                <span>O que você gostaria de compartilhar?</span>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePostComment}>
                <Textarea 
                  className="mb-3 resize-none"
                  placeholder="Compartilhe uma dica, faça uma pergunta ou conte sua experiência..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <div className="flex justify-end">
                  <Button type="submit">
                    <Send size={16} className="mr-2" />
                    Publicar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            {communityPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-gradient-to-br from-brand-purple to-brand-blue rounded-full p-2 text-white">
                      <User size={18} />
                    </div>
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.role} • {post.time}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{post.content}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-2 border-t">
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <ThumbsUp size={16} />
                      <span>{post.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <MessageSquare size={16} />
                      <span>{post.comments}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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

export default Community;
