/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Gear } from "./interfaces";
export namespace Components {
    interface AppRoot {
        "gearById": any;
        "gearid": string;
    }
    interface GgAddGearToRequest {
        "date": string;
        "gearById": string;
        "periodFilming": string;
    }
    interface GgAuth {
    }
    interface GgCheckinout {
        "gearById": any;
        "gearid": string;
    }
    interface GgDirectory {
    }
    interface GgEditRequest {
        "addGear": (gear: Gear) => Promise<void>;
        "gearById": string;
        "modalCtrl": HTMLIonModalElement;
    }
    interface GgGear {
        "gearById": string;
    }
    interface GgGearView {
        "gearById": any;
        "gearid": string;
    }
    interface GgHome {
    }
    interface GgNewBadge {
    }
    interface GgNewGear {
        "modalCtrl": HTMLIonModalElement;
    }
    interface GgNewRequest {
        "addGear": (gear: Gear) => Promise<void>;
        "gearById": string;
        "modalCtrl": HTMLIonModalElement;
    }
    interface GgProfile {
    }
    interface GgRequests {
        "addGear": (gear: any) => Promise<void>;
        "gearById": string;
    }
    interface GgTeacherView {
        "gearById": string;
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLGgAddGearToRequestElement extends Components.GgAddGearToRequest, HTMLStencilElement {
    }
    var HTMLGgAddGearToRequestElement: {
        prototype: HTMLGgAddGearToRequestElement;
        new (): HTMLGgAddGearToRequestElement;
    };
    interface HTMLGgAuthElement extends Components.GgAuth, HTMLStencilElement {
    }
    var HTMLGgAuthElement: {
        prototype: HTMLGgAuthElement;
        new (): HTMLGgAuthElement;
    };
    interface HTMLGgCheckinoutElement extends Components.GgCheckinout, HTMLStencilElement {
    }
    var HTMLGgCheckinoutElement: {
        prototype: HTMLGgCheckinoutElement;
        new (): HTMLGgCheckinoutElement;
    };
    interface HTMLGgDirectoryElement extends Components.GgDirectory, HTMLStencilElement {
    }
    var HTMLGgDirectoryElement: {
        prototype: HTMLGgDirectoryElement;
        new (): HTMLGgDirectoryElement;
    };
    interface HTMLGgEditRequestElement extends Components.GgEditRequest, HTMLStencilElement {
    }
    var HTMLGgEditRequestElement: {
        prototype: HTMLGgEditRequestElement;
        new (): HTMLGgEditRequestElement;
    };
    interface HTMLGgGearElement extends Components.GgGear, HTMLStencilElement {
    }
    var HTMLGgGearElement: {
        prototype: HTMLGgGearElement;
        new (): HTMLGgGearElement;
    };
    interface HTMLGgGearViewElement extends Components.GgGearView, HTMLStencilElement {
    }
    var HTMLGgGearViewElement: {
        prototype: HTMLGgGearViewElement;
        new (): HTMLGgGearViewElement;
    };
    interface HTMLGgHomeElement extends Components.GgHome, HTMLStencilElement {
    }
    var HTMLGgHomeElement: {
        prototype: HTMLGgHomeElement;
        new (): HTMLGgHomeElement;
    };
    interface HTMLGgNewBadgeElement extends Components.GgNewBadge, HTMLStencilElement {
    }
    var HTMLGgNewBadgeElement: {
        prototype: HTMLGgNewBadgeElement;
        new (): HTMLGgNewBadgeElement;
    };
    interface HTMLGgNewGearElement extends Components.GgNewGear, HTMLStencilElement {
    }
    var HTMLGgNewGearElement: {
        prototype: HTMLGgNewGearElement;
        new (): HTMLGgNewGearElement;
    };
    interface HTMLGgNewRequestElement extends Components.GgNewRequest, HTMLStencilElement {
    }
    var HTMLGgNewRequestElement: {
        prototype: HTMLGgNewRequestElement;
        new (): HTMLGgNewRequestElement;
    };
    interface HTMLGgProfileElement extends Components.GgProfile, HTMLStencilElement {
    }
    var HTMLGgProfileElement: {
        prototype: HTMLGgProfileElement;
        new (): HTMLGgProfileElement;
    };
    interface HTMLGgRequestsElement extends Components.GgRequests, HTMLStencilElement {
    }
    var HTMLGgRequestsElement: {
        prototype: HTMLGgRequestsElement;
        new (): HTMLGgRequestsElement;
    };
    interface HTMLGgTeacherViewElement extends Components.GgTeacherView, HTMLStencilElement {
    }
    var HTMLGgTeacherViewElement: {
        prototype: HTMLGgTeacherViewElement;
        new (): HTMLGgTeacherViewElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "gg-add-gear-to-request": HTMLGgAddGearToRequestElement;
        "gg-auth": HTMLGgAuthElement;
        "gg-checkinout": HTMLGgCheckinoutElement;
        "gg-directory": HTMLGgDirectoryElement;
        "gg-edit-request": HTMLGgEditRequestElement;
        "gg-gear": HTMLGgGearElement;
        "gg-gear-view": HTMLGgGearViewElement;
        "gg-home": HTMLGgHomeElement;
        "gg-new-badge": HTMLGgNewBadgeElement;
        "gg-new-gear": HTMLGgNewGearElement;
        "gg-new-request": HTMLGgNewRequestElement;
        "gg-profile": HTMLGgProfileElement;
        "gg-requests": HTMLGgRequestsElement;
        "gg-teacher-view": HTMLGgTeacherViewElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
        "gearById"?: any;
        "gearid"?: string;
    }
    interface GgAddGearToRequest {
        "date"?: string;
        "gearById"?: string;
        "periodFilming"?: string;
    }
    interface GgAuth {
    }
    interface GgCheckinout {
        "gearById"?: any;
        "gearid"?: string;
    }
    interface GgDirectory {
    }
    interface GgEditRequest {
        "gearById"?: string;
        "modalCtrl"?: HTMLIonModalElement;
    }
    interface GgGear {
        "gearById"?: string;
    }
    interface GgGearView {
        "gearById"?: any;
        "gearid"?: string;
    }
    interface GgHome {
    }
    interface GgNewBadge {
    }
    interface GgNewGear {
        "modalCtrl"?: HTMLIonModalElement;
    }
    interface GgNewRequest {
        "gearById"?: string;
        "modalCtrl"?: HTMLIonModalElement;
    }
    interface GgProfile {
    }
    interface GgRequests {
        "gearById"?: string;
    }
    interface GgTeacherView {
        "gearById"?: string;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "gg-add-gear-to-request": GgAddGearToRequest;
        "gg-auth": GgAuth;
        "gg-checkinout": GgCheckinout;
        "gg-directory": GgDirectory;
        "gg-edit-request": GgEditRequest;
        "gg-gear": GgGear;
        "gg-gear-view": GgGearView;
        "gg-home": GgHome;
        "gg-new-badge": GgNewBadge;
        "gg-new-gear": GgNewGear;
        "gg-new-request": GgNewRequest;
        "gg-profile": GgProfile;
        "gg-requests": GgRequests;
        "gg-teacher-view": GgTeacherView;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "gg-add-gear-to-request": LocalJSX.GgAddGearToRequest & JSXBase.HTMLAttributes<HTMLGgAddGearToRequestElement>;
            "gg-auth": LocalJSX.GgAuth & JSXBase.HTMLAttributes<HTMLGgAuthElement>;
            "gg-checkinout": LocalJSX.GgCheckinout & JSXBase.HTMLAttributes<HTMLGgCheckinoutElement>;
            "gg-directory": LocalJSX.GgDirectory & JSXBase.HTMLAttributes<HTMLGgDirectoryElement>;
            "gg-edit-request": LocalJSX.GgEditRequest & JSXBase.HTMLAttributes<HTMLGgEditRequestElement>;
            "gg-gear": LocalJSX.GgGear & JSXBase.HTMLAttributes<HTMLGgGearElement>;
            "gg-gear-view": LocalJSX.GgGearView & JSXBase.HTMLAttributes<HTMLGgGearViewElement>;
            "gg-home": LocalJSX.GgHome & JSXBase.HTMLAttributes<HTMLGgHomeElement>;
            "gg-new-badge": LocalJSX.GgNewBadge & JSXBase.HTMLAttributes<HTMLGgNewBadgeElement>;
            "gg-new-gear": LocalJSX.GgNewGear & JSXBase.HTMLAttributes<HTMLGgNewGearElement>;
            "gg-new-request": LocalJSX.GgNewRequest & JSXBase.HTMLAttributes<HTMLGgNewRequestElement>;
            "gg-profile": LocalJSX.GgProfile & JSXBase.HTMLAttributes<HTMLGgProfileElement>;
            "gg-requests": LocalJSX.GgRequests & JSXBase.HTMLAttributes<HTMLGgRequestsElement>;
            "gg-teacher-view": LocalJSX.GgTeacherView & JSXBase.HTMLAttributes<HTMLGgTeacherViewElement>;
        }
    }
}
