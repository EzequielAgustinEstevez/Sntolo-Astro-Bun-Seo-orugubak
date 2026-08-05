import eslintPluginAstro from "eslint-plugin-astro"
import jsxA11y from "eslint-plugin-jsx-a11y"
import tseslint from "typescript-eslint"

export default tseslint.config(
	{
		ignores: ["dist/**", "node_modules/**", "public/media/**", ".astro/**"]
	},
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs["flat/recommended"],
	...eslintPluginAstro.configs["flat/jsx-a11y-strict"],
	{
		plugins: {
			"jsx-a11y": jsxA11y
		},
		rules: {
			"astro/no-set-text-directive": "error",
			"astro/no-unused-css-selector": "error",
			"astro/prefer-class-list-directive": "error"
		}
	}
)
