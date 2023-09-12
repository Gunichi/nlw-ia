import { Github, FileVideo, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { UploadIcon } from "@radix-ui/react-icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold"> Upload.ai </h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 🧡 por Gunichi no NLW
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea 
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para IA" 
            />
            <Textarea 
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA" 
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre - se: Você pode utilizar a variável <code className="text-orange-400">{'{transcription}'}</code> no seu prompt para adicionar o conteudo da transcrição.
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label 
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo />
              Carregar vídeo
            </label>

            <Separator />

            <div className="space-y-1">
              <Label htmlFor="transcription-prompt">
                Prompt de transcrição
              </Label>
              <Textarea 
                id="transcription-prompt" 
                className="h-20 leading-relaxed resize-none" 
                placeholder="Inclua palavras chaves mencionadas no vídeo, utilize , para separar as palavras"
              />
            </div>
            <Button type="submit" className="w-full">
              Carregar vídeo
              <UploadIcon className="w-4 h-4 ml-2" />
            </Button>

            <input type="file" accept="video/mp4" id="video" className="sr-only"/>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label> Prompt </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title"> Título do youtube </SelectItem>
                  <SelectItem value="description"> Descrição do youtube </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label> Modelo </Label>
              <Select disabled defaultValue="gpt3">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3"> GPT-3.5 - TURBO </SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label> Modelo </Label>
              <Slider 
                min={0}
                max={1}
                step={0.1}
              />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Valores mais altos tendem a gerar resultados mais criativos, mas menos precisos.
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Gerar transcrição
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
