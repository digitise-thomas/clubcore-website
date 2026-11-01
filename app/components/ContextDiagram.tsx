import type { CSSProperties } from "react";
import { useTranslations } from "next-intl";
import { Bot, CalendarDays, Cpu, Layers, MessageSquare, Plug, Sparkles, Users, Wallet } from "lucide-react";

// Architecture-style diagram of the context layer, in the same idiom as the
// platform's infrastructure diagram: glass node cards in grouped panels,
// curved connectors with label pills, slow data-flow dots. Geometry is fixed
// in stage units; `.ctx-stage` scales it with the container (--u).

type Rect = { x: number; y: number; w: number; h: number };
type Side = "l" | "r";
type Point = [number, number];

// Two layouts: the full stage from 1024px, and a compact one (narrower cards,
// shorter gaps) for 768–1023px so the scaled type stays readable.
function layout(compact: boolean) {
  const card = compact ? { w: 228, h: 64 } : { w: 250, h: 64 };
  const rows = [34, 142, 250, 358];
  const sx = compact ? 16 : 30;
  const hub = compact ? { x: 352, y: 180, w: 206, h: 100 } : { x: 460, y: 180, w: 260, h: 100 };
  const tx = compact ? 668 : 900;
  const stage = { w: compact ? 912 : 1180, h: 470 };
  const sources: Node[] = [
    { id: "d1", rect: { x: sx, y: rows[0], ...card }, color: "var(--negative)", icon: Users },
    { id: "d2", rect: { x: sx, y: rows[1], ...card }, color: "var(--info)", icon: CalendarDays },
    { id: "d3", rect: { x: sx, y: rows[2], ...card }, color: "var(--positive)", icon: MessageSquare },
    { id: "d4", rect: { x: sx, y: rows[3], ...card }, color: "var(--avatar-ink-lilac)", icon: Wallet },
  ];
  const hubNode: Node = { id: "hub", rect: hub, color: "var(--ink)", icon: Layers };
  const tools: Node[] = [
    { id: "t1", rect: { x: tx, y: rows[0], ...card }, color: "var(--ink)", icon: Bot },
    { id: "t2", rect: { x: tx, y: rows[1], ...card }, color: "var(--ink)", icon: Sparkles },
    { id: "t3", rect: { x: tx, y: rows[2], ...card }, color: "var(--ink)", icon: Cpu },
    { id: "t4", rect: { x: tx, y: rows[3], ...card }, color: "var(--ink)", icon: Plug },
  ];
  const offsets = [-0.3, -0.1, 0.1, 0.3];
  const edges: Edge[] = [
    ...sources.map((n, i) => ({ id: `e-${n.id}`, from: n.rect, fromSide: "r" as Side, to: hub, toSide: "l" as Side, toOffset: offsets[i], color: n.color, label: `e${i + 1}`, labelT: compact ? 0.5 : 0.42, speed: (["normal", "fast", "normal", "slow"] as const)[i] })),
    ...tools.map((n, i) => ({ id: `e-${n.id}`, from: hub, fromSide: "r" as Side, fromOffset: offsets[i], to: n.rect, toSide: "l" as Side, color: "var(--link)", label: "mcp", labelT: compact ? 0.5 : 0.58, speed: "fast" as const })),
  ];
  return { stage, sources, hub: hubNode, tools, edges };
}

type Node = { id: string; rect: Rect; color: string; icon: React.ComponentType<{ size?: number; strokeWidth?: number }> };
type Edge = { id: string; from: Rect; fromSide: Side; fromOffset?: number; to: Rect; toSide: Side; toOffset?: number; color: string; label: string; labelT: number; speed: "fast" | "normal" | "slow" };

function anchor(rect: Rect, side: Side, offset = 0): Point {
  const y = rect.y + rect.h * (0.5 + offset);
  return side === "l" ? [rect.x, y] : [rect.x + rect.w, y];
}

function bezierAt([p0, p1, p2, p3]: Point[], t: number): Point {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, e = t * t * t;
  return [a * p0[0] + b * p1[0] + c * p2[0] + e * p3[0], a * p0[1] + b * p1[1] + c * p2[1] + e * p3[1]];
}

const r = (v: number) => Math.round(v * 10) / 10;

function geometry(edge: Edge) {
  const start = anchor(edge.from, edge.fromSide, edge.fromOffset);
  const endRaw = anchor(edge.to, edge.toSide, edge.toOffset);
  const n1 = edge.toSide === "l" ? -1 : 1;
  const end: Point = [endRaw[0] + n1 * 3, endRaw[1]];
  const n0 = edge.fromSide === "r" ? 1 : -1;
  // Control points reach a fixed share of the horizontal gap, so curves never overshoot the target.
  const reach = Math.max(Math.abs(end[0] - start[0]) * 0.55, 18);
  const pts: Point[] = [start, [start[0] + n0 * reach, start[1]], [end[0] + n1 * reach, end[1]], end];
  const tail = bezierAt(pts, 0.97);
  const angle = Math.atan2(end[1] - tail[1], end[0] - tail[0]);
  const size = 6.5, spread = 0.5;
  const left: Point = [end[0] - size * Math.cos(angle - spread), end[1] - size * Math.sin(angle - spread)];
  const right: Point = [end[0] - size * Math.cos(angle + spread), end[1] - size * Math.sin(angle + spread)];
  const p = pts.map(([x, y]) => `${r(x)} ${r(y)}`);
  return {
    d: `M${p[0]} C${p[1]}, ${p[2]}, ${p[3]}`,
    arrow: `M${r(left[0])} ${r(left[1])} L${r(end[0])} ${r(end[1])} L${r(right[0])} ${r(right[1])}`,
    label: bezierAt(pts, edge.labelT),
  };
}

const u = (v: number) => `calc(var(--u) * ${v})`;
const place = (rect: Rect): CSSProperties => ({ left: u(rect.x), top: u(rect.y), width: u(rect.w), height: u(rect.h) });

function panelAround(nodes: Node[]): Rect {
  const x = Math.min(...nodes.map((n) => n.rect.x)) - 16;
  const y = Math.min(...nodes.map((n) => n.rect.y)) - 34;
  const right = Math.max(...nodes.map((n) => n.rect.x + n.rect.w)) + 16;
  const bottom = Math.max(...nodes.map((n) => n.rect.y + n.rect.h)) + 16;
  return { x, y, w: right - x, h: bottom - y };
}

type Tr = ReturnType<typeof useTranslations>;

function Card({ node, index, t, hub = false }: { node: Node; index: number; t: Tr; hub?: boolean }) {
  const Icon = node.icon;
  return (
    <div
      className="ctx-card"
      data-hub={hub || undefined}
      style={{ ...place(node.rect), "--c": node.color, "--i": index } as CSSProperties}
    >
      <span className="ctx-tile" aria-hidden="true"><Icon size={hub ? 22 : 18} strokeWidth={1.8} /></span>
      <span className="ctx-text">
        <span className="ctx-name">{t(`${node.id}.name`)}</span>
        <span className="ctx-sub">{t(`${node.id}.sub`)}</span>
      </span>
    </div>
  );
}

export default function ContextDiagram({ compact = false }: { compact?: boolean }) {
  const t = useTranslations("ai.diagram");
  const { stage: STAGE, sources: SOURCES, hub: HUB, tools: TOOLS, edges: EDGES } = layout(compact);
  const panels = [
    { id: "network", rect: panelAround(SOURCES) },
    { id: "tools", rect: panelAround(TOOLS) },
  ];

  return (
    <div className="ctx-diagram" style={{ "--stage-w": STAGE.w } as CSSProperties}>
      <div className="ctx-stage" data-compact={compact || undefined} style={{ aspectRatio: `${STAGE.w} / ${STAGE.h}` }} role="group" aria-label={t("aria")}>
        {panels.map((panel, i) => (
          <div key={panel.id} className="ctx-group" style={{ ...place(panel.rect), "--i": i } as CSSProperties}>
            <span className="ctx-group-label">{t(`groups.${panel.id}`)}</span>
          </div>
        ))}

        <svg className="ctx-edges" viewBox={`0 0 ${STAGE.w} ${STAGE.h}`} aria-hidden="true">
          {EDGES.map((edge, i) => {
            const g = geometry(edge);
            return (
              <g key={edge.id} className="ctx-edge" data-speed={edge.speed} style={{ "--c": edge.color, "--i": i } as CSSProperties}>
                <path className="ctx-edge-base" d={g.d} pathLength={1} />
                <path className="ctx-flow-halo" d={g.d} />
                <path className="ctx-flow-dot" d={g.d} />
                <path className="ctx-arrow" d={g.arrow} />
              </g>
            );
          })}
        </svg>

        {EDGES.map((edge, i) => {
          const [x, y] = geometry(edge).label;
          return (
            <span key={edge.id} className="ctx-label" style={{ left: u(x), top: u(y), "--c": edge.color, "--i": i } as CSSProperties}>
              <span className="ctx-label-dot" aria-hidden="true" />
              {t(`edges.${edge.label}`)}
            </span>
          );
        })}

        {SOURCES.map((node, i) => <Card key={node.id} node={node} index={i} t={t} />)}
        <Card node={HUB} index={4} t={t} hub />
        {TOOLS.map((node, i) => <Card key={node.id} node={node} index={i + 5} t={t} />)}
      </div>
    </div>
  );
}
