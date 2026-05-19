import blueprint from "@/assets/blueprint-pattern.jpg";

export function BlueprintBg({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${blueprint})`,
          backgroundSize: "700px",
          opacity,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
    </>
  );
}
