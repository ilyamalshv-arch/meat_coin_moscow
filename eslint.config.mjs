import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const spacingUtilities = [
  "min-w",
  "max-w",
  "min-h",
  "max-h",
  "gap-x",
  "gap-y",
  "inset-x",
  "inset-y",
  "translate-x",
  "translate-y",
  "basis",
  "size",
  "gap",
  "w",
  "h",
  "m",
  "mx",
  "my",
  "mt",
  "mr",
  "mb",
  "ml",
  "p",
  "px",
  "py",
  "pt",
  "pr",
  "pb",
  "pl",
  "inset",
  "top",
  "right",
  "bottom",
  "left",
];

const spacingUtilityPattern = new RegExp(
  `^(-?)(${spacingUtilities.join("|")})-\\[(\\d+(?:\\.\\d+)?)px\\]$`,
);

function formatSpacingToken(value) {
  return Number.isInteger(value)
    ? String(value)
    : String(Number(value.toFixed(4)));
}

function convertArbitrarySpacingClass(className) {
  return className
    .split(/\s+/)
    .map((token) => {
      const variantSeparatorIndex = token.lastIndexOf(":");
      const variants =
        variantSeparatorIndex === -1
          ? ""
          : token.slice(0, variantSeparatorIndex + 1);
      const utility =
        variantSeparatorIndex === -1
          ? token
          : token.slice(variantSeparatorIndex + 1);
      const match = utility.match(spacingUtilityPattern);

      if (!match) {
        return token;
      }

      const [, negative, utilityName, pxValue] = match;
      const spacingValue = Number(pxValue) / 4;

      return `${variants}${negative}${utilityName}-${formatSpacingToken(spacingValue)}`;
    })
    .join(" ");
}

const tailwindLocalRules = {
  rules: {
    "prefer-spacing-scale": {
      meta: {
        type: "suggestion",
        fixable: "code",
        docs: {
          description:
            "Prefer Tailwind spacing scale classes over arbitrary px spacing values.",
        },
        schema: [],
      },
      create(context) {
        function checkStringNode(node, value, range) {
          const convertedValue = convertArbitrarySpacingClass(value);

          if (convertedValue === value) {
            return;
          }

          context.report({
            node,
            message:
              "Replace arbitrary Tailwind px spacing value with a spacing scale class.",
            fix(fixer) {
              return fixer.replaceTextRange(range, convertedValue);
            },
          });
        }

        return {
          JSXAttribute(node) {
            if (node.name.name !== "className" || !node.value) {
              return;
            }

            if (
              node.value.type === "Literal" &&
              typeof node.value.value === "string"
            ) {
              checkStringNode(node.value, node.value.value, [
                node.value.range[0] + 1,
                node.value.range[1] - 1,
              ]);
            }

            const expression = node.value.expression;

            if (
              expression?.type === "TemplateLiteral" &&
              expression.expressions.length === 0
            ) {
              checkStringNode(expression, expression.quasis[0].value.raw, [
                expression.range[0] + 1,
                expression.range[1] - 1,
              ]);
            }
          },
        };
      },
    },
  },
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      "tailwind-local": tailwindLocalRules,
    },
    rules: {
      "tailwind-local/prefer-spacing-scale": "warn",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
