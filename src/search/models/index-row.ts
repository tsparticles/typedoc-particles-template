/**
 * @packageDocumentation
 * @module Search
 */

// TODO: document this
export interface IndexDataRow {
	id: number;
	kind: number;
	name: string;
	url: string;
	classes: string;
	parent?: string;
	particlesPluginContent?: string;
	particlesPluginParent?: string;
}
