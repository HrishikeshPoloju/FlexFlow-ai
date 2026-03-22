'use client'

import { Suspense, lazy, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Loader2 } from "lucide-react";
import LightRays from './LightRays';
import { CalendlyModal } from './CalendlyModal';
// Lazy load the 3D scene
const LazySplineScene = lazy(() => import('@/components/ui/LazySplineScene'));

export function SplineSceneBasic() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <Card className="w-full min-h-[calc(100vh-80px)] bg-black/[0.96] relative overflow-hidden border-0 pt-20 lg:pt-0">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <LightRays
           raysOrigin="top-center"
    raysColor="#ffffffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
        />
      </div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center h-full max-w-7xl mx-auto">
              {/* Left Content */}
              <div className="space-y-8 text-left">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black leading-tight sm:leading-[1.1] animate-fade-in">
                  Automate <br />
                  Everything. <br />
                  <span className="gradient-text font-black">Effortlessly.</span>
                </h1>

                {/* Subheading */}
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl animate-fade-in">
                  FlexFlow AI builds smart agents that handle your calls, chats, and workflows — 
                  so your business never stops moving.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in">
                  <Button size="lg" className="gradient-primary font-semibold text-base group">
                    See Live Demo
                    <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="glow-border text-base group"
                    onClick={() => setShowCalendly(true)}
                  >
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
<button 
  onclick="window.PushNotify.subscribe()"
  class="px-4 py-2 text-sm rounded-lg border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 hover:border-gray-400 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
>
  Get Notified!
</button>                  
                </div>
              </div>

              {/* Right content with Suspense boundary */}
              <div className="relative h-full w-full min-h-[400px] lg:min-h-[500px]">
                <Suspense 
                  fallback={
                    <div className="w-full h-full flex items-center justify-center bg-black/5 rounded-xl">
                      <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    </div>
                  }
                >
                  <LazySplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      <CalendlyModal open={showCalendly} onOpenChange={setShowCalendly} />
      </Card>
  )
}
export default SplineSceneBasic
