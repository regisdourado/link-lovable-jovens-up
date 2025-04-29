
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ModulesPage from "./pages/ModulesPage";
import ModuleDetail from "./pages/ModuleDetail";
import LessonDetail from "./pages/LessonDetail";
import Achievements from "./pages/Achievements";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
<<<<<<< HEAD
// LinkedIn Jovem pages
import HomeLinkedinJovem from "./pages/HomeLinkedinJovem";
import Aulas from "./pages/Aulas";
import Materiais from "./pages/Materiais";
import Cronograma from "./pages/Cronograma";
import FAQ from "./pages/FAQ";
import Slides from "./pages/Slides";
import Aula1 from "./pages/slides/Aula1";
import Aula2 from "./pages/slides/Aula2";
import Aula3 from "./pages/slides/Aula3";
import Aula4 from "./pages/slides/Aula4";
=======
>>>>>>> 1e3efd23c800f86c3ba89329ea60d1f1fb474d01

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          {/* LinkedIn Jovem rotas customizadas */}
          <Route path="/" element={<HomeLinkedinJovem />} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/materiais" element={<Materiais />} />
          <Route path="/cronograma" element={<Cronograma />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/slides" element={<Slides />} />
          <Route path="/slides/aula1" element={<Aula1 />} />
          <Route path="/slides/aula2" element={<Aula2 />} />
          <Route path="/slides/aula3" element={<Aula3 />} />
          <Route path="/slides/aula4" element={<Aula4 />} />
          {/* Rotas originais do template */}
=======
          <Route path="/" element={<Index />} />
>>>>>>> 1e3efd23c800f86c3ba89329ea60d1f1fb474d01
          <Route path="/modulos" element={<ModulesPage />} />
          <Route path="/modulos/:moduleId" element={<ModuleDetail />} />
          <Route path="/modulos/:moduleId/:lessonId" element={<LessonDetail />} />
          <Route path="/conquistas" element={<Achievements />} />
          <Route path="/comunidade" element={<Community />} />
          <Route path="/meu-perfil" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

