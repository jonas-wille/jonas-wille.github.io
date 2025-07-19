document.addEventListener("DOMContentLoaded", () => {
  const inArea  = document.querySelector("#inCode");
  const outArea = document.querySelector("#outCode");

  if (inArea) {
    inArea.placeholder = `method(param, longParam, param)\nmethod(longParam, param, param)`;

    inArea.addEventListener("input", () => {
      const lines = inArea.value.split("\n");

      const rows = lines.map(line => {
        const m = line.match(/^(\s*)([^\s(]+)\((.*)\)(.*)$/);
        if (!m) return null;
        return {
          indent:  m[1],
          fn:      m[2],
          params:  m[3].split(",").map(p => p.trim()),
          suffix:  m[4]
        };
      });

      const maxWidths = [];
      rows.forEach(r => {
        if (!r) return;
        r.params.forEach((p, i) => {
          const len = p.length;
          maxWidths[i] = Math.max(maxWidths[i] || 0, len);
        });
      });

      const formatted = rows.map(r => {
        if (!r) return "";
        const padded = r.params.map((p, i) => {
          if (i === r.params.length - 1) {
            return p;
          } else {
            const pad = " ".repeat(maxWidths[i] - p.length);
            return p + "," + pad + " ";
          }
        });
        return `${r.indent}${r.fn}(${padded.join("")})${r.suffix}`;
      });

      outArea.value = formatted.join("\n");
    });
  }
});