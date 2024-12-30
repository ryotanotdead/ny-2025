import { ref, onMounted } from 'vue';
import { songs } from './constants';
const randomIndex = ref(0);
const getRandomIndex = () => {
    return Math.floor(Math.random() * songs.length);
};
const checkAndSetRandomIndex = () => {
    const lastUpdated = localStorage.getItem('lastUpdated');
    const currentDate = new Date().toDateString();
    if (lastUpdated === currentDate) {
        randomIndex.value = parseInt(localStorage.getItem('randomIndex') || '0');
    }
    else {
        randomIndex.value = getRandomIndex();
        localStorage.setItem('randomIndex', randomIndex.value.toString());
        localStorage.setItem('lastUpdated', currentDate);
    }
};
onMounted(() => {
    checkAndSetRandomIndex();
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['marquee', 'v-card-with-blur',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("d-flex flex-column align-center justify-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("marquee ") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ style: ({}) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ style: ({}) },
        ...{ class: ("py-3") },
    });
    const __VLS_0 = {}.VCard;
    /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: ("pa-2 rounded-lg v-card-with-blur") },
        ...{ style: ({}) },
        variant: ("outlined"),
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: ("pa-2 rounded-lg v-card-with-blur") },
        ...{ style: ({}) },
        variant: ("outlined"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_6 = {}.VCardTitle;
    /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        ...{ style: ({}) },
    }));
    const __VLS_8 = __VLS_7({
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    (__VLS_ctx.songs[__VLS_ctx.randomIndex].songName);
    __VLS_11.slots.default;
    var __VLS_11;
    const __VLS_12 = {}.VCardSubtitle;
    /** @type { [typeof __VLS_components.VCardSubtitle, typeof __VLS_components.vCardSubtitle, typeof __VLS_components.VCardSubtitle, typeof __VLS_components.vCardSubtitle, ] } */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        ...{ style: ({}) },
    }));
    const __VLS_14 = __VLS_13({
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    (__VLS_ctx.songs[__VLS_ctx.randomIndex].artistName);
    __VLS_17.slots.default;
    var __VLS_17;
    const __VLS_18 = {}.VImg;
    /** @type { [typeof __VLS_components.VImg, typeof __VLS_components.vImg, typeof __VLS_components.VImg, typeof __VLS_components.vImg, ] } */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
        ...{ class: ("rounded-lg") },
        src: ("\u0073\u0072\u0063\u005c\u0061\u0073\u0073\u0065\u0074\u0073\u005c\u0033\u0033\u0033\u002e\u0070\u006e\u0067"),
    }));
    const __VLS_20 = __VLS_19({
        ...{ class: ("rounded-lg") },
        src: ("\u0073\u0072\u0063\u005c\u0061\u0073\u0073\u0065\u0074\u0073\u005c\u0033\u0033\u0033\u002e\u0070\u006e\u0067"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_5.slots.default;
    var __VLS_5;
    const __VLS_24 = {}.VSlideYReverseTransition;
    /** @type { [typeof __VLS_components.VSlideYReverseTransition, typeof __VLS_components.vSlideYReverseTransition, typeof __VLS_components.VSlideYReverseTransition, typeof __VLS_components.vSlideYReverseTransition, ] } */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ style: ({}) },
        ...{ class: ("d-flex flex-column align-center justify-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_30 = {}.SplineViewer;
    /** @type { [typeof __VLS_components.SplineViewer, typeof __VLS_components.splineViewer, typeof __VLS_components.SplineViewer, typeof __VLS_components.splineViewer, ] } */ ;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
        url: ("https://prod.spline.design/nGCrGcjkskMDevKS/scene.splinecode"),
        ...{ style: ({}) },
    }));
    const __VLS_32 = __VLS_31({
        url: ("https://prod.spline.design/nGCrGcjkskMDevKS/scene.splinecode"),
        ...{ style: ({}) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ['d-flex', 'flex-column', 'align-center', 'justify-center', 'marquee', 'py-3', 'pa-2', 'rounded-lg', 'v-card-with-blur', 'rounded-lg', 'd-flex', 'flex-column', 'align-center', 'justify-center',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            songs: songs,
            randomIndex: randomIndex,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
