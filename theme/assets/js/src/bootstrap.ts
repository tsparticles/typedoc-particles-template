import { Application, registerComponent } from "./typedoc/Application";
import { Search } from "./typedoc/components/Search";
import { MenuHighlight } from "./typedoc/components/MenuHighlight";
import { Signature } from "./typedoc/components/Signature";
import { Toggle } from "./typedoc/components/Toggle";
import { Filter } from "./typedoc/components/Filter";
import { initParticles } from "./particles";

import '../../css/main.sass'
import { tsParticles } from "tsparticles";
import { Container } from "tsparticles/dist/Core/Container";

registerComponent(Search, '#tsd-search');

registerComponent(MenuHighlight, '.menu-highlight');
registerComponent(Signature, '.tsd-signatures');
registerComponent(Toggle, 'a[data-toggle]');

if (Filter.isSupported()) {
    registerComponent(Filter, '#tsd-filter');
} else {
    document.documentElement.classList.add('no-filter');
}

const app: Application = new Application();

Object.defineProperty(window, 'app', { value: app });

const animationsToggle = document.querySelector("#tsd-animations") as HTMLInputElement;

// This motion handling will be replaced with tsParticles 1.18.0
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (animationsToggle) {
    animationsToggle.addEventListener("change", () => {
        const container = tsParticles.domItem(0);

        localStorage.setItem("animations", JSON.stringify(animationsToggle.checked));

        if (animationsToggle.checked) {
            if (!container) {
                initParticles();
            } else {
                container.refresh();
            }

            handleMotionChange(mediaQuery);
        } else {
            container?.destroy();
        }
    });

    const animationsSaved = localStorage.getItem("animations");
    const animationsEnabled = animationsSaved ? JSON.parse(animationsSaved) : !mediaQuery.matches;

    animationsToggle.checked = animationsEnabled;

    localStorage.setItem("animations", JSON.stringify(animationsEnabled));

    var evt = document.createEvent("HTMLEvents");

    evt.initEvent("change", false, true);

    animationsToggle.dispatchEvent(evt);
}

if (animationsToggle.checked) {
    // Check if the media query matches or is not available.
    handleMotionChange(mediaQuery);
}

// Ads an event listener to check for changes in the media query's value.
mediaQuery.addEventListener("change", async () => {
    handleMotionChange(mediaQuery);
});

function handleMotionChange(mediaQuery: MediaQueryList): void {
    if (animationsToggle.checked) {
        if (mediaQuery.matches) {
            tsParticles.domItem(0)?.destroy();
        } else {
            initParticles();
        }
    } else {
        tsParticles.domItem(0)?.destroy();
    }
}
