function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Lightweight token-based syntax highlighter for JavaScript, TypeScript, JSX, and SQL
 */
export function highlightCode(code) {
  if (!code || typeof code !== "string") return "";

  const masterRegex =
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|--[^\n]*|^#[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(<\/?[a-zA-Z0-9_.-]+|\/?>)|(\b(?:export|default|function|return|import|from|const|let|var|if|else|switch|case|break|try|catch|finally|throw|async|await|type|interface|class|extends|implements|new|this|super|typeof|instanceof|null|undefined|true|false|as|SELECT|FROM|WHERE|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|ALTER|DROP|PRIMARY|KEY|FOREIGN|REFERENCES|NOT|NULL|UNIQUE|DEFAULT|JOIN|INNER|LEFT|RIGHT|ON|GROUP|BY|ORDER|LIMIT|BIGINT|BIGSERIAL|UUID|TEXT|TIMESTAMPTZ|JSONB)\b)|(\b[a-zA-Z0-9_-]+(?=\s*=))|(\b[a-zA-Z_][a-zA-Z0-9_]*(?=\s*\())|(\b\d+\b)/gm;

  let lastIndex = 0;
  let out = "";

  for (const match of code.matchAll(masterRegex)) {
    const [full, comment, string, tag, keyword, attr, fn, num] = match;
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      out += escapeHtml(code.slice(lastIndex, matchIndex));
    }

    if (comment) {
      out += `<span class="tok-comment">${escapeHtml(comment)}</span>`;
    } else if (string) {
      out += `<span class="tok-string">${escapeHtml(string)}</span>`;
    } else if (tag) {
      out += `<span class="tok-tag">${escapeHtml(tag)}</span>`;
    } else if (keyword) {
      out += `<span class="tok-keyword">${escapeHtml(keyword)}</span>`;
    } else if (attr) {
      out += `<span class="tok-attr">${escapeHtml(attr)}</span>`;
    } else if (fn) {
      out += `<span class="tok-fn">${escapeHtml(fn)}</span>`;
    } else if (num) {
      out += `<span class="tok-num">${escapeHtml(num)}</span>`;
    }

    lastIndex = matchIndex + full.length;
  }

  if (lastIndex < code.length) {
    out += escapeHtml(code.slice(lastIndex));
  }

  return out;
}
