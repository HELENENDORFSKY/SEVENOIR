import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { Box, ShieldCheck, Smartphone, Upload, Video, Loader2, RefreshCw, Image as ImageIcon, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Button } from './ui/Button';

const projects: Project[] = [
  {
    title: "Sevenoir",
    subtitle: "Enterprise Lost-and-Found Platform",
    description: "A digital-trust platform for airlines, airports, and postal logistics. It includes smart QR/NFC stickers, cross-border item identification, recovery automation, and enterprise-grade integration tools.",
    tags: ["B2B", "Smart Stickers", "Identity", "Security", "Logistics Automation"],
    imagePlaceholderText: "Enterprise Platform Interface",
    type: 'b2b'
  }
];

export const Projects: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("Cinematic close-up, metallic texture, futuristic lighting, 4k");
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreviewUrl(result);
        setGeneratedVideoUrl(null); // Reset video if new image selected

        // Detect aspect ratio
        const img = new Image();
        img.onload = () => {
          if (img.height > img.width) {
            setAspectRatio('9:16');
          } else {
            setAspectRatio('16:9');
          }
        };
        img.src = result;
      };
      reader.readAsDataURL(file);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // Remove data URL prefix (e.g. "data:image/png;base64,")
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleGenerateVideo = async () => {
    if (!selectedFile) return;

    try {
      setIsGenerating(true);

      // Check for API Key Selection (AI Studio specific)
      if ((window as any).aistudio) {
        const hasKey = await (window as any).aistudio.hasSelectedApiKey();
        if (!hasKey) {
          await (window as any).aistudio.openSelectKey();
        }
      }

      // Initialize API with the environment key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = await fileToBase64(selectedFile);

      // Start Video Generation
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        image: {
            imageBytes: base64Data,
            mimeType: selectedFile.type,
        },
        config: {
            numberOfVideos: 1,
            resolution: '720p',
            aspectRatio: aspectRatio
        }
      });

      // Poll for completion
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        operation = await ai.operations.getVideosOperation({operation: operation});
      }

      // Retrieve result
      const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (videoUri) {
          const key = process.env.API_KEY;
          const finalUrl = `${videoUri}&key=${key}`;
          setGeneratedVideoUrl(finalUrl);
      } else {
        throw new Error("No video URI returned from Veo");
      }
      
    } catch (e) {
      console.error("Video generation failed:", e);
      alert("Video generation failed. Please ensure you have selected a valid API key and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setGeneratedVideoUrl(null);
    setPrompt("Cinematic close-up, metallic texture, futuristic lighting, 4k");
  };

  const project = projects[0];

  return (
    <section id="products" className="py-24 bg-[#686a6c] dark:bg-[#686a6c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Current Focus</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What we are building</h2>
          <p className="text-gray-100 max-w-2xl">
            Enterprise-grade solutions solving expensive physical-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative bg-[#575b5f] rounded-3xl overflow-hidden border border-white/10 flex flex-col lg:flex-row shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300"
            >
              {/* Content Area */}
              <div className="p-8 lg:p-12 flex flex-col justify-center lg:w-1/2 order-2 lg:order-1">
                <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
                        Enterprise Only
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-lg text-white font-medium mb-6">{project.subtitle}</p>
                
                <p className="text-gray-100 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-200 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 text-gray-200 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <Box size={16} /> No B2C
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={16} /> No Blockchain
                    </div>
                    <div className="flex items-center gap-2">
                        <Smartphone size={16} /> No Token
                    </div>
                </div>
              </div>

              {/* Interactive Veo Studio Area */}
              <div className="lg:w-1/2 bg-[#575b5f] relative overflow-hidden flex flex-col items-center justify-center min-h-[450px] lg:min-h-full order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-white/10 p-6">
                 
                 {/* Background Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                 <div className="w-full max-w-md relative z-10 flex flex-col gap-4">
                    
                    {/* Header for Tool */}
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2 text-white font-medium">
                          <Sparkles size={16} className="text-accent" />
                          <span>Animate with Veo</span>
                       </div>
                       {previewUrl && (
                         <span className="text-xs text-gray-200 bg-white/10 px-2 py-1 rounded-md border border-white/10">
                           {aspectRatio}
                         </span>
                       )}
                    </div>

                    {/* Media Display */}
                    <div className={`w-full bg-white/5 rounded-xl border border-white/10 overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-500 ${aspectRatio === '16:9' ? 'aspect-video' : 'aspect-[9/16]'}`}>
                        {generatedVideoUrl ? (
                            <video 
                                src={generatedVideoUrl} 
                                controls 
                                autoPlay 
                                loop 
                                className="w-full h-full object-cover"
                            />
                        ) : previewUrl ? (
                            <img 
                                src={previewUrl} 
                                alt="Product Preview" 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-gray-300 p-6 text-center">
                                <ImageIcon className="w-12 h-12 mb-3 opacity-50" />
                                <span className="text-sm font-medium">Upload a product visual<br/>to animate</span>
                            </div>
                        )}

                        {isGenerating && (
                            <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm flex flex-col items-center justify-center text-white z-20">
                                <Loader2 className="w-10 h-10 animate-spin mb-3 text-accent" />
                                <span className="text-sm font-medium tracking-wide animate-pulse">Generating Video...</span>
                                <span className="text-xs text-white/50 mt-1">Powered by Veo 3.1</span>
                            </div>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="bg-[#575b5f] p-4 rounded-xl border border-white/10 shadow-sm">
                        <div className="flex gap-2 mb-3">
                            <input 
                                type="file" 
                                ref={fileInputRef}
                                onChange={handleFileSelect}
                                accept="image/*"
                                className="hidden"
                            />
                            
                            {!previewUrl ? (
                              <Button 
                                  variant="outline" 
                                  onClick={() => fileInputRef.current?.click()}
                                  className="w-full text-xs py-2 h-10 border-white/20 text-white hover:bg-white/10"
                              >
                                  <Upload className="w-3 h-3 mr-2" />
                                  Upload Photo
                              </Button>
                            ) : (
                              <>
                                <Button 
                                    variant="outline" 
                                    onClick={handleReset}
                                    disabled={isGenerating}
                                    className="w-12 px-0 flex items-center justify-center text-xs py-2 h-10 border-white/20 text-white hover:bg-white/10"
                                    title="Reset"
                                >
                                    <RefreshCw className="w-3 h-3" />
                                </Button>
                                <Button 
                                    onClick={handleGenerateVideo}
                                    disabled={!selectedFile || isGenerating}
                                    className={`flex-1 text-xs py-2 h-10 !bg-white !text-black hover:!bg-gray-100 ${!selectedFile ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {generatedVideoUrl ? (
                                      <>
                                        <Video className="w-3 h-3 mr-2" /> Regenerate
                                      </>
                                    ) : (
                                      <>
                                        <Video className="w-3 h-3 mr-2" /> Animate
                                      </>
                                    )}
                                </Button>
                              </>
                            )}
                        </div>
                        
                        {previewUrl && (
                          <div className="relative">
                              <input 
                                  type="text"
                                  value={prompt}
                                  onChange={(e) => setPrompt(e.target.value)}
                                  placeholder="Describe the animation..."
                                  disabled={isGenerating}
                                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:ring-1 focus:ring-accent outline-none disabled:opacity-50"
                              />
                          </div>
                        )}
                    </div>

                 </div>

              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};