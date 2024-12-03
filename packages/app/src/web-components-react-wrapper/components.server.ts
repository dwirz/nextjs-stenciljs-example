/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * Do __not__ import components from this file as server side rendered components
 * may not hydrate due to missing Stencil runtime. Instead, import these components through the generated 'components.ts'
 * file that re-exports all components with the 'use client' directive.
 */

/* eslint-disable */

import type { StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent, createSSRComponent } from '@stencil/react-output-target/runtime';
import { AbcCheckbox as AbcCheckboxElement, defineCustomElement as defineAbcCheckbox } from "abc-web-components/./dist/components/abc-checkbox.js";
import { AbcInput as AbcInputElement, defineCustomElement as defineAbcInput } from "abc-web-components/./dist/components/abc-input.js";
import React from 'react';

type AbcCheckboxEvents = NonNullable<unknown>;

export const AbcCheckbox: StencilReactComponent<AbcCheckboxElement, AbcCheckboxEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<AbcCheckboxElement, AbcCheckboxEvents>({
        tagName: 'abc-checkbox',
        elementClass: AbcCheckboxElement,
        // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
        react: React,
        events: {} as AbcCheckboxEvents,
        defineCustomElement: defineAbcCheckbox
    })
    : /*@__PURE__*/ createSSRComponent<AbcCheckboxElement, AbcCheckboxEvents>({
        tagName: 'abc-checkbox',
        properties: {},
        hydrateModule: import('abc-web-components/hydrate')
    });

type AbcInputEvents = NonNullable<unknown>;

export const AbcInput: StencilReactComponent<AbcInputElement, AbcInputEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<AbcInputElement, AbcInputEvents>({
        tagName: 'abc-input',
        elementClass: AbcInputElement,
        // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
        react: React,
        events: {} as AbcInputEvents,
        defineCustomElement: defineAbcInput
    })
    : /*@__PURE__*/ createSSRComponent<AbcInputElement, AbcInputEvents>({
        tagName: 'abc-input',
        properties: {},
        hydrateModule: import('abc-web-components/hydrate')
    });
