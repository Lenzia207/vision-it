import { ReactNode } from "react";

export const privacyH2ClassName = "text-xl md:text-2xl font-bold text-(--text-100) pt-4";

/** Simple bordered table that scrolls sideways on narrow screens. */
export default function PrivacyTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm md:text-base">
        <thead>
          <tr>
            {head.map((cell) => (
              <th key={cell} className="py-2 pr-4 border-b-2 border-(--border-light) font-semibold text-(--text-100)">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="py-2 pr-4 border-b border-(--border-faint) align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
