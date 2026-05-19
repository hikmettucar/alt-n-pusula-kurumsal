import logo from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={logo} alt="CSB Logo" width={44} height={44} className="h-11 w-11 object-contain" />
      <div className="leading-tight">
        <div className="font-display text-lg font-semibold tracking-wide text-gradient-gold">CSB</div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Taahhüt · İnşaat · Mühendislik</div>
      </div>
    </div>
  );
}
