'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.3)_1px,transparent_1px)] bg-[size:64px_64px] animate-pulse"
          style={{
            animationDuration: '20s'
          }}
        />
      </div>
      
      {/* Floating tech elements */}
      <div className="absolute top-1/4 left-10 text-blue-400/20 text-2xl animate-float-slow">{'{ }'}</div>
      <div className="absolute top-10 right-20 text-green-400/20 text-xl animate-float-medium">{'</>'}</div>
      <div className="absolute bottom-1/3 left-20 text-purple-400/20 text-lg animate-float-fast">0101</div>
      <div className="absolute top-1/2 right-10 text-cyan-400/20 text-xl animate-float-slow">1010</div>
      <div className="absolute bottom-20 right-1/4 text-yellow-400/20 text-lg animate-float-medium">#0xFF</div>
      
      {/* Moving dots */}
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse" />
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400/30 rounded-full animate-bounce" />
      <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-cyan-400/30 rounded-full animate-ping" />
    </div>
  );
}
