"use client";

import { useEffect, useRef, useState } from "react";

interface Mode {
  label: string;
  input: string;
  renderOutput: () => React.ReactNode;
}

// Morse code renderer
function MorseViz({ code }: { code: string }) {
  return (
    <div className="flex items-center gap-[6px] flex-wrap justify-center">
      {code.split("").map((ch, i) => {
        if (ch === " ") return <span key={i} className="w-3" />;
        if (ch === ".") return (
          <span key={i} className="w-[8px] h-[8px] rounded-full bg-[#22c55e] shrink-0" />
        );
        if (ch === "-") return (
          <span key={i} className="w-[20px] h-[8px] rounded-sm bg-[#22c55e] shrink-0" />
        );
        return null;
      })}
    </div>
  );
}

// Pixel noise canvas — orange/yellow/blue/red palette like the steganography image
function PixelCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const W = canvas.width;
    const H = canvas.height;
    const CELL = 8;
    const cols = Math.floor(W / CELL);
    const rows = Math.floor(H / CELL);
    const PALETTE = ["#f5a623", "#f7c948", "#e8543a", "#4a9eca", "#f0892a", "#fad165", "#eb6040", "#5badd6"];

    // Seed a stable pixel grid, only shimmer a few cells per frame
    const grid: string[][] = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => PALETTE[Math.floor(Math.random() * PALETTE.length)])
    );

    const draw = () => {
      // shimmer ~3% of cells per frame
      const count = Math.floor(cols * rows * 0.03);
      for (let i = 0; i < count; i++) {
        const r = Math.floor(Math.random() * rows);
        const c = Math.floor(Math.random() * cols);
        grid[r][c] = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      }
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          ctx.fillStyle = grid[r][c];
          ctx.fillRect(c * CELL, r * CELL, CELL - 1, CELL - 1);
        }
      }
      frameRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={280}
      height={158}
      className="rounded-xl"
      style={{ imageRendering: "pixelated" }}
    />
  );
}

const EMOJI_OUTPUT = "🧣🌽🌀🌁🎺🌽🎦🥑👣💭🍣🥻💤🐅🔹🎰😶🐜🛀🌋🌇💳🦟🙁🐻😽🔱🐬🛅🐠🧒💐🤼🦓🍀🚎🪟🚽🤹🗾🦐🔂📌🦼🎆🐄🚧💞👯😶🐃🍎😓🤏🥁🚍🤧🛺🍑🪡🌁🚾🏢👻🍟🦴🧳😎🌭👌🧎🔄🤾👳📭😚🛜🧏📭🦂📁📍💙📎🏬😡🪬🥩🦃📈🕎💘🤝🚈🥇📭🐐🙅🏰🎹📑🦕🔧🔰👃👔📃🔤";

const MODES: Mode[] = [
  {
    label: "Emoji",
    input: "Secret message",
    renderOutput: () => (
      <p className="text-2xl leading-snug text-center max-w-xs break-all">
        {EMOJI_OUTPUT.slice(0, 48)}
        <span className="text-white/30 text-sm align-middle ml-1">…</span>
      </p>
    ),
  },
  {
    label: "Encrypted",
    input: "HELLO",
    renderOutput: () => (
      <span className="font-mono text-[#22c55e] text-xl tracking-widest break-all text-center leading-relaxed">
        U2FsdGVkX1+8mK2N<wbr />vQpT7rJZ/cAb3sE=
      </span>
    ),
  },
  {
    label: "Morse",
    input: "HELLO",
    renderOutput: () => (
      <MorseViz code=".... . .-.. .-.. ---" />
    ),
  },
  {
    label: "Matrix",
    input: "HELLO",
    renderOutput: () => <PixelCanvas />,
  },
  {
    label: "Steganography",
    input: "Hey, how are you?",
    renderOutput: () => (
      <div className="flex flex-col items-center gap-4">
        <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-center">
          <p className="text-white text-base tracking-wide">Hey, how are you?</p>
          <p className="text-white/20 text-xs mt-1">← looks like a normal message</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse shrink-0" />
          <span className="text-[#22c55e] text-sm font-mono">secret: &quot;Meet me at midnight 🌙&quot;</span>
        </div>
        <span className="text-white/25 text-xs">hidden in invisible unicode characters</span>
      </div>
    ),
  },
  {
    label: "Reversed",
    input: "HELLO",
    renderOutput: () => (
      <span className="font-bold text-[#22c55e] text-5xl tracking-wide">OLLEH</span>
    ),
  },
  {
    label: "Flipped",
    input: "HELLO",
    renderOutput: () => (
      <span className="font-bold text-[#22c55e] text-5xl tracking-wide">oʅʅǝɥ</span>
    ),
  },
];

export default function TransformDemo() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % MODES.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const mode = MODES[index];

  return (
    <section id="demo" className="py-16 md:py-24 px-4 md:px-6 bg-[#0b0f18]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-3">See it in action</h2>
        <p className="text-white/50 text-base mb-16">
          Every transformation happens instantly on your device
        </p>

        {/* Mode pill selector */}
        <div className="flex overflow-x-auto gap-2 mb-12 pb-1 justify-start md:justify-center scrollbar-none -mx-2 px-2">
          <div className="flex gap-2 mx-auto">
          {MODES.map((m, i) => (
            <button
              key={m.label}
              onClick={() => {
                setVisible(false);
                setTimeout(() => { setIndex(i); setVisible(true); }, 200);
              }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                i === index
                  ? "bg-[#6366f1] text-white"
                  : "bg-white/6 text-white/50 hover:bg-white/10 hover:text-white/80"
              }`}
            >
              {m.label}
            </button>
          ))}
          </div>
        </div>

        {/* Demo card */}
        <div
          className="relative mx-auto rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f1623 0%, #111827 100%)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div
            className="py-12 px-5 md:py-16 md:px-10 flex flex-col items-center gap-6 md:gap-8 transition-all duration-300"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(10px)" }}
          >
            {/* Mode label */}
            <p className="text-white/40 text-base tracking-wide">{mode.label}</p>

            {/* Input */}
            <p className="text-white font-bold text-5xl tracking-wide">{mode.input}</p>

            {/* Three dot separator */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6366f1]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#6366f1]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#6366f1]" />
            </div>

            {/* Output */}
            <div className="min-h-[80px] flex items-center justify-center px-4">
              {mode.renderOutput()}
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
            <div
              key={index}
              className="h-full bg-[#6366f1] rounded-full"
              style={{
                animation: "progressBar 2.8s linear forwards",
              }}
            />
          </div>
        </div>

        <style jsx>{`
          @keyframes progressBar {
            from { width: 0% }
            to { width: 100% }
          }
        `}</style>
      </div>
    </section>
  );
}
