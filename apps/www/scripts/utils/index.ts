const ui = [
	{
		name: "accordion",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/accordion.tsx"],
	},
	{
		name: "alert",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/alert.tsx"],
	},
	{
		name: "alert-dialog",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/alert-dialog.tsx"],
		registryDependencies: ["button"],
	},
	{
		name: "badge",
		type: "components:ui",
		files: ["ui/badge.tsx"],
	},
	{
		name: "button",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/button.tsx"],
	},
	{
		name: "card",
		type: "components:ui",
		files: ["ui/card.tsx"],
	},
	{
		name: "carousel",
		type: "components:ui",
		registryDependencies: ["button"],
		dependencies: ["embla-carousel-solid"],
		files: ["ui/carousel.tsx"],
	},
	{
		name: "checkbox",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/checkbox.tsx"],
	},
	{
		name: "collapsible",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/collapsible.tsx"],
	},
	{
		name: "combobox",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/combobox.tsx"],
	},
	{
		name: "command",
		type: "components:ui",
		registryDependencies: ["dialog"],
		dependencies: ["cmdk-solid"],
		files: ["ui/command.tsx"],
	},
	{
		name: "context-menu",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/context-menu.tsx"],
	},
	{
		name: "date-picker",
		type: "components:ui",
		registryDependencies: ["button"],
		dependencies: ["@ark-ui/solid"],
		files: ["ui/date-picker.tsx"],
	},
	{
		name: "dialog",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/dialog.tsx"],
	},
	{
		name: "drawer",
		type: "components:ui",
		dependencies: ["@corvu/drawer"],
		files: ["ui/drawer.tsx"],
	},
	{
		name: "dropdown-menu",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/dropdown-menu.tsx"],
	},
	{
		name: "hover-card",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/hover-card.tsx"],
	},
	{
		name: "image",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/image.tsx"],
	},
	{
		name: "menubar",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/menubar.tsx"],
	},
	{
		name: "number-field",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/number-field.tsx"],
		registryDependencies: ["text-field"],
	},
	{
		name: "otp-field",
		type: "components:ui",
		dependencies: ["@corvu/otp-field"],
		files: ["ui/otp-field.tsx"],
	},
	{
		name: "popover",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/popover.tsx"],
	},
	{
		name: "pagination",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/pagination.tsx"],
		registryDependencies: ["button"],
	},
	{
		name: "progress",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/progress.tsx"],
	},
	{
		name: "radio-group",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/radio-group.tsx"],
	},
	{
		name: "resizable",
		type: "components:ui",
		dependencies: ["@corvu/resizable"],
		files: ["ui/resizable.tsx"],
	},
	{
		name: "select",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/select.tsx"],
	},
	{
		name: "separator",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/separator.tsx"],
	},
	{
		name: "sheet",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/sheet.tsx"],
	},
	{
		name: "skeleton",
		type: "components:ui",
		files: ["ui/skeleton.tsx"],
	},
	{
		name: "sonner",
		type: "components:ui",
		dependencies: ["solid-sonner", "@kobalte/core"],
		files: ["ui/sonner.tsx"],
	},
	{
		name: "switch",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/switch.tsx"],
	},
	{
		name: "table",
		type: "components:ui",
		files: ["ui/table.tsx"],
	},
	{
		name: "tabs",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/tabs.tsx"],
	},
	{
		name: "textfield",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/textfield.tsx"],
	},
	{
		name: "textarea",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		registryDependencies: ["textfield"],
		files: ["ui/textarea.tsx"],
	},
	{
		name: "toast",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/toast.tsx"],
	},
	{
		name: "toggle-group",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/toggle-group.tsx"],
	},
	{
		name: "toggle",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/toggle.tsx"],
	},
	{
		name: "tooltip",
		type: "components:ui",
		dependencies: ["@kobalte/core"],
		files: ["ui/tooltip.tsx"],
	},
];

const example = [
	{
		name: "accordion-demo",
		type: "components:example",
		files: ["examples/accordion-demo.tsx"],
	},
	{
		name: "alert-demo",
		type: "components:example",
		files: ["examples/alert-demo.tsx"],
	},
	{
		name: "alert-destructive",
		type: "components:example",
		files: ["examples/alert-destructive.tsx"],
	},
	{
		name: "alert-dialog-demo",
		type: "components:example",
		files: ["examples/alert-dialog-demo.tsx"],
	},
	{
		name: "button-demo",
		type: "components:example",
		files: ["examples/button-demo.tsx"],
	},
	{
		name: "button-secondary",
		type: "components:example",
		files: ["examples/button-secondary.tsx"],
	},
	{
		name: "button-destructive",
		type: "components:example",
		files: ["examples/button-destructive.tsx"],
	},
	{
		name: "button-outline",
		type: "components:example",
		files: ["examples/button-outline.tsx"],
	},
	{
		name: "badge-demo",
		type: "components:example",
		files: ["examples/badge-demo.tsx"],
	},
	{
		name: "badge-secondary",
		type: "components:example",
		files: ["examples/badge-secondary.tsx"],
	},
	{
		name: "badge-destructive",
		type: "components:example",
		files: ["examples/badge-destructive.tsx"],
	},
	{
		name: "badge-outline",
		type: "components:example",
		files: ["examples/badge-outline.tsx"],
	},
	{
		name: "button-ghost",
		type: "components:example",
		files: ["examples/button-ghost.tsx"],
	},
	{
		name: "button-link",
		type: "components:example",
		files: ["examples/button-link.tsx"],
	},
	{
		name: "button-with-icon",
		type: "components:example",
		files: ["examples/button-with-icon.tsx"],
	},
	{
		name: "calendar-demo",
		type: "components:example",
		files: ["examples/calendar-demo.tsx"],
	},
	{
		name: "button-loading",
		type: "components:example",
		files: ["examples/button-loading.tsx"],
	},
	{
		name: "button-as-child",
		type: "components:example",
		files: ["examples/button-as-child.tsx"],
	},
	{
		name: "card-demo",
		type: "components:example",
		files: ["examples/card-demo.tsx"],
	},
	{
		name: "carousel-demo",
		type: "components:example",
		files: ["examples/carousel-demo.tsx"],
	},
	{
		name: "carousel-size",
		type: "components:example",
		files: ["examples/carousel-size.tsx"],
	},
	{
		name: "carousel-api-demo",
		type: "components:example",
		files: ["examples/carousel-api-demo.tsx"],
	},
	{
		name: "carousel-orientation",
		type: "components:example",
		files: ["examples/carousel-orientation.tsx"],
	},
	{
		name: "carousel-plugin",
		type: "components:example",
		files: ["examples/carousel-plugin.tsx"],
	},
	{
		name: "carousel-spacing",
		type: "components:example",
		files: ["examples/carousel-spacing.tsx"],
	},
	{
		name: "checkbox-demo",
		type: "components:example",
		files: ["examples/checkbox-demo.tsx"],
	},
	{
		name: "checkbox-disabled",
		type: "components:example",
		files: ["examples/checkbox-disabled.tsx"],
	},
	{
		name: "checkbox-with-text",
		type: "components:example",
		files: ["examples/checkbox-with-text.tsx"],
	},
	{
		name: "collapsible-demo",
		type: "components:example",
		files: ["examples/collapsible-demo.tsx"],
	},
	{
		name: "combobox-demo",
		type: "components:example",
		files: ["examples/combobox-demo.tsx"],
	},
	{
		name: "command-demo",
		type: "components:example",
		files: ["examples/command-demo.tsx"],
	},
	{
		name: "command-dialog",
		type: "components:example",
		files: ["examples/command-dialog.tsx"],
	},
	{
		name: "context-menu-demo",
		type: "components:example",
		files: ["examples/context-menu-demo.tsx"],
	},
	{
		name: "date-picker-demo",
		type: "components:example",
		files: ["examples/date-picker-demo.tsx"],
	},
	{
		name: "date-picker-with-range-demo",
		type: "components:example",
		files: ["examples/date-picker-with-range-demo.tsx"],
	},
	{
		name: "dialog-demo",
		type: "components:example",
		files: ["examples/dialog-demo.tsx"],
	},
	{
		name: "drawer-demo",
		type: "components:example",
		files: ["examples/drawer-demo.tsx"],
	},
	{
		name: "dropdown-menu-demo",
		type: "components:example",
		files: ["examples/dropdown-menu-demo.tsx"],
	},
	{
		name: "dropdown-menu-checkboxes",
		type: "components:example",
		files: ["examples/dropdown-menu-checkboxes.tsx"],
	},
	{
		name: "dropdown-menu-radio-group",
		type: "components:example",
		files: ["examples/dropdown-menu-radio-group.tsx"],
	},
	{
		name: "hover-card-demo",
		type: "components:example",
		files: ["examples/hover-card-demo.tsx"],
	},
	{
		name: "image-demo",
		type: "components:example",
		files: ["examples/image-demo.tsx"],
	},
	{
		name: "menubar-demo",
		type: "components:example",
		files: ["examples/menubar-demo.tsx"],
	},
	{
		name: "number-field-demo",
		type: "components:example",
		files: ["examples/number-field-demo.tsx"],
	},
	{
		name: "number-field-disabled-demo",
		type: "components:example",
		files: ["examples/number-field-disabled-demo.tsx"],
	},
	{
		name: "number-field-with-error-demo",
		type: "components:example",
		files: ["examples/number-field-with-error-demo.tsx"],
	},
	{
		name: "otp-field-demo",
		type: "components:example",
		files: ["examples/otp-field-demo.tsx"],
	},
	{
		name: "otp-field-with-pattern-demo",
		type: "components:example",
		files: ["examples/otp-field-with-pattern-demo.tsx"],
	},
	{
		name: "otp-field-with-controlled-demo",
		type: "components:example",
		files: ["examples/otp-field-with-controlled-demo.tsx"],
	},
	{
		name: "popover-demo",
		type: "components:example",
		files: ["examples/popover-demo.tsx"],
	},
	{
		name: "pagination-demo",
		type: "components:example",
		files: ["examples/pagination-demo.tsx"],
	},
	{
		name: "progress-demo",
		type: "components:example",
		files: ["examples/progress-demo.tsx"],
	},
	{
		name: "radio-group-demo",
		type: "components:example",
		files: ["examples/radio-group-demo.tsx"],
	},
	{
		name: "resizable-demo",
		type: "components:example",
		files: ["examples/resizable-demo.tsx"],
	},
	{
		name: "resizable-vertical-demo",
		type: "components:example",
		files: ["examples/resizable-vertical-demo.tsx"],
	},
	{
		name: "resizable-with-handle-demo",
		type: "components:example",
		files: ["examples/resizable-with-handle-demo.tsx"],
	},
	{
		name: "select-demo",
		type: "components:example",
		files: ["examples/select-demo.tsx"],
	},
	{
		name: "separator-demo",
		type: "components:example",
		files: ["examples/separator-demo.tsx"],
	},
	{
		name: "sheet-demo",
		type: "components:example",
		files: ["examples/sheet-demo.tsx"],
	},
	{
		name: "sheet-side",
		type: "components:example",
		files: ["examples/sheet-side.tsx"],
	},
	{
		name: "skeleton-demo",
		type: "components:example",
		files: ["examples/skeleton-demo.tsx"],
	},
	{
		name: "sonner-demo",
		type: "components:example",
		files: ["examples/sonner-demo.tsx"],
	},
	{
		name: "switch-demo",
		type: "components:example",
		files: ["examples/switch-demo.tsx"],
	},
	{
		name: "table-demo",
		type: "components:example",
		files: ["examples/table-demo.tsx"],
	},
	{
		name: "tabs-demo",
		type: "components:example",
		files: ["examples/tabs-demo.tsx"],
	},
	{
		name: "tabs-orientation-demo",
		type: "components:example",
		files: ["examples/tabs-orientation-demo.tsx"],
	},
	{
		name: "textarea-demo",
		type: "components:example",
		files: ["examples/textarea-demo.tsx"],
	},
	{
		name: "textarea-disabled",
		type: "components:example",
		files: ["examples/textarea-disabled.tsx"],
	},
	{
		name: "textarea-with-button",
		type: "components:example",
		files: ["examples/textarea-with-button.tsx"],
	},
	{
		name: "textarea-with-label",
		type: "components:example",
		files: ["examples/textarea-with-label.tsx"],
	},
	{
		name: "textarea-with-text",
		type: "components:example",
		files: ["examples/textarea-with-text.tsx"],
	},
	{
		name: "textfield-demo",
		type: "components:example",
		files: ["examples/textfield-demo.tsx"],
	},
	{
		name: "textfield-disabled",
		type: "components:example",
		files: ["examples/textfield-disabled.tsx"],
	},
	{
		name: "textfield-file",
		type: "components:example",
		files: ["examples/textfield-file.tsx"],
	},
	{
		name: "textfield-with-button",
		type: "components:example",
		files: ["examples/textfield-with-button.tsx"],
	},
	{
		name: "textfield-with-label",
		type: "components:example",
		files: ["examples/textfield-with-label.tsx"],
	},
	{
		name: "textfield-with-text",
		type: "components:example",
		files: ["examples/textfield-with-text.tsx"],
	},
	{
		name: "textfield-with-error",
		type: "components:example",
		files: ["examples/textfield-with-error.tsx"],
	},
	{
		name: "toast-demo",
		type: "components:example",
		files: ["examples/toast-demo.tsx"],
	},
	{
		name: "toast-destructive",
		type: "components:example",
		files: ["examples/toast-destructive.tsx"],
	},
	{
		name: "toggle-group-demo",
		type: "components:example",
		files: ["examples/toggle-group-demo.tsx"],
	},
	{
		name: "toggle-group-outline-demo",
		type: "components:example",
		files: ["examples/toggle-group-outline-demo.tsx"],
	},
	{
		name: "toggle-group-single-demo",
		type: "components:example",
		files: ["examples/toggle-group-single-demo.tsx"],
	},
	{
		name: "toggle-group-small-demo",
		type: "components:example",
		files: ["examples/toggle-group-small-demo.tsx"],
	},
	{
		name: "toggle-group-large-demo",
		type: "components:example",
		files: ["examples/toggle-group-large-demo.tsx"],
	},
	{
		name: "toggle-group-disabled-demo",
		type: "components:example",
		files: ["examples/toggle-group-disabled-demo.tsx"],
	},
	{
		name: "toggle-demo",
		type: "components:example",
		files: ["examples/toggle-demo.tsx"],
	},
	{
		name: "toggle-disabled",
		type: "components:example",
		files: ["examples/toggle-disabled.tsx"],
	},
	{
		name: "toggle-large",
		type: "components:example",
		files: ["examples/toggle-large.tsx"],
	},
	{
		name: "toggle-outline",
		type: "components:example",
		files: ["examples/toggle-outline.tsx"],
	},
	{
		name: "toggle-small",
		type: "components:example",
		files: ["examples/toggle-small.tsx"],
	},
	{
		name: "toggle-with-text",
		type: "components:example",
		files: ["examples/toggle-with-text.tsx"],
	},
	{
		name: "tooltip-demo",
		type: "components:example",
		files: ["examples/tooltip-demo.tsx"],
	},
	{
		name: "typography-blockquote",
		type: "components:example",
		files: ["examples/typography-blockquote.tsx"],
	},
	{
		name: "typography-demo",
		type: "components:example",
		files: ["examples/typography-demo.tsx"],
	},
	{
		name: "typography-h1",
		type: "components:example",
		files: ["examples/typography-h1.tsx"],
	},
	{
		name: "typography-h2",
		type: "components:example",
		files: ["examples/typography-h2.tsx"],
	},
	{
		name: "typography-h3",
		type: "components:example",
		files: ["examples/typography-h3.tsx"],
	},
	{
		name: "typography-h4",
		type: "components:example",
		files: ["examples/typography-h4.tsx"],
	},
	{
		name: "typography-inline-code",
		type: "components:example",
		files: ["examples/typography-inline-code.tsx"],
	},
	{
		name: "typography-large",
		type: "components:example",
		files: ["examples/typography-large.tsx"],
	},
	{
		name: "typography-lead",
		type: "components:example",
		files: ["examples/typography-lead.tsx"],
	},
	{
		name: "typography-list",
		type: "components:example",
		files: ["examples/typography-list.tsx"],
	},
	{
		name: "typography-muted",
		type: "components:example",
		files: ["examples/typography-muted.tsx"],
	},
	{
		name: "typography-p",
		type: "components:example",
		files: ["examples/typography-p.tsx"],
	},
	{
		name: "typography-small",
		type: "components:example",
		files: ["examples/typography-small.tsx"],
	},
	{
		name: "typography-table",
		type: "components:example",
		files: ["examples/typography-table.tsx"],
	},
];

export const registry = [...ui, ...example];
